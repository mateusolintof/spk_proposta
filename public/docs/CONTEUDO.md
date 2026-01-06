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
| 3 | Falta de controle operacional | Sem visibilidade de funil, tempo de resposta indefinido |
| 4 | Follow-up de eventos tardio | ~1000 leads por evento desperdiçados (30 dias para contato) |
| 5 | Cobrança sem governança | Risco de perda de número WhatsApp, sem controle de limites |
| 6 | Falta de visibilidade | Sem métricas de funil ou distribuição por vendedor |

### O que está quebrando o processo (e fazendo receita escapar)

- **Lead trava por falta de fallback** → Quando o cliente escolhe um vendedor e ele não responde, a conversa fica "congelada".
- **Distribuição desigual = gargalo + ociosidade** → Alguns vendedores ficam sobrecarregados enquanto outros ficam subutilizados.
- **Sem regras, não existe previsibilidade** → Sem prioridade, sem fila e sem cadência, a performance vira "sorte do atendimento".

### Custo de não agir

- Leads ficam presos e esfriam sem resposta.
- Follow-ups demoram semanas (eventos e recompra viram lista fria).
- Cobrança em alto volume desgasta o canal e reduz capacidade de contato.

> Nota: Dados e exemplos usados nesta proposta são ilustrativos. Metas e cenários serão ajustados após imersão e leitura dos dados reais.

---

## 2) Solução Proposta — Orquestrador + 5 Agentes Especializados

### Proposta de Valor

> Transformar o atendimento de televendas da Mercante em operação orquestrada: fila inteligente com controle operacional, agentes especializados por jornada e governança para proteger a operação de cobrança.

### Arquitetura (alto nível)

- **Orquestrador de fila** com rotação automática entre 18 vendedores.
- **5 agentes especializados** por jornada.
- **Handoffs inteligentes** com contexto preservado.
- **CRM integrado** (inbox + pipeline + histórico).
- **Dashboard executivo** com distribuição e funil.
- **Governança WhatsApp** (limites, qualidade, opt-out).
- **Integração Fortix** (via API/webhooks).
- **Guardrails**: LGPD, auditoria, human-in-loop.

---

## 3) Agentes Especializados

### Agentes Principais

#### 3.1) Agente Atendimento (Core)

**O que faz**
- Orquestrador de atendimento com qualificação 24/7.
- Distribui leads entre os 18 vendedores com balanceamento de carga.
- Rotação automática se vendedor não responder.

**Benefícios**
- Lead nunca fica preso — fallback automático.
- Qualificação e handoff com contexto preservado.
- Distribuição equilibrada (fim do vendedor sobrecarregado).
- Atendimento fora do horário comercial.

#### 3.2) Agente Eventos

**O que faz**
- Confirmação de presença e dados para feiras e eventos presenciais.
- Múltiplas tentativas de contato (mensagem + ligação).

**Benefícios**
- Confirmação de presença no evento.
- Validação e atualização de dados cadastrais.
- Múltiplas tentativas até conseguir contato.
- Métricas de confirmação e ROI por evento.

### Agentes Complementares

#### 3.3) Agente Cobrança

**O que faz**
- Régua de cobrança com governança WhatsApp.
- Controle de limites de envio e qualidade de número.

**Benefícios**
- Múltiplos canais (WhatsApp, SMS, e-mail) com fallback.
- Limites de envio respeitados (Meta guidelines).
- Human-in-loop para negociações de valor.
- Proteção contra perda de número.

#### 3.4) Agente Follow-Up e Recompra

**O que faz**
- Reativação de clientes inativos.
- Cadência automatizada de recompra.

**Benefícios**
- Identificação de clientes inativos.
- Ofertas personalizadas por histórico.
- Métricas de reativação e LTV.
- Alertas de risco de churn.

#### 3.5) Agente Copiloto + POP

**O que faz**
- Assistente de bolso para vendedores.
- Sistema de disparo de promoções (POP).

**Benefícios**
- Assistente para dúvidas de produto.
- Consulta de estoque e preços.
- Disparo de promoções (POP).
- Sugestões de venda cruzada.

---

## 4) Ferramentas

### CRM Integrado (operacional)

- Inbox unificado (multicanal).
- Pipeline de vendas (etapas, responsáveis).
- Histórico de conversas e auditoria de handoffs.
- Integração com Fortix (sincronização de leads/status).

### Dashboard Executivo (gestão)

- **Taxa de resposta** por vendedor e por período.
- **Distribuição** de carga entre os 18 vendedores.
- **Taxa de abandono** por falta de resposta.
- **Recovery de eventos** (% de leads de feiras que entraram no funil).
- **Governança WhatsApp** (qualidade do número, limites).

### Governança WhatsApp

- Controle de volume de envio (não ultrapassa limites da Meta).
- Opt-out respeitado automaticamente.
- Múltiplos canais de fallback (SMS, e-mail).
- Templates aprovados e monitoramento de qualidade.
- Alertas de risco antes que virem problemas.

---

## 5) KPIs Sugeridos (ajustáveis após imersão)

- **Taxa de resposta rápida** (% de leads atendidos a tempo).
- **Distribuição por vendedor** (balanceamento de carga).
- **Taxa de abandono** (leads que esfriaram por falta de resposta).
- **Recovery de eventos** (% de leads de feiras convertidos).
- **Handoff rate** (orquestrador → vendedor) e contexto.
- **Governança WhatsApp** (qualidade do número, limites de envio).

---

## 6) Cronograma (4 fases)

| Fase | Objetivo | Entregas principais |
|------|----------|---------------------|
| 1 — Imersão | Diagnóstico de fila + dados | Desenho de roteamento, integração Fortix, governança |
| 2 — Piloto | Core (Atendimento) operando | Validação com 1-2 vendedores, ajustes de fluxo |
| 3 — Rollout | Expansão + integrações | Toda equipe, Fortix, eventos, cobrança |
| 4 — Otimização | Análise + frentes adicionais | Recompra, copiloto, métricas, melhoria contínua |

---

## 7) Investimento

### Agentes Principais

| Agente | Setup | Mensal |
|--------|-------|--------|
| Agente Atendimento (Core) | R$ 25.000,00 | R$ 5.000,00 |
| Agente Eventos | R$ 8.000,00 | R$ 1.500,00 |

### Agentes Complementares

| Agente | Setup | Mensal |
|--------|-------|--------|
| Agente Cobrança | R$ 8.000,00 | R$ 1.000,00 |
| Agente Follow-Up e Recompra | R$ 8.000,00 | R$ 1.000,00 |
| Agente Copiloto + POP | Sob consulta | Sob consulta |

### Entregáveis Inclusos

- Orquestrador de fila + roteamento inteligente.
- Agentes configurados com base de conhecimento.
- CRM + Dashboard executivo.
- Integrações (Fortix, WhatsApp API, ERP).
- Governança WhatsApp incluída.

**Notas**
- Valores podem ser ajustados após diagnóstico e imersão com a equipe da Mercante.
- Detalhes de integração (quais eventos/dados, periodicidade, limites) são definidos na fase 1 (Imersão).

---

## 8) Perguntas Frequentes

### Como integra com o Fortix e WhatsApp API?
A integração é feita via API e webhooks, sem substituir o sistema atual. O orquestrador funciona como uma camada acima do Fortix, recebendo os leads e distribuindo inteligentemente entre os vendedores.

### Como evitamos perda de número/limite no WhatsApp?
Governança de WhatsApp com: controle de volume de envio, opt-out respeitado automaticamente, múltiplos canais de fallback (SMS, e-mail), e templates aprovados.

### Como fica LGPD e auditoria?
Solução desenhada com boas práticas de privacidade: criptografia em trânsito e em repouso, controle de acesso por perfil, trilhas de auditoria completas e políticas de retenção configuráveis.

### Quem aprova mensagens de cobrança?
A régua de cobrança tem human-in-loop configurável. Mensagens padrão são automatizadas. Negociações de valor ou clientes sensíveis são escalados para aprovação.

### Preciso trocar o Fortix ou o sistema atual?
Não! O orquestrador funciona como uma camada acima do sistema atual. O Fortix continua sendo usado pela equipe.

### Qual o prazo de implementação?
Em geral, 4 a 8 semanas dependendo da complexidade das integrações. Começamos com um piloto com 1-2 vendedores.

---

**Próximo passo:** Agendar imersão para diagnóstico detalhado e proposta personalizada.
