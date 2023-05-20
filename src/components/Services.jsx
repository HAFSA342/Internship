import React from 'react'

const Services = () => {
  return (
    <>
      <div className='bg-gray-200 h-[1300px]'>
        <div className='text-center pt-20 mt-20'>
          <h1 className='text-5xl'>Services</h1>
          <p className='lg:text-2xl md:text-xl md:mx-20 lg:mx-40 mt-5'>Bienvenue chez Comptoir Nature, une boutique entièrement
            dédiée au style balinais et à l’art javanai</p>
        </div>
        <div className='grid md:grid-cols-2 gap-9 mx-10 mt-20 '>
          <div className='flex shadow-2xl space-x-3 space-y-5 lg:h-72 md:h-64 p-5 rounded-2xl bg-white' >
            <img src="car.png" alt="image1" className='lg:w-28 md:w-20  w-14 h-14 md:h-20 lg:h-28 m-3' />
            <div className=' '>
              <h1 className='md:text-2xl text-xl'>Stationnement</h1>
              <p className='lg:text-md md:text-xs text-[30%] mt-3'>Nous avons un service de liste de mariage en boutique qui vous permet de
                choisir des articles en stock ou sur commande selon vos besoins ou vos envies
                . Vos invités ayant le choix de venir en boutique ou effectuer le cadeau à distance.</p>
            </div>
          </div>
          <div className='flex shadow-2xl space-x-3 space-y-5 lg:h-72 md:h-64 p-5 rounded-2xl bg-white' >
            <img src="truck.png" alt="image1" className='lg:w-28 md:w-20  w-14 h-14 md:h-20 lg:h-28  m-3' />
            <div className=' '>
              <h1 className='md:text-2xl text-xl'>Livraison</h1>
              <p className='lg:text-md md:text-xs text-[30%] mt-3'>Nous avons un service de liste de mariage en boutique qui vous permet de
                choisir des articles en stock ou sur commande selon vos besoins ou vos envies
                . Vos invités ayant le choix de venir en boutique ou effectuer le cadeau à distance.</p>
            </div>
          </div>
          <div className='flex shadow-2xl space-x-3 space-y-5 lg:h-72 md:h-64 p-5 rounded-2xl bg-white' >
            <img src="lamp.png" alt="image1" className='lg:w-28 md:w-20 md:h-20  w-14 h-14 lg:h-28  m-3' />
            <div className=' '>
              <h1 className='lg:text-2xl md:text-lg text-md'>Conseils Décoration</h1>
              <p className='lg:text-md md:text-xs text-[30%] mt-3'>Nous avons un service de liste de mariage en boutique qui vous permet de
                choisir des articles en stock ou sur commande selon vos besoins ou vos envies
                . Vos invités ayant le choix de venir en boutique ou effectuer le cadeau à distance.</p>
            </div>
          </div>
          <div className='flex shadow-2xl space-x-3 space-y-5 lg:h-72 md:h-64 p-5 rounded-2xl bg-white' >
            <img src="married.png" alt="image1" className='lg:w-28 md:w-20 md:h-20  w-14 h-14 lg:h-28  m-3' />
            <div className=' '>
              <h1 className='lg:text-2xl md:text-lg text-md'>
                Listes de Mariage</h1>
              <p className='lg:text-md md:text-xs text-[30%] mt-3'>Nous avons un service de liste de mariage en boutique qui vous permet de
                choisir des articles en stock ou sur commande selon vos besoins ou vos envies
                . Vos invités ayant le choix de venir en boutique ou effectuer le cadeau à distance.</p>
            </div>
          </div>
        </div>
        <div className='text-center mt-12 md:mt-28'>
        <h1 className='md:text-3xl text-2xl font-bold'>Modes de Paiement</h1>
        <div className='flex justify-center space-x-3 my-5'>
          <img src="gblogo.png" className='md:w-20 w-10 h-8 md:h-16'/>
          <img src="amexlogo.png" className='md:w-20 w-10 h-8 md:h-16'/>
          <img src="visa.png" className='md:w-20 w-10 h-8 md:h-16'/>
          <img src="lgo.png" className='md:w-20 w-10 h-8 md:h-16'/>
          
        </div>
        <div className='flex justify-center items-center'>
        <p className='md:text-xl text-xs max-w-[530px] '>Nous acceptons aussi l’espèces et la vente-à-distance.
          Nous proposons également le règlement en 4 fois sans frais.</p>
        </div>
      </div>
      </div>
    
    </>
  )
}

export default Services