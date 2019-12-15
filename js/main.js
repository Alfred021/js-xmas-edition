const form = document.querySelector('#carta-a-santa');

const nombre = form['nombre'].value;
const ciudad = form['ciudad'].value;
const comportamiento = form['comportamiento'].value;
const descripcionRegalo = form['descripcion-regalo'].value;

console.log(nombre);
console.log(ciudad);
console.log(comportamiento);
console.log(descripcionRegalo);

function validarNombre (nombre) {
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

function validarCiudad (ciudad) {
    if (ciudad === "") {
        return 'Debes seleccionar una ciudad';
    }

    return '';
}

function validarDescripcionRegalo (descripcionRegalo) {
    if (descripcionRegalo.length === 0) {
        return 'Este campo debe tener al menos un caracter'
    }

    if (descripcionRegalo.length >= 100) {
        return 'Este campo debe tener menos de 100 caracteres'
    }

    if (!/^[A-z0-9]+$/i.test(descripcionRegalo)) {
        return 'El campo descripcion debe tener solo letras y numeros'
    }

    return '';
}