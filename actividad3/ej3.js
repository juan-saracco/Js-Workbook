let alumno= "";
let lista= "";

for (let i = 1; i <= 10; i++) {
    alumno = prompt("ingrese un alumno")
    
    lista= lista + " " + i + ": " + alumno
    
}

alert("Alumnos " + lista)