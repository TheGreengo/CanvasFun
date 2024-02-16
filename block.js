let c = document.getElementById("block-canvas");
let ctx = c.getContext("2d");
let het = 160
let wid = 100
let px 

function update() {
    let g = 0;
    let b = 0;
    for (i = 0; i < het; i++) {
        for (j = 0; j < wid; j++) {
            if (((i+j) % 2) == 0) {
                g = 255;
                b = 0;
            } else {
                g = 0;
                b = 255;
            }
            ctx.fillStyle = "rgba("+0+","+g+","+b+","+(255/255)+")";
            ctx.fillRect( i*5, j*5, 5, 5);
        }
    }
}

function clar() {
    ctx.clearRect(0, 0, c.width, c.height);
}