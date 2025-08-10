class Book {
    private _title: string;
    private _author: string;
    private _id: string;
    constructor(title: string, author: string, id: string) {
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

    updateTitle(newTitle: string) {
        this._title = newTitle;
    }

    updateAuthor(newAuthor: string) {
        this._author = newAuthor;
    }
}

class Library {
    books: Book[];
    constructor(){
        this.books = [];
    }
    readBook() {
        for (let book of this.books) {
            console.log(`${book.getTitle} cua ${book.getAuthor}, id: ${book.getId}`);
        }
    }
    addBook(book: Book) {
        this.books.push(book)
    }

    updateBook(id: string, newTitle: string, newAuthor: string) {
        const book = this.books.find(b => b.getId() === id);
        book?.updateAuthor(newAuthor);
        book?.updateTitle(newTitle);
    }

    searchBook(id: string) {
        const foundBooks = this.books.filter(book => book.getId() === id)
        for (let book of foundBooks) {
           console.log(`${book.getTitle} cua ${book.getAuthor}, id: ${book.getId}`);
        }
    }
}

const book1: Book = new Book("title1", "author1", "1");
const book2: Book = new Book("title2", "author1", "2");
const book3: Book = new Book("title3", "author1", "3");
const book4: Book = new Book("title4", "author1", "4");
const book5: Book = new Book("title5", "author1", "5");

const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);

library.readBook();

library.searchBook("1");
