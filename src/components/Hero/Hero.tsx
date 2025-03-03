'use client'

import ArrowLongRight from '../../assets/img/arrow-long-right';
import WomanTech from '../../assets/img/woman-tech.jpg';
import WomanHeadPhone from '../../assets/img/woman-headphone.jpg';

const Hero = () => {
  return (
    <div className="relative bg-white px-6 pt-14 lg:px-8 text-left max-w-7xl grid md:grid-cols-2 mx-auto">
      <div className="md:max-w-md">
        <h6 className="mb-4 font-extrabold">HBL Authentics</h6>
        <h1 className="mb-14 text-5xl font-black tracking-tight text-balance text-gray-900 sm:text-7xl">
          The Sound That Touches Your Heart.
        </h1>
        <a
          href="#"
          className="flex shopnow mb-15 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-fit"
        >
          Shop now
          <ArrowLongRight className="ml-[10px]" />
        </a>
        
        <div className="md:absolute mx-auto bottom-0 left-[30%] z-9 max-w-sm w-fit lg:max-w-full lg:flex border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t bg-white rounded-full p-4 flex flex-col justify-between leading-normal">
          <div className="flex items-center">
            <img className="w-10 h-10 rounded-full mr-[-10px]" src={WomanHeadPhone} alt="Avatar of Jonathan Reinink" />
            <img className="w-10 h-10 rounded-full mr-[-10px]" src={WomanHeadPhone} alt="Avatar of Jonathan Reinink" />
            <img className="w-10 h-10 rounded-full mr-[-10px]" src={WomanHeadPhone} alt="Avatar of Jonathan Reinink" />
            <img className="w-10 h-10 rounded-full mr-[-10px]" src={WomanHeadPhone} alt="Avatar of Jonathan Reinink" />
            <p className="flex justify-center items-center mr-[10px] font-bold border-r border-b border-gray-400 rounded-full w-[40px] h-[40px] bg-[#000] text-[#fafafa]">+</p>
            <div className="text-sm">
              <p className="text-gray-900 font-bold leading-none">72k+ Happy Customers</p>
            </div>
          </div>
        </div>


        <div className="mt-10 flex items-center gap-x-6">
        </div>
      </div>
      <div className="relative flex justify-end items-end">
        <img src={WomanHeadPhone} alt="" className="object-cover w-[50px] h-[50px] md:w-[100px] md:h-[100px] rounded-full absolute top-0 left-[15px] z-9" />
        <img src={WomanTech} alt="" className="object-cover w-[50px] h-[50px] md:w-[100px] md:h-[100px] rounded-full absolute top-[30px] md:top-[100px] right-0 z-9"/>
        <img src={WomanTech} alt="" className="object-cover h-[400px]" />
      </div>
    </div>
  )
}

export default Hero;