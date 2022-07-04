var sign = 2;
function showPic(index) {
    var focusImg = document.getElementById('focusImg');
    var imgSrc = "img/pic" + index + '.jpg';
    focusImg.src = imgSrc;
    var liArray = document.getElementsByClassName('pic_focusbox')[0].getElementsByTagName('li');
    for (let i = 0; i < liArray.length; i++) {
        liArray[i].className = "";
    }
    liArray[index - 1].className = "cur";
}
function setCurrentPic() {
    showPic(sign);
    sign++;
    if (sign == 4) {
        sign = 1;
    }
}
window.onload=function(){
    showPic(1);
}
window.setInterval("setCurrentPic()",1000);
