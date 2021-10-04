import { MdKeyboardArrowRight } from 'react-icons/md';
import { MouseEventHandler, PropsWithChildren } from 'react';
import { btnClassNames } from '../../data/classNames';
import cx from 'classnames';
import LoadingSpinner from './LoadingSpinner';
import { useRouter } from 'next/router';
import useDisableAllClicks from '../../hooks/useDisableAllClicks';

interface IProps {
  className?: string;
  isLoading?: boolean;
  action?: MouseEventHandler | string;
  type?: 'button' | 'submit';
}

export const Button = ({
  children,
  className,
  isLoading,
  action,
  type,
}: PropsWithChildren<IProps>): JSX.Element => {
  const router = useRouter();

  useDisableAllClicks(isLoading);

  return (
    <button
      type={type}
      className={cx(btnClassNames, className)}
      onClick={async (e) => {
        switch (typeof action) {
          case 'undefined': // action not set, because button's only function is submit
            return;
          case 'string': // action is href => change url
            return await router.push(action);
          default:
            return action(e);
        }
      }}
    >
      {children}
      {isLoading ? (
        <LoadingSpinner width={24} height={24} color="white" />
      ) : (
        <MdKeyboardArrowRight />
      )}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
