import { ClientSafeProvider, getProviders, signIn } from 'next-auth/client';
import { GetServerSidePropsResult } from 'next';
import EmailSignIn from '../../src/components/auth/signin/EmailSignIn';
import { negate } from 'lodash';
import { useQueryParamToast } from '../../src/hooks/useToast';
import useSignInPhrase from '../../src/hooks/useSignInPhrase';
import LegalHint from '../../src/components/auth/signin/LegalHint';
import OtherSignIn from '../../src/components/auth/signin/OtherSignIn';
import { NextSeo } from 'next-seo';

export interface ISignInProps {
  providers: ClientSafeProvider[];
}

const emailProviderPredicate = (provider: ClientSafeProvider) =>
  provider.id === 'email';

const notEmailProviderPredicate = negate(emailProviderPredicate);

export default function SignIn({ providers }: ISignInProps) {
  const emailProvider = providers.find(emailProviderPredicate);

  useQueryParamToast();

  const [signInPhrase] = useSignInPhrase();

  return (
    <>
      <NextSeo title={signInPhrase} />
      <div className="bg-base-100 flex flex-col items-center border rounded p-4 sm:mx-auto sm:p-10 md:p-20">
        <h1>{signInPhrase}</h1>
        {emailProvider && <EmailSignIn key={emailProvider.name} />}
        <div className="inline-flex flex-col gap-2">
          {providers.filter(notEmailProviderPredicate).map(OtherSignIn)}
        </div>
      </div>
      <LegalHint />
    </>
  );
}

export async function getServerSideProps(
  context
): Promise<GetServerSidePropsResult<ISignInProps>> {
  const providers = await getProviders();
  return { props: { providers: Object.values(providers) } };
}
