import React, { useState } from 'react'
import "./login-style.css"
import { AiFillCaretRight } from 'react-icons/ai';

function LoginPage() {
  let [isRegistered, setIsRegistered] = useState(true);

  return (

    <div id="login-container-main">
      <div id="top-icon-container"> <img src="/amazonLogo2.png" alt='amazonLogo2.png'></img></div>

      <div id="middle-signin-comp-container">
        <div id="main-sigin">

          {isRegistered &&
            <>  

              <div id="signin">
              <span id="sign-in-up" >Sign-In</span>
              
              <span id="email-or-phone">Email or mobile phone number</span>
              <input type="text" ></input>
              <button>Continue</button>
              <span id="policy-notice-text">By continuing, you agree to Amazon's <span>Conditions of Use</span> and <span>Privacy Notice</span>.</span>
              <span className="need-help"><AiFillCaretRight className='caret' />Need Help?</span>
              </div>

              <div id="signin-bottom-line">
                <span>New to Amazon?</span>
                <button onClick={()=>setIsRegistered(false)}>Create your Amazon account</button>
              </div> 
              
              </>
          }

          {!isRegistered && <div id="non-registered">

            <span id="create-account-heading"> Create Account</span>
            <span id="name">Your name</span>
            <input id="input-one" />
            <span id="moboremail">Mobile number or email</span>
            <input id="input-two" />
            <span id="pass">Password</span>
            <input id="input-three" />
            <button>Continue</button>
            <span id="policy-notice-texttwo">By creating an account, you agree to Amazon's <span>Conditions of Use</span> and <span>Privacy Notice</span>.</span>

          </div>
          }

        </div>

      </div>

         <footer> 
         <span className='conditions-of-use'> <span>Conditions of Use</span>           <span>Privacy Notice</span>       <span onClick={()=>setIsRegistered(true)}>Help</span>  </span>
          <span className='registered'>© 1996-2022, Amazon.com, Inc. or its affiliates</span>
        </footer>
    </div>
  )
}

export default LoginPage