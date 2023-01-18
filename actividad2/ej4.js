let presupuesto = parseFloat(prompt("ingresar un presupuesto entre 0 y 3000 para comprar una remera"));
if (presupuesto <= 0) {
    alert("no podes comprar nada sin dinero")
}else if(presupuesto > 0 && presupuesto <= 1000){
    alert("el presupuesto es bajo")
}else if(presupuesto > 1000 && presupuesto < 3000){
    alert("el presupuesto es medio")
}else{
    alert("el presupuesto es alto, alto cheto")
}