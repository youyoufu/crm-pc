export const API_PRE = 'http://192.168.1.5/public/index.php';

/* 处理接口地址前缀 */
export function stringifPath(path: string) {
  return API_PRE+path;
}
