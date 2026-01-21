const str = Number(prompt('Введите строку: '));

if (isNaN(str)) {
    console.log('Введено не число');
} else if (str === 100) {
    console.log('Число равно 100');
} else if (str > 100) {
    console.log('Число больше 100');
} else {
    console.log('Число меньше 100');
}