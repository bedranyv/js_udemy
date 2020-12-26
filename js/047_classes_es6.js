'use strict'
// КЛАССЫ (синтаксический сахар) - красивая обертка функций-конструкторов

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10, 10);
const long = new Rectangle(20, 100);

console.log(square.calcArea());
console.log(long.calcArea());


// НАСЛЕДОВАНИЕ (ОТ КЛАССА RECTANGLE)

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width); // вызывает тоже самое у родителя (Rectangle), super() должно всегда быть на 1 месте
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello', 'red');

div.showMyProps();
console.log(div.calcArea());


