import React, { useState } from 'react';
import MenuHero from '../Components/MenuHero';
import MenuCard from '../Components/MenuCard';
import OrdersContainer from '../Components/OrdersContainer';
import fetchOrders from '../Services/API';

import cashforceHandsIcon from '../Assets/cashforceHandsIcon.svg';

import '../Styles/MainPageStyles.css';



const MainPage = () => {
  const [ordersVisible, setOrdersVisible] = useState(false);
  const [ordersList, setOrdersList] = useState('');
  const [menuClass, setMenuClass] = useState('menu-card')

  const handleOrderVisible = async () => {
    const orders = await fetchOrders();
    setOrdersList(orders);
    setOrdersVisible(!ordersVisible);
    if (ordersVisible) {
      setMenuClass('')
    } else {
      setMenuClass('menu-card-active')
    }
  };

  return (
    <div className="main-page">
      <div className="buyer-side">
        <MenuHero />
        <div className="buyer-side-menu">
          <MenuCard
            title="Notas fiscais"
            image={ cashforceHandsIcon }
            click={ handleOrderVisible }
            setClass={ menuClass }
          />
        </div>
      </div>
      <div className="buyer-content">
        <hr className="buyer-content-line"/>
        { (ordersVisible) && <OrdersContainer orders={ ordersList } /> }
      </div>
    </div>
    
  );
};

export default MainPage;
