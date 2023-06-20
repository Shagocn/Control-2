$(document).ready(function() {

    $('#btn-obtener-ropas').click(function() {

        debugger
        $.get('https://fakestoreapi.com/products', function(data) {

            debugger

            $('#tabla-ropa tbody').empty();

            $.each(data, function(i, item) {

                var fila = '';
                fila += '<tr>';
                fila += '   <td>' + i + '</td>';
                fila += '   <td>' + item.title + '</td>';
                fila += '   <td> <img src="' + item.image + '"></td>';
                fila += '   <td>' + item.price + '</td>';
                fila += '</tr>';

                $('#tabla-ropa').append(fila);

            });

        });

    });
});
