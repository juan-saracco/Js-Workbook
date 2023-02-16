function impuesto (precio, porcentaje) {
    porcentaje = (precio * porcentaje)/100
    let monto = precio + porcentaje
    return monto
}

for (let i = 0; i < 5; i++) {
    let precio = parseInt(prompt("ingrese un precio"));
    let porcentaje = parseInt(prompt("ingrese un porcentaje"));
    alert("El precio total a pagar es de: " + impuesto(precio, porcentaje))
    
    
}