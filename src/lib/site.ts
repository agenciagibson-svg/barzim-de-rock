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

/**
 * WhatsApp de contato em formato internacional (E.164, só dígitos):
 * 55 = Brasil, 34 = DDD, 99710-7006.
 */
export const WHATSAPP = "5534997107006";

/** Link do WhatsApp com mensagem já preenchida. */
export function whatsappUrl(mensagem: string): string {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
}

/** Perfil oficial no Instagram. */
export const INSTAGRAM = "https://www.instagram.com/barzimderock/";
export const INSTAGRAM_HANDLE = "@barzimderock";
