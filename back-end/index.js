const express = require('express');
const cors = require('cors');
const ordersController = require('./controllers/ordersController');

const app = express();

const PORT = 3000;

app.use(express.json());

app.use(cors());

app.use('/orders', ordersController);

app.listen(PORT, () => { console.log('API rodando na porta 3000'); });
