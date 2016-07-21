require('../src/string-class.js');

describe('String Class Extension tests', () => {
  describe('Test hasVowels', () => {
    it('should return false if the string has no vowels', () => {
      expect('N VWLS'.hasVowels()).toBe(false);
      expect('n vwls'.hasVowels()).toBe(false);
      expect('@#$^&*%12345'.hasVowels()).toBe(false);
      expect(' '.hasVowels()).toBe(false);
    });

    it('should return true if the string has vowels', () => {
      expect('No vowels'.hasVowels()).toBe(true);
      expect('NO VOWELS'.hasVowels()).toBe(true);
      expect('n0 v0wels'.hasVowels()).toBe(true);
      expect('@#$^&*% 12345 e'.hasVowels()).toBe(true);
    });

    it('should return a boolean value', () => {
      expect(typeof ('1234'.hasVowels())).toBe('boolean');
    });

    it('should return a defined value', () => {
      expect(typeof ('1234'.hasVowels())).toBeDefined();
    });
  });

  describe('Test toUpper', () => {
    it('should return a string', () => {
      expect(typeof 'Lowercase'.toUpper()).toBe('string');
    });

    it('should return the string passed in uppercase', () => {
      expect('lowercase'.toUpper()).toEqual('LOWERCASE');
      expect('LowerCase'.toUpper()).toEqual('LOWERCASE');
      expect('L0werCAs3& letters'.toUpper()).toEqual('L0WERCAS3& LETTERS');
      expect(''.toUpper()).toEqual('');
    });

    it('should verify that the inbuilt toUpper string method was not called', () => {
      spyOn(String.prototype, 'toUpperCase');

      // Trigger the toUpper method
      const spoof = 'JamesBond';
      spoof.toUpper();

      // Check whether the native javaScript toUpperCase was called
      expect(String.prototype.toUpperCase).not.toHaveBeenCalled();
    });
  });

  describe('Test toLower', () => {
    it('should return a string', () => {
      expect(typeof 'Lowercase'.toLower()).toBe('string');
    });

    it('should return the string passed in lowercase', () => {
      expect('LOWERCASE'.toLower()).toEqual('lowercase');
      expect('LowerCase'.toLower()).toEqual('lowercase');
      expect('L0werCAs3& letters'.toLower()).toEqual('l0wercas3& letters');
      expect(''.toLower()).toEqual('');
    });

    it('should verify that the inbuilt toUpper string method was not called', () => {
      spyOn(String.prototype, 'toLowerCase');
      const spoof = 'Ian Flemming';
      spoof.toLower();
      expect(String.prototype.toLowerCase).not.toHaveBeenCalled();
    });
  });

  describe('Test upperCaseFirst', () => {
    it('should return a string', () => {
      expect(typeof 'Uppercase'.ucFirst()).toBe('string');
    });

    it('should return the input string with its first letter in uppercase', () => {
      expect('UCFIRST'.ucFirst()).toEqual('UCFIRST');
      expect('upperCasefirst'.ucFirst()).toEqual('UpperCasefirst');
      expect('uppercase first'.ucFirst()).toEqual('Uppercase first');
    });

    it('should return an empty string for an empty string as an input', () => {
      expect(''.ucFirst()).toEqual('');
    });
  });

  describe('Test isQuestion', () => {
    it('should return true if the string is a question', () => {
      expect('Is this a question?'.isQuestion()).toBeTruthy();
    });

    it('should return false if the string is not a question', () => {
      expect('This is not a question'.isQuestion()).toBe(false);
    });

    it('should return a defined value', () => {
      expect('Is this a question?'.isQuestion()).toBeDefined();
    });
  });

  describe('Test words', () => {
    it('shoud return an array of the words in the string', () => {
      expect('nectar of the gods'.words()).toBeDefined();
      expect('nectar of the gods'.words()).toEqual(['nectar', 'of', 'the', 'gods']);
      expect('ambrosia, nectar'.words()).toEqual(['ambrosia,', 'nectar']);
      expect('@mbrosia'.words()).toEqual([]);
      expect('22 words'.words()).toEqual(['22', 'words']);
      expect(''.words()).toEqual([]);
      expect(' '.words()).toEqual([]);
    });
  });

  describe('Test wordCount', () => {
    it('should return the number of words in the string.', () => {
      expect('A rose by any other name'.wordCount()).toBeDefined();
      expect('A rose by any other name'.wordCount()).toEqual(6);
      expect(typeof 'A rose by any other name'.wordCount()).toBe('number');
    });
  });

  describe('Test cleanWords', () => {
    it('should return a list of the words in the string, as an array', () => {
      expect('A rose by any other'.cleanWords()).toEqual(['A', 'rose', 'by', 'any', 'other']);
      expect('A:rose,by/any!other'.cleanWords()).toEqual(['A', 'rose', 'by', 'any', 'other']);
      expect(' Pluto isn\'t a planet?'.cleanWords()).toEqual(['Pluto', 'isn\'t', 'a', 'planet']);
      expect('rose'.cleanWords()).toEqual(['rose']);
      expect(''.cleanWords()).toEqual(['']);
    });

    it('should verify that the result of the words method is an array object', () => {
      expect('A rose by any other name'.words()).toBeDefined();
      expect(Array.isArray('A rose by any other name'.words())).toBe(true);
    });
  });

  describe('Test toCurrency', () => {
    it('should return a string', () => {
      expect(typeof '11111.11'.toCurrency()).toBe('string');
      expect('11111.11'.toCurrency()).toBeDefined();
    });

    it('should return NaN if the string passed is not a number', () => {
      expect('Not a Number'.toCurrency()).toEqual('NaN');
    });

    it('should return a currency representation of the string', () => {
      expect('11111.11'.toCurrency()).toEqual('11,111.11');
      expect('11111'.toCurrency()).toEqual('11,111.00');
      expect('21111111.11'.toCurrency()).toEqual('21,111,111.11');
      expect('21111.12712'.toCurrency()).toEqual('21,111.13');
    });
  });

  describe('Test fromCurrency', () => {
    it('should return a number', () => {
      expect(typeof '11,111.11'.fromCurrency()).toBe('number');
      expect('11,111.11'.fromCurrency()).toBeDefined();
    });

    it('should return a number representation of the currency string', () => {
      expect('11,111.11'.fromCurrency()).toEqual(11111.11);
      expect('11111'.fromCurrency()).toEqual(11111.00);
      expect('21111111.11'.fromCurrency()).toEqual(21111111.11);
    });
  });

  describe('Test Even', () => {
    it('should return true if the string passed is an even digit', () => {
      expect('1234'.isEven()).toBe(true);
    });

    it('should return false if the string passed is not an even digit', () => {
      expect('12345'.isEven()).toBe(false);
      expect('0'.isEven()).toBe(false);
      expect('-1'.isEven()).toBe(false);
      expect('noteven24'.isEven()).toBe(false);
      expect('evennoteven'.isEven()).toBe(false);
      expect(' '.isEven()).toBe(false);
      expect(''.isEven()).toBe(false);
    });
  });

  describe('Test TitleCase', () => {
    // Ignore rule for not titlecasing prepositions, conjunctions and articles
    it('should return the string input in TitleCase', () => {
      expect('I am to be titlecased'.toTitle()).toBeDefined();
      expect('I want to be titlecase'.toTitle()).toEqual('I Want To Be Titlecase');
      expect('can I be title and lowercase?'.toTitle()).toEqual('Can I Be Title And Lowercase?');
      expect('The rain falls over the plains'.toTitle()).toEqual('The Rain Falls Over The Plains');
    });
  });

  describe('Test CamelCase', () => {
    it('should return the string input in UpperCamelCase', () => {
      expect('I am to be camelcased'.toCamel()).toBeDefined();
      expect('I want to be camelcase'.toCamel()).toEqual('iWantToBeCamelcase');
      expect('can I be camel and lowercase?'.toCamel()).toEqual('canIBeCamelAndLowercase?');
      expect('The rain falls over the plains'.toCamel()).toEqual('theRainFallsOverThePlains');
    });
  });

  describe('Test ToggleCase', () => {
    it('should return the string input in ToggleCase', () => {
      expect('Roses are red'.toToggle()).toBeDefined();
      expect('Violets are blue'.toToggle()).toEqual('vIoLeTs ArE bLuE');
      expect(''.toToggle()).toEqual('');
      expect('A'.toToggle()).toEqual('a');
      expect('123&*!#$|'.toToggle()).toEqual('123&*!#$|');
      expect('Sugar is sw33t'.toToggle()).toEqual('sUgAr Is Sw33T');
    });
  });
});
