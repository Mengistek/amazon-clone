import React from 'react'
import './CheckOut.css'
import CheckOutProduct from './CheckOutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'





function CheckOut() {
  const [{basket}, dispatch]= useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"

          alt=""
        />
        <h3>Hello</h3>
        <h2 className="checkout__title">your Shopping Basket</h2>
        {basket.map((item)=> (
            <CheckOutProduct 
            id={item.id} 
            title={item.title}
            Product={item.Product}
            image={item.image}
            price={item.price}
            rating={item.rating} />
        ))}
       
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default CheckOut
