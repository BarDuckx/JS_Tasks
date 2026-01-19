const a = Number(prompt("Введите первое число:"));
const b = Number(prompt("Введите второе число:"));
const c = Number(prompt("Введите третье число:"));

let max;

if (a > b) {
    if (a > c) {
        max = a;
    } else {
        max = c;
    }
} else {
    if (b > c) {
        max = b;
    } else {
        max = c;
    }
}

console.log(`Наибольшее число: ${max}`);