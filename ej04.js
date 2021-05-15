var num = []
var op = []

for (i = 1 ; i <= 2 ; i++) {
    if (i === 1) {
        var qnum = num.push(parseInt(prompt("Ingrese el primer numero")))
    }
    if (i === 2) {
        var qnum = num.push(parseInt(prompt("Ingrese el segundo numero")))
    }

}

var qop = op.push(prompt("Ingrese la operación a realizar (solo se aceptan estos valores escritos 'sumar', 'restar' , 'multiplicar', 'dividir')"))

if (op[0] === "dividir" && num[1]===0 ) {
    alert("Error no se puede dividir por 0")
}
else if (op[0] === "sumar"){
    var suma = num[0]+num[1]
    var signo = "+"
    document.write("<p>"+ num[0] + " " + signo + " " + num[1] +" = " + suma +"</p>")
}
else if (op[0] === "restar"){
    var restar = num[0]-num[1]
    var signo = "-"
    document.write("<p>"+ num[0] + " " + signo + " " + num[1] +" = " + restar +"</p>")
}
else if (op[0] === "multiplicar"){
    var multi = num[0]*num[1]
    var signo = "*"
    document.write("<p>"+ num[0] + " " + signo + " " + num[1] +" = " + multi +"</p>")
}
else if (op[0] === "dividir"){
    var div = num[0]/num[1]
    var signo = "/"
    document.write("<p>"+ num[0] + " " + signo + " " + num[1] +" = " + div +"</p>")
}
