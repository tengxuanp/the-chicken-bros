import React from 'react'
import './Contact.css'
import { images } from '../../constants'

const Contact = () => {
  return (
    <div name='contact' className='h-screen w-full bg-contact-pattern '>
      <div className=''>Test</div>
      {/* Raining */}

    <div className="nugget__container absolute">

      <div className='nugget rotate-[-12deg]'>
        <img className="" src={images.Cnugget} alt="Nugget1" />
      </div>

      <div className='nugget'>
        <img className="" src={images.Mdrumstick2} alt="Nugget2" />
      </div>

      <div className='nugget'>
        <img className="" src={images.Cdrumstick3} alt="Nugget3" />
      </div>

      <div className='nugget'>
        <img className="" src={images.Mdrumstick1} alt="Nugget4" />
      </div>

      <div className='nugget'>
        <img className="" src={images.Cnugget} alt="Nugget5" />
      </div>

    </div>

      <div className='flex justify-center self-center'>
      <div className='text-4xl mt-[10rem] mb-[5rem] mx-[5rem] w-[20rem] rounded-md bg-black'>
        <div className='py-[0.25rem] inline-block text-white'>&nbsp;Now Serving:&nbsp;</div>
        <div className='counter text-6xl border-cbRed'>
          
        </div>
      </div>
      </div>

      <div className='contact__card z-[100]'>
        <p className='contact__prop' href="#"><img src={images.Cportfolio} alt="Portfolio Icon" /><span>Portfolio</span></p>
        <p className='contact__prop' href="https://github.com/tengxuanp"><img src={images.Cgithub} alt="Github Icon" /><span>Github</span></p>
        <p className='contact__prop' href="#"><img src={images.Cemail} alt="Email Icon" /><span>Email</span></p>
        <br />
        
      </div>
      <div>
        <p className='cursor-text'>tengxuanp@hotmail.com</p>
        </div>
      
    
    <div className='flex bottom-0'>
      <img className='h-[40rem]  blur-[2px] object-cover' src={images.Cpile} alt='Pile 1' />
    </div>

      </div>

  )
}

export default Contact