import React from 'react'
import ReactLogo from './images/react.png'
import NextLogo from './images/nextjs.png'
import TailwindLogo from './images/tailwind.png'
import FigmaLogo from './images/figma.png'
import JavascriptLogo from './images/javascript.png'
import WordpressLogo from './images/wordpress.png'
import CssLogo from './images/css.png'
import SkillCard from './Components/SkillCard'


function Skills() {

    const skillsItem = [
        {
            id: 1 ,
            image : ReactLogo ,
            lable :'React' ,
            desc : 'Framework'
        },
        {
            id: 2 ,
            image : NextLogo ,
            lable :'Next' ,
            desc : 'Framework'
        },
        {
            id: 3,
            image : TailwindLogo ,
            lable :'Tailwind Css' ,
            desc : 'User Interface'
        },
        {
            id: 4,
            image : JavascriptLogo ,
            lable :'Javascript' ,
            desc : 'Interaction'
        },
        {
            id: 5,
            image : WordpressLogo ,
            lable :'Wordpress' ,
            desc : ''
        },
        {
            id: 6,
            image : CssLogo ,
            lable :'Css' ,
            desc : 'User Interface'
        },
        {
            id: 7,
            image : FigmaLogo ,
            lable :'Figma' ,
            desc : 'Design Tool'
        },
    ]

  return (
       <div id='skills' className='px-2 py-28'>
        <h2 className='text-xl text-gray-600 pb-4'>
        Essential Tool I Use
        </h2>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 py-5'>
            {skillsItem.map((item , index)=> {
                return(
                    <>
                  <SkillCard key={index} data={item}/>
                    </>
                )
            })}
        </div>
       </div>
  )
}

export default Skills