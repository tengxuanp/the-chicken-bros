import React from 'react'
import { images } from '../../constants';
import './Menu.css';

const Menu = () => {
  return (
    <div className='menu__bg 	h-screen p-10 '>
      <h1 className='text-6xl'></h1>
      <div className='menu__wrapper bg-menuBg bg-center grid lg:grid-cols-3 '>

      <div>
        <h1 className='text-5xl'>Fried Chicken</h1>
        <ul className='menu__table mx-[10rem] leading-loose	'>
          <li>1 pcs</li>
          <li className='delay1'>2 pcs</li>
          <li className='delay2'>Bucket</li>
        </ul>
      </div>
      <div>
        
        <ul className=''>
          <li className=''>100% Chicken Meat</li>
          <li>2 pcs</li>
          <li>Bucket</li>
        </ul>
      </div>
      <div>
        <img className='drop-shadow-lg rotate-45' src={images.Mdrumstick1} alt='Drumstick 1' />
      </div>

      </div>
    </div>
  )
}

export default Menu