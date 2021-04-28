const { orders } = require('../models');

const getOrdersByBuyerId = async (buyerId) => {

  const ordersList = await orders.findAll({ where: { buyerId }, include: ['buyer', 'provider'] });
  
  const ordersDTO = ordersList.map(order => ({
    notaFiscal: order.nNf,
    sacado: order.buyer.name,
    cedente: order.provider.name,
    emissao: order.emissionDate,
    valor: order.value,
  }));

  return ordersDTO;
}


module.exports = { getOrdersByBuyerId };
