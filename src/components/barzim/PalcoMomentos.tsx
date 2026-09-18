import { useCallback, useEffect, useRef, useState } from "react";

export type Momento = {
  id: string;
  video: string;
  poster: string;
  legenda: string;
  descricao: string;
};

/**
 * Palco de momentos: um vídeo vertical em foco, ladeado pelos vizinhos.
 *
 * A transição é sempre resposta a uma ação do visitante — clique no card de
 * lado, seta do teclado, ou o fim do vídeo, que passa a vez para o próximo.
 * Nada anima sozinho ao rolar a página: a regra do projeto é que movimento
 * automático espalhado lê como site gerado, enquanto movimento que responde
 * a um gesto mostra o que mudou.
 *
 * Só a capa carrega junto com a página. O `<video>` entra no primeiro toque,
 * porque três arquivos de ~11 MB custariam 33 MB antes de o visitante pedir
 * qualquer coisa.
 */
export function PalcoMomentos({ momentos }: { momentos: Momento[] }) {
  const [ativo, setAtivo] = useState(0);
  const [tocando, setTocando] = useState(false);
  const palcoRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const total = momentos.length;
  const irPara = useCallback(
    (i: number) => {
      setAtivo(((i % total) + total) % total);
      setTocando(false);
    },
    [total],
  );

  // Setas navegam enquanto o foco estiver dentro do palco.
  useEffect(() => {
    const el = palcoRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        irPara(ativo - 1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        irPara(ativo + 1);
      }
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [ativo, irPara]);

  const momentoAtivo = momentos[ativo];

  return (
    <div ref={palcoRef} className="palco">
      <div className="palco-trilho">
        {momentos.map((m, i) => {
          // Distância até o card em foco, dando a volta nas pontas.
          let d = i - ativo;
          if (d > total / 2) d -= total;
          if (d < -total / 2) d += total;

          const emFoco = d === 0;
          const emFocoTocando = emFoco && tocando;

          return (
            <div
              key={m.id}
              className="palco-card"
              data-foco={emFoco}
              style={{ "--d": d } as React.CSSProperties}
              aria-hidden={emFoco ? undefined : true}
              inert={!emFoco}
            >
              {emFocoTocando ? (
                <video
                  ref={videoRef}
                  src={m.video}
                  poster={m.poster}
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                  data-video-slot={m.id}
                  aria-label={`${m.legenda}. ${m.descricao}.`}
                  onEnded={() => irPara(ativo + 1)}
                  className="h-full w-full object-cover"
                />
              ) : (
                <button
                  type="button"
                  data-video-slot={m.id}
                  onClick={() => (emFoco ? setTocando(true) : irPara(i))}
                  tabIndex={emFoco ? 0 : -1}
                  aria-label={
                    emFoco
                      ? `Reproduzir: ${m.legenda}. ${m.descricao}.`
                      : `Trazer para o centro: ${m.legenda}`
                  }
                  className="group relative block h-full w-full text-left"
                >
                  <img
                    src={m.poster}
                    alt=""
                    width={720}
                    height={1280}
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-transparent" />

                  {emFoco && (
                    <>
                      <span className="absolute inset-0 grid place-items-center">
                        <span className="palco-play">
                          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-ink">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </span>
                      </span>
                      <span className="absolute inset-x-0 bottom-0 p-6">
                        <span className="display block text-2xl leading-tight">{m.legenda}</span>
                      </span>
                    </>
                  )}
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Controles: a navegação é do visitante, então ela é visível e
          alcançável pelo teclado, não um gesto escondido. */}
      <div className="mt-10 flex items-center justify-between gap-6">
        <p className="lead max-w-[36ch] text-bone/85">{momentoAtivo.descricao}.</p>

        <div className="flex shrink-0 items-center gap-4">
          <span className="display text-sm tabular-nums tracking-[0.2em] text-ash">
            {String(ativo + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <button
            type="button"
            onClick={() => irPara(ativo - 1)}
            aria-label="Momento anterior"
            className="palco-seta"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
              <path d="M15.4 7.4 14 6l-6 6 6 6 1.4-1.4-4.6-4.6z" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => irPara(ativo + 1)}
            aria-label="Próximo momento"
            className="palco-seta"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
              <path d="m8.6 16.6 1.4 1.4 6-6-6-6-1.4 1.4 4.6 4.6z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
