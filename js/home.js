var btnlogOut = document.getElementById('btnlogOut');
// LogOut
btnlogOut.addEventListener('click', function() {
    firebase
        .auth()
        .signOut()
        .then(function () {            
            alert('Você se deslogou.');
            window.location = 'index.html';
        })
        .catch(function (error) {
            console.error(error.code);
            console.error(error.message);
            alert('Falha ao cadastrar, verifique o erro no console.');
        });
});