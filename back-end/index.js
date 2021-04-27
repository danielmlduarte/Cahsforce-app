const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.json());

app.get('/', (request, response) => {
  response.send('ok');
});

app.listen(PORT, () => { console.log('API rodando na porta 3000'); });
