let num = 50;

/* пока условие выполняется */
while (num < 55) {
    console.log(num);
    num++;
}

/* сделай что-то пока */
do {
    console.log(num);
    num++;
}

while (num < 55);

/* цикл с переменной i */
for (let i = 1; i < 8; i++) {
    console.log(i);
}

/* break - прерывание цикла при достижении условия */
for (let i = 1; i < 8; i++) {
    if (i === 6) {
        break;
    }
    console.log(i);
}

/* continue - пропуск при выполнении условия*/
for (let i = 1; i < 8; i++) {
    if (i === 6) {
        continue;
    }
    console.log(i);
}