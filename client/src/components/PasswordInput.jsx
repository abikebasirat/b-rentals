import React, {useState} from 'react'
import "../styles/PasswordInput.scss"
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

const PasswordInput = ({placeholder, value, onChange, name,  onPaste}) => {
    const [showPassword, setShowPassword] = useState(false)
    const togglePassword = () =>{
        setShowPassword(!showPassword)
    };
    return (
        <div className="password">
            <input type={showPassword? "text" : "password"} placeholder={placeholder} 
            value={value} onChange={onChange}
             name={name} onPaste={onPaste} 
              className="input"/>
            <div className="icon" onClick={togglePassword}>
                {showPassword? <AiOutlineEyeInvisible size={20}
    
                  /> : <AiOutlineEye  size={20}
        
                />}
            </div>
        </div>
    )

}

export default PasswordInput