import { get, internalFetch } from '@/util/fetch';
import { stringifPath } from './index';
import { hasLogin } from '@/util/session';
const PATH = '/manageUserInfo/resetUserTenDayByPhone';
const delPATH = '/manageUserInfo/deleteUserByPhone';

export function resetTenDay(phone: string) {
  return internalFetch('POST')(true)(stringifPath(PATH), {
    body: { phone }
  });
};
export function deleteUser(phone: string) {
  return internalFetch('POST')(true)(stringifPath(delPATH), {
    body: { phone }
  });
};
