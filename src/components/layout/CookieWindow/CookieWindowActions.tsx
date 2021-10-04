import { useEffect, useState } from 'react';
import cookieTypes from '../../../data/cookieTypes';
import Switch from '../../ui-components/Switch';
import Spacer from '../../ui-components/Spacer';
import Link from '../../ui-components/Link';
import Button from '../../ui-components/Button';
import { AllCookieTypeKeys, CookieConsentHookState } from 'use-cookie-consent';
import { useSetRecoilState } from 'recoil';
import { sIsCookieWindowOpen } from '../../../store';
import { hasUserConsented } from './index';

type IProps = Pick<
  CookieConsentHookState,
  'acceptAllCookies' | 'acceptCookies' | 'consent'
>;

const isNecessary = (type: AllCookieTypeKeys) => type === 'necessary';

const defaultConsent = cookieTypes.reduce((consent, { type }) => {
  consent[type] = isNecessary(type);
  return consent;
}, {});

const CookieWindowActions = ({
  acceptAllCookies,
  acceptCookies,
  consent,
}: IProps): JSX.Element => {
  const setIsOpen = useSetRecoilState(sIsCookieWindowOpen);

  const [acceptedCookies, setAcceptedCookies] = useState(
    hasUserConsented(consent) ? consent : defaultConsent
  );

  return (
    <div className="w-full flex flex-col items-end">
      <div className="self-start flex flex-col gap-2 sm:flex-row sm:gap-5">
        {cookieTypes.map(({ type, label, acceptCallback }) => {
          return (
            <div key={type} className="flex gap-1 items-center">
              <p className="text-sm w-16">{label}:</p>
              <Switch
                disabled={isNecessary(type)}
                icon={null}
                isOn={acceptedCookies[type]}
                onToggle={() => {
                  setAcceptedCookies((prevState) => ({
                    ...prevState,
                    [type]: !prevState[type],
                  }));
                }}
              />
            </div>
          );
        })}
      </div>
      <Spacer />
      <div className="flex gap-4">
        <Link
          action={() => {
            acceptCookies(acceptedCookies);
            setIsOpen(false);
          }}
        >
          Save
        </Link>
        <Button
          action={() => {
            acceptAllCookies();
            setIsOpen(false);
          }}
        >
          Accept all
        </Button>
      </div>
    </div>
  );
};

export default CookieWindowActions;
