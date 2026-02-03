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
