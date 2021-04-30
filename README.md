# App Cashforce

Desenvolvimento de uma aplicação para demostração de habilidades de front-end e back-end

### Clonando o repositório:

```bash
$ git clone https://github.com/danielmlduarte/Cashforce-app.git
```

## Back-end (API)

Aplicação restful para acesso a base de dados

### Tecnologia

- [Node.js](https://nodejs.org/en/about/) ```14.15```
- [Express.js](https://expressjs.com/pt-br/) ```4.17.1```
- [Sequelize](https://sequelize.org/) ```6.6.2```
- [MySql](https://www.mysql.com/) ```8.0.23``` 

#### Executando a aplicação

```bash
$ npm run debug
```

> Para testar se a aplicação está em execução, acesse o endereço ```http://localhost:3000/orders```. A resposta deve ser um JSON com a lista de orders.

### Endpoints

Após executar a aplicação, os endpoints implementados foram
```http://localhost:3000/orders```.
```http://localhost:3000/orders/:buyerId```.


## Front-end

Aplicação React para consumo da API

### Tecnologia

- [React.js](https://pt-br.reactjs.org/) ```17.0.2```

#### Executando a aplicação

```bash
$ npm start
```
