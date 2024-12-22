// makeObject(["city", "country"], ["Paris", "France"]) => { "city": "Paris", "country": "France" }
const makeObject = function (keys, values) {
  const remaining = [...values];

  return keys.reduce(function (existingObject, key) {
    const object = { ...existingObject };
    object[key] = remaining[0];
    remaining.shift();

    return object;
  }, {});
};

console.log(makeObject(["city", "country"], ["Paris", "France"]));
console.log(makeObject(["city"], ["Delhi"]));

console.log = () => { };

// groupByFirstLetter(["apple", "banana", "cherry", "date"]) => { a: ["apple"], b: ["banana"], c: ["cherry"], d: ["date"] }
const groupByFirstLetter = function (words) {
  return words.reduce(function (prev, word) {
    const initial = word[0];
    const group = { ...prev };

    const existing = (initial in prev && [...group[initial], word]) || [word];
    group[initial] = existing;

    return group;
  }, {});
};

console.log(groupByFirstLetter(["apple", "banana", "cherry", "date"]));
console.log(groupByFirstLetter(["apple", "banana", "cherry", "date", "chocolate"]));

const countFrequency = function (array, element) {
  return array.reduce(function (frequency, number) {
    return number === element ? frequency + 1 : frequency;
  }, 0);
};

// countVowels(["apple", "banana", "grape"]) => { a: 6, e: 3, i: 0, o: 0, u: 0 }

const countVowels = function (words) {
  const vowels = 'aeiou';

  return words.reduce(function (vowelsCount, word) {
    return [...vowels].reduce(function (vowelsCount, vowel) {
      const count = { ...vowelsCount };
      count[vowel] = (count[vowel] || 0) + countFrequency([...word], vowel);

      return count;
    }, vowelsCount);
  }, {});
};

console.log(countVowels(["apple", "banana", "grape"]));
console.log(countVowels(["happy", "henry", "again"]));