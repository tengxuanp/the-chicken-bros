import React, { useEffect } from 'react'
import { images } from '../../constants';
import './Menu.css';
import Aos from "aos"
import "aos/dist/aos.css"
import { Link } from 'react-router-dom';

const Menu = () => {

// animation on scroll
useEffect(() => {
  Aos.init({duration: 1000});
 }, []);



  return (
    <div name='menu' className='menu__bg h-auto p-10 z-[-50]'>
      <button className='merch absolute left-5 p-2 text-4xl text-start translate-y-[-3rem]'>
      <Link to='/products'>
        Merchandise <img className='w-[1rem] float-right' src={images.Mexternal} alt='external link'  /></Link></button>
      
    {/* Fried Chicken   */}
    <div className='menu__wrapper mb-[20rem]
    md:mb-[30rem]
    lg:mb-[12rem]'>
      <div className='menu__card bg-menu-pattern animate-gradient1 grid grid-cols-2 p-6
      lg:grid-cols-3'>

      <div className=''>
        <h1 className='text-3xl font-bold whitespace-nowrap'><span className='tbc'>TCB's</span>
        <span className='title ml-3 font-bold text-3xl text-white'>Signature Drumstick</span></h1>
        <ul className='menu__table leading-loose whitespace-nowrap inline-block font-bold'>
          <li>Vanilla</li>
          <li className='delay1'>Spicy</li>
          <li className='delay2 px-2'>Xtra Sauce</li>
        </ul>
      </div>

      <div className='self-center'>
        <ul className='menu__chickenProperty flex justify-end gap-4'>
          <li className='prop1 text-3xl mx-2'>100% Chicken Meat</li>
          <li className='prop2 text-3xl'>100% Safe to Consume</li>
        </ul>
      </div>

      <div className='hidden lg:grid'>
        <img className='drop-shadow-lg rotate-45 z-[2]' src={images.Mdrumstick1} alt='Drumstick 1' />
        <div className='hidden lg:grid absolute hypnoCircle scale-[1.8] ml-[4rem] z-[1]'>
            <div className='hypnosis1 w-[10rem] absolute h-auto rounded-full border-[5rem] border-green-400'></div>
            <div className='hypnosis2 w-[10rem] absolute h-auto rounded-full border-[5rem] border-black'></div>
            <div className='hypnosis3 w-[10rem] absolute h-auto rounded-full border-[5rem] border-green-400'></div>
            <div className='hypnosis4 w-[10rem] absolute h-auto rounded-full border-[5rem] border-black'></div>
          </div>
      </div>
      </div>
      <div className=' z-10' >
        <img className='absolute drop-shadow-lg rotate-[135deg] z-[5] lg:hidden' src={images.Mdrumstick1} alt='Drumstick 1' />
        <div className='flex justify-center self-center translate-x-[-7rem]	translate-y-[-2rem]'>
          <div className='absolute hypnoCircle scale-[1.8] z-[1]
          md:scale-[2.5] lg:hidden'>
            <div className='hypnosis1 w-[10rem] absolute h-auto rounded-full border-[5rem] border-green-400'></div>
            <div className='hypnosis2 w-[10rem] absolute h-auto rounded-full border-[5rem] border-black'></div>
            <div className='hypnosis3 w-[10rem] absolute h-auto rounded-full border-[5rem] border-green-400'></div>
            <div className='hypnosis4 w-[10rem] absolute h-auto rounded-full border-[5rem] border-black'></div>
          </div>
        </div>
      </div>
    </div>
    {/* End of Fried Chicken */}

    {/* MilkTea */}
    <div className='menu__wrapper mb-[10rem] '>
      <div className='menu__card bg-menu-pattern2 animate-gradient1 grid grid-cols-2 p-6
      lg:grid-cols-3 '>

      <div className=''>
        <h1 className='text-3xl font-bold whitespace-nowrap'><span className='tbc'>TCB's</span>
        <span className='title ml-3 font-bold text-3xl text-white'>Signature Boba</span></h1>
        <ul className='menu__table leading-loose whitespace-nowrap inline-block font-bold'>
          <li>Regular</li>
          <li className='delay1'>Upsize</li>
          <li className='delay2 px-2'>Xtra Pearls</li>
        </ul>
      </div>

      <div className='self-center'>
        <ul className='menu__chickenProperty flex justify-end gap-4'>
          <li className='prop1 text-3xl mx-2'>100% Milk Tea</li>
          <li className='prop__off text-3xl'>100% Safe to Consume</li>
        </ul>
      </div>

      <div className='hidden lg:grid'>
        <img className='drop-shadow-lg rotate-12 scale-[0.6] absolute translate-y-[-8rem] z-[2]' src={images.Mmilktea1} alt='Milktea 1' />
        <div className=' hidden lg:grid absolute hypnoCircle scale-[1.8] ml-[4rem] z-[1]'>
            <div className='hypnosis1 w-[10rem] absolute h-auto rounded-full border-[5rem] border-purple-400'></div>
            <div className='hypnosis2 w-[10rem] absolute h-auto rounded-full border-[5rem] border-black'></div>
            <div className='hypnosis3 w-[10rem] absolute h-auto rounded-full border-[5rem] border-purple-400'></div>
            <div className='hypnosis4 w-[10rem] absolute h-auto rounded-full border-[5rem] border-black'></div>
          </div>
      </div>
      </div>
      <div className=' z-10' >
        <img className='absolute drop-shadow-lg z-[5] rotate-12 scale-[0.6] translate-x-[5rem] translate-y-[-10rem]
        lg:hidden' src={images.Mmilktea1} alt='Milktea 1' />
        <div className='flex justify-center self-center translate-x-[-7rem]	translate-y-[-2rem]'>
          <div className='absolute hypnoCircle scale-[1.8] z-[1]
          md:scale-[2.3] lg:hidden'>
            <div className='hypnosis1 w-[10rem] absolute h-auto rounded-full border-[5rem] border-purple-400'></div>
            <div className='hypnosis2 w-[10rem] absolute h-auto rounded-full border-[5rem] border-black'></div>
            <div className='hypnosis3 w-[10rem] absolute h-auto rounded-full border-[5rem] border-purple-400'></div>
            <div className='hypnosis4 w-[10rem] absolute h-auto rounded-full border-[5rem] border-black'></div>
          </div>
        </div>
      </div>
    </div>
    {/* End of Milktea */}

    <div className='chat flex justify-end self-end mt-[20rem] pb-[5rem] lg:mt-0'  data-aos="slide-up">
      <img className='absolute  scale-[1.2] z-[50]' src={images.Mchat} alt='Chat bubble' />
      <div className='absolute mr-[-0.6rem] mt-[-0.5rem] border-[2rem] border-white w-1 h-1 rounded-full	z-[49]' />
    </div>

    </div>
  )
}

export default Menu