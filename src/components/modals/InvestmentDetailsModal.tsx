"use client";

import { motion } from "framer-motion";
import { TrendingDown, Check } from "lucide-react";
import ModalWrapper from "./ModalWrapper";
import { investmentDetails, mainPackage } from "@/lib/data/proposal-data";

interface InvestmentDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function formatCurrency(value: number): string {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

export default function InvestmentDetailsModal({
  isOpen,
  onClose,
}: InvestmentDetailsModalProps) {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      title="Detalhamento do Investimento"
      subtitle="Veja o valor individual de cada componente da solução"
    >
      <div className="space-y-8 max-w-3xl mx-auto">
        {/* Tabela de Implementação */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <div className="w-1 h-6 bg-[#00FF94] rounded-full" />
            Implementação e Desenvolvimento
          </h3>

          <div className="rounded-xl border border-white/10 overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-[1fr_auto] bg-[#00FF94]/10 border-b border-[#00FF94]/30">
              <div className="px-4 py-3 text-sm font-semibold text-[#00FF94]">
                Item
              </div>
              <div className="px-4 py-3 text-sm font-semibold text-[#00FF94] text-right">
                Valor
              </div>
            </div>

            {/* Rows */}
            {investmentDetails.implementation.map((item, index) => (
              <motion.div
                key={item.item}
                className="grid grid-cols-[1fr_auto] border-b border-white/5 hover:bg-white/5 transition-colors"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + index * 0.05 }}
              >
                <div className="px-4 py-3 text-white/80 text-sm flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00FF94] flex-shrink-0" />
                  {item.item}
                </div>
                <div className="px-4 py-3 text-white font-medium text-sm text-right">
                  {formatCurrency(item.value)}
                </div>
              </motion.div>
            ))}

            {/* Total Row */}
            <motion.div
              className="grid grid-cols-[1fr_auto] bg-[#00FF94]/5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="px-4 py-4 text-white font-bold text-sm">
                TOTAL IMPLEMENTAÇÃO
              </div>
              <div className="px-4 py-4 text-[#00FF94] font-bold text-lg text-right">
                {formatCurrency(investmentDetails.totalIndividual)}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Destaque de Economia */}
        <motion.div
          className="rounded-2xl border-2 border-[#00FF94]/40 bg-gradient-to-br from-[#00FF94]/10 to-[#00E5FF]/5 p-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-[#00FF94]/20">
                <TrendingDown className="w-8 h-8 text-[#00FF94]" />
              </div>
              <div>
                <p className="text-white/60 text-sm mb-1">Valor individual dos componentes</p>
                <p className="text-2xl font-bold text-white line-through decoration-white/40">
                  {formatCurrency(investmentDetails.totalIndividual)}
                </p>
              </div>
            </div>

            <div className="hidden md:block w-px h-16 bg-white/10" />

            <div className="text-center md:text-right">
              <p className="text-[#00FF94] text-sm font-semibold mb-1">Solução Completa</p>
              <p className="text-4xl font-bold text-[#00FF94]">
                {formatCurrency(investmentDetails.totalPackage)}
              </p>
              <span className="inline-flex items-center gap-1 mt-2 px-3 py-1 rounded-full bg-[#00FF94]/20 text-[#00FF94] text-sm font-semibold">
                Economia de {formatCurrency(investmentDetails.savings)}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Nota */}
        <motion.p
          className="text-center text-white/40 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Valores de implementação única. A recorrência mensal de {mainPackage.monthly} inclui todos os custos operacionais.
        </motion.p>
      </div>
    </ModalWrapper>
  );
}
