/* ЗАДАНИЕ
3. *Добавить в галерею функцию перехода к следующему изображению. 
По сторонам от большой картинки должны быть стрелки «вперед» и «назад», 
по нажатию на которые происходит замена изображения на следующее или предыдущее. */

'use strict';
let pictures = ['cat1', 'cat2', 'cat3'];

let i = 1;

right.onclick = function () {
    if (i >= 3 || i < 0) {
        i = 0;
    }
    picture.src = 'img/' + pictures[i] + '.jpg';
    picture.alt = 'Котик №' + i;
    i++;
};

left.onclick = function () {
    if (i >= 3) {
        i = 0;
    }
    else if (i < 0) {
        i = 2;
    };

    picture.src = 'img/' + pictures[i] + '.jpg';
    picture.alt = 'Котик №' + i;
    i--;
};


