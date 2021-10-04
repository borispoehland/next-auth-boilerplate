import { toast } from 'react-toastify';

export type TVariant = 'error' | 'warning' | 'info' | 'success' | 'loading';

export interface IToast {
  message: string;
  variant: TVariant;
}

export const fireToast = ({ message, variant }: IToast) => {
  return toast[variant](message, { className: 'bg-base-900 text-base-100' });
};

export const removeAllCookiesWithPrefix = (prefix: string, domain: string) => {
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    const cookieName = cookie.split('=')[0];

    if (cookieName.startsWith(prefix)) {
      document.cookie = `${cookieName}=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${domain};`;
    }
  }
};
