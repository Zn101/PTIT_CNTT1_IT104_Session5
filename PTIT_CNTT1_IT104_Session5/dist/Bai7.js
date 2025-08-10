class Book {
    constructor(title, author, id) {
        this._author = author;
        this._title = title;
        this._id = id;
    }
    getTitle() {
        return this._title;
    }
    getAuthor() {
        return this._author;
    }
    getId() {
        return this._id;
    }
    updateTitle(newTitle) {
        this._title = newTitle;
    }
    updateAuthor(newAuthor) {
        this._author = newAuthor;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    readBook() {
        for (let book of this.books) {
            console.log(`${book.getTitle} cua ${book.getAuthor}, id: ${book.getId}`);
        }
    }
    addBook(book) {
        this.books.push(book);
    }
    updateBook(id, newTitle, newAuthor) {
        const book = this.books.find(b => b.getId() === id);
        book === null || book === void 0 ? void 0 : book.updateAuthor(newAuthor);
        book === null || book === void 0 ? void 0 : book.updateTitle(newTitle);
    }
}
const book1 = new Book("title1", "author1", "1");
const book2 = new Book("title2", "author1", "2");
const book3 = new Book("title3", "author1", "3");
const book4 = new Book("title4", "author1", "4");
const book5 = new Book("title5", "author1", "5");
const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.readBook();
library.updateBook("1", "title2", "author 2");
library.readBook();
export {};
