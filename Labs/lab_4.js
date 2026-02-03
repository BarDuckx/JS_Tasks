const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб']

const giveParcel = queue => {
    const personName = queue.shift();
    alert(`${personName} получил(а) посылку. В очереди осталось ${queue.length} человек.`);
}

const leaveQueueWithoutParcel = queue => {
    const personName = queue.pop();
    alert(`${personName} не получил(а) посылку и ушел(ла) из очереди.`);
}

giveParcel(peopleWaiting);
giveParcel(peopleWaiting);
giveParcel(peopleWaiting);

while (peopleWaiting.length > 0) {
    leaveQueueWithoutParcel(peopleWaiting);
}


const getSumOfSequence = number => {
    const sequence = [];

    for (let i = 1; i <= number; i++) {
        sequence.push(i);
    }

    const sum = sequence[0] + sequence[sequence.length - 1];
    return sum;
}

console.log(getSumOfSequence(5));


const coffees = ['Latte', 'Cappuccino', 'Americano']

const coffeeName = prompt('Поиск кофе по названию:')

const coffeeIndex = coffees.findIndex(coffee => coffee.toLowerCase() === coffeeName.toLowerCase());

if (coffeeIndex !== -1) {
    alert(`Держите ваш любимый кофе ${coffees[coffeeIndex]}. Он ${coffeeIndex + 1}-й по популярности в нашей кофейне.`);
} else {
    alert('К сожалению, такого вида кофе нет в наличии');
}
