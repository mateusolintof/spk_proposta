"use client";

import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Users,
  BarChart3,
  Bell,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import SlideShell from "@/components/ui/SlideShell";
import type { ModalKind } from "@/types/modal";
import { benefits, currentOperationData } from "@/lib/data/proposal-data";

const iconMap: Record<string, React.ReactNode> = {
  Target: <Target className="w-5 h-5" />,
  Eye: <Eye className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  BarChart3: <BarChart3 className="w-5 h-5" />,
  Bell: <Bell className="w-5 h-5" />,
};

interface GanhosSlideProps {
  onOpenModal?: (modal: ModalKind) => void;
}

export default function GanhosSlide({ onOpenModal }: GanhosSlideProps) {
  return (
    <SlideShell
      eyebrow="Resultados"
      eyebrowColor="success"
      title="O Que Você Ganha com Isso"
      subtitle="Resultados concretos que transformam sua operação comercial"
      align="center"
      background={
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#00FF94]/5 via-transparent to-transparent pointer-events-none" />
      }
    >
      <div className="w-full space-y-8">
        {/* Seção 1: Benefícios Principais */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-[#00FF94] rounded-full" />
            <h3 className="text-lg font-semibold text-white">
              Benefícios Diretos para sua Operação
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="rounded-xl border border-white/10 bg-white/5 p-5 hover:border-[#00FF94]/30 transition-colors"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.05 }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="p-2.5 rounded-lg"
                    style={{ backgroundColor: `${benefit.color}20` }}
                  >
                    <div style={{ color: benefit.color }}>
                      {iconMap[benefit.iconName]}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{benefit.title}</p>
                    <p className="text-xs text-white/60 mt-1 leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Seção 2: Transformação Antes vs Depois */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-[#00E5FF] rounded-full" />
            <h3 className="text-lg font-semibold text-white">
              A Transformação da sua Operação
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Antes */}
            <motion.div
              className="rounded-2xl border border-red-500/20 bg-red-500/5 p-5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-red-400 text-xs uppercase tracking-wider font-semibold mb-4">
                Hoje - Sem a Solução
              </p>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Leads de tráfego pago sem saber se foram atendidos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Clientes noturnos e de fim de semana ignorados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Vendedores que você não sabe se estão performando</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Decisões baseadas em achismo, sem dados reais</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>CRM desatualizado que depende do vendedor registrar</span>
                </li>
              </ul>
            </motion.div>

            {/* Depois */}
            <motion.div
              className="rounded-2xl border border-[#00FF94]/30 bg-[#00FF94]/5 p-5"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[#00FF94] text-xs uppercase tracking-wider font-semibold mb-4">
                Com a Solução
              </p>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00FF94] mt-0.5 flex-shrink-0" />
                  <span>100% dos {currentOperationData.leadsTrafego} leads mensais atendidos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00FF94] mt-0.5 flex-shrink-0" />
                  <span>Atendimento 24/7 - leads fora do horário não escapam</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00FF94] mt-0.5 flex-shrink-0" />
                  <span>Ranking e métricas de cada vendedor em tempo real</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00FF94] mt-0.5 flex-shrink-0" />
                  <span>Dashboard executivo + relatório diário no WhatsApp</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00FF94] mt-0.5 flex-shrink-0" />
                  <span>CRM atualizado automaticamente pela IA</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Seção 3: Resumo de Impacto */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
            <p className="text-3xl font-bold text-[#00FF94]">100%</p>
            <p className="text-xs text-white/50 mt-1">Taxa de Resposta aos Leads</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
            <p className="text-3xl font-bold text-[#00E5FF]">24/7</p>
            <p className="text-xs text-white/50 mt-1">Atendimento Automático</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
            <p className="text-3xl font-bold text-[#FFD700]">&lt;5s</p>
            <p className="text-xs text-white/50 mt-1">Tempo de Primeira Resposta</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
            <p className="text-3xl font-bold text-white">0</p>
            <p className="text-xs text-white/50 mt-1">Leads Perdidos por Demora</p>
          </div>
        </motion.div>

        {/* Conclusão */}
        <motion.div
          className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-white/80 text-sm leading-relaxed">
            <strong className="text-[#00FF94]">O resultado final:</strong> você ganha visibilidade total
            da operação, seus vendedores focam em vender (não em responder perguntas básicas),
            e nenhum lead de tráfego pago é desperdiçado.
          </p>
        </motion.div>
      </div>
    </SlideShell>
  );
}
