const name = prompt('Введите ваше имя: ');
const age = prompt('Введите ваш возраст: ');

const convertedNumber = Number(age);

if (isNaN(convertedNumber) || convertedNumber < 0) {
    console.log('Введён не верный возраст');
} else if (convertedNumber < 18) {
    console.log(`Привет, ${name}! Ты ещё школьник.`);
} else if (convertedNumber >= 18 && convertedNumber <= 65) {
    console.log(`Привет, ${name}! Ты взрослый человек, заходи.`);
} else {
    console.log(`Привет, ${name}! Для возрастных лиц у нас скидки.`);
}