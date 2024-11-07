import React from 'react'
import { SiComma } from "react-icons/si";
import Button from './Components/Button';
import TextAnimation from './Components/TextAnimation';
import Photo from './images/section2.png'

function About() {
  return (
    <div id='about' className='pt-28 lg:pt-16 px-2'>
     <div className='w-full grid md:grid-cols-2 grid-cols-1 md:space-x-3 space-x-0 items-center justify-center'>
        <div >
          <p className='flex items-center'>
          <SiComma size={13} className='text-[#7eb895]' />
          <span className='text-zinc-600 text-sm'>Available for Work</span>
          </p>
          <h1 className='md:text-2xl text-base pt-2  text-gray-600'>
          I'm Nareman Rahmeh , a <span className='text-[#7eb895] font-semibold'>front-end developer</span> passionate about building smooth,
           intuitive user experiences. I have 2 years of experience developing
         interactive front-ends using cutting-edge technologies like React and Next js.
         I'm skilled at turning designs into working interfaces, with a focus on site performance and user experience.
          </h1>
          <div className='py-8'>
            <Button
            target={'_blank'}
            title={'Download Cv'}
            href={'NaremanRahmeh.pdf'}
            download={'NaremanRahmeh.pdf'}
            className={'text-base border-2 border-[#7eb895] text-gray-600'}/>
          </div>
        </div>
        <div className='hidden md:block'>
          {/* <div className='flex justify-center items-center'>
        <img 
        src={Photo}
        className='w-[80%]'
        alt='logo'/>
        </div> */}
        <TextAnimation/>
        </div>
     </div>
    </div>
  )
}

export default About