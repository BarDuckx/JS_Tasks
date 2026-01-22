const existedUserLogin = "the_best_user";
const existedUserPassword = "12345678";

let userLogin = prompt("Введите логин");
let userPassword = prompt("Введите пароль");

userLogin = userLogin.trim();
userPassword = userPassword.trim();

if (userLogin === existedUserLogin && userPassword === existedUserPassword) {
    alert(`Добро пожаловать, ${userLogin}!`);
} else {
    alert("Логин и (или) Пароль введены неверно!");
}


const correctAnswer1 = 4;
const correctAnswer2 = 4;
const correctAnswer3 = 1;
const correctAnswer4 = 12;
const correctAnswer5 = 6;

let correctAnswers = 0;
let incorrectAnswers = 0;

const UserAnswer1 = Number(prompt("Сколько будет 2 + 2?"));
if (UserAnswer1 === correctAnswer1) {
    alert("Ответ верный!");
    correctAnswers++;
} else {
    alert("Ответ неверный!");
    incorrectAnswers++;
}

const UserAnswer2 = Number(prompt("Сколько будет 2 * 2?"));
if (UserAnswer2 === correctAnswer2) {
    alert("Ответ верный!");
    correctAnswers++;
} else {
    alert("Ответ неверный!");
    incorrectAnswers++;
}

const UserAnswer3 = Number(prompt("У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?"));
if (UserAnswer3 === correctAnswer3) {
    alert("Ответ верный!");
    correctAnswers++;
} else {
    alert("Ответ неверный!");
    incorrectAnswers++;
}

const UserAnswer4 = Number(prompt("У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?"));
if (UserAnswer4 === correctAnswer4) {
    alert("Ответ верный!");
    correctAnswers++;
} else {
    alert("Ответ неверный!");
    incorrectAnswers++;
}

const UserAnswer5 = Number(prompt("Сколько будет 2 + 2 * 2?"));
if (UserAnswer5 === correctAnswer5) {
    alert("Ответ верный!");
    correctAnswers++;
} else {
    alert("Ответ неверный!");
    incorrectAnswers++;
}

alert(`Конец теста! Правильные ответ - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}`);


const Question1 = confirm("JavaScript появился в 1995 году?");
if (Question1) {
    alert("Верно");
} else {
    alert("JavaScript появился в 1995 году");
}

const Question2 = confirm("Спецификация JavaScript называется ECMAScript?");
if (Question2) {
    alert("Верно");
} else {
    alert("Спецификация JavaScript называется ECMAScript");
}

const Question3 = confirm("JavaScript был создан за 1 месяц?");
if (Question3) {
    alert("JavaScript был создан за 10 дней");
} else {
    alert("Верно");
}


let i = 0;

do {
    let newStudent = prompt('Введите имя нового студента!');
    newStudent = newStudent.trim();
    if (newStudent) {
        alert(`Добро пожаловать, ${newStudent}!`);
        i++;
    }
} while (i < 3);


let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}
alert(`Сумма чисел от 1 до 100 равна: ${sum}`);