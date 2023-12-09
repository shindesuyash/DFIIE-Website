import React from 'react'
import { academia } from '../../Data/StakeHolders'
import { Helmet } from 'react-helmet'
import '../style.css'
const Academia = () => {
  return (
    <>
      <Helmet>
        <title>Academia | DFIIE</title>
      </Helmet>
    <div className='w-full h-full flex flex-col justify-center items-center py-4'>
      <div className='flex flex-col justify-center items-center py-6 md:px-12 px-6  rounded-xl lg:w-10/12 w-11/12' style={{backgroundColor:"ghostwhite"}}>
        <div className='flex md:flex-row flex-col-reverse background-banner items-center gap-6'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-2xl  font-semibold pb-6 text-[#19191d]'>Academia</h1>
            {academia.map((data) =>(
              <p className='text-normal  text-justify text-[#19191d]'>{data}</p>
              ))}
          </div>
          <img src="https://t-hub.co/img/webp/academiabanner.webp" style={{width:'20%'}} className='img11' alt="academia" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Academia