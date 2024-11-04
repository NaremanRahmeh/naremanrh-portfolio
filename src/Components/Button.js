import React from 'react'

function Button({title ,href ,className ,target ,download }) {
  return (
   <>
   <a 
    href={href}
    target={target}
    download={download}
    className={`p-3 rounded-md ${className}`}>
    {title}
    </a>      
   </>
  )
}

export default Button