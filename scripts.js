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

// Need to fix indexing
function displayBook(bookObj, index) {
  console.log(bookObj);
  console.log(index);


  const bookShelf = document.querySelector("#book-shelf");
  const book = document.createElement("div");
  book.setAttribute("id", index);
  book.setAttribute("class", "book");
  bookShelf.appendChild(book);

  const bookTitle = document.createElement("p");
  bookTitle.setAttribute("class", "book-data");
  bookTitle.textContent = bookObj.title;
  book.appendChild(bookTitle);

  const bookAuthor = document.createElement("p");
  bookAuthor.setAttribute("class", "book-data");
  bookAuthor.textContent = bookObj.author;
  book.appendChild(bookAuthor);

  const bookPages = document.createElement("p");
  bookPages.setAttribute("class", "book-data");
  bookPages.textContent = bookObj.pages + " Pages";
  book.appendChild(bookPages);

  const bookRead = document.createElement("p");
  bookRead.setAttribute("class", "book-data");
  bookRead.textContent = "Read? " + bookObj.haveRead;
  book.appendChild(bookRead);

  const bookRemove = document.createElement("button");
  bookRemove.setAttribute("value", index);

  bookRemove.addEventListener("click", deleteBook)
  bookRemove.textContent = "Remove"
  book.appendChild(bookRemove);
}

myLibrary.forEach(displayBook);

// Submit function that saves form data, creates a new book object and displays it
document.getElementById("add-book-form").addEventListener("submit", (event) => {
  title = document.getElementById("title").value
  author = document.getElementById("author").value;
  pages = document.getElementById("pages").value;
  haveRead = document.getElementById("haveRead").value;
  if (haveRead !== "Yes") {
    haveRead = "No";
  }
  addBookToLibrary(title, author, pages, haveRead);
  displayBook(myLibrary[myLibrary.length - 1], myLibrary.length-1)
  console.table(myLibrary)
  event.preventDefault();
});

function deleteBook(){
  let book = document.getElementById(this.value)
  book.remove()
  myLibrary.splice(this.value, 1, '');
  console.table(myLibrary)

}
