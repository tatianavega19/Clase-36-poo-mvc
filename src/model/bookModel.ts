import books from "../database/books.json";
import { randomUUID } from "node:crypto";
import { writeFileSync } from "node:fs";

class Book {
  id: string;
  name: string;
  characters: string[];

  constructor(name: string, characters: string[]) {
    this.id = this.#getIdBook();
    this.name = name;
    this.characters = characters;
  }

  static getBookById(id: string) {
    return books.find((book) => book.id === id);
  }

  static getBookByName(name: string) {
    return books.find((book) => book.name === name);
  }

  static addNewBook(book: Book) {
    const foundBook = Book.getBookByName(book.name);
    if (foundBook) return false;

    books.push(book);
    writeFileSync("./src/database/books.json", JSON.stringify(books));
    return "Book added succesfull.";
  }

  #getIdBook() {
    return randomUUID();
  }

  showNameForHuman(userName: string) {
    return `Hi ${userName}, my name is ${this.name}.`;
  }
}

const orgulloYPrejuicio = new Book("Orgullo y prejuicio", [
  "Elizabeth Bennet",
  "Mr. Darcy",
  "Jane Bennet",
]);

const oyp = Book.getBookById("1b421258-6fd8-49af-acd7-2385aae1fd42");

console.log(oyp);