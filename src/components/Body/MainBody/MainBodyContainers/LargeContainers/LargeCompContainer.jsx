
import React from 'react'
import './style.css'
import allproducts from '../../../../ProductsList'
import SmallContainer from '../SmallContainers/SmallContainer';
import { Link } from 'react-router-dom';

export default function LargeCompContainer(props) {
  let allfiltered=null;
  let requiredfour=null;
  let filtervalue="undefined";
  
  if(props.filter!=null){
    filtervalue=props.filter[0];

  allfiltered=allproducts.filter((singleProduct) => {
   
     return filtervalue===singleProduct.type;
  
  } );

  requiredfour=allfiltered.filter((item,index)=>index<4);
  }

  return (
    <div id='large-comp-container-main'>
     <span id='large-comp-container-heading'>{props.heading}</span>


     <div id='large-comp-container-elementholder'> 
      
     {allfiltered===null && props.center}
     

     
     {requiredfour!=null &&

      requiredfour.map((eachFilteredProduct) =>
      <SmallContainer imagesrc={`/${eachFilteredProduct.image.slice(1)}`} imagealt={eachFilteredProduct.image.slice(15)} description={eachFilteredProduct.description} key={eachFilteredProduct.id} / >
      )
     } 
   


     </div>
     {filtervalue!=="undefined"?
      <Link to={`/allproducts/typesearch${filtervalue}`} id='large-comp-container-bottom-anchor'>{props.bottomAnchor}</Link>
      :
      <button style={{textDecoration:"none",cursor:"pointer",outline:"none",backgroundColor:"transparent",border:"0px"}} id='large-comp-container-bottom-anchor'>{props.bottomAnchor}</button>
     }
    
    </div>
  )
}
