import http from "http";
import random from "randomNumber.js";

// === === Question 7 === ===
//=> 7.a
http
  .createServer((_, res) => {
    res.end(random(10, 100).toString());
  })
  .listen(1234, () => console.log("server running..."));
