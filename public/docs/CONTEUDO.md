# Proposta Comercial
## Orquestrador de Atendimento Comercial — Mercante Distribuidora

**Cliente:** Mercante Distribuidora
**Preparado por:** Convert A.I — Arquitetura de Agentes de IA

---

## 1) Diagnóstico Atual

### Cenário da Operação

- **18 vendedores** em televendas.
- **12-15 mil mensagens/mês** de volume.
- Sistema atual: **Fortix** (cliente escolhe vendedor em lista, sem rotação automática).
- **Eventos/feiras:** ~1000 leads por evento, follow-up demora ~30 dias.
- **Cobrança:** ~1000 mensagens/dia com risco de perda de número WhatsApp.

### Gargalos Identificados

| # | Gargalo | Impacto no negócio |
|---|--------|--------------------|
| 1 | Sem fila inteligente | Lead fica preso se vendedor escolhido não responder |
| 2 | Distribuição desigual | Vendedores sobrecarregados x ociosos |
| 3 | SLA sem controle | Tempo de primeira resposta indefinido, lead esfria |
| 4 | Follow-up de eventos tardio | ~1000 leads por evento desperdicados (30 dias para contato) |
| 5 | Cobranca sem governanca | Risco de perda de numero WhatsApp, sem controle de limites |
| 6 | Falta de visibilidade | Sem metricas de funil, SLA ou distribuicao por vendedor |

### Onde a Receita se Perde

- **Lead sem resposta em 5+ min** → Esfria e busca concorrente.
- **Lead preso em vendedor ocupado** → Sem rotacao, cliente espera ou desiste.
- **Eventos:** Follow-up leva ~30 dias → ~1000 leads por evento desperdicados.
- **Cobranca:** ~1000 mensagens/dia sem governanca → Risco de perda de numero.

> Nota: Dados e exemplos usados nesta proposta sao ilustrativos. Metas e cenarios serao ajustados apos imersao e leitura dos dados reais.

---

## 2) Solucao Proposta — Orquestrador + 5 Frentes de Agentes

### Proposta de Valor

> Transformar o atendimento de televendas da Mercante em operacao orquestrada: fila inteligente com SLA controlado, agentes especializados por jornada e governanca para proteger a operacao de cobranca.

### Arquitetura (alto nivel)

- **Orquestrador de fila** com rotacao automatica entre 18 vendedores.
- **5 frentes de agentes** especializados por jornada.
- **Handoffs inteligentes** com contexto preservado.
- **CRM integrado** (inbox + pipeline + historico).
- **Dashboard executivo** com SLA, distribuicao e funil.
- **Governanca WhatsApp** (limites, qualidade, opt-out).
- **Integracao Fortix** (via API/webhooks).
- **Guardrails**: LGPD, auditoria, human-in-loop.

---

## 3) Frentes de Agentes

### 3.1) Fila + SDR (Core)

**O que faz**
- Router de atendimento com qualificacao 24/7.
- Distribui leads entre os 18 vendedores com balanceamento de carga.
- Rotacao automatica se vendedor nao responder em 5 minutos.

**Beneficios**
- SLA controlado: primeira resposta em menos de 3 minutos.
- Lead nunca fica preso — fallback automatico.
- Qualificacao e handoff com contexto preservado.
- Distribuicao equilibrada (fim do vendedor sobrecarregado).

### 3.2) Closer Assist

**O que faz**
- Copiloto do vendedor para apoio no fechamento.
- Fornece contexto, historico e sugestoes de abordagem.

**Beneficios**
- Vendedor recebe lead com contexto completo.
- Alertas de oportunidade (cross-sell, up-sell).
- Resumo de historico para retomada de conversa.
- Sugestoes de proximos passos.

### 3.3) Agente Eventos

**O que faz**
- Follow-up automatizado para leads de feiras e eventos presenciais.
- Cadencia em 24h (nao 30 dias).

**Beneficios**
- Recuperacao de ~1000 leads por evento.
- Cadencia automatizada com multiplos touchpoints.
- Metricas de ROI por evento.
- Atualizacao de dados de contato.

### 3.4) Agente Cobranca

**O que faz**
- Regua de cobranca com governanca WhatsApp.
- Controle de limites de envio e qualidade de numero.

**Beneficios**
- Multiplos canais (WhatsApp, SMS, e-mail) com fallback.
- Limites de envio respeitados (Meta guidelines).
- Human-in-loop para negociacoes de valor.
- Protecao contra perda de numero.

### 3.5) Recompra e Copiloto

**O que faz**
- Reativacao de clientes inativos.
- Assistente interno do vendedor com resumo de historico.

**Beneficios**
- Campanhas de recompra automatizadas.
- Segmentacao por tempo de inatividade.
- Alertas de risco de churn.
- Resumo de historico para vendedor.

---

## 4) Ferramentas

### CRM Integrado (operacional)

- Inbox unificado (multicanal).
- Pipeline de vendas (etapas, responsaveis, SLAs).
- Historico de conversas e auditoria de handoffs.
- Integracao com Fortix (sincronizacao de leads/status).

### Dashboard Executivo (gestao)

- **SLA** por vendedor e por periodo.
- **Distribuicao** de carga entre os 18 vendedores.
- **Taxa de abandono** por falta de resposta.
- **Recovery de eventos** (% de leads de feiras que entraram no funil).
- **Governanca WhatsApp** (qualidade do numero, limites).

### Governanca WhatsApp

- Controle de volume de envio (nao ultrapassa limites da Meta).
- Opt-out respeitado automaticamente.
- Multiplos canais de fallback (SMS, e-mail).
- Templates aprovados e monitoramento de qualidade.
- Alertas de risco antes que virem problemas.

---

## 5) KPIs Sugeridos (ajustaveis apos imersao)

- **Tempo de primeira resposta** (meta: < 3 minutos).
- **Distribuicao por vendedor** (balanceamento de carga).
- **Taxa de SLA** (% de leads atendidos dentro do SLA).
- **Taxa de abandono** (leads que esfriaram por falta de resposta).
- **Recovery de eventos** (% de leads de feiras convertidos).
- **Handoff rate** (orquestrador → vendedor) e contexto.
- **Governanca WhatsApp** (qualidade do numero, limites de envio).

---

## 6) Cronograma (4 fases)

| Fase | Objetivo | Entregas principais |
|------|----------|---------------------|
| 1 — Imersao | Diagnostico de fila + dados | Desenho de roteamento, integracao Fortix, governanca |
| 2 — Piloto | Core (Fila + SDR) operando | Validacao com 1-2 vendedores, ajustes de fluxo |
| 3 — Rollout | Expansao + integracoes | Toda equipe, Fortix, eventos, cobranca |
| 4 — Otimizacao | Analise + frentes adicionais | Recompra, copiloto, metricas, melhoria continua |

---

## 7) Investimento

### Frentes de Agentes (escolha modular)

| Frente | Setup | Mensal |
|--------|-------|--------|
| Fila + SDR (Core) | Sob consulta | Sob consulta |
| Closer Assist | Sob consulta | Sob consulta |
| Agente Eventos | Sob consulta | Sob consulta |
| Agente Cobranca | Sob consulta | Sob consulta |
| Recompra e Copiloto | Sob consulta | Sob consulta |

### Pacote Completo (Recomendado)

- **Setup:** Sob consulta
- **Mensalidade:** Sob consulta

**Incluso no pacote**
- Orquestrador de fila + roteamento inteligente.
- 5 agentes configurados com base de conhecimento.
- CRM + Dashboard executivo.
- Integracoes (Fortix, WhatsApp API, ERP).
- Governanca WhatsApp incluida.
- Treinamento e 30 dias de acompanhamento.

**Notas**
- Valores personalizados apos diagnostico e imersao com a equipe da Mercante.
- Detalhes de integracao (quais eventos/dados, periodicidade, limites) sao definidos na fase 1 (Imersao).
- Solicite proposta personalizada para sua operacao.

---

## 8) Perguntas Frequentes

### Como integra com o Fortix e WhatsApp API?
A integracao e feita via API e webhooks, sem substituir o sistema atual. O orquestrador funciona como uma camada acima do Fortix, recebendo os leads e distribuindo inteligentemente entre os vendedores.

### Como evitamos perda de numero/limite no WhatsApp?
Governanca de WhatsApp com: controle de volume de envio, opt-out respeitado automaticamente, multiplos canais de fallback (SMS, e-mail), e templates aprovados.

### Como fica LGPD e auditoria?
Solucao desenhada com boas praticas de privacidade: criptografia em transito e em repouso, controle de acesso por perfil, trilhas de auditoria completas e politicas de retencao configuraveis.

### Quem aprova mensagens de cobranca?
A regua de cobranca tem human-in-loop configuravel. Mensagens padrao sao automatizadas. Negociacoes de valor ou clientes sensiveis sao escalados para aprovacao.

### Preciso trocar o Fortix ou o sistema atual?
Nao! O orquestrador funciona como uma camada acima do sistema atual. O Fortix continua sendo usado pela equipe.

### Qual o prazo de implementacao?
Em geral, 4 a 8 semanas dependendo da complexidade das integracoes. Comecamos com um piloto com 1-2 vendedores.

---

**Proximo passo:** Agendar imersao para diagnostico detalhado e proposta personalizada.
