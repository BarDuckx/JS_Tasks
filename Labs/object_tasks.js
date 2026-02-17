const users = [
    {
        username: 'David',
        status: 'online',
        lastActivity: 10
    },
    {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22
    },
    {
        username: 'Bob',
        status: 'online',
        lastActivity: 104
    }
]

const onlineUsers = users.filter(user => user.status === 'online');
const usersOnlineNames = onlineUsers.map(user => user.username);

alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames.join(', ')}`);


const ordersArr = [4, 2, 1, 3];
const people = [
    {id: 1, name: 'Максим'},
    {id: 2, name: 'Николай'},
    {id: 3, name: 'Ангелина'},
    {id: 4, name: 'Виталий'}
];

const giveTalonsInOrder = (patients, orders) => {
    const result = [];
    for (let i = 0; i < orders.length; i++) {
        result.push(patients.find(patient => patient.id === orders[i]));
    }
    return result;
}

const result = giveTalonsInOrder(people, ordersArr);
console.log('result', result);


const student = {
    name: 'Maxim',
    programingLanguage: 'JavaScript',
}

const handleObjects = (obj, key, action) => {
    if (action === 'get') {
        return obj[key];
    } 
    else if (action === 'add') {
        obj[key] = '';
        return obj;
    } 
    else if (action === 'delete') {
        delete obj[key];
        return obj;
    } 
    else {
        return obj;
    }
}

const result1 = handleObjects (student, 'programingLanguage', 'delete');

console.log('result1', result1);