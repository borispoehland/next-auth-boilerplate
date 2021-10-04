import { useEffect } from 'react';

const useDisableAllClicks = (flag: boolean) => {
  useEffect(() => {
    if (flag) {
      document.documentElement.classList.add('pointer-events-none');
    } else {
      document.documentElement.classList.remove('pointer-events-none');
    }
  }, [flag]);
};

export default useDisableAllClicks;
