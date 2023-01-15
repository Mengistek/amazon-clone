import React from 'react'
import './CheckOutProduct.css'
import { useStateValue } from './StateProvider';




function CheckOutProduct( {id, image , Product , title, price, rating, hideButton }) {
    const [{basket}, dispatch]= useStateValue();
       const removeFromBasket=()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id: id, 
        });
       };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />
      <div className="checkoutProduct__info">
        <h3 className="checkoutProduct__pro">{Product}</h3>
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckOutProduct;
