import React from 'react';
import PropTypes from 'prop-types';

const OrderCard = ({ orderItem: { notaFiscal, sacado, cedente, emissao, valor } }) => {
  return (
    <tr className="order-card">
      <td>{ notaFiscal }</td>
      <td>{ sacado }</td>
      <td>{ cedente }</td>
      <td>{ emissao }</td>
      <td>{ `R$ ${parseFloat(valor).toFixed(2)}` }</td>
      <td> RECEBIDO </td>
      <td><button>Dados do cedente</button></td>
    </tr>
  );
};

OrderCard.propTypes = {
  orderItem: PropTypes.shape({
    notaFiscal: PropTypes.string,
    sacado: PropTypes.string,
    cedente: PropTypes.string,
    emissao: PropTypes.string,
    valor: PropTypes.string,
  })
};

export default OrderCard;
