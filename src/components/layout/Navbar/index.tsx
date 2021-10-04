import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import NavbarBrand from './NavbarBrand';
import NavItemsFromMd from './NavItemsFromMd';
import NavSignInFromMd from './NavSignInFromMd';
import NavToggler from './NavToggler';
import MobileNav from './MobileNav';

const useCloseMenuAutomatically = (closeMenu: () => void) => {
  const router = useRouter();

  useEffect(() => {
    const closeMenuWhenClickOutsideOfMenu = (e) => {
      if (!e.target.closest('#nav')) {
        closeMenu();
      }
    };

    router.events.on('routeChangeComplete', closeMenu);

    document.addEventListener('click', closeMenuWhenClickOutsideOfMenu);

    return () => {
      router.events.off('routeChangeComplete', closeMenu);
      document.removeEventListener('click', closeMenuWhenClickOutsideOfMenu);
    };
  }, [closeMenu, router]);
};

const Navbar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const functions = useRef({
    closeMenu: () => setIsOpen(false),
    toggleMenu: () => setIsOpen((prev) => !prev),
  });

  useCloseMenuAutomatically(functions.current.closeMenu);

  return (
    <nav
      id="nav"
      className="mt-2 py-4 px-8 h-20 flex justify-between bg-base-100 z-10 fixed max-w-7xl w-full border xl:rounded"
    >
      <NavbarBrand />
      <NavItemsFromMd />
      <NavSignInFromMd />
      <NavToggler isOpen={isOpen} toggleMenu={functions.current.toggleMenu} />
      <MobileNav isOpen={isOpen} />
    </nav>
  );
};

export default Navbar;
