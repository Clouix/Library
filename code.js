const myLibrary = [];
const cardContainer = document.querySelector('.card-container');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(Book) {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardTitle = document.createElement('h2');
    cardTitle.textContent = `Title: ${Book.title}`;

    const cardAuthor = document.createElement('p');
    cardAuthor.textContent = `Author: ${Book.author}`;

    const cardPages = document.createElement('p');
    cardPages.textContent = `Pages: ${Book.pages}`;

    const cardRead = document.createElement('p');
    cardRead.textContent = `Read: ${Book.read}`;

    card.appendChild(cardTitle);
    card.appendChild(cardAuthor);
    card.appendChild(cardPages);
    card.appendChild(cardRead);

    cardContainer.appendChild(card);
}

function renderLibrary() {
    cardContainer.innerHTML = '';
    myLibrary.forEach(book => addBookToLibrary(book));
}

const book1 = new Book("Test1", "ASSA", 123, false);
const book2 = new Book("Test2", "SSA", 123, false);
const book3 = new Book("Test3", "ASD", 123, true);
myLibrary.push(book1, book2, book3);
console.log(myLibrary)

renderLibrary();

// const book4 = new Book("Test3", "ASD", 123, true);

// addBookToLibrary(book1);
// addBookToLibrary(book2);