let precio = parseFloat(prompt("ingrese un precio"));
let cantidadDesc = parseFloat(prompt("Ingrese su descuento (hasta %40)"));
let importeFinal =precio - (precio * cantidadDesc) / 100;

if (cantidadDesc < 40) {
    alert("Su importe final con descuento es: $" + importeFinal)
}else[
    alert("no existen descuentos tan grandes!")
]