
import Statusbar from './Statusbar';

const Hero = () => {
  return (
    <div className='bg-[#f7e3df] px-0 md:px-20 py-4'>
      {/* Hero Section */}
      <div className='flex justify-between items-center flex-col-reverse md:flex-row'>
        {/* Left Side */}
        <div >
          <h4 className='text-orange-600 text-2xl font-bold mb-4'> Hi, I'm</h4>
          <h1 className='text-[#003663] text-6xl font-bold my-7'>Sajib CR</h1>
          <p className='text-2xl '>Expert Graphic Designer</p>
          {/* btn */}
          <div className='flex md:flex-col  gap-4 my-8'>
            <a className=' text-center bg-orange-600 text-white px-4 py-1 font-extrabold rounded-lg hover:bg-purple-500 my-6' href="/public/Sajib Graphic Designer Doc.pdf" download={'Sajib CV'}>
              <button className='text-center'>Download CV</button>
            </a>
            <button className='bg-purple-600 text-white px-4 py-1 font-extrabold rounded-lg hover:bg-orange-600 my-6'>Contact Me</button>
          </div>
        </div>
        {/* Right Side */}
        <div className=' mr-28 lg:-mt-24 mb-8  text-center w-full md:w-[550px] ml-12 md:mr-0'>
          <img className='w-[550px]' src="https://i.ibb.co/b5QxFH7/Untitled-design-removebg-preview.png" alt="sajib" />
        </div>
      </div>
      {/* status bar */}
      <div className='hidden lg:block -mt-8'>
        <Statusbar></Statusbar>
      </div>
    </div>
  );
};

export default Hero;