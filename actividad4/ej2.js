function redondear(numDecimal) {
    return Math.round(numDecimal)
    
}

for (let i = 0; i < 5; i++) {
    let num = prompt("ingresar un numero decimal, el programa lo va a redondear");
    alert(redondear(num));
}