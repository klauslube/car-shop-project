# Bem vindo ao Car Shop Project!
Esse projeto é uma API RESTfull na qual utiliza arquitetura MSC(model, Service, Controller) e feito um CRUD de um gerenciador de uma concessionária. Desenvolvido na [Trybe](https://www.betrybe.com/) com uso de TypeScript, Node Js, mongoose, Express e outras stacks.


# Sumário
- [Bem vindo ao Car Shop Project!](#bem-vindo-ao-car-shop-project)
- [Sumário](#sumário)
- [Tecnologias, bibliotecas e arquiteturas usadas](#tecnologias-bibliotecas-e-arquiteturas-usadas)
- [Instruções da aplicação](#instruções-da-aplicação)

# Tecnologias, bibliotecas e arquiteturas usadas
  * __TypeScript__ | [Tipagem de variáveis](https://www.typescriptlang.org/docs/).
  * __Node.js, Express, Nodemon__ | [Criação de protocolo HTTP API](http://expressjs.com/), [Roteador de API](https://expressjs.com/en/guide/routing.html), [improve API development](https://www.npmjs.com/package/nodemon).
  * __Mongoose__ | [Mapeamento de objetos](https://mongoosejs.com/).
  * __Mongo__ | [Banco de dados] (https://www.mongodb.com/)
  * __MSC__ | [Arquiterura model, service, controller](https://martinfowler.com/architecture/).
  * __REST__ | [Arquitetura Rest](https://restfulapi.net/).
  * __POO__ | [Programação orientada a objetos](https://www.alura.com.br/artigos/poo-programacao-orientada-a-objetos).
  * __SOLID__ | [Principios de design SOLID](https://medium.com/desenvolvendo-com-paixao/o-que-%C3%A9-solid-o-guia-completo-para-voc%C3%AA-entender-os-5-princ%C3%ADpios-da-poo-2b937b3fc530)
  * __mocha, chai, Sinon__ | [Criação de testes](https://mochajs.org/),[Stubs e mocks](https://sinonjs.org/)

# Instruções da aplicação
### Instalar dependências
```
cd car-shop-project
npm install
```
### Rodar aplicação sem Docker

Crie um arquivo `.env` com sua conexão ao MySQL.

cd car-shop-project
npm run dev

### Rodando aplicação com Docker (arquivo docker-compose foi criado pela Trybe)
```
cd car-shop-project
docker-compose up -d
docker exec -it car_shop bash
npm install
npm run dev
```

### Rodar Lint
```
npm run lint
```
