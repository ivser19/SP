// Задание N 1

let i = 0;

while (i < 2) {
  console.log("Привет");
  i++;
}

// Задание N 2

let a = 1;
while (a <= 25) {
  console.log(a);
  a++;
}

// Задание N 3

let b = 7;
while (b <= 22) {
  console.log(b);
  b++;
}

// Задание N 4

const object = { 'Коля': 200, 'Вася': 300, 'Петя': 400 };

for (const property in object) {
  console.log(`${property}- зарплата ${object[property]} долларов`);
}

// Задание N 5

let n = 1000;
let num = 0;

while (n > 50) { num++; n /= 2; }
console.log(n);
console.log(num);

// Задание N 6
let dayMonth = 31, day = Number(5);

while (dayMonth < 32 && dayMonth > 0) {
  if (dayMonth < 32 && dayMonth > 0 && day != 5) {
    console.log('');
  } else if (dayMonth < 32 && dayMonth > 0 && day === 5) {
    console.log('Сегодня пятница, 5-е число. Необходимо подготовить отчет.');
  } else if (dayMonth < 32 && dayMonth > 0 && day + 7) {
    console.log('Сегодня пятница, 12-е число. Необходимо подготовить отчет.');
  } else if (dayMonth < 32 && dayMonth > 0 && day + 14) {
    console.log('Сегодня пятница, 19-е число. Необходимо подготовить отчет.');
  } else if (dayMonth < 32 && dayMonth > 0 && day + 21) {
    console.log('Сегодня пятница, 26-е число. Необходимо подготовить отчет.');
  } break;
}
