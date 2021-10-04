import { MouseEventHandler, PropsWithChildren } from 'react';
import NextLink from 'next/link';
import cx from 'classnames';
import LoadingSpinner from './LoadingSpinner';
import useDisableAllClicks from '../../hooks/useDisableAllClicks';

interface IProps {
  action?: MouseEventHandler | string;
  className?: string;
  inNewTab?: boolean;
  isLoading?: boolean;
  type?: 'button' | 'submit';
}

const Link = ({
  action,
  children,
  className,
  inNewTab,
  isLoading,
  type,
}: PropsWithChildren<IProps>): JSX.Element => {
  const isButton = typeof action !== 'string';

  useDisableAllClicks(isLoading);

  return isButton ? (
    <button
      type={type}
      className={cx(
        'text-primary-500 inline-flex items-center justify-center gap-2',
        className
      )}
      onClick={action}
    >
      {children}
      {isLoading && <LoadingSpinner width={24} height={24} />}
    </button>
  ) : (
    <NextLink href={action} passHref>
      <a
        className={cx('text-primary-500', className)}
        target={inNewTab || action.startsWith('http') ? '__blank' : undefined}
      >
        {children}
      </a>
    </NextLink>
  );
};

Link.defaultProps = {
  inNewTab: false,
  isLoading: false,
  type: 'button',
};

export default Link;
