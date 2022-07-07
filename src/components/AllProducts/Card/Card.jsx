import React, { useState } from 'react'
import "./AllCardStyle.css"
import {BiRupee} from 'react-icons/bi';

export default function Card(props) {
   let {brand,description,price,availableQuantity,image,id,type}=props.details;
   let setMainCart=props.setMainCart;
   
   let prePresentQuantity=0;
   let isPresent=[]; 
   isPresent=props.mainCart.filter((eachCartObject)=> {
     return eachCartObject.productid===id;
   })
   
   prePresentQuantity = isPresent.length>0?isPresent[0].quantity:0;
  
   let [exists,setAlreadyExists]=useState(prePresentQuantity);  //MARKS PRE-PRESENT QUANTITY 

   function addProductToCart(){

    setMainCart((existingCardElements)=>{
         let alreadyExists=[];
        if(existingCardElements.length>0){
          alreadyExists=existingCardElements.filter((eachCartProductObject)=> eachCartProductObject.productid===id);
        }
        
       if(alreadyExists.length>0){
         setAlreadyExists(alreadyExists[0].quantity+1);
        let prevQuantity=alreadyExists[0].quantity;              //previous quantity extracted
      
        //removing id
        let currentElementRemovedArray=existingCardElements.filter((eachCartProductObject)=>eachCartProductObject.productid!==id);   
        //re-added id with updated quantity
        return [...currentElementRemovedArray,{productid:id,quantity:prevQuantity+1,productprice:price}]; 

       }else{
        setAlreadyExists(1);
        return [...existingCardElements,{productid:id,quantity:1,productprice:price}];
       }

    } );

      //SINCE 'EXISTS' WILL BE UPDATED BY A CALLBACK FUNCTION, HENCE IT STILL HAS ITS OLD STATE
      exists===0 && alert(`${brand.toUpperCase()} ${type.toUpperCase()} added to cart !`)

   }

   function removeProductFromCart(){
    
    setMainCart((existingCardElements)=> {
      let requiredObject=existingCardElements.filter((eachCartProductObject)=> eachCartProductObject.productid===id);
     
      if(requiredObject[0].quantity===1){
       
        if(window.confirm(`Are you sure to remove ${brand.toUpperCase()} ${type.toUpperCase()} from cart?`)){
        setAlreadyExists(0);
        return existingCardElements.filter((eachCartProductObject)=> eachCartProductObject.productid!==id)
       }
       else{
        return existingCardElements;
       }

      }else{
        setAlreadyExists(requiredObject[0].quantity-1)
        //removing id
        let currentElementRemovedArray=existingCardElements.filter((eachCartProductObject)=>eachCartProductObject.productid!==id);   
        //re-added id with updated quantity
        return [...currentElementRemovedArray,{productid:id,quantity:requiredObject[0].quantity-1}]; 

      }

    });
    
   }
   return (
    
    <div id="card-container-all">
    
    <div id="image-container-all">
     <img src={`/${image.slice(1)}`} alt={image.slice(15)} />
    </div>


    <div id="details-container-all">
     <span id="brand-name-all">{brand}</span>
     <span id="product-description-all">{description}</span>

     <span id="pricetag-all">

     <span id="pricetag-rupee-symbol-all"><BiRupee /></span>{price}
     <span id="pricetag-strikethrough-all">₹{price+Math.round(((0.4*price+Number.EPSILON)*100)/100)}</span>
     <span id="savings-percentage-all">(Save 25%)</span>

     </span>

     { availableQuantity<6 && <span id="remainingquantity-all">{`( Hurry! Only ${availableQuantity} left )`}</span>}

     
    </div>
    
    <div id="addtocart-container-all">

    {exists ? <> <button id="increment-all" onClick={addProductToCart}>+</button> <span id="addtocart-all">{exists} In Cart</span> <button id="decrement-all" onClick={removeProductFromCart}>-</button> </> :
      <button id="addtocart-all" onClick={addProductToCart}>Add to Cart</button>
    }
     
    </div>

    </div>
  )
}
