/**
 * Returns a random number between two numbers.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */
 const randomNumber = (lower = 1, upper = 6) => {
  if(isNaN(lower) || isNaN(upper)){
  throw Error (`Both values should be numbers`);
  }
return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}
// Call the function and pass it different values

console.log(randomNumber('six', 5));
console.log(randomNumber(10, 100));
console.log(randomNumber(200, 500));

