
var bookShelf = [];
var books = ['Server-Side JavaScript', 'JavaScript - Comprehensive', 'Beginning JavaScript'];
var authors = ['Robert Husted', 'Don Gosselin', 'Paul Wilton'];
var isbns = ['9780201433296', '9780619063344', '9780470051511'];

for (var i = 0; i < books.length; i++) {
  var title = books[i];
  var author = authors[i];
  var isbn = isbns[i];
  bookShelf.push({ title, author, isbn });
}

console.log('Book Array: ', bookShelf);
console.log('Books Array type: ', typeof bookShelf);

console.log('JSON value: ', JSON.stringify(bookShelf));
console.log('JSON stringify type: ', typeof JSON.stringify(bookShelf));

var stringJ = '{"numberID":12345, "name": "Sponge Bob"}';
console.log('String type: ', typeof stringJ);
var outString = JSON.parse(stringJ);
console.log('Parse out: ', outString);
console.log('After JSON parse type: ', typeof outString);
