const arr = [12, 4, 10, 58, 7];
console.log(arr);
console.log(arr[0]);
console.log(arr[4]);

arr.push(11);
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift(55);
console.log(arr);

const arr2 = arr.map((number) => {
  return number * 2;
});

console.log(arr2);

const arr3 = arr.filter((number) => {
  return number % 2 == 0;
});

console.log(arr3);

const arr4 = arr.reduce((accu, number) => {
  return accu + number;
});

console.log(arr4);

for (let i = 0; i <= arr.length - 1; i++) {
  console.log(arr[i]);
}

arr.forEach((number) => {
  console.log(number);
});

const arr5 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
];

console.log(arr5);

console.log(arr5[0][3]);

/*
  Output:

[ 12, 4, 10, 58, 7 ]
12
7
[ 12, 4, 10, 58, 7, 11 ]
[ 12, 4, 10, 58, 7 ]
[ 4, 10, 58, 7 ]
[ 55, 4, 10, 58, 7 ]
[ 110, 8, 20, 116, 14 ]
[ 4, 10, 58 ]
134
55
4
10
58
7
55
4
10
58
7
[ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9, 10 ] ]
4 

  */
