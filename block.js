let c = document.getElementById("block-canvas");
let ctx = c.getContext("2d");
let wid = 160;
let het = 100;
let posX = 80;
let posY = 50;

let pix = Array(het);
for (i = 0; i < het; i++) {
    pix[i] = Array(wid);
}

for (i = 0; i < het; i++) {
    for (j = 0; j < wid; j++) {
        setPixel(i, j, 255, 255, 255);
    }
}

function setPixel(y, x, r, g, b) {
    ctx.fillStyle = "rgba("+r+","+g+","+b+","+(255/255)+")";
    ctx.fillRect( x*5, y*5, 5, 5);
    if (y === 80 & x === 120) {
        console.log("YOU BASTARD ", r, ',',g,',',b);
    }
    pix[y][x] = [r,g,b];
}

function drawBlock(y, x, r, g, b) {
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            setPixel(y + i, x + j, r, g, b);
        }
    }
}

function up() {
    posY--;
    for (j = 0; j < 3; j++) {
        setPixel(posY, posX+j, 0, 255, 0);
    }
    for (j = 0; j < 3; j++) {
        setPixel(posY+3, posX+j, 255, 255, 255);
    }
}

function left() {
    posX--;
    for (j = 0; j < 3; j++) {
        setPixel(posY+j, posX, 0, 255, 0);
    }
    for (j = 0; j < 3; j++) {
        setPixel(posY+j, posX+3, 255, 255, 255);
    }
}

function right() {
    posX++;
    for (j = 0; j < 3; j++) {
        setPixel(posY+j, posX+2, 0, 255, 0);
    }
    for (j = 0; j < 3; j++) {
        setPixel(posY+j, posX-1, 255, 255, 255);
    }
}

function down() {
    posY++;
    for (j = 0; j < 3; j++) {
        setPixel(posY+2, posX+j, 0, 255, 0);
    }
    for (j = 0; j < 3; j++) {
        setPixel(posY-1, posX+j, 255, 255, 255);
    }
}

function clar() {
    ctx.clearRect(0, 0, c.width, c.height);
}

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
        if (checkLeftBound()) {
            left();console.log(pix[80][120]);
        }
    }
    else if(event.keyCode == 38) {
        if (checkUpBound()) {
            up();console.log(pix[80][120]);
        }
    }
    else if(event.keyCode == 39) {
        if (checkRightBound()) {
            right();console.log(pix[80][120]);
        }
    }
    else if(event.keyCode == 40) {
        if (checkLowBound()) {
            down();console.log(pix[80][120]);
        }
    }
});

function checkLowBound() {
    // first check if we're at the bottom of the screen
    if (posY >= 97) {
        return false;
    }
    // console.log("at: ",posY+4, "," ,posX, ": ", pix[posY+4][posX]);
    return true;
    // then check if the colors is not the background
    return (
        pix[posX][posY]
    );
}

function checkLeftBound() {
    // first check if we're at the left edge of the screen
    if (posX <= 0) {
        return false;
    }
    return true;
}

function checkRightBound() {
    // first check if we're at the left edge of the screen
    if (posX >= 157) {
        return false;
    }
    return true;
}

function checkUpBound() {
    // first check if we're at the left edge of the screen
    if (posY <= 0) {
        return false;
    }
    return true;
}

setPixel(80, 120, 0, 255, 255);
drawBlock(posY, posX, 0, 255, 0);