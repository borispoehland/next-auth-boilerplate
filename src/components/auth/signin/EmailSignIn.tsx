import Button from '../../ui-components/Button';
import Separator from '../../ui-components/Separator';
import { IoMailOutline } from 'react-icons/io5';
import { useForm } from 'react-hook-form';
import { inputClassNames } from '../../../data/classNames';
import { fireToast } from '../../../functions/dom';
import { signIn } from 'next-auth/client';
import useSignInPhrase from '../../../hooks/useSignInPhrase';

const emailValidation = {
  required: 'Please enter an email address!',
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'Please enter a valid email address!',
  },
};

interface IFormFields {
  email: string;
}

const EmailSignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormFields>();

  const [signInPhrase] = useSignInPhrase();

  return (
    <>
      <form
        method="post"
        onSubmit={handleSubmit(
          (data) => signIn('email', { email: data.email }),
          () => fireToast({ message: errors?.email?.message, variant: 'error' })
        )}
        className="flex flex-col items-center gap-2"
        noValidate
      >
        <label htmlFor="email" className="sr-only" />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email address"
          className={inputClassNames}
          {...register('email', emailValidation)}
        />
        <Button type="submit">
          <IoMailOutline />
          {signInPhrase} with Email
        </Button>
      </form>
      <Separator text="or" />
    </>
  );
};

export default EmailSignIn;
