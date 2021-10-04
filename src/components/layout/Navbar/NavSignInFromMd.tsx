import LoadingSpinner from '../../ui-components/LoadingSpinner';
import Image from 'next/image';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Link from '../../ui-components/Link';
import { signIn, signOut } from 'next-auth/client';
import useUser from '../../../hooks/useUser';
import useSignInPhrase from '../../../hooks/useSignInPhrase';

const NavSignInFromMd = (): JSX.Element => {
  const { user, isLoading } = useUser();

  const [signInPhrase] = useSignInPhrase();

  return (
    <div className="group hidden md:flex justify-center items-center gap-4 w-40">
      {isLoading ? (
        <LoadingSpinner height={46} width={46} />
      ) : user ? (
        <div className="relative p-0.5">
          <button className="flex items-center">
            <div className="relative w-10 h-10 mr-1 rounded-full overflow-hidden">
              <Image
                src={user.image}
                alt={`Logged in as ${user.email}`}
                layout="fill"
              />
            </div>
            <MdKeyboardArrowDown />
          </button>
          <div className="hidden group-hover:block absolute pt-2 top-full right-0 w-56">
            <ul className="bg-base-50 rounded border shadow-xl">
              <li>
                <small className="text-center block px-2 my-2 overflow-auto">
                  Signed in as: <br />
                  <span className="underline">{user.email}</span>
                </small>
              </li>
              <li>
                <Link
                  action="/profile"
                  className="hover:bg-base-200 w-full text-center block py-2"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  action={() => signOut()}
                  className="hover:bg-base-200 w-full py-2 mb-2"
                >
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <Link action={() => signIn()}>{signInPhrase}</Link>
      )}
    </div>
  );
};

export default NavSignInFromMd;
