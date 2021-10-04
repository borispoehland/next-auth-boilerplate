import { ElementType, useState } from 'react';
import { IconType } from 'react-icons';
import cx from 'classnames';

interface IProps {
  disabled?: boolean;
  icon: IconType | null;
  isOn: boolean;
  onToggle: () => void;
}

const Switch = ({
  disabled,
  icon,
  isOn: propsIsOn,
  onToggle,
}: IProps): JSX.Element => {
  const [isOn, setIsOn] = useState(propsIsOn);

  const Icon = icon as ElementType;

  return (
    <button type="button">
      <div className="relative w-12 h-7">
        <label className="sr-only" htmlFor="theme-toggle">
          Theme
        </label>
        <input
          type="checkbox"
          id="theme-toggle"
          className={cx('w-full h-full opacity-0', {
            'cursor-not-allowed': disabled,
            'cursor-pointer': !disabled,
          })}
          checked={isOn}
          disabled={disabled}
          onChange={() => {
            setIsOn((isOn) => !isOn);
            onToggle();
          }}
        />
        <span
          className={cx('pointer-events-none absolute inset-0 rounded-3xl', {
            'opacity-60': disabled,
            'bg-primary-500': isOn,
            'bg-base-400': !isOn,
          })}
        >
          <span
            className={cx(
              'absolute h-6 w-6 bg-base-50 top-0.5 left-0.5 rounded-full flex justify-center items-center transform transition-transform duration-300',
              { 'translate-x-5': isOn }
            )}
          >
            {icon && <Icon size={14} />}
          </span>
        </span>
      </div>
    </button>
  );
};

Switch.defaultProps = {
  disabled: false,
};

export default Switch;
