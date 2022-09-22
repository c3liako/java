class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.cantidad = cantidad;

    }

    sumarIva() {
        return this.precio * 1.21;
    }

}

var arrayProductos = [];
do {
    var comprobacion = prompt("Ingrese un nombre del producto o fin para terminar de agregar");
    if (comprobacion === "Fin" || comprobacion === "FIN" || comprobacion === "fin") {
        break;
    } else {
        nombreP = comprobacion;
        var precioP = prompt("Ingrese el precio del producto");
        var detalleP = prompt("Ingrese el detalle del producto");
        var cantidadP = prompt("Ingrese la cantidad comprada del producto");
        arrayProductos.push(new Producto(nombreP, precioP, detalleP, cantidadP))
    }
}
while (comprobacion != "Fin" || comprobacion != "FIN" || comprobacion != "fin")

console.log(arrayProductos)

for (var producto of arrayProductos) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3> Nombre: ${producto.nombre}</h3>
                            <p>Cantidad: ${producto.cantidad}</p>
                            <p>Detalle: ${producto.detalle}</p>`
    document.body.appendChild(contenedor)
}

//  BAJO STOCK - MENOS DE 3 UNIDADES
var bajoStock = arrayProductos.filter(producto => producto.cantidad <= 3);
console.log("Productos con poco stock, realizar una nueva orden de compra")
console.log(bajoStock)
document.write("<h3>Lista de productos con poco stock (menos de 3 unidades)</h3>")

for (var producto of bajoStock) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3> Nombre: ${producto.nombre}</h3>
                            <p>Cantidad: ${producto.cantidad}</p>
                            <p>Detalle: ${producto.detalle}</p>`
    document.body.appendChild(contenedor)
}

//PRODUCTOS AGOTADOS
var agotados = arrayProductos.filter(producto => producto.cantidad == 0 || producto.disponible == false);
console.log(agotados)
document.write("<h3>Lista de productos agotados (cantidad = 0 o disponible = false)</h3>")

for (var producto of agotados) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3> Nombre: ${producto.nombre}</h3>
                            <p>Detalle: ${producto.detalle}</p>`
    document.body.appendChild(contenedor)
}

// BUSCAR UN PRODUCTO POR NOMBRE
var ingresado = prompt("Buscar...");
var prodIngresado = arrayProductos.filter(producto => producto.nombre.includes(ingresado))
console.log(prodIngresado);
document.write("<h3> Lista de productos relacionados con su busqueda")

for (var producto of prodIngresado) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3> Nombre: ${producto.nombre}</h3>
                            <p>Detalle: ${producto.detalle}</p>
                            <p>Precio: ${producto.precio}</p>`
    document.body.appendChild(contenedor)
}