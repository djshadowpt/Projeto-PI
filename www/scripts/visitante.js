/**
 * @class Estrutura com capacidade de armazenar o estado de uma entidade Visitante.
 * @constructs Visitante
 * @param {int} id - id do Visitante.
 * @param {string} name - nome do Visitante.
 * @param {Comentario[]} comentarios - lista de comentário do Visitante.
 */
function Visitante(id,name,comentarios){
    this.id = id;
    this.name = name;
    this.comentarios = [];
    for(let child of comentarios){
        this.comentarios.push(child);
    }
}

/**
 * 
 * @param {int} id - id do Comentário. 
 * @param {string} texto - descrição do Comentário.
 * @param {Date} data - data a que o Comentário foi feito. 
 */
function Comentario(id,texto,data){
    this.id = id;
    this.texto = texto;
    this.data = data;
}