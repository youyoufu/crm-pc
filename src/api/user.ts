import { get, internalFetch } from '@/util/fetch';
import { stringifPath } from './index';
import { hasLogin } from '@/util/session';
const PATH = '/user';
// manageUserInfo/findUserCntBySellerId 这个是查询数量的
// manageUserInfo/findUserPageBySellerId这个是分页数据查询的（参数:page 跟 page_size）

//    account COMMENT '淘宝账号',
//   `name` varchar(32) NOT NULL DEFAULT '' COMMENT '名称',
//   `phone` varchar(32) NOT NULL DEFAULT '' COMMENT '电话号码',
//   `free_task_time` int(11) NOT NULL DEFAULT '0' COMMENT '免单任务次数',
//   `refund_task_time` int(11) NOT NULL DEFAULT '0' COMMENT '挖宝次数',
//   `bonus_point` int(11) NOT NULL DEFAULT '0' COMMENT '积分',
//   `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '状态：1、有效 0、无效',
//   `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
export interface UserCntData {
  account: string;
  name: string;
  phone: string;
  free_task_time: string;
  refund_task_time: string;
  bonus_point: string;
  status: string;
  create_time: string;
}
const getRefundTaskOrderCountPath = '/manageUserInfo/findUserCntBySellerId';
const userListPath = '/manageUserInfo/findUserPageBySellerId';
export function getUserList(page: string) {
  return internalFetch('POST')(true)(stringifPath(userListPath), {
    body: { page, page_size: 20 }
  });
};
export function getUserCount() {
  return internalFetch('POST')(true)(stringifPath(getRefundTaskOrderCountPath));
}
const _user = {};

/* 获取用户信息 */
export function getUserInfo() {
  return hasLogin() ? get(stringifPath(PATH)) : Promise.resolve({});
}
/* 获取用户的喜欢和参与 */
// export function getUserActions(options: Filter) {
//   return get(stringifPath(`${PATH}/events`), {
//     body: { offset: 0, limit: 25, ...options },
//   });
// }
