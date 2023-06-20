// objeto.metodo(json)

$(document).ready(function() {

    $('#btnSaludar').click(function() {

        alert('Hola');
    });

    $('#formulario1').validate( 
        {
            "rules": {
                "email": {
                    "required": true,
                    "email": true
                },
                "password": {
                    "required": true,
                    "minlength": 5
                },
                "password2": {
                    "required": true,
                    "equalTo": "#password"
                }
            },
            "messages": {
                "email": {
                    "required": "El email es un campo obligatorio.",
                    "email": "Ingrese un correo válido."
                },
                "password": {
                    "required": "La contraseña es un campo obligatorio.",
                    "minlength": "La contraseña debe tener por lo menos 5 carácteres."
                },
                "password2": {
                    "required": "La contraseña es un campo obligatorio.",
                    "equalTo": "La contraseña no coincide."
                }
            }
        });
});