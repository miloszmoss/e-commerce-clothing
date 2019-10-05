import React from 'react';
import { connect } from 'react-redux';

import {
  clearItemFromCart,
  removeItem,
  addItem,
} from '../../redux/cart/cartActions';

import './checkoutItem.scss';

const CheckoutItem = ({
  cartItem,
  clearItem,
  removeItem,
  addItem,
  cartItem: { name, imageUrl, price, quantity },
}) => {
  const handleRemoveItem = () => clearItem(cartItem);
  const handleOneItem = () => removeItem(cartItem);
  const handleAddItem = () => addItem(cartItem);
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div onClick={handleOneItem} className="arrow">
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={handleAddItem} className="arrow">
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div onClick={handleRemoveItem} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
});

export default connect(
  null,
  mapDispatchToProps,
)(CheckoutItem);
