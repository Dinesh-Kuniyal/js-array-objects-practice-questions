// shortestWord(["apple", "banana", "cherry", "kiwi"]) => "kiwi"
const shortestWord = function (words) {
  return words.reduce(function (shortestWord, word) {
    return word.length < shortestWord.length ? word : shortestWord;
  }, { length: Infinity });
};

console.log(shortestWord(["apple", "banana", "cherry", "kiwi"]));
console.log = () => { };

// joinWordsWithSpace(["apple", "banana", "cherry"]) => "apple banana cherry"
const joinWordsWithSpace = function (words) {
  return words.reduce(function (wordsWithSpace, word) {
    return wordsWithSpace.concat(word + ' ');
  }, '').trim();;
};

console.log(joinWordsWithSpace(["apple", "banana", "cherry"]).trim());

// countVowelsInWords(["hello", "world"]) => "eoo"
const isVowel = function (letter) {
  const vowels = 'aeiouAEIOU';

  return [...vowels].some(function (vowel) {
    return vowel === letter;
  });
};

const extractVowels = function (word) {
  return [...word].reduce(function (vowels, letter) {

    return isVowel(letter) ? vowels + letter : vowels;
  }, '');
};

const countVowelsInWords = function (words) {
  return words.reduce(function (vowlesInWord, word) {
    return vowlesInWord + extractVowels(word);
  }, '');
};

console.log(countVowelsInWords(["hello", "world"]));
console.log(countVowelsInWords(["henry", "happy", "again"]));
console.log = () => { };

// makeCamelCase(["hello", "world", "how", "are", "you"]) => "helloWorldHowAreYou"
const makeCamelCase = function (words) {
  const capitalize = words.reduce(function (capitalizeWord, word) {
    const [initial, ...restWord] = [...word];

    return capitalizeWord + initial.toUpperCase() + restWord.join('');
  }, '');

  const [initial, ...restWord] = [...capitalize];

  return initial.toLowerCase() + restWord.join('');
};

console.log(makeCamelCase(["hello", "world", "how", "are", "you"]));
console.log(makeCamelCase(['namaste', 'duniya']));

// reverseString(["apple", "banana", "cherry"]) => "elppaananabyrrehc"
const reverseString = function (words) {
  return words.reduce(function (reverseWord, word) {
    return reverseWord.concat([...word].reverse().join(''));
  }, '');
};

console.log(reverseString(['ab', 'bc', 'de']));
console.log(reverseString(["apple", "banana", "cherry"]));

// flattenArray([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const flattenArray = function (arrays) {
  return arrays.reduce(function (flattenArray, subArray) {
    return [...flattenArray, ...subArray];
  }, []);
};

console.log(flattenArray([[1, 2], [3, 4], [5, 6]]));
console.log(flattenArray([[1], [3, 4], [5, 6, 8], []]));

const countFrequency = function (array, element) {
  return array.reduce(function (frequency, number) {
    return number === element ? frequency + 1 : frequency;
  }, 0);
};

// countOccurrences(["apple", "banana", "cherry", "banana"]) => { apple: 1, banana: 2, cherry: 1 }
const countOccurrences = function (strings) {
  return strings.reduce(function (previousObject, string) {
    const object = { ...previousObject };
    const occurences = string in previousObject ? previousObject[string] : countFrequency(strings, string);
    object[string] = occurences;

    return object;
  }, {});
};

console.log(countOccurrences(["apple"]));
console.log(countOccurrences(["apple", "banana", "cherry", "banana"]));
console.log(countOccurrences(["apple", "banana", "cherry", "banana", "cherry"]));

// zip(["a", "b", "c"], [1, 2, 3]) => { "a": 1, "b": 2, "c": 3 }
const zip = function (keys, values) {
  const remaining = [...values];

  return keys.reduce(function (existingObject, key) {
    const object = { ...existingObject };
    object[key] = remaining[0];
    remaining.shift();

    return object;
  }, {});
};

console.log(zip(["a", "b", "c"], [1, 2, 3]));

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