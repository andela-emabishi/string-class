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

  });

  describe('Test isQuestion', () => {
    it('should return true if the string is a question', () => {
      expect('Is this a question?'.isQuestion()).toBeTruthy();
      expect('This is not a question'.isQuestion()).toBeFalsy();
      expect('Is this a question?'.isQuestion()).toBeDefined();

    });
  });

});
