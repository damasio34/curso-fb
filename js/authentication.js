// Inputs
var txtEmail = document.getElementById('txtEmail');
var txtSenha = document.getElementById('txtSenha');

// Buttons
var btnAuthEmail =  document.getElementById('btnAuthEmail');
var btnAddUsuario =  document.getElementById('btnAddUsuario');
var btnAuthGithub = document.getElementById('btnAuthGithub');
var btnAuthFacebook = document.getElementById('btnAuthFacebook');
var btnAuthTwitter = document.getElementById('btnAuthTwitter');
var btnAuthGoogle = document.getElementById('btnAuthGoogle');
var btnAuthAnonymous = document.getElementById('btnAuthAnonymous');
var btnlogOut = document.getElementById('btnlogOut');

// Display
var displayName = document.getElementById('displayName');

// Criar novo usuário
btnAddUsuario.addEventListener('click', function() {
    firebase
        .auth()
        .createUserWithEmailAndPassword(txtEmail.value, txtSenha.value)
        .then(function () {
            alert('Bem vindo, ' + txtEmail.value);
        })
        .catch(function (error) {
            console.error(error.code);
            console.error(error.message);
            alert('Falha ao cadastrar, verifique o erro no console.');
        });    
});

// Autenticar com e-mail e senha
btnAuthEmail.addEventListener('click', function() {
    firebase
        .auth()
        .signInWithEmailAndPassword(txtEmail.value, txtSenha.value)
        .then(function (result) {
            console.log(result);
            displayName.innerHTML ='Bem vindo, ' + txtEmail.value;
            alert('Autenticado ' + txtEmail.value);
        })
        .catch(function (error) {
            console.error(error.code);
            console.error(error.message);
            alert('Falha ao cadastrar, verifique o erro no console.');
        });
});

// LogOut
btnlogOut.addEventListener('click', function() {
    firebase
        .auth()
        .signOut()
        .then(function () {            
            displayName.innerHTML ='Você não está autenticado.';
            alert('Você se deslogou.');
        })
        .catch(function (error) {
            console.error(error.code);
            console.error(error.message);
            alert('Falha ao cadastrar, verifique o erro no console.');
        });
});
