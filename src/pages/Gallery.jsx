import React, { useState } from 'react'
import MainLayout from '../layout/Main.layout'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import SkeletonImage from '../components/SkeletonImage';
import { Helmet } from 'react-helmet';
import banner1 from '../components/images/homeBanner1.jpg'
import banner2 from '../components/images/homeBanner2.jpg'
import banner3 from '../components/images/homeBanner3.jpg'
import banner4 from '../components/images/homeBanner4.jpg'
import banner5 from '../components/images/homeBanner5.jpg'
import banner6 from '../components/images/homeBanner6.jpg'
import banner7 from '../components/images/homeBanner7.jpg'
import banner8 from '../components/images/homeBanner8.jpg'
import banner9 from '../components/images/homebanner9.jpg'
import banner10 from '../components/images/homebanner10.jpg'
import banner11 from '../components/images/homebanner11.jpg'
import banner12 from '../components/images/homebanner12.jpg'
import banner13 from '../components/images/homebanner13.jpg'
import banner14 from '../components/images/homebanner14.jpg'
import banner15 from '../components/images/homebanner15.jpg'
import banner16 from '../components/images/homebanner16.jpg'
import banner17 from '../components/images/homebanner17.jpg'
import banner18 from '../components/images/homebanner18.jpg'
import banner19 from '../components/images/homebanner19.jpg'
import banner20 from '../components/images/homebanner20.jpg'
import banner21 from '../components/images/homebanner21.jpg'
import banner22 from '../components/images/homebanner22.jpg'
import banner23 from '../components/images/homebanner23.jpg'
import banner24 from '../components/images/homebanner24.jpg'
import banner25 from '../components/images/homebanner25.jpg'
import banner26 from '../components/images/homebanner26.jpg'
import banner27 from '../components/images/homebanner27.jpg'
import banner28 from '../components/images/homebanner28.jpg'
import banner29 from '../components/images/homebanner29.jpg'
import banner30 from '../components/images/homebanner30.jpg'


const Gallery = () => {
  const [loading,setLoading] = useState(true);
  const images = [
    banner1,banner2,banner3,banner4,banner5,banner6,banner7,banner8,banner9,banner10,banner11,banner12,banner13,banner14,banner15,banner16,banner17,banner18,banner19,banner20,banner21,banner22,banner23,banner24,banner25,banner26,banner27,banner28,banner29,banner30
  ]

  return (
    <div>
      <Helmet>
        <title>Gallery | DFIIE</title>
      </Helmet>
      <div className='md:px-8 px-4 py-2'>
        <h1 className='text-2xl font-semibold py-2 '>Photos</h1>
        <PhotoProvider>
          <div className="flex justify-start  items-center flex-wrap gap-4 py-4">
            {images.map((item, index) => (
              <>
                {loading && <SkeletonImage height={'9rem'} width={'10rem'} />} 
                <PhotoView key={index} src={item}>
                  <img src={item} alt="" onLoad={() => setLoading(false)}  className={`md:w-44 w-40 md:h-40 h-36 rounded overflow-hidden  object-cover ${loading?'hidden':'block'}`} />
                </PhotoView>
              </>
            ))}
          </div>
        </PhotoProvider>
      </div>
      <div className='md:px-8 px-4 py-2'>
        <h1 className='text-2xl font-semibold py-2'>Videos</h1>
        <div className='flex gap-4 w-full flex-wrap lg:justify-start justify-center items-center'>
            <div className='w-full'>
              <p className='text-gray-500 text-center py-2'>Under Process...</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MainLayout(Gallery)