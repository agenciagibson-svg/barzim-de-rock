# Barzim de Rock

Site oficial do Barzim de Rock / Dino Fonseca. Landing page com agenda de shows,
galeria, loja e vídeos das edições.

## Requisitos

- [Bun](https://bun.sh) 1.3 ou superior
- Node.js 22 ou superior

## Rodando localmente

```sh
bun install
bun run dev
```

O servidor sobe em `http://localhost:8080`.

## Scripts

| Comando | O que faz |
| --- | --- |
| `bun run dev` | servidor de desenvolvimento com HMR |
| `bun run build` | build de produção em `.output/` |
| `bun run preview` | serve o build de produção localmente |
| `bun run lint` | ESLint + Prettier |
| `bun run format` | aplica a formatação |

## Stack

- **[TanStack Start](https://tanstack.com/start)** — SSR e roteamento por arquivo
- **React 19** e **TypeScript**
- **Vite 8**
- **Tailwind CSS v4** — configuração CSS-first, sem `tailwind.config.js`
- **shadcn/ui** — primitivos de interface sobre Radix
- **Nitro** — build para Cloudflare Workers

## Estrutura

```
src/
├── routes/              rotas (file-based); __root.tsx é o shell da aplicação
│   └── index.tsx        home
├── components/
│   ├── barzim/          componentes próprios do site
│   └── ui/              shadcn/ui
├── lib/                 utilitários e tratamento de erro
├── assets/              imagens
├── styles.css           tokens de design e utilitários Tailwind
├── server.ts            entrada SSR com tratamento de erro
└── start.ts             middleware de request (erro + CSRF)
```

### Rotas

O roteamento é por arquivo. Cada `.tsx` em `src/routes/` vira uma rota —
`index.tsx` é `/`, `sobre.tsx` é `/sobre`, `shows/$id.tsx` é `/shows/:id`.
`src/routes/README.md` tem a tabela completa de convenções. `routeTree.gen.ts` é
gerado automaticamente; não edite à mão.

### Design system

As cores e utilitários vivem em `src/styles.css`, não em arquivo de configuração
JavaScript. A paleta usa oklch:

| Token | Uso |
| --- | --- |
| `ink` | preto/carvão, fundo dominante |
| `charcoal` | fundo de seções alternadas e cards |
| `ember` | laranja queimado, cor de destaque |
| `bone` | off-white, texto |

Utilitários próprios: `display` e `eyebrow` (tipografia), `grain` (textura),
`reveal` (entrada ao rolar), `btn-base` com `btn-ember`/`btn-ghost`, `hairline`.

Use sempre os tokens (`bg-ink`, `text-ember`) em vez de cores cruas.

## Conteúdo

Datas, locais, preços e produtos são **demonstrativos** enquanto o conteúdo
oficial não entra. As seções que exibem esses dados mostram um aviso ao
visitante através do componente `DemoTag`.

Os dados ficam em arrays tipados no topo de `src/routes/index.tsx` (`SHOWS`,
`REELS`, `PRODUTOS`, `GALERIA`), separados do markup de propósito: a agenda será
ligada a uma plataforma de ingressos e a loja a um CMS. Os espaços de vídeo estão
marcados com `data-video-slot` e prontos para receber os arquivos definitivos.

## Deploy

O build gera saída para **Cloudflare Workers**, incluindo `wrangler.json`:

```sh
bun run build
npx wrangler deploy
```

Para publicar em outra plataforma, troque o `preset` do Nitro em
`vite.config.ts` (`node-server`, `vercel`, `netlify`, entre outros).
