import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/barzim/Header";
import { Logo } from "@/components/barzim/Logo";
import { Reveal } from "@/components/barzim/Reveal";
import { VideoVertical } from "@/components/barzim/VideoVertical";
import { INSTAGRAM, INSTAGRAM_HANDLE, whatsappUrl } from "@/lib/site";

import { CREDITO_FOTOS, foto } from "@/lib/fotos";

import prodCamiseta from "@/assets/prod-camiseta.jpg";
import prodBone from "@/assets/prod-bone.jpg";
import prodCopo from "@/assets/prod-copo.jpg";
import prodPoster from "@/assets/prod-poster.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Barzim de Rock — Dino Fonseca | Site oficial" },
      {
        name: "description",
        content: "O boteco do Dino, do jeito que o rock merece. Agenda, momentos e a Barzim Store.",
      },
      { property: "og:title", content: "Barzim de Rock — Dino Fonseca" },
      {
        property: "og:description",
        content: "Uma noite. Grandes clássicos. Milhares de vozes.",
      },
    ],
  }),
  component: Home,
});

/* ---------------------------------------------------------------------------
 * Dados demonstrativos.
 * Estrutura pronta para receber CMS / plataforma de ingressos no futuro.
 * ------------------------------------------------------------------------- */

type Show = {
  id: string;
  cidade: string;
  uf: string;
  data: string;
  diaSemana: string;
  local: string;
  status: "À venda" | "Últimos ingressos" | "Em breve";
  ticketUrl: string | null;
};

const SHOWS: Show[] = [
  {
    id: "demo-1",
    cidade: "Vila Aurora",
    uf: "SP",
    data: "12 ABR",
    diaSemana: "Sábado",
    local: "Galpão Estação Velha (local demonstrativo)",
    status: "À venda",
    ticketUrl: null,
  },
  {
    id: "demo-2",
    cidade: "Porto Serrano",
    uf: "MG",
    data: "03 MAI",
    diaSemana: "Sexta",
    local: "Pátio da Fundição (local demonstrativo)",
    status: "Últimos ingressos",
    ticketUrl: null,
  },
  {
    id: "demo-3",
    cidade: "Rio Claro do Sul",
    uf: "PR",
    data: "24 MAI",
    diaSemana: "Sábado",
    local: "Arena Beira-Trilho (local demonstrativo)",
    status: "Em breve",
    ticketUrl: null,
  },
];

/* --------------------------------------------------------------- FOTOS ---
 * Texto alternativo conforme MEDIA-MANIFEST.md. Fotos do Espaço Unimed,
 * por Marcos Oliveira.
 * ------------------------------------------------------------------------ */

const FOTO_HERO = foto(
  "plateia-luz-ambar",
  "Mar de cabeças da plateia banhado por luz âmbar quente, com o palco pequeno ao fundo em vermelho e os telões mostrando Dino com a guitarra vermelha.",
);

const FOTO_PALCO = foto(
  "palco-vermelho-dino-bracos-abertos",
  'Dino de braços abertos ao centro do palco com a guitarra, sob luz vermelha intensa, com o letreiro "DINO BARZIM DE ROCK" ocupando todo o cenário de bar ao fundo.',
);

/**
 * Momentos. Os três verticais são uma sequência real da mesma noite, por
 * isso a ordem importa. Ficam como `<video>` próprio em vez de embed do
 * Instagram: controle do visual, nenhum script de terceiro e nenhum
 * rastreamento a reboque.
 */
const MOMENTOS = [
  {
    id: "reel-show-luzes-azuis",
    video: "/videos/reel-show-luzes-azuis.mp4",
    poster: "/videos/reel-show-luzes-azuis-poster.webp",
    legenda: "O palco em luz quente",
    descricao: "Dino em close com a guitarra, sob luz vermelha",
  },
  {
    id: "reel-plateia-lotada",
    video: "/videos/reel-plateia-lotada.mp4",
    poster: "/videos/reel-plateia-lotada-poster.webp",
    legenda: "O coro que não para",
    descricao: "Vocalista de costas, braço estendido para a plateia lotada",
  },
  {
    id: "reel-aftermovie-publico",
    video: "/videos/reel-aftermovie-publico.mp4",
    poster: "/videos/reel-aftermovie-publico-poster.webp",
    legenda: "Do outro lado do palco",
    descricao: "Guitarrista de óculos escuros com Telecaster creme, sob luz roxa",
  },
];

const PRODUTOS = [
  { nome: "Camiseta Barzim Clássica", img: prodCamiseta, preco: "R$ 129,00" },
  { nome: "Boné Barzim Ember", img: prodBone, preco: "R$ 99,00" },
  { nome: "Copo Barzim 500ml", img: prodCopo, preco: "R$ 69,00" },
  { nome: "Pôster Turnê (Série Demo)", img: prodPoster, preco: "R$ 79,00" },
];

/**
 * Colunas do rodapé. Os contatos caem no WhatsApp com a mensagem já escrita,
 * o que identifica de onde veio cada conversa. O que ainda não tem destino
 * próprio aponta para a seção correspondente da página — nenhum link morre
 * em "#topo".
 */
const COLUNAS_RODAPE = [
  {
    titulo: "Navegue",
    links: [
      { label: "O Barzim", href: "#o-barzim" },
      { label: "Momentos", href: "#momentos" },
      { label: "Agenda", href: "#agenda" },
      { label: "Loja", href: "#loja" },
      { label: "Galeria", href: "#galeria" },
    ],
  },
  {
    titulo: "Produção",
    links: [
      { label: "Sobre o projeto", href: "#o-barzim" },
      {
        label: "Rider técnico",
        href: whatsappUrl("Olá! Gostaria de receber o rider técnico do Barzim de Rock."),
      },
      {
        label: "Trabalhe conosco",
        href: whatsappUrl("Olá! Gostaria de falar sobre trabalhar com o Barzim de Rock."),
      },
    ],
  },
  {
    titulo: "Contato",
    links: [
      {
        label: "Imprensa",
        href: whatsappUrl("Olá! Sou da imprensa e gostaria de falar sobre o Barzim de Rock."),
      },
      {
        label: "Contratação",
        href: whatsappUrl("Olá! Gostaria de contratar o Barzim de Rock para um evento."),
      },
      {
        label: "Parcerias",
        href: whatsappUrl("Olá! Gostaria de propor uma parceria com o Barzim de Rock."),
      },
    ],
  },
];

/** Redes com perfil de verdade. Adicione aqui quando houver YouTube, TikTok
 *  ou Spotify — link que mente sobre o destino é pior que link ausente. */
const REDES = [
  { label: "Instagram", href: INSTAGRAM },
  { label: "WhatsApp", href: whatsappUrl("Olá! Vim pelo site do Barzim de Rock.") },
];

const GALERIA = [
  foto(
    "show-palco-logo-verde-vermelho",
    'Palco visto de frente com o letreiro "DINO BARZIM DE ROCK" aceso em vermelho e verde sobre um cenário de bar; a banda toca em silhueta e a plateia lotada aparece em primeiro plano.',
  ),
  foto(
    "plateia-vista-geral-telao",
    "Vista do fundo da casa: o palco ao longe entre dois telões que exibem Dino de guitarra, com feixes de luz amarela se abrindo sobre um auditório completamente cheio.",
  ),
  foto(
    "dino-cantando-feixes-brancos",
    'Dino canta ao microfone com uma guitarra sunburst no centro do palco, cercado por feixes brancos e fumaça, com o letreiro "BARZIM DE ROCK" à esquerda e o público em silhueta embaixo.',
  ),
  foto(
    "plateia-holofote-estrela",
    "Plateia sentada às mesas sob um holofote branco que estoura em forma de estrela, com refletores vermelhos no teto e Dino de jaqueta brilhante nos telões laterais.",
  ),
  foto(
    "palco-vermelho-banda-completa",
    "Palco inteiro lavado de vermelho com a banda completa — baixo, teclado, bateria e guitarras — e Dino cantando ao centro diante do cenário de bar.",
  ),
  foto(
    "dino-chapeu-plateia-celulares",
    "Vocalista de chapéu preto aponta para a plateia ao lado de um segundo cantor com violão, sob feixes brancos, enquanto o público ergue os celulares para filmar.",
  ),
  foto(
    "plateia-feixes-brancos",
    "Auditório lotado de mesas visto do fundo, sob feixes brancos e azuis cruzando a fumaça; nos telões laterais Dino canta ao microfone.",
  ),
];

/* ------------------------------------------------------------------------ */

function Play({ big = false }: { big?: boolean }) {
  return (
    <span
      className={`grid place-items-center rounded-full border border-bone/60 bg-ink/40 backdrop-blur-sm transition-all duration-300 group-hover:border-ember group-hover:bg-ember ${
        big ? "h-20 w-20 sm:h-28 sm:w-28" : "h-14 w-14"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={`translate-x-[2px] fill-bone transition-colors group-hover:fill-ink ${big ? "h-8 w-8 sm:h-10 sm:w-10" : "h-5 w-5"}`}
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  );
}

function DemoTag({ className = "" }: { className?: string }) {
  return (
    <p className={`text-sm leading-relaxed text-ash/80 ${className}`}>
      Conteúdo demonstrativo — datas, locais, preços e produtos são fictícios e servem apenas para
      visualização do protótipo.
    </p>
  );
}

function SectionTitle({
  eyebrow,
  children,
  destaque = false,
}: {
  eyebrow: string;
  children: React.ReactNode;
  destaque?: boolean;
}) {
  return (
    <div>
      <p className="eyebrow">{eyebrow}</p>
      <h2
        className={`display mt-5 ${
          destaque ? "titulo-secao-destaque max-w-[9ch]" : "titulo-secao max-w-[11ch]"
        }`}
      >
        {children}
      </h2>
    </div>
  );
}

function Home() {
  return (
    <div id="topo" className="bg-ink text-bone">
      <Header />

      {/* ---------------------------------------------------------- HERO */}
      <section className="grain relative min-h-[100svh] overflow-hidden">
        <img
          src={FOTO_HERO.src}
          srcSet={FOTO_HERO.srcSet}
          sizes="100vw"
          alt={FOTO_HERO.alt}
          width={FOTO_HERO.width}
          height={FOTO_HERO.height}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Chapa única em vez do gradiente de três paradas que existia aqui:
            aquele comia a plateia inteira, que é justamente o assunto da
            foto. Esta escurece só o suficiente para o texto. */}
        <div className="absolute inset-0 bg-ink/45" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink to-transparent" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-[min(92vw,2200px)] flex-col justify-end px-5 pb-14 pt-32 md:px-10 md:pb-20">
          {/* Primeira dobra sem <Reveal>: é o LCP da página e o primeiro
              contato com a marca. Aparece pronta, não animada. */}
          <p className="eyebrow">Site oficial · Dino Fonseca</p>

          <h1 className="display titulo-hero mt-6">
            O boteco do Dino.
            <span className="block text-ember">Do jeito que o rock merece.</span>
          </h1>

          <p className="lead mt-8 max-w-[45ch] text-bone/80">
            Uma noite. Grandes clássicos. Milhares de vozes.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#agenda" className="btn-base btn-ember">
              Próximo Barzim
            </a>
            <a href="#momentos" className="btn-base btn-ghost">
              Ver uma noite de barzim
            </a>
          </div>

          {/* Próxima edição */}
          <Reveal delay={400}>
            <div className="mt-16 max-w-4xl border-t border-white/15 pt-8">
              <div className="grid gap-6 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-10">
                <div>
                  <p className="eyebrow">Próxima edição</p>
                  <p className="display numeral mt-3">
                    12 <span className="text-ember">ABR</span>
                  </p>
                </div>
                <div className="min-w-0">
                  <p className="display titulo-bloco">Vila Aurora · SP</p>
                  <p className="mt-2 truncate text-base text-ash">
                    Galpão Estação Velha · Sábado, 21h
                  </p>
                </div>
                <a href="#agenda" className="btn-base btn-ghost">
                  Ver agenda
                </a>
              </div>
              <DemoTag className="mt-5" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------ O BARZIM */}
      {/* A foto é ancorada na borda direita por posicionamento absoluto, e o
          texto vive dentro do mesmo container das outras seções. É isso que
          põe o título na mesma margem esquerda do resto da página — antes o
          `ml-auto` empurrava a coluna para o meio e abria um vazio enorme à
          esquerda.

          Proporção 56/40 em vez de 50/50: a informação pesa mais que a foto. */}
      <section id="o-barzim" className="relative overflow-hidden">
        <figure className="m-0 lg:absolute lg:inset-y-0 lg:right-0 lg:w-[40%]">
          <img
            src={FOTO_PALCO.src}
            srcSet={FOTO_PALCO.srcSet}
            sizes="(min-width: 1024px) 40vw, 100vw"
            alt={FOTO_PALCO.alt}
            loading="lazy"
            width={FOTO_PALCO.width}
            height={FOTO_PALCO.height}
            className="h-[50vh] w-full object-cover lg:h-full"
          />
          {/* Esfuma a borda interna da foto contra o fundo, para a divisa não
              virar um corte reto no meio da tela. */}
          <span className="pointer-events-none absolute inset-y-0 left-0 hidden w-32 bg-gradient-to-r from-ink to-transparent lg:block" />
        </figure>

        <div className="mx-auto max-w-[min(92vw,2200px)] px-5 py-20 md:px-10 md:py-28">
          <div className="lg:w-[56%]">
            <h2 className="display titulo-secao-destaque max-w-[9ch]">Isso não é só um show</h2>

            <p className="lead mt-10 max-w-[62ch] text-bone/85">
              Começou pequeno, num balcão de madeira, com clássicos que todo mundo sabe de cor. Hoje
              é uma noite inteira construída pelo público — e ainda tem cara de boteco.
            </p>

            {/* Quatro em linha, com régua entre eles: os números são o
                argumento da seção, então ocupam a largura toda em vez de se
                espremerem num quadrado 2x2. */}
            <dl className="mt-20 grid grid-cols-2 gap-x-10 gap-y-12 sm:grid-cols-4">
              {[
                ["+120", "noites de barzim"],
                ["+40", "cidades"],
                ["3h", "de clássicos"],
                ["1", "coro só"],
              ].map(([n, l]) => (
                <div key={l} className="hairline pt-5">
                  <dt className="display numeral">{n}</dt>
                  <dd className="mt-3 text-base text-ash">{l}</dd>
                </div>
              ))}
            </dl>

            <DemoTag className="mt-12 max-w-[56ch]" />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ MOMENTOS */}
      <section id="momentos" className="hairline border-b border-white/10 py-24 md:py-32">
        <div className="px-5 md:px-10">
          <h2 className="display titulo-secao-destaque max-w-[9ch]">Momentos do Barzim</h2>

          {/* Três vídeos, três colunas: a grade preenche a largura inteira em
              vez de deixar a quarta coluna vazia. */}
          <div className="mt-14 grid gap-4 md:grid-cols-3 md:gap-6">
            {MOMENTOS.map((m) => (
              <VideoVertical key={m.id} {...m} />
            ))}
          </div>

          <p className="mt-10 text-sm text-ash">{CREDITO_FOTOS}</p>
        </div>
      </section>

      {/* --------------------------------------------------------- AGENDA */}
      <section id="agenda" className="border-y border-white/10 bg-charcoal/40 py-24 md:py-32">
        <div className="mx-auto max-w-[min(92vw,2200px)] px-5 md:px-10">
          <Reveal>
            <SectionTitle eyebrow="Agenda" destaque>
              Próximas edições
            </SectionTitle>
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {SHOWS.map((s, i) => (
              <Reveal key={s.id} delay={i * 110}>
                <article className="group flex h-full flex-col justify-between border border-white/10 bg-ink p-7 transition-colors duration-500 hover:border-ember/60 md:p-9">
                  <div>
                    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                      <p className="display numeral">
                        {s.data.split(" ")[0]}{" "}
                        <span className="text-ember">{s.data.split(" ")[1]}</span>
                      </p>
                      <span
                        className={`shrink-0 rounded-full border px-4 py-1.5 text-[0.7rem] uppercase tracking-[0.16em] ${
                          s.status === "Em breve"
                            ? "border-white/25 text-bone/55"
                            : "border-ember/70 text-ember"
                        }`}
                      >
                        {s.status}
                      </span>
                    </div>
                    <p className="display titulo-bloco mt-7">
                      {s.cidade} · {s.uf}
                    </p>
                    <p className="mt-3 text-base text-ash">
                      {s.diaSemana} · {s.local}
                    </p>
                  </div>
                  <a
                    href={s.ticketUrl ?? "#agenda"}
                    aria-disabled={!s.ticketUrl}
                    className={`btn-base mt-9 w-full ${
                      s.status === "Em breve" ? "btn-ghost" : "btn-ember"
                    }`}
                  >
                    {s.status === "Em breve" ? "Avise-me" : "Comprar ingressos"}
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
          <DemoTag className="mt-8" />
        </div>
      </section>

      {/* ----------------------------------------------------------- LOJA */}
      <section id="loja" className="py-24 md:py-32">
        <div className="mx-auto max-w-[min(92vw,2200px)] px-5 md:px-10">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <SectionTitle eyebrow="Store">Barzim Store</SectionTitle>
              <a href="#loja" className="btn-base btn-ghost w-fit">
                Entrar na loja
              </a>
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {PRODUTOS.map((p, i) => (
              <Reveal key={p.nome} delay={i * 90}>
                <article className="group flex h-full flex-col border border-white/10 bg-charcoal transition-colors duration-500 hover:border-ember/50">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.nome}
                      loading="lazy"
                      width={900}
                      height={1100}
                      className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between gap-4 p-4 md:p-6">
                    <div>
                      <h3 className="display titulo-bloco">{p.nome}</h3>
                      <p className="mt-3 text-lg text-ash">{p.preco}</p>
                    </div>
                    <span className="display text-sm tracking-[0.2em] text-ash transition-colors group-hover:text-bone">
                      Ver produto →
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <DemoTag className="mt-8" />
        </div>
      </section>

      {/* -------------------------------------------------------- GALERIA */}
      <section id="galeria" className="hairline border-b border-white/10 py-24 md:py-32">
        <div className="px-5 md:px-10">
          <h2 className="display titulo-secao max-w-[11ch]">Retratos da noite</h2>
        </div>

        {/* Faixa que sangra dos dois lados e rola na horizontal. Substitui o
            mosaico em colunas, que deixava buraco no fim de cada coluna e
            recortava foto deitada em formato de retrato. */}
        <ul
          className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:gap-6 md:px-10"
          style={{ scrollbarWidth: "thin" }}
        >
          {GALERIA.map((g) => (
            <li key={g.src} className="m-0 shrink-0 snap-start">
              <img
                src={g.src}
                srcSet={g.srcSet}
                sizes="(min-width: 768px) 46rem, 80vw"
                alt={g.alt}
                loading="lazy"
                width={g.width}
                height={g.height}
                className="h-[42vh] max-h-[30rem] w-auto object-cover md:h-[56vh]"
              />
            </li>
          ))}
        </ul>

        <div className="px-5 md:px-10">
          <p className="mt-8 text-sm text-ash">{CREDITO_FOTOS}</p>
        </div>
      </section>

      {/* ----------------------------------------------------- NEWSLETTER */}
      <section className="grain relative overflow-hidden border-t border-white/10 bg-charcoal py-24 md:py-32">
        <div className="mx-auto grid max-w-[min(92vw,2200px)] items-end gap-12 px-5 md:grid-cols-[1.1fr_0.9fr] md:px-10">
          <Reveal>
            <p className="eyebrow">Newsletter</p>
            <h2 className="display titulo-secao mt-5 max-w-[11ch]">
              Entre pro <span className="text-ember">Barzim</span>
            </h2>
            <p className="lead mt-6 max-w-[40ch] text-bone/80">
              Datas novas, pré-venda e bastidores antes de todo mundo.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-12 flex w-full flex-col gap-3 sm:flex-row"
            >
              <label className="sr-only" htmlFor="email">
                Seu e-mail
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="seu@email.com"
                className="h-[58px] flex-1 rounded-sm border border-white/25 bg-ink px-5 text-base text-bone transition-colors placeholder:text-ash focus-visible:border-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
              />
              <button type="submit" className="btn-base btn-ember h-[58px]">
                Quero entrar
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------- FOOTER */}
      <footer className="mx-auto max-w-[min(92vw,2200px)] px-5 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo />
          </div>
          {COLUNAS_RODAPE.map((c) => (
            <div key={c.titulo}>
              <p className="eyebrow">{c.titulo}</p>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => {
                  const externo = l.href.startsWith("http");
                  return (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        {...(externo && { target: "_blank", rel: "noreferrer" })}
                        className="text-base text-ash transition-colors hover:text-bone"
                      >
                        {l.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="hairline mt-14 flex flex-col gap-4 pt-8 sm:flex-row sm:items-center sm:justify-between">
          {/* Só entra aqui rede que tem destino real. Antes havia YouTube,
              TikTok e Spotify, e os três abriam o Instagram. */}
          <div className="flex gap-6">
            {REDES.map((r) => (
              <a
                key={r.label}
                href={r.href}
                target="_blank"
                rel="noreferrer"
                className="display text-sm tracking-[0.2em] text-ash transition-colors hover:text-bone"
              >
                {r.label}
              </a>
            ))}
          </div>
          <p className="text-sm text-ash/70">
            © {new Date().getFullYear()} Barzim de Rock · Dino Fonseca
          </p>
        </div>
        <DemoTag className="mt-6" />
      </footer>
    </div>
  );
}
