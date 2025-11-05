// Question 3
// 3.a
import first from "./myFirst.js";
import second from "./mySecond.js";

// 3.b
console.log(first(5));
console.log(second(5));

// Question 4
import fs from "fs";

const data1 = `The value of 14 when passed is => ${first(14)}`;
const data2 = `\nThe value of 14 when passed is => ${first(14)}`;

fs.writeFile("results.txt", data1, (err) => {
  if (err) return console.log(err.message);
  fs.appendFile("results.txt", data2, (err) => {
    if (err) return console.log(err.message);
    console.log("file written and appended successfully");
  });
});