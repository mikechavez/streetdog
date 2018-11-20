import React from 'react';


const ShopInfo = ({ name, hours, days }) => (
  
  <div>
    <div className="description-area">
      <h2>{name}</h2>
      <div><strong>Hours:</strong> {hours}</div>
      <div><strong>Days Open:</strong> {days}</div>
    </div>
  </div>
)

export default ShopInfo;