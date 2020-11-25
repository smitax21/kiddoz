import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HqzYnK6rKASDxaLV0rfBlJE0oMS1P0Mug87QksXtQW5TTpSrrW6YADerF2njv0Yi4fF4LCYT2UCFpptEowL8zMp00BN4t0jip';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
        label= 'Pay Now'
        name= 'kiddoz'
        billingAddress
        shippingAddress
        image= 'https://sendeyo.com/up/d/f3eb2117da'
        description= {`Your total is $${price}}`}
        amount= {priceForStripe}
        panelLabel= 'Pay Now'
        token= {onToken}
        stripeKey= {publishableKey}
        />
    )
};

export default StripeCheckoutButton;