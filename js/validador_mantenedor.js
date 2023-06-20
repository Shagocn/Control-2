// objeto.metodo(json)

$(document).ready(function() {

  $('#btnSaludar').click(function() {

      alert('Hola');
  });

  $('#formulario1').validate( 
      {
          "rules": {
              "id": {
                  "required": true,
                  "number": true,
                  "min": 3
              },
              "nombre": {
                  "required": true,
                  "minlength": 1
              },
              "descuento": {
                  "required": true,
                  "number": true,
                  "max": 2
              },
              "precio": {
                  "required": true,
                  "number": true,
                  "min": 3
              },
              "texto": {
                  "required": true
              }
          },
          "messages": {
              "id": {
                  "required": "La id es un campo obligatorio.",
                  "id": "Ingrese una ID válida."
              },
              "nombre": {
                  "required": "El nombre es un campo obligatorio."
              },
              "descuento": {
                  "required": "El descuento es un campo obligatorio (dejar en 0 si no se quiere ingresar)",
                  "max": "El descuento no puede tener más de 2 dígitos."
              },
              "precio": {
                  "required": "El precio es un campo obligatorio.",
                  "minlength": "El precio debe partir por lo menos desde 3 dígitos."
              },
              "texto": {
                  "required": "Este campo es obligatorio."
              }
          }
      });
});