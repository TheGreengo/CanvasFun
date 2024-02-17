let c = document.getElementById("block-canvas");
let ctx = c.getContext("2d");
let wid = 160;
let het = 100;
let posX = 80;
let posY = 50;

let px = new Array(wid).fill([255, 255, 255]);
let pix = new Array(het).fill(px);

for (i = 0; i < wid; i++) {
    for (j = 0; j < het; j++) {
        setPixel(i, j, 255, 255, 255);
    }
}

function setPixel(x, y, r, g, b) {
    ctx.fillStyle = "rgba("+r+","+g+","+b+","+(255/255)+")";
    ctx.fillRect( x*5, y*5, 5, 5);
}

function drawBlock(x, y, r, g, b) {
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            setPixel(x + i, y + j, r, g, b);
        }
    }
}

drawBlock(posX, posY, 0, 255, 0);

function up() {
    posY--;
    drawBlock(posX, posY, 0, 255, 0);
    for (j = 0; j < 3; j++) {
        setPixel(posX+j, posY+3, 255, 255, 255);
    }
}

function left() {
    posX--;
    drawBlock(posX, posY, 0, 255, 0);
    for (j = 0; j < 3; j++) {
        setPixel(posX+3, posY+j, 255, 255, 255);
    }
}

function right() {
    posX++;
    drawBlock(posX, posY, 0, 255, 0);
    for (j = 0; j < 3; j++) {
        setPixel(posX-1, posY+j, 255, 255, 255);
    }
}

function down() {
    posY++;
    drawBlock(posX, posY, 0, 255, 0);
    for (j = 0; j < 3; j++) {
        setPixel(posX+j, posY-1, 255, 255, 255);
    }
}

function clar() {
    ctx.clearRect(0, 0, c.width, c.height);
}

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
        if (checkLeftBound()) {
            left();
        }
    }
    else if(event.keyCode == 38) {
        if (checkUpBound()) {
            up();
        }
    }
    else if(event.keyCode == 39) {
        if (checkRightBound()) {
            right();
        }
    }
    else if(event.keyCode == 40) {
        if (checkLowBound()) {
            down();
        }
    }
});

function checkLowBound() {
    // first check if we're at the bottom of the screen
    if (posY >= 97) {
        return false;
    }
    // then check if the colors is not the background
    return true;
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