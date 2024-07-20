const name = "Nitesh";
const age = 25;

const greeting = `My name is ${name} and My age ${age}.`;
console.log(greeting);

const multiString = `Template literals allow you to create
multiline strings without the
need for explicit concatenation
or escape sequences. 
This improves code readability, 
especially for longer strings.`;
console.log(multiString);

const arrayDestructure = [10, 45, 1, 78, 65, 89];
const [first, second] = arrayDestructure;
console.log(first, second);

const Book = {
  title: "Justice",
  author: "Nitesh",
  pulishYear: 2021,
};

const { title, author } = Book;
console.log(title, author);

const spreadOperator = [41, 78, 10, 2, 8, 33, 78];
const newArray = [...spreadOperator, 45, 46];
console.log(newArray);

function add(...number) {
  return number.reduce((acc, num) => acc + num);
}
console.log(add(1, 2, 3, 4, 5));

function product(a, b = 1) {
  return a * b;
}
console.log(product(4, 5));
console.log(product(5));

const newBook = {
  title: "English",
  name: "Kumar",
  year: 2023,
  greet() {
    console.log(`This is ${title} and name ${name}`);
  },
};

console.log(newBook);
newBook.greet();

const propName = "This is property ";
const object = {
  [propName]: "Changed the property name",
};
console.log(object);

/*
Output:

My name is Nitesh and My age 25.
Template literals allow you to create
multiline strings without the
need for explicit concatenation
or escape sequences. 
This improves code readability, 
especially for longer strings.
10 45
Justice Nitesh
[
  41, 78, 10,  2, 8,
  33, 78, 45, 46
]
15
20
5
{
  title: 'English',
  name: 'Kumar',
  year: 2023,
  greet: [Function: greet]
}
This is Justice and name Nitesh
{ 'This is property ': 'Changed the property name' }

*/
