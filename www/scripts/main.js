/**
 * Função que será executada quando a página estiver toda carregada, criando a variável global 'info' com um objeto Information
 * Aproveitamos ainda para solicitar ao servidor o carregamento de dados de forma assincrona(AJAX)
 * @memberof window
 */

window.onload = function () {
    const info = new Information('divInformation');
    info.getVisitante();
    info.showVisitante();
    window.info = info;
};