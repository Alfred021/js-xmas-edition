
const form = document.querySelector('#carta-a-santa');
const nombre = form['nombre'].value;
const ciudad = form['ciudad'].value;
const comportamiento = form['comportamiento'].value;
const descripcionRegalo = form['descripcion-regalo'].value;

function validarNombre(nombre) {
    if (nombre.length === 0) {
        return 'Este campo debe tener por lo menos 1 caracter';
    }

    if (nombre.length >= 50) {
        return 'Este campo debe tener menos de 50 caracteres';
    }

    if (!/^[A-z]+$/i.test(nombre)) {
        return 'El nombre solo debe tener letras';
    }

    return '';
}

function validarCiudad(ciudad) {
    if (ciudad === "") {
        return 'Debes seleccionar una ciudad';
    }

    return '';
}

function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo.length === 0) {
        return 'Este campo debe tener al menos un caracter'
    }

    if (descripcionRegalo.length >= 100) {
        return 'Este campo debe tener menos de 100 caracteres'
    }

    if (!/^[A-z 0-9]+$/i.test(descripcionRegalo)) {
        return 'El campo descripcion debe tener solo letras y numeros'
    }

    return '';
}

function validarFormulario(event) {
    const form = document.querySelector('#carta-a-santa');

    const nombre = form['nombre'].value;
    const ciudad = form['ciudad'].value;
    const descripcionRegalo = form['descripcion-regalo'].value;

    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        'descripcion-regalo': errorDescripcionRegalo,
    };

    const exito = manejarErrores(errores) === 0;

    if (exito) {
        form.className = "oculto";
        document.querySelector('#exito').className = "";
        redirectHtml();
    }


    event.preventDefault();
}

function redirectHtml() {
    setTimeout(function() {
        window.location.href = "wishlist.html";
    }, 5000);

}

function manejarErrores(errores) {
    const keys = Object.keys(errores);
    const errors = document.querySelector('#errores');
    let cantidadErrores = 0
    while(errors.hasChildNodes()){
        errors.removeChild(errors.firstChild);    
    }

    keys.forEach(function(key) {
        const error = errores[key];

        if (error) {
            cantidadErrores++;
            form[key].className = "error"
            
            const $error = document.createElement('li');
            $error.innerText = error;
            errors.appendChild($error);

        } else {
         form[key].className = ""   
        }
    
    });
    return cantidadErrores;
}

form.onsubmit = validarFormulario;
