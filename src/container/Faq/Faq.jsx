import React,{useState}  from 'react'
import { images } from '../../constants'
import './Faq.css'

const Faq = () => {
  const [expand1, setExpand1] = useState(false);
  const [expand2, setExpand2] = useState(false);

  return (
    <div name='faq' className="wrapper bg-black  w-full h-auto">


    <div className='tvPile grid grid-cols-1	'>
      <div>
        

      {/* FAQ */}
        <div className="faq grid absolute self-center justify-center w-[18rem] ml-[8rem] mt-[5rem] text-white">
          <h1 className="p-4 text-3xl font-bold flex self-center justify-center">FAQ</h1>

          <div className='p-4'>
            <div className="faq__1 flex justify-between hover:cursor-pointer hover:text-[color:var(--sRed)]" onClick={()=>setExpand1(!expand1)}>
              <p className={(expand1 ? 'font-bold' : '' )}>Does The Chicken Bros allow takeouts or is there any delivery services?</p>
              <img className={"self-center" + (expand1 ? ' rotate-180 transition ease-in-out duration-300' : '')} src={ images.Farrow } alt="" />
            </div>
            <div className='pr-3 pt-2'>
              <p className={(expand1 ? 'answer h-full transition-[height] ease-in-out duration-300 ' : ' overflow-hidden h-0 ' )}>
              No, The Chicken Bros is a dine-in only restaurant.
              We want our customers to eat at The Chicken Bros to enjoy the authentic vibe and food that we’re providing. 
              </p>
            </div>
          </div>
          <div className='border-b-2 border-[color:var(--lgBlue)] m-4'></div>

          <div className='p-4'>
            <div className="faq__2 flex justify-between hover:cursor-pointer hover:text-[color:var(--sRed)]" onClick={()=>setExpand2(!expand2)}>
              <p className={(expand2 ? 'font-bold' : '' )}>Is there a chicken language?</p>
              <img className={"self-center" + (expand2 ? ' rotate-180 transition ease-in-out duration-300' : '')} src={ images.Farrow } alt="" />
            </div>
            <div className='pr-3 pt-2'>
              <p className={(expand2 ? 'answer h-full transition-[height] ease-in-out duration-300 ' : ' overflow-hidden h-0 ' )}>
              æøü ĠĦĶ ļç ŝŬŵ
              </p>
            </div>
          </div>
          <div className='border-b-2 border-[color:var(--lgBlue)] m-4'></div>
        </div>
        <div className='flex'>
        <img className='w-[30rem]' src={images.Ftv1} alt="Tv1" />
        <img className='hidden lg:flex justify-end self-end w-[70rem] ' src={images.Ftvlogo} alt="Tv Logo" />
        </div>

      </div>
      <div className='flex justify-end self-end '>
        <img className='' src={images.Fwalk} alt="Chicken Walking" />
      </div>
    </div>

    </div>
  )
}

export default Faq