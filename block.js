let c = document.getElementById("block-canvas");
let ctx = c.getContext("2d");
let wid = 160;
let het = 100;
let posX = 80;
let posY = 50;

let px = new Array(wid).fill([0,0,255]);
let pix = new Array(het).fill(px);

for (i = 0; i < wid; i++) {
    for (j = 0; j < het; j++) {
        setPixel(i, j, 0, 0, 255);
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
}

function left() {
    posX--;
    drawBlock(posX, posY, 0, 255, 0);
}

function right() {
    posX++;
    drawBlock(posX, posY, 0, 255, 0);
}

function down() {
    posY++;
    drawBlock(posX, posY, 0, 255, 0);
}

function clar() {
    ctx.clearRect(0, 0, c.width, c.height);
}