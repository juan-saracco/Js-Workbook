class Tienda{
    constructor(nombre, ubicacion, duenio, rubro){
        this.nombre = nombre,
        this.ubicacion= ubicacion,
        this.duenio = duenio,
        this.rubro = rubro;
    }

    estaAbierto(hora){
    if (hora >= 8 && hora <= 12 || hora >=15 && hora <=19) {
        return true
    }else{
        return false
    }
    }
}


let tienda1 = new Tienda ("Bartolome", "olivos", "veronica", "gastronomia");


for (let i = 0; i < 3; i++) {
   
   let hora = parseFloat(prompt("Ingrese una hora para saber si el local esta abierto"));
   if (tienda1.estaAbierto(hora)) {
    alert("La tienda esta abierta a las: " + hora);
   }else{
    alert("La tienda esta cerrada a las: " + hora);
   }
};


