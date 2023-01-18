//acceso a nodos
const ul = document.getElementById("lista")
const input = document.getElementById("cargar-producto")
const btn = document.getElementById("boton")


//arrays
const mensajesBienvenida = ["buen dia, bienvenido al simulador de compra", "adelante, pruebe el simulador", "bienvenido al simulador de compras", "un gusto, le presento mi simulador de compra"]
const productos = []

//guardo el random en una variable
let mensaje = mensajesBienvenida[Math.floor(Math.random()* mensajesBienvenida.length)];

//imprimo la variable con alert
//alert(mensaje)


//recorro el array productos con un for of, dentro del bucle le apunto al li y lo guardo en una const. Luego le agrego el nuevo li al html.

for (const producto of productos) {
    console.log(producto);
    const li = document.createElement("li");
    li.innerHTML = producto;
    ul.appendChild(li);
}
//pido agregar un producto por prompt, hasta que se cumpla la condicion
let nuevoProducto = ""

/* while (nuevoProducto != "esc") {
     nuevoProducto = prompt("ingresa un nuevo producto \ningrese 'esc' para salir")
     const li = document.createElement("li");
     li.innerHTML = nuevoProducto;
     ul.appendChild(li);
}
 */
//capturo el evento del boton, y pinto el valor del input en consola

 btn.addEventListener("click", ()=>{
    console.log(input.value);
    
}) 
















