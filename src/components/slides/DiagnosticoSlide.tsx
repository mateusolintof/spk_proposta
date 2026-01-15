"use client";

import { motion } from "framer-motion";
import { Target, Eye, Users, BarChart3, AlertTriangle } from "lucide-react";
import SlideShell from "@/components/ui/SlideShell";
import { painPoints, currentOperationData } from "@/lib/data/proposal-data";

const iconMap: Record<string, React.ReactNode> = {
  Target: <Target className="h-5 w-5" />,
  Eye: <Eye className="h-5 w-5" />,
  Users: <Users className="h-5 w-5" />,
  BarChart3: <BarChart3 className="h-5 w-5" />,
};

export default function DiagnosticoSlide() {
  return (
    <SlideShell
      eyebrow="O Problema"
      eyebrowColor="warning"
      title="O Que Você Não Vê, Você Não Controla"
      subtitle={`Diagnóstico da operação com ${currentOperationData.vendedores} vendedores e ${currentOperationData.leadsTrafego} leads/mês de tráfego pago.`}
      size="compact"
      background={
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent pointer-events-none" />
      }
    >
      <div className="w-full space-y-8">
        {/* Seção 01 - 4 Dores */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.3em] text-amber-300/70">
              01
            </span>
            <h3 className="text-lg font-semibold text-white">
              Onde a Operação Está Travando
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {painPoints.map((pain, index) => (
              <motion.div
                key={pain.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.1 }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="rounded-lg p-2"
                    style={{
                      backgroundColor: `${pain.color}15`,
                      color: pain.color,
                    }}
                  >
                    {iconMap[pain.iconName]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{pain.title}</p>
                    <p className="text-xs text-white/50">{pain.subtitle}</p>
                  </div>
                </div>
                <ul className="space-y-2 text-xs text-white/60">
                  {pain.problems.map((problem, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-400 mt-0.5">•</span>
                      <span>{problem}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Seção 02 - Contexto da Operação */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.3em] text-amber-300/70">
              02
            </span>
            <h3 className="text-lg font-semibold text-white">
              Contexto da Operação Atual
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-12 h-12 mx-auto rounded-lg bg-[#00E5FF]/10 flex items-center justify-center mb-3">
                <Users className="h-6 w-6 text-[#00E5FF]" />
              </div>
              <p className="text-2xl font-bold text-white">{currentOperationData.vendedores} vendedores</p>
              <p className="text-xs text-white/50 mt-1">Equipe de vendas atual</p>
            </motion.div>

            <motion.div
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-12 h-12 mx-auto rounded-lg bg-[#00FF94]/10 flex items-center justify-center mb-3">
                <Target className="h-6 w-6 text-[#00FF94]" />
              </div>
              <p className="text-2xl font-bold text-white">{currentOperationData.leadsTrafego} leads/mês</p>
              <p className="text-xs text-white/50 mt-1">Vindos de tráfego pago</p>
            </motion.div>

            <motion.div
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-12 h-12 mx-auto rounded-lg bg-[#FFD700]/10 flex items-center justify-center mb-3">
                <BarChart3 className="h-6 w-6 text-[#FFD700]" />
              </div>
              <p className="text-2xl font-bold text-white">{currentOperationData.conversasMes}</p>
              <p className="text-xs text-white/50 mt-1">Conversas mensais</p>
            </motion.div>
          </div>
        </div>

        {/* Card de Custo de Não Agir */}
        <motion.div
          className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <AlertTriangle className="h-5 w-5 text-red-400" />
            <p className="text-red-400 text-sm uppercase tracking-wider font-semibold">
              O Custo de Continuar Assim
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>Leads de tráfego pago que custaram dinheiro vão para o lixo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>Você investe em anúncios mas não sabe o retorno real</span>
              </li>
            </ul>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>Vendedores podem estar deixando dinheiro na mesa</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>Sem dados, impossível saber onde melhorar</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Conclusão */}
        <motion.div
          className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-white/80 text-sm leading-relaxed">
            <strong className="text-[#00FF94]">Problema central:</strong> {currentOperationData.problema}.{" "}
            <strong className="text-[#00FF94]">
              A solução proposta resolve isso com 4 pilares integrados
            </strong>{" "}
            que trabalham juntos para você vender mais e gerenciar melhor.
          </p>
        </motion.div>
      </div>
    </SlideShell>
  );
}
