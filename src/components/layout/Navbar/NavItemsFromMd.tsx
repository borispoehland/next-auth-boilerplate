import navLinks from '../../../data/navLinks';
import Link from '../../ui-components/Link';

const NavItemsFromMd = (): JSX.Element => {
  return (
    <div className="hidden md:flex items-center gap-5">
      {navLinks.map(({ href, label }) => {
        return (
          <Link key={label} action={href}>
            {label}
          </Link>
        );
      })}
    </div>
  );
};

export default NavItemsFromMd;
