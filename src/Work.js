import React from 'react'
import Tawasy from './images/tawasy.png'
import TaskManagment from './images/taskmanagment.png'
import SyriaScan from './images/syriascan.png'
import Qtec from './images/qtec.png'
import DamaScan from './images/damascann.png'
import WorkCard from './Components/WorkCard'

function Work() {

  const works =[
     {
      imgsrc : Tawasy,
      title : 'eCommerc Website Tawasy' ,
      tags : ['Development' , 'Api'],
      projectlink : 'https://www.tawasyme.com/ar'
     },
     {
      imgsrc : TaskManagment,
      title : 'Dashboard' ,
      tags : ['Development'],
      projectlink : 'https://github.com/NaremanRahmeh/tasksManagment'
     },
     {
      imgsrc : SyriaScan,
      title : 'SyriaScan' ,
      tags : ['Development'],
      projectlink : 'https://syriascan.com/'
     },
     {
      imgsrc : Qtec,
      title : 'Qtec' ,
      tags : ['Development'],
      projectlink : 'https://qtec-ltd.com/'
     },
     {
      imgsrc : DamaScan,
      title : 'DamaScan' ,
      tags : ['Ui Ux Design'],
      projectlink : 'https://www.figma.com/design/pf0LVtOTGkVCyyWbOpqndw/DamaScan?node-id=0-1&t=2BN5ja8Hg29QX43g-1'
     },
  ]
  return (
    <div id='projects' className='px-2 py-20'>
    <div className=''>
      <h2 className='text-xl text-gray-600 pb-4'>
      My Projects
      </h2>
      <div className='grid gap-x-4 gap-y-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
        {works.map((item , index) => {
          return (
            <>
            <WorkCard key={index} data={item} />
            </>
          )
        })}
      </div>
    </div>
    </div>
  )
}

export default Work