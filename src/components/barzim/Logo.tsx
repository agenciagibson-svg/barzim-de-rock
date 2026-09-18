import logo640 from "@/assets/logo-barzim.webp";
import logo320 from "@/assets/logo-barzim-320.webp";

/**
 * Logo oficial: placa de madeira em formato de brasão, com "BARZIM DE" e
 * "ROCK" em caixa alta condensada branca e "DINO" embaixo, separados por
 * duas barras laranja.
 *
 * Observação de marca que vale para o site inteiro: no logotipo o laranja
 * nunca é letra — são só as duas barras. Por isso ele é reservado a ação e
 * destaque pontual, não a palavra de título.
 *
 * O original (1286x1223, PNG com alpha) fica em `logo-barzim/` fora do
 * bundle, porque tem 2,6 MB. Aqui entram só as versões WebP.
 */
export function Logo({ size = "sm" }: { size?: "sm" | "lg" }) {
  const lg = size === "lg";
  const largura = lg ? 300 : 132;

  return (
    <img
      src={lg ? logo640 : logo320}
      srcSet={`${logo320} 320w, ${logo640} 640w`}
      sizes={`${largura}px`}
      alt="Barzim de Rock — Dino"
      width={largura}
      // 1286x1223 no original: proporção 1,0515.
      height={Math.round(largura / 1.0515)}
      className={`shrink-0 ${lg ? "w-[220px] sm:w-[300px]" : "w-[132px]"}`}
    />
  );
}
