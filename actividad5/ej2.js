class Tienda{
    constructor(nombre, direccion , duenio, rubro) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.duenio = duenio;
        this.rubro = rubro;
    }
}

let asignados= " ";
for (let i = 0; i < 2; i++) {
    let tienda = new Tienda(
        prompt("Ingresar nombre de la tienda"),
        prompt("Ingresar direccion de la tienda"),
        prompt("Ingresar duenio de la tienda"), 
        prompt("Ingresar rubro de la tienda"));


asignados += "Tienda: "+ tienda.nombre+" "+
"Direccion : "+ tienda.direccion +" "+
"Dueño: "+ tienda.duenio+ " "+
"Rubro: "+ tienda.rubro+ " \n";
}
alert(asignados)

