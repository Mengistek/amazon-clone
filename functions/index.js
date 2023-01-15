const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51MInUILPxcABmaL9oLYXtTS2CICfprj1Z2X7A5DCitvPMStUDzKgvEvvRpYfKkc2WtwWlMpFCMfonNxqt6QKpmDn00jK8icKYJ"
);

//App config
const app = express();

//Middlowares
app.use(cors({ origin: true }));
app.use(express.json());

app.get('/',( request, response)=> response.status(200).send('Hello World'))

//test
// app.get("/mengs", (request, response) => response.status(200).send("Hello Mengs"));

app.post('/payments/create', async (request, response)=>{
    const total = request.query.total;

    console.log('Payment Request Recieved for this amount >>> ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,  //submits of the currency
        currency: 'usd',
    });

response.status(201).send({ clientSecret: paymentIntent.client_secret
 });
});


exports.api = functions.https.onRequest(app);