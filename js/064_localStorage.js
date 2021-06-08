'use strict';

// localStorage.setItem() - записать новый ключ
localStorage.setItem('number', 5);

// localStorage.getItem() - получить ключ
console.log(localStorage.getItem('number'));

// localStorage.removeItem() - удалить ключ
localStorage.removeItem('number');

// localStorage.clear() - полностью очистить локальное хранилище
// localStorage.clear();


// запоминаем отметку чекбокса и заливку формы, чтоб после обновления страницы отметка и заливка оставались

const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = 'red';
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#ffffff';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});


// Запись объекта в localStorage
const persone = {
    name: 'Alex',
    age: 25
};

const serializedPersone = JSON.stringify(persone);
localStorage.setItem('alex', serializedPersone);

console.log(JSON.parse(localStorage.getItem('alex')));