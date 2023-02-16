class Jugador{
    constructor(nombre, camiseta, edad, lesionado){
        this.nombre = nombre,
        this.camiseta = camiseta,
        this.edad = edad,
        this.lesionado = lesionado;
    }
}
let equipo = []

equipo.push(new Jugador("JUAN", 2, 20, true));
equipo.push(new Jugador("OCTI", 3, 19, false));
equipo.push(new Jugador("TOMI", 10, 19, true));
equipo.push(new Jugador("H", 6, 20, false));
equipo.push(new Jugador("OKY", 7, 20, true));

for (let i = 0; i < 3; i++) {
    let busqueda = buscarJugador(equipo, prompt("INGRESAR EL NOMBRE DEL JUGADOR"))
    if (busqueda != undefined) {
        alert('JUGADOR '+busqueda.nombre+' CAMISETA '+ busqueda.camiseta+' EDAD '+busqueda.edad);
    }else{
        alert('NO EXISTE JUGADOR CON ESE NOMBRE');
    }
    
}

function buscarJugador(equipo, jugador) {

    return equipo.find(Jugador => Jugador.nombre === jugador);
}