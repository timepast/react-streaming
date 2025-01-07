import express from "express";
import { render } from "./render.js";

const app = express();
const PORT = 3000;

// 处理渲染请求
app.get("/", async (req, res) => {
  render(req.url, res);
});

// 提供静态文件
app.use(express.static("."));

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
