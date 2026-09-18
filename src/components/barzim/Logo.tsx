import wood from "@/assets/wood.jpg";

/**
 * Área reservada para a logo oficial.
 *
 * A marca real é uma placa de madeira escura em formato de brasão, com
 * cantos chanfrados e moldura preta, lendo "DINO apresenta" no topo e
 * "BARZIM DE" / "ROCK" em caixa alta condensada branca.
 *
 * Este placeholder reproduz essa estrutura e proporção para que o layout
 * em volta já esteja certo — não é a marca, e não deve virar uma. Assim
 * que o arquivo oficial (SVG ou PNG com fundo transparente) chegar, este
 * componente passa a renderizar a imagem e o resto do site não muda.
 */
export function Logo({ size = "sm" }: { size?: "sm" | "lg" }) {
  const lg = size === "lg";

  return (
    <div
      role="img"
      aria-label="Barzim de Rock — Dino apresenta"
      className={`relative shrink-0 bg-black/80 ${lg ? "w-[220px] p-[3px] sm:w-[300px]" : "w-[132px] p-[2px]"}`}
      // Brasão de cantos chanfrados, aproximando o recorte da placa real.
      style={{
        clipPath: "polygon(14% 0%, 86% 0%, 100% 14%, 100% 86%, 86% 100%, 14% 100%, 0% 86%, 0% 14%)",
      }}
    >
      <div
        className={`grain flex h-full flex-col items-center justify-center text-center ${
          lg ? "px-6 py-5 sm:px-8 sm:py-7" : "px-3 py-2.5"
        }`}
        style={{
          clipPath:
            "polygon(14% 0%, 86% 0%, 100% 14%, 100% 86%, 86% 100%, 14% 100%, 0% 86%, 0% 14%)",
          backgroundImage: `linear-gradient(oklch(0.2 0.02 60 / 0.82), oklch(0.11 0.02 50 / 0.93)), url(${wood})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          className={`display leading-none text-bone ${lg ? "text-xl sm:text-2xl" : "text-[0.7rem]"}`}
        >
          Dino
        </p>
        <p
          className={`display leading-none text-bone/55 ${
            lg
              ? "mt-1 text-[0.55rem] tracking-[0.5em] sm:text-[0.65rem]"
              : "mt-0.5 text-[0.3rem] tracking-[0.4em]"
          }`}
        >
          apresenta
        </p>

        <p
          className={`display leading-[0.82] text-bone ${
            lg ? "mt-2 text-[2.1rem] sm:text-[2.9rem]" : "mt-1 text-[1.05rem]"
          }`}
        >
          <span className="whitespace-nowrap">
            Barzim <span className={lg ? "text-[0.62em]" : "text-[0.6em]"}>de</span>
          </span>
          <span className="block">Rock</span>
        </p>
      </div>
    </div>
  );
}
