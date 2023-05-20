import React from 'react'
import { SlPhone } from 'react-icons/sl'
const Contact = () => {
  return (
    <>
      <div className='bg-[#022c22] text-white text-center pt-14 mt-10'>
        <h1 className='text-4xl'>Contact</h1>
        <h1 className='mt-3 text-lg'>Lundi au vendredi : 9:00 à 18:00</h1>
        <h1 className=' text-lg' >Samedi : 9:00 à 17:00</h1>
        <h1 className=' text-lg'>Dimanche : Fermé</h1>
        <button className='flex justify-center  m-auto mt-5 border py-2 px-6 rounded-lg text-lg '><SlPhone className='mr-3 w-7 h-7' />  05 90 38 93 05</button>
        <div className='grid md:grid-cols-12 gap-6  mt-12'>
        <div className=' col-span-6'></div>
        <div className='space-y-8 flex col-span-6 flex-col  pb-20'>
          <input type='text ' placeholder='Nom Complet' className=' rounded-lg bg-pink-100 md:w-96 w-72 h-12 mx-10 md:h-14 px-5 py-5 text-lg md:text-2xl'/>
          <input type='text ' placeholder='Objet du message'  className=' rounded-lg bg-pink-100 md:w-96 w-72 h-12 mx-10 md:h-14 px-5 text-2xl' />
          <input type='text ' placeholder='Telephone'  className=' rounded-lg bg-pink-100 md:w-96 w-72 h-12 mx-10 md:h-14 px-5 text-2xl'/>
          <textarea placeholder='Message '  className='mx-10 lg:mx-10 rounded-lg pt-2 bg-pink-100 md:w-96 w-72 h-32  md:h-32 px-5 text-2xl'></textarea>
          <button className='bg-pink-100 md:py-5 py-4 px-2 w-36 mx-10  md:px-12 text-black rounded-xl text-2xl'>Envoyer</button>
        </div>
      </div>
      </div>
     
    </>
  )
}

export default Contact