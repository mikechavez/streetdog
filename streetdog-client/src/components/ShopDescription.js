import React from 'react';


const ShopDescription = ({ description }) => (
  
  <div>
    You made it to the shop, dude!
    <div className="description-area">
      {description}
    </div>

  </div>
)

export default ShopDescription;