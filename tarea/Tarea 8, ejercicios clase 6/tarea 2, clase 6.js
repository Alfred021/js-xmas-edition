const form = document.querySelector('#agregar-quitar-tarea');

document.querySelector('#agregar').onclick = function () {
    agregarMiembro();
    return false;
}

document.querySelector('#quitar').onclick = function () {
    quitarMiembro();  
    return false;
}

document.querySelector('#calcular').onclick = function () {

    const salariosInputs = document.querySelectorAll('.integrante input');
    const salariosMiembros = [];
    for (i = 0; i < salariosInputs.length; i++) {
        salariosMiembros.push(Number(salariosInputs[i].value));    
    }

    const errores = validarSueldosInputs(salariosMiembros)

   const exito = manejarErrores(errores) === 0;

    if (exito) {
        document.querySelector('#mayor-salario-anual').textContent = calcularMayorSalarioAnual(salariosMiembros);
        document.querySelector('#menor-salario-anual').textContent = calcularMenorSalarioAnual(salariosMiembros);
        document.querySelector('#salario-anual-promedio').textContent = calcularSalarioAnualPromedio(salariosMiembros);
        document.querySelector('#salario-mensual-promedio').textContent = calcularSalarioMensualPromedio(salariosMiembros);
    }

 
}


function agregarMiembro() {

    let indice = Number(document.querySelectorAll('.integrante').length) + 1;

    const div = document.createElement('div');
    div.className = 'integrante';

    const label = document.createElement('label');
    label.textContent = 'Salario Anual del integrante Nro: ' + indice; 

    const input = document.createElement('input');
    input.type = 'number';

    div.appendChild(label);
    div.appendChild(input);

    const miembrosFamilia = document.querySelector('#miembros-familia');
    miembrosFamilia.appendChild(div);

}

function quitarMiembro() {
    let miembrosaEliminar = document.querySelector('#miembros-familia');
    let elementoEliminar = document.querySelectorAll('.integrante');
    miembrosaEliminar.removeChild(elementoEliminar[elementoEliminar.length-1]);

}

/*
function obtenerSalarios() {
    const salariosInputs = document.querySelectorAll('.integrante input');
    const salariosMiembros = [];
    for (i = 0; i < salariosInputs.length; i++) {
        salariosMiembros.push(Number(salariosInputs[i].value));    
    }

    return salariosMiembros;
}
*/
function calcularMayorSalarioAnual(salariosMiembros) {
    let salarios = salariosMiembros;
    let mayorNumero = salarios[0];
    for (i = 1; i > salarios.length; i++){
        if (salarios[i] > mayorNumero) {
            mayorNumero = salarios[i];
        }
    }
    return mayorNumero;
}

function calcularMenorSalarioAnual(salariosMiembros) {
    let salarios = salariosMiembros;
    let menorNumero = salarios[0];
    for (i = 1; i < salarios.length; i++) {
        if (salarios[i] < menorNumero) {
            menorNumero = salarios[i];
        }
    }
    return menorNumero;
}

function calcularSalarioAnualPromedio(salariosMiembros) {
    let salarios = salariosMiembros;
    let sumaSalarios = 0;
    for (i = 0; i < salarios.length; i++) {
        sumaSalarios += salarios[i];
    }
    return sumaSalarios/ salarios.length;
}

function calcularSalarioMensualPromedio(salariosMiembros) {
    let salarios = salariosMiembros;
    let sumaSalarios = 0;
    let salarioMensualPromedio = 0;
    for (i = 0; i < salarios.length; i++) {
        sumaSalarios += salarios[i]/12
    }
    salarioMensualPromedio = sumaSalarios / salarios.length;
    return salarioMensualPromedio;
}

function validarSueldosInputs(salariosMiembros) {
    if (salariosMiembros === "") {
        return "Debes ingresar un valor para los sueldos"
    }

    if (!/^\d+(\.\d{1,2})?$/.test(salariosMiembros)) {
        return "Solo se pueden ingresar numeros con hasta dos decimales"
    }

    if (salariosMiembros <= 0) {
        return "Solo se pueden ingresar valores mayores a 0"
    }

    else {
        return ""
    }
}


function manejarErrores(errores) {
    const contenedorErrores = document.querySelector('#errores');
    const keys = Object.keys(errores);
    let cantidadErrores = 0;
    while(contenedorErrores.hasChildNodes()){
        contenedorErrores.removeChild(contenedorErrores.firstChild);    
    }

    keys.forEach(function(key, i){
        const error = errores[key];
        
        if (error){
            cantidadErrores++
            form[key].className = "error";
            const $error = document.createElement('li');
            $error.innerText = 'Integrante Nro ' + (i + 1) + ': ' + error;
            contenedorErrores.appendChild($error)
        }
        else {
            form[key].className = "";
        }  
    });
    return cantidadErrores;
}


