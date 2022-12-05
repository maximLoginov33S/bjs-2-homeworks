class PrintEditionItem {
    constructor(name, releaseDate, pageCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pageCount = pageCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        return this.state * 1,5;
    }

    set state(state) {
        if(state < 0) {
            this._state = 0;
        } else if (state > 100) {
            this._state = 100;
        } else {
            this._state = state;
        }
    }
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pageCount) {
        super(name, releaseDate, pageCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pageCount) {
        super(name, releaseDate, pageCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pageCount) {
        super(author, name, releaseDate, pageCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pageCount) {
        super(author, name, releaseDate, pageCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pageCount) {
        super(author, name, releaseDate, pageCount);
        this.type = 'detective';
    }
}


class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let result = this.books.find((book) => book[type] === value);
        return typeof result === 'object' ? result : null;
    }

    giveBookByName(bookName) {
        let requestBook = this.books.find((book) => book.name === bookName);
        if (typeof requestBook === 'object') {
            this.books.splice(this.books.indexOf(requestBook), 1);
            return requestBook;
        } else return null;
    }
}
