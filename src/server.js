import express from "express";

const app = express();

const hostname = "localhost";
const port = 1818;

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(port, hostname, () => {
  console.log(`Hello Thanh! http://${hostname}:${port}`);
});
