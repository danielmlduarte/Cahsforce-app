import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BuyerSide from '../Components/BuyerSide';
import BuyerContent from '../Components/BuyerContent';

import fetchNotasFicais from '../Services/API';


const MainPage = () => {
  const [ordersVisible, setOrdersVisible] = useState(false);
  const [accountVisible, setAccountVisible] = useState(false);

  const handleOrderVisible = () => {
    fetchNotasFicais(1);
    setOrdersVisible(true);
    setAccountVisible(false);
  };

  return (
    <div>
      <BuyerSide />
      { (ordersVisible) && <BuyerContent /> }
    </div>
  );
};

MainPage.propTypes = {
  props: PropTypes
};

export default MainPage;
