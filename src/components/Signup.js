/**
 * Onboarding form component
 */


import { useEffect, useRef } from "react";
import React, { useState } from 'react'; 
import { ValidButton } from "./validButton";
import { useNavigate } from "react-router-dom";

const Signup = () => {

  // state variables for validation of the form
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [emailError, setEmailError] = useState(''); 
  const [passwordError, setPasswordError] = useState(''); 
  const [active, setActive] = useState(false);
  const buttonRef = useRef(null);   
  const navigate = useNavigate();

  console.log('current user state:', active) // debugging purpose

  useEffect(()=>{
    if(active){
      console.log('effect triggered')
      navigate('/success')
    }
  }, [active]);

  // handler functions for validaiton of mail and password and submission button
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    validateForm(); 
    setEmailError(''); 
  };
  
  const handleNameChange = (event) => {
    setName(event.target.value);
    validateForm(); 
    setPasswordError(''); 
  };
  
  const handleButtonClick = () => {
    if (!isValid) {
      if ((!email.trim() || !/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,}$/.test(email)) && name.length < 4) {
        setEmailError('Email is invalid.');
        setPasswordError('Name must be atleast 4 characters.');
        console.log("seems like there is some error")
      }else{
        console.log("control has reached here")
        setIsValid(true)
        setActive(true);
      }
    }
    // setActive(true);
    navigate('/success');
  };
  
  // validation logic using regular expression
  const validateForm = () => {
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,}$/; 
    const isValidEmail = emailRegex.test(email);
    const isValidName = name.length >= 4; 
  
    setIsValid(isValidEmail && isValidName); 
  };
    

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="Registration w-[20em] md:w-[50em] lg:w-[50em] mt-6">
        <h2 className="font-grace text-green-500 text-lg text-center">
          Registration From
        </h2>
        <h1 className="font-man mt-2 text-black font-semibold text-2xl text-center w-[70%] md:w-[30%] lg:w-[30%] ml-[2em] md:ml-[11.7em] lg:ml-[11.7em]">
          Start your success Journey here!
        </h1>
      </div>

      <div className="w-[70%] md:w-[50%] mt-2 p-2">

      <div className="mx-auto w-[16em] md:w-[20em] mt-3 mb-3">
          <input
            placeholder="Enter your name"
            className={`object-cover overflow-hidden border-gray-300 rounded-[3rem] border-l border-r border-t border-b w-[100%] bg-zinc-100 mx-0 md:mx-auto p-5 font-man ${
              name.length < 4 ? 'border-red-500' : ''
            }`}
            value={name}
            onChange={handleNameChange}
            type="name" 
          />
   
          {name.length < 4 && (
            <p className="text-red-500 text-xs"></p>
          )}
        </div>
        <div className="mx-auto w-[16em] md:w-[20em]">
          <input
            placeholder="Enter your email"
            className={`object-cover overflow-hidden border-gray-300 bg-zinc-100 rounded-[3rem] border-l border-r border-t border-b w-[100%] mx-auto p-5 font-man ${
              !email.trim() || !/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,}$/.test(email) ? 'border-red-500' : ''
            }`}
            value={email}
            onChange={handleEmailChange}
          />
          {!email.trim() && <p className="text-red-500 text-xs"></p>}
          {!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,}$/.test(email) && email.trim() && (
            <p className="text-red-500 text-xs">Please enter a valid email address.</p>
          )}
        </div>

        

        <div className="mx-auto w-[16em] md:w-[18em] mt-6" onClick={handleButtonClick}>
          <ValidButton
              name="Submit"
              width="w-[120%]"
              disabled={!active}
              error={emailError || passwordError} 
              ref={buttonRef} 
              bgColor="bg-zinc-500"
              />
        </div>
      </div>
    </div>
  );
};

export default Signup;
