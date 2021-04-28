const express = require('express');
const orderService = require('../services/ordersService')
const router = express.Router();

router.get('/:id', (req, res) => {
  const { id } = req.params;
  orderService.getOrdersByBuyerId(id)
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    });
});

module.exports = router;
