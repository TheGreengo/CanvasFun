let c = document.getElementById("block-canvas");
let ctx = c.getContext("2d");
let wid = 140;
let het = 90;
let posX = 8;
let posY = 5;

let course = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,2,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,2,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
    [0,0,0,0,2,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,2,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,2,1,1,1,1,1,1,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,0,0,2,0,0,0,0,0,0,0,0,3,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,0,0,0,0,2,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,2,0,0,0,0,0,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

let pix = Array(het);
for (i = 0; i < het; i++) {
    pix[i] = Array(wid);
}

for (i = 0; i < het; i++) {
    for (j = 0; j < wid; j++) {
        if (i > het - 6) {
            setPixel(i, j, 0, 255, 0);
        } else {
            setPixel(i, j, 255, 255, 255);
        }
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
        setPixel(posY, posX+j, 165, 42, 42);
    }
    for (j = 0; j < 3; j++) {
        setPixel(posY+3, posX+j, 255, 255, 255);
    }
}

function left() {
    posX--;
    for (j = 0; j < 3; j++) {
        setPixel(posY+j, posX, 165, 42, 42);
    }
    for (j = 0; j < 3; j++) {
        setPixel(posY+j, posX+3, 255, 255, 255);
    }
}

function right() {
    posX++;
    for (j = 0; j < 3; j++) {
        setPixel(posY+j, posX+2, 165, 42, 42);
    }
    for (j = 0; j < 3; j++) {
        setPixel(posY+j, posX-1, 255, 255, 255);
    }
}

function down() {
    posY++;
    for (j = 0; j < 3; j++) {
        setPixel(posY+2, posX+j, 165, 42, 42);
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

    return (
        pix[posY + 3][posX].toString() == [255,255,255].toString() &&
        pix[posY + 3][posX + 1].toString() == [255,255,255].toString() &&
        pix[posY + 3][posX + 2].toString() == [255,255,255].toString()
    );
}

function checkLeftBound() {
    // first check if we're at the left edge of the screen
    if (posX <= 0) {
        return false;
    }

    return (
        pix[posY][posX - 1].toString() == [255,255,255].toString() &&
        pix[posY + 1][posX - 1].toString() == [255,255,255].toString() &&
        pix[posY + 2][posX - 1].toString() == [255,255,255].toString()
    );
}

function checkRightBound() {
    // first check if we're at the left edge of the screen
    if (posX >= 157) {
        return false;
    }

    return (
        pix[posY][posX + 3].toString() == [255,255,255].toString() &&
        pix[posY + 1][posX + 3].toString() == [255,255,255].toString() &&
        pix[posY + 2][posX + 3].toString() == [255,255,255].toString()
    );
}

function checkUpBound() {
    // first check if we're at the left edge of the screen
    if (posY <= 0) {
        return false;
    }

    return (
        pix[posY - 1][posX].toString() == [255,255,255].toString() &&
        pix[posY - 1][posX + 1].toString() == [255,255,255].toString() &&
        pix[posY - 1][posX + 2].toString() == [255,255,255].toString()
    );
}

drawBlock(posY, posX, 165, 42, 42);