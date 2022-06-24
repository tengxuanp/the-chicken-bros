import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import { images } from '../../constants';

import './Navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='app__navbar w-full fixed z-[999]'>
        <img className='app__navbar-logo flex justify-start self-start' src={images.Nlogo} />

        <ul className='app__navbar-links'>
            <li className='p__merryweather'><a href='#home'>Home</a></li>
            <li className='p__merryweather'><a href='#about'>Menu</a></li>
            <li className='p__merryweather'><a href='#menu'>Things you should know</a></li>
            <li className='p__merryweather'><a href='#contact'>Contact us</a></li>
        </ul>

        <div className='app__navbar-smallscreen'>
            <GiHamburgerMenu  fontSize={27} onClick={ () => {setToggleMenu(true)}} />

            {toggleMenu && (
            <div className='app_navbar-smallscreen_overlay flex__center slide-bottom z-[999]'>
                <MdOutlineRestaurantMenu fontSize={37} className="overlay__close" onClick={() => {setToggleMenu(false)}} />
                <ul className='app__navbar-smallscreen-links'>
                <li className='p__merryweather'><a href='#home'>Home</a></li>
                <li className='p__merryweather'><a href='#about'>Menu</a></li>
                <li className='p__merryweather'><a href='#menu'>Things you should know</a></li>
                <li className='p__merryweather'><a href='#awards'>Contact us</a></li>
                </ul>
            </div>
            )}

        </div>
    </nav>

  )
}

export default Navbar;