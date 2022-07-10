var array = [3, 4, 6, 7];
function initImages() {
    array.sort(randomSort);
    var images = document.getElementsByTagName('img');
    for (let i = 0; i < array.length; i++) {
        images[i].src = 'img/time/num_' + array[i] + '.png';
    }
}

function randomSort(a, b) {
    return Math.random(0, 1) > 0.5 ? -1 : 1;
}

function resizeImages() {
    var scale = 0.2;
    var images = document.getElementsByTagName('img');

    var resizeWidth = window.innerWidth * scale;
    if (resizeWidth < 100) {
        resizeWidth = 100;
    }
    for (let i = 0; i < images.length; i++) {
        images[i].style.width = resizeWidth + "px";
    }
}

window.onload = initImages;
window.onresize = resizeImages;