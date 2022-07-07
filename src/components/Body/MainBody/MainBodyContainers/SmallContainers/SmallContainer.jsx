import React from 'react'
import "./style.css"

export default function SmallContainer(props) {
  return (
    <div id="small-container-main">
      <img  src={props.imagesrc} alt={props.imagealt}  / >
      <span id="product-title"> {props.description}</span>
    </div>
  )
}
