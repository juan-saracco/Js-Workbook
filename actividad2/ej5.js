let producto1 = prompt("ingrese 4 productos de almacen");
let producto2 = prompt("ingrese 4 productos de almacen");
let producto3 = prompt("ingrese 4 productos de almacen");
let producto4 = prompt("ingrese 4 productos de almacen");
let lista = "Su lista es: " + producto1 + " " + producto2 + " " + producto3 + " " + producto4

if (producto1 != "" && producto2 != "" && producto3 != "" && producto4 != "") {
    alert(lista)
}else{
    alert("Error: Es necesario cargar todos los productos")
}