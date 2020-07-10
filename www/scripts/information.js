'use strict';

/** 
* @class Guarda toda informação necessaria na execução do exercicio 
* @constructs Informacao
* @param {string} id - id do elemento HTML que contém a informação.
* 
* @property {string} id - id do elemento HTML que contém a informação.
* @property {Visitante[]} visitantes - Array de objetos do tipo Visitante, para guardar todas os visitantes do nosso sistema
*/
function Information(id) {
    this.id = id;
    this.visitantes = [];
};

/**
 * Cria dinamicamente vários divs com a informação dos comentários feitos ao website.
 */
Information.prototype.showVisitante = function () {
    const self = this;
    var comments_section = document.getElementById("comments_section");
    this.visitantes.forEach( v => {
        v.forEach(comment =>{
            comments_section.innerHTML += '<div class = "m-3">' 
            + '<div style = "width:55px;" class = "text-success font-weight-bold rounded p-1">@' + v.name + '</div>'
            + '<time class = "timeago float-right " datetime ="'+comment.datetime+'"></time>'
            + '<textarea class = "bg-dark text-light rounded w-75 ml-5 mw-50 form-control" rows = "2">'+comment.text+'</textarea></div>';
            jQuery("time.timeago").timeago();
        });
        
    }); 
}

/**
 * Função que que tem como principal objetivo solicitar ao servidor NODE.JS o recurso visitante através do verbo GET, usando pedidos assincronos e JSON
 */
Information.prototype.getVisitante = function () {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('GET', '/visitante');
 
    const self = this;
    xhr.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            this.response.Visitante.forEach(v => {
                var comentarios = [];
                for(let child in v.comentarios){
                    comentarios.push(child);
                }
                self.visitante.push(new Visitante(v._id, v.name, comentarios));
            });
        }
    };
    xhr.send();
};