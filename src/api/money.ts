import { internalFetch } from '@/util/fetch';
import { stringifPath } from './index';

const submitMoneyPATH = '/seller/login';

export interface LoginInfo {
  account: string;
  password: string;
}

/* 登陆 */
export function loginAdmin(account: string, password: string) {
  return internalFetch('POST')(true)(stringifPath(submitMoneyPATH), {
    body: { account, password }
  });
}
