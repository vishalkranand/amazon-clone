import React from 'react'
import "./style.css"

export default function SubComp(props) {
  return (
    <div id="comp-container">
      
       {
        props.obj.name
       }

       {
        (props.obj.followerSymbol!==0) && <span id="follower-icon">{props.obj.followerSymbol}</span>
       }
       
    </div>
  )
}
