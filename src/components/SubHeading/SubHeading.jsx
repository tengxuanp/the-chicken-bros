import React, { useState, useEffect } from 'react'
import { images } from '../../constants'
import lottie from "lottie-web";
import chicken from "../../assets/welcome.json"
import "./SubHeading.css"

const SubHeading = () => {

// parallax
const [offsetY, setOffsetY] = useState(0);
const handleScroll = () => setOffsetY(window.pageYOffset);

useEffect(() => {
 window.addEventListener("scroll", handleScroll);

 return () => window.removeEventListener("scroll", handleScroll);
}, []);


  React.useEffect(() => {
  const instance = lottie.loadAnimation({
      container: document.querySelector("#welcome-chicken"),
      animationData: chicken,
    });

    return () => instance.destroy();
  }, []);

  return (
    <div className='bg-sub-pattern h-[75vh] relative flex justify-center self-center bg-fixed'>
      <div className='h-[30rem] absolute top-0  z-[-5]' id='welcome-chicken' 
      style={{transform: `translateY(${offsetY * 0.2}px)` }}/>
    </div>
    // #E166B0
  )
}

export default SubHeading;