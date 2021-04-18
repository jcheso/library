let myLibrary = [];

function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
}

const addBookToLibrary = (title, author, pages, haveRead) =>
  myLibrary.push(new Book(title, author, pages, haveRead));

addBookToLibrary("LOTR", "Tolkein", "256", "Yes");
addBookToLibrary("Harry Potter", "JK Rowling", "128", "Yes");
addBookToLibrary("Twilight", "Meyers", "100", "No");

console.table(myLibrary);

function displayBooks(bookObj, index) {
  console.log(bookObj);
  console.log(index);

  const bookShelf = document.querySelector("#book-shelf");
  const book = document.createElement("div");
  book.setAttribute("id", index);
  book.setAttribute("class", "book");
  bookShelf.appendChild(book);

  const bookTitle = document.createElement("p");
  bookTitle.setAttribute("class", "book-data");
  bookTitle.textContent = bookObj.title
  book.appendChild(bookTitle);

  const bookAuthor = document.createElement("p");
  bookAuthor.setAttribute("class", "book-data");
  bookAuthor.textContent = bookObj.author
  book.appendChild(bookAuthor);

  const bookPages = document.createElement("p");
  bookPages.setAttribute("class", "book-data");
  bookPages.textContent = bookObj.pages + ' Pages'
  book.appendChild(bookPages);

  const bookRead = document.createElement("p");
  bookRead.setAttribute("class", "book-data");
  bookRead.textContent = "Read? " + bookObj.haveRead
  book.appendChild(bookRead);
}

myLibrary.forEach(displayBooks);
