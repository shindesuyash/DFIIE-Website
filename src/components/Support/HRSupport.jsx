import React, { useState } from 'react'
import { hRSupport } from '../../Data/Support'
import SkeletonImage from '../SkeletonImage'
import imgs from '../images/Hr.jpg'
import { Helmet } from 'react-helmet'

const HRSupport = () => {
  const [loading,setLoading] = useState(true)
  console.log(loading)
  return (
    <div>
      <Helmet>
        <title>HR Support | DFIIE</title>
      </Helmet>
      <div className='w-full h-100'>
        <img 
          src={imgs}
          alt="Human Resources (HR) Support"
          className={`w-full h-full object-cover ${loading?'hidden':'block'}`}
          onLoad={()=>setLoading(false)}
        />
        {loading && <SkeletonImage height={'24rem'} width={'100%'}  />} 

      </div>
      <ul className='m-auto list-disc md:px-12 px-6 py-4'>
      <h2 className='py-4 text-2xl font-semibold text-center'>Human Resources (HR) Support</h2>
        {hRSupport.map((data,idx) =>{
          if(idx === 0){
            return(
              <p className='text-lg py-4'>{data}</p>
            )
          }else{
            return(
              <li className='py-2'>{data}</li>
            )
          }
        })}
      </ul>
    </div>
  )
}

export default HRSupport