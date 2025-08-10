class Book {
    constructor(title, author) {
        this._author = author;
        this._title = title;
    }
    getTitle() {
        return this._title;
    }
    getAuthor() {
        return this._author;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    readBook() {
        for (let book of this.books) {
            console.log(`${book.getTitle} cua ${book.getAuthor}`);
        }
    }
    addBook(book) {
        this.books.push(book);
    }
}
const book1 = new Book("title1", "author1");
const book2 = new Book("title2", "author1");
const book3 = new Book("title3", "author1");
const book4 = new Book("title4", "author1");
const book5 = new Book("title5", "author1");
const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.readBook();
export {};
