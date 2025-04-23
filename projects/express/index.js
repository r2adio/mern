import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("welcome to root dir of my app.");
});

app.get("/electronics", (req, res) => {
  res.send("you entered the electronics section of our store");
});

app.listen(port, () => {
  console.log(`Server is running at port: ${port} ...`);
});
