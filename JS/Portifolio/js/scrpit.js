var i = 0
var speed = 110;
var text = "I'm Thiago Pedron, nice to meet you."
window.onload = function () {
    if (i < text.length) {
        document.getElementById('text').innerHTML += text.charAt(i)
        i++
        setTimeout(window.onload, speed);
    }

};

