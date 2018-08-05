import { internalFetch } from '@/util/fetch';
import { stringifPath } from './index';

const submitMoneyPATH = '/sellerRefundOrder/batchRefund';
const getMoneyListPATH = '/sellerRefundOrder/findFreeOrderRefundList';
const getMoneyPagesPATH = '/sellerRefundOrder/findFreeOrderRefundCount';
/* 提交返款 */
export function submitMoney(order_no: string) {
  return internalFetch('POST')(true)(stringifPath(submitMoneyPATH), {
    body: { order_no }
  });
}

/* 获取返款列表 */
export function getMoneyList(batch_no: string) {
  return internalFetch('POST')(true)(stringifPath(getMoneyListPATH), {
    body: { batch_no }
  });
}
export function getMoneyPages(batch_no: string) {
  return internalFetch('POST')(true)(stringifPath(getMoneyPagesPATH), {
    body: { batch_no }
  });
}

export interface moneyList {
  success_num: string;
  fail_num: string;
  last_refund_num: string;
  refund_list: Array<
  {
    id: string;
    order_no: string;
    phone: string;
    open_id: string;
    amount: string;
    refund: string;
    refund_time: string;
    status: string;
  }>
}