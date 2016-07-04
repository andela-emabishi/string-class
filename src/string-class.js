String.prototype.hasVowels = function() {
  var vowels = new RegExp('[aeiou]', 'i');
  return vowels.test(this) ? true : false;
};

String.prototype.toUpper = function () {
  var newString = '';
  var upper = new RegExp('[a-z]');
  for (var x = 0; x < this.length; x++) {
    upper.test(this[x]) ?
    newString += String.fromCharCode((this.charCodeAt(x)) - 32) :
    newString += this[x];
  }
  return newString;
};

String.prototype.toLower = function () {
  var newString = '';
  var upper = new RegExp('[A-Z]');
  for (var x = 0; x < this.length; x++) {
    upper.test(this[x]) ?
    newString += String.fromCharCode((this.charCodeAt(x)) + 32) :
    newString += this[x];
  }
  return newString;
};

String.prototype.ucFirst = function () {
  return [this.charAt(0).toUpper(), this.slice(1)].join('');
};

String.prototype.isQuestion = function () {
  var quest = new RegExp(/\?$/);
  return quest.test(this) ? true : false;
};

String.prototype.words = function () {
  var splitter = new RegExp(/\W+/);
  return this.split(splitter);
};
