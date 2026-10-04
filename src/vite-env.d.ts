/// <reference types="vite/client" />

/** Environment variable Vite untuk frontend SIPPA. */
interface ImportMetaEnv {
  /** Base URL REST API SIPPA, contoh: http://70.153.80.149/api */
  readonly VITE_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

