let count = 0;
const display = document.getElementById('outputText');

function update(){
    display.innerHTML = count;
}

function tambah(){
    count++;
    update();
}

function kurang(){
    count--;
    update();
}

function reset(){
    count = 0;
    update();
}