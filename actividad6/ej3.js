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
equipo.push(new Jugador("Tomi", 10, 19, true));
equipo.push(new Jugador("H", 6, 20, false));
equipo.push(new Jugador("OKY", 7, 20, true));



console.log(equipo);