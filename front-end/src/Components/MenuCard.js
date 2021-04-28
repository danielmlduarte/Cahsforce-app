import React from 'react';
import PropTypes from 'prop-types';

const MenuCard = ({ title, image, click }) => {
  return (
    <div onClick={ click }>
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
