import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled, { css } from 'styled-components';

import { selectCartHidden } from '../../redux/cart/cartSelectors';
import { selectCurrentUser } from '../../redux/user/userSelector';
import CartIcon from '../cartIcon/cartIcon';
import { auth } from '../../firebase/firebaseUtils';
import CartDropdown from '../cartDropdown/cartDropdown';
import { signOutStart } from '../../redux/user/userActions';

import { ReactComponent as Logo } from '../../assets/crown.svg';

const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

const Options = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const optionStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;

const OptionLink = styled(Link)`
  ${optionStyles};
`;

const OptionDiv = styled.div`
  ${optionStyles};
`;

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <Options>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/shop">CONTACT</OptionLink>
      {currentUser ? (
        <OptionDiv to="/" onClick={signOutStart}>
          SIGN OUT
        </OptionDiv>
      ) : (
        <OptionLink to="/sign-in">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </Options>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
