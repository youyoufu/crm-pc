import { internalFetch } from '@/util/fetch';
import { stringifPath } from './index';
import { getCookie } from '@/util/cookie';
import { TOKEN } from '@/util/session';
const UPLOADPATH = '/uploadImage/upload';
const refundOrderPublicPATH = '/refundTask/publish';
const freeEditPATH = '/manageTaskOrder/getFreeTaskById';
const refundEditPATH = '/manageTaskOrder/getRefundTaskById';
const freeOrderPublicPATH = '/freeTask/publish';
export const HourData: Array<{ time: string; val: string }> = [
  { time: '00点', val: '1' },
  { time: '01点', val: '1' },
  { time: '02点', val: '1' },
  { time: '03点', val: '1' },
  { time: '04点', val: '1' },
  { time: '05点', val: '1' },
  { time: '06点', val: '1' },
  { time: '07点', val: '1' },
  { time: '08点', val: '2' },
  { time: '09点', val: '2' },
  { time: '10点', val: '2' },
  { time: '11点', val: '2' },
  { time: '12点', val: '2' },
  { time: '13点', val: '2' },
  { time: '14点', val: '2' },
  { time: '15点', val: '2' },
  { time: '16点', val: '2' },
  { time: '17点', val: '2' },
  { time: '18点', val: '2' },
  { time: '19点', val: '2' },
  { time: '20点', val: '2' },
  { time: '21点', val: '2' },
  { time: '22点', val: '2' },
  { time: '23点', val: '2' }
];
export interface refundOrderPublicInfo {
  title:string;
  treasureId: string;
  keyword1: string;
  keywordRate1: string;
  keyword2: string;
  keywordRate2: string;
  keyword3: string;
  keywordRate3: string;
  keyword4: string;
  keywordRate4: string;
  keyword5: string;
  keywordRate5: string;
  keyword6: string;
  keywordRate6: string;
  executeTime: string;
  mainPictureUrl: string;
  verticalPictureUrl: string;
  time_range: string;
  require: string;
}
export interface freeOrderPublicInfo {
  title: string;
  amount: string;
  rate: string;
  gift: string;
  extra_gift: string;
  sex:string;
  content: string;
  goods: Array<{
    treasureId: string;
    keyword1: string;
    keywordRate1: string;
    keyword2: string;
    keywordRate2: string;
    keyword3: string;
    keywordRate3: string;
    keyword4: string;
    keywordRate4: string;
    keyword5: string;
    keywordRate5: string;
    keyword6: string;
    keywordRate6: string;
    sku: string;
    mainPictureUrl: string;
    verticalPictureUrl: string;
  }>;

  total: string;
  orderPictureUrl: string;
  executeTime: string;
  time_range: string;
}
/* 挖宝活动*/
export function refundOrderPublic(object: refundOrderPublicInfo, id: string) {
  return internalFetch('POST')(true)(stringifPath(refundOrderPublicPATH), {
    body: { ...object,id }
  });
}
/*通过ID获取挖宝详情*/
export function refundOrderDeatilPublic(id: string) {
  return internalFetch('POST')(true)(stringifPath(refundEditPATH), {
    body: { id }
  });
}
/*免单活动*/
export function freeOrderPublic(object: freeOrderPublicInfo, id: string) {
  return internalFetch('POST')(true)(stringifPath(freeOrderPublicPATH), {
    body: { ...object, id }
  });
}
/*通过ID获取免单详情*/
export function freeOrderDeatilPublic(id: string) {
  return internalFetch('POST')(true)(stringifPath(freeEditPATH), {
    body: { id }
  });
}
/*上传图片*/
export function setUploadImg(files: any) {
  let headers = new Headers();
    headers.set(TOKEN, getCookie(TOKEN));

  let formData = new FormData();
  formData.append('files', files);
  return fetch(stringifPath(UPLOADPATH), {
    headers,
    method: 'POST',
    body: formData
  }).then(response => response.json());
}
