let count = 0;
const display = document.getElementById('outputText');
const log = document.querySelector('ul');

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


function newList(){
    const now = new Date();
    const newPoint = document.createElement('li');
    newPoint.innerHTML = `${now.getSeconds()}:${now.getMinutes()} = ${count}`;
    log.appendChild(newPoint);
}

function resetList(){
    log.innerHTML = '';
}