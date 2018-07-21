import { internalFetch } from '@/util/fetch';
import { stringifPath } from './index';
const UPLOADPATH = '/uploadImage/upload';
const refundOrderPublicPATH = '/taskOrder/refundOrderPublic';
const freeOrderPublicPATH = '/taskOrder/freeOrderPublic';
export const HourData: Array<{ time: string; val: string }> = [
  { time: '00点', val: '' },
  { time: '01点', val: '' },
  { time: '02点', val: '' },
  { time: '03点', val: '' },
  { time: '04点', val: '' },
  { time: '05点', val: '' },
  { time: '06点', val: '' },
  { time: '07点', val: '' },
  { time: '08点', val: '' },
  { time: '09点', val: '' },
  { time: '10点', val: '' },
  { time: '11点', val: '' },
  { time: '12点', val: '' },
  { time: '13点', val: '' },
  { time: '14点', val: '' },
  { time: '15点', val: '' },
  { time: '16点', val: '' },
  { time: '17点', val: '' },
  { time: '18点', val: '' },
  { time: '19点', val: '' },
  { time: '20点', val: '' },
  { time: '21点', val: '' },
  { time: '22点', val: '' },
  { time: '23点', val: '' }
];
export interface refundOrderPublicInfo {
  treasureId: string;
  keyword1: string;
  keywordRate1: string;
  keyword2: string;
  keywordRate2: string;
  keyword3: string;
  keywordRate3: string;
  executeTime: string;
  mainPictureUrl: string;
  verticalPictureUrl: string;
  time_range: string;
  require:string;
}
export interface freeOrderPublicInfo {
  title: string;
  amount: string;
  rate: string;
  goods: Array<{
    treasureId: string;
    keyword1: string;
    keywordRate1: string;
    keyword2: string;
    keywordRate2: string;
    keyword3: string;
    keywordRate3: string;
    sku: string;
    mainPictureUrl: string;
    verticalPictureUrl: string;
  }>;

  total: string;
  orderPictureUrl: string;
  executeTime: string;
  time_range: string;
}
/* 挖宝任务*/
export function refundOrderPublic(object: refundOrderPublicInfo) {
  return internalFetch('POST')(true)(stringifPath(refundOrderPublicPATH), {
    body: { object }
  });
}
/*免单任务*/
export function freeOrderPublic(object: freeOrderPublicInfo) {
  return internalFetch('POST')(true)(stringifPath(freeOrderPublicPATH), {
    body: { object }
  });
}
/*上传图片*/
export function setUploadImg(files: any) {
  fetch(stringifPath(UPLOADPATH), { method: 'POST', body: files[0] })
    .then((json: { url: string }) => {
      return json.url;
      // console.log('222222222', json);
    })
    .catch((err: {}) => {
      return 'err';
    });
}
