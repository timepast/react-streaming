import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

// 生成 __dirname 等效值
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: "production",
  entry: {
    index: "./src/index.js", // 主入口，包含 React 和 ReactDOM
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js", // 只输出一个 client.js 文件
    publicPath: "/dist/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  optimization: {
    splitChunks: false, // 禁用模块拆分，所有内容打包到 client.js
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      inject: "body", // 将脚本插入到 body 底部
      minify: {
        // 👇 禁用注释移除
        removeComments: false,
        collapseWhitespace: false, // 可选，压缩空白字符
        keepClosingSlash: true, // 保留单标签的闭合斜杠
        removeRedundantAttributes: false, // 不移除多余的属性
      },
    }),
    new MiniCssExtractPlugin({
      filename: "index.css",
    }),
  ],
};
