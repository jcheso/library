let myLibrary = [];

function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
}

const addBookToLibrary = (title, author, pages, haveRead) =>
  myLibrary.push(new Book(title, author, pages, haveRead));

addBookToLibrary("Crime and Punishment", "Fyodor Dostoyevsky", "671", "Yes");
addBookToLibrary("A Clash of Kings", "George R.R. Martin", "969", "Yes");
addBookToLibrary("The Selfish Gene", "Richard Dawkins ", "360", "Yes");
addBookToLibrary("Zero to One: Notes on Startups, or How to Build the Future", "Peter Thiel", "195", "Yes")

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
  bookTitle.setAttribute("class", "book-title");
  bookTitle.textContent = bookObj.title;
  book.appendChild(bookTitle);

  const bookAuthor = document.createElement("p");
  bookAuthor.setAttribute("class", "book-author");
  bookAuthor.textContent = bookObj.author;
  book.appendChild(bookAuthor);

  const bookPages = document.createElement("p");
  bookPages.setAttribute("class", "book-pages");
  bookPages.textContent = bookObj.pages + " Pages";
  book.appendChild(bookPages);

  const bookRead = document.createElement("p");
  bookRead.setAttribute("class", "book-read");
  bookRead.setAttribute("id", bookObj.title);
  bookRead.textContent = "Read: " + bookObj.haveRead;
  book.appendChild(bookRead);

  const bookReadToggleDiv = document.createElement("div");
  bookReadToggleDiv.setAttribute("class", "switch-div");
  book.appendChild(bookReadToggleDiv);

  const bookReadToggleLabel = document.createElement("label");
  bookReadToggleLabel.setAttribute("class", "switch");
  bookReadToggleDiv.appendChild(bookReadToggleLabel);

  const bookReadToggleInput = document.createElement("input");
  bookReadToggleInput.setAttribute("type", "checkbox");
  bookReadToggleInput.setAttribute("value", index);
  bookReadToggleInput.addEventListener("click", toggleRead);
  bookReadToggleLabel.appendChild(bookReadToggleInput);

  const bookReadToggleSpan = document.createElement("span");
  bookReadToggleSpan.setAttribute("class", "slider round");

  bookReadToggleLabel.appendChild(bookReadToggleSpan);

  const bookRemoveDiv = document.createElement("div");
  bookRemoveDiv.setAttribute("class", "switch-div");
  book.appendChild(bookRemoveDiv);

  const bookRemove = document.createElement("button");
  bookRemove.setAttribute("value", index);
  bookRemove.setAttribute("class", "remove-btn");
  bookRemove.addEventListener("click", deleteBook);
  bookRemove.textContent = "Remove";
  bookRemoveDiv.appendChild(bookRemove);
}

myLibrary.forEach(displayBook);

// Submit function that saves form data, creates a new book object and displays it
document.getElementById("add-book-form").addEventListener("submit", (event) => {
  title = document.getElementById("title").value;
  author = document.getElementById("author").value;
  pages = document.getElementById("pages").value;
  haveRead = document.getElementById("haveRead").checked;
  if (!haveRead) {
    haveRead = "No";
  } else {
    haveRead = "Yes";
  }
  addBookToLibrary(title, author, pages, haveRead);
  displayBook(myLibrary[myLibrary.length - 1], myLibrary.length - 1);
  console.table(myLibrary);
  event.preventDefault();
});

function deleteBook() {
  let bookElement = document.getElementById(this.value);
  bookElement.remove();
  myLibrary.splice(this.value, 1, "");
  console.table(myLibrary);
}

function toggleRead() {
  let book = myLibrary[this.value];
  console.log(book.title);
  if (book.haveRead == "Yes") {
    book.haveRead = "No";
  } else {
    book.haveRead = "Yes";
  }
  let bookElement = document.getElementById(this.value);
  bookElement.childNodes[3].innerHTML = "Read: " + book.haveRead;
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
