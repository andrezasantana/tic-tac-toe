var mark = 'x';

function addition(space) {
    if (space.innerHTML != '') return;

    space.innerHTML = mark;

    if (mark == 'x') {
        space.classList.add('x');
        mark = 'o';
        document.getElementById('player').innerHTML = "o";
    } else {
        space.classList.add('o');
        mark = 'x';
        document.getElementById('player').innerHTML = "x";
    }
}

function reset() {
    var spaces = document.getElementsByClassName('space');
    for (let i = 0; i < spaces.length; i++) {
        const space = spaces[i];
        space.innerHTML = '';
        space.classList.remove('x', 'o');
    }
}