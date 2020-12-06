'use strict';
// ПОЛУЧЕНИЕ ЭЛЕМЕНТОВ СО СТРАНИЦЫ

// УСТАРЕВШИЕ МЕТОДЫ:
// getElementById - обращение к ID (html -> id='box')
const box = document.getElementById('box');

// getElementsByTagName - обращение к тегу (html -> <div>, <button>)
const btns = document.getElementsByTagName('button');
console.log(btns); // -> псевдомассив, без методов -> HTMLCollection(3) [button, button, button] 
console.log(btns[1]); // -> обращение к конкретной кнопке, используя индекс -> <button>2</button> 

const btns2 = document.getElementsByTagName('button')[1];
console.log(btns2); // -> <button>2</button>

// getElementsByClassName - обращение к классу (html -> class="circle")
const circles = document.getElementsByClassName('circle');
console.log(circles); // -> псевдомассив, без методов -> HTMLCollection(3) [div.circle, div.circle, div.circle] 

// СОВРЕМЕННЫЕ МЕТОДЫ:

// querySelectorAll - обращение к css селектору (ID, класс, псевдоклассы), получаем все элементы
const hearts = document.querySelectorAll('.heart');
console.log(hearts); // -> псевдомассив -> NodeList(3) [div.heart, div.heart, div.heart]
hearts.forEach(item => {
    console.log(item); // -> <div class="heart">1</div> <div class="heart'>2</div>
});

// querySelector - обращение к css селектору (ID, класс, псевдоклассы), получаем один элемент, первый, который подходит
const oneHeart = document.querySelector('.heart');
console.log(oneHeart); // -> <div class="heart">1</div>
