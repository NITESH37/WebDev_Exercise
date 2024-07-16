const number = 10;
for (let i = 1; i <= number; i++) {
  console.log(i);
}

const numberForMultiplication = 5;
for (let i = 1; i <= 10; i++) {
  const result = numberForMultiplication * i;
  console.log(result);
}

let sum = 0,
  i = 1;
while (i <= 10) {
  sum += i;
  i++;
}
console.log(sum);

let number4 = 10;
while (number4 >= 1) {
  console.log(number4);
  number4--;
}

let number5 = 1;
do {
  console.log(number5);
  number5++;
} while (number5 <= 5);

let num = 10,
  factorial = 1,
  loopStart1 = 1;
do {
  factorial *= loopStart1;
  loopStart1++;
} while (loopStart1 <= num);
console.log(factorial);

let numberForPattern = 5;

for (let i = 1; i <= numberForPattern; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

const number6 = 10;
for (let i = 1; i <= number6; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
const number7 = 10;
for (let i = 1; i <= number7; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}

/*
Output:

1
2
3
4
5
6
7
8
9
10
5
10
15
20
25
30
35
40
45
50
55
10
9
8
7
6
5
4
3
2
1
1
2
3
4
5
3628800
*
**
***
****
*****
1
2
3
4
6
7
8
9
10
1
2
3
4
5
6
*/
