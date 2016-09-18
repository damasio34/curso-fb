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
};

firebase.database().ref('usuarios').on('value', function(snapshot) {
    snapshot.forEach(function(item) {        
        var tr = document.createElement('tr');
        var elementid = document.getElementsByTagName("td").length     
        var nome = document.createElement('td');
        var idade = document.createElement('td');        
        
        // Nome
        nome.setAttribute('id', elementid);
        nome.setAttribute('colspan', 2);
        nome.innerHTML = item.val().nome;
        tr.appendChild(nome);

        // Idade
        idade.setAttribute('id', elementid + 1);
        idade.setAttribute('colspan', 2);
        idade.innerHTML = item.val().idade;
        tr.appendChild(idade);

        listaDeUsuarios.appendChild(tr);       
    });

    // listaDeUsuarios.innerHTML = '';
    // snapshot.forEach(function(item) {
    //     var li = document.createElement('li');
    //     li.appendChild(document.createTextNode(item.val().nome + ': ' + item.val().idade));
    //     listaDeUsuarios.appendChild(li);
    // });
});