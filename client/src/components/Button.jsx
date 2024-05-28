import React from 'react'

const Button = ({icon, className, name, type, onClick=()=>{}}) => {
  return 
 
    <button
        type= {type || "button"}
        className={clsx("",className)}
    >  
        <span>{label}</span> 
        {icon && icon} 
    </button>
  
}

export default Button