'use strict'

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

// Display
var displayName = document.getElementById('displayName');

// Criar novo usuário
btnAddUsuario.addEventListener('click', function() {
    firebase
        .auth()
        .createUserWithEmailAndPassword(txtEmail.value, txtSenha.value)
        .then(function () {
            alert('Bem vindo, ' + txtEmail.value);
            window.location = 'home.html';
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
            window.location = 'home.html';
        })
        .catch(function (error) {
            console.error(error.code);
            console.error(error.message);
            alert('Falha ao cadastrar, verifique o erro no console.');
        });
});

// Autenticar anônimo
btnAuthAnonymous.addEventListener('click', function() {
    firebase
        .auth()
        .signInAnonymously()
        .then(function (result) {
            console.log(result);
            displayName.innerHTML ='Bem vindo, anônimo';
            alert('Autenticado anonimamente.');
            window.location = 'home.html';
        })
        .catch(function (error) {
            console.error(error.code);
            console.error(error.message);
            alert('Falha ao cadastrar, verifique o erro no console.');
        });
});

// Autenticar com github
btnAuthGithub.addEventListener('click', function() {
    var provider = new firebase.auth.GithubAuthProvider();
    signIn(provider);
});

// Autenticar com google
btnAuthGoogle.addEventListener('click', function() {
    var provider = new firebase.auth.GoogleAuthProvider();
    signIn(provider);
});

// Autenticar com facebook
btnAuthFacebook.addEventListener('click', function() {
    var provider = new firebase.auth.FacebookAuthProvider();
    signIn(provider);
});

// Autenticar com twitter
btnAuthTwitter.addEventListener('click', function() {
    var provider = new firebase.auth.TwitterAuthProvider();
    signIn(provider);
});

function signIn(provider){
    firebase
        .auth()
        .signInWithPopup(provider)
        .then(function (result) {
            console.log(result);
            var token = result.credential.accessToken;
            displayName.innerHTML ='Bem vindo, ' + result.user.displayName;            
            window.location = 'home.html'; 
        })
        .catch(function (error) {
            console.error(error.code);
            console.error(error.message);
            alert('Falha ao cadastrar, verifique o erro no console.');
        });
}
