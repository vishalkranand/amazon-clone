import React from 'react'
import "./style.css"
import allproducts from '../ProductsList'
import Card from './Card/Card'
import { useParams } from 'react-router-dom';

export default function AllProducts(props) {
   let setMainCart=props.cartupdater;            //cart updater method
   const idOrName=useParams(); 
  
  return (<>  
   <div id="super-parent"> 
    <div id="left-box">
    {idOrName.productName.slice(0,10)==="typesearch" && `All Products > ${idOrName.productName.slice(10)}` }
    {idOrName.productName==="all" && "All Products"}
    {idOrName.productName!=="all" && idOrName.productName.slice(0,10)!=="typesearch" && `All Products > ${allproducts.filter((singleProduct)=>singleProduct.id===Number(idOrName.productName))[0].type}`}
    </div>

    <div id="right-box">
     
    {idOrName.productName.slice(0,10)==="typesearch" && allproducts.filter((singleProduct)=>singleProduct.type===idOrName.productName.slice(10)).map((singleProduct)=> <Card details={singleProduct} key={singleProduct.id} setMainCart={setMainCart} mainCart={props.mainCart} /> ) }

     {idOrName.productName==="all" && allproducts.map((singleProduct)=> <Card details={singleProduct} key={singleProduct.id} setMainCart={setMainCart} mainCart={props.mainCart} /> ) }
      
     {idOrName.productName!=="all" && idOrName.productName.slice(0,10)!=="typesearch" && allproducts.filter((singleProduct)=>singleProduct.id===Number(idOrName.productName)).map((singleProduct)=> <Card details={singleProduct} key={singleProduct.id} setMainCart={setMainCart} mainCart={props.mainCart} /> ) }
     
    </div>

    </div>

    </>
  )
}
