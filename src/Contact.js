import React from 'react'
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io5";
import Button from './Components/Button';

function Contact() {

  const socialLink = [
    {
      href : 'https://www.linkedin.com/in/nareman-rahmeh-6a5076250/',
      icon : <FaLinkedin size={20} />,
      alt : 'Linkedin'
    },
    {
      href : 'https://api.whatsapp.com/send?phone=0937322291',
      icon : <FaWhatsapp size={20}/>,
      alt : 'Whatsapp '
    },
    {
      href : 'https://github.com/NaremanRahmeh',
      icon : <IoLogoGithub size={20}/>,
      alt : 'Github  '
    },
    {
      href : 'mailto:naremanrh@gmail.com',
      icon : <SiGmail size={20}/>,
      alt : 'Gmail '
    },
  ]
  return (
    <div
    id='contact'
     className='px-2 py-14 my-10 border-t-2 border-[#7eb895] '>
      <div className='lg:grid lg:grid-cols-2 lg:items-stretch'>
      <div className='mb-12 lg:mb-0 lg:flex lg:flex-col'>
        <h2 className='text-xl text-gray-600 pb-4'>
        Contact Me For Collaboration
        </h2>
        <p className='text-gray-500 mt-3 mb-8'>
        reach out today to discuss your project needs and start collaborating on somthing amazing
        </p>
        <div className='flex items-center gap-2'>
          {socialLink.map((social , index) => {
            return(
             <a
              key={index}
              href={social.href}
              target='_blank'
              className='w-9 h-9 grid place-items-center border-[1px] border-gray-300 rounded-full text-gray-600'>
               {social.icon}
             </a>
            )
          })}
        </div>

      </div>
      <form 
        action='https://getform.io/f/adrrrvxa'
        method='POST'
        className='xl:pl-10 2xl:pl-20'>
        <div className='md:grid md:items-center md:grid-cols-2 md:gap-2'>
          <div className='mb-4'>
            <label 
            htmlFor='name'
            className='label'>
             Name
            </label>
            <input 
            type='text'
            name='name'
            id='name' 
            autoComplete='name'
            required
            placeholder='Nareman Rahmeh'
            className='text-field'/> 
          </div>

          <div className='mb-4'>
            <label 
            htmlFor='email'
            className='lable'>
             Email
            </label>
            <input 
            type='email'
            name='email'
            id='email' 
            autoComplete='email'
            required
            placeholder='naremanrh21@gmail.com'
            className='text-field'/> 
          </div>

        </div>

        <div className='mb-4'>
          <label 
          htmlFor='message'
          className='lable'
          >
            Message
          </label>
          <textarea
           name='message'
           id='message'
           placeholder='hi!'
           className='text-field resize-y min-h-32 max-h-72'
           required
           >

          </textarea>
        </div>
        <button 
        type='submit'
        title='Submit'
        className='p-3 px-10 rounded-md bg-[#7eb895] text-white'>
         Submit
        </button>
      </form>
      </div>
    </div>
  )
}

export default Contact