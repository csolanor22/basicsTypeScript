import { Aprendiz, NivelEducativo } from './aprendiz.js';
var ap = new Aprendiz("Juan Pablo", "Gonzales", "avatar.png", 15, NivelEducativo.BACHILLERATO);
var aprendizTable = document.getElementById("aprendiz");
mostrarDatosAprendiz(ap);
function mostrarDatosAprendiz(aprendiz) {
    var tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = "<tr><td colspan=2><img src=\"./".concat(aprendiz.avatar, "\" height=\"100\"></td></tr>\n    <tr><td>Nombres: </td><td>").concat(aprendiz.nombres, "</td></tr>\n    <tr><td>Apellidos: </td><td>").concat(aprendiz.apellidos, "</td></tr>\n    <tr><td>Edad: </td><td>").concat(aprendiz.edad, "</td></tr>\n    <tr><td>Nivel educativo: </td><td>").concat(aprendiz.nivelEducativo, "</td></tr>");
    aprendizTable.appendChild(tbodyAprendiz);
}
