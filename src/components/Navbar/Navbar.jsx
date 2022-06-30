import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import { images } from '../../constants';
import {Link} from 'react-scroll';

import './Navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const handleClick = () => setToggleMenu(!toggleMenu)

  return (
    <nav className='app__navbar w-full fixed z-[999]'>
        <img className='app__navbar-logo flex justify-start self-start' src={images.Nlogo} alt='Navbar Logo' />

        <ul className='app__navbar-links'>
            <li className='p__merryweather'><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li className='p__merryweather'><Link to="about" smooth={true} duration={500}>About</Link></li>
            <li className='p__merryweather'><Link to="menu" smooth={true} duration={500}>Menu</Link></li>
            <li className='p__merryweather'><Link to="faq" smooth={true} duration={500}>FAQ</Link></li>
            <li className='p__merryweather'><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>

        <div className='app__navbar-smallscreen'>
            <GiHamburgerMenu  fontSize={27} onClick={ () => {setToggleMenu(true)}} />

            {toggleMenu && (
            <div className='app_navbar-smallscreen_overlay flex__center slide-bottom z-[999]'>
                <MdOutlineRestaurantMenu fontSize={37} className="overlay__close" onClick={() => {setToggleMenu(false)}} />
                <ul className='app__navbar-smallscreen-links'>
                    <li className='p__merryweather'><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
                    <li className='p__merryweather'><Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link></li>
                    <li className='p__merryweather'><Link onClick={handleClick} to="menu" smooth={true} duration={500}>Menu</Link></li>
                    <li className='p__merryweather'><Link onClick={handleClick} to="faq" smooth={true} duration={500}>FAQ</Link></li>
                    <li className='p__merryweather'><Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link></li>
                </ul>
            </div>
            )}

        </div>
    </nav>

  )
}

export default Navbar;