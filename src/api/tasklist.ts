import { internalFetch } from '@/util/fetch';
import { stringifPath } from './index';
const refundListPATH = '/manageTaskOrder/findRefundTaskList';
const orderListPath = '/manageTaskOrder/findTaskOrderList';
const freeListPath = '/manageTaskOrder/findFreeTaskList';
const auditFreeOrderPath = '/manageTaskOrder/auditFreeTaskOrder';
const pagetotalPath = '/manageTaskOrder/findTableCount';

/* 挖宝活动*/
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
  title: string;
  gift: string;
  content: string;
  extra_gift: string;
  create_time: string;
  refund:string;
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
  extra_gift: string;
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
/*免单列表详情*/
// manageTaskOrderDetail/getFreeTaskOrderCount 查询总数量
// manageTaskOrderDetail/findFreeTaskOrderDetailPage 查询分页数据 （参数:page 跟 page_size）
//    account COMMENT '淘宝账号',
//   `check_first_url` varchar(1024) NOT NULL DEFAULT '' COMMENT '校验第一张图URL',
//   `check_second_url` varchar(1024) NOT NULL DEFAULT '' COMMENT '校验第二张图URL',
//   `task_id` int(11) NOT NULL DEFAULT '0' COMMENT '任务ID',
//   `task_no` varchar(64) NOT NULL DEFAULT '' COMMENT '任务编号',
//   `url` varchar(1024) NOT NULL DEFAULT '' COMMENT '任务图片URL',
//   `amount` int(11) NOT NULL DEFAULT '0' COMMENT '订单金额',
//   `order_no` varchar(64) NOT NULL DEFAULT '' COMMENT '订单号',
//   `refund` decimal(14,2) NOT NULL DEFAULT '0.00' COMMENT '返款金额',
//   `bonus_point` int(11) NOT NULL DEFAULT '0' COMMENT '积分',
//   `execute_time` date NOT NULL COMMENT '执行时间',
//   `order_pic_url` varchar(1024) NOT NULL DEFAULT '' COMMENT '订单图片URL',
//   `wechat_code_url` varchar(1024) NOT NULL DEFAULT '' COMMENT '微信收款码图片',
//   `status` smallint(1) NOT NULL DEFAULT '0' COMMENT '任务状态 0、领取任务 1、淘口令验证成功 2、提交订单 3、审核失败 4、审核成功 5、返款 ',
//   `title` varchar(128) NOT NULL DEFAULT '' COMMENT '任务标题',
//   `gift` varchar(1024) NOT NULL DEFAULT '' COMMENT '任务赠品',
//   `content` varchar(1024) NOT NULL DEFAULT '' COMMENT '任务说明',
//   `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间'
export interface TaskOrderDetailData {
  account: string;
  check_first_url: string;
  check_second_url: string;
  task_id: string;
  task_no: string;
  url: string;
  amount: string;
  order_no: string;
  refund: string;
  bonus_point: string;
  execute_time: string;
  order_pic_url: string;
  wechat_code_url: string;
  status: string;
  title: string;
  gift: string;
  content: string;
  extra_gift: string;
  create_time: string;
}
const getFreeTaskOrderCountPath = '/manageTaskOrderDetail/getFreeTaskOrderCount';
const TaskOrderDetailPath = '/manageTaskOrderDetail/findFreeTaskOrderDetailPage';
export function TaskOrderDetail(page: string) {
  return internalFetch('POST')(true)(stringifPath(TaskOrderDetailPath), {
    body: { page, page_size: 20 }
  });
};
export function getFreeTaskOrderCount() {
  return internalFetch('POST')(true)(stringifPath(getFreeTaskOrderCountPath));
}
// 挖宝详情列表：
// manageTaskOrderDetail/getRefundTaskOrderCount 查询总数量
// manageTaskOrderDetail/findRefundTaskOrderDetailPage 查询分页数据 （参数:page 跟 page_size）

//   `title` varchar(256) NOT NULL DEFAULT '' COMMENT '任务标题',
//   `task_no` varchar(64) NOT NULL DEFAULT '' COMMENT '任务编号',
//   `url` varchar(1024) NOT NULL DEFAULT '' COMMENT '任务图片URL',
//   `refund` int(11) NOT NULL DEFAULT '0' COMMENT '返现金额',
//   `content` varchar(512) NOT NULL DEFAULT '' COMMENT '任务要求',
//   `status` smallint(1) NOT NULL DEFAULT '0' COMMENT '状态：0、领取任务，1、挖宝成功 2、挖宝失败',
//   `bonus_point` int(11) NOT NULL DEFAULT '0' COMMENT '积分',
//    account 淘宝账号
//    square_url 方图
//    long_url   长图
//    keyword  关键字
//   `execute_time` date NOT NULL COMMENT '执行时间',
//   `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间'
export interface RefundTaskOrderDetailData {
  account: string;
  square_url: string;
  long_url: string;
  task_id: string;
  task_no: string;
  url: string;
  amount: string;
  order_no: string;
  refund: string;
  bonus_point: string;
  execute_time: string;
  status: string;
  keyword: string;
}
const getRefundTaskOrderCountPath = '/manageTaskOrderDetail/getRefundTaskOrderCount';
const RefundTaskOrderDetailPage = '/manageTaskOrderDetail/findRefundTaskOrderDetailPage';
export function RefundTaskOrderDetail(page: string) {
  return internalFetch('POST')(true)(stringifPath(RefundTaskOrderDetailPage), {
    body: { page, page_size: 20 }
  });
};
export function getRefundTaskOrderCount() {
  return internalFetch('POST')(true)(stringifPath(getRefundTaskOrderCountPath));
}