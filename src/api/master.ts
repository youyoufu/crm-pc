import { internalFetch } from '@/util/fetch';
import { stringifPath } from './index';
import { getCookie } from '@/util/cookie';
import { TOKEN } from '@/util/session';
const PATH = '/manageUserInfo/resetUserTenDayByPhone';
const delPATH = '/manageUserInfo/deleteUserByPhone';
const addSellerPATH = '/manageSeller/addOrUpdateSeller';
const addSellerPayPATH = '/manageSeller/addOrUpdateSellerWeChatPay';
const uploadFilePATH = '/uploadImage/uploadFile';
const updateCheckTBKeyPATH = '/manageAdmin/updateCheckTBKey';

export function resetTenDay(phone: string) {
  return internalFetch('POST')(true)(stringifPath(PATH), {
    body: { phone }
  });
}
export function deleteUser(phone: string) {
  return internalFetch('POST')(true)(stringifPath(delPATH), {
    body: { phone }
  });
}
export interface addSellerInfo {
  name: string;
  account: string;
  phone: string;
  password: string;
  app_id: string;
  app_secret: string;
}

export interface addSellerPayInfo {
  mch_id: string;
  account: string;
  sign_key: string;
  key_url: string;
  cert_url: string;
  mp_verify_url: string;
}
export function addSellerPay(object: addSellerPayInfo) {
  return internalFetch('POST')(true)(stringifPath(addSellerPayPATH), {
    body: { object }
  });
}
export function addSeller(object: addSellerInfo) {
  return internalFetch('POST')(true)(stringifPath(addSellerPATH), {
    body: { object }
  });
}

export function updateCheckTBKey(taobao_key: string, taobao_key_backup: string) {
  return internalFetch('POST')(true)(stringifPath(updateCheckTBKeyPATH), {
    body: { taobao_key, taobao_key_backup }
  });
}

/*上传图片*/
export function setUploadFile(files: any) {
  let headers = new Headers();
  headers.set(TOKEN, getCookie(TOKEN));
  let formData = new FormData();
  formData.append('files', files);
  return fetch(stringifPath(uploadFilePATH), {
    headers,
    method: 'POST',
    body: formData
  }).then(response => response.json());
}
