import { useRef, useState } from "react";

/**
 * Card 9:16 de vídeo próprio.
 *
 * Só a capa carrega junto com a página; o `<video>` entra no primeiro toque.
 * Três vídeos de ~11 MB carregando de imediato custariam 33 MB antes de o
 * visitante pedir qualquer coisa — no 4G, na fila do show, isso é a página
 * inteira travada.
 *
 * Motivo de não usar embed do Instagram: um iframe por vídeo, script de
 * terceiro, a moldura deles por cima do layout e rastreamento a reboque
 * (que puxaria banner de consentimento por LGPD para um site que hoje não
 * precisa de nenhum).
 */
export function VideoVertical({
  id,
  video,
  poster,
  legenda,
  descricao,
}: {
  id: string;
  video: string;
  poster: string;
  legenda: string;
  descricao: string;
}) {
  const [ativo, setAtivo] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);

  if (ativo) {
    return (
      <figure className="relative m-0 aspect-[9/16] w-full overflow-hidden bg-ink">
        <video
          ref={ref}
          src={video}
          poster={poster}
          controls
          autoPlay
          playsInline
          preload="metadata"
          data-video-slot={id}
          aria-label={`${legenda}. ${descricao}.`}
          className="h-full w-full object-cover"
        />
      </figure>
    );
  }

  return (
    <button
      type="button"
      data-video-slot={id}
      onClick={() => setAtivo(true)}
      aria-label={`Reproduzir: ${legenda}. ${descricao}.`}
      className="group relative block aspect-[9/16] w-full touch-manipulation overflow-hidden bg-ink text-left"
    >
      <img
        src={poster}
        alt=""
        loading="lazy"
        width={720}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />

      <span className="absolute inset-0 grid place-items-center">
        <span className="grid h-16 w-16 place-items-center rounded-full border border-bone/70 bg-ink/40 backdrop-blur-sm transition-colors duration-200 group-hover:border-bone group-hover:bg-ink/70">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-6 w-6 translate-x-[2px] fill-bone"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>

      <span className="absolute inset-x-0 bottom-0 p-4 md:p-5">
        <span className="display block text-lg leading-tight md:text-xl">{legenda}</span>
      </span>
    </button>
  );
}
