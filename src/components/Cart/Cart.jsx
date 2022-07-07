
import "./MainCartStyle.css"
import CartComponent from './Comp/CartComponent.jsx'

export default function Cart(props) {
   
   let productCount=props.mainCart.reduce((acc,currProductObj)=>{
    return acc+=currProductObj.quantity;
   },0);

   let totalCartValue=props.mainCart.reduce((acc,currProductObj)=>{
    return acc+=(currProductObj.quantity * currProductObj.productprice);
   },0);

   function ProceedToBuy(){
    window.alert("Cart value must be greater than 1 Crore to Proceed !!");
   }

  // let totalCartValue=0;
  return (
    <div id="main-cart-container">

    <div id="cart-items-container-left">

    <div id="top-in-container-left">
    <span id="heading-for-items">Shopping Cart</span> <span id="price-of-items">Price</span>
    </div>

    {props.mainCart.length===0 && <div className='emptyCart'>Your Cart is Empty 😐</div>}

    {props.mainCart.length>0 && <>{props.mainCart.map((eachCartElement)=>{
      return <CartComponent key={eachCartElement.productid} productid={eachCartElement.productid} productprice={eachCartElement.productprice} quantity={eachCartElement.quantity } setMainCart={props.setMainCart} / >
    })}</>}

    </div>


    <div>
    <div id="cart-items-sum-container-right">
      <div id="sum-container-top">
      <span id="subtotal-heading-right">Subtotal ( {productCount} items ):<span id="total-amount-right">₹{Intl.NumberFormat('en-IN').format(totalCartValue)}</span></span>
      </div>
       
       <div id="proceed-to-buy-container" >
      <div id="proceed-to-buy"><button onClick={ProceedToBuy}>Proceed to Buy</button></div>
       </div>

       <div id="emi-avilable-container">
        <span id="emi-text-visible-container">
        <span id="emi-text">Emi Available</span> <span id="caret-down-symbol">&#9660;</span>
        </span>
       </div>

    </div>

    </div>

    </div>
  )
}
