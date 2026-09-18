import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

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
    // Alvo de deploy: Cloudflare Workers. Gera .output/server/wrangler.json.
    // Trocar de plataforma é trocar este preset (node-server, vercel, netlify…).
    nitro({
      config: {
        preset: "cloudflare_module",
        cloudflare: { wrangler: { name: "barzim-de-rock" } },
      },
    }),
  ],
});
