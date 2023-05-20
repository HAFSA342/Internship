import React from 'react'

const Products = () => {
  return (
    <>
      <div className='text-center m-auto mt-10 md:mt-20'>
        <h1 className='md:text-4xl text-2xl xl:text-6xl font-bold'>Gamme de Produits</h1>
        <p className='md:text-xl text-xs mx-3 md:mx-32 mt-3 md:mt-5 flex justify-center items-center'>Bienvenue chez Comptoir Nature, une boutique entièrement
          dédiée au style balinais et à l’art javanais.</p>
      </div>
      <div className='grid mx-6 md:mx-0 md:grid-cols-3 place-items-center gap-8  mt-12 md:mt-24'>
        <div className='border  text-center shadow-2xl h-[100%]'>
          <img src="product.png" alt="logo1" className='md:w-72 xl:w-96 xl:h-80 md:h-60'/>
          <p className='text-xl my-3'>Meubles</p>
        </div>
        <div className='border  text-center shadow-2xl h-[100%]'>
          <img src="product.png" alt="logo1" className='md:w-72 xl:w-96 xl:h-80 md:h-60'/>
          <p className='text-xl my-3'>Assises</p>
        </div>
        <div className='border  text-center shadow-2xl h-[100%]'>
          <img src="product.png" alt="logo1" className='md:w-72 xl:w-96 xl:h-80 md:h-60'/>
          <p className='text-xl my-3'>Luminaires</p>
        </div>
        <div className='border  text-center shadow-2xl h-[100%]'>
          <img src="product.png" alt="logo1" className='md:w-72 xl:w-96 xl:h-80 md:h-60'/>
          <p className='text-xl my-3'>Décoration</p>
        </div>
        <div className='border  text-center shadow-2xl h-[100%]'>
          <img src="product.png" alt="logo1" className='md:w-72 xl:w-96 xl:h-80 md:h-60'/>
          <p className='text-xl my-3'>Art de la Table</p>
        </div>
        <div className='border  text-center shadow-2xl h-[100%]'>
          <img src="product.png" alt="logo1" className='md:w-72 xl:w-96 xl:h-80 md:h-60'/>
          <p className='text-xl my-3'>Décoration</p>
        </div>
      </div>
      <h1 className='md:text-2xl text-sm mt-14 text-center'>Objets de décoration, idées cadeaux et beaucoup plus...</h1>
    </>

  )
}

export default Products