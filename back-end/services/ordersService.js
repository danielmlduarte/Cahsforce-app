const { orders } = require('../models');

const ordersMapper = (ordersList) => (
  ordersList.map(order => ({
    notaFiscal: order.nNf,
    sacado: order.buyer.name,
    cedente: order.provider.name,
    emissao: order.emissionDate,
    valor: order.value,
    status: order.orderStatusBuyer,
  }))
);

const getOrdersByBuyerId = async (buyerId) => {

  const ordersList = await orders.findAll({ where: { buyerId }, include: ['buyer', 'provider'] });
  
  return ordersMapper(ordersList);
};

const getOrders = async () => {

  const ordersList = await orders.findAll({ include: ['buyer', 'provider'] });
  
  return ordersMapper(ordersList);
};


module.exports = { getOrdersByBuyerId, getOrders };
