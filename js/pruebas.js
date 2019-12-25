
function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos 1 caracter',
        'validarNombre no validó que el nombre no sea vacío'
    );    
  
    console.assert(
        validarNombre(
            '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
        'Este campo debe tener menos de 50 caracteres',
        'validarNombre no validó que el nombre sea menor a 50 caracteres'
    );
  
      console.assert (
          validarNombre('89797585948549591') === 'El nombre solo debe tener letras',
          'validarNombre no valido que el nombre solo contenga letras'
      );
  
  
    console.assert(
        validarNombre('Alfredo') === '',
        'validarNombre fallo con un nombre valido'
    );
  }
  
  probarValidarNombre();
  
  function probarValidarCiudad() {
      console.assert(
          validarCiudad("") === 'Debes seleccionar una ciudad', 
          'validarCiudad no valido que la ciudad este seleccionada'
      );
  
      console.assert(
          validarCiudad("Buenos Aires") === '',
          'validarCiudad no valido que el campo ciudad este vacio'
      );
  }
  
  probarValidarCiudad();
  
  function probarvalidarDescripcionRegalo () {
  
      console.assert (
          validarDescripcionRegalo ('') === 'El campo de descripcion no debe estar vacio',
          'validarDescripcionRegalo no valido que el campo de descripcion este vacio'
      );
  
      console.assert (
          validarDescripcionRegalo ('koojonmjfoiajiofjaiofjaoifjaojfajfoiajfoijaofjafjaojfaojfoiajfoiajfojafjaofjaojfoajfoajfoajfaofjaojfoi') === 'El campo de descripcion es demasiado largo', 
          'validarDescripcionRegalo no valido que el campo sea muy largo'
      );
  
      console.assert (
          validarDescripcionRegalo (',.,.,.,,.') === 'El campo descripcion debe tener solo letras y numeros',
          'validarDescripcionRegalo no valido que la descripcion solo tenga letras y numeros'
      );
  
      console.assert (
          validarDescripcionRegalo("Me gusto el regalo") === '',
          'validarDescripcionRegalo no funciono con una descripcion correcta'
      );
  }
  
  probarvalidarDescripcionRegalo ();
  