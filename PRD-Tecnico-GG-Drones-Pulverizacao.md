# PRD Técnico — Landing Page GG Drones Pulverização

**Versão:** 1.0  
**Data:** 01/08/2026  
**Status:** pronto para desenvolvimento, com pendências comerciais e legais identificadas  
**Referência visual obrigatória:** `upload/ifrem leading page gg drones pulverizacao .png`

---

## 1. Visão do produto

Criar uma landing page de alta conversão para a **GG Drones Pulverização**, empresa do **GG Group** focada em serviços agrícolas com drones. A página deve apresentar os benefícios do serviço, explicar o processo, estimar o tempo de pulverização, demonstrar frota, segurança, operação e prova social, responder dúvidas e conduzir o visitante ao WhatsApp.

O resultado visual deve reproduzir com alta fidelidade o modelo aprovado: estética premium, profissional e limpa; grandes áreas de respiro; alternância entre fundos claros e azul-petróleo escuro; verdes e cianos derivados da marca; fotografia agrícola cinematográfica; gradientes sutis; cards compactos; e uma linha vertical animada na seção de etapas.

### Objetivos

1. Gerar contatos qualificados pelo WhatsApp.
2. Explicar o serviço de forma rápida para produtores rurais.
3. Transmitir precisão, planejamento, segurança e responsabilidade.
4. Posicionar a empresa em buscas locais e temáticas no Google.
5. Tornar o conteúdo legível por mecanismos de busca e sistemas de IA.
6. Apresentar a relação entre a GG Drones Pulverização e as demais empresas do GG Group.

### Conversão principal

Clique em qualquer CTA de orçamento/contato, direcionando para:

```text
https://wa.me/5545991015512?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20GG%20Drones%20Pulveriza%C3%A7%C3%A3o%20e%20gostaria%20de%20solicitar%20uma%20avalia%C3%A7%C3%A3o%20para%20minha%20%C3%A1rea.
```

Número exibido: **(45) 99101-5512**.

### Público principal

- Produtores rurais e gestores de propriedades agrícolas.
- Agrônomos, cooperativas e responsáveis por operações de pulverização.
- Clientes de Cascavel, Oeste e Sudoeste do Paraná; outras regiões sob avaliação logística.

---

## 2. Escopo e entregáveis

### Incluído no MVP

- Landing page responsiva em uma única rota pública.
- Menu com âncoras e header fixo.
- Hero com vídeo, poster e degradê.
- 11 blocos de conteúdo, CTA final, empresas do grupo e rodapé.
- Calculadora de tempo para DJI Agras T10, T20P e T40.
- Galeria responsiva com fotos e vídeos, lightbox e navegação por teclado/toque.
- FAQ em accordion acessível.
- Animações de entrada e progresso vinculadas ao scroll.
- Integração com WhatsApp.
- SEO técnico, dados estruturados, sitemap e robots.
- Analytics e eventos de conversão, quando os IDs forem fornecidos.
- Banner de consentimento/LGPD quando houver tags não essenciais.
- Páginas mínimas de Política de Privacidade, Termos de Uso e Cookies, ou links temporariamente desativados até aprovação do conteúdo jurídico.

### Fora do MVP

- Área administrativa ou login.
- CRM próprio.
- Cotação automática de preço.
- Agendamento com calendário.
- Publicação automática em redes sociais.
- Tradução para outros idiomas.

---

## 3. Stack recomendada

| Camada | Tecnologia | Diretriz |
|---|---|---|
| Framework | **Next.js 16.2.11+**, App Router | Usar uma versão com correções de segurança, Server Components por padrão e geração estática da LP. |
| UI | **React 19.2+** + TypeScript `strict` | Componentes pequenos, tipados e acessíveis. |
| Estilo | **Tailwind CSS 4.3+** + CSS custom properties | Tokens globais; evitar CSS duplicado e dependências visuais pesadas. |
| Animação | **Motion for React 12.42+** + CSS/WAAPI | Motion apenas em interações/scroll complexos; CSS para hover e fades simples. |
| Imagens | `next/image` | AVIF/WebP, `sizes`, dimensões explícitas e lazy loading. |
| Vídeo | `<video>` nativo, arquivo otimizado em CDN/Vercel Blob | Vimeo somente como fallback; não carregar iframe pesado acima da dobra. |
| Ícones | SVG local ou Lucide com imports individuais | Não importar pacote completo. |
| Formatação/testes | ESLint, Prettier, Vitest, Testing Library, Playwright | Testar cálculo, FAQ, links, foco e responsividade. |
| Deploy | Vercel | CDN, HTTPS, previews por PR e analytics opcional. |
| Métricas | GA4/GTM + Google Ads; Meta Pixel opcional | Carregar após consentimento quando exigido. |

O projeto deve ser estático sempre que possível. Somente calculadora, accordion, galeria/lightbox, menu mobile e animações precisam ser Client Components.

### Estrutura sugerida

```text
src/
  app/
    layout.tsx
    page.tsx
    robots.ts
    sitemap.ts
    manifest.ts
    politica-de-privacidade/page.tsx
    termos-de-uso/page.tsx
  components/
    layout/Header.tsx
    layout/Footer.tsx
    sections/Hero.tsx
    sections/Benefits.tsx
    sections/ProcessTimeline.tsx
    sections/ProductivityCalculator.tsx
    sections/Fleet.tsx
    sections/Compliance.tsx
    sections/Testimonials.tsx
    sections/Gallery.tsx
    sections/Faq.tsx
    sections/FinalCta.tsx
    sections/GroupCompanies.tsx
    ui/Reveal.tsx
    ui/WhatsAppButton.tsx
    ui/Lightbox.tsx
  content/
    site.ts
    benefits.ts
    fleet.ts
    faq.ts
    testimonials.ts
  lib/
    analytics.ts
    calculator.ts
    metadata.ts
    schema.ts
  styles/globals.css
public/
  brand/
  media/hero/
  media/benefits/
  media/fleet/
  media/gallery/
  regulators/
```

---

## 4. Direção visual

### Referência

O arquivo `ifrem leading page gg drones pulverizacao .png` é a fonte visual de verdade para proporção, ordem, contraste, densidade e estilo. As imagens podem ser recriadas por IA com composição equivalente, conforme autorização do cliente, mas textos, logotipos e selos não devem ser gerados dentro das imagens.

### Tokens iniciais

Os valores devem ser ajustados após extração final da marca:

```css
:root {
  --color-ink: #031923;
  --color-deep: #002533;
  --color-deep-2: #003746;
  --color-green: #4ecb43;
  --color-lime: #80d44d;
  --color-cyan: #2cb9d0;
  --color-surface: #f7f7f3;
  --color-white: #ffffff;
  --color-muted: #66757b;
  --color-line: rgba(44, 185, 208, 0.28);
  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --shadow-card: 0 18px 50px rgba(0, 31, 43, 0.10);
}
```

- Fonte: sans-serif moderna e legível, carregada com `next/font` e subset latino. Sugestão: **Manrope** ou **Inter**.
- Conteúdo: `max-width: 1280px`, com `padding-inline` responsivo.
- Seções principais: desktop entre 104 e 144 px de padding vertical; tablet entre 80 e 104 px; mobile entre 64 e 88 px.
- H1 desktop: `clamp(48px, 5vw, 76px)`; H2: `clamp(32px, 4vw, 54px)`.
- Cards com bordas finas, sombra discreta e sem elementos vazando.
- Gradientes devem apoiar hierarquia, nunca prejudicar contraste.

### Imagens e autenticidade

- Fotos geradas por IA devem retratar drones agrícolas, lavouras e operação de forma plausível, sem marcas deformadas, hélices incoerentes ou equipamentos inexistentes.
- Imagens geradas não podem conter textos incorporados.
- Logos do GG Group e órgãos reguladores devem ser arquivos oficiais em SVG/PNG, nunca recriados por IA.
- Não fabricar pessoas, nomes, propriedades, certificações ou depoimentos reais.
- Registrar no repositório a origem/licença de cada mídia em `public/media/README.md`.

---

## 5. Arquitetura da página e textos finais

### Âncoras

`#inicio`, `#beneficios`, `#como-funciona`, `#calculadora`, `#aeronaves`, `#regularizacao`, `#depoimentos`, `#galeria`, `#faq`, `#gg-group`, `#contato`.

### 5.1 Header

**Layout:** transparente sobre o hero; torna-se azul-petróleo sólido com blur leve após 40 px de scroll. Logo à esquerda, navegação central, CTA à direita. Mobile com botão de menu e CTA compacto.

**Itens exatos:**

- Serviços → `#beneficios`
- Como funciona → `#como-funciona`
- Calculadora → `#calculadora`
- Legalidade → `#regularizacao`
- Frota → `#aeronaves`
- Sobre → `#gg-group`
- Galeria → `#galeria`
- FAQ → `#faq`
- Botão: **SOLICITAR ORÇAMENTO** → WhatsApp

### 5.2 Hero — `#inicio`

**Mídia:** usar o vídeo Vimeo `996425277`, hash `e0a97180d0`, já localizado na página da Gale. Para produção, obter o arquivo autorizado e gerar versões WebM/MP4. Se isso não for possível, usar uma fachada com poster e carregar o player após interação/idle.

**Configuração do vídeo:** `autoplay`, `muted`, `loop`, `playsInline`, sem controles; `object-fit: cover`; enquadramento central no desktop e foco no drone no mobile. Poster baseado no quadro autorizado. Degradê sobreposto, da esquerda `rgba(0,25,35,.94)` para transparente, mais vinheta inferior para integrar a faixa de benefícios.

**Texto exato:**

- H1: **Precisão que transforma o campo**
- Apoio: **Pulverização com drones agrícolas para mais eficiência, economia e produtividade.**
- CTA primário: **SOLICITAR ORÇAMENTO** → WhatsApp
- CTA secundário: **CONHEÇA A OPERAÇÃO** → `#galeria`

**Faixa de confiança:**

- **Aplicação precisa**
- **Sem amassamento da cultura**
- **Operação planejada**
- **Relatório da aplicação**

### 5.3 Benefícios — `#beneficios`

**Eyebrow:** POR QUE USAR DRONES?  
**H2:** Benefícios que fazem diferença no campo  
**Apoio:** Mais agilidade, precisão e acesso para uma operação agrícola mais eficiente.

Grade 3 × 2 no desktop, 2 × 3 no tablet e uma coluna no mobile:

1. **Evita o amassamento da lavoura**  
   Como opera pelo ar, o drone evita marcas de rodados, compactação do solo e danos às plantas durante a aplicação.
2. **Aplicação com solo ainda molhado**  
   Permite retomar a aplicação mais cedo após a chuva, sem o risco de atolar máquinas pesadas no campo.
3. **Acesso a áreas de difícil alcance**  
   Alcança encostas, terrenos irregulares, áreas acidentadas e locais com vegetação mais densa.
4. **Economia de água**  
   A aplicação em baixo volume reduz o uso de água, respeitando a recomendação técnica e a bula do produto.
5. **Eficiência na aplicação**  
   O efeito downwash movimenta as folhas e favorece uma cobertura mais uniforme, inclusive nas partes baixas da planta.
6. **Dispersão de sólidos**  
   O equipamento também distribui sementes, granulados e fertilizantes sólidos com uniformidade e precisão.

### 5.4 Processo vertical — `#como-funciona`

**H2 acessível:** Do planejamento ao relatório

Seção escura e alta. Linha central vertical reta; conteúdo alternado à esquerda/direita. Em mobile, linha à esquerda e todos os textos à direita. Não usar cards nem imagens.

1. **01 — Contato e briefing**  
   Entendemos sua necessidade, as características da área e os objetivos da aplicação.  
   **25%**
2. **02 — Planejamento**  
   Analisamos a área, definimos a estratégia de voo e preparamos cada detalhe da operação.  
   **50%**
3. **03 — Execução**  
   Realizamos a aplicação com precisão, segurança e acompanhamento em tempo real.  
   **75%**
4. **04 — Relatório e resultados**  
   Finalizamos a operação com o registro da aplicação e a entrega do relatório.  
   **100%**

Rodapé da linha: **Operação concluída**.

### 5.5 Calculadora — `#calculadora`

Seção clara, compacta e larga. Um único card dividido em entrada e resultado, com maior peso visual no tempo.

**Eyebrow:** SIMULAÇÃO RÁPIDA  
**H2:** Quanto tempo sua área pode levar?

**Campos:**

- Label: **MODELO DO DRONE**
- Opções: **DJI Agras T10**, **DJI Agras T20P**, **DJI Agras T40**
- Label: **ÁREA TOTAL (HECTARES)**
- Tipo: número decimal, `inputmode="decimal"`, mínimo 0,1; aceitar vírgula ou ponto.

**Resultado:**

- Label: **TEMPO ESTIMADO**
- Valor dinâmico, exemplo: **3h 20min**
- Texto dinâmico, exemplo: **Estimativa para pulverizar 40 hectares com o Agras T20P.**
- Aviso: **O tempo real pode variar conforme as condições da operação.**

Não incluir Air 2S: ele é usado para mapeamento, não para pulverização.

### 5.6 Aeronaves — `#aeronaves`

**Eyebrow:** TECNOLOGIA PARA CADA OPERAÇÃO  
**H2:** Quais aeronaves operamos  
**Apoio:** Selecionamos o equipamento mais adequado de acordo com a área, o terreno e o objetivo da aplicação.

Quatro cards. A imagem do drone deve permanecer integralmente dentro do card, usando `object-fit: contain`, caixa com `aspect-ratio` fixo e `overflow: hidden`. Não usar ícones decorativos.

| Apelido | Modelo | Chamada | Texto | Indicador |
|---|---|---|---|---|
| FALCÃO I | DJI Air 2S | Mapeamento e planejamento | Coleta imagens da área, identifica limites e apoia o planejamento seguro da operação. | MAPEAMENTO AÉREO |
| ÁGUIA I | DJI Agras T10 | Áreas pequenas e complexas | Agilidade para bordas de mata, terrenos com obstáculos e locais de acesso mais difícil. | ATÉ 6,07 HA/H |
| ÁGUIA II | DJI Agras T20P | Operações versáteis | Equilíbrio entre capacidade e agilidade para aplicações em diferentes tipos de área. | ATÉ 12 HA/H |
| HARPIA | DJI Agras T40 | Alta produtividade | Maior capacidade operacional para pulverização de áreas extensas com eficiência. | ATÉ 21,33 HA/H |

Nota: **A produtividade pode variar conforme as condições e os parâmetros da operação.**

### 5.7 Segurança e regularização — `#regularizacao`

Seção clara e simples, sem excesso de texto.

**Eyebrow:** OPERAÇÃO RESPONSÁVEL  
**H2:** Segurança e regularização  
**Apoio:** Cada operação deve seguir os requisitos e as autorizações aplicáveis.

Carrossel/faixa com logos oficiais de: **MAPA, IBAMA, ADAPAR, CREA-PR, ANAC, ANATEL e DECEA**.

Nota obrigatória: **Órgãos relacionados à regulamentação da atividade. As marcas não representam parceria ou endosso.**

Não publicar “empresa 100% legalizada” até que o proprietário forneça os registros válidos em nome da nova empresa/marca e autorize a afirmação. Os registros e autorizações devem ser confirmados antes da publicação.

### 5.8 Depoimentos — `#depoimentos`

**Eyebrow:** EXPERIÊNCIAS NO CAMPO  
**H2:** Quem confia, recomenda  
**Apoio:** Este espaço será preenchido com relatos reais de produtores atendidos pela GG Drones Pulverização.

Até a aprovação de relatos reais, manter os três cards abaixo identificados como placeholders, sem estrelas e sem nomes fictícios:

1. “Depoimento sobre a qualidade da aplicação.”
2. “Depoimento sobre agilidade e produtividade.”
3. “Depoimento sobre atendimento e segurança.”

Status: **DEPOIMENTO A CONFIRMAR**  
Identificação: **Produtor rural • Nome e propriedade pendentes**  
Nota: **Publicaremos somente avaliações autorizadas pelos clientes.**

Em produção, a seção pode permanecer oculta até existirem pelo menos dois depoimentos reais aprovados.

### 5.9 Galeria — `#galeria`

**Eyebrow:** GG DRONES EM AÇÃO  
**H2:** Nossa operação no campo  
**Apoio:** Do planejamento à aplicação, cada etapa é conduzida com precisão, segurança e atenção aos detalhes.

Galeria com fotos e vídeos:

- Desktop: mosaico/masonry visual semelhante ao mockup.
- Mobile: carrossel horizontal com swipe e `scroll-snap`.
- Clique/toque abre lightbox.
- Vídeos mostram poster e botão play; carregam somente quando abertos.
- Legendas disponíveis: **Pulverização de precisão**, **Preparação da operação**, **Mapeamento da área**.
- Rodapé: **Planejamento, tecnologia e responsabilidade em cada aplicação.**

### 5.10 FAQ — `#faq`

**Eyebrow:** TIRE SUAS DÚVIDAS  
**H2:** Perguntas frequentes  
**Apoio:** Reunimos as principais dúvidas sobre atendimento, operação e contratação dos serviços com drones.

Bloco lateral:

- **Ainda ficou com alguma dúvida?**
- Botão: **FALAR COM UM ESPECIALISTA** → WhatsApp

Accordion com uma pergunta aberta por vez:

1. **Qual é a região de atendimento da GG Drones Pulverização?**  
   Com sede em Cascavel–PR, atendemos principalmente as regiões Oeste e Sudoeste do Paraná. Operações em outros estados podem ser avaliadas conforme a área e a logística.
2. **Onde o drone de pulverização pode ser utilizado?**  
   Em lavouras, pastos, pomares e outras áreas abertas, desde que a operação seja planejada e não ofereça risco a culturas sensíveis ou áreas próximas.
3. **O drone agrícola faz apenas pulverização?**  
   Não. Os equipamentos também podem realizar a dispersão de sementes e produtos granulados, como aveia, azevém, nabo e ureia, conforme a necessidade da operação.
4. **O que está incluso na prestação de serviços com drone?**  
   O cliente fornece os produtos e a água limpa. Nossa equipe prepara a calda conforme o receituário agronômico e realiza o planejamento, o mapeamento e a aplicação de acordo com os requisitos aplicáveis.
5. **Quais são as etapas de uma operação de pulverização com drone?**  
   A operação inclui avaliação da área e de culturas sensíveis próximas, autorizações e mapeamento, preparo e aplicação conforme as condições climáticas, além do relatório operacional e do retorno ao cliente.
6. **Como é cobrado o serviço de pulverização com drone?**  
   O valor é calculado por área e varia conforme acesso, obstáculos, infraestrutura e complexidade. Cada local precisa ser avaliado para uma proposta adequada.
7. **Como é cobrado o serviço de dispersão de sólidos com drone?**  
   O valor é calculado por área e pode variar conforme a taxa de dispersão em quilos, pois o volume aplicado afeta a quantidade de viagens, baterias e combustível.

> Decisão pendente: a página original cita cobrança por alqueire. O texto acima usa “por área” para evitar conflito até o proprietário confirmar se a GG Drones Pulverização cobrará por hectare ou alqueire.

### 5.11 CTA final — `#contato`

Banner largo com foto agrícola e degradê verde/ciano.

**Eyebrow:** FALE COM NOSSA EQUIPE  
**H2:** Sua área merece uma aplicação mais precisa.  
**Texto:** Conte com planejamento, tecnologia e uma operação preparada para as necessidades do seu campo.  
**Botão:** FALAR COM UM ESPECIALISTA → WhatsApp  
**Apoio do botão:** Atendimento direto pelo WhatsApp

### 5.12 Empresas do GG Group — `#gg-group`

Seção clara, curta e com três cards pequenos.

**Título:** Conheça as empresas do GG Group

1. **GG Drones Pulverização**  
   Serviços agrícolas com drones  
   Estado: **VOCÊ ESTÁ AQUI** — sem link externo.
2. **GG Drones Assistência**  
   Assistência técnica especializada  
   Botão: **VER INSTAGRAM**  
   URL: `https://www.instagram.com/ggdroneparts/`
3. **Brasil Drones & Parts**  
   Peças e drones novos  
   Botão: **VISITAR SITE**  
   URL: `https://www.brasildroneseparts.com.br/`

Usar apenas as logos oficiais fornecidas. Links externos abrem em nova aba com `rel="noopener noreferrer"`.

### 5.13 Rodapé

Coluna de marca:

- **GG DRONES PULVERIZAÇÃO**
- **Tecnologia, precisão e responsabilidade para operações agrícolas com drones.**
- **Uma empresa do GG Group**

Coluna **NAVEGAÇÃO:** Início, Serviços, Como funciona, Calculadora, Aeronaves, Galeria, Perguntas frequentes.

Coluna **GG GROUP:** GG Drones Pulverização, GG Drones Assistência, Brasil Drones & Parts.

Coluna **ATENDIMENTO:**

- Cascavel — PR
- WhatsApp: (45) 99101-5512
- Botão: **SOLICITAR ORÇAMENTO**

Rodapé legal:

- **© 2026 GG Drones Pulverização. Todos os direitos reservados.**
- Política de Privacidade
- Termos de Uso
- Cookies

---

## 6. Especificação da calculadora

### Dados oficiais

| Modelo | Produtividade de referência | Condições informadas pela DJI |
|---|---:|---|
| DJI Agras T10 | **15 acres/h = 6,07028 ha/h** | 4,8 L/acre, faixa de 5 m, 5 m/s e altura de 2 m. |
| DJI Agras T20P | **12 ha/h** | 15 L/ha, faixa de 7 m, 6,5 m/s e altura de 2,5 m. |
| DJI Agras T40 | **21,33 ha/h** | 15 L/ha, faixa de 11 m, 7 m/s e altura de 3 m, em arrozal. |

Fontes oficiais: [DJI Agras T10](https://ag.dji.com/t10/faq), [DJI Agras T20P](https://ag.dji.com/t20p/faq) e [DJI Agras T40](https://www.dji.com/t40/faq).

### Fórmula

```ts
const productivityHaPerHour = {
  t10: 6.07028,
  t20p: 12,
  t40: 21.33,
} as const;

const totalMinutes = Math.round(
  (areaHectares / productivityHaPerHour[model]) * 60
);

const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
```

Formato:

- `0h 05min` para menos de uma hora.
- `1h 00min` quando não houver minutos restantes.
- Não exibir resultado para área vazia, zero, negativa ou inválida.
- Normalizar vírgula brasileira antes do cálculo.
- Atualizar o resultado em tempo real, com debounce de 120–180 ms apenas se necessário.

### Casos de teste para 40 ha

| Modelo | Resultado esperado |
|---|---:|
| T10 | **6h 35min** |
| T20P | **3h 20min** |
| T40 | **1h 53min** |

### Limite da estimativa

A calculadora representa o rendimento de referência divulgado pelo fabricante. O tempo real pode aumentar por causa da dose, cultura, clima, vento, relevo, obstáculos, recargas de tanque, troca e carregamento de baterias, preparo de calda, deslocamento e autorizações. Não aplicar um “fator operacional” inventado. Se a empresa desejar uma projeção de campo, ela deverá fornecer um fator validado a partir de operações próprias.

---

## 7. Sistema de animações

### Princípios

- Animar apenas `transform`, `opacity`, SVG `pathLength` e propriedades compostas sempre que possível.
- Não animar altura/largura de blocos durante a entrada; o accordion pode usar grid rows ou Motion com dimensões medidas.
- Todas as animações devem respeitar `prefers-reduced-motion: reduce`.
- Conteúdo deve existir no HTML antes da animação; animação nunca pode impedir indexação ou leitura.
- Duração padrão: 450–700 ms; stagger: 60–100 ms; easing: `[0.22, 1, 0.36, 1]`.
- Animações são executadas uma vez por seção, exceto interações e linha de progresso.

### Por seção

| Seção | Comportamento |
|---|---|
| Header | Fade inicial; fundo/blur após scroll; menu mobile com fade e deslocamento curto. |
| Hero | Poster aparece imediatamente; vídeo faz crossfade quando pronto; H1, texto e CTAs entram em stagger; zoom do vídeo limitado a 1,03. |
| Faixa de confiança | Quatro itens sobem 12 px em sequência. |
| Benefícios | Título e cards entram por linhas; fotos podem ter parallax máximo de 8 px. |
| Processo | Linha central cresce de 0% a 100% conforme o scroll. Cada marco acende e o conteúdo alternado entra ao cruzar sua faixa. Percentuais contam 0→25, 25→50, 50→75 e 75→100. |
| Calculadora | Resultado faz crossfade/slide de 8 px; arco decorativo do resultado progride; sem bloquear digitação. |
| Aeronaves | Cards em stagger; hover sobe no máximo 4 px; imagens nunca ultrapassam o card. |
| Regularização | Logos em faixa contínua lenta, com pausa no hover/foco; no modo de movimento reduzido, faixa estática e rolável. |
| Depoimentos | Cards aparecem em stagger; sem números ou estrelas animadas enquanto forem placeholders. |
| Galeria | Revelação em mosaico; lightbox com fade/scale; swipe no mobile. |
| FAQ | Accordion com expansão suave, ícone gira 45° e foco permanece no botão. |
| CTA | Foto com parallax discreto e gradiente respirando lentamente; CTA com feedback de hover/tap. |
| GG Group | Cards sobem 3 px no hover e a borda assume a cor de cada marca. |
| Footer | Entrada simples por opacidade; sem parallax. |

### Progresso da seção de etapas

- Observar o container completo com `useScroll({ target, offset: ["start 70%", "end 70%"] })`.
- Mapear `scrollYProgress` diretamente para `scaleY` da linha, com `transform-origin: top`.
- Ativar marcos em 0,18; 0,43; 0,68; 0,91.
- O estado ativo precisa mudar cor e brilho, sem causar reflow.
- No fim, o marcador “Operação concluída” fica em 100%.
- Em `prefers-reduced-motion`, renderizar a linha completa e todas as etapas visíveis.

---

## 8. Performance e carregamento

### Metas obrigatórias

- Core Web Vitals no percentil 75: **LCP ≤ 2,5 s**, **INP ≤ 200 ms**, **CLS ≤ 0,1**.
- Lighthouse em produção, mobile: Performance ≥ 90; Accessibility ≥ 95; Best Practices ≥ 95; SEO ≥ 95.
- JavaScript inicial próprio da LP: alvo ≤ 120 kB comprimido, excluindo analytics consentido.
- Nenhuma imagem sem `width`/`height` ou `aspect-ratio`.

### Estratégia de mídia

- Poster do hero em AVIF/WebP, prioridade alta e no tamanho exato do viewport.
- Vídeo com versões desktop e mobile, WebM + MP4, sem áudio, duração curta e loop sem salto.
- `<video preload="metadata">`; somente poster é candidato a LCP. Iniciar download do vídeo após o conteúdo crítico ou respeitar `Save-Data`.
- Se `prefers-reduced-motion` ou `Save-Data`, exibir apenas o poster.
- Galeria, depoimentos, logos e frota com lazy loading.
- Lightbox e player de vídeo por `dynamic import`.
- Fontes locais, subset latino, `font-display: swap` e no máximo dois pesos críticos.
- Não usar GIF, vídeo em background via iframe, bibliotecas de slider pesadas ou ícones por fonte.

---

## 9. SEO para Google e busca por IA

O Google informa que AI Overviews e AI Mode não exigem marcação especial: a página precisa estar indexável, apta a exibir snippet e seguir as práticas normais de SEO. Portanto, não criar promessa de “ranking em IA” nem depender de arquivos experimentais. Referência: [AI features and your website](https://developers.google.com/search/docs/appearance/ai-features?hl=en).

### Metadados

```text
Title: Pulverização com Drones em Cascavel | GG Drones
Description: Pulverização agrícola com drones em Cascavel e região. Aplicação precisa, dispersão de sólidos, mapeamento e relatório operacional. Solicite uma avaliação.
H1: Precisão que transforma o campo
Canonical: https://[DOMINIO-OFICIAL]/
Locale: pt_BR
```

- Criar imagem OG 1200 × 630 sem excesso de texto.
- Definir `metadataBase`, canonical, Open Graph, Twitter Card, favicon, Apple Touch Icon e `theme-color`.
- Uma única H1; H2/H3 seguem hierarquia semântica.
- Usar termos de forma natural: “pulverização com drone em Cascavel”, “drone agrícola em Cascavel”, “pulverização agrícola no Oeste do Paraná”, “dispersão de sólidos com drone” e “mapeamento agrícola”.

### Rastreamento e indexação

- HTML renderizado no servidor; nenhum texto importante somente em imagem, canvas ou vídeo.
- `robots.txt` liberando Googlebot e apontando para sitemap.
- `sitemap.xml` com a LP e páginas legais.
- Links internos em `<a href>` reais; não simular links com `div`/JavaScript.
- Canonical absoluto, HTTPS e um único host preferencial.
- Cadastrar Google Search Console, enviar sitemap e inspecionar a URL após publicação.
- Manter Google Business Profile atualizado com nome, telefone, área atendida e URL consistentes.

### Conteúdo útil e legível por IA

- Respostas do FAQ completas e visíveis no DOM mesmo quando recolhidas.
- Linguagem direta, factual e específica; evitar afirmações legais ou de produtividade sem fonte.
- Associar claramente as entidades GG Drones Pulverização, GG Group, GG Drones Assistência e Brasil Drones & Parts.
- Adicionar texto alternativo descritivo, legendas e, quando houver vídeo explicativo, transcrição.
- Indicar fonte e condições dos números de produtividade.
- Exibir cidade/região e dados comerciais reais após confirmação.
- Opcionalmente publicar no futuro páginas próprias para cada serviço e região, com conteúdo original; não criar dezenas de páginas locais duplicadas.

### Dados estruturados JSON-LD

Implementar um `@graph` coerente com o conteúdo visível:

- `Organization` para GG Group, quando houver razão/nome oficial confirmados.
- `LocalBusiness` ou `ProfessionalService` para GG Drones Pulverização, com `name`, `url`, `logo`, `telephone`, `address`, `areaServed` e `sameAs` somente após confirmação.
- `Service` para pulverização agrícola, dispersão de sólidos e mapeamento.
- `WebSite` e `WebPage`.
- `FAQPage` apenas com as perguntas e respostas efetivamente visíveis. Não esperar rich result: o Google restringe esse tipo de resultado em muitos contextos.
- Structured data precisa corresponder ao texto exibido; validar no Rich Results Test e Schema Markup Validator.

Referências: [Google Search Essentials](https://developers.google.com/search/docs/essentials), [guia para desenvolvedores](https://developers.google.com/search/docs/fundamentals/get-started-developers) e [dados estruturados](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data).

---

## 10. Analytics, mídia paga e conversões

Eventos recomendados:

```text
click_whatsapp_header
click_whatsapp_hero
click_whatsapp_faq
click_whatsapp_final
click_whatsapp_footer
calculator_change_model
calculator_change_area
gallery_open
gallery_video_play
faq_open
click_group_assistencia
click_group_brasil
```

Cada evento deve incluir `section`, `cta_label`, `page_location` e UTMs disponíveis, sem enviar dados pessoais. Configurar conversão do Google Ads no clique do WhatsApp e, se usado, Meta Pixel na mesma propriedade da empresa. Não duplicar disparos entre GTM e código.

Aplicar Consent Mode v2 para tags do Google e consentimento equivalente para outras tags, conforme a configuração jurídica/LGPD aprovada.

---

## 11. Acessibilidade

- Meta: WCAG 2.2 nível AA.
- Contraste mínimo 4,5:1 para texto comum e 3:1 para texto grande/controles.
- Foco visível e ordem de tabulação lógica.
- Menu, accordion, carrossel e lightbox operáveis por teclado.
- Botões com nomes acessíveis; ícones decorativos com `aria-hidden`.
- `aria-expanded` e `aria-controls` no FAQ.
- Lightbox com `role="dialog"`, foco preso e fechamento por `Esc`.
- Alt text contextual; imagens puramente decorativas com alt vazio.
- Alvo de toque mínimo 44 × 44 px.
- Nada importante depende somente de cor ou movimento.

---

## 12. Responsividade

| Faixa | Regras principais |
|---|---|
| ≥ 1280 px | Container até 1280 px; hero amplo; benefícios 3 colunas; frota 4 cards; processo alternado. |
| 768–1279 px | Benefícios 2 colunas; frota 2 × 2; FAQ em duas colunas se houver espaço. |
| < 768 px | Menu mobile; hero com altura mínima de 720 px; uma coluna; processo com linha à esquerda; cards do grupo empilhados; galeria com swipe. |

Verificar explicitamente 360, 390, 768, 1024, 1366, 1440 e 1920 px. Não permitir rolagem horizontal.

---

## 13. Pendências que exigem confirmação do proprietário

1. Domínio oficial da GG Drones Pulverização.
2. Razão social, nome fantasia, CNPJ e endereço completo.
3. Confirmação de que o mesmo endereço atende as três empresas e se deve aparecer publicamente.
4. Área de atendimento final e condições para outros estados.
5. Cobrança por hectare, alqueire ou outra unidade.
6. Registros, licenças e autorizações aplicáveis à nova empresa/marca.
7. Depoimentos reais, nomes, propriedades, fotos e autorizações de uso.
8. Direitos de reutilização/download do vídeo Vimeo `996425277` e demais mídias da Gale.
9. Instagram próprio da GG Drones Pulverização, se existir.
10. IDs de GA4, GTM, Google Ads e Meta Pixel.
11. Conteúdo jurídico de Privacidade, Termos e Cookies.
12. E-mail de atendimento e horário comercial, se forem exibidos.

Nenhuma dessas pendências bloqueia a construção visual com placeholders controlados, mas itens 2, 6, 7, 8 e 11 bloqueiam a publicação definitiva das respectivas informações.

---

## 14. Critérios de aceite

### Visual e conteúdo

- Ordem, contraste, proporções e aparência geral equivalentes ao mockup aprovado.
- Todos os textos deste PRD aparecem exatamente como especificados, salvo alteração formal do cliente.
- Seções amplas, sem sensação de conteúdo espremido.
- Processo vertical reto, sem cards, com quatro etapas alternadas e progresso até 100%.
- Benefícios exibem os seis itens.
- Aeronaves não vazam para fora dos cards.
- Grupo apresenta três empresas em cards pequenos com logos oficiais.

### Funcional

- Todos os CTAs de contato abrem o número `5545991015512` com mensagem preenchida.
- Links de Assistência e Brasil Drones apontam para as URLs definidas.
- Calculadora produz 6h35, 3h20 e 1h53 para 40 ha nos modelos T10, T20P e T40.
- FAQ, menu, carrossel e lightbox funcionam por mouse, toque e teclado.
- Galeria aceita fotos e vídeos sem carregar vídeos fora do viewport/lightbox.
- Eventos de analytics disparam uma única vez por ação.

### Qualidade técnica

- `npm run build`, lint, testes unitários e Playwright passam sem erro.
- Sem erros no console e sem links quebrados.
- Sem overflow horizontal em todos os breakpoints de teste.
- Respeita movimento reduzido e modo de economia de dados.
- Metadados, canonical, robots, sitemap e JSON-LD validados.
- Lighthouse e Core Web Vitals atendem às metas da seção 8.
- Testado em Chrome, Safari e Edge atuais, Android e iOS.

---

## 15. Plano de implementação

1. Inicializar projeto e tokens de design.
2. Organizar logos, vídeo, posters e imagens otimizadas.
3. Construir HTML semântico e todas as seções estáticas.
4. Implementar calculadora e testes unitários.
5. Implementar menu, FAQ, galeria/lightbox e WhatsApp.
6. Aplicar animações, começando pela linha de progresso.
7. Configurar metadata, schemas, sitemap e robots.
8. Integrar consentimento, analytics e conversões.
9. Executar testes responsivos, acessibilidade e performance.
10. Substituir placeholders pelos dados aprovados e publicar preview final.

---

## 16. Referências oficiais consultadas

- [Página de referência Gale](https://agrogale.com.br/)
- [DJI Agras T10 — FAQ](https://ag.dji.com/t10/faq)
- [DJI Agras T20P — FAQ](https://ag.dji.com/t20p/faq)
- [DJI Agras T40 — FAQ](https://www.dji.com/t40/faq)
- [Google Search Essentials](https://developers.google.com/search/docs/essentials)
- [Google — guia de SEO para desenvolvedores](https://developers.google.com/search/docs/fundamentals/get-started-developers)
- [Google — AI features and your website](https://developers.google.com/search/docs/appearance/ai-features?hl=en)
- [Google — introdução a dados estruturados](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
- [Web.dev — Core Web Vitals](https://web.dev/articles/vitals?hl=en)
- [Next.js 16](https://nextjs.org/blog/next-16)
- [Tailwind CSS](https://tailwindcss.com/blog)
- [Motion for React](https://motion.dev/docs/react)
