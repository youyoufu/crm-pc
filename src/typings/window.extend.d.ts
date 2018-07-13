declare global {
  interface Document {
    readonly attachEvent: (e: string, cb: () => void) => void;
  }
  interface Window {
    addEventListener<K extends keyof WindowEventMap>(
      type: K,
      listener: (this: Window, ev: WindowEventMap[K]) => any,
      options?: boolean | { capture?: boolean; once?: boolean; passive?: boolean }
    ): void;
    readonly webviewClickListener: {
      setShareBtnVisible: (b: boolean) => void;
      setShareContent: (
        shareUrl: string,
        shareTitle: string,
        shareContent: string,
        shareImgUrl: string,
        platforms: string,
        wxImgUrl: string
      ) => void;
    };
    readonly hotcss: {
      px2rem: (px: number, designWidth?: number) => number;
      rem2px: (rem: number, designWidth?: number) => number;
      isAndroid: boolean;
      isIPhone: boolean;
      dpr: number;
    };
    readonly hgjsfunction: {
      setJsContent: (funName: string, funParam?: string) => void;
      jsAppPayCheck: (param: string) => void;
    };
    readonly Image: () => void;
    onHGAction: (eventName: string, data: any) => void;
    jsAppPayCheckCallback: (res: boolean) => any;
    readonly WeixinJSBridge: {
      invoke: (
        type: string,
        config: {
          appId: string;
          timeStamp: string;
          nonceStr: string;
          package: string;
          signType: string;
          paySign: string;
        },
        success: (res: { err_msg?: string }) => void
      ) => void;
    };
    readonly wx: {

      config: (opt) => void;
      uploadImage: (data) => void;
      chooseImage: (data) => void;
    };
    readonly webkit: {
      messageHandlers: {
        setJsContent: {
          postMessage: (s: string) => void;
        };
        jsAppPayCheck: {
          postMessage: (param: string) => void;
        };
      };
    };
  }
}

export default Window;
