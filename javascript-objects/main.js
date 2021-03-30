// Student Object

var studentObj = {
  firstname: 'Rakesh',
  lastName: 'Singh',
  age: 49
};

var student = {};

student = studentObj;

var fullName;
fullName = student.firstname + ' ' + student.lastName;
console.log('value of fullName: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'IT';
console.log('value of livesInIrvine: ', student.livesInIrvine);
console.log('value of previousOccupation: ', student.previousOccupation);
console.log('value of student: ', student);

// vehicle Object

var vehicleObj = {
  make: 'Ford',
  model: 'F150',
  year: 2016
};

var vehicle = {};
vehicle = vehicleObj;

vehicle['color'] = 'Steel Blue';
vehicle['isConvertible'] = false;
console.log('value of vehicle color: ', vehicle['color']);
console.log('value of vehicle isConvertible: ', vehicle['isConvertible']);
console.log('value of vehicle: ', vehicle);

// pet Object

var petObj = {
  name: 'Messi',
  type: 'Labrador'
};

var pet = {};
pet = petObj;

delete pet.name;
delete pet.type;
console.log('value of pet object: ', pet);
