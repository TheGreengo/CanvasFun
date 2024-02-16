var c = document.getElementById("block-canvas");
var ctx = c.getContext("2d");

function update() {
    for (i = 0; i < 100; i += 5) {
        ctx.fillStyle = "rgba("+0+","+100+","+10+","+(255/255)+")";
        ctx.fillRect( i, i, 10, 10 );
    }
}