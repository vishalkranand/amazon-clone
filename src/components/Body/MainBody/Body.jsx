import React from 'react'
import './style.css'
import LargeCompContainer from './MainBodyContainers/LargeContainers/LargeCompContainer'
import arr from './MainBodyContainers/LargeBoxArray'

export default function Body() {


  return (
    <div id="main-body">

      <div id='image-slider'></div>

      <div id='above-slider-absolute-container'>

          <div id="main-container">
            
            {
              arr.map(obj => 

            <LargeCompContainer  key={obj.id} heading={obj.heading} center={obj.center} bottomAnchor={obj.bottomAnchor} filter={obj.filter}  / >

             ) 
            }

          </div>

      </div>

    </div>
  )
}
