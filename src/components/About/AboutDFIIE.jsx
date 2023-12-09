import React from 'react'
import { aboutDFIIE } from '../../Data/About'
import dbatuforum from '../images/background.png'
import { Helmet } from 'react-helmet'

const AboutDFIIE = () => {
  return (
    <>
      <Helmet>
        <title>About | DFIIE</title>
      </Helmet>
      <div className='w-full h-full flex flex-col justify-center items-center py-4'>
        <div className='flex flex-col justify-center items-center py-6 md:px-12 px-6  rounded-xl lg:w-11/12 w-11/12' style={{backgroundColor:"ghostwhite"}}>
          <div className='flex md:flex-row flex-col-reverse background-banner items-center gap-6'>
            <div className='flex flex-col gap-2'>
              <h1 className='text-2xl  font-semibold pb-6 text-[#19191d]'>About DFIIE</h1>
              {aboutDFIIE.map((data) =>(
                <p className='text-normal  text-justify text-[#19191d]'>{data}</p>
                ))}
            </div>
            <img src={dbatuforum} alt="About DFIIE" />
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutDFIIE