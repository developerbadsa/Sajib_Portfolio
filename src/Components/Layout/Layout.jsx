
import { Outlet } from 'react-router-dom';

const Layout = () => {
 return (
  <div>
    header
    <Outlet></Outlet>
    footer
  </div>
 );
};

export default Layout;