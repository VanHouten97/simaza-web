(function() {
    'use strict';

    function login(e) {
        if (e.keyCode && e.keyCode !== 13) return;
        if ($('#inputUsername').val().length === 0) {
            return toastr.warning('O campo de Email/Cpf deve ser preenchido.');
        }
        if ($('#inputPassword').val().length === 0) {
            return toastr.warning('O campo de senha deve ser preenchido.');
        }

        localStorage.setItem('token', '123456789abcdefghijklmnoprstuvxyz');
        window.location.href = "./";
    }

    $('#loginBtn').click(login);
    $('#loginForm').keyup(login);
})();
