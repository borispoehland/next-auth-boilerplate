import { PropsWithChildren } from 'react';
import cx from 'classnames';

interface IProps {
  className?: string;
}

const Container = ({
  children,
  className,
}: PropsWithChildren<IProps>): JSX.Element => {
  return (
    <div
      className={cx('container mx-auto flex flex-col items-center', className)}
    >
      {children}
    </div>
  );
};

export default Container;
