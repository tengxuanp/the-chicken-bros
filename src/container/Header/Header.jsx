import React, { useState, useEffect } from 'react';

import { images } from '../../constants';
import './Header.css'

const Header = () => {

  // parallax
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div name='home' className='bg-home-pattern'>
    <div className='app__header app__wrapper section__padding flex justify-center self-center '  id='home' 
    style={{transform: `translateY(-${offsetY * 1}px)` }}>

        <div className='app__wrapper-img pt-20 max-w-screen-2xl 
        lg:place-items-center lg:px-[20rem]'>

          <div className='milktea animate-bounce1'>
            <img className='rotate-12' src={images.Hmilktea} alt='Milk Tea' />
          </div>
          <div className='drumstick animate-rotate1 delay-200 z-[50]'>
            <img className='rotate-180 justify-end self-end' src={images.Hdrumstick} alt='Drumstick' />
          </div>
          <div className='ice animate-bounce2 z-[49]'>
            <img className='rotate-[55deg]' src={images.Hice} alt='Ice' />
          </div>
          <div className='tea'>
            <img className='rotate-[270deg]' src={images.Htea} alt='Tea' />
          </div>
          <div className='side animate-bounce2'>
            <img src={images.Hside} alt='Side' />
          </div>
          <div className='rice animate-bounce1 delay-75'>
            <img className='rotate-[20deg]' src={images.Hrice} alt='Tea' />
          </div>
          <div className='set animate-rotate1 delay-100'>
            <img className='rotate-[165deg]' src={images.Hset} alt='Tea' />
          </div>

          <div className='time text-xl lg:text-4xl' >
            <p>Di<span className='delay1'>n</span>e in: <span className='delay2 word1'></span>
            am to <span className='delay3 word2'>0</span>pm</p>
          </div>
          <div className='logo absolute w-[35rem] self-center translate-y-[-3rem] z-[98] 
                          md:w-[52rem] md:translate-x-[-1rem]'>
            <img src={images.logo} alt='The Chicken Bros Logo'  />
            <div className='absolute w-[20rem] translate-y-[-15rem] translate-x-[5rem] z-[-5]'>
              <img className='' src={images.Hjump} alt='Jump' style={{transform: `translateY(${offsetY * 1.5}px)` }} />
            </div>
          </div>

        </div>
        
    </div>
    </div>
  )
}

export default Header;