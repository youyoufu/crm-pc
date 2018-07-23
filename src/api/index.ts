export const API_PRE = 'http://134.175.2.105';

/* 处理接口地址前缀 */
export function stringifPath(path: string) {
  return API_PRE+path;
}
