import { useTheme } from 'next-themes';
import nightwind from 'nightwind/helper';
import { BiMoon } from 'react-icons/bi';
import useIsMounted from '../../../hooks/useIsMounted';
import Switch from '../../ui-components/Switch';

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  const isMounted = useIsMounted();

  const changeTheme = () => {
    nightwind.beforeTransition();
    if (theme !== 'dark') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  if (!isMounted) return <></>;

  return (
    <Switch icon={BiMoon} isOn={theme === 'dark'} onToggle={changeTheme} />
  );
};

export default ThemeSwitch;
