import React from 'react'
import "./style.css"
import SubComp from './Comp/SubComp'
import arr from "./SubheaderComponenetsObj.js"
import { Link } from 'react-router-dom'

export default function SubheaderMain() {
  return (
    <div id="subheader-belt">
    
    <Link to="/allproducts/all" style={{ textDecoration: 'none' }}>
    <div id='Pre-Subheader-All-Container'> 
     <span id="hamburgur-menu"> &#8801; </span> <span id="alltext">All</span>  
     </div>
     </Link>

     {arr.map(object => <SubComp  key={object.id} obj={object} />) }
    </div>
  )
}
