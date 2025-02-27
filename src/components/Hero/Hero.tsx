'use client'

import ArrowLongRight from '../../assets/img/arrow-long-right';
import Woman from '../../assets/img/woman-tech.jpg';

const Hero = () => {
  return (
    <div className="bg-white relative px-6 pt-14 lg:px-8">
      <div className="mx-auto">
        <h6>HBL Authentics</h6>
        <div className="text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            The Sound That Touches Your Heart.
          </h1>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="shopnow rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Shop now
              <ArrowLongRight />
            </a>
            <img src={Woman} alt="" width={300} height={300} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;