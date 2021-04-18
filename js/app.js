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


evenListeners();
function evenListeners () {
    mascotaInput.addEventListener('input', datosCita);
    propietarioInput.addEventListener('input', datosCita);
    telefonoInput.addEventListener('input', datosCita);
    fechaInput.addEventListener('input', datosCita);
    horataInput.addEventListener('input', datosCita);
    sintomasInput.addEventListener('input', datosCita);

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
    // console.log (citaObj)
}




fetch("https://api-football-v1.p.rapidapi.com/v3/leagues", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "9cbb7dd534msh9232fabfe8b228cp156699jsnce115e2e5b97",
		"x-rapidapi-host": "api-football-v1.p.rapidapi.com"
	}
})
.then(response => {
	return response.json();
})
.then(resultado => {
    console.log(resultado)
})
.catch(err => {
	console.error(err);
});