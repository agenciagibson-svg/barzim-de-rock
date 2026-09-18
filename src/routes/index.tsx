import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Header } from "@/components/barzim/Header";
import { Logo } from "@/components/barzim/Logo";
import { Reveal } from "@/components/barzim/Reveal";

import hero from "@/assets/hero.jpg";
import editorial1 from "@/assets/editorial-1.jpg";
import editorial2 from "@/assets/editorial-2.jpg";
import editorial3 from "@/assets/editorial-3.jpg";
import reel1 from "@/assets/reel-1.jpg";
import reel2 from "@/assets/reel-2.jpg";
import reel3 from "@/assets/reel-3.jpg";
import reel4 from "@/assets/reel-4.jpg";
import prodCamiseta from "@/assets/prod-camiseta.jpg";
import prodBone from "@/assets/prod-bone.jpg";
import prodCopo from "@/assets/prod-copo.jpg";
import prodPoster from "@/assets/prod-poster.jpg";
import gal1 from "@/assets/gal-1.jpg";
import gal2 from "@/assets/gal-2.jpg";
import gal3 from "@/assets/gal-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Barzim de Rock — Dino Fonseca | Site oficial" },
      {
        name: "description",
        content:
          "O boteco do Dino, do jeito que o rock merece. Agenda, momentos, aftermovie e a Barzim Store.",
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

const REELS = [
  { img: reel1, cidade: "Vila Aurora", legenda: "O coro que não para" },
  { img: reel2, cidade: "Porto Serrano", legenda: "Refrão de 4 mil vozes" },
  { img: reel3, cidade: "Rio Claro do Sul", legenda: "Solo no meio do público" },
  { img: reel4, cidade: "Vila Aurora", legenda: "Depois da última música" },
];

const PRODUTOS = [
  { nome: "Camiseta Barzim Clássica", img: prodCamiseta, preco: "R$ 129,00" },
  { nome: "Boné Barzim Ember", img: prodBone, preco: "R$ 99,00" },
  { nome: "Copo Barzim 500ml", img: prodCopo, preco: "R$ 69,00" },
  { nome: "Pôster Turnê (Série Demo)", img: prodPoster, preco: "R$ 79,00" },
];

const GALERIA = [
  { img: gal1, alt: "Baterista tocando sob luz quente em um bar" },
  { img: editorial2, alt: "Público cantando junto com copos erguidos" },
  { img: gal3, alt: "Músico nos bastidores antes do show" },
  { img: gal2, alt: "Vista ampla de um bar lotado durante um show" },
  { img: editorial3, alt: "Microfone vintage com luzes âmbar ao fundo" },
  { img: editorial1, alt: "Dino cantando com violão no palco do barzim" },
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
    <p className={`text-[0.68rem] leading-relaxed tracking-wide text-bone/40 ${className}`}>
      Conteúdo demonstrativo — datas, locais, preços e produtos são fictícios e servem apenas
      para visualização do protótipo.
    </p>
  );
}

function SectionTitle({
  eyebrow,
  children,
}: {
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="display mt-4 text-[2.6rem] sm:text-6xl lg:text-7xl">{children}</h2>
    </div>
  );
}

function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div id="topo" className="bg-ink text-bone">
      <Header />

      {/* ---------------------------------------------------------- HERO */}
      <section className="grain relative min-h-[100svh] overflow-hidden">
        <img
          src={hero}
          alt="Público lotado em um show do Barzim de Rock com luzes quentes e fumaça"
          width={1920}
          height={1280}
          fetchPriority="high"
          className="absolute inset-0 h-[112%] w-full object-cover"
          style={{ transform: `translateY(${Math.min(scrollY * 0.12, 120)}px)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/55 to-ink" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-5 pb-14 pt-32 md:px-10 md:pb-20">

          {/* Primeira dobra sem <Reveal>: é o LCP da página e o primeiro
              contato com a marca. Aparece pronta, não animada. */}
          <p className="eyebrow">Site oficial · Dino Fonseca</p>

          <h1 className="display mt-5 max-w-5xl text-balance text-[3.1rem] leading-[0.88] sm:text-7xl lg:text-[7.4rem]">
            O boteco do Dino.
            <span className="block text-ember">Do jeito que o rock merece.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg font-light text-bone/75 sm:text-xl">
            Uma noite. Grandes clássicos. Milhares de vozes.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#agenda" className="btn-base btn-ember">
              Próximo Barzim
            </a>
            <a href="#aftermovie" className="btn-base btn-ghost">
              Assistir aftermovie
            </a>
          </div>

          {/* Próxima edição */}
          <Reveal delay={400}>
            <div className="mt-14 max-w-3xl border-t border-white/15 pt-6">
              <div className="grid gap-5 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-8">
                <div>
                  <p className="eyebrow">Próxima edição</p>
                  <p className="display mt-2 text-4xl sm:text-5xl">
                    12 <span className="text-ember">ABR</span>
                  </p>
                </div>
                <div className="min-w-0">
                  <p className="display text-xl">Vila Aurora · SP</p>
                  <p className="mt-1 truncate text-sm text-bone/60">
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
      <section id="o-barzim" className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionTitle eyebrow="O Barzim">
                Isso não é
                <span className="block text-ember">só um show</span>
              </SectionTitle>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-8 max-w-md text-lg font-light leading-relaxed text-bone/70">
                Começou pequeno, num balcão de madeira, com clássicos que todo mundo sabe de
                cor. Hoje é uma noite inteira construída pelo público — e ainda tem cara de
                boteco.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <dl className="mt-12 grid grid-cols-2 gap-8">
                {[
                  ["+120", "noites de barzim"],
                  ["+40", "cidades"],
                  ["3h", "de clássicos"],
                  ["1", "coro só"],
                ].map(([n, l]) => (
                  <div key={l}>
                    <dt className="display text-5xl text-ember">{n}</dt>
                    <dd className="mt-1 text-xs uppercase tracking-[0.2em] text-bone/50">{l}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            <Reveal className="sm:col-span-1 sm:row-span-2">
              <img
                src={editorial1}
                alt="Dino cantando com violão no palco de madeira do barzim"
                loading="lazy"
                width={1200}
                height={1500}
                className="h-full w-full object-cover grayscale-[15%]"
              />
            </Reveal>
            <Reveal delay={140}>
              <img
                src={editorial2}
                alt="Público cantando junto, copos erguidos"
                loading="lazy"
                width={1400}
                height={900}
                className="h-64 w-full object-cover sm:h-[17rem]"
              />
            </Reveal>
            <Reveal delay={240}>
              <img
                src={editorial3}
                alt="Microfone vintage com luzes âmbar ao fundo"
                loading="lazy"
                width={1000}
                height={1000}
                className="h-64 w-full object-cover sm:h-[17rem]"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ MOMENTOS */}
      <section id="momentos" className="border-y border-white/10 bg-charcoal/40 py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <SectionTitle eyebrow="Reels">Momentos do Barzim</SectionTitle>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {REELS.map((r, i) => (
              <Reveal key={r.legenda} delay={i * 90}>
                {/* Placeholder pronto para receber embed de Reel / vídeo vertical */}
                <button
                  type="button"
                  data-video-slot={`reel-${i + 1}`}
                  className="group relative block aspect-[9/16] w-full overflow-hidden bg-ink text-left"
                >
                  <img
                    src={r.img}
                    alt={`Momento do Barzim em ${r.cidade}`}
                    loading="lazy"
                    width={720}
                    height={1280}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute inset-0 grid place-items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Play />
                  </span>
                  <span className="absolute inset-x-0 bottom-0 p-3 md:p-5">
                    <span className="eyebrow block text-[0.6rem]">{r.cidade}</span>
                    <span className="display mt-1 block text-sm md:text-lg">{r.legenda}</span>
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
          <DemoTag className="mt-8" />
        </div>
      </section>

      {/* ----------------------------------------------------- AFTERMOVIE */}
      <section id="aftermovie" className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <SectionTitle eyebrow="Aftermovie">Barzim 2025 em 3 minutos</SectionTitle>
            <p className="max-w-sm text-bone/60">
              O registro oficial da temporada. Espaço reservado para o vídeo definitivo.
            </p>
          </div>
        </Reveal>

        <Reveal delay={140}>
          {/* Placeholder 16:9 pronto para receber embed (YouTube/Vimeo/player próprio) */}
          <button
            type="button"
            data-video-slot="aftermovie"
            className="group relative mt-12 block aspect-video w-full overflow-hidden bg-charcoal"
          >
            <img
              src={gal2}
              alt="Cena de um barzim lotado durante o show"
              loading="lazy"
              width={1200}
              height={800}
              className="absolute inset-0 h-full w-full object-cover opacity-70 transition-all duration-[900ms] group-hover:scale-[1.03] group-hover:opacity-90"
            />
            <span className="absolute inset-0 bg-ink/45" />
            <span className="absolute inset-0 grid place-items-center">
              <Play big />
            </span>
            <span className="display absolute bottom-5 left-5 text-sm tracking-[0.22em] text-bone/70 md:bottom-8 md:left-8">
              Aftermovie · 03:12
            </span>
          </button>
        </Reveal>
      </section>

      {/* --------------------------------------------------------- AGENDA */}
      <section id="agenda" className="border-y border-white/10 bg-charcoal/40 py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <SectionTitle eyebrow="Agenda">Próximas edições</SectionTitle>
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {SHOWS.map((s, i) => (
              <Reveal key={s.id} delay={i * 110}>
                <article className="group flex h-full flex-col justify-between border border-white/10 bg-ink p-7 transition-colors duration-500 hover:border-ember/60 md:p-9">
                  <div>
                    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                      <p className="display text-4xl md:text-5xl">
                        {s.data.split(" ")[0]}{" "}
                        <span className="text-ember">{s.data.split(" ")[1]}</span>
                      </p>
                      <span
                        className={`shrink-0 rounded-full border px-3 py-1 text-[0.62rem] uppercase tracking-[0.16em] ${
                          s.status === "Em breve"
                            ? "border-white/25 text-bone/55"
                            : "border-ember/70 text-ember"
                        }`}
                      >
                        {s.status}
                      </span>
                    </div>
                    <p className="display mt-6 text-2xl">
                      {s.cidade} · {s.uf}
                    </p>
                    <p className="mt-2 text-sm text-bone/55">
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
      <section id="loja" className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
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
                    <h3 className="display text-base leading-tight md:text-xl">{p.nome}</h3>
                    <p className="mt-2 text-sm text-ember">{p.preco}</p>
                  </div>
                  <span className="display text-[0.68rem] tracking-[0.2em] text-bone/55 transition-colors group-hover:text-ember">
                    Ver produto →
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <DemoTag className="mt-8" />
      </section>

      {/* -------------------------------------------------------- GALERIA */}
      <section id="galeria" className="border-y border-white/10 bg-charcoal/40 py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <SectionTitle eyebrow="Galeria">Retratos da noite</SectionTitle>
          </Reveal>
          <div className="mt-14 columns-2 gap-4 md:columns-3 md:gap-6 [&>*]:mb-4 md:[&>*]:mb-6">
            {GALERIA.map((g, i) => (
              <Reveal key={i} delay={(i % 3) * 90}>
                <img
                  src={g.img}
                  alt={g.alt}
                  loading="lazy"
                  className="w-full object-cover transition-all duration-700 hover:brightness-110"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- SOCIAL */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <SectionTitle eyebrow="Instagram">
              O Barzim continua
              <span className="block text-ember">fora do palco</span>
            </SectionTitle>
            <a
              href="https://instagram.com/barzimderock"
              target="_blank"
              rel="noreferrer"
              className="btn-base btn-ghost w-fit"
            >
              @barzimderock
            </a>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-3 gap-3 md:grid-cols-6 md:gap-4">
          {[reel1, gal1, editorial2, reel3, gal3, reel4].map((img, i) => (
            <Reveal key={i} delay={i * 70}>
              <a
                href="https://instagram.com/barzimderock"
                target="_blank"
                rel="noreferrer"
                className="group relative block aspect-square overflow-hidden"
              >
                <img
                  src={img}
                  alt="Publicação do Barzim de Rock no Instagram"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-ink/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------- NEWSLETTER */}
      <section className="grain relative overflow-hidden border-t border-white/10 bg-charcoal py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-10">
          <Reveal>
            <p className="eyebrow">Newsletter</p>
            <h2 className="display mt-4 text-[2.6rem] sm:text-6xl">
              Entre pro <span className="text-ember">Barzim</span>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-bone/65">
              Datas novas, pré-venda e bastidores antes de todo mundo.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mx-auto mt-10 flex max-w-lg flex-col gap-3 sm:flex-row"
            >
              <label className="sr-only" htmlFor="email">
                Seu e-mail
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="seu@email.com"
                className="h-[52px] flex-1 rounded-sm border border-white/20 bg-ink px-4 text-bone outline-none transition-colors placeholder:text-bone/35 focus:border-ember"
              />
              <button type="submit" className="btn-base btn-ember h-[52px]">
                Quero entrar
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------- FOOTER */}
      <footer className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo />
          </div>
          {[
            {
              t: "Navegue",
              l: ["O Barzim", "Momentos", "Agenda", "Loja", "Galeria"],
            },
            { t: "Produção", l: ["Sobre o projeto", "Rider técnico", "Trabalhe conosco"] },
            { t: "Contato", l: ["Imprensa", "Contratação", "Parcerias"] },
          ].map((c) => (
            <div key={c.t}>
              <p className="eyebrow">{c.t}</p>
              <ul className="mt-5 space-y-3">
                {c.l.map((x) => (
                  <li key={x}>
                    <a
                      href="#topo"
                      className="text-sm text-bone/60 transition-colors hover:text-ember"
                    >
                      {x}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="hairline mt-14 flex flex-col gap-4 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-6">
            {["Instagram", "YouTube", "TikTok", "Spotify"].map((s) => (
              <a
                key={s}
                href="https://instagram.com/barzimderock"
                target="_blank"
                rel="noreferrer"
                className="display text-[0.7rem] tracking-[0.2em] text-bone/55 transition-colors hover:text-ember"
              >
                {s}
              </a>
            ))}
          </div>
          <p className="text-xs text-bone/35">
            © {new Date().getFullYear()} Barzim de Rock · Dino Fonseca
          </p>
        </div>
        <DemoTag className="mt-6" />
      </footer>
    </div>
  );
}
