var mark = 'x';

function game(space) {
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

    checkWinner();
}

function reset() {
    var spaces = document.getElementsByClassName('space');
    for (let i = 0; i < spaces.length; i++) {
        const space = spaces[i];
        space.innerHTML = '';
        space.classList.remove('x', 'o', 'highlight');
    }
}

function checkWinner() {
    var spaces = document.getElementsByClassName('space');

    var result = checkSpaces(spaces, 0, 1, 2);
    if (result != '') return result;

    result = checkSpaces(spaces, 3, 4, 5);
    if (result != '') return result;

    result = checkSpaces(spaces, 6, 7, 8);
    if (result != '') return result;

    result = checkSpaces(spaces, 0, 3, 6);
    if (result != '') return result;

    result = checkSpaces(spaces, 1, 4, 7);
    if (result != '') return result;

    result = checkSpaces(spaces, 2, 5, 8);
    if (result != '') return result;

    result = checkSpaces(spaces, 0, 4, 8);
    if (result != '') return result;

    result = checkSpaces(spaces, 2, 4, 6);
    if (result != '') return result;

}

function checkSpaces(spaces, a, b, c) {
    if (spaces[a].innerHTML == spaces[b].innerHTML && spaces[b].innerHTML == spaces[c].innerHTML && spaces[a].innerHTML != '') {
        spaces[a].classList.add('highlight');
        spaces[b].classList.add('highlight');
        spaces[c].classList.add('highlight');

        return spaces[a].innerHTML;
    }
    return '';
}