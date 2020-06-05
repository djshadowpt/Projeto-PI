var i=0;
function pop(){
    if(i==0){
        document.getElementById("transforma").style.visibility = "visible";
        document.getElementById("pilares").style.visibility = "visible";
        document.getElementById("iniciativa").style.visibility = "visible";
        document.getElementById("covid").style.visibility = "visible";
        document.getElementById("transforma").style.left = "350px";
        document.getElementById("pilares").style.left = "470px";
        document.getElementById("pilares").style.top = "725px";
        document.getElementById("iniciativa").style.right = "250px";
        document.getElementById("iniciativa").style.top = "720px";
        document.getElementById("covid").style.right = "120px";
        i=1;
    }else{
        document.getElementById("transforma").style.visibility = "hidden";
        document.getElementById("pilares").style.visibility = "hidden";
        document.getElementById("iniciativa").style.visibility = "hidden";
        document.getElementById("covid").style.visibility = "hidden";
        document.getElementById("transforma").style.left = "auto";
        document.getElementById("pilares").style.left = "auto";
        document.getElementById("pilares").style.top = "auto";
        document.getElementById("iniciativa").style.right = "auto";
        document.getElementById("iniciativa").style.top = "auto";
        document.getElementById("covid").style.right = "auto";
        i=0;
    }
}