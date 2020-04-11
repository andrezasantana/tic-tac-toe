var mark = '<span class="x">x</span>';

function addition(el) {
    if (el.innerHTML != '') return;

    el.innerHTML = mark;

    if (mark == '<span class="x">x</span>') mark = '<span class="o">o</span>';
    else mark = '<span class="x">x</span>';
}
function reset() {
    var spaces = document.getElementsByClassName('space');
    for (let i = 0; i < spaces.length; i++) {
        const space = spaces[i];
        space.innerHTML = '';
    }
}