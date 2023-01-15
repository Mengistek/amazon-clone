import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link, useNavigate } from 'react-router-dom';
import CheckOutProduct from './CheckOutProduct';
import './Payment.css'
import axios from './axios';
import { useStateValue } from './StateProvider';
import { db } from './Firebase';





function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const navigate = useNavigate();

    const getBasketTotal=(basket)=>
   basket?.reduce((amount, item)=> item.price + amount, 0);
  

    const stripe = useStripe();
    const elements = useElements(); 
       
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded]= useState(false);
    const [processing, setProcessing]= useState(''); 
    const [ clientSecret, setClientSecret]= useState(true);

    useEffect(() => {
     // generet the special stripe secret which allows us to charge a customer
      const getClientSecret = async () => {
        const response = await axios({
          method: "post",
          //stripe expects the total in acurrrencies subumits
          // url: `/payments/create?total= ${getBasketTotal(basket) * 100 }`,
          url: `/payments/create?total=${getBasketTotal(basket) * 100} `,
        });
        setClientSecret(response.data.clientSecret);
      }
      getClientSecret();
    }, [basket]);

    console.log('The secret is >>>', clientSecret);
    //const getbasketTotal=(basket)=>
   // basket.reduce((amount,item)=>item.price + amount, 0);

    const handleSubmit = async (e)  => {
      //do all the fancy stripe stuff
      e.preventDefault();
      setProcessing(true);

      const payload = await stripe
        .confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        })
        .then(({ paymentIntent }) => {
          // paymentIntent =payment confiremation

          db.collection("users")
            .doc(user?.uid)
            .collection("orders")
            .doc(paymentIntent.id)
            .set({
              basket: basket,
              amount: paymentIntent.amount,
              created: paymentIntent.created,
            });

          setSucceeded(true);
          setError(null);
          setProcessing(false);

          dispatch({
            type: "EMPTY_BASKET",
          });

          navigate("/orders");
        });
    };



    const handleChange = (e) => {
       setDisabled(e.empty);
       setError(e.error ? e.error.message : "");
    }


  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout(<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>7874 LadyBird Ln</p>
            <p>San Marcos,Tx</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckOutProduct
                id={item.id}
                title={item.title}
                Product={item.Product}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className='payment__details'>
                <form onSubmit={handleSubmit}>

                    <CardElement onChange={handleChange}/>

                    <div className='payment__priceContainer'>
                      <CurrencyFormat 
                      renderText={(value)=>(
                        <h3>Order Total: {value}</h3>
                      )}
                      decimalScale={2}
                      value={getBasketTotal(basket)}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}/>

                      

                      <button disabled={processing || disabled || succeeded }>
                        <span>{processing ? <p>Processing </p> :'Buy Now'}</span>
                        </button>
                    </div>
                    {error && <div>{error}</div>}
                </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;






















// import React, { useState, useEffect } from "react";
// import "./Payment.css";
// import { useStateValue } from "./StateProvider";
// import { Link, useNavigate } from "react-router-dom";
// import CheckOutProduct from "./CheckOutProduct";
// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import CurrencyFormat from "react-currency-format";
// import axios from "./axios";
// import { db } from "./Firebase";

// function Payment() {
//   const [{ basket, user }, dispatch] = useStateValue();
//   const navigate = useNavigate();

//   const getBasketTotal = (basket) =>
//     basket?.reduce((amount, item) => item.price + amount, 0);

//   const stripe = useStripe();
//   const elements = useElements();
//   const [error, setError] = useState(null);
//   const [disabled, setDisabled] = useState(true);

//   const [succeeded, setSucceeded] = useState(false);
//   const [processing, setProcessing] = useState("");

//   const [clientSecret, setClientSecret] = useState(true);

//   useEffect(() => {
//     const getClientSecret = async () => {
//       const response = await axios({
//         method: "post",
//         //stripe expects the total in a currencies subunits
//         url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
//       });
//       setClientSecret(response.data.clientSecret);
//     };
//     getClientSecret();
//   }, [basket]);

//   console.log("THE SECRECT IS  >>>", clientSecret);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setProcessing(true);

//     const payload = await stripe
//       .confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: elements.getElement(CardElement),
//         },
//       })
//       .then(({ paymentIntent }) => {
//         //paymentIntent = payment confirmation

//         db.collection("users")
//           .doc(user?.uid)
//           .collection("orders")
//           .doc(paymentIntent.id)
//           .set({
//             basket: basket,
//             amount: paymentIntent.amount,
//             created: paymentIntent.created,
//           });

//         setSucceeded(true);
//         setError(null);
//         setProcessing(false);

//         dispatch({
//           type: "EMPTY_BASKET",
//         });

//         navigate("/orders");
//       });
//   };
//   const handleChange = (event) => {
//     //listen for changes in the CardElement
//     //and display any errors as the customer types their card details
//     setDisabled(event.empty);
//     setError(event.error ? event.error.message : "");
//   };

//   return (
//     <div className="payment">
//       <div className="payment__container">
//         <h1>
//           Checkout (<Link to="/checkout">{basket?.length} items</Link>)
//         </h1>
//         {/* payment section delivery address */}
//         <div className="payment__section">
//           <div className="payment__title">
//             <h3>Delivery Address</h3>
//           </div>

//           <div className="payment__address">
//             <p>{user?.email}</p>
//             <p> 123 React Lane</p>
//             <p>Uganda, kampala</p>
//           </div>
//         </div>
//         {/* payment section -- review address */}
//         <div className="payment__section">
//           <div className="payment__title">
//             <h3>Review items and delivery</h3>
//           </div>
//           <div className="payment__items">
//             {basket.map((item) => (
//               <CheckOutProduct
//                 id={item.id}
//                 title={item.title}
//                 image={item.image}
//                 price={item.price}
//                 rating={item.rating}
//                 Product={item.Product}
//               />
//             ))}
//           </div>
//         </div>
//         {/* payment section payment method */}
//         <div className="payment__section">
//           <div className="payment__title">
//             <h3>Payment Method</h3>
//           </div>
//           <div className="payment__details">{/* stripe magic will go */}</div>
//           <div className="payment__details">
//             <form onSubmit={handleSubmit}>
//               <CardElement onChange={handleChange} />
//               <div className="payment__priceContainer">
//                 <CurrencyFormat
//                   renderText={(value) => <h3>Order Total: {value} </h3>}
//                   decimalScale={2}
//                   value={getBasketTotal(basket)}
//                   displayType={"text"}
//                   thousandSeparator={true}
//                   prefix={"$"}
//                 />
//                 <button disabled={processing || disabled || succeeded}>
//                   <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
//                 </button>
//               </div>
//               {error && <div>{error}</div>}
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Payment;