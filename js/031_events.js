// События и их обработчики
'use strict';

const btn = document.querySelector('button');

// Почти не используется, т.к. при повторном вызове в коде, предыдущее не используется
btn.onclick = function() {
    alert('Нажатие');
};
btn.onclick = function() {
    alert('Второе нажатие');
};

// addEventListener
// click - нажатие на кнопку
// mouseenter - наведение на кнопку
btn.addEventListener('click', () => {
    alert('Нажатие');
});
btn.addEventListener('click', () => {
    alert('Второе нажатие');
});

// Объект события (event, e) передается как аргумент в callback функцию
btn.addEventListener('click', (e) => {
    e.target.remove(); // при нажатии (click) происходит удаление элемента (btn)
});

// Второй вариант написания объекта события выше
const deleteElement = (e) => {
    e.target.remove(); 
};

btn.addEventListener('click', deleteElement);

// Удаление обработчика нажатия после первого клика
let i = 0;
const deleteElement2 = (e) => {
    console.log(e.target);
    i++;
    if (i == 1) {
        btn.removeEventListener('click', deleteElement2); // удаление обработчика
    } 
};
btn.addEventListener('click', deleteElement2);

// Удаление обработчика нажатия после первого клика при помощи опции ONCE
const deleteElement3 = (e) => {
    console.log(e.target);
};
btn.addEventListener('click', deleteElement3, {once: true});

// Удаление стандартного поведения браузера
const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault(); // метод удаления стандартного поведения браузера
    console.log(event.target); // при клике на ссылку перехода не происходит, а выводит сообщение в консоль
});

