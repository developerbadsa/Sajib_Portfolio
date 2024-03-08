
import Statusbar from './Statusbar';

const Hero = () => {
 return (
  <div className='bg-[#f7e3df] px-20 '>
   {/* Hero Section */}
   <div className='flex justify-between items-center '>
    {/* Left Side */}
    <div >
     <h4 className='text-orange-600 text-2xl font-bold mb-4'> Hi, I'm</h4>
     <h1 className='text-[#003663] text-6xl font-bold my-7'>Sajib CR</h1>
     <p className='text-2xl '>Expert Graphic Designer</p>
     {/* btn */}
     <div className='md:flex  gap-4 my-8'>
      <button className='bg-orange-600 text-white px-4 py-1 font-extrabold rounded-lg hover:bg-purple-500 my-6'>Download CV</button>
      <button className='bg-purple-600 text-white px-4 py-1 font-extrabold rounded-lg hover:bg-orange-600 my-6'>Contact Me</button>
     </div>
    </div>
    {/* Right Side */}
    <div className=' mr-28 -mt-24'>
     <img className='w-[550px]' src="https://i.ibb.co/b5QxFH7/Untitled-design-removebg-preview.png" alt="sajib" />
    </div>
   </div>
   {/* status bar */}
   <Statusbar></Statusbar>
  </div>
 );
};

export default Hero;