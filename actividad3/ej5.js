let carrito = ""
let producto = ""
while(producto != "esc") {
     producto = prompt("Ingrese el numero correspondiente al producto que desa comprar.\n1: Tomate\n2: Papa\n3:Carne\n4: Pollo\nPara salir ingrese ESC")
    switch (producto) {
        case "1":
            carrito = carrito + " Tomate "
            break;
        case "2":
            carrito = carrito + " Papa "
            break;
        case "3":
            carrito = carrito + " Carne "
            break;
        case "4":
            carrito = carrito + " Pollo "
            break;
    
        default:
            alert("producto invalido")
            break;
    }
}
alert(carrito) 