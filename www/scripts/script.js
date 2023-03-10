// находим элементы с классом .services-item, передавая этот класс
// как строку в метод (функция) querySelectorAll() объекта document
let servicesItems = document.querySelectorAll('.services-item');

// Смотрим, что в результате было присвоено в переменную - это массив (список нод - DOM элементов)
console.log(servicesItems);

// Так как в переменную servicesItems присвоено значение с типом данных "массив"
// то мы используем метод имеющийся у такого типа данных - forEach
// Метод выполняется для каждого элемента массива
servicesItems.forEach(
  function(domElem) {
    domElem.style.backgroundColor = 'red';
  }
);

// Тот же результат, но с использованием классического цикла FOR:
// for (let i = 0; i < servicesItems.length ; i++) {
//   servicesItems[i].style.backgroundColor = 'red';
// }



// Тут пример с learn.javaScript про метод массива splice()
let arr = ["Я", "изучаю", "JavaScript", 'rrrr', 'uuuu'];

arr.splice(1, 2);

console.log(arr);






// Пример функции, которая возвращает результат своей работы
// Для этого используют return
function summ(c, z) {
  console.log('BEFORE');

  return c + z;

  // После выполнения команды return функция завершает свою работу и это строка НЕ выполниться:
  console.log('AFTER');
}

// Раз функция возвращает результат работы, то его можно сохранить в переменную
// и потом использовать повторно
let sum1 = summ(3, 4);
console.log(sum1);














// Пример с первого занятия по js о том что язык javaScript НЕстрого типизированный
// В одну и ту же переменную можно записывать разные типы данных
let isOpen = false;

console.log(isOpen);

isOpen = 'Таки да, открыто!';

console.log(isOpen);






// Пример массива объектов:
let petNames = [
  {
    name: 'Gans',
    age: 11
  },
  {
    name: 'Kesha',
    age: 14
  },
  {
    name: 'Rayan',
    age: 7
  },
  {
    name: 'Tosha',
    age: 14
  },
  {
    name: 'Fiona',
    age: 1
  }
];

// А это перебор данного массива объектов циклом
for (let i = 0; i < petNames.length ; i++) {

  // Внутри каждой итерации цикла происходить проверка на возраст животного
  // Если меньше 10 лет, то что-то одно выводим в консоль, если больше то что-то другое
  if (petNames[i].age < 10) {
    console.log(   petNames[i].name + ' иди побегай' );
  } else {
    console.log(   petNames[i].name + ' спать'  );
  }
}


// Пример функции которая ожидает на вход два аргумента
// Такой способ создания функции называется - Function Declaration (Объявление Функции)
function calcPrice(count, price) {
  if (count > 50) {
    console.log('Звони в оптовый отдел');
  } else {
    console.log(count * price);
  }
}

// Вызов функции несколько раз с разными аргументами
calcPrice(3, 1999);
calcPrice(100, 4);
calcPrice(5, 50);

let n = 5;
let rub = 400;
calcPrice(n, rub);


// Пример создания функции через присваивание безымянной функции в переменную
// Такой метод создания функции носит название Function Expression (Функциональное Выражение)
let newFunc = function() {
  console.log('newFunc');
}

// Пример объекта с полем в которое присвоена функция
// Такое поле называется методом объекта
let cat = {
  name: 'kesha',
  age: 13,
  doMew: function(mewType) {
    console.log(mewType);
  }
}

// Вызов (выполнение) метода doMew() объекта cat
cat.doMew();






















// CALLBACKS

function callDifFunc(cb) {
  cb();
}

let redFunc = function() {
  console.log('red');
}

let blueFunc = function() {
  console.log('blue');
}

// let string = 'dsgfdsgafds';
// let nullVar = null

// callDifFunc(string);
// callDifFunc(nullVar);
callDifFunc(redFunc);
callDifFunc(blueFunc);


