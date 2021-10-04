import { signIn } from 'next-auth/client';
import Container from '../ui-components/Container';
import Button from '../ui-components/Button';
import useSignInPhrase from '../../hooks/useSignInPhrase';
import { alwaysWhiteTextClassNames } from '../../data/classNames';

interface IProps {
  heading?: string;
}

const AccessDenied = ({ heading }: IProps) => {
  const [signInPhrase, hasSignedInBefore] = useSignInPhrase();

  return (
    <Container className={alwaysWhiteTextClassNames}>
      <h1>{heading}</h1>
      <p>You are not {!hasSignedInBefore ? 'a member' : 'signed in'} yet.</p>
      <Button action={() => signIn()} className="mt-2">
        {signInPhrase} now
      </Button>
    </Container>
  );
};

AccessDenied.defaultProps = {
  heading: 'Access Denied',
};

export default AccessDenied;
