import React, { useState } from 'react'
import SkeletonImage from '../SkeletonImage'
import { Helmet } from 'react-helmet'
import blank from "../images/blank.jpg"
import Kiwalekar from "../images/navin.png"
import roshan from "../images/roshan.jpeg"
import asif from "../images/asif.jpeg"



const Team = () => {
  const teamMembers = [
    {
      "name": "Dr. Navin Khandare",
      "image": Kiwalekar,
      "designation": "Chief Executive Officer"
    },
    {
      "name": "Roshan Bonde",
      "image": roshan,
      "designation": "Incubation Manager (I/c)"
    },
    {
      "name": "Mohd. Asif M. Gazge",
      "image": asif,
      "designation": "Executive Assistant"

    }
  ]
  const [loading,setLoading] = useState(true)
  return (
    <>
      <Helmet>
        <title>Team | DFIIE</title>
      </Helmet>
    <div className='md:px-8 px-4 py-4'>
      <h1 className='md:text-3xl text-2xl font-semibold text-center py-6'>Our Team Members</h1>
      <div className='flex gap-6 flex-wrap justify-center items-center'>
        {teamMembers.map((member) =>(
          <div className='flex flex-col items-center  gap-1.5'>
            <div className='h-44 w-44'>
            {loading && <SkeletonImage height={'100%'} width={'100%'}  />} 
              <img src={member.image} onLoad={()=> setLoading(false)} alt={member.name} className={`rounded-full h-full w-full object-cover object-top ${loading?'hidden':'block'}`} />
            </div>
            <h3 className='text-xl font-semibold'>{member.name}</h3>
            <div className='text-sm text-gray-400'>{member.designation}</div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Team