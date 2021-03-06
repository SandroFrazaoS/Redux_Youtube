<h1 align="center">
  <br>
  <br>
  Redux Youtube
</h1>

<h4 align="center">
  Youtube com React e Redux middlewares (redux thunk, sagas, logger)
</h4>

<h6 align="center">
  bootcamp Udemy
</h6>

<br/>

<p align="center">
  <a href="#Pre-Requisitos">Pre-requisitos</a> |
  <a href="#Instalação">Instalação</a> |
  <a href="#Usabilidade">Usabildiade</a>
</p>

# Pre-Requisitos

* [Node.JS](https://nodejs.org/)
* [React](https://pt-br.reactjs.org/)
* [Redux](https://redux.js.org/)
* [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/get-npm)

# Instalação
```
# Primeiro clone o repositorio do Git para seu computador. Execute o comando; 
git clone https://github.com/SandroFrazaoS/Redux_Youtube.git

# Acesse a pasta criado atraves do comando; 
cd Redux_Youtube

# Instale todas as dependencias do projeto, acesse a pasta Redux_Youtube e execute o comando;
yarn

# Para start do App execute dentro da pasta Redux_Youtube o comando;
yarn start
```

# Usabilidade

O Redux Youtube é um exercicio de aprendizagem onde foi desenvolvido um site em React que simula algumas funções do youtube. Neste exercicio foi utilizado a API do Youtbe para consulta de videos. Nas navegações foi utilizado Redux,Middlewares (logger, chrome dev tool), Redux síncrono e
Redux assíncrono com redux-thunk.

Abaixo temos o layout do projeto dividido em 3 parte. Acima tera um camp ode busca que ao digitar uma palava chave mostra ao lado esquerdo o resultado da busca. Ao clicar em um dos videos lista ao lado esquerdo é carregado o video ao lado direito.

![1][tela1]

Abaixo a tela do projeto final desenvolvido.
![2][tela2]

Nesta tela é possivel visualizar os redux criado
![3][tela3]

[tela1]: layout.png
[tela2]: tela1.png
[tela3]: tela2.png


