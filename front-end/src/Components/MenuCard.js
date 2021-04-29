import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/MenuCardStyles.css'

const MenuCard = ({ title, image, click, setClass }) => {
  return (
    <div className={ `menu-card ${setClass}` } onClick={ click }>
      <img src={ image } alt={ `${title} icon`}/>
      <span>{ title }</span>
    </div>
  )
}

MenuCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  click: PropTypes.func
};

export default MenuCard
