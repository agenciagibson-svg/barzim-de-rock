# Plano de design — Barzim de Rock / Dino Fonseca

Documento de direção de arte. Não é código e não altera nenhum arquivo do site.
Escrito depois de ler `.agents/skills/frontend-design/SKILL.md`, `AGENTS.md`,
`src/styles.css`, `src/routes/index.tsx`, `src/components/barzim/` e, principalmente,
**o material real**: as 7 fotos do Espaço Unimed, os 3 verticais e o arquivo da logo.

---

## 0. O que o material real diz — e que o protótipo ainda não sabia

Isto muda o plano inteiro, então vem antes de tudo.

**A logo não é a que estava descrita no briefing.** O arquivo
`logo-barzim/Logo - Barzim de Rock.png` (1286×1223, fundo transparente) é uma placa
de madeira em formato de brasão, cantos chanfrados no topo e ponta no rodapé, com
contorno preto pesado e bisel. A hierarquia lida de cima para baixo é
**BARZIM DE / ROCK / — / DINO**, com "DINO" *embaixo*. Existe uma segunda versão, a
que aparece no backdrop do palco e na capa do "Vol. 01", em que "DINO" vai *em cima*.
São dois lockups do mesmo mark, e o site vai precisar dos dois.

**A construção da logo é a regra de cor da marca.** Na placa, o laranja nunca é letra.
Ele aparece exatamente duas vezes e sempre como **barra horizontal**: uma curta sobre o
"DE" e uma centrada entre ROCK e DINO. A tipografia é branca desgastada, a madeira é o
campo, o preto é o contorno. Isso resolve sozinho a discussão sobre onde usar o
laranja no site (ver §2).

Valores medidos no arquivo:

| elemento | hex medido | observação |
| --- | --- | --- |
| barra laranja inferior | `#F15215` | |
| barra laranja superior | `#F45819` | mesma tinta, luz diferente |
| branco da tipografia | `#F3EEE7` | off-white, não branco puro |
| madeira iluminada | `#8A4A22`–`#6E2E13` | |
| madeira em sombra | `#2B1A11` | |

**O barzim é grande.** As fotos não mostram um boteco: mostram o Espaço Unimed, com
público em mesas, taças na mesa, dois telões laterais, doze moving heads, banda de
sete pessoas. O "barzim" é **cenografia** — o fundo de palco é um bar impresso, com
prateleira de garrafas, luminárias pendentes, janela e quadros na parede. Ou seja: um
boteco construído em escala de arena. Essa tensão é a marca. O site não deve fingir
que é pequeno.

**A forma que se repete em todas as 7 fotos é a linha de cabeças.** Um horizonte preto,
recortado, ocupando de 40% a 75% do quadro. Não é uma caveira, não é uma guitarra, não é
uma chama: é o próprio público como silhueta. O site já diz "milhares de vozes",
"um coro só", "o coro que não para" — a foto é essa frase em forma. É daí que sai a
ideia do site inteiro.

**Formatos disponíveis, e o que isso proíbe.** As 7 fotos são 3000×2000, **todas 3:2
horizontais**. Os 3 vídeos são 720×1280 (9:16), 48s / 54s / 48s. Consequências diretas:

- a grade de 4 retratos 9:16 em "Momentos" **não tem como ser preenchida** — existem 3
  verticais, não 4;
- o mosaico de "O Barzim" pede uma foto 1200×1500 (retrato) que **não existe**;
- a galeria em `columns` (masonry) vai produzir colunas idênticas, porque todas as
  fotos têm a mesma proporção. Masonry aqui não tem função.

**O que há nos 3 verticais** (frames conferidos): (1) público de perto, óculos escuros,
chifrinho, celulares no alto, luz vermelha; (2) Dino rindo e brindando com o **copo
oficial do Barzim** na mão, imagem quase dessaturada/azulada; (3) entrada do evento,
alguém colocando pulseira no braço de outra pessoa. Isso é uma **sequência real**:
chegada → coro → brinde. Volto nisso em §3.3.

**A luz real não é laranja.** É vermelha (`#9D130C` no cenário), âmbar na plateia
(`#2C1E17` nas cabeças iluminadas), e em duas das sete fotos é **branca e azul fria**.
O preto das fotos é `#111319`–`#141616`. Um site de laranja único convivendo com
fotografia vermelha e azul é um problema de verdade, e tem decisão em §2.

---

## 1. O momento assinatura

### A escolha: **o hero é o coro**

A ousadia inteira do site é gasta na primeira dobra, em uma decisão de composição — não
de animação, não de efeito, não de filtro.

**O que acontece, concretamente:**

1. A foto de fundo é a **(39)** — a única em que o público ocupa três quartos do quadro
   em âmbar e o palco é um retângulo pequeno e distante. É a foto em que a banda quase
   não existe. Isso é deliberado: é contra o instinto de todo site de artista, e é
   exatamente o que a marca diz sobre si mesma.
2. A foto é posicionada com `object-position` calibrado para que **a linha do horizonte
   de cabeças caia em 62% da altura do viewport no desktop e 58% no mobile** — fixa,
   não "centralizada". Essa linha é a dobra real da página.
3. Acima da linha: só o palco ao longe e o cabeçalho. Nada de texto. É o espaço vazio
   que dá escala ao resto.
4. Abaixo da linha: o `<h1>` em display pesado, `bone`, ocupando toda a largura útil,
   e **uma segunda camada da mesma foto — só a silhueta do público, recortada em alpha
   — composta POR CIMA do texto**. As letras não ficam sobre a foto com um véu escuro:
   elas *nascem de dentro do público*, com a base ocluída em 15–25% pelas cabeças, do
   mesmo jeito que a luz do palco nasce.
5. Sem scrim. Sem gradiente de três paradas. A região inferior da foto (39) mede
   `#141616`; `bone` (`#F3EEE7`) sobre isso dá ~15:1 de contraste. **Essa foto é a única
   das sete que dispensa véu** — é mais um motivo concreto para ela e não outra.

**Por que essa seção e não outra.** A skill manda abrir com a coisa mais característica
do assunto, na forma mais apropriada. A coisa mais característica do Barzim não é o
Dino e não é o repertório: é o volume de gente cantando junto — o próprio site já
repete isso em quatro lugares. E o hero é o único lugar da página onde a ousadia não
compete com uma tarefa: agenda precisa vender, loja precisa vender, newsletter precisa
capturar. O hero só precisa causar. Gastar a ousadia em qualquer seção transacional
seria colocar decoração no caminho de uma conversão.

**Por que não as alternativas que considerei:**

- *Parede do barzim como fundo do site* (madeira + prateleira de garrafas): vira papel
  de parede, pesa no 4G e é o clichê de textura que o próprio briefing proíbe em espírito.
- *Contador animado de vozes subindo até N mil*: é literalmente o "número grande com
  rótulo pequeno" que a skill nomeia como tratamento padrão. E o número é demonstrativo.
- *Brasão como recorte recorrente* (conteúdo visto através da forma da placa): o mark é
  proprietário, isso é a favor, mas uma forma chanfrada repetida em vários lugares
  vira kit de time de futebol. Fica reservada para **um uso único**, no rodapé.
- *Timeline horizontal da noite conduzida por scroll*: bonita, mas é scroll-jacking
  disfarçado e joga o peso todo em JS. A sequência da noite ganha um lugar mais
  honesto em §3.3.

**Implementação (para não ficar em adjetivo):**

- dois arquivos: `hero.webp` (foto completa) e `hero-crowd.webp` (só a silhueta, com
  canal alfa, recortada uma vez no editor — ~40–60 KB) — mais um par no corte mobile;
- ordem de empilhamento: foto → `<h1>` + subtítulo → silhueta (`pointer-events: none`,
  `aria-hidden`);
- **plano B se não houver tempo de retoque:** a silhueta vira um `clip-path: polygon()`
  de ~24 pontos traçados sobre a foto, aplicado a um bloco `bg-ink`. Zero bytes extras,
  recorte um pouco menos orgânico. Funciona.
- **zero movimento.** Sem parallax, sem entrada, sem fade. Ver §4.

```
HOJE                                     PROPOSTA
┌────────────────────────────────────┐   ┌────────────────────────────────────┐
│ [logo]          nav    [INGRESSOS] │   │ [logo]          nav    [Ingressos] │
│                                    │   │                                    │
│   foto + scrim ink/85→55→100       │   │      ·   palco ao longe   ·        │
│                                    │   │        (foto 39, sem véu)          │
│                                    │   │                                    │
│                                    │   │                                    │
│ SITE OFICIAL · DINO FONSECA        │   │· · · linha do coro (62% vh) · · · ·│
│                                    │   │ O BOTECO                           │
│ O boteco do Dino.                  │   │ DO DINO                            │
│ Do jeito que o rock merece.  ←laranja  │▓▒▓▓▒▒▓▒▓▓▒▓▒▒▓▓▒▓▓▒▒▓▒▓▓▒▓▒▓▓▒▓▒▓▓▒│← silhueta
│                                    │   │ Grandes clássicos do rock.         │
│ Uma noite. Grandes clássicos.      │   │ Uma noite inteira. Um coro só.     │
│ [PRÓXIMO BARZIM] [ASSISTIR AFTER…] │   │ [Ver as datas]  [Ver a noite]      │
│ ┌ PRÓXIMA EDIÇÃO ────────────────┐ │   └────────────────────────────────────┘
│ │ 12 ABR │ Vila Aurora · SP │ >  │ │
│ └────────────────────────────────┘ │   sai: eyebrow, palavra laranja, véu,
└────────────────────────────────────┘   bloco "próxima edição", <Reveal>,
                                          parallax, caixa-alta nos botões
```

**Alinhamento:** tudo alinhado à esquerda, encostado na calha (20px mobile / 40px
desktop). O `<h1>` com `max-width: 14ch` para quebrar em 2–3 linhas altas. Nada
centralizado — tipo display grande e centralizado é o cartaz de festival genérico.

**Sobre a cópia:** o `<h1>` continua sendo a frase do cliente, "O boteco do Dino", e
perde a segunda frase. O trocadilho visual é a tensão: **a palavra diz boteco, a imagem
diz oito mil pessoas.** A segunda frase vira o subtítulo, abaixo da silhueta, e passa a
carregar o coro. Redação final é tarefa do copy, não minha; o que fixo é o tamanho:
`<h1>` de no máximo 16 caracteres para poder ser gigante.

---

## 2. Tokens

O briefing fixa a direção e ela não se rediscute. O que faço aqui é **precisão**, não
troca: o laranja atual foi escolhido no escuro, antes da logo chegar, e não é o laranja
da marca.

```
--ink        oklch(0.14 0.005 60)   #0B0908   fundo. Mantido.
--charcoal   oklch(0.20 0.006 60)   #17130F   segundo plano de seção. Mantido.
--ember      oklch(0.66 0.20 39)    #F2551A   CORRIGIDO (era 0.66 0.17 45)
--bone       oklch(0.948 0.008 75)  #F3EEE7   CORRIGIDO para o branco da logo
--ash        oklch(0.62 0.010 70)   #9A938C   NOVO: texto secundário legível
```

- **`--ember`**: `+0.03` de croma e `−6°` de matiz. É o `#F15215`/`#F45819` medido nas
  barras da placa. Contraste sobre `ink` ≈ **5,6:1** — passa AA para texto normal, o que
  o laranja antigo já fazia por pouco. Mantém `--ember-deep` para `:hover`/`:active`.
- **`--ash`**: hoje o texto secundário é `text-bone/60` e `text-bone/55`, que sobre `ink`
  fica em ~4,2:1 e ~3,8:1. O segundo reprova. Um token sólido resolve e para de espalhar
  opacidades arbitrárias pelo markup.
- **Madeira não vira token.** `#2B1A11`/`#8A4A22` ficam documentados aqui, mas o site
  nunca pinta nada de marrom. A madeira aparece **uma vez, no rodapé, como a própria
  placa** (§3.10). É assim que "textura discreta de madeira envelhecida" do briefing é
  atendida sem virar papel de parede.
- **Metal** também não vira textura. Vira a costura: `hairline` passa de uma borda
  `1px rgba(255,255,255,.10)` para **duas linhas de 1px** — clara em cima, `rgba(0,0,0,.45)`
  embaixo. É como uma dobra de chapa lê. Custa zero bytes.

### A regra do laranja

> **`ember` nunca é letra de título. `ember` marca a única ação viva da página.**

Isso vem da construção da logo: lá, o laranja é barra, nunca letterform. E resolve o
vício apontado na auditoria sem inventar regra nova.

Onde `ember` pode aparecer, e em nenhum outro lugar:

1. botão **Ingressos** no cabeçalho;
2. CTA da linha da agenda **quando o status é "À venda" / "Últimos ingressos"**;
3. borda do campo de e-mail **em foco**, e o anel de foco global;
4. `::selection`.

São ~4 ocorrências contra as **12 ocorrências de `text-ember`** que existem hoje em
`index.tsx`. Se o laranja estiver em toda parte, ele não destaca nada — e o briefing
pediu destaque.

**O que dizer ao cliente quando ele estranhar a falta de laranja:** o laranja está
enorme na página, em tela cheia — é a plateia em âmbar da foto (39), é o cenário
vermelho-alaranjado da (46), é a placa de madeira no rodapé. A interface é econômica
justamente para que o laranja *fotográfico* seja lido como o laranja da marca.

### Fotografia: a decisão difícil

Duas das sete fotos são azuis e brancas frias; o vídeo do brinde é quase preto e branco.
Um site "só quente" seria mentira sobre o show.

**Decisão: nenhuma foto é tratada.** Sem duotone laranja, sem grade unificado, sem
dessaturação. As fotos entram como o Marcos Oliveira entregou. O que muda é o véu:
onde houver texto por cima, entra **uma chapa única de `ink` a 45%**, não o gradiente
de três paradas (`from-ink/85 via-ink/55 to-ink`) usado hoje — que come a plateia
inteira da foto do hero.

Rejeitado explicitamente: duotone `ink`→`ember` em todas as fotos. Unificaria a paleta
num passe e é o caminho mais fácil, mas apaga o desenho de luz do show — que é a coisa
pela qual o cliente pagou — e é o *default* de fotografia tingida.

**`grain`** fica, em dois lugares só: hero e rodapé. Hoje está no hero e na newsletter.

---

## 3. Seção por seção

De 9 seções + rodapé para **7 + rodapé**. As duas que saem estão argumentadas.

### 3.1 Hero — reescrito

Ver §1. Resumo do que **sai**: `eyebrow` "Site oficial · Dino Fonseca" (ponto médio e
rótulo caixa-alta), a palavra laranja, o gradiente de três paradas, o parallax por
`scrollY`, o `<Reveal delay={400}>` e o bloco inteiro **"Próxima edição"**.

Sobre o bloco "Próxima edição": ele repete a primeira linha da agenda, disputa atenção
com a assinatura, é o único `<Reveal>` da primeira dobra e obriga o `DemoTag` a aparecer
antes de qualquer conteúdo. O CTA "Ver as datas" já leva o visitante lá. É o acessório
que sai antes de sair de casa.

O segundo CTA deixa de ser "Assistir aftermovie" (§3.4) e passa a apontar para
Momentos.

### 3.2 O Barzim

**Fica:** o texto de origem, que é bom e é do cliente. Coluna de texto à esquerda em
`max-width: 62ch`.

**Sai:**
- a palavra laranja em "só um show";
- o `eyebrow` "O Barzim";
- **o quarteto de estatísticas** `+120 / +40 / 3h / 1` com numeral laranja em `display`.
  É exatamente o tratamento que a skill nomeia como padrão, os números são
  demonstrativos por `AGENTS.md`, e uma grade 2×2 de números coloridos aparece em
  qualquer landing page;
- os 5 `<Reveal>`;
- o mosaico de 3 fotos, que pede um retrato inexistente.

**Entra:**
- os mesmos números, mas como **uma frase corrida** no corpo do texto, com os numerais
  inline a 1,6× do tamanho do texto e em `bone` — não em laranja, não em grade. Carrega a
  mesma informação e para de parecer dashboard;
- **uma foto só, sangrando a 100vw**, 3:2, quebrando o container `max-w-[1400px]`. A
  candidata é a (46): simétrica, cenário legível, plateia em silhueta no terço inferior —
  é a foto que explica o que é "o barzim" sem uma palavra. Legenda curta embaixo, à
  esquerda, em `ash`, 14px.

O sangramento é o "visual show" que substitui a animação: é a primeira vez na página em
que a imagem ignora a calha, e o efeito é físico.

**Alinhamento:** texto à esquerda dentro do grid; foto de borda a borda.

### 3.3 Momentos

Aqui está a única informação da página que **é de fato uma sequência**, e por isso é o
único lugar onde ordenação é legítima (a skill é explícita: numerar só se o conteúdo for
sequência). Os três verticais são três horas diferentes da mesma noite:

| vídeo | conteúdo real | papel |
| --- | --- | --- |
| entrada / pulseira | antes de entrar | a chegada |
| plateia cantando | durante | o coro |
| Dino brindando com o copo | quase no fim | o brinde |

**Sai:** a grade de 4 (só existem 3), as legendas demonstrativas ("Refrão de 4 mil
vozes", "Solo no meio do público"), o `eyebrow` "Reels", os 4 `<Reveal>`, o
`group-hover:scale-105` nas imagens.

**Entra:** três colunas 9:16 grandes (a página ganha em ter 3 maiores do que 4 menores),
marcadas por **horário** em vez de `01 / 02 / 03` — o horário é a sequência *e* é
específico do Barzim. Se os horários não puderem ser confirmados, vira
"Antes", "Durante", "Depois" e não vira número.

**Reprodução:** três vídeos 9:16 em autoplay são ~35 MB. `AGENTS.md` diz que o site abre
no 4G, na fila do show. Então: **poster frame estático, `preload="none"`, clique para
tocar, um por vez** — tocar um pausa os outros. O botão de play redondo com `backdrop-blur`
de hoje é glassmorphism e sai; no lugar, a palavra **Tocar** em display sobre a base do
quadro, com o anel de foco visível.

```
HOJE                                  PROPOSTA
┌───┐┌───┐┌───┐┌───┐                 ┌────────┐ ┌────────┐ ┌────────┐
│9:16││9:16││9:16││9:16│              │        │ │        │ │        │
│    ││    ││    ││    │              │  9:16  │ │  9:16  │ │  9:16  │
│ ▶  ││ ▶  ││ ▶  ││ ▶  │  ← só 3      │ (real) │ │ (real) │ │ (real) │
│CIDADE│…   ││    ││    │    existem   │        │ │        │ │        │
│legenda demo…      │                 │ Tocar  │ │ Tocar  │ │ Tocar  │
└───┘└───┘└───┘└───┘                 └────────┘ └────────┘ └────────┘
                                      20h40      22h15      00h30
                                      A chegada  O coro     O brinde
```

**Alinhamento:** grade à esquerda, legendas alinhadas à esquerda de cada coluna.
`DemoTag` se os horários forem ilustrativos.

### 3.4 Aftermovie — **recomendo cortar**

Hoje a seção inteira é um placeholder: uma foto da galeria a 70% de opacidade, um botão
de play grande, e a string `Aftermovie · 03:12` — cujo tempo é inventado e cujo ponto
médio é um dos vícios listados. Não existe aftermovie no material entregue.

Uma seção cujo conteúdo integral é um espaço reservado é a coisa mais fraca da página, e
tirá-la é o movimento de disciplina mais forte disponível. A intenção "assistir" já está
atendida em Momentos, com vídeo de verdade.

**Se o cliente insistir em manter** (é uma decisão dele, não minha): o slot vira um
`<video>` 16:9 sangrando a 100vw, com `poster` extraído do próprio aftermovie, sem botão
redondo e sem overlay de opacidade; a duração só aparece quando for a duração real; e o
`data-video-slot="aftermovie"` é preservado como manda `AGENTS.md`.

### 3.5 Agenda

É a seção que converte. Junto com Momentos, é uma das duas que recebem o **título grande**
(§4 da tipografia) — o tamanho é o que hierarquiza, não um rótulo.

**Sai:**
- o mês em laranja (`12 ABR` com `ABR` laranja);
- `Vila Aurora · SP` e `Sexta · Galpão Estação Velha` — os dois pontos médios;
- o `eyebrow` "Agenda";
- os 3 `<Reveal>`;
- **os cards.** Três caixas idênticas com borda, `hover:border-ember/60` e CTA de largura
  total são o kit de card de SaaS. Uma turnê é uma **lista de datas** — é assim que ela
  aparece nas costas da camiseta e no verso do cartaz. Essa é a vernácula certa.

**Fica:** o status como pastilha, porque ele é a única informação da página que muda
sozinha. E é onde o `ember` trabalha: laranja em "À venda" e "Últimos ingressos",
`ash` em "Em breve".

```
HOJE — 3 cards iguais                 PROPOSTA — lista de turnê

┌─────────┐┌─────────┐┌─────────┐      12   VILA AURORA        Galpão Estação Velha
│12 ABR ●││03 MAI ●││24 MAI ○│      ABR  sábado, 21h         SP        À venda  [Comprar]
│         ││         ││         │
│Vila·SP  ││Porto·MG ││Rio·PR   │      03   PORTO SERRANO      Pátio da Fundição
│sex·local││sex·local││sáb·local│      MAI  sexta, 21h         MG   Últimos  [Comprar]
│         ││         ││         │
│[COMPRAR]││[COMPRAR]││[AVISE-ME]│     24   RIO CLARO DO SUL   Arena Beira-Trilho
└─────────┘└─────────┘└─────────┘      MAI  sábado, 21h        PR    Em breve [Avise-me]
                                       ╰─┬─╯
                                         └ numeral em display, coluna própria
```

Cada dado ocupa uma célula do grid, então **nenhum caractere de junção é necessário** —
é o grid que separa cidade de UF, dia de local. No mobile a linha reempilha em duas
faixas (data + cidade; local + status + CTA), nunca em card.

**Uma única régua no topo e uma no rodapé do bloco inteiro** — não uma entre cada linha.
Os numerais de data já criam o ritmo vertical; réguas entre todas as linhas seriam
tabela de jornal, e isso é um default (ver §5).

**Alinhamento:** numeral de data alinhado à direita dentro da própria coluna, formando
uma espinha vertical de números; todo o resto à esquerda. `DemoTag` obrigatório.

### 3.6 Loja

**Sai:**
- `Ver produto →` — a seta colada e, antes dela, o próprio rótulo: o card inteiro já é
  clicável, então é chrome redundante;
- a borda de cada card e o `hover:border-ember/50`;
- o preço em laranja (preço não é estado);
- os 4 `<Reveal>` e o `group-hover:scale-105`.

**Entra:** a foto do produto direto sobre o fundo, sem moldura, nome embaixo em Barlow 600
e preço em `bone`. O produto é a imagem; a caixa em volta não acrescenta nada.

Nota de conteúdo: o **copo do Barzim é real** — aparece na mão do Dino no vídeo do
brinde. Vale fotografar o copo de verdade antes de publicar, porque ele é o único item da
loja que já tem prova de existência na própria página. Os demais seguem com `DemoTag`.

Título em tamanho secundário. **Alinhamento:** grade e legendas à esquerda.

### 3.7 Galeria

São 7 fotos, todas 3:2. `columns` (masonry) com proporção única produz uma grade
regular e sem graça — a ferramenta não tem o que fazer.

**Sai:** o masonry, o `eyebrow` "Galeria", os 6 `<Reveal>`, o `hover:brightness-110`.

**Entra:** uma **faixa horizontal sangrada**, altura fixa de 70vh no desktop e 52vh no
mobile, fotos em 3:2 nativo, rolagem livre com o dedo/trackpad. É como se olha 7 fotos
largas de uma noite só, é movimento **conduzido pelo visitante** (que a skill aprova
explicitamente) e entrega "show" sem uma única animação automática.

Requisitos que a faixa tem de cumprir para não virar armadilha: container de scroll
nativo (nada de scroll-jacking), `tabindex="0"` com anel de foco visível, setas do
teclado funcionando, `overscroll-behavior-x: contain` para não sequestrar o gesto de
voltar, e a rolagem vertical da página nunca capturada.

**Crédito ao fotógrafo — Marcos Oliveira (@marcosoliveirapht) — no fim da faixa.** É
informação real, é obrigação profissional, e é o tipo de detalhe que faz um site parecer
feito por gente.

*Alternativa rejeitada:* grade de 2 colunas 3:2. Segura, acessível, entediante. Se o
cliente recusar a faixa, é o plano B.

### 3.8 Social (Instagram) — **recomendo cortar**

Seis quadrados que **todos apontam para a raiz do perfil**, usando imagens recicladas da
galeria e dos reels. São enfeites fingindo ser conteúdo: o visitante clica em seis coisas
diferentes e chega sempre no mesmo lugar. O `index.tsx` já tem um comentário com essa
lição aprendida sobre as redes do rodapé ("link que mente sobre o destino é pior que
link ausente") — vale igual aqui.

Sai a seção inteira; o Instagram continua presente no cabeçalho do rodapé e em `REDES`.
**Se um dia houver feed de verdade** (posts com URL própria), volta — com os links certos.

Com 3.4 e 3.8 fora, a home vai de 9 para 7 seções, e as que ficam têm conteúdo real.

### 3.9 Newsletter

**Sai:** o `eyebrow`, a palavra "Barzim" em laranja, e **a centralização**. Uma única
seção centralizada no meio de uma página alinhada à esquerda é uma exceção sem motivo.

**Entra:** faixa em duas colunas — título e linha de apoio à esquerda, formulário à
direita, os dois alinhados à esquerda dentro de suas colunas. No mobile empilha.

O `ember` trabalha aqui: **borda do campo em foco**. É estado.

**Cópia:** "Entre pro Barzim" é boa e fica. O botão passa a dizer o que acontece, e o
mesmo verbo tem de voltar no retorno — se o botão diz "Receber as datas", a confirmação
diz "Pronto. Você vai receber as datas." Coerência de vocabulário é sinalização, não
detalhe. E o erro não pede desculpa: diz o que houve e o que fazer.

`grain` fica só no hero e no rodapé, então sai daqui.

### 3.10 Rodapé

**Sai:** os 3 `eyebrow` das colunas ("Navegue", "Produção", "Contato") — viram Barlow 600,
14px, caixa baixa. E sai o `Logo.tsx` atual inteiro: o placeholder tipográfico com
`wood.jpg` de fundo e gradiente por cima não é mais necessário, a logo chegou.

**Entra — e esta é uma decisão de sistema que o projeto precisa tomar:**

A placa tem bisel, contorno pesado e veio de madeira. A 132px de largura no cabeçalho
isso vira borrão. Então:

- **Cabeçalho:** lockup **plano**, monocromático — o wordmark branco, sem madeira, sem
  bisel, sem contorno — a ~132px. Precisa ser produzido (SVG, a partir do PNG).
- **Rodapé:** a **placa completa**, em madeira, a ~280px, onde a textura é legível e o
  bisel tem sentido.

É assim que a madeira do briefing entra no site exatamente uma vez, no tamanho em que ela
funciona. E é o **único uso** da forma do brasão na página (§1).

**Fica:** as colunas com destino real, o `REDES` enxuto, o `DemoTag`, o copyright. O
ponto médio em `© 2026 Barzim de Rock · Dino Fonseca` pode ficar — ali é assinatura de
rodapé, não uma string de metadados montada a partir de campos.

### 3.11 Cabeçalho (não estava na lista, mas muda)

`backdrop-blur` ao rolar fica — é funcional, não decorativo. O que muda: navegação em
Barlow 600 **caixa baixa, sem `tracking`** (hoje é `display` caixa-alta com `0.22em`), e o
mesmo vale para todos os botões. `btn-base` perde `text-transform: uppercase` e
`letter-spacing: 0.14em`.

Botão em caixa baixa é uma escolha, não um descuido: a caixa-alta espaçada em botão é o
mesmo maneirismo do `eyebrow`, e a skill pede voz ativa e frase de verdade no CTA. O
contraste entre um `<h1>` gigante todo em caixa-alta e um botão em caixa baixa é mais
forte do que os dois em caixa-alta.

---

## 4. Tipografia

### O display: vale trocar o Oswald?

**Vale.** E o argumento não é "Oswald é comum" — é que **o Oswald não se parece com a
logo**.

A letra da placa é um grotesco condensado muito pesado, de laterais retas, contadores
quadrados, aberturas fechadas e preenchimento desgastado. O Oswald é um revival de
Alternate Gothic: mais leve, mais estreito, terminais mais macios, desenho mais educado.
Colocados lado a lado no cabeçalho, a placa e o título parecem duas marcas diferentes. O
display tem que **concordar com o mark**, não competir com ele.

| face | licença / custo | a favor | contra |
| --- | --- | --- | --- |
| **Anton** *(recomendado)* | SIL OFL 1.1, gratuita, Google Fonts | de longe o match gratuito mais próximo da letra da placa: massa, laterais retas, contadores quadrados. ~28 KB em woff2 latin+latin-ext | **peso único (400, que pesa como 900)**. Não serve para nada abaixo de ~48px nem para UI. É também uma fonte muito usada (a "fonte de thumbnail de YouTube") |
| **Big Shoulders Display** | SIL OFL 1.1, gratuita, Google Fonts | variável 100–900, condensada, terminais quadrados, desenhada para sinalização urbana; bem menos batida | mais angular e mais geométrica que a placa; menos "cartaz", mais "sinal de rua" |
| **Oswald** *(status quo)* | SIL OFL 1.1, gratuita | custo de migração zero; 4 pesos já carregados | não combina com a logo; top-10 do Google Fonts; é a escolha óbvia que o briefing deste projeto não pediu |
| **Druk Condensed** (Commercial Type) | comercial, ~€200+ por estilo em licença web, auto-hospedada | a coisa real. Super/Heavy Condensed é a referência de cartaz contemporâneo | custo, e obriga a auto-hospedar (o que, aliás, é bom aqui) |
| **Knockout** (Hoefler&Co), famílias 67–71 | comercial, licença web por assinatura | o gótico de cartaz americano definitivo, com faixa completa de larguras — resolveria display *e* rótulos com uma família só | custo recorrente |

**Recomendação: Anton para display + Barlow para texto. Oswald sai do projeto.**

Duas famílias, claramente distintas (a skill pede uma ou duas, e se duas, bem diferentes
— Anton e Barlow são extremos opostos de peso e largura, então passa). Rede: saem 4
pesos de Oswald, entra 1 de Anton. **Menos bytes do que hoje.**

O que o Oswald fazia e o Anton não pode fazer — botões, navegação, rótulos pequenos
espaçados — migra para **Barlow 600**, o que é coerente com a decisão de caixa baixa em
§3.11. O token continua se chamando `--font-display`, então nenhum componente muda de
nome.

**Disciplina obrigatória do Anton**, senão ele vira meme: só em ≥48px, sempre em
caixa-alta, sempre com `letter-spacing: -0.03em` e `line-height` entre 0.82 e 0.92, e
sempre encostado na calha esquerda ou sangrando. Nunca centralizado, nunca em botão,
nunca em rótulo.

### Carregamento

Isto é decisão de design, porque o `<h1>` do hero **é o LCP** e `AGENTS.md` diz que o
site abre no 4G.

- **Auto-hospedar** os `.woff2` em `public/fonts/`. Saem do `__root.tsx` os dois
  `preconnect` para `fonts.googleapis.com`/`fonts.gstatic.com` e o `<link>` da folha —
  isso elimina dois handshakes DNS+TLS antes do primeiro pixel de texto.
- `<link rel="preload" as="font" type="font/woff2" crossorigin>` **só para o Anton**.
  Barlow entra com `font-display: swap` normal.
- `@font-face` de fallback com `size-adjust` / `ascent-override` / `descent-override`
  calibrados contra `Impact` (para o Anton) e `Arial` (para o Barlow), para o swap não
  produzir CLS num título de 200px.
- Subset latin + latin-ext (o português precisa de ã õ ç é ê í ó ú à).

### A escala

Base 17px. A escala é **deliberadamente descontínua**: um agrupamento apertado embaixo,
para ler, e um agrupamento distante em cima, para cartaz, sem nada no meio. O vão é o
gesto — é o que separa "texto de site" de "tipo como imagem".

| papel | tamanho | entrelinha | face / peso | notas |
| --- | --- | --- | --- | --- |
| micro | 12px | 1.45 | Barlow 400 | `DemoTag`, crédito de foto, copyright |
| small | 14px | 1.5 | Barlow 400/600 | legendas, metadados, colunas do rodapé |
| **base** | **17px** | **1.6** | Barlow 400 | corpo. Medida **60–64ch** |
| lead | 20px | 1.5 | Barlow 300 | subtítulo do hero, abertura de seção |
| h3 | 22px | 1.25 | Barlow 600 | nome de produto, cidade na agenda |
| — *(vão)* | | | | |
| h2 secundária | 34px | 1.0 | Anton | O Barzim, Loja, Galeria, Newsletter |
| numeral de data | 56px | 0.9 | Anton | agenda |
| h2 primária | `clamp(3.25rem, 8vw, 6.5rem)` | 0.88 | Anton | **só Momentos e Agenda** |
| h1 | `clamp(4.25rem, 14vw, 13rem)` | 0.82 | Anton | hero |

`letter-spacing`: `-0.035em` no h1, `-0.03em` nos h2 em Anton, `0` no Barlow em todos os
tamanhos, **nunca `0.28em`** (o valor do `eyebrow` atual).

**Os dois tamanhos de h2 são o sistema de rótulos.** Momentos e Agenda são grandes porque
são as duas seções que fazem a página funcionar; as outras são pequenas. O tamanho
carrega a hierarquia — que é justamente o trabalho que os 9 `eyebrow` faziam mal.

---

## 5. Movimento

Hoje: **22 componentes `<Reveal>` na home** (o comentário no `styles.css` registra que a
versão anterior chegou a 43 blocos em `opacity: 0`), mais parallax no hero, mais
`group-hover:scale-105`/`scale-110` em quatro conjuntos de imagens, mais
`transition-colors` de borda em todos os cards.

### Proposta: zero movimento não solicitado na página inteira

Não "menos". Zero. Nenhuma entrada por scroll, nenhum parallax, nenhum fade automático,
nem no hero.

O raciocínio: `fade-and-slide-up` em cada seção é, nas palavras da própria skill, o
default genérico que lê como página gerada. E 22 deles não somam impacto — somam
atraso. O visitante rola e a página fica *devendo* conteúdo a cada tela. Num 4G, na fila
do show, isso é pior: o IntersectionObserver dispara depois do JS, e o JS chega por
último.

A assinatura da página (§1) é **composicional, não temporal**. Ela existe no primeiro
frame pintado, sem esperar hidratação — o que é exatamente o que `AGENTS.md` exige da
primeira dobra.

**O que merece movimento** (tudo resposta a uma ação do visitante):

| movimento | por quê |
| --- | --- |
| abrir/fechar o menu mobile, com os itens escalonados | mostra o que mudou; já existe e está bem-feito, incluindo `inert` e Esc |
| `:hover` e `:focus-visible` em coisas genuinamente clicáveis | é feedback de alvo |
| play do vídeo em Momentos, e pausar os outros | mostra o que mudou |
| rolagem da faixa da galeria | é o dedo do visitante |
| `:active` dos botões (`translateY(1px) scale(.985)`) | resposta tátil; já existe |

**O que sai:** todos os `<Reveal>` de `index.tsx`; o parallax do hero (que também elimina
o listener de `scroll` com `setState` a cada frame no componente `Home`); todos os
`scale` em `:hover` de imagem — ampliar a foto de um produto ou de um reel não informa
nada, só mexe; a mudança de cor de borda em `:hover` dos cards, que somem junto com os
cards.

**O que fica no CSS:** o utilitário `reveal` **permanece em `styles.css`**. Ele está
corretamente escrito (visível por padrão, escondido só sob `scripting: enabled`,
`prefers-reduced-motion` respeitado) e pode ser preciso um dia. O que muda é que
`index.tsx` para de usá-lo. Não vale reescrever o utilitário; vale parar de aplicá-lo
22 vezes.

`prefers-reduced-motion` continua respeitado em tudo que sobrar, e `AGENTS.md` já proíbe
`transition-all` — as transições dos botões já listam propriedades e estão certas.

---

## 6. A revisão crítica que a skill exige

Reli o plano acima procurando o que nele ainda é o que eu produziria para qualquer site
de show. Achei seis coisas. Quatro eu corrigi; duas eu mantive com o custo declarado.

### 6.1 A assinatura tinha uma animação escondida — **corrigido**

Na primeira versão deste plano, a camada de silhueta do público "subia 2–3% em 1,2s ao
carregar a página, como se a plateia se levantasse". Bonito de descrever. Mas é um
`fade-and-slide-up` — o mesmo que eu estava condenando em §5 — só que um, grande, e com o
álibi de ser "o momento orquestrado".

Depois considerei amarrá-lo ao scroll em vez do load. Pior: parallax de hero é um default
tão batido quanto o outro, e o site **já tinha** parallax de hero.

**Mudei para zero movimento na página inteira.** A assinatura é composicional. É uma
posição mais difícil de defender numa reunião e mais fácil de defender num plano, e é a
correta: se a composição precisa de animação para funcionar, a composição não está pronta.

### 6.2 A lista da agenda era um jornal — **corrigido**

Escrevi "lista de largura total com hairline entre as linhas e raio zero". Isso é, com
todas as letras, o traço 3 da lista de calibração da skill: *layout de jornal, réguas
capilares, zero raio, colunas densas*. E o site já é raio 0.25rem com hairlines por toda
parte, então eu estaria aprofundando um default existente em vez de corrigi-lo.

**Mudei:** a lista fica (uma turnê é mesmo uma lista, e a vernácula do verso do cartaz é
específica do assunto), mas **as réguas entre as linhas saem**. Sobram duas, no topo e no
pé do bloco inteiro. A separação passa a ser feita pelos numerais de data em Anton 56px,
que criam ritmo vertical sozinhos. Quatro réguas viram duas. É a regra da Chanel aplicada
no lugar onde eu tinha acabado de acrescentar um acessório.

### 6.3 Eu tirei o `eyebrow` e ia colocar outra coisa no lugar — **corrigido**

Minha primeira solução para os 9 `eyebrow` foi trocá-los por **uma barra laranja de
40×3px acima de cada título**, justificada como "a barra é o dispositivo da própria
logo". O argumento é bom o suficiente para ser perigoso: continua sendo um enfeite
repetido 9 vezes acima de todo cabeçalho, só que laranja em vez de escrito. Troca de
default por default.

**Mudei: nada substitui o `eyebrow`.** A hierarquia passa a ser feita por **tamanho** —
dois tamanhos de h2, e as duas seções que convertem ficam com o grande (§4). Remover sem
repor é o movimento correto, e o tamanho carrega informação real (importância) em vez de
decorar.

### 6.4 "Ember = só estado" arriscava entregar um site sem laranja — **mitigado, não mudado**

A regra reduz o laranja de 12 ocorrências para ~4. O cliente pediu laranja como destaque
e pode ler isso como a agência tendo tirado o laranja dele.

Não mudei a regra, porque ela é derivada da construção do próprio mark do cliente — na
placa, o laranja é barra, nunca letra — e esse é um argumento que se apresenta com o
arquivo aberto na tela. Mas acrescentei em §2 a mitigação e a frase a dizer: o laranja
está em tela cheia, na fotografia, e a interface é econômica **para que** o laranja
fotográfico seja lido como o da marca. Um laranja em toda parte destaca coisa nenhuma.

### 6.5 Anton é um default por direito próprio — **mitigado, com saída paga**

Recomendei a fonte gratuita mais óbvia de "condensada pesada". Anton está em metade das
thumbnails da internet. A defesa honesta é que **ela é a que mais se parece com a letra da
placa**, e concordar com o mark é um critério do assunto, não uma preferência minha. As
mitigações são concretas: uso só em ≥48px, só em caixa-alta, tracking negativo, sempre na
calha ou sangrando, nunca em UI. E deixei o caminho de upgrade precificado (Druk
Condensed, Knockout) para quando houver orçamento — que é a resposta certa quando o
gratuito chega perto mas não chega lá.

### 6.6 "Hero com foto de público" é o hero de todo site de show — **defendido com o que o diferencia**

Preciso ser honesto: "foto grande da plateia no hero" é o que qualquer um faria. Três
coisas fazem esta versão não ser aquilo:

1. **A linha do coro é fixa em 62% do viewport**, não a foto centralizada. O enquadramento
   é a decisão, não a foto.
2. **O texto está dentro do público, não em cima dele** — ocluído pela silhueta, sem véu.
   Isso só é possível porque escolhi a única das sete fotos cujo terço inferior mede
   `#141616` e dispensa scrim. A escolha da foto é uma consequência técnica verificável,
   não um gosto.
3. **A foto escolhida é a que quase não tem o artista.** Todo site de artista abre com o
   artista. Este abre com a plateia, e a tensão com a palavra "boteco" no `<h1>` é a ideia
   inteira.

Se algum dos três cair na implementação, o hero volta a ser genérico e é melhor recomeçar
do que entregar pela metade.

### O que ficou de fora do plano, e é bom que tenha ficado

Um teste final: se eu apagar o nome "Barzim de Rock" deste documento, ele ainda serve para
outro site? Os pedaços que sobreviveriam ao apagamento são os que eu cortei — quarteto de
estatísticas, cards de agenda, tiles de Instagram, eyebrows, masonry, 22 reveals. O que
sobrou depende de: a placa de madeira com o laranja em barra, a foto (39) com a linha de
cabeças em `#141616`, os três verticais que formam chegada/coro/brinde, o Espaço Unimed
cheio de mesas, e a frase "um coro só" que o cliente já usava antes de eu chegar.

---

## 7. Resumo executável

**Corta:** seção Aftermovie (placeholder), seção Social (links que mentem), bloco
"Próxima edição" do hero, quarteto de estatísticas, cards da agenda, cards da loja,
masonry da galeria, `Ver produto →`, 9 `eyebrow`, 12 usos de `text-ember`, 22 `<Reveal>`,
parallax do hero, `scale` em hover de imagem, `Logo.tsx` com `wood.jpg`.

**Corrige:** `--ember` para `oklch(0.66 0.20 39)`, `--bone` para `oklch(0.948 0.008 75)`,
novo `--ash`, `hairline` com duas linhas, `btn-base` em caixa baixa sem tracking,
`--font-display` de Oswald para Anton, fontes auto-hospedadas com preload do Anton.

**Constrói:** o hero do coro (dois arquivos de imagem, linha fixa em 62%, sem véu, sem
movimento), foto sangrada em O Barzim, 3 verticais reais em Momentos com play sob demanda,
lista de turnê na Agenda, faixa horizontal na Galeria com crédito ao fotógrafo, lockup
plano para o cabeçalho e placa completa no rodapé.

**Não mexe em:** roteamento file-based, `routeTree.gen.ts`, ordem de plugins do Vite,
arrays tipados no topo de `index.tsx`, atributos `data-video-slot`, `DemoTag` em toda
seção com dado demonstrativo, `width`/`height` em toda `<img>`, `loading="lazy"` abaixo da
dobra, ausência de `<Reveal>` na primeira dobra, `prefers-reduced-motion`, foco visível.

**Pendências para o cliente, antes de implementar:** confirmar o corte das duas seções;
confirmar os horários reais dos três verticais; aprovar o crédito ao fotógrafo; decidir
entre Anton (grátis, hoje) e Druk/Knockout (pago, melhor); fotografar o copo oficial;
fornecer o SVG do lockup plano ou aprovar sua produção a partir do PNG.
