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

// animação da tela ir aparecendo


const debounce = function(func, wait, i, immediate){
    let timeout;
    return function(...args){
        const context = this;
        const later = function () {
            timeout = null;
            if(!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout = setTimeout(later, wait);
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    }
}


const target = document.querySelectorAll ('[data-anime]');

const animationClass = 'animate';

function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3.5) / 4);
    target.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass)
        } else{
            element.classList.remove(animationClass)
        }
    })
}

if(target.length){
    window.addEventListener('scroll', debounce(function(){
        animeScroll();
    }, 500))
}