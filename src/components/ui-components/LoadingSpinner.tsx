import Loader from 'react-loader-spinner';

interface IProps {
  color?: string;
  height?: number;
  width?: number;
}

const LoadingSpinner = ({ color, height, width }: IProps): JSX.Element => {
  return <Loader type="Oval" color={color} height={height} width={width} />;
};

LoadingSpinner.defaultProps = {
  color: '#8a8a8a',
  height: 40,
  width: 40,
};

export default LoadingSpinner;
