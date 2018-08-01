import { internalFetch } from '@/util/fetch';
import { stringifPath } from './index';
const refundListPATH = '/manageTaskOrder/findRefundTaskList';
const orderListPath = '/manageTaskOrder/findTaskOrderList';
const freeListPath = '/manageTaskOrder/findFreeTaskList';
const auditFreeOrderPath = '/manageTaskOrder/auditFreeTaskOrder';
const pagetotalPath = '/manageTaskOrder/findTableCount';

/* 挖宝任务*/
export function refundOrderList(page: string) {
  return internalFetch('POST')(true)(stringifPath(refundListPATH), {
    body: { page, page_size: 20 }
  })
}
export interface orderListData {
  id: string;
  task_no: string;
  account: string;
  order_no: string;
  check_first_url: string;
  check_second_url: string;
  status: string;
  order_pic_url: string;
  wechat_code_url: string;
  is_refund: string;
}

export interface freeListData {
  id: string;
  title: string;
  amount: string;
  refund_rate: string;
  url: string;
  total: string;
  execute_time: string;
  gift: string;
}
export function getOrderList(page: string) {
  return internalFetch('POST')(true)(stringifPath(orderListPath), {
    body: { page, page_size: 20 }
  });
}
export function getFreeList(page: string) {
  return internalFetch('POST')(true)(stringifPath(freeListPath), {
    body: { page, page_size: 20 }
  });
}
export function getPageTotal(type: string) {
  return internalFetch('POST')(true)(stringifPath(pagetotalPath), {
    body: { type }
  });
}
export function setAuditFreeOrder(taskOrderId: string, status: string) {
  return internalFetch('POST')(true)(stringifPath(auditFreeOrderPath), {
    body: { taskOrderId, status }
  });
}
