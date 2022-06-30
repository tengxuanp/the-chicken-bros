import React from 'react'
import { images } from '../../constants';
import './About.css';

const About = () => {

  return (
    <div name='about' className='about__wrapper pb-5 bg-cbBg h-auto w-full' >
        <div className='banner flex h-24 max-h-24 bg-black' />
        <div className='marquee bg-cbRed text-orange-300 whitespace-nowrap overflow-hidden	'>
            <div className='w-full text-2xl inline-block pl-[100%] animate-marquee1 lg:animate-marquee2'>
                <div className='flex'><div className='mx-[5rem]'>生意興隆</div><div className='mx-[5rem]'>客似雲來</div><div className='mx-[5rem]'>賓客滿門</div></div>
            </div>
        </div>

        <div className='context__wrapper m-8 opacity-[0.9]  grid lg:grid-cols-2'>
            <div className=''>
                <h1 className='about__title uppercase text-cbRed text-6xl font-semibold tracking-wider
                lg:flex px-10'><span>A</span>bo<span className='delay'>u</span><span className='rotate-45 inline-block'>t</span></h1>
                <h2 className='my-2 text-black text-4xl font-semibold 
                lg:flex px-10'>The Chicken Bros</h2>
                <p className='px-10 py-2 mb-5 text-justify font-medium'><span>The Chicken Bros is a new restaurant destination in Malaysia brought to you by 
                    The Chicken Chef, Gus Fling. 
                    Serving authentic Hong Kong fried chicken, a range of traditional 
                    Hong Kong / Malaysia dishes, as well as Nanyang coffee and tea.</span>
                    <br /><br />
                    We're proud to offer the highest quality, most unique merchandise on the market today. 
                    From our family to yours, we put lots of love and careful attention in each item. 
                    We hope you enjoy our work as much as we enjoy bringing it to you.
                </p>
            </div>
            <div>
                <div className='flex justify-center self-center '>
                    <img className='potrait w-[16rem] rounded-[12rem]' src={images.Achef} alt="Chef" />
                </div>
                <p className='cite m-10 text-xl font-semibold text-white whitespace-nowrap
                    before:content-["\0022"]  before:text-white before:text-4xl
                    after:content-["\0022"]  after:text-white after:inline-block after:align-bottom after:translate-y-8 after:text-4xl'>
                    I believe in the goodness of chicken
                </p>
                <div className=' text-cbRed text-sm p-5
                lg: px-10'>
                    <p className='flex justify-start self-start'>#GusFling &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; #Cannibalism</p>
                    <p className='flex justify-start self-start whitespace-nowrap'>#AuthenticHongKongStyleFriedChicken &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; #TheChickenBros</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default About