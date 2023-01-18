let eleccion = parseInt(prompt("Seleccione a un personaje: \n1: Homero \n2: Marge \n3: Bart \n4: Lisa"))

if (eleccion > 0 && eleccion < 5) {
    switch (eleccion) {
        case 1:
            alert("Elegiste a Homero")
        break;
        case 2:
            alert("Elegiste a Marge")
        break;
        case 3:
            alert("Elegiste a Bart")
        break;
        case 4:
            alert("Elegiste a Lisa")
        break;
    }
}else{
    alert("Seleccion invalida")
}