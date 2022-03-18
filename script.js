let x = 0;
var canvas = document.getElementById('header-canva');
var width = canvas.width;
console.log(width);
draw(0);
function draw(x) {

    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Cubic curves example
        ctx.beginPath();
        ctx.fillStyle = '#2f3676';
        ctx.moveTo(-20, 00);

        ctx.bezierCurveTo(x - 100, 50, x + 150, 50, canvas.width + 50, 0);

        ctx.fill();
    }
}
var viewForm = document.getElementById("form")
viewForm.addEventListener('mousemove', e => {
    x = e.offsetX;
    draw(x);
});

let quantidade = document.getElementById("quant")
document.getElementById("buttonSub").addEventListener("click", function (event) {
    event.preventDefault()
    var atual = parseInt(quantidade.value)
    if(atual > 1 ){
    quantidade.value = atual-1
    }
});

document.getElementById("buttonAdd").addEventListener("click", function (event) {
    event.preventDefault()
    var atual = parseInt(quantidade.value)
    if(atual < 100 ){
    quantidade.value = atual+1
    }
});