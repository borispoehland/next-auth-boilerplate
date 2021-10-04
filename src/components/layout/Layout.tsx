import { PropsWithChildren } from 'react';
import Navbar from './Navbar';
import { ToastContainer } from 'react-toastify';
import Footer from './Footer';
import CookieWindow from './CookieWindow';

interface IProps {}

const Layout = ({ children }: PropsWithChildren<IProps>): JSX.Element => {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <main className="min-h-screen py-26 px-4 flex flex-col justify-center">
          {children}
        </main>
        <Footer />
      </div>
      <ToastContainer />
      <CookieWindow />
    </>
  );
};

export default Layout;
