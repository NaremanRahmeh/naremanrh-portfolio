import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";

function WorkCard({data}) {
    
  return (
    <div className={`relative p-4 rounded-2xl bg-gray-200 ring-1 ring-inset ring-white`}>
     <div className=' py-5 rounded-lg'>
        <img 
        src={data.imgsrc}
        alt={data.title}
        loading='lazy'
        className='mb-2'/>
        <div className='flex items-center justify-between gap-4'>
            <div>
                <h3 className='text-[20px] text-gray-600 font-normal mb-3'>
                    {data.title}
                </h3>
                <div className='flex flex-wrap items-center gap-4'>
                 {data.tags.map((lable ,key)=>{
                    return(
                      <span
                       key={key}
                       className='h-8 text-sm text-zinc-100 bg-[#a1a1aa] grid items-center px-3 rounded-lg'>
                        {lable}
                      </span>
                    )
                 })}
                </div>
            </div>

            <div className='w-9 h-9 rounded-lg grid place-items-center bg-[#7eb895] text-white'>
                <span 
                className=''
                aria-hidden ='true'>
                <MdOutlineArrowOutward />
                </span>
            </div>
        </div>

        <a 
        href= {data.projectlink}
        target='_blank'
        className='absolute inset-0'>
       
        </a>
     </div>
    </div>
  )
}

export default WorkCard