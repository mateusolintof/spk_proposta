"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  GitBranch,
  Handshake,
  Calendar,
  Receipt,
  RefreshCw,
  CheckCircle,
} from "lucide-react";
import ModalWrapper from "./ModalWrapper";
import RadialCapabilityDiagram from "./agents/RadialCapabilityDiagram";
import type { AgentType } from "@/types/modal";

// Dynamic import for ReactFlow component (SSR disabled)
const AgentFlowDiagram = dynamic(
  () => import("./agents/AgentFlowDiagram"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[400px] rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
        <div className="text-white/60 text-sm">Carregando fluxograma...</div>
      </div>
    ),
  }
);

interface AgentModalProps {
  agent: AgentType;
  isOpen: boolean;
  onClose: () => void;
}

const agentData: Record<
  AgentType,
  {
    name: string;
    fullName: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    benefits: string[];
  }
> = {
  fila_sdr: {
    name: "Fila Inteligente + SDR",
    fullName: "Orquestrador de Atendimento com Qualificação 24/7",
    description:
      "Router inteligente que distribui leads entre os 18 vendedores com base em disponibilidade, carga e especialidade. Inclui agente SDR que qualifica, coleta dados essenciais e faz handoff com contexto completo.",
    icon: <GitBranch className="w-6 h-6" />,
    color: "#00E5FF",
    benefits: [
      "Rotação automática - Lead nunca fica preso em vendedor ocupado",
      "SLA controlado - Primeira resposta em menos de 3 minutos",
      "Qualificação 24/7 - Atende fora do horário comercial e finais de semana",
      "Balanceamento de carga - Distribuição equilibrada entre os 18 vendedores",
      "Handoff com contexto - Vendedor recebe histórico e intenção do lead",
    ],
  },
  closer: {
    name: "Closer Assist",
    fullName: "Assistente de Fechamento para Vendedores",
    description:
      "Copiloto interno que apoia o vendedor durante a negociação. Traz contexto do cliente, sugere abordagens baseadas no histórico e alerta sobre oportunidades de cross-sell e up-sell.",
    icon: <Handshake className="w-6 h-6" />,
    color: "#00FF94",
    benefits: [
      "Contexto instantâneo - Histórico de compras e interações na tela",
      "Sugestões de abordagem - Baseadas no perfil e comportamento do cliente",
      "Alertas de oportunidade - Cross-sell e up-sell identificados automaticamente",
      "Resumo de objeções - Principais dúvidas e como responder",
      "Next best action - Próximo passo recomendado para cada lead",
    ],
  },
  eventos: {
    name: "Agente Eventos",
    fullName: "Follow-up e Cadência para Leads de Feiras/Eventos",
    description:
      "Especializado em converter leads capturados em eventos presenciais. Faz follow-up em 24h (não 30 dias), atualiza dados cadastrais e mantém cadência automatizada até o agendamento.",
    icon: <Calendar className="w-6 h-6" />,
    color: "#FFD700",
    benefits: [
      "Follow-up em 24h - Contato imediato pós-evento, não semanas depois",
      "Cadência automatizada - Sequência de 3-5 toques otimizada",
      "Atualização de dados - Coleta informações que faltaram no evento",
      "Agendamento inteligente - Sugere horários e agenda visita/call",
      "Métricas por evento - ROI e conversão de cada feira/ação",
    ],
  },
  cobranca: {
    name: "Agente Cobrança",
    fullName: "Régua de Cobrança com Governança WhatsApp",
    description:
      "Automatiza cobrança de inadimplentes com régua inteligente, múltiplos canais e governança para evitar perda de número. Human-in-loop para negociações sensíveis.",
    icon: <Receipt className="w-6 h-6" />,
    color: "#FF6B6B",
    benefits: [
      "Régua inteligente - Sequência de lembretes pré-vencimento e pós-vencimento",
      "Governança WhatsApp - Limites de envio, opt-out e qualidade controlados",
      "Múltiplos canais - WhatsApp, SMS, e-mail conforme preferência do cliente",
      "Human-in-loop - Escala para humano em negociações ou valores altos",
      "Dashboard de inadimplência - Visão de aging, recovery e motivos",
    ],
  },
  recompra_copiloto: {
    name: "Recompra & Copiloto",
    fullName: "Reativação de Clientes + Assistente Interno do Vendedor",
    description:
      "Combina campanhas de recompra para clientes inativos com um copiloto interno que ajuda o vendedor com contexto, histórico e recomendações personalizadas.",
    icon: <RefreshCw className="w-6 h-6" />,
    color: "#A855F7",
    benefits: [
      "Campanhas de reativação - Identificação e contato de clientes inativos",
      "Segmentação inteligente - Por último pedido, ticket, categoria de produto",
      "Resumo de histórico - Tudo que o vendedor precisa saber em 30 segundos",
      "Próximos passos sugeridos - Recomendações baseadas em comportamento",
      "Alertas de risco de churn - Clientes que podem estar migrando",
    ],
  },
};

export default function AgentModal({ agent, isOpen, onClose }: AgentModalProps) {
  const data = agentData[agent];

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      title={data.name}
      subtitle={data.fullName}
    >
      <div className="h-full overflow-y-auto pr-2 -mr-2 space-y-8">
        {/* Top Section: Description + Capabilities Diagram */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left: Description + Benefits */}
          <div className="order-2 lg:order-1 lg:w-[36%] space-y-6 flex-shrink-0">
            {/* Description */}
            <div className="flex items-start gap-4">
              <div
                className="p-4 rounded-xl flex-shrink-0"
                style={{ backgroundColor: `${data.color}20` }}
              >
                <div style={{ color: data.color }}>{data.icon}</div>
              </div>
              <p className="text-white/70 text-body leading-relaxed">
                {data.description}
              </p>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00FF94]" />
                Benefícios
              </h3>
              <div className="space-y-2">
                {data.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 bg-white/5 rounded-lg p-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <CheckCircle className="w-4 h-4 text-[#00FF94] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-body">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center pt-4 border-t border-white/10">
              <p className="text-white/50 text-sm">
                Este agente está incluído no{" "}
                <span className="text-[#00FF94] font-semibold">
                  Pacote Completo
                </span>
              </p>
            </div>
          </div>

          {/* Right: Radial Capability Diagram */}
          <div className="order-1 lg:order-2 flex-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <RadialCapabilityDiagram
                agentType={agent}
                agentColor={data.color}
              />
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Bottom Section: Interactive Flowchart */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">
              Fluxo de Operação Detalhado
            </h3>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <AgentFlowDiagram agentType={agent} agentColor={data.color} />
          </motion.div>
        </div>
      </div>
    </ModalWrapper>
  );
}
