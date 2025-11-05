import http from "http";

// === === Question 6 === ===
//=> 6.a
http
  .createServer((_, res) => {
    // => 6.c
    res.end("Request received and processed");
  })
  .listen(1234, () => console.log("server running..."));
