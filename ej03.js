var cuatri = parseInt(prompt("Ingrese el cuatrimestre que está cursando"))
var Qmat = parseInt(prompt("Ingrese la cantidad de materias está cursando"))
var mat = []

document.write( "<p>Estas cursando el cuatrimestre " + Qmat + "</p>" )

for (i = 1 ; i <= Qmat;i++) {
    var Nmat = mat.push(prompt("Ingrese el nombre de la materia n° " + i ))
    document.write( "<ul> <li>" + mat[i-1] + " </li> </ul>" )
}

