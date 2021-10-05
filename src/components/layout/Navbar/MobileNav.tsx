import cx from 'classnames';
import navLinks from '../../../data/navLinks';
import Link from '../../ui-components/Link';
import LoadingSpinner from '../../ui-components/LoadingSpinner';
import { signIn, signOut } from 'next-auth/client';
import Button from '../../ui-components/Button';
import useUser from '../../../hooks/useUser';
import useSignInPhrase from '../../../hooks/useSignInPhrase';

interface IProps {
  isOpen: boolean;
}

const MobileNav = ({ isOpen }: IProps): JSX.Element => {
  const { user, isLoading } = useUser();

  const [signInPhrase] = useSignInPhrase();

  return (
    <div
      id="nav__mobile-nav"
      className={cx(
        'md:hidden opacity-0 pointer-events-none overflow-hidden transition duration-300 absolute top-24 bg-base-50 border rounded shadow-xl left-1/2 transform -translate-x-1/2 max-w-lg',
        { 'opacity-100 pointer-events-auto': isOpen }
      )}
    >
      <div className="flex flex-col items-center pt-3">
        <h2 className="text-lg">Menu</h2>
        <div className="flex flex-col gap-2">
          {navLinks.map(({ href, label }) => {
            return (
              <Link key={label} action={href} className="px-2">
                {label}
              </Link>
            );
          })}
        </div>
      </div>
      <hr className="my-2 border-base-500" />
      <div className="flex flex-col items-center pb-3">
        <h2 className="text-lg">Membership area</h2>
        {isLoading ? (
          <LoadingSpinner height={40} width={40} />
        ) : user ? (
          <ul className="flex flex-col items-center gap-2 mb-1">
            <li>
              <small className="block px-2 overflow-auto text-center">
                Signed in as: <br />
                <span className="underline">{user.email}</span>
              </small>
            </li>
            <li>
              <Link action="/profile" className="px-2">
                Profile
              </Link>
            </li>
            <li>
              <Link action={() => signOut()} className="px-2">
                Sign out
              </Link>
            </li>
          </ul>
        ) : (
          <Button action={() => signIn()} className="mb-0.5">
            {signInPhrase}
          </Button>
        )}
      </div>
    </div>
  );
};

export default MobileNav;
