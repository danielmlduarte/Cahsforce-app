const fetchNotasFicais = async (id) => {
  const endpoint = `http://localhost:3000/orders/${id}`
  const result = await fetch(endpoint);
  const orders = await result.json();
  return orders;
};

export default fetchNotasFicais;
