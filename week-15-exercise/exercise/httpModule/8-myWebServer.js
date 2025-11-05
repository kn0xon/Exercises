import http from "http";
import fs from "fs";
// === === Question 8 === ===
//=> 8.a
http
  .createServer((req, res) => {
    //=> 8.c
    // res.end(fs.readFileSync("./static/about.html"));
    //=> 8.e
    const filePath = req.url === "/" ? "/index.html" : req.url;
    fs.readFile(`static/${filePath}`, (err, data) => {
      if(err) res.end("page not found")
      else res.end(data);
    });
  })
  .listen(1234, () => console.log("server running..."));
