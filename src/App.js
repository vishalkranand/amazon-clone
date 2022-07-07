
import React, { useState } from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from './components/Header/Header';
import Subheader from './components/Subheader/SubheaderMain';
import Body from './components/Body/MainBody/Body';
import AllProducts from "./components/AllProducts/AllProducts";
import Cart from "./components/Cart/Cart";
import LoginPage from "./components/Login/LoginPage";



function App() {
  let[mainCart,setMainCart]=useState([]);
  let[search,setSearch]=useState("");

  // console.log("search from app-->"+search);
  
  return (
   <BrowserRouter>

   <Header mainCart={mainCart} setSearch={setSearch} />
   <Subheader/>

   <Routes>

    <Route path='/'  element={<Body filter={search}/>}   />
    <Route path='/allproducts/:productName'  element={<AllProducts cartupdater={setMainCart} mainCart={mainCart}/>}   />
    <Route path='/cart'  element={<Cart mainCart={mainCart} setMainCart={setMainCart} />}  />
    <Route path='/loginOrSignup'  element={<LoginPage />}   />
      {/*<Route path='/'  element={<Body />}   />
    <Route path='/'  element={<Body />}   /> */}
     

   </Routes>

    </BrowserRouter>
  );
}

export default App;
