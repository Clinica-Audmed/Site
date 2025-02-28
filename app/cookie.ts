// cookie.ts
import Cookies from 'js-cookie';

const COOKIE_NAME = 'clinicaCookie';

export const setUserDataCookie = (userData: any) => {
  Cookies.set(COOKIE_NAME, JSON.stringify(userData), { expires: 365 }); // Expira em 365 dias
};

export const getUserDataCookie = (): any | undefined => {
  const cookieValue = Cookies.get(COOKIE_NAME);
  return cookieValue ? JSON.parse(cookieValue) : undefined;
};

export const removeUserDataCookie = () => {
  Cookies.remove(COOKIE_NAME);
};
