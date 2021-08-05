const factura = document.getElementById('factura');
const inputs = document.querySelectorAll('#factura input');

const expresiones = {
	nombres: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	apellidos: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{10}$/, //  10 numeros.
    direccion: /^[a-zA-ZÀ-ÿ\s]{1,40}$ /, // Letras y espacios, pueden llevar acentos.
}

const campos = {
	nombres: false,
	apellidos: false,
	correo: false,
	telefono: false,
	direccion: false
}

const validaractura = (e) => {
	switch (e.target.name) {
		case "nombres":
			validarCampo(expresiones.nombres, e.target, 'nombres');
		break;
        
		case "apellidos":
			validarCampo(expresiones.apellidos, e.target, 'apellidos');
		break;
		
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;

		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
        
        case "direccion":
			validarCampo(expresiones.direccion, e.target, 'direccion');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('factura__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('factura__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .factura__input-error`).classList.remove('factura__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('factura__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('factura__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .factura__input-error`).classList.add('factura__input-error-activo');
		campos[campo] = false;
	}
}


inputs.forEach((input) => {
	input.addEventListener('keyup', validarFactura);
	input.addEventListener('blur', validarFactura);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.nombres && campos.apellidos && campos.correo && campos.telefono && campos.direccion && terminos.checked ){
		factura.reset();

		document.getElementById('factura__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('factura__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.factura__grupo-correcto').forEach((icono) => {
			icono.classList.remove('factura__grupo-correcto');
		});
	} else {
		document.getElementById('factura__mensaje').classList.add('factura__mensaje-activo');
	}
});