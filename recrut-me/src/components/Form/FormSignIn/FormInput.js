import "./FormSignin.css"
import {useState} from "react"

const FormInput =(props)=>{
    const [focused,setFocused]=useState(false);
    const { onChange,errorMessage, ...inputProps }=props;

    const handleFocus=(e)=>{
        setFocused(true);
    };
    return(
        <>
            <input  
                {...inputProps}
                
                onChange={onChange} 
                onBlur={handleFocus} 
                focused={focused.toString()} />
            <p id={"p"+inputProps.id}>{errorMessage}</p>
        </>
    )
}

export default FormInput