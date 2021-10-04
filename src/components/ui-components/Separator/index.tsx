import cx from 'classnames';

interface IProps {
  invisible: boolean;
  text?: string;
}

const Separator = ({ text, invisible }: IProps): JSX.Element => {
  return <div className={cx('separator', { invisible })}>{text}</div>;
};

Separator.defaultProps = {
  text: '',
  invisible: false,
};

export default Separator;
