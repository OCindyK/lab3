/*
Use the following array of book objects to practice the array functions for map, find and 
filter. Test each of your answers to the below tasks.
*/

const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    ];

    
// a) Function getBookTitle(bookId) that uses the find function to return the title of the book object with the matching id.
function getBookTitle(bookId) {
    const book = books.find(book => book.id === bookId);
    return book ? book.title : "Book not found";
}

console.log(getBookTitle(1));   // Output: The Great Gatsby
console.log(getBookTitle(2));   // Output: To Kill a Mockingbird
console.log(getBookTitle(5));   // Output: The Catcher in the Rye


console.log("");
console.log("======================");
console.log("");


// b) Function getOldBooks() that uses the filter function to return all book objects written before 1950.
function getOldBooks() {
    return books.filter(book => book.year < 1950);
}

console.log(getOldBooks());
/* Output:
[
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
  { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 }
]
*/


console.log("");
console.log("======================");
console.log("");


// c) Function addGenre() that uses the map function to add a new genre property to all of the above books, with the value ‘classic’.
function addGenre() {
    return books.map(book => ({ ...book, genre: 'classic'}));
}

console.log(addGenre());
/* Output:
[
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925, genre: 'classic' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960, genre: 'classic' },
  { id: 3, title: '1984', author: 'George Orwell', year: 1949, genre: 'classic' },
  { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932, genre: 'classic' },
  { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951, genre: 'classic' }
]
*/


console.log("");
console.log("======================");
console.log("");


// d) Function getTitles(authorInitial) that uses map and filter together to return an array of book titles for books written by authors whose names start with authorInitial.
function getTitles(authorInitial) {
    return books
        .filter(book => book.author.startsWith(authorInitial))
        .map(book => book.title);
}

console.log(getTitles('A'));    // Output: [ 'Brave New World' ]
console.log(getTitles('F'));    // Output: [ 'The Great Gatsby' ]
console.log(getTitles('J'));    // Output: [ 'The Catcher in the Rye' ]


console.log("");
console.log("======================");
console.log("");


// e) Function latestBook() that uses find and forEach to get the book with the most recent publication date.
function latestBook() {
    let latest = null;
    books.forEach(book => {
        if (!latest || book.year > latest.year) {
            latest = book;
        }
    });
    return latest;
}

console.log(latestBook()); // Output: { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }
