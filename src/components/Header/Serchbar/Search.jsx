import React, {useState} from 'react'
import "./style.css"
import  { GoSearch }  from 'react-icons/go' ;
import { AiOutlineCaretDown } from 'react-icons/ai'
import ProductList from '../../ProductsList.js'
import {Link} from "react-router-dom";


export default function Search(props) {

  // OP SEARCH FUNCTIONALITY CREATED SUCCESSFULLY

  let[searchIsFocused,setSearchIsFocused]=useState(false);
  let[searchBitIsFocused,setSearchBitIsFocused]=useState(true);

  let [searchbar_text,setSearchbarText]=useState("");

  let filteredProductList=ProductList.filter((eachProductObj)=>{
    return eachProductObj.description.toLowerCase().replaceAll(/\s/g,'').includes(searchbar_text.toLowerCase().replaceAll(/\s/g,'')) || eachProductObj.type.toLowerCase().replaceAll(/\s/g,'').includes(searchbar_text.toLowerCase().replaceAll(/\s/g,''));
  });

  function searchValueUpdate(e){
    setSearchbarText(e.target.value);

    props.setSearch(e.target.value);
    console.log(`Searching for ${e.target.value}...`);
  }

  function debouncer(fun,delay){
      let timeout;
     return function(){
     let obj=this;
     let args=arguments;
     clearTimeout(timeout);
     timeout=window.setTimeout(()=>{fun.apply(obj,[...args])},delay);
    };
  }

   const betterSearch=debouncer(searchValueUpdate,400)

   
  return (
    
    <div id="new-container-with-result">

    <div id="main-search-comp">
    <div id="all-parent">
    <button id="all-button-searchbar" >All <span id='caretdownall'><AiOutlineCaretDown/></span></button>
    </div>
    <div id="input-parent-div">
    <input id="iaminput" autoComplete="off" type="text" onKeyUp={betterSearch} onFocus={()=>setSearchIsFocused(true)} onBlur={()=>setSearchIsFocused(false)} /> 
    </div>
    <div id="search-icon-parentbox">
    <button id="all-button-searchbar-right"> <GoSearch />  </button>
    </div>
    </div>
     
     
   { (searchIsFocused || searchBitIsFocused) && searchbar_text!=="" && <div id="search-results"  onMouseEnter={()=>setSearchBitIsFocused(true)} onMouseLeave={()=>setSearchBitIsFocused(false)} >
     {filteredProductList.map((eachProductObj)=>{
        return <Link to={`/allproducts/${eachProductObj.id}`} onClick={()=>setSearchBitIsFocused(false)} id="search-list-bit">&nbsp;&nbsp;{eachProductObj.description}</Link>
     })}


    </div>}

    </div>

  )
}
