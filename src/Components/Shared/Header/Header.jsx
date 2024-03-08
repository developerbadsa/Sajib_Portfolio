import React from "react";
import {
 Navbar,
 Typography,
 Button,
 IconButton,
 Card,
 Collapse,
} from "@material-tailwind/react";
import { MdDoubleArrow } from "react-icons/md";

export function StickyNavbar() {
 const [openNav, setOpenNav] = React.useState(false);

 React.useEffect(() => {
  window.addEventListener(
   "resize",
   () => window.innerWidth >= 960 && setOpenNav(false),
  );
 }, []);

 const navList = (
  <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
   <Typography
    as="li"
    variant="small"
    color="blue-gray"
    className="p-1 font-normal"
   >
    <a href="#" className="flex items-center">
     Home
    </a>
   </Typography>
   <Typography
    as="li"
    variant="small"
    color="blue-gray"
    className="p-1 font-normal"
   >
    <a href="#" className="flex items-center">
     About
    </a>
   </Typography>
  </ul>
 );

 return (
  <div className=" max-h-[768px] ">
   <Navbar className="sticky top-0 z-10 h-max bg-[#f7e3df] max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
    <div className="flex items-center justify-between text-blue-gray-900 text-orange-700 font-bold">
     <Typography
      as="a"
      href="#"
      className="mr-4 cursor-pointer py-1.5 text-3xl text-orange-600 font-bold" 
     >
      Sajib CR
     </Typography>
     <div className="flex items-center gap-4">
      {/* Nav items menu */}
      <div className="mr-4 hidden lg:block">{navList}</div>

      {/* Nav btns */}
      <div className="flex items-center gap-x-1">
       <Button
        variant="filled"
        size="sm"
        className="hidden lg:inline-block bg-indigo-800 hover:bg-indigo-500 "
       >
         <span className="flex items-center gap-2">Hire me <MdDoubleArrow className="mt-1"></MdDoubleArrow></span>
       </Button>
      </div>
      <IconButton
       variant="text"
       className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
       ripple={false}
       onClick={() => setOpenNav(!openNav)}
      >
       {openNav ? (
        <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         className="h-6 w-6"
         viewBox="0 0 24 24"
         stroke="currentColor"
         strokeWidth={2}
        >
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
         />
        </svg>
       ) : (
        <svg
         xmlns="http://www.w3.org/2000/svg"
         className="h-6 w-6"
         fill="none"
         stroke="currentColor"
         strokeWidth={2}
        >
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
         />
        </svg>
       )}
      </IconButton>
     </div>
    </div>
    <Collapse open={openNav}>
     {navList}
     <div className="flex items-center gap-x-1">
      <Button fullWidth variant="text" size="sm" className="">
       <span>Hire me</span>
      </Button>
     </div>
    </Collapse>
   </Navbar>
   {/* <div className="mx-auto max-w-screen-md py-12">
    <Card className="mb-12 overflow-hidden">
     <img
      alt="nature"
      className="w-full "
      src="https://scontent.fdac14-1.fna.fbcdn.net/v/t1.15752-9/430900285_936800657723659_5951347390432441328_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHGIWVdLrN_i98Ctfc19hQGckUkqSiO3fJyRSSpKI7d8lAlINxAFcMXpk3Th6bULqCx1qUm27BJHGpQm8pm1YKT&_nc_ohc=wvxMceYbe6cAX9pJbc8&_nc_ht=scontent.fdac14-1.fna&oh=03_AdTIcLndAFDHq_jjuq0Oxq53wRuvYGZsxS65FNjB3u02zQ&oe=6611F48B"
     />
    </Card>
    <Typography variant="h2" color="blue-gray" className="mb-2">
     What i does
    </Typography>
    <Typography color="gray" className="font-normal">
    Thinker & Dreamer
    </Typography>
   </div> */}
  </div>
 );
}