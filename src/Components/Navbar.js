import React, { useRef } from 'react'

function Navbar({navOpen}) {

    const lastActiveLink = useRef();
    const activeBox = useRef();
    const activeCurrentLink = (e) =>{
        lastActiveLink.current?.classList.remove('active');
        e.target.classList.add('active');
        lastActiveLink.current = e.target
    }
  
    const navItem = [
        {
            id: 1,
            link : '#about',
            title : 'About' ,
            className : 'nav-link active',
            ref : lastActiveLink
        },
        {
            id: 2,
            link : '#skils',
            title : 'Skils',
            className : 'nav-link'
        },
        {
            id: 3,
            link : '#projects',
            title : 'Projects' ,
            className : 'nav-link'
        },
        {
            id: 4,
            link : '#contact',
            title : 'Contact',
            className : 'nav-link md:hidden'
        },
    ]

  return (
    <div className={`navbar absolute top-full px-5 right-0 mt-2 min-w-40 p-2 bg-gray-200 rounded-2xl scale-90 
        blur-sm opacity-0 invisible transition-[opacity ,transform ,filter]
        md:static md:flex md:items-center md:mt-0 md:opacity-100 md:blur-0 md:visible
    ${navOpen ? 'active' :''}`}>
     {navItem.map((item)=> {
        return (
            <>
            <a 
            key={item.id}
            href={item.link}
            className={item.className} 
            ref={item.ref}
            onClick={activeCurrentLink}
            >
             {item.title}
            </a>
            </>
        )
     })}
    </div>
  )
}

export default Navbar