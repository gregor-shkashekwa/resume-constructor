// vk.d.ts
// прикрутил еще один модуль
declare global {
  interface Window {
    VK: {
      WebApp: {
        DownloadFile: (blob: Blob, filename: string) => void;
      };
    };
  }
}

export {};