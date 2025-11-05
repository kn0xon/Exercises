// === Question 1 ===
//=> 1.a
console.log("My first module");

//=> 1.c
const myMultiplier = (num) => 2 * num;

//=> 1.d && 1.e
const twice = myMultiplier(4);
console.log(twice);

// => 1.f
export default myMultiplier;
