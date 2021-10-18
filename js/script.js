"use strict"

//const { use } = require("browser-sync");

//строгий режим
//const { use } = require("browser-sync");



/* alert('Hello Gulp!'); */
/* webp */
/*
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});
*/

/*let admins = 10;
let users = 5;
admins > users || users++;
console.log(users);*/

/*let tvPrice = '999.99 - цена TV ';
let loschka = 'для ложки ';
console.log(tvPrice);
console.log(loschka);
let tvPriceLoschka = 2 + tvPrice + loschka;
console.log(tvPriceLoschka);
console.log(tvPriceLoschka);*/

/*let userName = '';
let userNickName = '';

console.log(userNickName);

let user = userName || userNickName || "no name";
console.log(user);*/


//alert('Привет'); alert('Мир');

/*console.log(!false && 11 || 18 && !'');

if (0) {
    console.log('no');
} else if (" ") {
    console.log('es')
};

console.log(!false && 11 || 18 && !'');

let num = 0;

while (num < 3) {
    console.log(`Число: ${num}`);
    num++;
};

for (let num = 0; num < 3; num++) {
    console.log(`Число: ${num}`);
};

forFirst: for (let num = 0; num < 2; num++) {
    for (let size = 0; size < 3; size++) {
        if (size == 1) {
            break forFirst;
        }
        console.log(size);
    }
}

function calcSumm(numOne, numTwo) {
    console.log(`Переменная numOne:${numOne}`);
    console.log(`Переменная numOne:${numTwo}`);

    let numSumm = numOne + numTwo;

    console.log(`Суммa:${numSumm}`);
};
calcSumm(5, 256);

let messege = 'Hello';
alert(messege);
messege = 'World!!!';
alert(messege);*/

/*let testNumber = "123";
console.log(typeof testNumber);
alert(testNumber);
console.log(typeof testNumber);


let lochka = prompt("ты ложка?", 'Впиши ответ');

let messed = 'Ложка';
let altMessed = 'Супер-Ложка';
if (lochka == "да") {
    alert(`Привет ${messed}`);
    alert("Ты чесная Ложка!!!");
} else {
    alert(`Привет ${altMessed}`);
    alert('Ты Не чесная Ложка!!!');
};

let compani = prompt('Какое «официальное» название JavaScript?', '');
if (compani == "ECMAScript") {
    alert("Верно!");
} else {
    alert('Не знаете? ECMAScript!');
};

let numWan = prompt("впиши число", '');
if (numWan > 0) {
    alert('1');
} else if (numWan < 0) {
    alert("-1");
} else {
    alert('0');
};*/

//let result = (a + b < 4) ? 'Мало': 'Много';

/*let compani1 = prompt("Какое «официальное» название JavaScript?", '');
if (compani1 == "ECMAScript") {
    alert('Верно!');
} else {
    alert('Не знаете? ECMAScript!');
};

let numberTester = prompt("число?", '');
if (numberTester > 0) {
    alert(1);
} else if (numberTester < 0) {
    alert(-1);
} else {
    alert(0);
};

let result = (a + b < 4) ? 'Мало' : 'Много';

let message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
        (login == '') ? 'Нет логина' :
            '';*/



/*let age;
age = prompt("возраст", '');
if (age >= 14 && age <= 90) {
    alert(age);
}*/

/*let hour = 9;
hour = prompt('', "9");
if (hour < 10 || hour > 18) {
    alert('Офис закрыт.');
}*/

/*let age1;
age1 = prompt("age?", '13');

if (age1 >= 14 && age1 <= 90) {
    alert(age1);
};

if (age1 < 14 || age1 > 90) {
    alert(age1);
};*/

/*let gost;
let pasword;

gost = prompt('Кто там?', "");
if (gost == 'Админ' || gost == 'админ') {
    pasword = prompt('Пароль?', '');

    if (pasword == null || pasword == '') {
        alert('Отменено');
    } else if (pasword == 'Я Главный') {
        alert('Здравствуйте!');
    } else {
        alert('Неверный пароль');
    }

} else if (gost == null || gost == "") {
    alert('Отменено');
} else if (gost == 'Ложка' || gost == 'ложка') {
    alert('Привет Роман!');
    alert('Для тебя, Ложка, пароль не нужен)');
}
else {
    alert('Я вас не знаю');
};*/

/*let gost;
let pasword;

gost = prompt('Кто там?', "Роман");
if (gost == 'Админ' || gost == 'админ') {
    pasword = prompt('Пароль?', '');

    if (pasword == null || pasword == '') {
        alert('Отменено');
    } else if (pasword == 'Я Главный') {
        alert('Здравствуйте!');
    } else {
        alert('Неверный пароль');
    }

} else if (gost == null || gost == "") {
    alert('Отменено');
} else if (gost == 'Ложка' || gost == 'ложка') {
    alert('Привет Роман!');
    alert('Для тебя, Ложка, пароль не нужен)');
} else if (gost == 'Роман') {
    let locshka1 = confirm("Ты ложка?");
    if (locshka1 == true) {
        alert('Ты честная Ложка!');
    } else {
        alert('Ты не честная Ложка!!!');
    }
}
else {
    alert('Я вас не знаю');
};*/

/*for (let i = 0; i < 10; i++) {

    if (i % 2) {
        alert(i);
    }

};*/

/*for (let number12 = 2; number12 <= 10; number12++) {
    if (!(+number12 % 2)) {
        alert(number12);
    }
};

for (let number10 = 2; number10 <= 10; number10++) {
    if (number10 % 2 == 0) {
        alert(number10);
    }
};*/

/*let i = 0;
while (i < 3) {
    alert(`number ${i++}!`);
    //alert(`number ${i}!`);  //альтернатива
    //i++;                    //альтернатива
}*/

/*let number100;

do {
    number100 = prompt('ввести число, большее 100', '');
} while (number100 <= 100 && number100);  // при вводе текста выводит уведомление "цифры" и предлогает ещё раз
if (number100 > 100) alert(number100);*/


/*for (let number101 = 100; (number101 <= 100 && number101);) {
    number101 = prompt('ввести число, большее 100', '');
};*/        //более хуёвая функция

/*let number102;

do {
    number102 = +prompt('ввести число, большее 100', '');

} while (number102 <= 100 && number102);  // при вводе текста выводит уведомление "цифры" и предлогает ещё раз
if (number102 > 100) {
    alert(number102)
};*/





/*let number103 = +prompt('ввести число, большее 100', '');

for (; !!number103 == false;) {
    alert("только числа");
    number103 = +prompt('ввести число, большее 100', '');
    if (number103 == Number) break;
};
for (; (number103 <= 100 && number103);) {
    number103 = prompt('ввести число, большее 100', '');
};*/

/*let number103 = +prompt('1 ввести число, большее 100', '');

for (; !!number103 == false;) {
    alert("только числа");
    number103 = +prompt('2 ввести число, большее 100', '');
    if (number103 == Number) break;
};
for (; (number103 <= 100 && number103);) {
    number103 = prompt('3 ввести число, большее 100', '');
};
alert(number103);*/

/*let age666 = prompt('14-90',);

if (age666 <= 14 || age666 >= 90) {
    alert(age666);
} else {
    alert("NO");
};*/
//if (age666 <= 14 || age666 >= 90)


/*let userPass
    , pass;

userPass = prompt('Кто там?', '');

if (userPass == "Админ") {
    pass = prompt('Пароль?');
    if (pass == 'Я Главный') {
        alert('Здравствуйте!');
    } else if (pass == null || pass == '') {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    };
} else if (userPass == null || userPass == "") {
    alert('Отменено');
} else {
    alert('Я вас не знаю');
};*/

//моё
/*let numberPromt;
do {
    numberPromt = prompt("Введите число, большее 100?", 0);
    if (numberPromt > 100 || numberPromt == null || numberPromt == '') break;
} while (numberPromt <= 100);*/

//решение в учебнике
/*let num;

do {
    num = prompt("Введите число, большее 100?", 0);
} while (num <= 100 && num);*/

/*const number30 = +prompt('Введите число между 0 и 3', '');

switch (number30) {
    case 0:
        alert('Вы ввели число 0');
        break;
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;
};*/



//alert('Давай посчитаем твою долю!');

/*let yourTurnover,
    totalTurnover,
    shareQuestion,
    share;

shareQuestion = confirm("Хочешь узнать свою долю?", '');

function calkShare() {
    yourTurnover = +prompt('Введи свой оборот', '10');
    totalTurnover = +prompt("Введи общий оборот", '100');
    share = yourTurnover * 100 / totalTurnover;
    alert(`Твоя доля: ${share}`);
    if (share == 20) {
        alert('Молодец!!!');
    } else if (share > 20) {
        alert('Идёшь на перевыполнение! Так держать!!!');
    } else {
        alert('Времени на раскачку нет , нужен резутьтат.')
    }
};

if (shareQuestion) { calkShare(); };*/

/*if (share == 20) {
    alert('Молодец!!!');
} else if (share > 20) {
    alert('Идёшь на перевыполнение! Так держать!!!');
} else {
    alert('Времени на раскачку нет , нужен резутьтат.')
}*/


/*if (share !== NaN) {
    alert(`Твоя доля: ${share}`);
    //alert('Только цифры!', '');
} else {
    alert('Только цифры!', '');
    //alert(`Твоя доля: ${share}`);
};
//console.log(typeof (share));
//alert(typeof share);
*/

//Калькулятор доли
/*let yourTurnover,
    totalTurnover,
    shareQuestion,
    share;

shareQuestion = confirm("Хочешь узнать свою долю?", '');

function calkShare() {
    yourTurnover = +prompt('Введи свой оборот', '10');
    totalTurnover = +prompt("Введи общий оборот", '100');
    share = yourTurnover * 100 / totalTurnover;
};

function showShare() {
    if (share) {
        alert(`Твоя доля: ${share}`);
    } else {
        alert('Только цифры!', '');
    };
};

function checkShare() {
    if (share == 20) {
        alert('Молодец!!!');
    } else if (share > 20) {
        alert('Идёшь на перевыполнение! Так держать!!!');
    } else {
        alert('Времени на раскачку нет , нужен резутьтат.')
    };
};*/

/*function shareWork() {
    if (shareQuestion) { calkShare(); };
    showShare();
    if (share) { checkShare(); };
};
shareWork();*/

/*let shareQuestionAgain = confirm('повторим?', '');

while (shareQuestionAgain) {
    shareWork();
};*/

/*if (shareQuestion) {
    calkShare();
    showShare();
    if (share) { checkShare() };
};*/
//конец

/*let testOgekt = {
    nestName: "Im",
    testNumber: 666,
};

alert(testOgekt.nestName);

testOgekt.testMore = 777777;

alert(testOgekt.testMore);

delete testOgekt.nestName;

alert(testOgekt.nestName);

testOgekt["testet one"] = "два слова в имени";

alert(testOgekt['testet one']);

let newLiteral = "testet one";

alert(newLiteral);

alert(testOgekt['testet one']);

let testKey = prompt("literal", '');

alert(testOgekt[testKey]);

testOgekt.literalTwo = 1515;*/

/*function makeUser(name, age) {
    return {
        name: name,
        age: age,
        // ...другие свойства
    };
};

let nameTestOgekt = prompt('name', '');
let ageTestObgekt = prompt('age', '');

let user = makeUser(nameTestOgekt, ageTestObgekt);
alert(user.name); // John
alert(user.age);

alert("testOffLiteral" in makeUser);
alert("name" in makeUser);*/

/*let codes = {
    "+49": "Германия",
    "+41": "Швейцария",
    "+44": "Великобритания",
    // ..,
    "+1": "США"
};

for (let code in codes) {
    alert(+code); // 49, 41, 44, 1
}*/

/*let userTask = {};
userTask.name = 'John';
userTask['surname 1'] = 'Smith';
alert(userTask['surname 1']);
alert(userTask.name);
userTask.name = 'Pete';
alert(userTask.name);
delete userTask.surname;
alert(userTask['surname 1']);*/


/*let schedule = {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // false



function isEmpty(obj) {
    for (let key in obj) {
        // если тело цикла начнет выполняться - значит в объекте есть свойства
        return false;
    }
    return true;
}*/


/*let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
    Iem: 10,
};

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

alert(sum);*/
/*for (let key in salaries) {
    alert(salaries[key])
};*/

/*let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

for (let key in menu) {
    alert(key);
    alert(menu[key]);
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
};

multiplyNumeric(menu);

for (let key in menu) {
    alert(key);
    alert(menu[key]);
};*/

/*let userInfo = {
    name: "Vasa",
    age: 30,
};

for (const key in userInfo) {
    const value = userInfo[key]
    alert(value);
}*/

//Калькулятор доли
let yourTurnover,
    totalTurnover,
    share,
    result;


function calkShare(yourTurnover, totalTurnover) {
    share = yourTurnover * 100 / totalTurnover;
    checkShare();
    share = share.toFixed(2);
    result = "Твоя доля: " + share + '%';
    return result;
};


function checkShare() {
    if (share == 20) {
        alert('Молодец!!!');
    } else if (share > 20) {
        alert('Идёшь на перевыполнение! Так держать!!!');
    } else {
        alert('Времени на раскачку нет , нужен резутьтат.')
    };
};

//Костыль, но работает
function shareWorkWm() {
    calkShare(document.getElementById('samWm').value, document.getElementById('allRevWm').value);
    document.getElementById('outWm').innerHTML = result;
    //checkShare();
};


function shareWorkRef() {
    calkShare(document.getElementById('samRef').value, document.getElementById('allRevRef').value);
    document.getElementById('outRef').innerHTML = result;
};

function shareWorkVc() {
    calkShare(document.getElementById('samVc').value, document.getElementById('allRevVc').value);
    document.getElementById('outVc').innerHTML = result;
};

function shareWorkMwo() {
    calkShare(document.getElementById('samMwo').value, document.getElementById('allRevMwo').value);
    document.getElementById('outMwo').innerHTML = result;
};