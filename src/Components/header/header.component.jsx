import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { ReactComponent as Logo}  from '../../Asset/crwn.svg';
import { auth } from '../../Firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.components';
import CartDropdown from '../cart/cart-dropdown.component';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contacts'>
                CONTACTS
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
        {
            hidden ? null : <CartDropdown />
        }
    </div>
);

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);