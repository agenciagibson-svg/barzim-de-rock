import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";

const NAV = [
  { label: "O Barzim", href: "#o-barzim" },
  { label: "Momentos", href: "#momentos" },
  { label: "Agenda", href: "#agenda" },
  { label: "Loja", href: "#loja" },
  { label: "Galeria", href: "#galeria" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Com o menu aberto o scroll da página fica travado, então Esc precisa ser
  // uma saída de verdade — e o foco volta para o botão que abriu.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      toggleRef.current?.focus();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid ? "bg-ink/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      {/* `relative z-50` é o que mantém a logo e o botão de fechar acima do
          overlay do menu (z-40), que é irmão deste div dentro do mesmo
          contexto de empilhamento. Sem isso o overlay cobre o próprio botão
          que fecha ele, e o visitante fica preso com o scroll travado. */}
      <div className="relative z-50 mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:px-10">
        <a href="#topo" className="flex min-w-0 items-center gap-3">
          <Logo />
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="display text-xs tracking-[0.22em] text-bone/75 transition-colors hover:text-ember"
            >
              {n.label}
            </a>
          ))}
          <a href="#agenda" className="btn-base btn-ember">
            Ingressos
          </a>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 shrink-0 touch-manipulation flex-col items-center justify-center gap-1.5 rounded-sm border border-white/20 transition-colors active:scale-95 lg:hidden"
        >
          <span
            className={`h-px w-5 bg-bone transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-5 bg-bone transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* `inert` quando fechado: sem isso os links seguem no caminho do Tab e
          na árvore de acessibilidade, invisíveis mas focáveis. */}
      <div
        id="menu-mobile"
        inert={!open}
        className={`fixed inset-0 top-0 z-40 flex flex-col justify-between overscroll-contain bg-ink px-6 pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-28 transition-opacity duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col">
          {NAV.map((n, i) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: `${open ? 80 + i * 55 : 0}ms` }}
              className={`display hairline touch-manipulation py-5 text-4xl text-bone transition-[opacity,transform] duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#agenda"
          onClick={() => setOpen(false)}
          className="btn-base btn-ember w-full py-5 text-base"
        >
          Ingressos
        </a>
      </div>
    </header>
  );
}
