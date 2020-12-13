
const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.wrapper');
/*
console.log(btns[0].classList.length); // количество классов у элемента -> 2
console.log(btns[0].classList.item(0)); // метод получения класса под определенным индексом -> blue
console.log(btns[0].classList.add('red')); // метод добавления классов -> <button class="blue some red"></button>
console.log(btns[0].classList.remove('blue')); // метод удаления классов
console.log(btns[0].classList.toggle('blue')); // метод переключателя классов, если его нет - добавит, есть - удалит

// метод проверки на наличие класса, возвращает boolean значение:
if (btns[1].classList.contains('red')) {
    console.log('есть');
}
*/

// Если кнопка не содержит класс red - удаляем, если содержит - удаляем
btns[0].addEventListener('click', () => {
    if (!btns[1].classList.contains('red')) {
        btns[1].classList.add('red');
    } else {
        btns[1].classList.remove('red');
    }

    // или (тоже самое)
    // btns[1].classList.toggle('red');
});

// ДЕЛЕГИРОВАНИЕ СОБЫТИЙ с родителя на потомков
// При клике на кнопку внутри wrapper (если объект события содержит тег BUTTON), то выводим сообщение в консоль
// tagName у кнопки = BUTTON

wrapper.addEventListener('click', (e) => {
    if (e.target && e.target.tagName == 'BUTTON') {
        console.log('Hello');
    }
});

// Добавляем еще одну кнопку через JS и верхее действие (вывод в консоль) срабатывает и на ней, благодаря делегированию
const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);