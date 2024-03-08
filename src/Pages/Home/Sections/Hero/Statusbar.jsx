import React from 'react';
import { FaGear } from "react-icons/fa6";

const Statusbar = () => {
  return (
    <div className='bg-white border py-6 grid grid-cols-3  gap-9 mx-16 rounded-full h-[120px] px-3' >
      {/* <FaGear /> */}


      {/* statusbar cards */}
      {/* card 1 */}
      <div className='flex items-center gap-3 px-4 border-r border-r-[#cfc5c5]'>
        {/* Icon */}
        <div className='bg-orange-600 p-3 rounded-full'>
          <FaGear className='text-2xl text-white' />
        </div>
        {/* Text */}
        <div>
          <span className='text-2xl font-bold text-indigo-900'> 8 Years Job</span>
          <p className='text-orange-600'>Experience</p>
        </div>
      </div>
      {/* card 2 */}
      <div className='flex items-center gap-3 px-4 border-r border-r-[#cfc5c5]'>
        {/* Icon */}
        <div className='bg-orange-600 p-3 rounded-full'>
          <FaGear className='text-2xl text-white' />
        </div>
        {/* Text */}
        <div>
          <span className='text-2xl font-bold text-indigo-900'> 8 Years Job</span>
          <p className='text-orange-600'>Experience</p>
        </div>
      </div>
      {/* card 3 */}
      <div className='flex items-center gap-3 px-4'>
        {/* Icon */}
        <div className='bg-orange-600 p-3 rounded-full'>
          <FaGear className='text-2xl text-white' />
        </div>
        {/* Text */}
        <div>
          <span className='text-2xl font-bold text-indigo-900'> 8 Years Job</span>
          <p className='text-orange-600'>Experience</p>
        </div>
      </div>

    </div>
  );
};

export default Statusbar;