import React from 'react';

const MenuCard = ({ title, image }) => {
  return (
    <div>
      <img src={ image } alt={ `${title} icon`}/>
      <span>{ title }</span>
    </div>
  )
}

export default MenuCard
