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

const bSubs = document.querySelectorAll('.buttonSub')
bSubs.forEach(bSub => {
    bSub.addEventListener("click", function (event) {
        event.preventDefault()
        var atual = parseInt(this.nextSibling.value)
        if (atual >= 1) {
            this.nextSibling.value = atual - 1
        }
    })
})

const bAdds = document.querySelectorAll('.buttonAdd')
bAdds.forEach(bAdd => {
    bAdd.addEventListener("click", function (event) { 
        event.preventDefault()
        document.getElementById('alertText').style.display = "none";
        var atual = parseInt(this.previousSibling.value)
        if (atual < 100) {
            this.previousSibling.value = atual + 1
        }
    })
})

document.getElementById("buttonEnviar").addEventListener("click", function (event) {
    event.preventDefault()
    var reactQuant = parseInt(document.getElementById("React").value)
    var vueQuant = parseInt(document.getElementById("Vue").value)
    var angularQuant = parseInt(document.getElementById("Angular").value)
    if((reactQuant+vueQuant+angularQuant) > 0){
        document.getElementById('theForm').submit();
    }else{
        document.getElementById('alertText').style.display = "block";
    }   

});