import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51GqLI6GeuF0pRCkHqQtszJ7BcGCgFiYqVjEnqu3TABpjg4JwT5Rl0tK6V3O2jKd7TxAtvppVYHits2xiwfibMEzl001Nts0Tk1';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
          label='Pay Now'
          name='Ecommerce Store'
          billingAddress
          shippingAddress
          image='https://svgshare.com/i/CUz.svg'
          description={`Your total is $${price}`}
          amount={priceForStripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishableKey}
        />
    );
};

export default StripeButton;