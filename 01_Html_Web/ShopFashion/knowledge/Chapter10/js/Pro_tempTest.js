

function shopcartSet() {
    var arrayimgs = ['s1.jpg', 's2.jpg', 's3.jpg', 's4.jpg', 's5.jpg', 's6.jpg', 's7.jpg', 's8.jpg', 's9.jpg'];
    var arrayamount = [5, 9, 10, 24, 8, 19, 80, 9, 10];
    for (let i = 0; i < arrayimgs.length; i++) {
        var liTag = document.createElement("li");
        var aimgTag = document.createElement("a");
        var aspanTag = document.createElement("a");
        var imgTag = document.createElement("img");
        var pTag = document.createElement("p");
        var spanTag = document.createElement("span");
        aimgTag.href = "#";
        aspanTag.href = "#";
        imgTag.src = "../Chapter09/img/goodadvise/" + arrayimgs[i];
        aimgTag.appendChild(imgTag);

        pTag.innerHTML = arrayamount[i] + "件";
        spanTag.setAttribute("class", "orange floatright");
        spanTag.innerText = "删除";
        aspanTag.appendChild(spanTag);
        pTag.appendChild(aspanTag);
        liTag.appendChild(aimgTag);
        liTag.appendChild(pTag);
        document.querySelector(".shop_pic").appendChild(liTag);
    }
}