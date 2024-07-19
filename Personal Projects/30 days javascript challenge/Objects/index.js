const Book = {
  title: "Career will",
  author: "Nitesh",
  year: 2020,
};
console.log(Book);
console.log(Book.title);
console.log(Book.author);

Book.getInfo = function () {
  return `${this.title} ${this.author}`;
};

console.log(Book.getInfo());

Book.updateYear = function (year) {
  this.year = year;
};

Book.updateYear(2023);
console.log(Book);

const Library = {
  name: "Central Library",
  books: [
    {
      title: "The Hitchhiker's Guide to the Galaxy",
      author: "Douglas Adams",
      year: 1979,
    },
  ],
};

console.log(Library);

console.log(Library.name);

for (const book of Library.books) {
  console.log(book.title);
}

/*
  Output:

{ title: 'Career will', author: 'Nitesh', year: 2020 }
Career will
Nitesh
Career will Nitesh
{
  title: 'Career will',
  author: 'Nitesh',
  year: 2023,
  getInfo: [Function (anonymous)],
  updateYear: [Function (anonymous)]
}
{
  name: 'Central Library',
  books: [
    {
      title: "The Hitchhiker's Guide to the Galaxy",
      author: 'Douglas Adams',
      year: 1979
    }
  ]
}
Central Library
The Hitchhiker's Guide to the Galaxy

  */
