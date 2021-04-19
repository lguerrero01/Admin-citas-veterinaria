// campos de formulario
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horataInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');

//user inteface
const formulario = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');

//clases

class Citas {
    constructor(){
        this.Citas = []
    }
}

class Ui {
    imprimirAlerta(mensaje, tipo){
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center','alert', 'd-block', 'col-12');
        //agregar clases dependiendo del ripo
        if (tipo=== 'error') {
            divMensaje.classList.add('alert-danger');
        }else {
            divMensaje.classList.add('alert-succes')
        }

        divMensaje.textContent = mensaje;

        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'));

        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }
}
const ui = new Ui();
const administarCitas = new Citas();

evenListeners();
function evenListeners () {
    mascotaInput.addEventListener('input', datosCita);
    propietarioInput.addEventListener('input', datosCita);
    telefonoInput.addEventListener('input', datosCita);
    fechaInput.addEventListener('input', datosCita);
    horataInput.addEventListener('input', datosCita);
    sintomasInput.addEventListener('input', datosCita);

    formulario.addEventListener('submit', nuevaCita);

}

//objeto con la informacion de la cita
const  citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
}

//agrega datos al objeto de la cita
function datosCita (e) {
    citaObj[e.target.name] = e.target.value;
    console.log (citaObj)
}


//valida y agrega una nueva cita a la clase de citas 
function nuevaCita (e){
    e.preventDefault();
    // Extraer la informacion del objeto de cita 
    const { mascota, propietario, telefono, fecha, hora, sintomas} = citaObj;

    if (mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === '' ) {
        
        ui.imprimirAlerta('todos los campos son obligatorios', 'error');
        return;
    }

}


