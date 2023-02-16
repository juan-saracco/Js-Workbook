class Cliente{
    constructor(nombre, presupuesto,descuento,telefono){
    this.nombre = nombre,
    this.presupuesto = presupuesto,
    this.descuento = descuento,
    this.telefono = telefono;
    }

    transferirDinero(valor){
        if (this.presupuesto > valor && valor > 0) {
            alert("Realizando la transferencia...")
        }else{
            alert("No se puede realizar la transferencia")
        }
    }
}

let cliente1 = new Cliente("Juan", 10000, false, "1167010616")
let cliente2 = new Cliente("tomi", 76000, false, "1169939432")
let cliente3 = new Cliente("victor", 38128, false, "124455332")

for (let i = 0; i < 5; i++) {
    let valor = parseFloat(prompt("Ingrese el monto de la transferencia"));
    cliente1.transferirDinero(valor);

    
    
}