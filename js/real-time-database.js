var txtNome =  document.getElementById('txtNome');
var nmbIdade =  document.getElementById('nmbIdade');
var btnAdicionar = document.getElementById('btnAdicionar');
var listaDeUsuarios = document.getElementById('listaDeUsuarios');

// Ao cliclar no botão
btnAdicionar.addEventListener('click', function() {
    create(txtNome.value, nmbIdade.value);
});

function create(nome, idade) {
    var data = {
        nome: nome,
        idade: idade
    };

    return firebase.database().ref().child('usuarios').push(data);
}

firebase.database().ref('usuarios').on('value', function(snapshot){
    listaDeUsuarios.innerHTML = '';
    snapshot.forEach(function(item){
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(item.val().nome + ': ' + item.val().idade));
        listaDeUsuarios.appendChild(li);
    });
});