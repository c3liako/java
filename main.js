/* ------------------------------- CALCULADORA ------------------------------ */
/*
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

function cantLitros(superficie, rendimiento) {
    return superficie / rendimiento
};

do {
    tipo = prompt("Elige una opcion: \n1. Esmalte \n2. CieloRaso \n3. Epoxi  \n4. Seguir a la tienda");

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
        break;
    } else {
        alert("La opcion no es valida");
    }
}
while (tipo != 4);
*/

/* ----------------------------- CALCULADORA JS ----------------------------- */
/*
const esmalte = document.getElementById('esmalte')
const cielorraso = document.getElementById('cielorraso')
const epoxi = document.getElementById('epoxi')
const rend = document.getElementById('rend')
const cantMetros = document.getElementById('cantMetros')
const cantLitros = document.getElementById('cantLitros')



esmalte.addEventListener("click", esmalteClick)
function esmalteClick() {
    rend.innerHTML = "<h3>Rendimiento: 10 metros cuadrados por mano por litro</h3>"
    let rendimiento = 10
}

cielorraso.addEventListener("click", cielorrasoClick)
function cielorrasoClick() {
    rend.innerHTML = "<h3>Rendimiento: 12 metros cuadrados por mano por litro</h3>"
    let rendimiento = 12
}

epoxi.addEventListener("click", epoxiClick)
function epoxiClick() {
    rend.innerHTML = "<h3>Rendimiento: 8 metros cuadrados por mano por litro</h3>"
    let rendimiento = 8
}
cantMetros(calculo )
function calculo() {
    cantLitros.innerHTML = ("La cantidad de litros recomendada para dos manos es:",
    rendimiento * cantMetros)
}
*/

/* --------------------------------- TIENDA --------------------------------- */

const cards = document.getElementById('cards')
const items = document.getElementById('items')
const footer = document.getElementById('footer')
const templateCard = document.getElementById('template-card').content
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content
const fragment = document.createDocumentFragment()
let carrito = {}

/* --------------------------------- EVENTOS -------------------------------- */
document.addEventListener('DOMContentLoaded', e => {
    fetchData()
    /* --------------------------- LOCAL STORAGE CHECK -------------------------- */
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        pintarCarrito()
    }
});
cards.addEventListener('click', e => {
    addCarrito(e)
});
items.addEventListener('click', e => {
    btnAumentarDisminuir(e)
})

/* ----------------------------- TRAER PRODUCTOS ---------------------------- */
const fetchData = async () => {
    const res = await fetch('api.json');
    const data = await res.json()
    pintarCards(data)
}

/* ---------------------------- PINTAR PRODUCTOS ---------------------------- */
const pintarCards = data => {
    data.forEach(item => {
        templateCard.querySelector('h5').textContent = item.title
        templateCard.querySelector('p').textContent = item.precio
        templateCard.querySelector('button').dataset.id = item.id
        templateCard.querySelector('img').setAttribute("src", item.thumbnailUrl)
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
}

/* --------------------------- AGREGAR AL CARRITO --------------------------- */
const addCarrito = e => {
    if (e.target.classList.contains('btn-dark')) {
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}

const setCarrito = item => {
    const producto = {
        title: item.querySelector('h5').textContent,
        precio: item.querySelector('p').textContent,
        id: item.querySelector('button').dataset.id,
        cantidad: 1
    }
    if (carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1
    }

    carrito[producto.id] = {
        ...producto
    }

    pintarCarrito()
}

const pintarCarrito = () => {
    items.innerHTML = ''

    Object.values(carrito).forEach(producto => {
        templateCarrito.querySelector('th').textContent = producto.id
        templateCarrito.querySelectorAll('td')[0].textContent = producto.title
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
        templateCarrito.querySelector('span').textContent = producto.precio * producto.cantidad

        /* --------------------------------- BOTONES -------------------------------- */
        templateCarrito.querySelector('.btn-info').dataset.id = producto.id
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id

        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)

    pintarFooter()

    /* ---------------------------- LOCAL STORAGE SAVE --------------------------- */
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

const pintarFooter = () => {
    footer.innerHTML = ''

    if (Object.keys(carrito).length === 0) {
        footer.innerHTML = `
        <th scope="row" colspan="5">Carrito vacío</th>
        `
        return
    }

    /* --------------------- SUMAR CANTIDAD Y SUMAR TOTALES --------------------- */
    const nCantidad = Object.values(carrito).reduce((acc, {
        cantidad
    }) => acc + cantidad, 0)
    const nPrecio = Object.values(carrito).reduce((acc, {
        cantidad,
        precio
    }) => acc + cantidad * precio, 0)

    templateFooter.querySelectorAll('td')[0].textContent = nCantidad
    templateFooter.querySelector('span').textContent = nPrecio

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)

    footer.appendChild(fragment)

    const boton = document.querySelector('#vaciar-carrito')
    boton.addEventListener('click', () => {
        carrito = {}
        pintarCarrito()
    })

}

const btnAumentarDisminuir = e => {
    if (e.target.classList.contains('btn-info')) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad++
        carrito[e.target.dataset.id] = {
            ...producto
        }
        pintarCarrito()
    }

    if (e.target.classList.contains('btn-danger')) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad--
        if (producto.cantidad === 0) {
            delete carrito[e.target.dataset.id]
        } else {
            carrito[e.target.dataset.id] = {
                ...producto
            }
        }
        pintarCarrito()
    }
    e.stopPropagation()
}


/* ------------------------------- CALCULADORA ------------------------------ */
const esmalte = document.getElementById('esmalte')
const cielorraso = document.getElementById('cielorraso')
const epoxi = document.getElementById('epoxi')
const rend = document.getElementById('rend')
const calc = document.getElementById('calc')



esmalte.addEventListener("click", esmalteClick)

function esmalteClick() {
    rend.innerHTML = "<h3>Rendimiento: 10 metros cuadrados por mano por litro</h3>"
    let rendimiento = 10
}

cielorraso.addEventListener("click", cielorrasoClick)

function cielorrasoClick() {
    rend.innerHTML = "<h3>Rendimiento: 12 metros cuadrados por mano por litro</h3>"
    let rendimiento = 12
}

epoxi.addEventListener("click", epoxiClick)

function epoxiClick() {
    rend.innerHTML = "<h3>Rendimiento: 8 metros cuadrados por mano por litro</h3>"
    let rendimiento = 8
}


calc.addEventListener("click", calcClick)

function calcClick() {

}