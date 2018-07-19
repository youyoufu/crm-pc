import { internalFetch, deletx } from '@/util/fetch';
import { stringifPath } from './index';

const PATH = '/seller/login';

export interface LoginInfo {
  account: string;
  password: string;
}

/* 登陆 */
export function loginAdmin({ account, password }: LoginInfo) {
  return internalFetch('POST')(true)(stringifPath(PATH), {
    body: { account, password }
  });
}

/* 退出 */
// export function loginOut() {
//   return deletx(stringifPath(PATH)).then(logout);
// }
