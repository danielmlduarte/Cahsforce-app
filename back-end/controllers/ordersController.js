const express = require('express');
const orderService = require('../services/ordersService');
const { OK, NOT_FOUND, INTERNAL_SERVER_ERROR } = require('../helpers/HttpStatusCodes');

const router = express.Router();

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {

    const ordersDTO = await orderService.getOrdersByBuyerId(id);
    if (ordersDTO.length) return res.status(OK).json(ordersDTO);
    return res.status(NOT_FOUND).json({ message: 'Não há notas' })

  } catch (error) {

    return res.status(INTERNAL_SERVER_ERROR).json({ message: 'Algo deu errado' });

  }
});

module.exports = router;
