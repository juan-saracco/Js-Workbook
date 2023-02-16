function validacion(cadena){
    if (cadena == "") {
        return true
    }else{
        return false
    }
}

do {
    opc = prompt("Ingrese una frase, ingrese ESC para salir")
    alert("La frase es una cadena vacia: " +validacion(opc))
} while (opc != "esc");