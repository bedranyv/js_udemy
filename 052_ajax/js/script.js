'use strict';

const inputUah = document.querySelector('#uah'),
      inputUsd = document.querySelector('#usd');

inputUah.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    // собирает настройки для будущего запроса
    // request.open(method(GET/POST), url, async, login, pass);
    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    // ВАРИАНТ 1. readystatechange (проверка на стадии, используется редко)
    // request.addEventListener('readystatechange', () => {
    //     if (request.readyState === 4 && request.status === 200) {
    //         const data = JSON.parse(request.response);
    //         inputUsd.value = (+inputUah.value / data.current.usd).toFixed(2);
    //     } else {
    //         inputUsd.value = 'Что-то пошло не так';
    //     }
    // });

    // ВАРИАНТ 2. load
    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputUah.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = 'Что-то пошло не так';
        }
    });

    // status 
    // statusText
    // response
    // readyState

});