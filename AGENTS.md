# Instruções para agentes

Leia isto antes de mexer no código. O `README.md` cobre stack, estrutura e como
rodar; aqui ficam só as regras que evitam erro.

## Não confunda o stack

- Roteamento é **file-based do TanStack Start**. Nunca crie `src/pages/`,
  `app/layout.tsx` ou qualquer convenção de Next.js/Remix. `src/routes/__root.tsx`
  é o único layout raiz e precisa manter o `<Outlet />`.
- `src/routeTree.gen.ts` é gerado. Não edite.
- Tailwind é **v4, CSS-first**. Toda configuração está em `src/styles.css`, em
  `@theme inline` e `@utility`. **Não existe `tailwind.config.js` e não se deve
  criar um.**
- `vite.config.ts` é explícito e a ordem dos plugins importa: `viteReact()` vem
  depois de `tanstackStart()`.

## Design system

Use os tokens (`bg-ink`, `text-bone`, `text-ember`, `border-ember/60`) e os
utilitários já definidos (`display`, `eyebrow`, `grain`, `reveal`, `btn-base`,
`btn-ember`, `btn-ghost`, `hairline`). Nunca escreva hex nem classes como
`text-orange-500`. Antes de criar componente novo, procure em
`src/components/ui/` — shadcn/ui já está instalado.

## Conteúdo

- Tudo em português do Brasil.
- Datas, locais, preços e produtos são demonstrativos. **Qualquer seção que
  exiba esses dados leva o componente `DemoTag`.** Não invente informação
  oficial.
- A logo em `src/components/barzim/Logo.tsx` é um placeholder tipográfico
  proposital, aguardando o arquivo oficial. Não crie uma marca nova.
- Mantenha os dados nos arrays tipados no topo de `src/routes/index.tsx`,
  separados do markup — eles vão ser ligados a CMS e plataforma de ingressos.
- Preserve os atributos `data-video-slot`.

## Acessibilidade e performance

O site é uma vitrine fotográfica e abre no celular, no 4G, na fila do show.

- `<img>` sempre com `width` e `height`. Abaixo da dobra, `loading="lazy"`.
- A primeira dobra não usa `<Reveal>`: ela é o LCP e precisa pintar junto com o
  HTML. Não envolva em `<Reveal>` nada que precise existir sem JS.
- Animação respeita `prefers-reduced-motion` — veja o utilitário `reveal` em
  `src/styles.css` como referência do padrão.
- Evite `transition-all`; liste as propriedades.
- Nada de `outline-none` sem um substituto de foco visível.

## Antes de terminar

Rode `bun run lint` e `bun run build`. Não faça commit nem push por conta
própria.
