import { CgMenuMotion } from 'react-icons/cg';
import cx from 'classnames';

interface IProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const NavToggler = ({ isOpen, toggleMenu }: IProps): JSX.Element => {
  return (
    <div className="md:hidden h-8 w-8 self-center">
      <button onClick={toggleMenu} className="w-full">
        <CgMenuMotion
          id="nav__toggler"
          className={cx('w-full h-full', {
            '--is-open': isOpen,
          })}
        />
      </button>
    </div>
  );
};

export default NavToggler;
