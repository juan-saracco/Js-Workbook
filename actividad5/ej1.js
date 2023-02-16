class tienda{
    constructor(nombre, direccion , duenio, rubro) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.duenio = duenio;
        this.rubro = rubro;
    }
}
const tienda1 = new tienda ( 'kwik-E-mart', "Villate 2021", "Apu", "kiosco");

const tienda2 = new tienda (
    "falucho", "luis maria campos 1213", "Hector Salamanca", "gastronomia"
)

const tienda3 = new tienda (
    "optica Saracco", "Lacroze 2332", "Sebastian Saracco", "optica"
)

console.log(tienda3);