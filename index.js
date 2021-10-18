import express from "express";
const app = express();
import fetch from "node-fetch";
import cors from "cors";

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello To The API");
});

app.get("/repo", async (req, res) => {
  const response = await fetch();
  const data = await response.json(process.env.REPO_API);

  res.json(data);
});

app.get("/developers", async (req, res) => {
  const response = await fetch(process.env.DEV_API);

  const data = await response.json();

  res.json(data);
});

app.listen(process.env.PORT, () => {
  console.log("server started");
});
