// Disable eslint do not modify native methods
/* eslint-disable no-extend-native */

String.prototype.hasVowels = function hasVowels() {
  // Returns true if a vowel exists in the input string. Returns false otherwise.
  const vowels = new RegExp('[aeiou]', 'i');
  return vowels.test(this);
};

String.prototype.toUpper = function toUpper() {
  /* Replace all lowercase letters in the input string with their uppercase
  * analogs by converting each letter's ASCII value to decimal then back to
  * ASCII
  */
  const upper = new RegExp('[a-z]', 'g');
  return this.replace(upper, function transform(letter) {
    return String.fromCharCode(letter.charCodeAt(0) - 32);
  });
};

String.prototype.toLower = function toLower() {
  const lower = new RegExp('[A-Z]', 'g');
  return this.replace(lower, function transform(letter) {
    return String.fromCharCode(letter.charCodeAt(0) + 32);
  });
};

String.prototype.ucFirst = function ucFirst() {
  /* Convert the fist character of the input string to uppercase then concatenate
  * the rest of the string with the uppercase character
  */
  return this[0].toUpper() + this.slice(1);
};

String.prototype.isQuestion = function isQuestion() {
  // Is the last letter of the input string a question mark?
  const quest = new RegExp(/\?$/);
  return quest.test(this);
};

String.prototype.words = function words() {
  /* Split the input string at any of the provided special characters
  * and return an array of words
  */
  const splitter = new RegExp('[:," ";|?!().]');
  return this.split(splitter);
};

String.prototype.wordCount = function wordCount() {
  return this.words().length;
};

String.prototype.toCurrency = function toCurrency() {
  /* (/d) -> Matches digits from 0-9 and remembers the particular digit match
  * (/d)(?=(\d{3})+\.) -> Only matches a digit if it is followed by
  * three or moother digits and if the entire string is a float
  */
  const curr = new RegExp(/(\d)(?=(\d{3})+\.)/g);
  return (parseFloat(this).toFixed(2).replace(curr, '$1,'))
  .toString();
};

String.prototype.fromCurrency = function fromCurrency() {
  // Converts a string representation of a currency to a number
  return Number(this.replace(/,/, ''));
};

String.prototype.isDigit = function isDigit() {
  // Returns true if the input string is a digit. Returns false otherwise.
  const number = new RegExp('^[0-9]+$', 'g');
  return number.test(this);
};

String.prototype.isEven = function isEven() {
  // Returns true if the input string is even. Returns false otherwise.
  const even = new RegExp('[02468]$', 'g');
  return this.isDigit() ? even.test(this) : false;
};
