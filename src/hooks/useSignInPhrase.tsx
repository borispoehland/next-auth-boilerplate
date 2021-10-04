import { useCookies } from 'react-cookie';
import { hasSignedInBeforeCookie } from '../hocs/withUser';

const useSignInPhrase = (): [string, boolean] => {
  const [cookies] = useCookies();

  const signInPhrase = `Sign ${cookies[hasSignedInBeforeCookie] ? 'in' : 'up'}`;

  const hasSignedInBefore = Boolean(cookies[hasSignedInBeforeCookie]);

  return [signInPhrase, hasSignedInBefore];
};

export default useSignInPhrase;
