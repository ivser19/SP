// Задание 1

function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }

  console.log(min(8, 4))

  // Задание 2

    function num(number) {

    let result    
    if (number % 2 == 0){
        return console.log('Число четное');
    }
    else {
        return console.log('Число нечетное');
    }

    }

 // Задание 3.1
 
 function pow(x, n) {

    let pow = x ** n;
    let x = Number;
    let n = 2;
    let result = x;
     console.log(pow);
  }
  

// Задание 3.2

function pow(x, n) {

    let pow = x ** n;
    let x = Number;
    let n = 2;
    let result = x;
    return result;
  }

// Задание 4


    let age = Number(prompt('Сколько вам лет?'));
    
    function ageCheck(age) {
    if (age < 0 ) {
        alert('Вы ввели неправильное значение')
    } else if (age > 0 && age < 12) {
        alert('Привет, друг!')
    } else  (age > 0 && age > 13) ;{
        alert('Добро пожаловать!')
    }
}

// Задание 5

function mult(c, d) {

    let result = c * d;
    if (c = isNaN, d = isNaN) {
        console.log(result);
    } else (c = isNaN, d != isNaN || c != isNaN, d = isNaN) ;{
        console.log('Одно или оба значения не являются числом')
    }
}

// Задание 6

function numberA(Number) {

    let cube = Number * Number * Number ;
    alert('Введите число');
    if (Number = isNaN) {
        console.log('n в кубе равняется ${cube}');
    } else (Number != isNaN) {
        console.log( 'Переданный параметр не является числом')
    }
}

// Задание 7

const circle1 = { 
    radius: 5, 
    p: 3.14,
    getArea() {
        return getArea
    },
    getPerimeter() {
        return getPerimeter
    }
};

const circle2 = { 
    radius: 5, 
    p: 3.14,
    getArea() {
        return getArea
    },
    getPerimeter() {
        return getPerimeter
    }
};

let getArea = p * (radius * radius);
let getPerimeter = 2 * p * radius;

console.log(circle1.getArea());
console.log(circle1.getPerimeter());

// Задание 8

function month(monthNumber) {

    prompt('Введите номер месяца');

    let monthNumber = isNaN;

    if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
        console.log('Зима');
    } else if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) {
        console.log('Весна');
    } else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
        console.log('Лето');
    } else (monthNumber === 9 || monthNumber === 10 || monthNumber === 11) {
        console.log('Осень');
    }
}





