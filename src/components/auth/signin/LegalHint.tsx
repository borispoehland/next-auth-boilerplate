import cx from 'classnames';
import { alwaysWhiteTextClassNames } from '../../../data/classNames';
import Link from '../../ui-components/Link';
import Container from '../../ui-components/Container';
import useSignInPhrase from '../../../hooks/useSignInPhrase';

const LegalHint = (): JSX.Element => {
  const [signInPhrase] = useSignInPhrase();

  return (
    <Container>
      <p className={cx(alwaysWhiteTextClassNames, 'mt-4 px-2 text-center')}>
        By {signInPhrase.replace('Sign', 'signing')} to our website, you agree
        to our{' '}
        <Link action="legal/terms-of-use" inNewTab>
          terms of use
        </Link>{' '}
        and our{' '}
        <Link action="/legal/privacy-policy" inNewTab>
          privacy policy
        </Link>
        .
      </p>
    </Container>
  );
};

export default LegalHint;
