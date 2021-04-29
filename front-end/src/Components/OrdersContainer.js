import React from 'react';
import PropTypes from 'prop-types';
import OrderCard from './OrderCard'
import cashforceHandsIcon from '../Assets/cashforceHandsIcon.svg';
import '../Styles/OrdersContainerStyle.css'


const OrdersContainer = ({ orders }) => {
  return (
    <div className="order-container">
      <div className="order-container-header">
        <h3>
          <img src={ cashforceHandsIcon } alt="cashforce hands icon"/>
          Notas Fiscais
        </h3>
        <h5>Visualize as notas fiscais que você tem</h5>
      </div>
      <div>
        <div className="order-table-header">
          <span>NOTA FISCAL</span>
          <span>SACADO</span>
          <span>CEDENTE</span>
          <span>EMISSÃO</span>
          <span>VALOR</span>
          <span>STATUS</span>
        </div>
        <div>
          { orders.map((order, index) => (
            <OrderCard key={ index } orderItem={ order } />
          )) }
        </div>
      </div>      
    </div>
  )
}

OrdersContainer.propTypes = {
  orders: PropTypes.array,
};

export default OrdersContainer
