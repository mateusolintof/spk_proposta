# Proposta Comercial Mercante Distribuidora — Guia de Desenvolvimento

## Visao Geral

Apresentacao horizontal interativa para Proposta Comercial da Convert.AI, personalizada para **Mercante Distribuidora** — focada em orquestracao inteligente de atendimento comercial para televendas.

**Cliente:** Mercante Distribuidora
**Documento de negocio:** `public/docs/CONTEUDO.md`
**Porta de desenvolvimento:** 3001

## Contexto do Cliente

| Dado | Valor |
|------|-------|
| Time de televendas | 18 vendedores |
| Volume mensal | 12-15 mil mensagens |
| Sistema atual | Fortix (cliente escolhe vendedor em lista) |
| Gargalo principal | Fila sem rotacao (lead preso se vendedor nao responde) |
| Eventos | ~1000 leads por evento, follow-up leva ~30 dias |
| Cobranca | ~1000 mensagens/dia, risco de perda de numero WhatsApp |

## Stack Tecnica

| Tecnologia | Versao | Uso |
|------------|--------|-----|
| Next.js | 16.1.1 | App Router com Webpack (Turbopack opcional) |
| React | 19.2.3 | UI Library |
| TypeScript | 5.x | Tipagem estatica |
| Tailwind CSS | v4 | `@theme inline` |
| Framer Motion | 12.x | Animacoes |
| React Three Fiber | 9.x | Background 3D |
| HeroUI | 2.8.7 | Componentes base |
| Recharts | 3.6.0 | Graficos |
| XYFlow React | 12.10 | Diagramas de fluxo |
| Lucide | 0.562 | Icones |

## Execucao

```bash
npm install
npm run dev             # webpack dev (http://localhost:3001)
npm run dev:turbo       # turbopack dev (opcional, requer acesso)
npm run build           # producao (webpack)
npm run build:turbo     # producao (turbopack, rede requerida)
npm start -p 3001       # Servir build final
```

## Arquitetura de Componentes

### Container Principal (`src/app/page.tsx`)

- Scroll horizontal com CSS snap
- Gerenciamento de estado para modais (`useState<ModalKind>`)
- Navegacao por teclado (←, →, Space, Home, End)
- Conversao de mouse wheel para scroll horizontal
- Progress bar animada com Framer Motion

### Slides (9 total)

```
src/components/slides/
├── IntroSlide.tsx           # Hero "Atendimento Comercial com Controle de Fila e Mais Conversoes"
├── DiagnosticoSlide.tsx     # 18 vendedores, gargalos de fila, controle operacional
├── ObjetivoProjetoSlide.tsx # Objetivos Mercante e diferenciais
├── SolucaoSlide.tsx         # 3 agentes IA orbitais (abre AgentModal)
├── FerramentasSlide.tsx     # CRM + Dashboard (abre modais de preview)
├── GanhosSlide.tsx          # Controle de fila, distribuicao, eventos
├── InvestimentoSlide.tsx    # 5 agentes com precos definidos
├── FAQSlide.tsx             # 6 perguntas sobre Fortix, WhatsApp, LGPD
└── CronogramaSlide.tsx      # 4 fases: Imersao, Piloto, Rollout, Otimizacao
```

### SlideShell Props

```tsx
interface SlideShellProps {
  eyebrow?: string;        // Label superior (ex: "Solucao")
  eyebrowColor?: "default" | "success" | "warning" | "danger";
  title: string;           // Titulo principal
  subtitle?: string;       // Subtitulo
  align?: "left" | "center";
  size?: "default" | "compact";
  background?: ReactNode;  // Background customizado
  children?: ReactNode;    // Conteudo do slide
}
```

### Sistema de Modais

#### Tipos (`src/types/modal.ts`)

```typescript
export type AgentType = "atendimento" | "evento" | "cobranca";

export type ModalKind =
  | { type: "agent"; agent: AgentType }
  | { type: "crm" }
  | { type: "dashboard" }
  | { type: "roi" }
  | { type: "costs" }
  | { type: "gains" }
  | { type: "intelligence" }
  | null;
```

#### Modais Disponiveis

| Modal | Arquivo | Aberto por | Descricao |
|-------|---------|------------|-----------|
| AgentModal | `AgentModal.tsx` | SolucaoSlide | Detalhes dos 3 agentes core |
| CRMPreviewModal | `CRMPreviewModal.tsx` | FerramentasSlide | Preview interativo do CRM |
| DashboardPreviewModal | `DashboardPreviewModal.tsx` | FerramentasSlide | Preview do Dashboard |
| ROICalculatorModal | `ROICalculatorModal.tsx` | GanhosSlide | Simulador de impacto (taxa de resposta) |
| CostReductionModal | `CostReductionModal.tsx` | GanhosSlide | Ganho de capacidade por vendedor |
| GainsModal | `GainsModal.tsx` | GanhosSlide | KPIs operacionais Mercante |
| IntelligenceModal | `IntelligenceModal.tsx` | GanhosSlide | Inteligencia de dados (canais, abandono) |

#### Sub-componentes de Modais

```
src/components/modals/
├── ModalWrapper.tsx              # Base wrapper com overlay e animacoes
├── agents/
│   ├── RadialCapabilityDiagram.tsx  # Infografico em etapas por agente (3 agentes)
│   └── AgentFlowDiagram.tsx         # Fluxograma interativo (XYFlow, 3 agentes)
├── crm/
│   ├── CRMDashboardView.tsx      # Visao geral do CRM
│   ├── CRMContactsView.tsx       # Lista de contatos/leads
│   ├── CRMPipelineView.tsx       # Pipeline de vendas (kanban)
│   └── CRMInboxView.tsx          # Caixa de mensagens
└── dashboard/
    ├── DashVisaoGeralView.tsx    # KPIs principais
    ├── DashGestaoIAView.tsx      # Metricas dos agentes
    ├── DashClientesView.tsx      # Base de clientes
    └── DashInsightsView.tsx      # Insights e recomendacoes
```

### Agentes IA

#### Agentes Principais (2 - com modal detalhado)

| ID | Nome | Funcao | Setup | Mensal |
|----|------|--------|-------|--------|
| atendimento | Agente Atendimento | Orquestrador com qualificacao 24/7 | R$ 25.000 | R$ 5.000 |
| evento | Agente Eventos | Confirmacao de presenca para feiras/eventos | R$ 8.000 | R$ 1.500 |

#### Agentes Complementares (3 - no InvestimentoSlide)

| Nome | Funcao | Setup | Mensal |
|------|--------|-------|--------|
| Agente Cobranca | Regua de cobranca com governanca WhatsApp | R$ 8.000 | R$ 1.000 |
| Agente Follow-Up e Recompra | Reativacao de clientes e cadencia de recompra | R$ 8.000 | R$ 1.000 |
| Agente Copiloto + POP | Assistente de bolso + sistema de disparo POP | Sob consulta | Sob consulta |

Cada agente no AgentModal exibe:
- Infografico em etapas (Entrada → Processamento → Acao)
- Fluxograma interativo com XYFlow
- Lista de beneficios
- Metricas esperadas

## Tema e Cores

```css
/* Cores principais */
--background: #02040A      /* Fundo escuro */
--accent-tech: #00E5FF     /* Cyan tecnologico */
--accent-success: #00FF94  /* Verde sucesso */

/* Cores dos agentes */
--atendimento: #00E5FF     /* Cyan */
--eventos: #FFD700         /* Ouro */
--cobranca: #FF6B6B        /* Vermelho */

/* Opacidades padrao */
bg-white/5                 /* Cards e containers */
border-white/10            /* Bordas sutis */
text-white/70              /* Texto secundario */
text-white/50              /* Texto terciario */
```

## Background 3D

```tsx
// Importacao dinamica (evita SSR)
const Scene = dynamic(() => import("@/components/3d/Scene"), { ssr: false });

// Configuracao
- 150 particulas brancas conectadas
- Movimento organico (noise-based)
- Post-processing: Bloom + Vignette
- Opacity 30% + pointer-events-none
- Z-index 0 (abaixo do conteudo)
```

## Navegacao

| Acao | Input |
|------|-------|
| Proximo slide | `→`, `Space`, scroll |
| Slide anterior | `←` |
| Primeiro slide | `Home` |
| Ultimo slide | `End` |
| Slide especifico | Clique no dot |

## Padroes de Codigo

### Guia de padronizacao visual

Consulte `STYLE_GUIDE.md` antes de alterar layout, tipografia, cores ou hierarquia de conteudo.

### Tipografia minima

- Texto legivel: minimo `text-[11px]`
- Labels: `text-xs` (12px)
- Body: `text-body`
- Headings: `text-base` a `text-5xl`

### Animacoes

```tsx
// Entrada de elementos
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: index * 0.1 }}

// Hover em botoes
whileHover={{ scale: 1.02 }}
whileTap={{ scale: 0.98 }}
```

### Modais com navegacao interna

```tsx
// Estado para abas
const [activeView, setActiveView] = useState<ViewType>("dashboard");

// Tabs com HeroUI ou custom
<button
  onClick={() => setActiveView("dashboard")}
  className={activeView === "dashboard" ? "bg-white/10" : ""}
>
  Dashboard
</button>
```

## Calculadoras/Simuladores

### ROICalculatorModal (Simulador de Impacto)

- **Taxa de resposta rapida (%):** % de leads que recebem resposta a tempo
- **Multiplicador:** 1.35x (35% de melhoria)
- **Taxa de conversao:** 8% (conservador)
- **Teto:** 75%

### CostReductionModal (Ganho de Capacidade)

- **Multiplicador de capacidade:** 0.5x (25% de ganho)
- Calcula horas liberadas e capacidade adicional por vendedor

## Checklist do Projeto

- [x] 9 slides criados e funcionando
- [x] Background 3D integrado
- [x] Navegacao horizontal com snap
- [x] 7 modais interativos
- [x] AgentModal com 3 agentes core
- [x] Infografico em etapas e fluxograma por agente
- [x] CRM Preview com 4 abas
- [x] Dashboard Preview com 4 abas
- [x] Simulador de impacto (taxa de resposta e capacidade)
- [x] GainsModal e IntelligenceModal com metricas Mercante
- [x] FAQSlide com perguntas sobre Fortix/WhatsApp/LGPD
- [x] Investimento com 5 agentes e precos definidos
- [x] Animacoes Framer Motion
- [x] Responsivo mobile/desktop
- [x] Paleta de cores aplicada

## Conteudo de Negocio

Ver `public/docs/CONTEUDO.md` para detalhes sobre:

1. **Diagnostico:** 18 vendedores, gargalos de fila, controle operacional
2. **Solucoes:** 5 agentes especializados (3 core + 2 complementares)
3. **Ferramentas:** CRM + Dashboard executivo com integracao Fortix
4. **Metricas:** Taxa de resposta, distribuicao equilibrada, recovery de eventos
5. **Investimento:** Precos definidos por agente
6. **Cronograma:** 4 fases (Imersao, Piloto, Rollout, Otimizacao)
7. **Governanca WhatsApp:** controle de limites, qualidade, opt-out
