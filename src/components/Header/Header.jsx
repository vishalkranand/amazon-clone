import React from 'react'
import "./style.css"
import Search from './Serchbar/Search'
import {Link} from 'react-router-dom';

export default function Header(props) {

  let cartSize=props.mainCart.reduce((accumulator,currProduct)=>{
    return accumulator+=currProduct.quantity;
  },0);
  
  return (
  <div id="nav-belt">
      <div id="nav-left">

        <Link to="/" id="nav-icon">
        <img src='/logo.png'alt='icon' />
        </Link>
        <div id="nav-location">
        <img src='/location-hardcoded.png'alt='icon' />
        </div>

      </div>

        <div id="nav-search">
       <Search setSearch={props.setSearch}/>                                   {/* //search component */}
        </div>
      
      <div id="nav-right">
       <Link to="/cart" id="cart">
           <div id="cartItemsCount">{cartSize}</div>
          <img id="cartImage" src="/cart.png" alt="flag" />
        </Link>
         
         
        <div id="returnsOrders">
          <img id="returnsOrdersImage" src="/returns-and-orders.png" alt="flag" />
        </div>

        <Link id="accountAndList" to="/loginOrSignup">
          <span id="accountAndList-username">User</span>            
          <img src="/user-account&lists-hardcoded.png"  alt="flag" />
        </Link>


        <div id="flag-container">
          <img id="flag-image" src="/flag-indian.png" alt="flag" />
        </div>
         

      </div>
    
  </div>
  )
}
