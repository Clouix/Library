const myLibrary = [];
const cardContainer = document.querySelector('.card-container');
const showBtn = document.querySelector('.add-book');
const modal = document.querySelector('.modal');
const addBtn = document.getElementById('new-book');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardTitle = document.createElement('h2');
    cardTitle.textContent = `Title: ${book.title}`;

    const cardAuthor = document.createElement('p');
    cardAuthor.textContent = `Author: ${book.author}`;

    const cardPages = document.createElement('p');
    cardPages.textContent = `Pages: ${book.pages}`;

    const cardRead = document.createElement('p');
    cardRead.textContent = `Read: ${book.read}`;

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

showBtn.addEventListener('click', () => {
    modal.showModal();
})

const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 281, false);
const book2 = new Book("Moby Dick", "Herman Melville", 635, false);
const book3 = new Book("Test3", "ASD", 123, true);
myLibrary.push(book1, book2, book3);
console.log(myLibrary)

renderLibrary();