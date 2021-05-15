var saludo = "Hola"
for (i=0 ; i < 3 ; i++) {
    if (i === 0) {
        saludo = [1,2,3]
        console.log(saludo)
    }
    if (i === 1) {
        saludo = "Hola"
        alert(saludo)
    }
    if (i === 2) {
        saludo = 1
        document.write("<p>"+ saludo +"</p>")
    }
}