// Java del Formulario 
formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{5,12}$/, // Letras y espacios, pueden llevar acentos.
    contraseña: /^.{4,12}$/, // 4 a 12 digitos.
    contraseña2: /^.{4,12}$/, // 4 a 12 digitos. 
    Correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{10}$/ // 7 a 14 numeros.
}

const campos = {
    usuario: false,
    nombre: false,
    contraseña: false,
    contraseña2: false,
    Correo: false,
    telefono: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "usuario":
            validarCampo(expresiones.usuario, e.target, 'usuario');
        break;
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
        break;
        case "contraseña":
            validarCampo(expresiones.contraseña, e.target, 'contraseña');
            validarPassword2();
        break;
        case "contraseña2":
            validarCampo(expresiones.contraseña2, e.target, 'contraseña2');
            validarPassword2();
        break;
        case "Correo":
            validarCampo(expresiones.Correo, e.target, 'Correo');
        break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono');
        break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-incorrecto');
        document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-correcto');
        document.querySelector(`#grupo_${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo_${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.remove('formulario_input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-incorrecto');
        document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-correcto');
        document.querySelector(`#grupo_${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo_${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.add('formulario_input-error-activo');
        campos[campo] = false;
    }
}

const validarPassword2 = () => {
    const inputPassword1 = document.getElementById('contraseña');
    const inputPassword2 = document.getElementById('contraseña2');

    if(inputPassword1.value !== inputPassword2.value){
        document.getElementById(`grupo_contraseña2`).classList.add('formulario_grupo-incorrecto');
        document.getElementById(`grupo_contraseña2`).classList.remove('formulario_grupo-correcto');
        document.querySelector(`#grupo_contraseña2 i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo_contraseña2 i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo_contraseña2 .formulario_input-error`).classList.add('formulario_input-error-activo');
        campos['contraseña'] = false;
    } else {
        document.getElementById(`grupo_contraseña2`).classList.remove('formulario_grupo-incorrecto');
        document.getElementById(`grupo_contraseña2`).classList.add('formulario_grupo-correcto');
        document.querySelector(`#grupo_contraseña2 i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo_contraseña2 i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo_contraseña2 .formulario_input-error`).classList.remove('formulario_input-error-activo');
        campos['contraseña'] = true;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const terminos = document.getElementById('terminos');
    if(campos.usuario && campos.nombre && campos.contraseña && campos.correo && campos.telefono && terminos.checked ){
        formulario.reset();

        document.getElementById('formulario_mensaje-exito').classList.add('formulario_mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById('formulario_mensaje-exito').classList.remove('formulario_mensaje-exito-activo');
        }, 5000);

        document.querySelectorAll('.formulario_grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario_grupo-correcto');
        });
    } else {
        document.getElementById('formulario_mensaje').classList.add('formulario_mensaje-activo');
    }
});
