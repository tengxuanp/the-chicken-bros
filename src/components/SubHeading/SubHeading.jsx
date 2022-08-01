import React, { useState, useEffect } from 'react'
import lottie from "lottie-web"
import chicken from "../../assets/welcome.json"
import "./SubHeading.css"
import Aos from "aos"
import "aos/dist/aos.css"

const SubHeading = () => {

// parallax
const [offsetY, setOffsetY] = useState(0);
const handleScroll = () => setOffsetY(window.pageYOffset);

useEffect(() => {
 window.addEventListener("scroll", handleScroll);

 return () => window.removeEventListener("scroll", handleScroll);
}, []);


// animation on scroll
useEffect(() => {
  Aos.init({duration: 2000});
 }, []);


  React.useEffect(() => {
  const instance = lottie.loadAnimation({
      container: document.querySelector("#welcome-chicken"),
      animationData: chicken,
    });

    return () => instance.destroy();
  }, []);

  return (
    <div className='loading bg-sub-pattern h-[75vh] w-full relative flex justify-center self-center bg-fixed'>
      <div className='narrate w-full flex justify-start self-start ml-[3rem]'>
        <p className='text-2xl text-white font-bold' data-aos="fade-up">Hey you,</p>
      </div>
      <div className='absolute w-full flex justify-start self-start mt-[12rem] translate-y-[5rem]'>
        <p className='text-3xl text-white font-bold' data-aos="fade-up" >Welcome to The Chicken Bros.</p>
      </div>
      <div className='h-[30rem] absolute top-0  z-[-5]' id='welcome-chicken' 
      style={{transform: `translateY(${offsetY * 0.2}px)` }}/>
      
    </div>
    
    // #E166B0
  )
}

export default SubHeading;