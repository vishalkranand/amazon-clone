import React from 'react'
import "./CartCompstyle.css"
import ProductList from "../../ProductsList.js"

export default function CartComponent(props) {

     let existing=props.quantity;
     let currentElementObj=ProductList.filter((eachProductObj)=>{
      return eachProductObj.id===props.productid;
     });  
      
    function addProductToCart(){

      props.setMainCart((existingCardElements)=>{
  
       let index=existingCardElements.findIndex((obj)=>obj.productid===currentElementObj[0].id);
       existingCardElements[index]={productid:props.productid,quantity:existing+1,productprice:props.productprice};
       return [...existingCardElements]; 

   } );
    }

    function removeProductFromCart(){
      props.setMainCart((existingCardElements)=> {
        
        if(existing===1){
         
          if(window.confirm(`Are you sure to remove ${currentElementObj[0].brand.toUpperCase()} ${currentElementObj[0].type.toUpperCase()} from cart?`)){
          return existingCardElements.filter((eachCartProductObject)=> eachCartProductObject.productid!==props.productid)
         }
         else{
          return existingCardElements;
         }
  
        }else{
          let index=existingCardElements.findIndex((obj)=>obj.productid===currentElementObj[0].id);
          existingCardElements[index]={productid:props.productid,quantity:existing-1,productprice:props.productprice};
          return [...existingCardElements]; 
        }

      });
    }
    function deleter(){

    if(window.confirm (`Remove ${currentElementObj[0].brand.toUpperCase()} ${currentElementObj[0].type.toUpperCase()} from Cart ?`)){
      props.setMainCart((oldCartProducts)=>{
        return oldCartProducts.filter((eachCartObject)=> eachCartObject.productid!==props.productid)
      })
    }
    
    }

  return (
    <div id="cart-component-container">
     
    <div id="image-container"><img src={`/${currentElementObj[0].image.slice(1)}`} alt={currentElementObj[0].image.slice(15)} /></div>

    <div id="product-details-container">
        <span id="item-description">{currentElementObj[0].description}</span>
        <span className='brandname'>{currentElementObj[0].brand}</span>
        <div className='gift-or-not'><input type="checkbox"/>This item is a gift <span>See More</span></div>
        <div id="addtocart-container">
        {existing ? <> <button id="increment" onClick={addProductToCart}>+</button> <span id="addtocart">{existing} In Cart</span> <button id="decrement" onClick={removeProductFromCart}>-</button> </> :
        <button id="addtocart" onClick={addProductToCart}>Add to Cart</button>
        }
        </div>

    </div>
       

    <div id="price-container">
      <span id="price"><span>₹</span>{currentElementObj[0].price}</span>
      <button onClick={deleter}>Delete</button>
    </div>

    </div>
  )
}
