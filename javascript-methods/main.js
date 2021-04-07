// The Math Object

var num1 = 5;
var num2 = 10;
var num3 = 15;

var maximumValue = Math.max(num1, num2, num3);
console.log('maximumValue: ', maximumValue);

var heros = ['wolverine', 'Hulk', 'Superman', 'Spiderman'];

var randomNumber = Math.random();

randomNumber = randomNumber * heros.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex: ', randomIndex);
var randomHero = heros[randomIndex];
console.log('randomHero: ', randomHero);

// Array Methods

var library = [
  {
    title: 'Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON',
    author: 'Lindsay Bassett'
  },
  {
    title: 'JSON Quick Syntax Reference',
    author: 'Wallace Jackson'
  },
  {
    title: 'Build APIs You Won\'t Hate: Everyone and their dog wants an API, so you should probably learn how to build them',
    author: 'Phil Sturgeon & Laura Bohill'
  }
];

console.log('Length of array: ', library.length);
var lastBook = library.pop();
console.log('lastBook: ', lastBook);

var firstBook = library.shift();
console.log('firstBook: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library: ', library);

// String Methods

var fullName = 'Rakesh Singh';
var firstAndLastname = fullName.split(' ');
console.log('firstAndlastName: ', firstAndLastname);
var firstName = firstAndLastname[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName: ', sayMyName);
