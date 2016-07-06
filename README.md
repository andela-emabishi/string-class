## Andela Javascript Checkpoint 2: string-class
[![Build Status](https://travis-ci.org/andela-emabishi/string-class.svg?branch=develop)](https://travis-ci.org/andela-emabishi/string-class)

### Description
Extend the native JavaScript string class to extend its string manipulation features.

### Functionality
#### hasVowels
This method evaluates to true if the input string has vowels and false if it does not.

```javaScript
'No vowels'.hasVowels() would yield true
```

#### toUpper
This Method returns the input string in upper case.
```javaScript
'lowercase'.toUpper() would yield LOWERCASE
```

#### toLower
This Method returns an input string in lower case.

```javaScript
'UPPERCASE'.toLower() would yield uppercase
```

#### ucFirst
This Method returns the input string with the first letter in upper case.

```javaScript
'titlecase'.ucFirst() would yield Titlecase
```

#### isQuestion
This Method returns true or false depending on whether the input string is a question.

```javaScript
'This is not a question.'.isQuestion() would yield false
```

#### words
This Method returns an array with the words in the input string.
```javaScript
'A rose by any other name.'.words() would yield ['A','rose','by','any','other','name']
```

#### wordCount
This Method returns a count of the number of words in a string.
```javaScript
'A rose by any other name.'.wordCount() would yield 6
```

#### toCurrency
This Method returns a currency representation of the input string.
```javaScript
'12345.11'.toCurrency() would yield 12,345.11
```

#### fromCurrency
This Method returns a number representation of the input currency string.
```javaScript
'12,345.11'.fromCurrency() would yield 12345.11
```

#### Usage
* Clone this repository with the command: `git clone https://github.com/andela-emabishi/string-class.git`
* Install [node.js v6.2.2] (https://nodejs.org/en/) on your machine.
* Start up a terminal instance and run the command `node`.
* Type `require ('src/string-class.js')` into the terminal to have access to the source file.
* Use the methods as above in the Functionality section.
* Type `.exit` to exit the node environment.

#### Run Tests
* Change directory into the root of the repository i.e `string-class` and run the command `npm install`. This will install all the dependencies needed for the project to run.
Run the command `npm test`. This will run the tests and generate an istanbul test coverage report which can also be accessed through the path `coverage/lcov-report/index.html`.

#### License
This project was created under a GNU Public License. See [here] (https://github.com/andela-emabishi/string-class/blob/dev/LICENSE) for more information.

#### Let's chat
You can find the author [@emabishi] (https://github.com/emabishi) or [@andela-emabishi] (https://github.com/andela-emabishi) on github and @emabishi on twitter.
