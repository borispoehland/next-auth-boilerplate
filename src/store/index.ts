import { atom } from 'recoil';

export const sIsCookieWindowOpen = atom<boolean>({
  key: 'isCookieWindowOpen',
  default: false,
});
