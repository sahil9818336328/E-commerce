// ACCESSING ENVIRONMENT VARIABLES
const dotenv = require('dotenv')
dotenv.config()
const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY)
exports.handler = async function (event, context) {
  // PASSING DATA TO THE SERVER
  const { cart, shipping_fee, total_amount } = JSON.parse(event.body)

  // CALCULATE TOTALS FOR STRIPE
  const calculateOrderAmount = () => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return shipping_fee + total_amount
  }
  try {
    // Create a PaymentIntent with the order amount and currency
    // CONNECTING TO STRIPE AND GETTING CLIENT SECRET KEY
    const paymentIntent = await stripe.paymentIntents.create({
      // ACCEPTING INTERNATIONAL PAYMENTS FROM INDIA
      description: 'Software development services',
      shipping: {
        name: 'Sahil Khatri',
        address: {
          line1: '510 Townsend St',
          postal_code: '98140',
          city: 'San Francisco',
          state: 'CA',
          country: 'US',
        },
      },
      amount: calculateOrderAmount(),
      currency: 'usd',
      payment_method_types: ['card'],
    })
    return {
      statusCode: 200,
      body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    }
  }
}
