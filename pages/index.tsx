import Button from '../src/components/ui-components/Button';
import { useQueryParamToast } from '../src/hooks/useToast';
import withUser from '../src/hocs/withUser';
import { alwaysWhiteTextClassNames } from '../src/data/classNames';

const HomePage = () => {
  useQueryParamToast();

  return (
    <>
      <h1 className={alwaysWhiteTextClassNames}>You&apos;re signed in</h1>
      <Button action="/profile">To the profile</Button>
    </>
  );
};

export default withUser(HomePage)({
  accessDeniedHeading: 'Welcome',
  title: '',
});
