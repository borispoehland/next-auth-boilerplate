import Link from '../../ui-components/Link';
import Image from 'next/image';
import { useTheme } from 'next-themes';

interface IProps {}

const NavbarBrand = (): JSX.Element => {
  const { theme } = useTheme();

  return (
    <div className="relative w-40">
      <Link action="/">
        <Image
          src={`/img/logo-${theme}.png`}
          alt="Logo"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </Link>
    </div>
  );
};

export default NavbarBrand;
