import React from 'react'

function Button({title ,href ,className}) {
  return (
   <>
   <a
    href={href}
    className={`p-3 rounded-md ${className}`}>
    {title}
    </a>      
   </>
  )
}

export default Button