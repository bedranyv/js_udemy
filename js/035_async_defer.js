'use strict';

/* 
defer - загрузка скрипта в фоновом режиме и продолжение загрузки страницы. Скрипт выполняется при загрузке DOM дерева.
async - загрузка скрипта в фоновом режиме и продолжение загрузки страницы. Скрипт выполнится сразу же после загрузки.
(не должен зависет от DOM структуры и от других скриптов, прменяется для скриптов счетчиков, метрики)
*/

const p = document.querySelectorAll('p');
console.log(p);

// СОЗДАНИЕ ДИНАМИЧЕСКИХ СКРИПТОВ //
// Создаем тег script и помещаем его на страницу
// по умолчанию динамические скрипты ведут себя как ASYNC (script.async = true;)

function loadScript(src) {
    const script = document.createElement('script'); // создаем тег script
    script.src = src; // помещаем его путь
    document.body.append(script); // добавляем скрипт в конец (метод append) body
}
loadScript('js/test.js');