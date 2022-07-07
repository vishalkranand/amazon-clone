import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

window.setInterval(changeImage,10000);
let count=0;

function changeImage(){
  count= ++count % 13;
  let imageSlider=document.querySelector('#image-slider');
  if(imageSlider!=null)
  imageSlider.style.backgroundImage=`url(/body-images-background/${count}.jpeg)`
}

root.render(
  <React.StrictMode>
  
    <App />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

