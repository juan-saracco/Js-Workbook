const equipo = []

do {
    entrada = prompt("Ingrese el nombre del jugador");
    equipo.push(entrada)
    console.log(equipo);
} while (entrada != "ESC");

for (let i = 0; i < equipo.length; i++) {
    alert("El jugador " + equipo[i] + " ubica la posicion: " + i)
}
