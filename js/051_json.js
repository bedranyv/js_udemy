'use strict';

const persone = {
    name: 'Alex',
    tel: '+380938563193',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

// JSON.stringify - метод для передачи на сервер
console.log(JSON.stringify(persone));
// {"name":"Alex","tel":"+380938563193"}

// JSON.parse - метод для обратного превращения в объект
console.log(JSON.parse(JSON.stringify(persone)));
// { name: 'Alex', tel: '+380938563193' }


// СОЗДАНИЕ ГЛУБОКОЙ КОПИИ ОБЪЕКТА
const clone = JSON.parse(JSON.stringify(persone));

clone.parents.mom = 'Ann';
console.log(persone);
console.log(clone);