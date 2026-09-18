import wood from "@/assets/wood.jpg";

/**
 * Área reservada para a logo oficial (placa de madeira arredondada).
 * Enquanto o arquivo oficial não chega, ocupamos a mesma presença visual
 * com um placeholder tipográfico — sem criar uma marca nova.
 */
export function Logo({ size = "sm" }: { size?: "sm" | "lg" }) {
  const lg = size === "lg";
  return (
    <div
      aria-label="BARZIM DE ROCK — Dino"
      className={`relative shrink-0 overflow-hidden rounded-2xl border-2 border-black/80 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.9)] ${
        lg ? "w-[220px] px-5 py-4 sm:w-[300px] sm:px-7 sm:py-6" : "w-[132px] px-3 py-2"
      }`}
      style={{
        backgroundImage: `linear-gradient(oklch(0.18 0.02 60 / 0.86), oklch(0.12 0.02 50 / 0.94)), url(${wood})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="rounded-xl border border-white/15 px-2 py-1.5 text-center">
        <p
          className={`display leading-[0.85] text-bone ${lg ? "text-2xl sm:text-[2.1rem]" : "text-[0.95rem]"}`}
        >
          Barzim
          <span className="block">
            de <span className="text-ember">Rock</span>
          </span>
        </p>
        <p
          className={`display mt-1 tracking-[0.4em] text-bone/75 ${lg ? "text-xs sm:text-sm" : "text-[0.5rem]"}`}
        >
          Dino
        </p>
      </div>
    </div>
  );
}
