# MEDIA MANIFEST — Barzim de Rock

Assets web gerados a partir do material bruto do cliente em `C:\Projeto Barzim de Rock\imagens-video\`.

- **Imagens** → `src/assets/` (importadas pelo bundler)
- **Vídeos e posters** → `public/videos/` (servidos por URL)

Ferramentas: `ffmpeg` (libwebp / libx264). ImageMagick não está disponível nesta máquina —
o `convert` que aparece no PATH é o utilitário de disco do Windows, não o do ImageMagick.

## Resumo

| | Antes | Depois |
|---|---:|---:|
| Imagens (12 fotos → 48 arquivos) | 11.786.353 B (11,24 MB) | 8.316.552 B (7,93 MB) |
| Vídeos (3) | 35.296.268 B (33,66 MB) | 35.297.001 B (33,66 MB) |
| Posters (3, novos) | — | 100.410 B (98 KB) |
| **Total** | **47.082.621 B (44,90 MB)** | **43.713.963 B (41,69 MB)** |

O total "depois" soma **todas** as 4 variantes de cada foto. O navegador baixa só uma.
Na prática, uma galeria servindo o tier **1280 WebP** carrega **1.229.824 B (1,17 MB)** para as 12 fotos —
**10,4%** do peso do material original.

Peso por tier (soma das 12 fotos):

| Tier | Peso |
|---|---:|
| 640 WebP | 451.018 B |
| 1280 WebP | 1.229.824 B |
| 1920 WebP | 2.118.930 B |
| 1920 JPEG (fallback) | 4.516.780 B |

## Qualidade de compressão — o que foi verificado

As fotos são de show: fundo escuro, fumaça e luz quente, exatamente o caso em que
compressão agressiva gera banding nas sombras. Verificação feita antes de fechar a qualidade:

1. **SSIM global** de cada WebP 1920 contra a referência não comprimida: **0,974 a 0,993**.
2. **Localização das sombras reais** — varredura de 240 tiles com `signalstats` para achar as
   regiões escuras com gradiente (luma média 33–39, mínima 20–34), em vez de recortar no olho.
3. **SSIM restrito a essas regiões escuras**, em q82 / q86 / q90 / q93 / q96.
4. **Comparação visual** original × q82 × q90 nos mesmos recortes, em brilho normal e com
   as sombras esticadas 4×.

Resultado: com as sombras esticadas 4× dá para ver o q82 achatando textura em blocos.
**Em brilho normal, mesmo com zoom 2×, q82, q90 e o original são indistinguíveis** — não há
banding visível. Subir para q90 custava **+40% a +70%** de peso para ganhar 0,001–0,003 de SSIM
nas sombras. Também conferi a área de vermelho saturado (letreiro sobre fundo escuro), onde o
subsampling de croma do WebP costuma falhar: sem borrão nem deslocamento de cor.

**Decisão: `-quality 82` mantido em todas as imagens**, conforme a regra do briefing
(ajustar só se o banding for visível — não é).

## Fotos

Todas as larguras respeitam o original — nenhuma imagem foi ampliada.
A descrição de cada bloco é o texto alternativo sugerido.

### show-palco-logo-verde-vermelho
Origem: `Espaço Unimed ... (28).jpg` — 3000×2000, 1.659.951 B
**Alt:** Palco visto de frente com o letreiro "DINO BARZIM DE ROCK" aceso em vermelho e verde sobre um cenário de bar; a banda toca em silhueta e a plateia lotada aparece em primeiro plano.

| Arquivo | Dimensões | Peso antes | Peso depois |
|---|---|---:|---:|
| show-palco-logo-verde-vermelho-640.webp | 640×426 | 1.659.951 B | 47.176 B |
| show-palco-logo-verde-vermelho-1280.webp | 1280×854 | 1.659.951 B | 131.600 B |
| show-palco-logo-verde-vermelho-1920.webp | 1920×1280 | 1.659.951 B | 235.836 B |
| show-palco-logo-verde-vermelho-1920.jpg | 1920×1280 | 1.659.951 B | 561.571 B |

### plateia-vista-geral-telao
Origem: `Espaço Unimed ... (31).jpg` — 3000×2000, 1.060.737 B
**Alt:** Vista do fundo da casa: o palco ao longe entre dois telões que exibem Dino de guitarra, com feixes de luz amarela se abrindo sobre um auditório completamente cheio.

| Arquivo | Dimensões | Peso antes | Peso depois |
|---|---|---:|---:|
| plateia-vista-geral-telao-640.webp | 640×426 | 1.060.737 B | 33.500 B |
| plateia-vista-geral-telao-1280.webp | 1280×854 | 1.060.737 B | 102.664 B |
| plateia-vista-geral-telao-1920.webp | 1920×1280 | 1.060.737 B | 183.966 B |
| plateia-vista-geral-telao-1920.jpg | 1920×1280 | 1.060.737 B | 414.076 B |

### plateia-feixes-brancos
Origem: `Espaço Unimed ... (34).jpg` — 3000×2000, 1.033.826 B
**Alt:** Auditório lotado de mesas visto do fundo, sob feixes brancos e azuis cruzando a fumaça; nos telões laterais Dino canta ao microfone.

| Arquivo | Dimensões | Peso antes | Peso depois |
|---|---|---:|---:|
| plateia-feixes-brancos-640.webp | 640×426 | 1.033.826 B | 43.652 B |
| plateia-feixes-brancos-1280.webp | 1280×854 | 1.033.826 B | 123.590 B |
| plateia-feixes-brancos-1920.webp | 1920×1280 | 1.033.826 B | 208.670 B |
| plateia-feixes-brancos-1920.jpg | 1920×1280 | 1.033.826 B | 416.620 B |

### plateia-holofote-estrela
Origem: `Espaço Unimed ... (35).jpg` — 3000×2000, 1.090.008 B
**Alt:** Plateia sentada às mesas sob um holofote branco que estoura em forma de estrela, com refletores vermelhos no teto e Dino de jaqueta brilhante nos telões laterais.

| Arquivo | Dimensões | Peso antes | Peso depois |
|---|---|---:|---:|
| plateia-holofote-estrela-640.webp | 640×426 | 1.090.008 B | 43.968 B |
| plateia-holofote-estrela-1280.webp | 1280×854 | 1.090.008 B | 121.924 B |
| plateia-holofote-estrela-1920.webp | 1920×1280 | 1.090.008 B | 209.382 B |
| plateia-holofote-estrela-1920.jpg | 1920×1280 | 1.090.008 B | 413.620 B |

### plateia-luz-ambar
Origem: `Espaço Unimed ... (39).jpg` — 3000×2000, 1.070.189 B
**Alt:** Mar de cabeças da plateia banhado por luz âmbar quente, com o palco pequeno ao fundo em vermelho e os telões mostrando Dino com a guitarra vermelha.

| Arquivo | Dimensões | Peso antes | Peso depois |
|---|---|---:|---:|
| plateia-luz-ambar-640.webp | 640×426 | 1.070.189 B | 33.024 B |
| plateia-luz-ambar-1280.webp | 1280×854 | 1.070.189 B | 101.022 B |
| plateia-luz-ambar-1920.webp | 1920×1280 | 1.070.189 B | 183.416 B |
| plateia-luz-ambar-1920.jpg | 1920×1280 | 1.070.189 B | 462.010 B |

### dino-cantando-feixes-brancos
Origem: `Espaço Unimed ... (40).jpg` — 3000×2000, 1.020.917 B
**Alt:** Dino canta ao microfone com uma guitarra sunburst no centro do palco, cercado por feixes brancos e fumaça, com o letreiro "BARZIM DE ROCK" à esquerda e o público em silhueta embaixo.

| Arquivo | Dimensões | Peso antes | Peso depois |
|---|---|---:|---:|
| dino-cantando-feixes-brancos-640.webp | 640×426 | 1.020.917 B | 37.580 B |
| dino-cantando-feixes-brancos-1280.webp | 1280×854 | 1.020.917 B | 96.332 B |
| dino-cantando-feixes-brancos-1920.webp | 1920×1280 | 1.020.917 B | 166.192 B |
| dino-cantando-feixes-brancos-1920.jpg | 1920×1280 | 1.020.917 B | 353.354 B |

### palco-vermelho-banda-completa
Origem: `Espaço Unimed ... (46).jpg` — 3000×2000, 811.058 B
**Alt:** Palco inteiro lavado de vermelho com a banda completa — baixo, teclado, bateria e guitarras — e Dino cantando ao centro diante do cenário de bar.

| Arquivo | Dimensões | Peso antes | Peso depois |
|---|---|---:|---:|
| palco-vermelho-banda-completa-640.webp | 640×426 | 811.058 B | 22.766 B |
| palco-vermelho-banda-completa-1280.webp | 1280×854 | 811.058 B | 63.072 B |
| palco-vermelho-banda-completa-1920.webp | 1920×1280 | 811.058 B | 111.100 B |
| palco-vermelho-banda-completa-1920.jpg | 1920×1280 | 811.058 B | 285.928 B |

### palco-vermelho-dino-bracos-abertos
Origem: `galeria-01.jpg.jpg` — 3000×2000, 1.136.495 B
**Alt:** Dino de braços abertos ao centro do palco com a guitarra, sob luz vermelha intensa, com o letreiro "DINO BARZIM DE ROCK" ocupando todo o cenário de bar ao fundo.

| Arquivo | Dimensões | Peso antes | Peso depois |
|---|---|---:|---:|
| palco-vermelho-dino-bracos-abertos-640.webp | 640×426 | 1.136.495 B | 30.918 B |
| palco-vermelho-dino-bracos-abertos-1280.webp | 1280×854 | 1.136.495 B | 91.928 B |
| palco-vermelho-dino-bracos-abertos-1920.webp | 1920×1280 | 1.136.495 B | 166.500 B |
| palco-vermelho-dino-bracos-abertos-1920.jpg | 1920×1280 | 1.136.495 B | 426.131 B |

### dino-chapeu-plateia-celulares
Origem: `galeria-06.jpg.jpg` — 3000×2000, 1.093.580 B
**Alt:** Vocalista de chapéu preto aponta para a plateia ao lado de um segundo cantor com violão, sob feixes brancos, enquanto o público ergue os celulares para filmar.

| Arquivo | Dimensões | Peso antes | Peso depois |
|---|---|---:|---:|
| dino-chapeu-plateia-celulares-640.webp | 640×426 | 1.093.580 B | 38.588 B |
| dino-chapeu-plateia-celulares-1280.webp | 1280×854 | 1.093.580 B | 104.134 B |
| dino-chapeu-plateia-celulares-1920.webp | 1920×1280 | 1.093.580 B | 185.482 B |
| dino-chapeu-plateia-celulares-1920.jpg | 1920×1280 | 1.093.580 B | 414.283 B |

### vertical-palco-dois-niveis
Origem: `instagram-87he4uoo-129659.jpg` — 2190×2737, 577.007 B
**Alt:** Palco em dois níveis: no alto a banda com violões e percussão, embaixo dois vocalistas — um de chapéu preto — diante do cenário de bar iluminado de vermelho.

| Arquivo | Dimensões | Peso antes | Peso depois |
|---|---|---:|---:|
| vertical-palco-dois-niveis-640.webp | 640×800 | 577.007 B | 42.476 B |
| vertical-palco-dois-niveis-1280.webp | 1280×1600 | 577.007 B | 101.858 B |
| vertical-palco-dois-niveis-1920.webp | 1920×2400 | 577.007 B | 160.570 B |
| vertical-palco-dois-niveis-1920.jpg | 1920×2400 | 577.007 B | 264.848 B |

### vertical-tecladista-piano
Origem: `instagram-b7jw7jtw-087857.jpg` — 2400×3000, 474.126 B
**Alt:** Tecladista de óculos escuros e jaqueta de couro canta ao microfone sentado a um piano preto, recortado pela fumaça e por uma contraluz branca.

| Arquivo | Dimensões | Peso antes | Peso depois |
|---|---|---:|---:|
| vertical-tecladista-piano-640.webp | 640×800 | 474.126 B | 17.632 B |
| vertical-tecladista-piano-1280.webp | 1280×1600 | 474.126 B | 43.284 B |
| vertical-tecladista-piano-1920.webp | 1920×2400 | 474.126 B | 73.054 B |
| vertical-tecladista-piano-1920.jpg | 1920×2400 | 474.126 B | 140.194 B |

### vertical-dino-feixes-laranja
Origem: `instagram-z0pmg438-152906.jpg` — 2190×2737, 758.459 B
**Alt:** Composição vertical com Dino cantando e tocando guitarra na passarela elevada e, abaixo, a banda no palco principal sob feixes laranja, com a plateia na base do enquadramento.

| Arquivo | Dimensões | Peso antes | Peso depois |
|---|---|---:|---:|
| vertical-dino-feixes-laranja-640.webp | 640×800 | 758.459 B | 59.738 B |
| vertical-dino-feixes-laranja-1280.webp | 1280×1600 | 758.459 B | 148.416 B |
| vertical-dino-feixes-laranja-1920.webp | 1920×2400 | 758.459 B | 234.762 B |
| vertical-dino-feixes-laranja-1920.jpg | 1920×2400 | 758.459 B | 364.145 B |

## Vídeos

**Os três originais foram mantidos.** Recomprimir em H.264 CRF 23 `-preset slow` deixou
todos os arquivos **maiores** que o original — os vídeos já vinham recomprimidos do Instagram
a ~1,8 Mbps, e o CRF 23 quer ~2,1–2,4 Mbps para esse conteúdo:

| Vídeo | Original | CRF 23 | Resultado |
|---|---:|---:|---|
| reel-show-luzes-azuis | 11.208.585 B | 12.594.910 B | +12,4% |
| reel-plateia-lotada | 13.348.477 B | 16.229.694 B | +21,6% |
| reel-aftermovie-publico | 10.739.206 B | 12.513.044 B | +16,5% |

O que foi entregue é um **remux com `-c copy -movflags +faststart`**: o container é reescrito,
os streams de vídeo e áudio são copiados bit a bit. Zero perda de qualidade, custo de +200 a
+280 bytes por arquivo, e o `faststart` fica garantido. (Os originais já vinham com `moov`
antes do `mdat`; o remux confirma e fixa isso.)

| Arquivo | Dimensões | Duração | Peso antes | Peso depois |
|---|---|---|---:|---:|
| reel-show-luzes-azuis.mp4 | 720×1280 | 48,2 s | 11.208.585 B | 11.208.848 B |
| reel-plateia-lotada.mp4 | 720×1280 | 54,4 s | 13.348.477 B | 13.348.752 B |
| reel-aftermovie-publico.mp4 | 720×1280 | 48,2 s | 10.739.206 B | 10.739.401 B |

**O que cada vídeo mostra**

- **reel-show-luzes-azuis** — aftermovie vertical do show: abre no letreiro neon "BARZIM DE ROCK / DINO",
  passa pela banda sob luzes azuis e vermelhas, closes dos vocalistas e da plateia.
- **reel-plateia-lotada** — aftermovie vertical centrado na casa cheia: vista da plateia do alto,
  tecladista ao piano, público de braços erguidos e o letreiro vermelho em destaque.
- **reel-aftermovie-publico** — aftermovie de clima e bastidores: ambientação do bar, público
  brindando e dançando, e trechos do show acústico.

**WebM VP9 não foi gerado.** Teste em VP9 `-crf 33 -b:v 0`: 9.989.020 B (89% do original,
apenas 11% de ganho) com SSIM 0,940 contra o original — qualidade claramente pior que o
H.264 CRF 26 (SSIM 0,991 a 87%). O ganho não compensa uma segunda geração de perda.

## Posters

Frame escolhido percorrendo cada vídeo e comparando candidatos — nenhum é o frame 0.
Critério: artista visível, bem iluminado e em foco.

| Arquivo | Dimensões | Segundo | Peso | O que mostra |
|---|---|---|---:|---|
| reel-show-luzes-azuis-poster.webp | 720×1280 | **21 s** | 26.772 B | Dino canta e toca guitarra em close, sob luz vermelha quente, com o palco desfocado ao fundo. |
| reel-plateia-lotada-poster.webp | 720×1280 | **28 s** | 38.456 B | Vocalista de jaqueta de couro, de costas para a câmera, estende o braço para a plateia lotada e iluminada. |
| reel-aftermovie-publico-poster.webp | 720×1280 | **27 s** | 35.182 B | Guitarrista de óculos escuros canta ao microfone com uma Telecaster creme, sob luz roxa. |

Candidatos descartados: nos três vídeos os primeiros segundos são letreiro/vinheta ou
quadros escuros, e vários pontos intermediários caem em transição borrada ou contraluz.

## Uso recomendado

**Hero** — `palco-vermelho-dino-bracos-abertos` (Dino centralizado de braços abertos, letreiro
legível, vermelho forte). Alternativa: `dino-cantando-feixes-brancos`, mais dinâmica e de paleta
fria. Para hero **com texto por cima**, prefira `plateia-luz-ambar` ou `plateia-vista-geral-telao`:
ambas têm grandes áreas escuras limpas que aceitam texto sem caixa de fundo.

**Galeria** — `show-palco-logo-verde-vermelho`, `palco-vermelho-banda-completa`,
`dino-chapeu-plateia-celulares`, `plateia-feixes-brancos`, `plateia-holofote-estrela`,
`plateia-luz-ambar`, `plateia-vista-geral-telao`. Servir o tier **1280 WebP** com
`srcset` 640/1280/1920.

**Cards verticais (9:16)** — `vertical-palco-dois-niveis`, `vertical-dino-feixes-laranja`,
`vertical-tecladista-piano` (a mais gráfica e de longe a mais leve, 43 KB no tier 1280),
mais os três posters dos reels.

Padrão de markup sugerido:

```html
<picture>
  <source
    type="image/webp"
    srcset="/assets/nome-640.webp 640w, /assets/nome-1280.webp 1280w, /assets/nome-1920.webp 1920w"
    sizes="(max-width: 768px) 100vw, 1280px">
  <img src="/assets/nome-1920.jpg" alt="..." width="1920" height="1280" loading="lazy" decoding="async">
</picture>
```

## Problemas e observações

1. **CRF 23 aumentou os três vídeos** — originais mantidos, conforme o briefing. Se reduzir peso
   virar prioridade, o CRF 26 entrega ~13% de economia (11,21 MB → 9,77 MB no vídeo 1) com
   SSIM 0,991, e o CRF 28 entrega ~27% (8,20 MB) com SSIM 0,988. Ambos custam uma segunda
   geração de perda sobre um arquivo que já é recompressão do Instagram. Pronto para aplicar se você aprovar.
2. **Áudio não foi reencodado para AAC 128k.** Os originais têm AAC de **61 a 83 kbps**.
   Subir para 128k aumentaria o arquivo *e* adicionaria perda de geração — ficaria pior nos
   dois eixos. Como os vídeos foram mantidos, o áudio foi copiado bit a bit.
3. **Os vídeos já vinham com faststart** (`moov` antes do `mdat`). O remux confirma e fixa.
4. **Fallback JPEG pesa 54% do total de imagens** (4,52 MB de 8,32 MB) e quase nunca será
   baixado — o suporte a WebP passa de 97% dos navegadores. Se o espaço em repositório
   incomodar, dá para gerar o fallback só para as fotos de hero.
5. **Verticais do Instagram têm menos margem.** São 2190–2400 px de largura e já vêm
   recomprimidos pelo Instagram, então o tier 1920 fica quase na resolução nativa — não há
   ganho real em pedir mais nitidez desses três.
6. **Outra sessão estava commitando neste repositório ao mesmo tempo.** Os commits
   `b0f56e8` (13:51) e `5a25cd0` (14:04) são de mudança de logo, mas **arrastaram junto os assets
   que eu ainda estava gerando**: o commit "Usa a logo oficial no lugar do placeholder" contém os
   três `.mp4` e dez imagens minhas, misturados com `Logo.tsx` e `DESIGN-PLAN.md`.
   Consequências: os assets ficaram **repartidos entre commits** que não têm relação com eles, e
   os três posters (gerados às 14:05) seguem como *untracked*. **Eu não commitei nada** — não
   faz parte da tarefa. Verifiquei a integridade dos 51 arquivos depois da sobreposição:
   todos decodificam sem erro, nada foi corrompido. Se quiser o histórico limpo, dá para
   reorganizar num commit só de mídia. Os arquivos `logo-barzim.webp` e `logo-barzim-320.webp`
   em `src/assets/` vieram dessa outra sessão, não deste material bruto — não mexi neles.
7. **Nomes de origem com extensão dupla:** `galeria-01.jpg.jpg` e `galeria-06.jpg.jpg`.
   Só afeta o material bruto; os assets gerados já saíram com nome limpo.
8. **Conteúdo do `reel-aftermovie-publico`:** aparecem sinalização de patrocinador/casa
   ("DRAKO") e uma cena de dose de whisky sendo servida (rótulo Old Parr visível), além de
   consumo de álcool. Se o site tiver restrição de publicidade de bebida ou acordo de
   patrocínio, vale checar esse vídeo antes de publicar.
9. **Ignorados:** os quatro `Captura de tela *.png` da pasta de origem não fazem parte do
   material do show e ficaram de fora.
10. **Nenhuma imagem foi ampliada** — todas as larguras de saída são menores ou iguais à do
    original. As verticais de 2190 px receberam 640/1280/1920; nenhuma recebeu tier acima da nativa.
