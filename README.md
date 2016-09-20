# Get start Firebase

## Utilização
Pra testar o projeto, é preciso instalar o pacote [http-server](https://www.npmjs.com/package/http-server) de forma global no npm 
e rodar a instalação do [bower](https://bower.io/) (```bower install```), para baixar as dependências do projeto.

Após a instalação executar o comando ```http-serve -c1```
Obs.: O ```-c1``` é pra definir o tempo de cache do servidor web, sendo ele setado para 1s, 
evitando assim o armazenamento de cache e consequentemente a necessidade de algumas vezes
dar CTRL + F5 ou limpar o cache para exibir alguma anteração. 

## Autenticação
Página de autenticão com Firebase, podendo ela ser feita de forma anônima, 
com login e senha previamente cadastrados, com uma conta do github, 
ou com uma conta do google (facebook e twitter ainda não foram implementados, rs).

## Real-time database
Página de cadastro e exibição de clientes, os quais possuem nome e idade. 
