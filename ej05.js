var mat = ["Diseño Multimedial","Diseño Gráfico","Diseño de Videojuegos","Cine de Animación","Analista de Sistemas"]
var carrera = prompt("Ingrese su carrera")

for (i=0;i<5;i++) {
    if (carrera === mat[i]) {
        var validar = true
    }
}
 if (validar) {
     document.write("<p>"+ carrera +"</p>")
 }
 else {
     document.write("<p>Acceso Denegado</p>")
 }


