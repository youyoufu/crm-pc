import { internalFetch } from '@/util/fetch';
import { stringifPath } from './index';
const refundListPATH = '/refundTask/taskList';

/* 挖宝任务*/
export function refundOrderPublic() {
  return internalFetch('POST')(true)(stringifPath(refundListPATH));
}
