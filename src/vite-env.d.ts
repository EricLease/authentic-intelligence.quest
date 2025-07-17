/// <reference types="vite/client" />

interface ViteTypeOptions {
  strictImportMetaEnv: unknown;
}

interface ImportMetaEnv {
  readonly VITE_API_URL?: string | undefined;
  readonly VITE_API_PORT?: number | undefined;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
