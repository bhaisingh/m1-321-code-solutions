// function convertMinutesToSeconds(minutes)

function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

console.log('Convert minutes to Second: ', convertMinutesToSeconds(5));

// function greet(name)

function greet(name) {
  return 'Hey, ' + name;
}

console.log('Name greeting: ', greet('Beavis'));

// Function getArea(width, height)

function getArea(width, height) {
  return width * height;
}

console.log('Calculate Area: ', getArea(17, 42));

// Function getFirstName(person)

function getFirstName(person) {
  return person.firstName;
}

console.log('Person first Name: ', getFirstName({ firstName: 'Lelouche', lastname: 'Lamperouge' }));

// Function getLastElement(array)

function getLastElement(array) {
  return array[array.length - 1];
}

console.log('last element of array: ', getLastElement(['propane', 'and', 'propane', 'accessories']));
