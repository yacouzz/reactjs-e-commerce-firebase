import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton =({price})=>{
    const PriceForStripe = price * 100;
    const publishableKey = 'pk_test_XUD7L6fsw5btEJ6hlWy1N7BJ004acCNobC';

    const onToken = token => {
        console.log(token);
        alert('Payement Successful');
    }

    return(
         <StripeCheckout
         label="Pay NOW"
          name="YaCouzz clothing sahbey"
          billingAddress
          shippingAddress
          image="https://svgshare.com/i/CUz.svg"
          description={`Your total is ${price}`}
          amount={PriceForStripe}
          panelLabel=" Pay now"
          token={onToken}
          stripeKey={publishableKey}/>
          );
}

export default StripeCheckoutButton;