import { internalFetch, deletx } from '@/util/fetch';
import { saveLogin, loginOut as logout } from '@/util/session';
import { stringifPath } from './index';

const PATH = '/login/connect';

export interface LoginInfo {
  username: string;
  otherid: string;
  type: string;
}

/* 登陆 */
export function login({ username, otherid, type }: LoginInfo) {
  return internalFetch('POST')(true)(stringifPath(PATH), {
    body: { username, otherid, type }
  });
}

/* 退出 */
export function loginOut() {
  return deletx(stringifPath(PATH)).then(logout);
}
