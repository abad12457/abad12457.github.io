/* 언어 버튼 */
function krlang() {
    var x = document.getElementsByClassName("engbutton");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    var y = document.getElementsByClassName("button");
    for (var i = 0; i < y.length; i++) {
        y[i].style.display = "inline"; /*inherit*/
    }
    var z = document.getElementsByClassName("eng");
    for (var i = 0; i < z.length; i++) {
        z[i].style.display = "none";
    }
    var a = document.getElementsByClassName("kr");
    for (var i = 0; i < a.length; i++) {
        a[i].style.display = "block";
    }
}

function englang() {
    var x = document.getElementsByClassName("button");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    var y = document.getElementsByClassName("engbutton");
    for (var i = 0; i < y.length; i++) {
        y[i].style.display = "inline";
    }            
    var z = document.getElementsByClassName("kr");
    for (var i = 0; i < z.length; i++) {
        z[i].style.display = "none";
    }
    var a = document.getElementsByClassName("eng");
    for (var i = 0; i < a.length; i++) {
        a[i].style.display = "block";
    }
}

/* 종류 버튼 */
function clbread() {
    var x = document.getElementsByClassName("con")
    for (var i=0;i<x.length;i++) {
        x[i].style.display="none";
    }
    var y = document.getElementsByClassName("bread");
    for (var i = 0; i < y.length; i++) {
        y[i].style.display="block";
    }
    x=document.getElementsByClassName("oven");
    for (var i=0;i<x.length;i++) {
        x[i].style.display="block";
    }
    x=document.getElementsByClassName("mini");
    for (var i=0;i<x.length;i++) {
        x[i].style.display="block";
    }
    x=document.getElementsByClassName("no");
    for (var i=0;i<x.length;i++) {
        x[i].style.display="block";
    }
}

function clcookie() {
    var x = document.getElementsByClassName("con")
    for (var i=0;i<x.length;i++) {
        x[i].style.display="none";
    }
    var y=document.getElementsByClassName("cookie")
    for (var i=0;i<y.length;i++) {
        y[i].style.display="block";
    }
    x=document.getElementsByClassName("oven");
    for (var i=0;i<x.length;i++) {
        x[i].style.display="block";
    }
    x=document.getElementsByClassName("mini");
    for (var i=0;i<x.length;i++) {
        x[i].style.display="block";
    }
    x=document.getElementsByClassName("no");
    for (var i=0;i<x.length;i++) {
        x[i].style.display="block";
    }
}

function clcandy() {
    var x = document.getElementsByClassName("con")
    for (var i=0;i<x.length;i++) {
        x[i].style.display="none";
    }
    var y=document.getElementsByClassName("candy")
    for (var i=0;i<y.length;i++) {
        y[i].style.display="block";
    }
    x=document.getElementsByClassName("oven");
    for (var i=0;i<x.length;i++) {
        x[i].style.display="block";
    }
    x=document.getElementsByClassName("mini");
    for (var i=0;i<x.length;i++) {
        x[i].style.display="block";
    }
    x=document.getElementsByClassName("no");
    for (var i=0;i<x.length;i++) {
        x[i].style.display="block";
    }
}

/* 조리도구 버튼 */
function cloven() {
    var x=document.getElementsByClassName("oven");
    for (var i=0;i<x.length;i++) {
        x[i].style.display="block";
    }
    x=document.getElementsByClassName("mini");
    for (var i=0;i<x.length;i++) {
        x[i].style.display="none";
    }
    x=document.getElementsByClassName("no");
    for (var i=0;i<x.length;i++) {
        x[i].style.display="none";
    }
}

function clmini() {
    var x=document.getElementsByClassName("mini");
    for (var i=0;i<x.length;i++) {
        x[i].style.display="block";
    }
    x=document.getElementsByClassName("oven");
    for (var i=0;i<x.length;i++) {
        x[i].style.display="none";
    }
    x=document.getElementsByClassName("no");
    for (var i=0;i<x.length;i++) {
        x[i].style.display="none";
    }
}

function clno() {
    var x=document.getElementsByClassName("no");
    for (var i=0;i<x.length;i++) {
        x[i].style.display="block";
    }
    x=document.getElementsByClassName("oven");
    for (var i=0;i<x.length;i++) {
        x[i].style.display="none";
    }
    x=document.getElementsByClassName("mini");
    for (var i=0;i<x.length;i++) {
        x[i].style.display="none";
    }
}