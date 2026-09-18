/**
 * URL canônica do site.
 *
 * WhatsApp, Facebook, Instagram e X só geram preview a partir de URL
 * absoluta — caminho relativo em og:image é ignorado e o link sai sem
 * imagem. Por isso tudo que vai para meta tag passa por aqui.
 *
 * Em produção, defina VITE_SITE_URL no ambiente de build. O valor abaixo é
 * só o fallback de desenvolvimento.
 */
export const SITE_URL = (import.meta.env.VITE_SITE_URL ?? "https://barzimderock.com.br").replace(
  /\/+$/,
  "",
);

/** Monta uma URL absoluta a partir de um caminho do site. */
export function absoluteUrl(path: string): string {
  return `${SITE_URL}/${path.replace(/^\/+/, "")}`;
}
