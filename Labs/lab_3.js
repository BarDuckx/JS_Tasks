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