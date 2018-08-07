export const API_PRE = 'http://www.niurouzhou.com';

/* 处理接口地址前缀 */
export function stringifPath(path: string) {
  return API_PRE+path;
}
