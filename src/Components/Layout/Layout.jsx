
import { Outlet } from 'react-router-dom';
import { StickyNavbar } from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';

const Layout = () => {
 return (
  <div className='max-w-[1280px] mx-auto border'>
    <StickyNavbar></StickyNavbar>
    <Outlet></Outlet>
    <Footer></Footer>
  </div>
 );
};

export default Layout;