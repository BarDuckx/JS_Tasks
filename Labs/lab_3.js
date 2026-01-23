const getName1 = function (name) {
    return `Имя равно ${name}`;
}

function getName2(name) {
    return `Имя равно ${name}`;
}

const getName3 = name => `Имя равно ${name}`

console.log(getName1('Данил'));
console.log(getName2('Данил'));
console.log(getName3('Данил'));


const getSumOfNumbers = (number, type) => {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        if (type === 'even') {
            if (i % 2 === 0) {
                sum += i;
            }
        } else if (type === 'odd') {
            if (i % 2 !== 0) {
                sum += i;
            }
        } else {
            sum += i;
        }
    }
    return sum;
}

console.log(getSumOfNumbers(10, 'odd'));
console.log(getSumOfNumbers(10, 'even'));
console.log(getSumOfNumbers(10));