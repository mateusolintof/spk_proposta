# Proposta Comercial — Mercante Distribuidora

Apresentacao interativa horizontal para Proposta Comercial da Convert.AI, personalizada para **Mercante Distribuidora** — orquestracao inteligente de atendimento comercial para televendas, eventos e cobranca.

## Contexto do Cliente

| Dado | Valor |
|------|-------|
| Time de televendas | 18 vendedores |
| Volume mensal | 12-15 mil mensagens |
| Sistema atual | Fortix (cliente escolhe vendedor em lista) |
| Gargalo principal | Fila sem rotacao (lead preso se vendedor nao responde) |
| Eventos | ~1000 leads por evento, follow-up leva ~30 dias |
| Cobranca | ~1000 mensagens/dia, risco de perda de numero WhatsApp |

## Stack

| Tecnologia | Versao | Uso |
|------------|--------|-----|
| Next.js | 16.1.1 | App Router com Webpack (Turbopack opcional) |
| React | 19.2.3 | UI Library |
| TypeScript | 5.x | Tipagem estatica |
| Tailwind CSS | v4 | Estilizacao com `@theme inline` |
| Framer Motion | 12.x | Animacoes de slides e modais |
| React Three Fiber | 9.x | Background 3D |
| HeroUI | 2.8.7 | Componentes base |
| Recharts | 3.6.0 | Graficos nos modais |
| XYFlow React | 12.10 | Diagramas de fluxo dos agentes |
| Lucide | 0.562 | Icones |

## Execucao

```bash
# Requisitos: Node >= 20.9.0
npm install
npm run dev             # dev with webpack on http://localhost:3001
npm run dev:turbo       # dev with Turbopack (optional)
npm run build           # production build (webpack)
npm run build:turbo     # production build with Turbopack
npm start -p 3001       # serve prod build on 3001
```

## Guia de padronizacao visual

Antes de alterar layout, tipografia, cores ou hierarquia de conteudo, consulte `STYLE_GUIDE.md`.

## Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx          # Fontes, metadata, providers
│   ├── page.tsx            # Container principal com scroll horizontal
│   ├── providers.tsx       # HeroUI providers
│   ├── globals.css         # Tokens de tema e utilitarios
│   └── favicon.ico
├── components/
│   ├── 3d/
│   │   ├── Scene.tsx              # Canvas R3F com post-processing
│   │   └── ElegantNetwork.tsx     # Particulas conectadas animadas
│   ├── slides/
│   │   ├── IntroSlide.tsx         # Hero "Orquestracao Inteligente"
│   │   ├── DiagnosticoSlide.tsx   # 18 vendedores, gargalos de fila
│   │   ├── ObjetivoProjetoSlide.tsx # Objetivos Mercante
│   │   ├── SolucaoSlide.tsx       # 5 agentes com arquitetura
│   │   ├── FerramentasSlide.tsx   # CRM e Dashboard
│   │   ├── GanhosSlide.tsx        # SLA <3min, distribuicao, eventos
│   │   ├── InvestimentoSlide.tsx  # 5 frentes + pacote (sob consulta)
│   │   ├── FAQSlide.tsx           # Perguntas Fortix/WhatsApp/LGPD
│   │   └── CronogramaSlide.tsx    # 4 fases: Imersao ate Otimizacao
│   ├── modals/
│   │   ├── ModalWrapper.tsx       # Wrapper base para modais
│   │   ├── AgentModal.tsx         # Detalhes dos 5 agentes IA
│   │   ├── CRMPreviewModal.tsx    # Preview interativo do CRM
│   │   ├── DashboardPreviewModal.tsx  # Preview do Dashboard
│   │   ├── ROICalculatorModal.tsx # Simulador de impacto (SLA)
│   │   ├── CostReductionModal.tsx # Ganho de capacidade por vendedor
│   │   ├── GainsModal.tsx         # KPIs operacionais Mercante
│   │   ├── IntelligenceModal.tsx  # Inteligencia de dados (canais, abandono)
│   │   ├── agents/
│   │   │   ├── RadialCapabilityDiagram.tsx  # Infografico em etapas (5 agentes)
│   │   │   └── AgentFlowDiagram.tsx         # Fluxograma interativo (5 agentes)
│   │   ├── crm/
│   │   │   ├── CRMDashboardView.tsx   # Visao geral CRM
│   │   │   ├── CRMContactsView.tsx    # Lista de contatos
│   │   │   ├── CRMPipelineView.tsx    # Pipeline de vendas
│   │   │   └── CRMInboxView.tsx       # Caixa de mensagens
│   │   └── dashboard/
│   │       ├── DashVisaoGeralView.tsx # Visao geral
│   │       ├── DashGestaoIAView.tsx   # Gestao de IA
│   │       ├── DashClientesView.tsx   # Clientes
│   │       └── DashInsightsView.tsx   # Insights
│   └── ui/
│       ├── SlideShell.tsx         # Wrapper padrao para slides
│       ├── card.tsx               # Card component
│       └── chart.tsx              # Chart components (Recharts)
├── types/
│   └── modal.ts                   # Tipos TypeScript para modais
└── lib/
    └── utils.ts                   # Utilitarios (cn, etc)

public/
├── branding/
│   ├── logo.svg
│   ├── logo-badge-white.svg
│   └── logo-placeholder.svg
└── docs/
    └── CONTEUDO.md                # Documento de negocio Mercante
```

## Paleta de Cores

| Token | Hex | Uso |
|-------|-----|-----|
| Background | `#02040A` | Fundo principal |
| Tech Cyan | `#00E5FF` | Destaques tecnologicos, Fila+SDR |
| Success Green | `#00FF94` | Metricas positivas, CTAs, Closer |
| Ouro | `#FFD700` | Agente Eventos |
| Vermelho | `#FF6B6B` | Agente Cobranca |
| Roxo | `#A855F7` | Recompra & Copiloto |
| White | `#FFFFFF` / `rgba` | Textos e bordas |

## Slides (9 secoes)

| # | Slide | Descricao | Modais |
|---|-------|-----------|--------|
| 1 | Intro | Orquestracao inteligente de atendimento comercial | - |
| 2 | Diagnostico | 18 vendedores, gargalos de fila e SLA | - |
| 3 | Objetivo | Fila inteligente, governanca, agentes por jornada | - |
| 4 | Solucao | 5 agentes IA com arquitetura orbital | AgentModal |
| 5 | Ferramentas | CRM, Dashboard, integracao Fortix | CRMPreviewModal, DashboardPreviewModal |
| 6 | Resultados | SLA <3min, distribuicao, eventos 24h | GainsModal, IntelligenceModal, ROICalculatorModal, CostReductionModal |
| 7 | Investimento | 5 frentes + pacote completo (sob consulta) | - |
| 8 | FAQ | Fortix, WhatsApp, LGPD, prazos | - |
| 9 | Cronograma | Imersao, Piloto, Rollout, Otimizacao | - |

## Sistema de Modais

### Tipos de Modal

```typescript
type AgentType = "fila_sdr" | "closer" | "eventos" | "cobranca" | "recompra_copiloto";

type ModalKind =
  | { type: "agent"; agent: AgentType }
  | { type: "crm" }
  | { type: "dashboard" }
  | { type: "roi" }
  | { type: "costs" }
  | { type: "gains" }
  | { type: "intelligence" }
  | null;
```

### Agentes IA (5 frentes)

| ID | Nome | Funcao | Cor |
|----|------|--------|-----|
| fila_sdr | Fila + SDR | Router de atendimento com qualificacao 24/7 | Cyan (#00E5FF) |
| closer | Closer Assist | Copiloto do vendedor para fechamento | Verde (#00FF94) |
| eventos | Agente Eventos | Follow-up automatizado para feiras/eventos | Ouro (#FFD700) |
| cobranca | Agente Cobranca | Regua de cobranca com governanca WhatsApp | Vermelho (#FF6B6B) |
| recompra_copiloto | Recompra & Copiloto | Reativacao de clientes + assistente interno | Roxo (#A855F7) |

Cada agente possui:
- Infografico em etapas (RadialCapabilityDiagram)
- Fluxograma interativo (AgentFlowDiagram com XYFlow)
- Metricas e beneficios especificos

### CRM Preview

Navegacao por abas:
- Dashboard (visao geral)
- Contatos (lista de leads)
- Pipeline (funil de vendas)
- Inbox (mensagens)

### Dashboard Preview

Navegacao por abas:
- Visao Geral (KPIs principais)
- Gestao IA (metricas dos agentes)
- Clientes (base de clientes)
- Insights (recomendacoes)

### Modais de Calculadora

| Modal | Descricao |
|-------|-----------|
| ROICalculatorModal | Simulador de impacto no SLA (mensagens/mes, taxa de SLA, capacidade) |
| CostReductionModal | Ganho de capacidade por vendedor (nao corte de equipe) |
| GainsModal | KPIs operacionais: SLA, distribuicao, eventos, cobranca |
| IntelligenceModal | Canais (WhatsApp, Fortix, Eventos), motivos de abandono |

## Navegacao

- **Scroll horizontal** com CSS snap
- **Setas** `←` `→` e **Space** para navegar
- **Home** / **End** para inicio/fim
- **Mouse wheel** convertido para scroll horizontal
- **Dots** clicaveis na barra inferior
- **Barra de progresso** animada no rodape

## Background 3D

O background usa React Three Fiber com:
- 150 particulas brancas conectadas
- Movimento organico baseado em noise
- Post-processing: Bloom + Vignette
- Opacity 30% para sutileza
- Dynamic import para evitar SSR

## Documento de Negocio

Ver `public/docs/CONTEUDO.md` para:
- Diagnostico: 18 vendedores, gargalos de fila, onde a receita se perde
- 5 frentes de agentes especializados por jornada
- Ferramentas: CRM + Dashboard com integracao Fortix
- KPIs: SLA <3min, distribuicao equilibrada, recovery de eventos
- Investimento: valores "sob consulta" (personalizados apos diagnostico)
- Governanca WhatsApp: controle de limites, qualidade, opt-out
- Cronograma: 4 fases de implementacao
