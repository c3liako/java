var cieloRaso = {
    tipo: 2,
    rendimiento: 10,
    volumenChi: 1,
    volumenMed: 4,
    volumenGra: 20,
    valorChi: 100,
    valorMed: 300,
    valorGra: 1700,
};

var epoxi = {
    tipo: 3,
    rendimiento: 6,
    volumenChi: 1,
    volumenMed: 4,
    volumenGra: 20,
    valorChi: 100,
    valorMed: 300,
    valorGra: 1700,
};

var superficie;
var tipo;
var compra;
var valor
const carrito = [];

const esmalte = new latas("Esmalte", 1, 8, 1, 4, 20, 100, 300, 1700)

function latas(nombre, tipo, rendimiento, volumenChi, volumenMed, volumenGra, valorChi, valorMed, valorGra) {
    this.nombre = nombre
    this.tipo = tipo
    this.rendimiento = rendimiento
    this.volumenChi = volumenChi
    this.volumenMed = volumenMed
    this.volumenGra = volumenGra
    this.valorChi = valorChi
    this.valorMed = valorMed
    this.valorGra = valorGra
};

function cantLitros(superficie, rendimiento) {
    return superficie / rendimiento
};

    let flag = true
    do {
        tipo = prompt("Elige una opcion: \n1. Esmalte \n2. CieloRaso \n3. Epoxi \n4. Carrito \n5. Salir");

        if (tipo == 1) {
            alert("El rendimiento por litro son 8 metros cuadrados")
            rendimiento = esmalte.rendimiento

        } else if (tipo == 2) {
            alert("El rendimiento por litro son 10 metros cuadrados")
            rendimiento = cieloRaso.rendimiento


        } else if (tipo == 3) {
            alert("El rendimiento por litro son 6 metros cuadrados")
            rendimiento = epoxi.rendimiento

        } else if (tipo == 4) {
            alert(` Tu Carrito :${carrito} `)

        } else if (tipo == 5) {
            flag = false
        } else {
            alert("La opcion no es valida")

        }
    } while (tipo < 1 || tipo > 3);

    superficie = prompt("Ingrese la cantidad de metros cuadrados que desea pintar")
    alert("La cantidad de litros nescesaria seran: " + cantLitros(superficie, rendimiento) + " L")
    do {
        compra = prompt("Desea añadir al carrito? Volumen: \n1. 1L \n2. 4L \n3. 20L");
        if (tipo == 1, compra == 1) {
            valor = esmalte.valorChi
            volumenChi
            carrito.push(`${esmalte.nombre} de ${esmalte.volumenChi} L de valor ${esmalte.valorChi}`)

        } else if (tipo == 1, compra == 2) {
            valor = esmalte.valorMed

            carrito.push(esmalte.valorMed)


        } else if (tipo == 1, compra == 3) {
            valor = esmalte.valorGra




        } else if (tipo == 2, compra == 1) {


        } else if (tipo == 2, compra == 2) {


        } else if (tipo == 2, compra == 3) {





        } else if (tipo == 3, compra == 1) {


        } else if (tipo == 3, compra == 2) {


        } else if (tipo == 3, compra == 3) {


        } else {

        }
    } while (compra < 1 || compra > 3);
    while (flag);
