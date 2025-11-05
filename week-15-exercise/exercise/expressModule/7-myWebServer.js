import express from "express";
import random from "../httpModule/randomNumber.js";

const app = express();

app.get("/", (_, res) => {
  res.send(random(10, 100).toString());
});

app.listen(1234, () => console.log("server running..."));
