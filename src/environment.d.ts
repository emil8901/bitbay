declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_WS_PATH: string;
    }
  }
}

export {};
