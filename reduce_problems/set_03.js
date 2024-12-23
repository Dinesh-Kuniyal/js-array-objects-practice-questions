// invertObject({ "a": 1, "b": 2, "c": 3 }) => { 1: "a", 2: "b", 3: "c" }
const invertObject = function (obj) {
  const keys = Object.keys(obj);

  return keys.reduce((result, key) => {
    const keyName = obj[key];

    const resultObject = { ...result };
    resultObject[keyName] = key;

    return resultObject;
  }, {});
};

console.log(invertObject({ a: 1, b: 2, c: 3 }));
console.log = () => {};

// mergeObjects([{ a: 1, b: 2 }, { b: 3, c: 4 }, { a: 5 }]) => { a: 6, b: 5, c: 4 }
const mergeObjects = function (objects) {
  return objects.reduce((result, object) => {
    const keys = Object.keys(object);

    return keys.reduce((objectResult, key) => {
      const result = { ...objectResult };
      const prevValue = (key in result && result[key]) || 0;
      result[key] = prevValue + object[key];

      return result;
    }, result);
  }, {});
};

console.log(
  mergeObjects([{ a: 1, b: 2 }, { b: 3, c: 4, z: 2 }, { a: 5 }, { z: 1 }])
);

// sumAndCount([1, 2, 3, 4]) => { sum: 10, count: 4 }
const sumAndCount = function (numbers) {
  return numbers.reduce(
    (result, number) => {
      return {
        sum: result.sum + number,
        count: result.count + 1,
      };
    },
    { sum: 0, count: 0 }
  );
};

console.log(sumAndCount([1, 2, 3, 4]));
console.log(sumAndCount([1, 2, 3, 4, 5]));

// concatenateWords(["hello", "world"]) => "helloworld"
const concatenateWords = function (words) {
  return words.reduce((result, word) => result + word, "");
};

console.log(concatenateWords(["hello", "world"]));

// longestWord(["apple", "banana", "cherry", "kiwi"]) => "banana"
const longestWord = function (words) {
  return words.reduce(
    (longest, word) => {
      return word.length > longest.length ? word : longest;
    },
    { length: -Infinity }
  );
};

console.log(longestWord(["apple", "banana", "cherry", "kiwi"]));
