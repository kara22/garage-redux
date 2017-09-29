import React from 'react';


const CarListItem = (props) => {
  return (
    <div className="car-item">
      <h3>{props.car.brand}</h3>
      <p>{props.car.model}</p>
      <p>{props.car.owner}</p>
      <p>{props.car.plate}</p>
    </div>
  );
};

export default CarListItem;
