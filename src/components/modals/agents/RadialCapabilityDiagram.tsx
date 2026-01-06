"use client";

import { motion } from "framer-motion";
import {
  Bot,
  GitBranch,
  Clock,
  Users,
  MessageSquare,
  Target,
  Handshake,
  Lightbulb,
  TrendingUp,
  Zap,
  Calendar,
  Send,
  CheckCircle,
  Receipt,
  Shield,
  Phone,
  Bell,
  RefreshCw,
  Search,
  BarChart3,
  UserCheck,
} from "lucide-react";
import { AgentType } from "@/types/modal";

interface CapabilityItem {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  items: string[];
}

interface CapabilityGroup {
  id: string;
  title: string;
  subtitle: string;
  items: CapabilityItem[];
}

interface AgentCapabilities {
  centerTitle: string;
  centerSubtitle: string;
  summary: string;
  groups: CapabilityGroup[];
}

const capabilitiesByAgent: Record<AgentType, AgentCapabilities> = {
  fila_sdr: {
    centerTitle: "Fila + SDR",
    centerSubtitle: "Orquestração 24h",
    summary: "Distribui, qualifica e direciona com SLA garantido.",
    groups: [
      {
        id: "entrada",
        title: "Roteamento",
        subtitle: "Distribui entre vendedores",
        items: [
          {
            id: "fila",
            title: "Fila Inteligente",
            subtitle: "Rotação automática",
            icon: GitBranch,
            items: ["Balanceamento de carga", "Fallback se não atender"],
          },
          {
            id: "sla",
            title: "SLA Controlado",
            subtitle: "Tempo de resposta",
            icon: Clock,
            items: ["Alerta em 2 min", "Reatribui em 5 min"],
          },
        ],
      },
      {
        id: "qualificacao",
        title: "Qualificação",
        subtitle: "Coleta e valida dados",
        items: [
          {
            id: "coleta",
            title: "Coleta de Dados",
            subtitle: "Cadastro completo",
            icon: MessageSquare,
            items: ["Nome, empresa, CNPJ", "Interesse e urgência"],
          },
          {
            id: "score",
            title: "Score de Lead",
            subtitle: "Priorização automática",
            icon: Target,
            items: ["Hot, warm, cold", "Baseado em comportamento"],
          },
        ],
      },
      {
        id: "handoff",
        title: "Handoff",
        subtitle: "Entrega ao vendedor",
        items: [
          {
            id: "contexto",
            title: "Contexto Completo",
            subtitle: "Tudo que o vendedor precisa",
            icon: Users,
            items: ["Histórico da conversa", "Intenção identificada"],
          },
          {
            id: "notificacao",
            title: "Notificação",
            subtitle: "Alerta em tempo real",
            icon: Bell,
            items: ["Push no celular", "Mensagem no sistema"],
          },
        ],
      },
    ],
  },
  closer: {
    centerTitle: "Closer Assist",
    centerSubtitle: "Copiloto do Vendedor",
    summary: "Contexto, sugestões e alertas para fechar mais.",
    groups: [
      {
        id: "contexto",
        title: "Contexto",
        subtitle: "Informação na hora certa",
        items: [
          {
            id: "historico",
            title: "Histórico Completo",
            subtitle: "Compras e interações",
            icon: Search,
            items: ["Últimos pedidos", "Produtos preferidos"],
          },
          {
            id: "perfil",
            title: "Perfil do Cliente",
            subtitle: "Dados consolidados",
            icon: UserCheck,
            items: ["Ticket médio", "Frequência de compra"],
          },
        ],
      },
      {
        id: "sugestoes",
        title: "Sugestões",
        subtitle: "Recomendações inteligentes",
        items: [
          {
            id: "abordagem",
            title: "Abordagem",
            subtitle: "Como abordar o cliente",
            icon: Lightbulb,
            items: ["Baseada no histórico", "Objeções comuns"],
          },
          {
            id: "oportunidades",
            title: "Oportunidades",
            subtitle: "Cross e up-sell",
            icon: TrendingUp,
            items: ["Produtos relacionados", "Promoções ativas"],
          },
        ],
      },
      {
        id: "acoes",
        title: "Ações",
        subtitle: "Next best action",
        items: [
          {
            id: "proximo",
            title: "Próximo Passo",
            subtitle: "O que fazer agora",
            icon: Zap,
            items: ["Ação recomendada", "Prazo sugerido"],
          },
          {
            id: "handoff",
            title: "Escala Humana",
            subtitle: "Quando envolver gestor",
            icon: Handshake,
            items: ["Negociações especiais", "Clientes VIP"],
          },
        ],
      },
    ],
  },
  eventos: {
    centerTitle: "Agente Eventos",
    centerSubtitle: "Follow-up de Feiras",
    summary: "Contato em 24h, cadência e agendamento automático.",
    groups: [
      {
        id: "captura",
        title: "Captura",
        subtitle: "Recebe leads do evento",
        items: [
          {
            id: "entrada",
            title: "Entrada de Leads",
            subtitle: "Integração com evento",
            icon: Calendar,
            items: ["Lista de participantes", "Dados do crachá"],
          },
          {
            id: "enriquecimento",
            title: "Enriquecimento",
            subtitle: "Completa dados",
            icon: Search,
            items: ["CNPJ, segmento", "Tamanho da empresa"],
          },
        ],
      },
      {
        id: "cadencia",
        title: "Cadência",
        subtitle: "Sequência de follow-up",
        items: [
          {
            id: "toque1",
            title: "1º Toque (24h)",
            subtitle: "Agradecimento + value",
            icon: Send,
            items: ["Obrigado pela visita", "Material exclusivo"],
          },
          {
            id: "toque2",
            title: "2º Toque (72h)",
            subtitle: "Proposta ou agenda",
            icon: Clock,
            items: ["Proposta personalizada", "Sugestão de reunião"],
          },
        ],
      },
      {
        id: "conversao",
        title: "Conversão",
        subtitle: "Agendamento e handoff",
        items: [
          {
            id: "agenda",
            title: "Agendamento",
            subtitle: "Marca visita ou call",
            icon: Calendar,
            items: ["Sugere horários", "Confirma automaticamente"],
          },
          {
            id: "metricas",
            title: "Métricas",
            subtitle: "ROI do evento",
            icon: BarChart3,
            items: ["Taxa de conversão", "Custo por lead"],
          },
        ],
      },
    ],
  },
  cobranca: {
    centerTitle: "Agente Cobrança",
    centerSubtitle: "Régua com Governança",
    summary: "Cobrança automatizada com limites e human-in-loop.",
    groups: [
      {
        id: "regua",
        title: "Régua",
        subtitle: "Sequência de cobrança",
        items: [
          {
            id: "prevenc",
            title: "Pré-vencimento",
            subtitle: "Lembrete amigável",
            icon: Bell,
            items: ["3 dias antes", "Boleto anexo"],
          },
          {
            id: "posvenc",
            title: "Pós-vencimento",
            subtitle: "Cobrança graduada",
            icon: Receipt,
            items: ["D+1, D+7, D+15", "Urgência crescente"],
          },
        ],
      },
      {
        id: "governanca",
        title: "Governança",
        subtitle: "Controle e segurança",
        items: [
          {
            id: "limites",
            title: "Limites WhatsApp",
            subtitle: "Evita perda de número",
            icon: Shield,
            items: ["Volume controlado", "Opt-out respeitado"],
          },
          {
            id: "canais",
            title: "Múltiplos Canais",
            subtitle: "Não depende só de um",
            icon: Phone,
            items: ["WhatsApp, SMS, e-mail", "Preferência do cliente"],
          },
        ],
      },
      {
        id: "negociacao",
        title: "Negociação",
        subtitle: "Human-in-loop",
        items: [
          {
            id: "escala",
            title: "Escala Humana",
            subtitle: "Casos sensíveis",
            icon: Users,
            items: ["Valores altos", "Clientes especiais"],
          },
          {
            id: "acordo",
            title: "Acordo",
            subtitle: "Parcelamento guiado",
            icon: Handshake,
            items: ["Opções de pagamento", "Registro no sistema"],
          },
        ],
      },
    ],
  },
  recompra_copiloto: {
    centerTitle: "Recompra & Copiloto",
    centerSubtitle: "Reativação + Assistente",
    summary: "Recupera clientes inativos e apoia o vendedor.",
    groups: [
      {
        id: "reativacao",
        title: "Reativação",
        subtitle: "Clientes inativos",
        items: [
          {
            id: "identificacao",
            title: "Identificação",
            subtitle: "Quem parou de comprar",
            icon: Search,
            items: ["Sem pedido há 60 dias", "Ticket médio alto"],
          },
          {
            id: "campanha",
            title: "Campanha",
            subtitle: "Contato personalizado",
            icon: RefreshCw,
            items: ["Oferta exclusiva", "Baseada no histórico"],
          },
        ],
      },
      {
        id: "copiloto",
        title: "Copiloto",
        subtitle: "Assistente do vendedor",
        items: [
          {
            id: "resumo",
            title: "Resumo Rápido",
            subtitle: "Contexto em 30s",
            icon: Lightbulb,
            items: ["Últimas compras", "Preferências"],
          },
          {
            id: "recomendacoes",
            title: "Recomendações",
            subtitle: "O que oferecer",
            icon: TrendingUp,
            items: ["Baseado em compras", "Produtos novos"],
          },
        ],
      },
      {
        id: "alertas",
        title: "Alertas",
        subtitle: "Proatividade",
        items: [
          {
            id: "churn",
            title: "Risco de Churn",
            subtitle: "Cliente pode sair",
            icon: Bell,
            items: ["Frequência caindo", "Concorrente ativo"],
          },
          {
            id: "oportunidade",
            title: "Oportunidade",
            subtitle: "Momento de vender",
            icon: CheckCircle,
            items: ["Reposição estimada", "Lançamento relevante"],
          },
        ],
      },
    ],
  },
};

interface RadialCapabilityDiagramProps {
  agentType: AgentType;
  agentColor: string;
}

export default function RadialCapabilityDiagram({
  agentType,
  agentColor,
}: RadialCapabilityDiagramProps) {
  const agentConfig = capabilitiesByAgent[agentType];

  return (
    <div className="relative w-full rounded-2xl border border-white/10 bg-[#0b1220]/80 p-6 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="flex flex-col items-center text-center gap-2">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/40">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: agentColor }}
          />
          Infográfico do agente
        </div>
        <div className="flex items-center gap-2 text-white">
          <Bot className="w-5 h-5 text-white/70" />
          <span className="text-base font-semibold">
            Mapa do {agentConfig.centerTitle}
          </span>
        </div>
        <p className="text-body text-white/60">{agentConfig.summary}</p>
      </div>

      <div className="mt-6 flex justify-center">
        <div className="relative">
          <div
            className="absolute inset-0 rounded-full blur-2xl opacity-40"
            style={{ backgroundColor: agentColor }}
          />
          <div
            className="relative w-28 h-28 rounded-full border border-white/20 flex flex-col items-center justify-center text-white text-center"
            style={{ backgroundColor: agentColor }}
          >
            <Bot className="w-7 h-7 mb-1" />
            <span className="text-xs font-semibold">
              {agentConfig.centerTitle}
            </span>
            <span className="text-[11px] text-white/80">
              {agentConfig.centerSubtitle}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {agentConfig.groups.map((group, index) => (
          <motion.div
            key={group.id}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 h-full"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 + index * 0.1 }}
          >
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/30 text-white/70 text-sm font-semibold">
                {index + 1}
              </div>
              <div className="min-w-0">
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">
                  Etapa {index + 1}
                </p>
                <h4 className="text-base font-semibold text-white">
                  {group.title}
                </h4>
                <p className="text-xs text-white/50">{group.subtitle}</p>
              </div>
            </div>

            <div className="mt-4 space-y-4">
              {group.items.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.id} className="flex items-start gap-3">
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-lg"
                      style={{ backgroundColor: `${agentColor}20` }}
                    >
                      <Icon className="w-4 h-4" style={{ color: agentColor }} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-white">
                        {item.title}
                      </p>
                      <p className="text-xs text-white/50">{item.subtitle}</p>
                      <ul className="mt-2 space-y-1">
                        {item.items.map((line) => (
                          <li
                            key={line}
                            className="flex items-start gap-2 text-xs text-white/60"
                          >
                            <span className="mt-1 h-1 w-1 rounded-full bg-white/40" />
                            <span className="leading-snug">{line}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
