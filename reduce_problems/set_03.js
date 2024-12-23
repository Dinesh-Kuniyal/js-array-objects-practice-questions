// longestWord(["apple", "banana", "cherry", "kiwi"]) => "banana"
const longestWord = function (words) {
  return words.reduce((longest, word) => {
    return word.length > longest.length ? word : longest;
  }, { length: -Infinity });
};

console.log(longestWord(["apple", "banana", "cherry", "kiwi"]));