/* fetch api  */

import { getCookie, removeCookie } from '@/util/cookie';
import { TOKEN } from '@/util/session';

interface FetchParams {
  body?: { [key: string]: any };
  headers?: Headers;
}

const parseJSON = (res: Response) => {
  return res.json();
};
interface ResData {
  status: string;
  data: {};
  info: string;
}
interface HGError extends Error {
  origin: Readonly<ResData>;
}
/* 自定义会过错误对象 */
class HGError extends Error {
  constructor(r: ResData) {
    super(r.info);
    this.name = r.status;
    this.origin = r;
  }
}

const checkCode = (res: ResData) => {
  if (res.status === '1000') {
    return res.data;
  } else if (res.status === '3001') {
    removeCookie(TOKEN);
    return (window.location.href = '/login');
  } else {
    throw res;
  }
};
const checkStatus = (res: Response) => {
  if (res.status >= 200 && res.status < 300) {
    return res;
  } else {
    throw new Error(`${res.status}:${res.statusText}`);
  }
};

export function internalFetch(type: 'GET' | 'POST' | 'DELETE') {
  return (isGetToken: boolean = false) => {
    return (path: string, options: FetchParams = {}) => {
      let { headers, body } = options;
      headers = headers instanceof Headers ? headers : new Headers();
      if (!isGetToken) {
        headers.set(TOKEN, getCookie(TOKEN));
      }
      let stringifyBody;
      if (body) {
        headers.set('Content-Type', 'application/json');
        let keys = Object.keys(body);
        if (type === 'GET') {
          stringifyBody = keys.map(v => `${v}=${(body as { [key: string]: string })[v]}`).join('&');
          path = path + '?' + stringifyBody;
          stringifyBody = null;
        } else {
          stringifyBody = JSON.stringify(body);
        }
      }
      return fetch(path, {
        headers,
        method: type,
        body: stringifyBody
      })
        .then(checkStatus)
        .then(parseJSON)
        .then(checkCode)
    };
  };
}

const get = internalFetch('GET')();
const post = internalFetch('POST')();
const deletx = internalFetch('DELETE')();

export { get, post, deletx };
