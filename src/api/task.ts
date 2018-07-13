import { get } from '@/util/fetch';
import { stringifPath } from './index';

const PATH = '/events';

export interface Filter {
  after?: number;
  before?: number;
  channels?: string;
  offset?: number;
  limit?: number;
}

/* 获取活动 */
export function getTaskList(options: Filter) {
  return _products;
  // return get(stringifPath(PATH), {
  //   body: { options }
  // });
}
const _products = [
  { id: '1', title: 'iPad 4 Mini', price: '500.01', inventory: '2' },
  { id: '2', title: 'H&M T-Shirt White', price: '10.99', inventory: '10' },
  { id: '3', title: 'Charli XCX - Sucker CD', price: '19.99', inventory: '5' }
];
export default {
  getProducts(cb: Function) {
    setTimeout(() => {
      cb(_products);
    }, 100);
  },
  buyProducts(products: Array<{}>, cb: Function, errorCb: Function) {
    setTimeout(() => {
      Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1 ? cb() : errorCb();
    }, 100);
  }
};
