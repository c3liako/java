class alumno {
    constructor(nombre, email, password) {
        this.nombre = nombre;
        this.email = email;
        this.password = password;
    }
}

let arrayAlumnos = [];
let miFormulario = document.querySelector("#formulario");
let inputNombre = document.querySelector("#iNombre");

let nombreI = formulario.children[1].value;
let emailI = formulario.children[3].value;
let passwordI = formulario.children[5].value;

let contenedor = document.querySelector("#alumnoIngresado");
let displayTodos = document.querySelector("#displayTodos");
let parrafos = displayTodos - getElementsByTagName("p");
let bandera = false;

miFormulario.addEventListener("submit", agregarAlumnos);
btnMostrar.addEventListener('click', MostrarTodosAlumnos);

inputNombre.focus();

function validarForm() {
    nombreI = formulario.children[1].value;
    emailI = formulario.children[3].value;
    passwordI = formulario.children[5].value;
    console.log(nombreI);
    console.log(emailI);
    console.log(passwordI);


    if (nombreI == '' || emailI == '' || passwordI == '') {
        alert('ERROR - Debe completar todos los campos');
        inputNombre.focus();
        bandera = false;
    } else {
        bandera = true;
    }
}

function agregarAlumnos(e) {
    e.preventDefault();
    validarForm();
    if (bandera == true) {
        let opcion = confirm("Esta seguro que lo desea agregar")
        if (opcion == true) {
            let formulario = e.target
            arrayAlumnos.push(new Alumno(nombreI, emailI, passwordI, ))
        }else {
            alert ('No se agregara el usuario')
        }
        nombreI = formulario.children[1].value = '';
        emailI = formulario.children[3].value = '';
        passwordI = formulario.children[5].value = '';
        contenedor.innerHTML = '';
        AgregarAlDom();
        inputNombre.focus()
    }else{
        inputNombre.focus();
    }
}

function AgregarAlDom(){
    contenedor.innerHTML = `<h3>Ultimo agregado</h3>
    <p><strong> Nombre: </strong> ${nombreI} </p>
        <p><strong>Email: </strong> ${emailI} </p>
        <p><strong>Password: </strong> ${passwordI} </p>`
}


function MostrarTodosAlumnos(e){
    e.preventDefault();
    let i = 0;
    displayTodos.innerHTML = '<h3>Listado de todos los Alumnos</h3>';
    for (const alumno of arrayAlumnos){
        displayTodos.innerHTML += `<p><strong> Nombre: </strong> ${alumno.nombre} </p>
        <p><strong>Email: </strong> ${alumno.email} </p>
        <p><strong>Password: </strong> ${alumno.password} </p>`
    }
}