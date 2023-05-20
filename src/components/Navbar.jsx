import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='flex m-4 justify-between mx-14'>
        <div>
            <img
            className='lg:w-28'
                alt=""
                src="/image@2x.png"
            />
        </div>
        <div className='space-x-12 text-xl mt-3'>
            <a href="#">Acceuil</a>
            <a href="#">Produits</a>
            <a href="#">Services</a>
            <a href="#">Actualties</a>
            <a href="#">Contact</a>
        </div>
    </div>
</>
  )
}

export default Navbar