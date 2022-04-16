import { Aprendiz, NivelEducativo } from './aprendiz.js';
import { Curso } from './curso.js';
var cursos = [new Curso("Practicas esenciales para el agilismo", 20, 90, true, 2019),
    new Curso("Ingenieria de software para la web", 15, 90, true, 2018),
    new Curso("Pruebas automatizadas", 25, 50, false, 2020),
    new Curso("Principios de arquitectura", 30, 75, true, 2020)];
var ap = new Aprendiz("Juan Pablo", "Gonzales", "avatar.png", 15, NivelEducativo.BACHILLERATO, cursos);
var aprendizTable = document.getElementById("aprendiz");
var estadisticasTable = document.getElementById("estadisticas");
var cursosTable = document.getElementById("cursos");
var btnFiltro = document.getElementById("boton-filtro");
var textoBusqueda = document.getElementById("texto-busqueda");
mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);
mostrarCursosAprendiz(ap.cursos);
btnFiltro.onclick = function () {
    var text = textoBusqueda.value;
    text = (text == null) ? "" : text;
    cursosTable.getElementsByTagName("tbody")[0].remove();
    var cursosFiltrados = ap.cursos.filter(function (c) { return c.nombreCurso.match(text); });
    mostrarCursosAprendiz(cursosFiltrados);
};
function mostrarDatosAprendiz(aprendiz) {
    var tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = "<tr><td colspan=2><img src=\"./".concat(aprendiz.avatar, "\" height=\"100\"></td></tr>\n    <tr><td>Nombres: </td><td>").concat(aprendiz.nombres, "</td></tr>\n    <tr><td>Apellidos: </td><td>").concat(aprendiz.apellidos, "</td></tr>\n    <tr><td>Edad: </td><td>").concat(aprendiz.edad, "</td></tr>\n    <tr><td>Nivel educativo: </td><td>").concat(aprendiz.nivelEducativo, "</td></tr>");
    aprendizTable.appendChild(tbodyAprendiz);
}
function mostrarEstadisticas(aprendiz) {
    var numeroCertificados = aprendiz.darCursosCeritificados();
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td><b>Cursos certificados</b></td><td>".concat(numeroCertificados, "</td>");
    estadisticasTable.appendChild(trElement);
}
function mostrarCursosAprendiz(cursos) {
    var cursosTBody = document.createElement("tbody");
    var estado = cursos.map(function (c) { return c.calificacion > 60 ? "green" : "red"; });
    var index = 0;
    for (var _i = 0, cursos_1 = cursos; _i < cursos_1.length; _i++) {
        var curso = cursos_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(curso.nombreCurso, "</td>\n        <td>").concat(curso.horas, "</td>\n        <td style=\"color: ").concat(estado[index], "\">").concat(curso.calificacion, "</td>\n        <td>").concat(curso.certificado, "</td>\n        <td>").concat(curso.anio, "</td>");
        cursosTBody.appendChild(trElement);
        index++;
    }
    cursosTable.appendChild(cursosTBody);
}
