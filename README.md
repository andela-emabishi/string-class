## Andela Javascript Checkpoint 2: string-class

### Description
Extend the native JavaScript string class to extend its string manipulation features.

### Functionality
#### hasVowels
This method evaluates to true or false depending on whether the input string has vowels.

```javaScript
'No vowels'.hasVowels() would yield `true`
```

#### toUpper
This Method returns the input string in upper case.
```javaScript
'lowercase'.toUpper() would yield `LOWERCASE`
```

#### toLower
This Method returns an input string in lower case.

```javaScript
'UPPERCASE'.toLower() would yield `uppercase`
```

#### ucFirst
This Method returns the input string with the first letter in upper case.

```javaScript
'titlecase'.ucFirst() would yield `Titlecase`
```

#### isQuestion
This Method returns true or false depending on whether the input string is a question.

```javaScript
'This is not a question.'.isQuestion() would yield `false`
```

#### words
This Method returns an array with the words in the input string.
```javaScript
'A rose by any other name.'.words() would yield `['A','rose','by','any','other','name']`
```

#### wordCount
This Method returns a count of the number of words in a string.
```javaScript
'A rose by any other name.'.wordCount() would yield `6`
```

#### toCurrency
This Method returns a currency representation of the input string.
```javaScript
'12345.11'.toCurrency() would yield `12,345.11`
```

#### fromCurrency
This Method returns a number representation of the input currency string.
```javaScript
'12,345.11'.fromCurrency() would yield `12345.11`
```


#### Dependencies
To run the tests:
* Clone this repository with the command: `git clone https://github.com/andela-emabishi/string-class.git`
* Install [node.js v6.2.2] (https://nodejs.org/en/) on your machine.
* Install server dependencies by running the command ` npm install http-server -g`. More on this [here] (https://www.npmjs.com/package/http-server)
* Start a server at the root inverted-index folder by typing `http-server` into your terminal program.
* Copy the address given i.e. `http://127.0.0.1:8080` into a browser of your choice. From the browser, click into the jasmine then SpecRunner folder or use `http://127.0.0.1:8080/jasmine/SpecRunner.html` to run.

#### License
This project was created under a GNU Public License. See [here] (https://github.com/andela-emabishi/string-class/blob/dev/LICENSE) for more information.

#### Let's chat
You can find the author [@emabishi] (https://github.com/emabishi) or [@andela-emabishi] (https://github.com/andela-emabishi) on github and @emabishi on twitter.
