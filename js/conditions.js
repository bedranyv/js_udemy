if (4 == 9) {
    console.log('ok!');
} else {
    console.log('error');
}

const num = 50;

if (num < 49) {
    console.log('error');
} else if (num > 100) {
    console.log('много');
} else {
    console.log('ok');
}

/* Тернарный оператор: равно ли num = 50? да - ок, нет - error*/
const num2 = 50;
(num2 === 50) ? console.log('ok') : console.log('error');

/* SWITCH, работает только на строгое сравнение */
const num3 = 50;

switch (num3) {
    case 49:
        console.log('неверно');
        break;
    case 100:
        console.log('неверно');
        break;
    case 50:
        console.log('верно');
        break;
    default: /* если ни одно из условий не выполняется */
        console.log('не в этот раз');
        break;
}       