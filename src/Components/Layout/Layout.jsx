
import { Outlet } from 'react-router-dom';
import { StickyNavbar } from '../Shared/Header/Header';

const Layout = () => {
 return (
  <div className='max-w-[1280px] mx-auto border'>
    <StickyNavbar></StickyNavbar>
    <Outlet></Outlet>
    footer
  </div>
 );
};

export default Layout;