<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description
Desafio de back-end 2021 - Notícias sobre voos espaciais
Esse desafio foi desenvolvido uma API REST que usará os dados do projeto Space Flight News.

## Installation

```bash
$ sudo docker-compose up
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## Routes
<table>
    <tr>
       <td>Método</td>   	
       <td>Endpoint</td>    	
       <td>Descrição</td>
    </tr>
    <tr>
       <td>GET</td>   	
       <td>http://localhost:3000/</td>    	
       <td> Retornar um Status: 200 e uma Mensagem "Back-end Challenge 2021 🏅 - Space Flight News".</td>
    </tr>
    <tr>
       <td>GET</td>   	
       <td>http://localhost:3000/articles</td>    	
       <td>Listar os primeiros 10 artigos</td>
    </tr>
    <tr>
       <td>GET</td>   	
       <td>http://localhost:3000/articles?page={pag}</td>    	
       <td>Utilizar o sistema de paginação para não sobrecarregar a REQUEST (Limite 10 artigos/pag)</td>
    </tr>
    <tr>
       <td>GET	</td>   	
       <td>http://localhost:3000/articles/{id}</td>    	
       <td>Obter a informação somente de um artigo</td>
    </tr>
    <tr>
       <td>POST</td>   	
       <td>http://localhost:3000/articles</td>    	
       <td>Adicionar um novo artigo</td>
    </tr>
    <tr>
       <td>PUT</td>   	
       <td>http://localhost:3000/articles/{id}</td>    	
       <td>Atualizar um artigo baseado no id</td>
    </tr>
    <tr>
       <td>DELETE</td>   	
       <td>http://localhost:3000/articles/{id}</td>    	
       <td>Remover um artigo baseado no id</td>
    </tr>
</table>

Este é um desafio da <a href="https://coodesh.com/"> Coodesh </a>

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

