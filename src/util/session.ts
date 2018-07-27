import { getCookie, setCookie, removeCookie } from './cookie';
export const TOKEN = 'my-store-token';

/* 检查是否登陆 */
export function hasLogin() {
  return !!getCookie(TOKEN);
}

/* 保持登陆态 */
export function saveLogin(token: string) {
  return setCookie(TOKEN, token);
}

/* 撤销 */
export function loginOut() {
  return removeCookie(TOKEN);
}
