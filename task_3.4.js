const secretNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;
let userNum = 0;

while (userNum !== secretNumber) {
    userNum = Number(prompt(`Попытка #${attempts + 1}. Введите число:`));
    
    if (isNaN(userNum)) {
        console.log("Пожалуйста, введите число!");
        continue;
    }
    
    attempts++;
    
    if (userNum < secretNumber) {
        console.log("Загаданное число больше!");
    } else if (userNum > secretNumber) {
        console.log("Загаданное число меньше!");
    } else {
        console.log(`Вы угадали число ${secretNumber} за ${attempts} попыток!`);
    }
}