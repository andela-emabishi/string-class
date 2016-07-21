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
  /* Convert the first character of the input string to uppercase then concatenate
  * the rest of the string with the uppercase character
  */
  return this.length ? this[0].toUpper() + this.slice(1) : '';
};

String.prototype.isQuestion = function isQuestion() {
  // Returns true if the last letter of the input string a question mark. False otherwise
  const questionable = new RegExp(/\?$/);
  return questionable.test(this);
};

String.prototype.words = function words() {
  /* Returns an array of the words in the input string
  * The expression evaluates to true for a word with a letter as it's first character
  */
  const beginningVoid = /^\w/;
  return beginningVoid.test(this) ? this.trim().split(' ') : [];
};

String.prototype.wordCount = function wordCount() {
  return this.words().length;
};


String.prototype.cleanWords = function words() {
  /* Filter out any non word characters at the beginning and end of the input string.
  * Split the new string at any non word character excluding the apostrophe.
  * and return an array of words.
  * i.e. Don't split at (A-Z,a-z,0-9 or ')
  */
  const parsedString = this.trim().replace(new RegExp(/^\W|\W$/g), '');
  return parsedString.split(new RegExp(new RegExp(/[^A-Za-z0-9_']+/g)));
};

String.prototype.toCurrency = function toCurrency() {
  /* (/d) -> Matches digits from 0-9 and remembers the particular digit match
  * (/d)(?=(\d{3})+\.) -> Lookahead - Only matches a digit if it is followed by
  * three or other digits and if the entire string is a float.
  * Upon encountering match, insert a comma character
  */
  const currency = new RegExp(/(\d)(?=(\d{3})+\.)/g);
  return (parseFloat(this).toFixed(2).replace(currency, '$1,'));
};

String.prototype.fromCurrency = function fromCurrency() {
  // Converts a string representation of a currency to a number
  return Number(this.replace(/,/, ''));
};

String.prototype.isEven = function isEven() {
  // Returns true if the input string is an even number. Returns false otherwise.
  const even = new RegExp('d*[02468]$', 'g');
  return this == '0' ? false : even.test(parseInt(this, 10));
};

String.prototype.toTitle = function toTitle() {
  /* Returns the input string in titlecase
   * Matches any word character multiple times at a word boundary
   */
  return this.replace(/\b\w+/g, function transform(string) {
    return string.charAt(0).toUpper() + string.substr(1).toLower();
  });
};

String.prototype.toCamel = function toCamel() {
  // Returns the input string in camelcase
  const camel = new RegExp(/(?:^\w|[A-Z]|\b\w)/g);
  return this.replace(camel, function transform(letter, index) {
    return index === 0 ? letter.toLower() : letter.toUpper();
  }).replace(/\s+/g, '');
};

String.prototype.toToggle = function toToggle() {
  // Returns the input string in togglecase beginning with a lowercase letter
  const toggled = new RegExp(/\w+/g);
  let counter = 0;
  let toggledString = '';

  for (const letter of this) {
    if (letter.match(toggled)) {
      toggledString = toggledString.concat(counter % 2 === 0 ? letter.toLower() :
      letter.toUpper());
      counter++;
    } else {
      toggledString = toggledString.concat(letter);
    }
  }
  return toggledString;
};
