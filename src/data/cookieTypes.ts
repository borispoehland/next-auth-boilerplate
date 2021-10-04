import { AllCookieTypeKeys } from 'use-cookie-consent';
import { removeAllCookiesWithPrefix } from '../functions/dom';

interface ICookieType {
  label: string;
  type: AllCookieTypeKeys;
  acceptCallback?: () => void;
  rejectCallback?: () => void;
}

const cookieTypes: ICookieType[] = [
  {
    type: 'necessary',
    label: 'Essential',
  },
  {
    type: 'statistics',
    label: 'Analytics',
    acceptCallback: () => {
      window.gtag?.('consent', 'update', {
        ad_storage: 'granted',
        analytics_storage: 'granted',
      });
    },
    rejectCallback: () => {
      window.gtag?.('consent', 'update', {
        ad_storage: 'denied',
        analytics_storage: 'denied',
      });
      removeAllCookiesWithPrefix('_ga', process.env.NEXT_PUBLIC_GA_DOMAIN);
    },
  },
];

export default cookieTypes;
