import React from 'react'
import {FaFacebookSquare} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
const Actualites = () => {
  return (
    <>
      <div className='text-center mt-10 md:mt-20 '>
        <h1 className='text-4xl font-semibold'>Actualités</h1>
        <p className='md:text-lg text-xs md:mx-20 lg:mx-80 mt-5'>Quoi de neuf chez Comptoir Nature ?
          dédiée au style balinais et à l’art javanais.</p>
      </div>
      <div className='grid md:grid-cols-3 mx-7 md:mx-0  gap-9 mt-14 place-content-center lg:mx-20'>
      <div className='border rounded-xl  text-center shadow-2xl h-[100%]'>
          <img src="image1.png" alt="logo1" className='md:w-72 xl:w-[200%] xl:h-[80%] md:h-60 rounded-t-xl'/>
          <p className='md:text-sm xl:text-xl text-xs my-3 md:my-3 2xl:my-7 xl:mx-4'>Nouvelle collection de canapés dans votre boutique comptoir nature</p>
        </div>
        <div className='border rounded-xl text-center shadow-2xl h-[100%]'>
          <img src="image2.png" alt="logo1" className='md:w-72 xl:w-[200%] xl:h-[80%] md:h-60 rounded-t-xl'/>
          <p className='md:text-sm xl:text-xl text-xs my-3  md:my-3 2xl:my-7 xl:mx-4'>Nouvelle collection de canapés dans votre boutique comptoir nature</p>
        </div>
        <div className='border rounded-xl text-center shadow-2xl h-[100%]'>
          <img src="image3.png" alt="logo1" className='md:w-72 xl:w-[200%] xl:h-[80%] md:h-60 rounded-t-xl'/>
          <p className='md:text-sm xl:text-xl text-xs my-3  md:my-3 2xl:my-7 xl:mx-4'>Nouvelle collection de canapés dans votre boutique comptoir nature</p>
        </div>
      </div>
      <p className='text-center mt-10 text-xs md:text-xl'>Suivez nos actualités sur les réseaux sociaux</p>
      <div className='flex justify-center space-x-9 mt-6'>
       <FiInstagram className='w-10 h-10'/>
       <FaFacebookSquare className='w-10 h-10'/>
      </div>
    </>
  )
}

export default Actualites