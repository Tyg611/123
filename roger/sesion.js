$(document).ready(function() {
    $('#registerForm').on('submit', function(event) {
        event.preventDefault();

        var username = $('#username').val();
        var email = $('#email').val();
        var password = $('#password').val();
        var confirmPassword = $('#confirmPassword').val();

        if (password !== confirmPassword) {
            $('#message').text('Las contraseñas no coinciden.');
            return;
        }

        // Aquí puedes agregar la lógica para enviar los datos al servidor
        $('#message').text('Registro exitoso.');
    });
});
