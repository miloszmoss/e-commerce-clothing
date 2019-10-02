import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../customButton/CustomButton';
import CartItem from '../cartItem/cartItem';

import './cartDropdown.scss';

const cartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item}></CartItem>
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(cartDropdown);
