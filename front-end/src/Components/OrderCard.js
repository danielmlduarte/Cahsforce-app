import React from 'react';
import PropTypes from 'prop-types';

const OrderCard = ({ notaFiscal, sacado, cedente, emissao, valor }) => {
  return (
    <div>
      <div>{ notaFiscal }</div>
      <div>{ sacado }</div>
      <div>{ cedente }</div>
      <div>{ emissao }</div>
      <div>{ valor }</div>
      <div> RECEBIDO </div>
      <button>Dados do cedente</button>
    </div>
  );
};

OrderCard.propTypes = {
  props: PropTypes
};

export default OrderCard;
