function botao(){
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    if(name.value !== "" && email.value !== ""){
        location.replace("PegadaPrimeiraPergunta.html");
    }else{
        alert("Introduza corretamente os dados");
    }
}