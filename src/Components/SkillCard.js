import React from 'react'

function SkillCard({data}) {
  return (
    <div className={`flex items-center gap-3 ring-2 ring-inset ring-gray-200 rounded-2xl px-3 py-4 hover:bg-gray-200 transition-colors`}>
      <div className=''>
        <img 
        src={data.image}
        width={32}
        height={32}
        alt='logo'/>
      </div>
    <div>
        <h3>
        {data.lable}
        </h3>
        <p className='text-zinc-600 text-sm'>
         {data.desc}
        </p>
    </div>
    </div>
  )
}

export default SkillCard