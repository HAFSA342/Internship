import React from 'react'

const Banner = () => {
  return (
    <>
      <div className='relative'>
        <img
          alt=""
          src="/banner.png"
        />
        <div className='md:mx-20 absolute md:inset-20 inset-10 m-auto'>
          <div className='flex justify-center items-center'>
          <h1 className='lg:text-5xl md:text-4xl xl:text-8xl 2xl:text-8xl  font-semibold  text-center text-white '>Votre Boutique de
            Meubles et Décoration
            en Guadeloupe, à Jarry</h1>
            </div>
            <div className='flex justify-center items-center'>
          <button className='border lg:px-5 md:px-3 md:py-5 lg:py-7 2xl:px-5 2xl:py-9 md:text-2xl text-xs px-2 py-2 2xl:text-3xl mt-5 md:mt-10 text-black bg-white'>Coordonnees & Horaires</button>
        </div>
</div>
      </div>
    </>
  )
}

export default Banner