import * as React from "react";
import { renderToPipeableStream } from "react-dom/server";
import fs from "fs";
import path from "path";
import App from "../dist/src/App.js";
import { DataProvider } from "../dist/src/data.js";

export function render(url, res) {
  const data = createServerData();
  let indexHtml = fs.readFileSync(path.resolve("./dist/index.html"), "utf-8");
  const [preContent, afterContent] = indexHtml.split("<!--app-->");

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.write(preContent);

  const appElement = React.createElement(
    DataProvider,
    { data },
    React.createElement(App)
  );

  const { pipe, abort } = renderToPipeableStream(appElement, {
    onShellReady() {
      pipe(res);
    },
    onAllReady() {
      const initData = data.read();
      const initDataScript = `
        <script>
          window.__INITIAL_DATA__ = ${JSON.stringify(initData)};
        </script>
      `;
      res.write(initDataScript);
      res.write(afterContent);

      // 🚨 注意：不要手动调用 res.end()
      // 交由流来管理响应关闭
      // res.end();
    },
    onShellError() {
      console.error("Shell Error: ", error);
      res.status(500).send("Internal Server Error");
    },
    onError(err) {
      console.log("❌ Error: ", err);
    },
  });
}

function createServerData() {
  let status = "pending";
  let result = null;

  const promise = new Promise((resolve) => {
    setTimeout(() => {
      result = {
        comments: [
          "This is a server-side comment!",
          "Another server-side comment!",
        ],
      };
      status = "success";
      resolve();
    }, 500); // 模拟异步数据请求
  });

  return {
    read() {
      if (status === "pending") {
        throw promise; // Suspense 将捕获这个 promise
      }
      if (status === "success") {
        return result;
      }
    },
  };
}
