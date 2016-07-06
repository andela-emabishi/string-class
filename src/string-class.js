// Disable eslint do not modify native methods
/* eslint-disable no-extend-native */

String.prototype.hasVowels = function hasVowels() {
  const vowels = new RegExp('[aeiou]', 'i');
  return vowels.test(this);
};

String.prototype.toUpper = function toUpper() {
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
  return this[0].toUpper() + this.slice(1);
};

String.prototype.isQuestion = function isQuestion() {
  const quest = new RegExp(/\?$/);
  return quest.test(this);
};

String.prototype.words = function words() {
  const splitter = new RegExp(/\W+/);
  return this.split(splitter);
};

String.prototype.wordCount = function wordCount() {
  return this.words().length;
};

String.prototype.toCurrency = function toCurrency() {
  const curr = new RegExp(/(\d)(?=(\d{3})+\.)/g);
  return (parseFloat(this).toFixed(2).replace(curr, '$1,'))
  .toString();
};

String.prototype.fromCurrency = function fromCurrency() {
  return Number(this.replace(/,/, ''));
};
