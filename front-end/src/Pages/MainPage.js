import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MenuHero from '../Components/MenuHero';
import MenuCard from '../Components/MenuCard';
import OrdersContainer from '../Components/OrdersContainer';
import cashforceHandsIcon from '../Assets/cashforceHandsIcon.svg';

import fetchNotasFicais from '../Services/API';


const MainPage = () => {
  const [ordersVisible, setOrdersVisible] = useState(false);
  const [ordersList, setOrdersList] = useState('');

  const handleOrderVisible = async () => {
    const orders = await fetchNotasFicais(1);
    setOrdersList(orders);
    setOrdersVisible(!ordersVisible);
  };

  return (
    <div className="main-page">
      <div className="buyer-side">
        <MenuHero />
        <MenuCard
          title="Notas fiscais"
          image={ cashforceHandsIcon }
          click={ handleOrderVisible }
        />
      </div>
      <div className="buyer-content">
        { (ordersVisible) && <OrdersContainer orders={ ordersList } /> }
      </div>
    </div>
    
  );
};

export default MainPage;
