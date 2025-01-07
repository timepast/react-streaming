import express from "express";
import { render } from "./render.js";

const app = express();
const PORT = 3000;

// handle render request
app.get("/", async (req, res) => {
  render(req.url, res);
});

// Static files are provided
app.use(express.static("."));

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
