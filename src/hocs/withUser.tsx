import useUser from '../hooks/useUser';
import LoadingSpinner from '../components/ui-components/LoadingSpinner';
import AccessDenied from '../components/auth/AccessDenied';
import Container from '../components/ui-components/Container';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';
import { NextSeo } from 'next-seo';

interface IProps {
  accessDeniedHeading: string;
  title: string;
}

export const hasSignedInBeforeCookie = 'signedInBefore';

const withUser =
  (Component) =>
  ({ accessDeniedHeading, title }: IProps) =>
  // eslint-disable-next-line react/display-name
  ({ ...props }) => {
    const { user, isLoading } = useUser();

    const [_, setCookie] = useCookies();

    useEffect(() => {
      if (user) {
        setCookie(hasSignedInBeforeCookie, 'true', {
          maxAge: 60 * 60 * 24 * 365, // 1 year
          sameSite: 'lax',
        });
      }
    }, [setCookie, user]);

    return (
      <>
        <NextSeo title={title} />
        <Container>
          {isLoading ? (
            <LoadingSpinner height={40} width={40} />
          ) : !user ? (
            <AccessDenied heading={accessDeniedHeading} />
          ) : (
            <Component {...props} />
          )}
        </Container>
      </>
    );
  };

export default withUser;
