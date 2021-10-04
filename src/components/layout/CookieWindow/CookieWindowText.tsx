import Link from '../../ui-components/Link';

interface IProps {}

const CookieWindowText = (): JSX.Element => {
  return (
    <>
      This website uses cookies for different purposes. Please choose which
      kinds of cookies you would like to accept. For more information please
      refer to our{' '}
      <Link action="/legal/cookie-policy" inNewTab>
        cookie policy
      </Link>
      .
    </>
  );
};

export default CookieWindowText;
