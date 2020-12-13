// Обращение к body в HTML
console.log(document.body);

// Обращение ко всем узлам (node) внутри body
console.log(document.body.childNodes); // -> Получаем псевдомассив с элементами (text - перенос строки)

// Обращение к первому (firstChild) / последнему (lastChild) ребенку (node) внутри body
/* Например HTML код:
<body>
    <p>Hello World!</p>
</body>
*/
console.log(document.body.firstChild); // -> text (перенос строки)
// или обращение непосредственно к элементам (firstElementChild, lastElementChild)
console.log(document.body.firstElementChild); // -> <p>Hello World!</p>

// parentNode - обращение к родителю элемента
/* Например HTML код:
<div class="wrapper">
    <div class="first">
        <button id="current">1</button>
    </div>
</div>
*/
console.log(document.querySelector('#current').parentNode); // -> <div class="first">...</div>
console.log(document.querySelector('#current').parentNode.parentNode); // -> <div class="wrapper">...</div>
// аналог parentElement
console.log(document.querySelector('#current').parentElement); // -> <div class="first">...</div>

// Обращение к 'дата' элемента и обращение к соседям (nextSibling, previousSibling),
// а также обращение к соседним элементам (nextElementSibling, previousElementSibling)
/* Например HTML код:
<ul>
    <li>1</li>
    <li>2</li>
    <li data-current="3">3</li>
    <li>4</li>
</ul>
*/
console.log(document.querySelector('[data-current="3"]')); // -> <li data-current="3">3</li>
console.log(document.querySelector('[data-current="3"]').nextSibling); // -> text (перенос строки)
console.log(document.querySelector('[data-current="3"]').nextElementSibling); // -> <li>4</li>






