
import { Outlet } from 'react-router-dom';
import Navbar from '../componenst/Navbar';
import Footer from '../componenst/Footer';

const Layout = () => {

    return (
        <div className='bg-blue-100'>
            <div className='max-w-screen-xl min-h-screen mx-auto' >
                <Navbar />
                <Outlet />

                <Footer />

            </div>
        </div>
    );
};

export default Layout;