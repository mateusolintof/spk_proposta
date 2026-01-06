"use client";

import { motion } from "framer-motion";
import {
  Zap,
  CalendarCheck,
  TrendingUp,
  Users,
  Calculator,
  DollarSign,
  Clock,
  ArrowRight,
  BarChart3,
  Shield,
} from "lucide-react";
import SlideShell from "@/components/ui/SlideShell";
import type { ModalKind } from "@/types/modal";

const highlights = [
  {
    icon: <Clock className="w-5 h-5" />,
    label: "SLA Garantido",
    value: "<3 min",
    desc: "primeira resposta",
    color: "#00FF94",
  },
  {
    icon: <Users className="w-5 h-5" />,
    label: "Distribuição",
    value: "18",
    desc: "vendedores equilibrados",
    color: "#00E5FF",
  },
  {
    icon: <CalendarCheck className="w-5 h-5" />,
    label: "Follow-up Eventos",
    value: "24h",
    desc: "vs 30 dias atual",
    color: "#FFD700",
  },
];

const gains = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "SLA Controlado",
    desc: "Lead nunca fica preso. Fila inteligente com rotação automática se vendedor não responder em 5 minutos. Primeira resposta em menos de 3 minutos.",
    color: "cyan",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Distribuição Equilibrada",
    desc: "Fim do vendedor sobrecarregado. Balanceamento de carga inteligente entre os 18 vendedores, com fallback e priorização por disponibilidade.",
    color: "green",
  },
  {
    icon: <CalendarCheck className="w-6 h-6" />,
    title: "Eventos Convertidos",
    desc: "Follow-up em 24h (não 30 dias). Cadência automatizada para leads de feiras e eventos presenciais com ~1000 leads por evento.",
    color: "cyan",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Cobrança Segura",
    desc: "Governança WhatsApp para evitar perda de número. Múltiplos canais, limites de envio respeitados e human-in-loop para negociações.",
    color: "green",
  },
];


interface GanhosSlideProps {
  onOpenModal?: (modal: ModalKind) => void;
}

export default function GanhosSlide({ onOpenModal }: GanhosSlideProps) {
  return (
    <SlideShell
      eyebrow="Resultados"
      eyebrowColor="success"
      title="Resultados Esperados"
      subtitle="Ganhos operacionais concretos para a operação da Mercante"
      align="center"
      background={
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#00FF94]/5 via-transparent to-transparent pointer-events-none" />
      }
    >
      <div className="w-full space-y-8">
        {/* Calculator Cards */}
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-white/40 max-w-4xl mx-auto">
          <span>Simuladores (valores ilustrativos)</span>
          <span className="hidden sm:inline">Clique para simular</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
          <motion.button
            type="button"
            onClick={() => onOpenModal?.({ type: "roi" })}
            className="bg-gradient-to-br from-[#00FF94]/10 to-transparent border border-[#00FF94]/30 rounded-2xl p-6 text-left hover:border-[#00FF94]/60 hover:bg-[#00FF94]/5 transition-all cursor-pointer group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-start gap-4">
              <div className="p-4 bg-[#00FF94]/20 rounded-xl">
                <Calculator className="w-8 h-8 text-[#00FF94]" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white group-hover:text-[#00FF94] transition-colors">
                  Simulador de Impacto
                </h3>
                <p className="text-white/60 mt-2 text-body leading-relaxed">
                  Simule o impacto na operação com base em volume de mensagens,
                  ticket médio e taxa de conversão atual.
                </p>
                <div className="mt-4 flex items-center gap-2 text-[#00FF94]">
                  <Zap className="w-4 h-4" />
                  <span className="text-body font-medium">Simular agora</span>
                </div>
              </div>
            </div>
          </motion.button>

          <motion.button
            type="button"
            onClick={() => onOpenModal?.({ type: "costs" })}
            className="bg-gradient-to-br from-[#00E5FF]/10 to-transparent border border-[#00E5FF]/30 rounded-2xl p-6 text-left hover:border-[#00E5FF]/60 hover:bg-[#00E5FF]/5 transition-all cursor-pointer group"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-start gap-4">
              <div className="p-4 bg-[#00E5FF]/20 rounded-xl">
                <DollarSign className="w-8 h-8 text-[#00E5FF]" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white group-hover:text-[#00E5FF] transition-colors">
                  Ganho de Capacidade
                </h3>
                <p className="text-white/60 mt-2 text-body leading-relaxed">
                  Calcule o aumento de capacidade por vendedor com
                  orquestração e automação de tarefas repetitivas.
                </p>
                <div className="mt-4 flex items-center gap-2 text-[#00E5FF]">
                  <Zap className="w-4 h-4" />
                  <span className="text-body font-medium">Simular ganho</span>
                </div>
              </div>
            </div>
          </motion.button>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl mx-auto">
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              className="bg-white/5 border border-white/10 rounded-xl p-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <div
                className="w-10 h-10 mx-auto rounded-lg flex items-center justify-center mb-3"
                style={{ backgroundColor: `${item.color}20` }}
              >
                <div style={{ color: item.color }}>{item.icon}</div>
              </div>
              <p className="text-3xl md:text-4xl font-bold" style={{ color: item.color }}>
                {item.value}
              </p>
              <p className="text-white/70 text-body mt-1">{item.label}</p>
              <p className="text-white/40 text-xs">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Gains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
          {gains.map((gain, index) => (
            <motion.div
              key={gain.title}
              className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3 text-left"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 + index * 0.08 }}
            >
              <div
                className={`p-2 rounded-lg ${
                  gain.color === "cyan"
                    ? "bg-[#00E5FF]/10 text-[#00E5FF]"
                    : "bg-[#00FF94]/10 text-[#00FF94]"
                }`}
              >
                {gain.icon}
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">
                  {gain.title}
                </h3>
                <p className="text-white/50 mt-1 text-body leading-relaxed">
                  {gain.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
        >
          <motion.button
            type="button"
            onClick={() => onOpenModal?.({ type: "gains" })}
            className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#00FF94]/10 to-transparent border border-[#00FF94]/30 rounded-xl text-white hover:border-[#00FF94]/60 hover:bg-[#00FF94]/5 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <TrendingUp className="w-5 h-5 text-[#00FF94]" />
            <span className="font-medium">Detalhar Ganhos Operacionais</span>
            <ArrowRight className="w-4 h-4 text-[#00FF94] group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            type="button"
            onClick={() => onOpenModal?.({ type: "intelligence" })}
            className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#00E5FF]/10 to-transparent border border-[#00E5FF]/30 rounded-xl text-white hover:border-[#00E5FF]/60 hover:bg-[#00E5FF]/5 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <BarChart3 className="w-5 h-5 text-[#00E5FF]" />
            <span className="font-medium">Ver Inteligência de Dados</span>
            <ArrowRight className="w-4 h-4 text-[#00E5FF] group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        <motion.p
          className="text-white/40 text-xs text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          * Valores e métricas são ilustrativos. Os resultados reais serão definidos
          após diagnóstico e imersão com a equipe da Mercante.
        </motion.p>
      </div>
    </SlideShell>
  );
}
