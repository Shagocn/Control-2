// objeto.metodo(json)

$(document).ready(function() {

  $('#btnSaludar').click(function() {

      alert('Hola');
  });

  $('#formulario2').validate( 
      {
          "rules": {
              "mango": {
                  "required": true,
                  "minlength": 100
              },
              "nombre": {
                  "required": true,
              },
              "manzana": {
                  "required": true,
                  "number": true,
                  "max": 99
              },
              "naranja": {
                "required": true,
                "number": true,
                "max": 99
              },
              "precio": {
                  "required": true,
                  "number": true,
                  "min": 100
              },
              "texto": {
                  "required": true
              },
              "descripcion": {
                "required": true
              },
              "taco": {
                "required": true,
                "number": true
              }
          },
          "messages": {
              "mango": {
                  "required": "La ID es un campo obligatorio.",
                  "minlength": "Ingrese una ID válida."
              },
              "nombre": {
                  "required": "El nombre es un campo obligatorio."
              },
              "manzana": {
                  "required": "Es obligatorio ingresar el descuento (dejar en 0 si no tiene).",
                  "number": "Debe ingresar sólo números.",
                  "max": "El descuento no puede tener más de 2 dígitos."
              },
              "naranja": {
                "required": "Es obligatorio ingresar el descuento (dejar en 0 si no tiene).",
                "number": "Debe ingresar sólo números.",
                "max": "El descuento no puede tener más de 2 dígitos."
              },
              "precio": {
                  "required": "El precio es un campo obligatorio.",
                  "min": "El precio debe partir por lo menos desde 3 dígitos.",
                  "number": "Debe ingresar sólo números."
              },
              "texto": {
                  "required": "Este campo es obligatorio."
              },
              "descripcion": {
                "required": "Este campo es obligatorio."
              },
              "taco": {
                "required": "Este campo es obligatorio.",
                "number": "Debe ingresar sólo números."
              }
          }
      });
});