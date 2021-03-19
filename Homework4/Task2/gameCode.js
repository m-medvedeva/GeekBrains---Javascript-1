//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok;

let answers = {};

do {//Выводим первый вопрос
    ok = false;
    event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');
    answers.q1a = event; // Вносим в свойства объекта answers то, что игрок ввел в первом окне

    if (event == -1) {
        break;
    }
    else {
        ok = isAnswer(works.a0, event);
    }
} while (!ok);
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        do {
            ok = false;
            event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
            answers.q2a = event; // Вносим в свойства объекта answers то, что игрок ввел во втором окне
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.b0, event);
            }
        } while (!ok);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    answers.q3a = event; // Вносим в свойства объекта answers то, что игрок ввел в третьем окне
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);

                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    answers.q3a = event; // Вносим в свойства объекта answers то, что игрок ввел в третьем окне
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        do {
            ok = false;
            event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
            answers.q2a = event; // Вносим в свойства объекта answers то, что игрок ввел во втором окне
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.c0, event);
            }
        } while (!ok);
        switch (event) {
            case 1: // Второе действие
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    answers.q3a = event; // Вносим в свойства объекта answers то, что игрок ввел в третьем окне
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);

                break;
            case 2: // Второе действие
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    answers.q3a = event; // Вносим в свойства объекта answers то, что игрок ввел в третьем окне
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');

let log = +prompt('Введите номер хода, пожалуйста, и я покажу вам ваш ответ', 0);

switch (log) {
    case 1:
        if (answers.q1a == 1) {
            alert('На этом ходе вы выбрали: ' + works.a2); // Выводим цифру, которую игрок вводил в качестве ответа, и соответственно ей текст выбранного хода
        };
        break;

    case 2:
        if (answers.q1a == 1) {
            alert('На этом ходе вы выбрали: ' + works.b1);
        } else {
            alert('На этом ходе вы выбрали: ' + works.b2);
        };
        break;

    case 2:
        if (answers.q1a == 1) {
            alert('На этом ходе вы выбрали: ' + works.d1);
        } else {
            alert('На этом ходе вы выбрали: ' + works.d2);
        };
        break;

    default:
        break;
}

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапaзона');
        return false;
    }
    return true;

}

