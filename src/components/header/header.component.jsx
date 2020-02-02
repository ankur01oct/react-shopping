import React from 'react';
import { Link } from 'react-router-dom';
//connect is higher order component, which gives modified component
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
// cuz svg is not .js so import as ReactComponent as Logo
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
  {/* linking header to homepage route */}
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
   <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);
// func allow us to access state[we get state as argument from top level root reducer]
// createStructuredSelector automatically passes top level state as argument to selector functions
const mapStateToProps = createStructuredSelector({
  // propname [name of the property we want to pass in to Header component: Value is value of prop]
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});
export default connect(mapStateToProps)(Header);