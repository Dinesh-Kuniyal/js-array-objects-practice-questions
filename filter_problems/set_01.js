// Find items in an inventory whose quantity is greater than 10 based on the lookup object.
// Input: ["item1", "item2", "item3"], { "item1": { quantity: 15 }, "item2": { quantity: 5 }, "item3": { quantity: 20 } }
// Output: ["item1", "item3"]

const isInEnoughQuantity = function (lookup, threshhold) {

  return function (itemName) {
    return (itemName in lookup && lookup[itemName].quantity) > threshhold;
  };
};

const findInStockItems = function (items, lookup) {
  return items.filter(isInEnoughQuantity(lookup, 10));
};

console.log(findInStockItems(["item1", "item2", "item3"],
  {
    "item1": { quantity: 15 },
    "item2": { quantity: 5 },
    "item3": { quantity: 20 }
  }));

console.log(findInStockItems(["item1", "item2", "item3"],
  {
    "item1": { quantity: 5 },
    "item3": { quantity: 20 }
  }));

console.log = function () { };

// Find animals whose habitat matches the required type from the lookup object.
// Input: ["Lion", "Elephant", "Shark"], { "Lion": { habitat: "Jungle" }, "Elephant": { habitat: "Jungle" }, "Shark": { habitat: "Ocean" } } , "Jungle"
// Output: ["Lion", "Elephant"]

const isAnimalBelongToHabitat = function (lookup, habitat) {

  return function (animal) {
    const animalHabitat = animal in lookup && lookup[animal].habitat || '';

    return animalHabitat === habitat;
  };
};

const findAnimalsByHabitat = function (animals, lookup, habitat) {
  return animals.filter(isAnimalBelongToHabitat(lookup, habitat));
};

console.log(findAnimalsByHabitat(
  ["Lion", "Elephant", "Shark"],
  {
    "Lion": { habitat: "Jungle" },
    "Elephant": { habitat: "Jungle" },
    "Shark": { habitat: "Ocean" }
  },
  "Jungle"));

console.log(findAnimalsByHabitat(
  ["Lion", "Elephant", "Shark", "Tigris"],
  {
    "Lion": { habitat: "Jungle" },
    "Elephant": { habitat: "Jungle" },
    "Tigris": { habitat: "Jungle" }
  },
  "Jungle"));

// active users [{use2,rname: "alice", active: true}, {username: "bob", active: false}] => [{username: "alice", active: true}]
const isUserActive = function (user) {
  return user.active;
};

const filterActiveUsers = function (users) {
  return users.filter(isUserActive);
};

console.log(filterActiveUsers([]));
console.log(filterActiveUsers([{ username: "alice", active: true }, { username: "bob", active: false }]));
console.log(filterActiveUsers([{ username: "alice", active: true }, { username: "bob", active: true }]));
console.log(filterActiveUsers([{ username: "alice", active: false }, { username: "bob", active: false }]));

// people older than 30 [{name: "Alice", age: 25}, {name: "Bob", age: 35}] => [{name: "Bob", age: 35}]
const isPersonAdult = function (person) {
  return person.age > 30;
};

const filterAdults = function (people) {
  return people.filter(isPersonAdult);
};

console.log(filterAdults([]));
console.log(filterAdults([{ name: "Alice", age: 25 }, { name: "Bob", age: 35 }]));
console.log(filterAdults([{ name: "Alice", age: 25 }, { name: "Bob", age: 20 }]));
console.log(filterAdults([{ name: "Alice", age: 35 }, { name: "Bob", age: 45 }]));

// words with more than 5 letters ["apple", "banana", "kiwi", "grape"] => ["banana"]
const isStringLong = function (string) {
  return string.length > 5;
};

const filterLongWords = function (words) {
  return words.filter(isStringLong);
};

console.log(filterLongWords([]));
console.log(filterLongWords(["apple", "banana", "kiwi", "grape"]));
console.log(filterLongWords(["apple", "kiwi", "grape"]));
console.log(filterLongWords(["banana", "pineapple"]));

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