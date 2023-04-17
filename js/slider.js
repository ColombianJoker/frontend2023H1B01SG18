var imgs = document.querySelectorAll('.slider img');
var dots = document.querySelectorAll('.dot');
var currentImg = 0; // Índice de la primera imagen
const interval = 3000;  // Duración del slide

var timer = setInterval(changeSlide, interval);

function changeSlide(n) {
    for (var i=0; i<imgs.length; i++ ) {
        imgs[i].style.opacity = 0;
        dots[i].className = dots[i].className.replace(' active', '');
    }
    currentImg = (currentImg + 1) % imgs.length; // cambiar el apuntador a la imagen
    if ( n!= undefined ) {
        clearInterval(timer);
        timer = setInterval(changeSlide, interval);
        currentImg = n;
    }

    imgs[currentImg].style.opacity = 1;
    dots[currentImg].className += ' active';
}

var homeImgs = document.querySelectorAll('.homeproducts img');
var homeImg = 0; // Índice de la primera imagen

var homeTimer = setInterval(changeHomeSlide, 4000);

function changeHomeSlide(n) {
    for (var i=0; i<homeImgs.length; i++ ) {
        homeImgs[i].style.opacity = 0;
        dots[i].className = dots[i].className.replace(' active', '');
    }
    homeImg = (homeImg + 1) % homeImgs.length; // cambiar el apuntador a la imagen
    if ( n!= undefined ) {
        clearInterval(hometimer);
        homeTimer = setInterval(changeHomeSlide, homeinterval);
        homeImg = n;
    }

    homeImgs[homeImg].style.opacity = 1;
    dots[homeImg].className += ' active';
}
