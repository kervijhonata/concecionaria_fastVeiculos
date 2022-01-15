function blurredBody() {
    var all = document.querySelector("main");
    if(all.style.filter == 'blur(10px)'){
        all.style.filter = 'blur(0px)'
    }else{
        all.style.filter = 'blur(10px)'
    }
}

function toggleMenu(){
    var menu = document.querySelector(".menu");
    var hamburger = document.querySelector(".hamburger");
    menu.classList.toggle("active");
    hamburger.classList.toggle("active");
    
    blurredBody();
}

let liEls = document.querySelectorAll('ul li img');
let index = 0;

window.show = function(increase) {
    if(index == liEls.length) index = 0;
    index = Math.min(Math.max(index,0), liEls.length-1);
    liEls[index].scrollIntoView({behavior: 'smooth'});
    console.log(`index: ${index} || qtd liEls: ${liEls.length}`)
    index = index + increase;
}

function toggleAlerta() {
    var alerta = document.querySelector(".alerta")
    alerta.classList.toggle("visible");
    blurredBody();
}