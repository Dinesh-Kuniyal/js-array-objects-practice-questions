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