import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/OrderCardStyle.css';

const OrderCard = ({ orderItem: { notaFiscal, sacado, cedente, emissao, valor, status } }) => {
  const statusCodes = {
    '0': 'PENDENTE DE CONFIRMAÇÃO',
    '1': 'PEDIDO CONFIRMADO',
    '2': 'NÃO RECONHECE O PEDIDO',
    '3': 'MERCADORIA NÃO RECEBIDA',
    '4': 'RECEBIDA COM AVARIA',
    '5': 'DEVOLVIDA',
    '6': 'RECEBIDA COM DEVOLUÇÃO PARCIAL',
    '7': 'RECEBIDA E CONFIRMADA',
    '8': 'PAGAMENTO AUTORIZADO'
  };

  const dateFormatter = (date) => {
    const dateArray = date.substr(0,10).split('-');
    return `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`;
  }

  return (
    <div className="order-card">
      <span className="order-text-black">{ notaFiscal }</span>
      <span className="order-text-black">{ sacado }</span>
      <span className="order-text-black">{ cedente }</span>
      <span className="order-text-black">{ dateFormatter(emissao) }</span>
      <span className="order-text-green">{ `R$ ${parseFloat(valor).toFixed(2)}` }</span>
      <span className="order-text-green">{ statusCodes[status] }</span>
      <button>Dados do cedente</button>
    </div>
  );
};

OrderCard.propTypes = {
  orderItem: PropTypes.shape({
    notaFiscal: PropTypes.string,
    sacado: PropTypes.string,
    cedente: PropTypes.string,
    emissao: PropTypes.string,
    valor: PropTypes.string,
    status: PropTypes.string,
  })
};

export default OrderCard;
