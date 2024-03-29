let c = document.getElementById("block-canvas");
let ctx = c.getContext("2d");
let wid = 140;
let het = 90;
let cell_x = 0;
let cell_y = 0;
let off_x = 0;
let off_y = 0;

// Legend:
// 0 = background
// 1 = ground
// 2 = ladder
// 3 = ground & ladder
// 4 = coin
// 5 = revealed ladder
// 6 = portal
// 7 = ground & coin
// 8 = monkeybar

let course = [
    [6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,2,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,4,4,4,4,2,0,0,4,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
    [0,0,0,0,2,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,2,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,4,4,4,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,2,1,1,1,1,1,1,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,2,4,4,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,4,4,4,0,0,0],
    [0,1,1,1,1,1,1,1,1,0,0,2,0,0,0,0,0,0,0,0,3,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,0,0,0,0,2,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,2,0,0,0,0,0,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

// left = 0, up = 1, right = 2, down = 3

for (i = 0; i < het; i++) {
    for (j = 0; j < wid; j++) {
        if (i > het - 6) {
            setPixel(i, j, 0, 255, 0);
        } else {
            setPixel(i, j, 255, 255, 255);
        }
    }
}

for (i = 0; i < (het / 5); i++) {
    for (j = 0; j < (wid / 5); j++) {
        if (course[i][j] == 1) {
            ctx.fillStyle = "rgba("+0+","+0+","+255+","+(255/255)+")";
            ctx.fillRect( j*25, i*25, 25, 25);
        } else if (course[i][j] == 2) {
            ctx.fillStyle = "rgba("+128+","+128+","+128+","+(255/255)+")";
            ctx.fillRect( j*25, i*25, 25, 25);
        }  else  if(course[i][j] == 3) {
            ctx.fillStyle = "rgba("+128+","+255+","+255+","+(255/255)+")";
            ctx.fillRect( j*25, i*25, 25, 25);
        }  else  if(course[i][j] == 4) {
            ctx.fillStyle = "rgba("+255+","+255+","+255+","+(255/255)+")";
            ctx.fillRect( j*25, i*25, 25, 25);

            ctx.beginPath();
            ctx.fillStyle = "rgba("+128+","+128+","+0+","+(255/255)+")";
            ctx.ellipse(j*25 + 12.5, i*25 + 12.5, 8, 11, Math.PI, 0, 2 * Math.PI);
            ctx.fill();
        } else {
            ctx.fillStyle = "rgba("+255+","+255+","+255+","+(255/255)+")";
            ctx.fillRect( j*25, i*25, 25, 25);
        }
    }
}

function setPixel(y, x, r, g, b) {
    ctx.fillStyle = "rgba("+r+","+g+","+b+","+(255/255)+")";
    ctx.fillRect( x*5, y*5, 5, 5);
}

function drawBlock(y, x, r, g, b) {
    for (i = 0; i < 5; i++) {
        for (j = 0; j < 5; j++) {
            setPixel(y + i, x + j, r, g, b);
        }
    }
}

function up() {
    posY--;
    for (j = 0; j < 5; j++) {
        setPixel(posY, posX+j, 165, 42, 42);
    }
    for (j = 0; j < 5; j++) {
        setPixel(posY+5, posX+j, 255, 255, 255);
    }
}

function left() {
    posX--;
    for (j = 0; j < 5; j++) {
        setPixel(posY+j, posX, 165, 42, 42);
    }
    for (j = 0; j < 5; j++) {
        setPixel(posY+j, posX+5, 255, 255, 255);
    }
}

function right() {
    posX++;
    for (j = 0; j < 5; j++) {
        setPixel(posY+j, posX+4, 165, 42, 42);
    }
    for (j = 0; j < 5; j++) {
        setPixel(posY+j, posX-1, 255, 255, 255);
    }
}

function down() {
    posY++;
    for (j = 0; j < 5; j++) {
        setPixel(posY+4, posX+j, 165, 42, 42);
    }
    for (j = 0; j < 5; j++) {
        setPixel(posY-1, posX+j, 255, 255, 255);
    }
}

function clar() {
    ctx.clearRect(0, 0, c.width, c.height);
}

document.addEventListener('keydown', function(event) {
    console.log(event.key == "ArrowUp");
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

    let x_cell = Math.floor(posX / 5);
    let y_cell = Math.floor(posY / 5);
    let x_offset = posX % 5;
    let y_offset = posY % 5;

    console.log(y_cell, ",", x_cell);

    if (y_offset != 0) {
        return true;
    }
    // if offset
    return (
        x_offset == 0 ? 
        course[y_cell + 1][x_cell] == 0 || course[y_cell + 1][x_cell] == 4: 
        ((course[y_cell + 1][x_cell] == 0) || (course[y_cell + 1][x_cell] == 4) && 
        (course[y_cell + 1][x_cell + 1] == 0) || (course[y_cell + 1][x_cell] == 4))
    );
}

function checkLeftBound() {
    // first check if we're at the left edge of the screen
    if (posX <= 0) {
        return false;
    }

    let x_cell = Math.floor(posX / 5);
    let y_cell = Math.floor(posY / 5);
    let x_offset = posX % 5;
    let y_offset = posY % 5;

    console.log(y_cell, ",", x_cell);

    if (x_offset != 0) {
        return true;
    }
    // if offset
    return (
        y_offset == 0 ? 
        (course[y_cell][x_cell - 1] == 0 || course[y_cell][x_cell - 1] == 4): 
        (((course[y_cell][x_cell - 1] == 0) || (course[y_cell][x_cell - 1] == 4)) && 
        ((course[y_cell + 1][x_cell - 1] == 0) || (course[y_cell + 1][x_cell - 1] == 4)))
    );
}

function checkRightBound() {
    // first check if we're at the left edge of the screen
    if (posX >= 157) {
        return false;
    }

    let x_cell = Math.floor(posX / 5);
    let y_cell = Math.floor(posY / 5);
    let x_offset = posX % 5;
    let y_offset = posY % 5;

    console.log(y_cell, ",", x_cell);

    if (x_offset != 0) {
        return true;
    }
    // if offset
    return (
        y_offset == 0 ? 
        (course[y_cell][x_cell + 1] == 0 || course[y_cell][x_cell + 1] == 4) : 
        ((course[y_cell][x_cell + 1] == 0 || course[y_cell][x_cell + 1] == 4) && 
        (course[y_cell + 1][x_cell + 1] == 0 || course[y_cell + 1][x_cell + 1] == 4))
    );
}

function checkUpBound() {
    // first check if we're at the left edge of the screen
    if (posY <= 0) {
        return false;
    }

    let x_cell = Math.floor(posX / 5);
    let y_cell = Math.floor(posY / 5);
    let x_offset = posX % 5;
    let y_offset = posY % 5;

    console.log(y_cell, ",", x_cell);

    if (y_offset != 0) {
        return true;
    }
    // if offset
    return (
        x_offset == 0 ? 
        (course[y_cell - 1][x_cell] == 0 || course[y_cell - 1][x_cell] == 4) : 
        ((course[y_cell - 1][x_cell] == 0 || course[y_cell - 1][x_cell] == 4) && 
        (course[y_cell - 1][x_cell + 1] == 0 || course[y_cell - 1][x_cell + 1] == 4))
    );
}

drawBlock(posX, posY, 165, 42, 42);



// * TODOS:
// * the up to only work if we're lined up with a ladder
// * the blocks to render better than just blocks
// * ladders appear behind the person
// * the person to be able to fall
// * there to be gold
// * gold to get picked up when people interact with it
// * gold counter
// * zapping
// * regrowing
// * person looks like a person
// * moving animation
// * all gold collected activates portal and end ladders
// * portal means done