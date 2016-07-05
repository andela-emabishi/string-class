describe('String Class Extension tests', () => {
  describe('Test hasVowels', () => {
    it('should return false if the string has no vowels', () => {
      expect('N VWLS'.hasVowels()).toBeFalsy();
      expect('n vwls'.hasVowels()).toBeFalsy();
      expect('@#$^&*%12345'.hasVowels()).toBeFalsy();
      expect(' '.hasVowels()).toBeFalsy();
    });

    it('should return true if the string has vowels', () => {
      expect('No vowels'.hasVowels()).toBeTruthy();
      expect('NO VOWELS'.hasVowels()).toBeTruthy();
      expect('n0 v0wels'.hasVowels()).toBeTruthy();
      expect('@#$^&*% 12345 e'.hasVowels()).toBeTruthy();
    });

    it('should return a defined and boolean value', () => {
      expect(typeof ('1234'.hasVowels())).toBe('boolean');
      expect(typeof ('1234'.hasVowels())).toBeDefined();
    });
  });

  describe('Test toUpper', () => {
    it('should return the string passed in uppercase', () => {
      expect('lowercase'.toUpper()).toEqual('LOWERCASE');
      expect('LowerCase'.toUpper()).toEqual('LOWERCASE');
      expect('L0werCAs3& letters'.toUpper()).toEqual('L0WERCAS3& LETTERS');
    });

    it('should return a string', () => {
      expect(typeof 'Lowercase'.toUpper()).toBe('string');
    });

    it('should verify that the inbuilt toUpper string method was not called', () => {
      spyOn(String.prototype, 'toUpperCase');
      const spoof = 'JamesBond';
      spoof.toUpper();
      expect(String.prototype.toUpperCase).not.toHaveBeenCalled();
    });
  });

  describe('Test toLower', () => {
    it('should return the string passed in lowercase', () => {
      expect('LOWERCASE'.toLower()).toEqual('lowercase');
      expect('LowerCase'.toLower()).toEqual('lowercase');
      expect('L0werCAs3& letters'.toLower()).toEqual('l0wercas3& letters');
    });

    it('should return a string', () => {
      expect(typeof 'Lowercase'.toLower()).toBe('string');
    });
  });

  describe('Test upperCaseFirst', () => {
    it('should return a string in Titlecase', () => {
      expect('UCFIRST'.ucFirst()).toEqual('UCFIRST');
      expect('upperCasefirst'.ucFirst()).toEqual('UpperCasefirst');
      expect('uppercase first'.ucFirst()).toEqual('Uppercase first');
    });

    it('should return a string', () => {
      expect(typeof 'Uppercase'.ucFirst()).toBe('string');
    });

    it('should verify that the inbuilt toUpper string method was not called', () => {
      spyOn(String.prototype, 'toLowerCase');
      const spoof = 'Ian Flemming';
      spoof.toUpper();
      expect(String.prototype.toLowerCase).not.toHaveBeenCalled();
    });
  });

  describe('Test isQuestion', () => {
    it('should return true if the string is a question', () => {
      expect('Is this a question?'.isQuestion()).toBeTruthy();
      expect('This is not a question'.isQuestion()).toBeFalsy();
      expect('Is this a question?'.isQuestion()).toBeDefined();
    });
  });

  describe('Test words', () => {
    it('should return a list of the words in the string, as an array', () => {
      expect('A rose by any other name'.words()).toBeDefined();
      expect('A rose by any other'.words()).toEqual(['A', 'rose', 'by', 'any', 'other']);
      expect('A:rose,by?any!other'.words()).toEqual(['A', 'rose', 'by', 'any', 'other']);
      expect('rose'.words()).toEqual(['rose']);
      expect('rose'.words()).toEqual(['rose']);
      expect(''.words()).toEqual(['']);
    });

    it('should verify that the result of the words method is an array object', () => {
      expect(typeof 'A rose by any other name'.words()).toBe('object');
      expect(Array.isArray('A rose by any other name'.words())).toBeTruthy();
    });
  });

  describe('Test wordCount', () => {
    it('should return the number of words in the string.', () => {
      expect('A rose by any other name'.wordCount()).toEqual(6);
      expect('A rose by any other name'.wordCount()).toBeDefined();
      expect(typeof 'A rose by any other name'.wordCount()).toBe('number');
    });
  });

  describe('Test toCurrency', () => {
    it('should return a currency representation of the string', () => {
      expect('11111.11'.toCurrency()).toEqual('11,111.11');
      expect('11111'.toCurrency()).toEqual('11,111.00');
      expect('21111111.11'.toCurrency()).toEqual('21,111,111.11');
    });

    it('should return a string', () => {
      expect(typeof '11111.11'.toCurrency()).toBe('string');
      expect('11111.11'.toCurrency()).toBeDefined();
    });
  });

  describe('Test fromCurrency', () => {
    it('should return a number representation of the currency string', () => {
      expect('11,111.11'.fromCurrency()).toEqual(11111.11);
      expect('11111'.fromCurrency()).toEqual(11111.00);
      expect('21111111.11'.fromCurrency()).toEqual(21111111.11);
    });

    it('should return a number', () => {
      expect(typeof '11,111.11'.fromCurrency()).toBe('number');
      expect('11,111.11'.fromCurrency()).toBeDefined();
    });
  });
});
