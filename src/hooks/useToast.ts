import { useEffect, useState } from 'react';
import { fireToast, TVariant } from '../functions/dom';
import { useRouter } from 'next/router';

interface IToast {
  message: string;
  variant: 'success' | 'error' | 'info' | 'warning';
}

const useToast = () => {
  const [toast, setToast] = useState<IToast>(null);

  useEffect(() => {
    if (toast) {
      fireToast(toast);
    }
  }, [toast]);

  return setToast;
};

const signInErrors = {
  Signin: 'Try signing in with a different account.',
  OAuthSignin: 'Try signing in with a different account.',
  OAuthCallback: 'Try signing in with a different account.',
  OAuthCreateAccount:
    'Try signing in with a different account. Make sure the account you use has an email address associated to it',
  EmailCreateAccount: 'Try signing in with a different account.',
  Callback: 'Try signing in with a different account.',
  OAuthAccountNotLinked:
    'To confirm your identity, sign in with the same account you used originally.',
  EmailSignin: 'Check your email address.',
  CredentialsSignin:
    'Sign in failed. Check the details you provided are correct.',
  default: 'Unable to sign in.',
};

export const useQueryParamToast = () => {
  const router = useRouter();

  const { customMessage, error, customVariant } = router.query;

  useEffect(() => {
    if (customMessage || error) {
      fireToast({
        message:
          customMessage ??
          signInErrors[error as string] ??
          signInErrors.default,
        variant: (customVariant as TVariant) ?? 'error',
      });
      // remove query params from url, but not callback Url
      router.replace({
        pathname: router.pathname,
        query: router.query.callbackUrl as string,
      });
    }
  }, [customMessage, customVariant, error, router]);
};

export default useToast;
