const fetchOrders = async () => {
  const endpoint = `http://localhost:3000/orders`;
  const result = await fetch(endpoint);
  const orders = await result.json();
  return orders;
};

export default fetchOrders;
