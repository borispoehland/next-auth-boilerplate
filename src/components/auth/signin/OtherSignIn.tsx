import { ClientSafeProvider, signIn } from 'next-auth/client';
import Button from '../../ui-components/Button';
import useSignInPhrase from '../../../hooks/useSignInPhrase';
import { IconType } from 'react-icons';
import { AiOutlineGoogle } from 'react-icons/ai';
import { IoLogoFacebook } from 'react-icons/io5';
import { useRouter } from 'next/router';

interface IProps extends ClientSafeProvider {}

const logos: { [key: string]: IconType } = {
  google: AiOutlineGoogle,
  facebook: IoLogoFacebook,
};

const OtherSignIn = ({ id, name }: IProps): JSX.Element => {
  const [signInPhrase] = useSignInPhrase();

  const { callbackUrl } = useRouter().query;

  const Icon = logos[id];
  return (
    <Button
      key={name}
      action={() =>
        signIn(id, {
          callbackUrl: callbackUrl as string,
        })
      }
      className="w-full"
    >
      <Icon /> {signInPhrase} with {name}
    </Button>
  );
};

export default OtherSignIn;
