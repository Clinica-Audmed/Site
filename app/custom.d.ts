// custom.d.ts
declare module 'js-cookie' {
    interface CookieAttributes {
      expires?: number | Date;
      [key: string]: any;
    }
  
    interface CookiesStatic {
      getJSON(COOKIE_NAME: string): unknown;
      get(key: string): string | undefined;
      set(key: string, value: string, options?: CookieAttributes): void;
      remove(key: string, options?: CookieAttributes): void;
    }
  
    const cookies: CookiesStatic;
    export = cookies;
  }
  