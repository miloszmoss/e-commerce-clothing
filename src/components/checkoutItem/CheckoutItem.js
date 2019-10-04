import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart } from '../../redux/cart/cartActions';

import './checkoutItem.scss';

const CheckoutItem = ({
  cartItem,
  clearItem,
  cartItem: { name, imageUrl, price, quantity },
}) => {
  const handleRemoveItem = () => clearItem(cartItem);

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div onClick={handleRemoveItem} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
});

export default connect(
  null,
  mapDispatchToProps,
)(CheckoutItem);
