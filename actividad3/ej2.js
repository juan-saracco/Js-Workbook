let max = parseFloat(prompt("ingresar cantidad de veces que quiere mostrar el mensaje, menor a 4"));

for (let  i= 0;  i < max; i++) {
    if (i > 3) {
        alert("supero las 4 vueltas")
        break
    };
    alert("lado");
}