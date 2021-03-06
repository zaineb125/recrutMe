import React ,{useState} from "react";
import FormSignupRecruter from "./FormSignupRecruter";
import FormSuccess from "./FormSuccess"
import { Navigate } from "react-router-dom";


const Form =()=>{
  const [isSubmitted,setIsSubmitted]=useState(false);
  
  function submitForm(){
    setIsSubmitted(true);
  }

  function reloadPage(){ 
    window.location.reload(); 
  }

  return(
    <>
        {!isSubmitted ? 
        (<FormSignupRecruter submitForm={submitForm} />):
        (<Navigate to="/" />)
        }
    </>
  )
}

export default Form ;