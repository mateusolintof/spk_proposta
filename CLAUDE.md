# Proposta Comercial SPK Distribuidora — Guia de Desenvolvimento

## Visao Geral

Apresentacao comercial interativa para **SPK Distribuidora de Autopecas**.

**Cliente:** SPK Distribuidora de Autopecas (B2B)
**Porta de desenvolvimento:** 3001

## Contexto do Cliente

| Dado | Valor |
|------|-------|
| Segmento | Distribuicao de autopecas (B2B) |
| Time de vendas | 8 vendedores |
| Volume mensal | ~5.000 conversas/mes |
| Leads de trafego | ~300 leads/mes |
| Problema central | Falta de visibilidade e controle da operacao |

## Stack Tecnica

| Tecnologia | Versao | Uso |
|------------|--------|-----|
| Next.js | 16.x | App Router |
| React | 19.x | UI Library |
| TypeScript | 5.x | Tipagem estatica |
| Tailwind CSS | v4 | Estilizacao |
| Framer Motion | 12.x | Animacoes |
| React Three Fiber | 9.x | Background 3D |
| HeroUI | 2.x | Componentes base |
| Lucide | 0.5x | Icones |

## Execucao

```bash
npm install
npm run dev             # http://localhost:3001
npm run build           # producao
npm start -p 3001       # servir build
```

## Arquitetura de Componentes

### Apresentacao Principal (`/`)

- Scroll horizontal com CSS snap
- 8 slides interativos
- Navegacao por teclado (setas, Space, Home, End)
- Progress bar animada
- Background 3D com particulas

### Slides (8 total)

```
src/components/slides/
├── IntroSlide.tsx           # Hero: "Sua Equipe Vendendo Mais..."
├── DiagnosticoSlide.tsx     # 4 dores da SPK
├── SolucaoSlide.tsx         # 4 pilares orbitais (abre PilarModal)
├── GanhosSlide.tsx          # Resultados esperados
├── InvestimentoSlide.tsx    # R$20k + R$3k/mes
├── CronogramaSlide.tsx      # 4 fases de implementacao
├── FAQSlide.tsx             # 5 perguntas frequentes
└── ProximosPassosSlide.tsx  # CTA final com WhatsApp
```

### Sistema de Modais

#### Tipos (`src/types/modal.ts`)

```typescript
export type PilarType = "atendimento" | "agente" | "automacoes" | "dashboard";

export type ModalKind =
  | { type: "pilar"; pilar: PilarType }
  | { type: "agent"; agent: PilarType }
  | { type: "crm" }
  | { type: "dashboard" }
  | null;
```

### Os 4 Pilares da Solucao

**Foco Principal:** Gestao inteligente de dados + IA gerando insights estrategicos

| ID | Nome | Funcao | Cor |
|----|------|--------|-----|
| atendimento | Central de Atendimento | Painel inteligente para vendedores, historico completo | #00E5FF (Cyan) |
| agente | Assistente 24/7 | Agente de IA para qualificacao automatica | #00FF94 (Verde) |
| automacoes | O Espiao Inteligente | IA capturando dados estrategicos, alertas | #FFD700 (Ouro) |
| dashboard | Painel do Gestor | Dashboard com insights de IA, dados em tempo real | #FF6B6B (Vermelho) |

### Investimento

| Item | Valor |
|------|-------|
| Implementacao (unico) | R$ 20.000,00 |
| Recorrencia mensal | R$ 3.000,00 |

**Incluso:**
- Tokens de IA (Claude, OpenAI)
- Banco de Dados
- Infraestrutura em nuvem
- Suporte e manutencao
- Preco fixo (nao escala com vendedores)

## Dados Centralizados

Arquivo: `src/lib/data/proposal-data.ts`

Contem:
- `pilarData` — Detalhes dos 4 pilares
- `mainPackage` — Precos
- `faqItems` — 5 perguntas FAQ
- `phases` — 4 fases de implementacao
- `benefits` — 5 beneficios principais
- `painPoints` — 4 dores do cliente
- `currentOperationData` — Dados da operacao atual
- `nextSteps` — 3 proximos passos

## FAQ (5 perguntas)

1. **Quanto custa por vendedor adicional?** — Preco fixo, nao muda
2. **Quanto tempo para comecar a usar?** — 2-3 semanas para primeiros resultados
3. **Meus dados estao seguros?** — Criptografia + LGPD
4. **Funciona com meu sistema atual?** — Integracao com ERPs e sistemas
5. **A IA realmente funciona bem?** — 95% dos casos resolvidos automaticamente

## Cronograma (4 fases)

| Fase | Titulo | Descricao |
|------|--------|-----------|
| 1 | Fundacao | Estrutura base, integracao WhatsApp |
| 2 | Inteligencia | Agente IA, automacoes |
| 3 | Gestao | Dashboard, CRM, relatorios |
| 4 | Refinamento | Ajustes, treinamento da equipe |

**Prazo total:** 6-8 semanas

## Tema e Cores

```css
--background: #02040A      /* Fundo escuro */
--accent-tech: #00E5FF     /* Cyan tecnologico */
--accent-success: #00FF94  /* Verde sucesso */

/* Cores dos pilares */
--atendimento: #00E5FF     /* Cyan */
--agente: #00FF94          /* Verde */
--automacoes: #FFD700      /* Ouro */
--dashboard: #A855F7       /* Roxo */
```

## Navegacao

| Acao | Input |
|------|-------|
| Proximo slide | →, Space, scroll |
| Slide anterior | ← |
| Primeiro slide | Home |
| Ultimo slide | End |
| Slide especifico | Clique no dot |

## Assets

```
public/
├── branding/
│   ├── logo-principal-white.svg
│   └── logo-badge-white.svg
└── favicon.ico
```

## Checklist do Projeto

- [x] 8 slides na apresentacao principal
- [x] Background 3D integrado
- [x] Navegacao horizontal com snap
- [x] 4 pilares com modais detalhados
- [x] Investimento transparente (R$20k + R$3k)
- [x] FAQ atualizado (5 perguntas)
- [x] Cronograma com 4 fases
- [x] CTA final com WhatsApp
- [x] Responsivo mobile/desktop
