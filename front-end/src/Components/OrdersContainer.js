import React from 'react';
import PropTypes from 'prop-types';
import OrderCard from './OrderCard'
import cashforceHandsIcon from '../Assets/cashforceHandsIcon.svg';


const OrdersContainer = ({ orders }) => {
  return (
    <div>
      <div>
        <h2>
          <img src={ cashforceHandsIcon } alt="cashforce hands icon"/>
          Notas Fiscais
        </h2>
        <h3>Visualize as nostas fiscais que você tem</h3>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>NOTA FISCAL</th>
              <th>SACADO</th>
              <th>CEDENTE</th>
              <th>EMISSÃO</th>
              <th>VALOR</th>
              <th>STATUS</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { orders.map((order, index) => (
              <OrderCard key={ index } orderItem={ order } />
            )) }
          </tbody>
        </table>
      </div>      
    </div>
  )
}

OrdersContainer.propTypes = {
  orders: PropTypes.array,
};

export default OrdersContainer
