class Jugador{
    constructor(nombre, camiseta, edad, lesionado){
        this.nombre = nombre,
        this.camiseta = camiseta,
        this.edad = edad,
        this.lesionado = lesionado;
    }
}
let equipo = []

equipo.push(new Jugador("Juan", 2, 20, true));
equipo.push(new Jugador("Octi", 3, 19, false));
equipo.push(new Jugador("Tomi", 10, 18, true));
equipo.push(new Jugador("H", 6, 21, false));
equipo.push(new Jugador("OKY", 7, 22, true));


for (let i = 0; i < 3; i++) {
    let edad = prompt("INGRESE LA EDAD DEL JUGADOR")
    filtroJugadores(equipo, edad) 
    console.log(filtroJugadores());
}


function filtroJugadores(equipo, edad){
    return equipo.filter(Jugador => Jugador.edad == edad)
}