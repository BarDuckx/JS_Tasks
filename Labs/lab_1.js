const myName = "Данил";
const programmingLanguage = "JavaScript";
const courseCreatorName = "Чеботов Н.М.";
const reasonText = "JavaScript - самый лучший язык программирования";
const numberOfMonths = 2;

let myInfoText =`Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}.\n\nЯ хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMonths} месяцев. Я уверен, что пройду данный курс до конца!`;

myInfoText = myInfoText.replaceAll(programmingLanguage, programmingLanguage.toUpperCase());

console.log(myInfoText);
console.log(`Длина строки: ${myInfoText.length} символа`);
console.log(`Первый символ: '${myInfoText[0]}'\nПоследний символ: '${myInfoText[myInfoText.length - 1]}'`);

let userName = prompt("Как вас зовут?");
let userAge = prompt("Сколько вам лет?");

userName = userName.trim().toLowerCase()
userAge = Number(userAge.trim());

alert(`Вас зовут ${userName} и вам ${userAge} лет`);