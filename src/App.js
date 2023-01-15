import Header from "./Compenets/Header";
import "./App.css";
import Home from "./Compenets/Home";
import {  Routes ,Route, } from 'react-router-dom'
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CheckOut from "./Compenets/CheckOut";
import Login from "./Compenets/Login";
import { useStateValue } from "./Compenets/StateProvider";
import React, { useEffect } from "react";
import { auth } from "./Compenets/Firebase";
import Payment from "./Compenets/Payment";
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import Orders from "./Compenets/Orders";


const promise = loadStripe(
  'pk_test_51MInUILPxcABmaL9yWSTkLC70WLfvc34rCWNjhbjfmlfvZwXjmKuVmlmNgVOCDSaPlaLRQ01awAQfP16GTjF5JvC00lUSdDzP4'
);

function App() {
  const [{ user }, dispath] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      
      if (authUser) {
        //the user just loggedin / the user was logged in
 
        dispath({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispath({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/orders"
          element={
            <>
              <Header />
              <Orders />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/payment"
          element={
            <>
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <CheckOut />
            </>
          }
        />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
      </Routes>
    </div>
  );
}

export default App;







// <Router>
    //   <div className="App">
    //     <Switch>
    //       <Route path="/login">
    //         <Login />
    //       </Route>
    //       <Route path="/Checkout">
    //         <Header />
    //         <CheckOut />
    //       </Route>
    //       <Route path="/">
    //         <Header />
    //         <Home />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>