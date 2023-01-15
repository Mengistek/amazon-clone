import React from 'react'
import './Order.css'
import moment from 'moment'
import CheckOutProduct from './CheckOutProduct'
import CurrencyFormat from 'react-currency-format'




function Order({order}) {
  return (
    <div className='order'>
        <h2>Order</h2>
      <p>{moment.unix(order.data.created).format('MMMM do YYYY, h:mma')}</p>
      <p className='order__id'>
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item)=>(
        <CheckOutProduct
        id={item.id}
        title={item.title}
        Product={item.Product}
        image={item.image}
        rating={item.rating}
        price={item.price}
        hideButton
        />
      ))}
      <CurrencyFormat 
      renderText={(value)=>(
        <h3 className="order__total">Order Total:{value}</h3>
      )}
      decimalScale={2}
      value={order.data.amount / 100}
      displayType={'text'}
      thousandSeparator={true}
      prefix={'$'}/>
    </div>
  )
}

export default Order
