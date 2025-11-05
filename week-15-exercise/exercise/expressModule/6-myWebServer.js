import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("request recieved and processed.")
});

app.listen(1234, () => console.log("listening on port 1234..."));