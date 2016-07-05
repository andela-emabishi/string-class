/* eslint-disable no-extend-native */

String.prototype.hasVowels = function hasVowels() {
  const vowels = new RegExp('[aeiou]', 'i');
  return vowels.test(this);
};

String.prototype.toUpper = function toUpper() {
  let newString = '';
  const upper = new RegExp('[a-z]');
  for (let x = 0; x < this.length; x++) {
    upper.test(this[x]) ?
    newString += String.fromCharCode((this.charCodeAt(x)) - 32) :
    newString += this[x];
  }
  return newString;
};

String.prototype.toLower = function toLower() {
  let newString = '';
  const upper = new RegExp('[A-Z]');
  for (let x = 0; x < this.length; x++) {
    upper.test(this[x]) ?
    newString += String.fromCharCode((this.charCodeAt(x)) + 32) :
    newString += this[x];
  }
  return newString;
};

String.prototype.ucFirst = function ucFirst() {
  return [this.charAt(0).toUpper(), this.slice(1)].join('');
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
  let count = 0;
  this.words().forEach(() => {
    count += 1;
  });

  return count;
};

String.prototype.toCurrency = function toCurrency() {
  return (parseFloat(this).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'))
  .toString();
};

String.prototype.fromCurrency = function fromCurrency() {
  return Number(this.replace(/,/, ''));
};
