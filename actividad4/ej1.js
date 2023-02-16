function entrada() {
    return prompt("ingresar dato")
}

function procesamiento(valor) {
    return "LA ENTRADA ES " + valor
}

function salida(valor) {
    alert(valor)
}




console.log(salida(procesamiento(entrada())));