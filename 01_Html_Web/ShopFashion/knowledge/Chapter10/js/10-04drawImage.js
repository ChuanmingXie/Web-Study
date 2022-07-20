function fillImageContext(){
    var contextfill=cavansList[1].getContext('2d');
    var img=new Image();
    img.src='img/demo/girl_little.jpg';
    img.onload=function (param) {  
        var pattern=contextfill.createPattern(img,'repeat');
        contextfill.fillStyle=pattern;
        contextfill.fillRect(0,0,300,300);
    }
}

function drawImageBorder() {
    var contextBorder=cavansList[2].getContext('2d');
    contextBorder.lineWidth=30;
    contextBorder.fillStyle="#3B818C";
    contextBorder.fillRect(0,0,300,300);
    var img=new Image();
    img.src='img/demo/girl_little.jpg';
    img.onload=function(){
        var pattern=contextBorder.createPattern(img,'repeat');
        contextBorder.strokeStyle=pattern;
        contextBorder.strokeRect(35,45,230,200);
    }
}

var cavansList=document.getElementsByTagName('canvas');
fillImageContext();
drawImageBorder();