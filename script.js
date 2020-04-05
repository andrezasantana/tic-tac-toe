var mark = 'x';

function addition(el) {
    if (el.innerHTML != '') return;

    el.innerHTML = mark;

    if (mark == 'x') mark = 'o';
    else mark = 'x';
}