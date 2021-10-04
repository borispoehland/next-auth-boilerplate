import Modal from '../../ui-components/Modal';
import { BiCookie } from 'react-icons/bi';
import CookieWindowText from './CookieWindowText';
import CookieWindowActions from './CookieWindowActions';
import { SetterOrUpdater, useRecoilValue, useSetRecoilState } from 'recoil';
import { sIsCookieWindowOpen } from '../../../store';
import { CookieConsent, useCookieConsent } from 'use-cookie-consent';
import { useEffect } from 'react';
import cookieTypes from '../../../data/cookieTypes';

export const hasUserConsented = (consent: CookieConsent) =>
  Object.keys(consent).length;

const useOpenCookieWindowWhenConsentNotSet = (
  consent: CookieConsent,
  setIsOpen: SetterOrUpdater<boolean>
) => {
  useEffect(() => {
    if (!hasUserConsented(consent)) {
      setIsOpen(true);
    }
  }, [consent, setIsOpen]);
};

const CookieWindow = (): JSX.Element => {
  const isOpen = useRecoilValue(sIsCookieWindowOpen);

  const cookieConsent = useCookieConsent({
    consentCookieAttributes: { expires: 365, sameSite: 'lax' },
  });

  const setIsOpen = useSetRecoilState(sIsCookieWindowOpen);

  useOpenCookieWindowWhenConsentNotSet(cookieConsent.consent, setIsOpen);

  useEffect(() => {
    const { consent } = cookieConsent;
    Object.keys(consent).forEach((type) => {
      const cookieType = cookieTypes.find(
        (cookieType) => cookieType.type === type
      );
      if (consent[type]) {
        cookieType?.acceptCallback?.();
      } else {
        cookieType?.rejectCallback?.();
      }
    });
  }, [cookieConsent]);

  return (
    <Modal
      text={<CookieWindowText />}
      buttonBar={<CookieWindowActions {...cookieConsent} />}
      icon={{
        icon: BiCookie,
        classNames: 'text-primary-500',
      }}
      isOpen={isOpen}
    />
  );
};

export default CookieWindow;
