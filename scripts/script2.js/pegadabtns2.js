function buttonPressed(initialwidth,pretendedwidth){
    let btn1 = document.getElementById("checkbox1");
    let btn2 = document.getElementById("checkbox2");
    let btn3 = document.getElementById("checkbox3");
    let arrow = document.getElementById("arrow");
    let bar = document.getElementById("fillBar");
    if(btn1.checked === true || btn2.checked === true || btn3.checked === true){
        arrow.style.visibility = "visible";
        arrow.style.opacity = "1";
        bar.style.width = pretendedwidth;
    }else{
        arrow.style.visibility = "hidden";
        arrow.style.opacity = "0";
        bar.style.width = initialwidth;
    }
}