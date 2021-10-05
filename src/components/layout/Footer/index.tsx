import ThemeSwitch from './ThemeSwitch';
import footerLinks from '../../../data/footerLinks';
import Link from '../../ui-components/Link';
import { FaHeart } from 'react-icons/fa';
import cx from 'classnames';
import { navAndFooterClassNames } from '../../../data/classNames';

const Footer = (): JSX.Element => {
  return (
    <footer
      className={cx(navAndFooterClassNames, 'flex flex-col py-6 px-8 mb-2')}
    >
      <div className="flex flex-col gap-2 md:items-center lg:flex-row lg:justify-between">
        <div className="flex items-center md:justify-center gap-2 w-64">
          Dark mode: <ThemeSwitch />
        </div>
        <ul className="flex flex-col md:flex-row md:items-center md:gap-8 list-disc md:list-none list-inside">
          {footerLinks.map(({ href, label }) => {
            return (
              <li key={label}>
                <Link action={href}>{label}</Link>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center md:justify-center gap-1.5 w-64">
          Made with <FaHeart /> by{' '}
          <Link action="https://www.borispoehland.com">Boris Pöhland</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
