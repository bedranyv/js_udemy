'use strict';

/* СОБЫТИЯ НА МОБИЛЬНЫХ УСТРОЙСТВАХ

tap - прикасание пальцем к сенсору
События на мобильном браузере:
touchstart - касание пальцем
touchmove - движение пальца
touchend - убрали палец
touchenter - ведение пальцем по экрану в пределах элемента
touchleave - палец вышел за пределы элемента
touchcancel - палец вышел за переделы браузера

Элементы события:
touches - все пальцы, которые сейчас тапнули по экрану (коснуты экрана)
targetTouches - список пальцев которые взаимодействуют с элементом
changedTouches - список пальцев, которые учавствуют в текущем событии. 
Если например это событие touchend, то список будет содержать палец который был убран 
(Даже если остальные 4 пальца до сих пор на экране).
*/

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('Start');
        console.log(e.touches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log('Move');
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('End');
    });
});

