var esmalte = {
    tipo: 1,
    rendimiento: 8,
    precio: 100,
};

var cieloRaso = {
    tipo: 2,
    rendimiento: 10,
    precio: 200,
};

var epoxi = {
    tipo: 3,
    rendimiento: 6,
    precio: 300,
};


var rendimiento;
var superficie;
var tipo;
var precio;
var carrito = [];


function cantLitros(superficie, rendimiento) {
    return superficie / rendimiento
};

do {
    tipo = prompt("Elige una opcion: \n1. Esmalte \n2. CieloRaso \n3. Epoxi \n4. Carrito \n5. Seguir a la tienda");

    if (tipo == 1) {
        alert("El rendimiento por litro son 8 metros cuadrados");
        rendimiento = esmalte.rendimiento
        superficie = prompt("Ingrese la cantidad de metros cuadrados que desea pintar")
        alert("La cantidad de litros nescesaria seran: " + cantLitros(superficie, rendimiento) + " L")

    } else if (tipo == 2) {
        alert("El rendimiento por litro son 10 metros cuadrados");
        rendimiento = cieloRaso.rendimiento
        superficie = prompt("Ingrese la cantidad de metros cuadrados que desea pintar")
        alert("La cantidad de litros nescesaria seran: " + cantLitros(superficie, rendimiento) + " L")


    } else if (tipo == 3) {
        alert("El rendimiento por litro son 6 metros cuadrados");
        rendimiento = epoxi.rendimiento
        superficie = prompt("Ingrese la cantidad de metros cuadrados que desea pintar")
        alert("La cantidad de litros nescesaria seran: " + cantLitros(superficie, rendimiento) + " L")

    } else if (tipo == 4) {
        alert(` Tu Carrito :${carrito} `);

    } else if (tipo == 5) {
        break;
    } else {
        alert("La opcion no es valida");
    }
}
while (tipo != 5);


class Producto {
    constructor(nombre, cantidad) {
        this.nombre = nombre;
        this.cantidad = cantidad;
    }
}

do {
    var comprobacion = prompt("Ingrese el nombre de la pintura o fin para terminar de agregar")
    if (comprobacion === "Fin" || comprobacion === "FIN" || comprobacion === "fin") {
        break;
    } else {
        nombreP = comprobacion;
        var cantidadP = prompt("Ingrese la cantidad que desea comprar");
        carrito.push(new Producto(nombreP, cantidadP))
    }
}
while (comprobacion != "Fin" || comprobacion != "FIN" || comprobacion != "fin")

console.log(carrito)

for (var producto of carrito) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3> Nombre: ${producto.nombre}</h3>
                            <p>Cantidad: ${producto.cantidad}</p>`
    document.body.appendChild(contenedor)
}

var ingresado = prompt("Buscar...");
var prodIngresado = carrito.filter(producto => producto.nombre.includes(ingresado))
console.log(prodIngresado);
document.write("<h3> Lista de productos relacionados con su busqueda")

for (var producto of prodIngresado) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3> Nombre: ${producto.nombre}</h3>`
    document.body.appendChild(contenedor)
}