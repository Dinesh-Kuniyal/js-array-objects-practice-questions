// even numbers [1, 2, 3, 4, 5] => [2, 4]
const isEven = function (number) {
  return number % 2 === 0;
};

const filterEvenNumbers = function (numbers) {
  return numbers.filter(isEven);
};

console.log(filterEvenNumbers([]));
console.log(filterEvenNumbers([1, 2, 3, 4]));
console.log(filterEvenNumbers([1, 3, 5, 7]));
console.log(filterEvenNumbers([2, 4, 6, 8]));

console.log = function () { };