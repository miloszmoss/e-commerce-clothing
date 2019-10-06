import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_d7zROKD4mU9Gln17mWSrg05e00Evke7dOg';

  const onToken = token => {
    console.log(token);
  };

  return (
    <div>
      <StripeCheckout
        label="Pay Now"
        name="Clothing"
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay now"
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  );
};

export default StripeButton;
