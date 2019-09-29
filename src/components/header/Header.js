import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebaseUtils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './Header.scss';

const Header = ({ currentUser }) => {
  const handleSignOut = () => auth.signOut();
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/shop" className="option">
          CONTACT
        </Link>
        {currentUser ? (
          <div to="/" className="option" onClick={handleSignOut}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/sign-in" className="option">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
