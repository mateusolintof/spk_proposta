"use client";

import { motion } from "framer-motion";
import {
  MessageSquareMore,
  Bot,
  Cpu,
  LayoutDashboard,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import ModalWrapper from "./ModalWrapper";
import type { PilarType } from "@/types/modal";
import { pilarData } from "@/lib/data/proposal-data";

interface PilarModalProps {
  pilar: PilarType;
  isOpen: boolean;
  onClose: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
  MessageSquareMore: <MessageSquareMore className="w-6 h-6" />,
  Bot: <Bot className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  LayoutDashboard: <LayoutDashboard className="w-6 h-6" />,
};

// Descrição visual de como funciona cada pilar
const pilarFlow: Record<PilarType, { steps: { title: string; desc: string }[] }> = {
  atendimento: {
    steps: [
      { title: "Lead Chega", desc: "Mensagem entra pelo WhatsApp" },
      { title: "Distribuição", desc: "Sistema identifica e distribui automaticamente" },
      { title: "Vendedor Atende", desc: "Com histórico completo na tela" },
      { title: "Dados Salvos", desc: "Tudo registrado automaticamente" },
    ],
  },
  agente: {
    steps: [
      { title: "Lead Chega", desc: "A qualquer hora, dia ou noite" },
      { title: "IA Responde", desc: "Em segundos, de forma natural" },
      { title: "Qualificação", desc: "Coleta nome, produto, urgência" },
      { title: "Passa ao Vendedor", desc: "Lead pronto para fechar" },
    ],
  },
  automacoes: {
    steps: [
      { title: "Conversa Acontece", desc: "Entre vendedor e cliente" },
      { title: "IA Analisa", desc: "Em tempo real, em background" },
      { title: "Dados Capturados", desc: "Tags, resumos, classificações" },
      { title: "Alertas Enviados", desc: "Quando algo precisa de atenção" },
    ],
  },
  dashboard: {
    steps: [
      { title: "Dados Consolidados", desc: "De todas as conversas e vendedores" },
      { title: "Gráficos Atualizados", desc: "Em tempo real no painel" },
      { title: "Relatório Automático", desc: "Todo dia no seu WhatsApp" },
      { title: "Decisões Informadas", desc: "Baseadas em dados reais" },
    ],
  },
};

export default function PilarModal({ pilar, isOpen, onClose }: PilarModalProps) {
  const data = pilarData[pilar];
  const flow = pilarFlow[pilar];

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      title={data.name}
      subtitle={data.fullName}
    >
      <div className="h-full overflow-y-auto pr-2 -mr-2 space-y-8">
        {/* Top Section: Description + Benefits */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Description */}
          <div className="lg:w-1/2 space-y-6">
            {/* Description */}
            <div className="flex items-start gap-4">
              <div
                className="p-4 rounded-xl flex-shrink-0"
                style={{ backgroundColor: `${data.color}20` }}
              >
                <div style={{ color: data.color }}>{iconMap[data.iconName]}</div>
              </div>
              <p className="text-white/70 text-body leading-relaxed">
                {data.description}
              </p>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00FF94]" />
                O Que Você Ganha
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
                    <span className="text-white/70 text-sm">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: How it Works */}
          <div className="lg:w-1/2">
            <h3 className="text-lg font-semibold text-white mb-4">
              Como Funciona
            </h3>
            <div className="space-y-4">
              {flow.steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold"
                    style={{
                      backgroundColor: `${data.color}20`,
                      color: data.color,
                    }}
                  >
                    {index + 1}
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-white font-medium">{step.title}</p>
                    <p className="text-white/50 text-sm">{step.desc}</p>
                  </div>
                  {index < flow.steps.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-white/20 mt-3 hidden lg:block" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Visual Flow Diagram */}
        <div className="border-t border-white/10 pt-6">
          <h3 className="text-lg font-semibold text-white mb-4 text-center">
            Fluxo Visual
          </h3>
          <div className="flex items-center justify-center gap-2 overflow-x-auto py-4">
            {flow.steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <div
                  className="rounded-xl border p-4 text-center min-w-[140px]"
                  style={{
                    backgroundColor: `${data.color}10`,
                    borderColor: `${data.color}30`,
                  }}
                >
                  <p className="text-white font-medium text-sm">{step.title}</p>
                  <p className="text-white/50 text-xs mt-1">{step.desc}</p>
                </div>
                {index < flow.steps.length - 1 && (
                  <ArrowRight
                    className="w-5 h-5 flex-shrink-0"
                    style={{ color: data.color }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-4 border-t border-white/10">
          <p className="text-white/50 text-sm">
            Este pilar faz parte da{" "}
            <span className="text-[#00FF94] font-semibold">
              Solução Completa SPK
            </span>{" "}
            - todos os 4 pilares trabalham juntos de forma integrada.
          </p>
        </div>
      </div>
    </ModalWrapper>
  );
}
