import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

// Na Vercel, VERCEL_URL traz o dominio do deploy atual, inclusive dos
// deploys de preview. Sem isso as meta tags de compartilhamento apontariam
// para barzimderock.com.br antes desse dominio existir, e o preview do
// WhatsApp quebraria em todo ambiente que nao fosse producao.
if (!process.env.VITE_SITE_URL && process.env.VERCEL_URL) {
  process.env.VITE_SITE_URL = `https://${process.env.VERCEL_URL}`;
}

export default defineConfig({
  server: {
    port: 8080,
  },
  plugins: [
    // Resolve o alias "@/*" a partir do tsconfig.
    tsConfigPaths(),
    tailwindcss(),
    // `server.entry` aponta para src/server.ts, que embrulha o SSR com
    // tratamento de erro. O nitro constrói a partir dele.
    tanstackStart({
      server: { entry: "server" },
    }),
    // Precisa vir depois do tanstackStart.
    viteReact(),
    // Alvo de deploy: Vercel. Trocar de plataforma é trocar este preset
    // (cloudflare_module, node-server, netlify…).
    nitro({ config: { preset: "vercel" } }),
  ],
});
