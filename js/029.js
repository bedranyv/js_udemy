'use strict';

// ДЕЙСТВИЯ С ЭЛЕМЕНТАМИ НА СТРАНИЦЕ

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const wrapper = document.querySelector('.wrapper');
const hearts = wrapper.querySelectorAll('.heart'); // выбор элементов внутри элемента wrapper, а не по всему документу
const oneHeart = wrapper.querySelector('.heart'); // выбор элементов внутри элемента wrapper, а не по всему документу



// Изменение inline стилей
box.style.backgroundColor = 'blue';
box.style.width = '500px';
// инлайн стили -> <div id="box" style="background-color: blue; width: 500px;"></div>

// Изменение inline стилей через cssText
box.style.cssText = 'background-color: blue; width: 500px';
// -> <div id="box" style="background-color: blue; width: 500px;"></div>

btns[1].style.borderRadius = '100%'; // изменение border-radius определенной кнопки, через inline стили
// circles.style.backgroundColor = 'red'; - обращение к псевдомассиву, ошибка, ничего не изменится
circles[0].style.backgroundColor = 'red'; 

// изменение стилей через перебор элементов (редко используется)
for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'yellow';
}

// изменение стилей через перебор элементов forEach (тоже самое что и выше)
hearts.forEach(item => {
    item.style.backgroundColor = 'yellow';
});

// ДОБАВЛЕНИЕ ЭЛЕМЕНТОВ В HTML
const div = document.createElement('div'); // создаем тег div (элемент существует только в JS)
div.classList.add('black'); // добавляем ему класс

// append - элемент в HTML добавляется в конец (в конец wrapper)
wrapper.append(div);

// Устаревшая конструкция:
// wrapper.appendChild(div); 

// prepend - элемент в HTML добавляется в начало (в начало wrapper)
wrapper.prepend(div); 

 // before/after - элемент в HTML добавляется перед/после указанного элемента
hearts[1].before(div); 

// Устаревшая конструкция: (Элемент который вставляем, элемент перед которым вставляем)
// wrapper.insertBefore(div, hearts[0]); 

// remove - удаление элементов в HTML
circles[2].remove();

// Устаревшая конструкция:
// wrapper.removeChild(circles[2]);

// replaceWith - замена одного элемента другим (элемент который меняем.replaceWith(элемент на который меняем))
hearts[0].replaceWith(circles[0]);

// Устаревшая конструкция:
// wrapper.replaceChild(circles[0], hearts[0]);

// Формирование структуры сайта:
div.innerHTML = '<h1>Заголовок</h1>';
div.innerHTML = 'Hello World'; // обычный текст
div.textContent = 'Hello World2'; // второй вариант, но добавляет только текст, без структуры (h1 например)

// Вставка куска HTML кода 

div.insertAdjacentHTML('beforebegin', '<h2>Hello!</h2>');
// beforebegin - вставка кода перед HTML элементом (перед div)
// afterbegin - вставка кода в начало HTML элемента (в начало div)
// beforeend - вставка кода в конец HTML элемента (в конец div)
// afterend - вставка кода после HTML элемента (после div)

