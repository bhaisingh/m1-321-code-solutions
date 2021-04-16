console.log('hello, world');

// h1 element
var head = document.querySelector('h1');
console.log('h1 value: ', head);
console.dir(head);

// id attribute "explanation"
var idExplanation = document.querySelector('#explanation');
console.log('id explanation: ', idExplanation);
console.dir(idExplanation);

// class attribute of "hint"
var classHint = document.querySelector('.hint');
console.log('class hint: ', classHint);
console.dir(classHint);

// p  element
var paragraph = document.querySelectorAll('p');
console.log('p element: ', paragraph);
console.dir(paragraph);

// class attribute of "example-link"
var classExample = document.querySelectorAll('.example-link');
console.log('class example-link: ', classExample);
console.dir(classExample);
