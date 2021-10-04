import { PropsWithChildren } from 'react';
import cx from 'classnames';
import { alwaysWhiteTextClassNames } from '../../data/classNames';

interface IProps {}

const Heading = ({ children }: PropsWithChildren<IProps>): JSX.Element => {
  return <h1 className={cx(alwaysWhiteTextClassNames, 'mt-10')}>{children}</h1>;
};

export default Heading;
