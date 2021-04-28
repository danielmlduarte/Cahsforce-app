import React from 'react';
import MenuHero from './MenuHero';
import MenuCard from './MenuCard';
import cashforceHandsIcon from '../Assets/cashforceHandsIcon.svg';

const BuyerSide = () => {
  return (
    <div>
      <MenuHero />
      <MenuCard title="Notas fiscais" image={ cashforceHandsIcon }/>
    </div>
  )
}

export default BuyerSide
