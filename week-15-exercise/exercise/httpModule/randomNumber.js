// === === Question 5 === ===
//=> 5.a
const random = (a, b) => Math.round(Math.random() * (b - a) + a);

//=> 5.b && 5.c
console.log(random(3, 20));

//=> 5.d
export default random;