/* ЗАДАНИЕ
1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию. Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
2. Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, например К – король, Ф – ферзь и т.п., причем все фигуры должны стоять на своих местах и быть соответственно черными и белыми.
3. *Заменить буквы, обозначающие фигуры картинками. */

'use strict';
let makeElement = function (tagName, className, text) {  // функция, с помощью которой можно делать теги с классом и (по желанию) текстовым вложением
    var element = document.createElement(tagName);
    element.classList.add(className);
    if (text) {
        element.textContent = text;
    }
    return element;
};

// создаем элементы шахматной доски - контейнер, таблица, дивы с буквами и цифрами
let wrapper = makeElement('div', 'wrapper');
let block = makeElement('div', 'block');
let table = makeElement('table', 'chess_board');
let letters = makeElement('div', 'letters', 'A B C D E F G H');
let lettersBottom = makeElement('div', 'letters', 'A B C D E F G H');
let numbers = makeElement('div', 'numbers', '1 2 3 4 5 6 7 8');
let numbersRight = makeElement('div', 'numbers', '8 7 6 5 4 3 2 1');


document.body.append(wrapper); // добавляем элементы на страницу
wrapper.append(numbers);
wrapper.append(block);
wrapper.append(numbersRight);
block.append(letters);
block.append(table);
block.append(lettersBottom);

let tr, td;
let cells = []; // массив для хранения ячеек шахматной доски
let blackFigures = ['&#9820;', '&#9822;', '&#9821;', '&#9819;', '&#9818;', '&#9821;', '&#9822;', '&#9820;']; // массив с черными шахматными фигурами
let whiteFigures = ['&#9814;', '&#9816;', '&#9815;', '&#9813;', '&#9812;', '&#9815;', '&#9816;', '&#9814;']; // массив с белыми шахматными фигурами


for (let i = 0; i < 8; i++) {  // создаем строки для таблицы
    tr = document.createElement('tr');
    table.append(tr);

    for (let j = 0; j < 8; j++) {
        td = document.createElement('td'); // создаем столбцы
        tr.append(td);
        cells.push(td);

        if (((i + j) % 2) != 0) {
            td.classList.add('black'); // присвоим классы клеткам, которые должны иметь определенный цвет, чтобы доска была раскрашена как шахматная
        } else {
            td.classList.add('white');
        };
    };
};


let j = 0; // расставляем шахматные фигуры на доске
for (let i = 0; i < 64; i++) {
    if (i < 8) {
        cells[i].innerHTML = blackFigures[i];
    }
    else if (i >= 8 && i <= 15) {
        cells[i].innerHTML = '&#9823;';
    }
    else if (i >= 48 && i <= 55) {
        cells[i].innerHTML = '&#9817;';
    }
    else if (i > 55 && i <= 64) {
        cells[i].innerHTML = whiteFigures[j];
        j++;
    };
}







