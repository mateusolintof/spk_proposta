"use client";

import { motion } from "framer-motion";
import {
  Bot,
  LayoutDashboard,
  Check,
  MessageSquareMore,
  CheckCircle,
  Cpu,
  Database,
  Server,
  Wrench,
  Users,
} from "lucide-react";
import SlideShell from "@/components/ui/SlideShell";
import { mainPackage, deliverables } from "@/lib/data/proposal-data";

const deliverableIcons: Record<string, React.ReactNode> = {
  MessageSquareMore: <MessageSquareMore className="w-5 h-5" />,
  Bot: <Bot className="w-5 h-5" />,
  LayoutDashboard: <LayoutDashboard className="w-5 h-5" />,
};

export default function InvestimentoSlide() {
  return (
    <SlideShell
      eyebrow="Investimento"
      eyebrowColor="success"
      title="Investimento que se Paga Sozinho"
      subtitle="Valor fixo, independente do número de vendedores"
      align="center"
      background={
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00FF94]/5 via-transparent to-transparent pointer-events-none" />
      }
    >
      <div className="w-full space-y-6">
        {/* Card Principal de Investimento */}
        <motion.div
          className="relative rounded-2xl border-2 border-[#00FF94]/40 bg-[#00FF94]/5 p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start justify-between gap-4 mb-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#00FF94]/20">
                <LayoutDashboard className="w-6 h-6 text-[#00FF94]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{mainPackage.name}</h3>
                <p className="text-white/60 text-sm mt-1">{mainPackage.subtitle}</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold bg-[#00FF94] text-black">
              {mainPackage.badge}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="rounded-xl border border-white/10 bg-black/20 p-5 text-center">
              <p className="text-xs uppercase tracking-wider text-white/40 mb-2">Implementação</p>
              <span className="text-3xl font-bold text-white">{mainPackage.setup}</span>
              <p className="text-xs text-white/40 mt-2">Pagamento único</p>
            </div>
            <div className="rounded-xl border border-[#00FF94]/30 bg-[#00FF94]/10 p-5 text-center">
              <p className="text-xs uppercase tracking-wider text-white/40 mb-2">Recorrência Mensal</p>
              <span className="text-3xl font-bold text-[#00FF94]">{mainPackage.monthly}</span>
              <p className="text-xs text-white/40 mt-2">Tudo incluso</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {mainPackage.bullets.map((item) => (
              <div
                key={item}
                className="flex items-start gap-2 text-white/70 text-sm"
              >
                <Check className="w-4 h-4 text-[#00FF94] mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Destaque: Preço Fixo */}
        <motion.div
          className="bg-[#00E5FF]/10 border border-[#00E5FF]/30 rounded-2xl p-5 flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Users className="w-8 h-8 text-[#00E5FF]" />
          <div>
            <p className="text-white font-semibold">Preço fixo, independente do número de vendedores</p>
            <p className="text-white/60 text-sm">Pode ter 8, 15 ou 30 vendedores - o valor mensal não muda</p>
          </div>
        </motion.div>

        {/* Entregáveis */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-[#00E5FF] rounded-full" />
            <h3 className="text-lg font-semibold text-white">
              O Que Está Incluso
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {deliverables.map((item, index) => (
              <motion.div
                key={item.title}
                className="relative bg-white/5 border border-white/10 rounded-2xl p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.08 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 bg-[#00E5FF]/10 rounded-lg text-[#00E5FF]">
                    {deliverableIcons[item.iconName]}
                  </div>
                  <h4 className="text-sm font-semibold text-white">
                    {item.title}
                  </h4>
                </div>
                <ul className="space-y-1.5">
                  {item.items.map((subItem) => (
                    <li
                      key={subItem}
                      className="flex items-center gap-2 text-white/60 text-xs"
                    >
                      <Check className="w-3 h-3 text-[#00FF94]" />
                      <span>{subItem}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Transparência de Custos */}
        <motion.div
          className="rounded-2xl border border-[#00FF94]/30 bg-[#00FF94]/5 p-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle className="w-5 h-5 text-[#00FF94]" />
            <p className="text-sm uppercase tracking-wider text-[#00FF94] font-semibold">
              Tudo isso está incluso no valor mensal
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { icon: Cpu, text: "Inteligência Artificial" },
              { icon: Database, text: "Banco de Dados" },
              { icon: Server, text: "Servidores" },
              { icon: Wrench, text: "Suporte Técnico" },
              { icon: Bot, text: "Melhorias Contínuas" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-black/20 rounded-lg p-3"
              >
                <item.icon className="w-4 h-4 text-[#00FF94]" />
                <span className="text-xs text-white/70">{item.text}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-white/40 mt-4 text-center">
            Você não precisa se preocupar com nada técnico - cuidamos de tudo para você.
          </p>
        </motion.div>
      </div>
    </SlideShell>
  );
}
