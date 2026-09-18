/**
 * Catálogo das fotos do show.
 *
 * Cada foto existe em 640, 1280 e 1920 de largura em WebP (ver
 * MEDIA-MANIFEST.md, que também registra o texto alternativo de cada uma).
 * Este módulo resolve os três arquivos de uma vez para que o markup não
 * precise repetir `srcSet` a cada `<img>`.
 *
 * O `import.meta.glob` com `eager` roda em tempo de build: o Vite troca cada
 * caminho pela URL final com hash. Nada é resolvido em tempo de execução.
 */
const arquivos = import.meta.glob<string>("../assets/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
});

function url(nome: string): string {
  const encontrado = arquivos[`../assets/${nome}`];
  if (!encontrado) {
    throw new Error(`Foto não encontrada em src/assets: ${nome}`);
  }
  return encontrado;
}

export type Foto = {
  src: string;
  srcSet: string;
  alt: string;
  width: number;
  height: number;
};

/**
 * @param base  nome do arquivo sem o sufixo de largura
 * @param alt   descrição da cena (o manifesto traz uma pronta para cada foto)
 * @param forma proporção do original: as 9 fotos de show são 3:2 deitadas,
 *              as 3 do Instagram são retrato 4:5
 */
export function foto(base: string, alt: string, forma: "deitada" | "retrato" = "deitada"): Foto {
  const [width, height] = forma === "retrato" ? [1280, 1600] : [1280, 854];
  return {
    src: url(`${base}-1280.webp`),
    srcSet: `${url(`${base}-640.webp`)} 640w, ${url(`${base}-1280.webp`)} 1280w, ${url(`${base}-1920.webp`)} 1920w`,
    alt,
    width,
    height,
  };
}

/** Crédito obrigatório das fotos do Espaço Unimed. */
export const CREDITO_FOTOS = "Fotos: Marcos Oliveira · @marcosoliveirapht";
