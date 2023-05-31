// Задание 1

const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
	if (numbs[i] == 10) break;
	console.log(numbs[i]);
} 

// Задание 2

const numbs1 = [1, 5, 4, 10, 0, 3];

for (let elem of numbs1) { 
if (numbs1[elem] === 4) { 
console.log(elem); 
}
}

// Задание 3

const numbs2 = [1, 3, 5, 10, 20];

console.log(numbs2);
numbs2 = numbs2.join(' ');

// Задание 4

const numbs3 = [
    [1, 1, 1], 
    [1, 1, 1], 
    [1, 1, 1],
]

// Задание 5

const numbs4 = [1, 1, 1]

numbs4.push(2, 2, 2);
console. log(numbs4);

// Задание 6

const arr = [9, 8, 7, 'a', 6, 5]

let removed = arr.splice(3);
console.log(removed);

// Задание 7

const rndm = [9, 8, 7, 6, 5]

let rndmNumber = prompt('Введите число');
let search = rndmNumber.includes (9, 8, 7, 6, 5);
console.log(search);

// Задание 8
const word = ['abcdef']

word[0] = 'fedcba';
console.log(word);

// Задание 9

const rndM = [
    [1, 2, 3,],
    [4, 5, 6],
]

const rndMarray= rndM.concat(rndM1, rndM2, ...);

console.log(rndMarray);

// Задание 10

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let result = (item +(i + 1));
for (const item of array) {
    console.log(result);
}

// Задание 11

function sumArray(newArr) {
    let newArr = [];
    let mult = newArr.map(item * item);
  
    arr.forEach((item) => {
      newArr.push(mult);
    })
    return newArr;
  }

// Задание 12

const getLength = source => source.map(str => str.length);

console.log(getLength(['one', 'sound', 'underground']));

// Задание 13

function filterPositive(NNumbers) {
    const NNumbers = [ ];
    const resultN = NNumbers.filter(NNumbers === isNaN && NNumbers < 0);
  }
console.log(result);