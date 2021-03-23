"use strict"
//1
class PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.state = 100;
        this.pagesCount = pagesCount;
        this.type = null;
    }
    fix() {
        this.state *= 1.5;
        return this.state;
    }
    set state(number){
        if (number < 0) {
            this._state = 0;
        } else if(number > 100) {
            this._state = 100;
        } else {
            this._state = number;
        }
    }
    get state(){
        return this._state
    }
} 
const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008,);
console.log(sherlock.releaseDate);
console.log(sherlock.state);
sherlock.fix();
console.log(sherlock.state);

class Magazine extends  PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        super(name,releaseDate,pagesCount)
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount){
        super(name,releaseDate,pagesCount)
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount)
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount)
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount)
        this.type = 'detective'
    }
}

const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);
console.log(picknick.author); 
picknick.state = 10;
picknick.fix();
console.log(picknick.state); 

//2

class Library {
    constructor(name, books){
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if(book.state > 30) {
            this.books.push(book);
        }
    }
    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] === value) {
               return this.books[i];
            }
         }
         return null;
      }
    
      giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
           if (this.books[i].name === bookName) {
              let index = this.books.indexOf(this.books[i]);
              if (index > -1) {
                 return this.books.splice(index, 1)[0];
              }
           }
        }
        return null;
     }
  }

const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

const twelveMens = new NovelBook("Теодор Драйзер", "12 мужчин", 1919, 312);
library.addBook(twelveMens);

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); 
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); 

console.log(library.findBookBy("releaseDate", 1919).name);

console.log(library.giveBookByName("12 мужчин"));

twelveMens.state = 31;
twelveMens.fix();
console.log(twelveMens.state);
library.addBook(twelveMens);//Вопрос: почему не добавляется?
console.log(library.books.length);




