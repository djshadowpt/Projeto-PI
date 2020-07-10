"use strict"
/**
 * Permite que o load da página seja feito de forma suave. 
 */
$(document).ready(function() {
    $("body").css("display", "none");
    $("body").fadeIn(1200);
});

/**
 * Configura todos as interações que o utilizador pode ter com o website.
 */
function configUserInteraction(){
    window.addEventListener('load', function(){
        switchToAboutPage();
        popSidebar();
        popMenuOptions();
    });
}

/**
 * Permite que o utilizador recorra a uma barra de navegação assim que clickar no menu hamburguer.
 */
function popSidebar(){
    var button = document.getElementById("menu_btn");
    button.addEventListener("click", function(){
        var sidebar = document.getElementById("sidebar");
        var mainmenu = document.getElementsByClassName("mainmenu");
        var footer = document.getElementById("footer");
        if(button.checked){    
            sidebar.style.visibility = "visible";
            sidebar.style.opacity = "1";
            for(let child of mainmenu)
                child.style.marginLeft = "15%";
            footer.style.marginLeft = "16%";
        }else{
            sidebar.style.visibility = "hidden";
            sidebar.style.opacity = "0";
            for(let child of mainmenu)
                child.style.marginLeft = "0%";
            footer.style.marginLeft = "0%";
        }
    });  
}

/**
 * Permite que o utilizador explore o conteúdo escondido pela imagem circular.
 */
var clickedOnImage = 0;
function popMenuOptions(){
    var transform = document.getElementById("transform").style;
    var pillars = document.getElementById("pillars").style;
    var initiative = document.getElementById("initiative").style;
    var covid = document.getElementById("covid").style; 
    var image = document.getElementById("main_image");
    image.addEventListener("click",function(){
        if(clickedOnImage === 0){
            transform.visibility = "visible"; pillars.visibility = "visible"; initiative.visibility = "visible"; covid.visibility = "visible";
            transform.opacity = "1"; pillars.opacity = "1"; initiative.opacity = "1"; covid.opacity = "1";
            clickedOnImage = 1;
        }else{
            transform.visibility = "hidden"; pillars.visibility = "hidden"; initiative.visibility = "hidden"; covid.visibility = "hidden";
            transform.opacity = "0"; pillars.opacity = "0"; initiative.opacity = "0"; covid.opacity = "0";
            clickedOnImage = 0;
        }
    });
    
}

/**
 * Guarda num div a informação dos comentários feitos pelos visitantes. 
 */
function insertComment(){    
    var comments_section = document.getElementById("comments_section");
    var name = document.getElementById("input_name").value;
    var text = $("#text_area").val();
    var datetime = new Date().toISOString();
    comments_section.innerHTML += '<div class = "m-3">' 
    + '<div style = "width:55px;" class = "text-success font-weight-bold rounded p-1">@' + name + '</div>'
    + '<time class = "timeago float-right " datetime ="'+datetime+'"></time>'
    + '<textarea class = "bg-dark text-light rounded w-75 ml-5 mw-50 form-control" rows = "2">'+text+'</textarea></div>';
    jQuery("time.timeago").timeago();
}

/**
 * Define como é feita a mudança entre páginas.
 */
function switchPage(newPage, button){
    var clickable = document.getElementById(button);
    var oldPages = document.getElementsByClassName("mainmenu");
    var newPage = document.getElementById(newPage);
    clickable.addEventListener("click",function(){
        for(let child of oldPages){
            if(child.id !== newPage.id)
                child.style.display = "none";
        }
        newPage.style.visibility = "visible";
        newPage.style.opacity = "1";
        newPage.style.maxHeight = "100%";
    });
}

configUserInteraction();
