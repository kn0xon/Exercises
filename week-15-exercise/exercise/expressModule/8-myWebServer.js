import express from "express";

const app = express();

app.use(express.static("../httpModule/static"))

app.get("/about", (req, res) => {
  res.sendFile("../httpModule/static/about.html");    
})

app.listen(1234, () => console.log("server running..."));
