"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Link2,
  LayoutDashboard,
  GraduationCap,
  Check,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import SlideShell from "@/components/ui/SlideShell";

type Plan = {
  name: string;
  subtitle: string;
  setup: string;
  monthly: string;
  bullets: string[];
  badge?: string;
  featured?: boolean;
};

// 5 frentes de agentes
const agentPlans: Plan[] = [
  {
    name: "Fila + SDR",
    subtitle: "Orquestrador de atendimento com qualificação 24/7",
    setup: "Sob consulta",
    monthly: "Sob consulta",
    bullets: [
      "Fila inteligente com rotação automática",
      "SLA controlado (< 3 min)",
      "Qualificação e handoff com contexto",
    ],
    badge: "Core",
    featured: true,
  },
  {
    name: "Closer Assist",
    subtitle: "Copiloto do vendedor para fechamento",
    setup: "Sob consulta",
    monthly: "Sob consulta",
    bullets: [
      "Contexto e histórico do cliente",
      "Sugestões de abordagem",
      "Alertas de oportunidade (cross/up-sell)",
    ],
  },
  {
    name: "Agente Eventos",
    subtitle: "Follow-up automatizado para feiras e eventos",
    setup: "Sob consulta",
    monthly: "Sob consulta",
    bullets: [
      "Follow-up em 24h (não 30 dias)",
      "Cadência automatizada",
      "Métricas de ROI por evento",
    ],
  },
  {
    name: "Agente Cobrança",
    subtitle: "Régua de cobrança com governança WhatsApp",
    setup: "Sob consulta",
    monthly: "Sob consulta",
    bullets: [
      "Régua pré e pós-vencimento",
      "Governança e limites WhatsApp",
      "Human-in-loop para negociações",
    ],
  },
  {
    name: "Recompra & Copiloto",
    subtitle: "Reativação de clientes + assistente interno",
    setup: "Sob consulta",
    monthly: "Sob consulta",
    bullets: [
      "Campanhas de reativação",
      "Resumo de histórico para vendedor",
      "Alertas de risco de churn",
    ],
  },
];

const fullPlan: Plan = {
  name: "Pacote Completo",
  subtitle: "Todas as 5 frentes + CRM, Dashboard e integrações",
  setup: "Sob consulta",
  monthly: "Sob consulta",
  bullets: [
    "Orquestrador + 5 agentes especializados",
    "CRM + Dashboard executivo",
    "Integrações (Fortix, WhatsApp API, ERP)",
    "Governança WhatsApp incluída",
  ],
  badge: "Recomendado",
  featured: true,
};

const deliverables = [
  {
    icon: <Bot className="w-6 h-6" />,
    title: "5 Frentes de Agentes",
    items: [
      "Fila + SDR (Qualificação)",
      "Closer Assist (Vendedor)",
      "Eventos (Follow-up)",
      "Cobrança (Régua)",
      "Recompra & Copiloto",
    ],
  },
  {
    icon: <Link2 className="w-6 h-6" />,
    title: "Integrações",
    items: [
      "Fortix (sistema atual)",
      "WhatsApp Business API",
      "ERP e base de dados",
      "Notificações em tempo real",
    ],
  },
  {
    icon: <LayoutDashboard className="w-6 h-6" />,
    title: "CRM & Dashboard",
    items: [
      "Visão de funil e SLA",
      "Distribuição por vendedor",
      "KPIs de eventos e cobrança",
    ],
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Treinamento & Suporte",
    items: [
      "Suporte contínuo",
      "30 dias de acompanhamento",
      "Ajustes e otimizações",
    ],
  },
];

function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  const isFeatured = plan.featured;
  return (
    <motion.div
      className={`relative rounded-2xl border bg-white/5 p-5 flex flex-col gap-3 h-full ${
        isFeatured
          ? "border-[#00E5FF]/40 bg-[#00E5FF]/5"
          : "border-white/10"
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="space-y-1">
          <h3 className="text-base font-semibold text-white">{plan.name}</h3>
          <p className="text-white/60 text-xs leading-relaxed">
            {plan.subtitle}
          </p>
        </div>
        {plan.badge ? (
          <span
            className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ${
              isFeatured ? "bg-[#00E5FF] text-black" : "bg-white/10 text-white"
            }`}
          >
            {plan.badge}
          </span>
        ) : null}
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-lg border border-white/10 bg-black/20 p-2.5">
          <p className="text-[10px] uppercase tracking-wider text-white/40">
            Setup
          </p>
          <span className="text-sm font-semibold text-white">
            {plan.setup}
          </span>
        </div>
        <div className="rounded-lg border border-[#00FF94]/30 bg-[#00FF94]/10 p-2.5">
          <p className="text-[10px] uppercase tracking-wider text-white/40">
            Mensal
          </p>
          <span className="text-sm font-semibold text-[#00FF94]">
            {plan.monthly}
          </span>
        </div>
      </div>

      <div className="pt-2 border-t border-white/10 space-y-1.5">
        {plan.bullets.map((item) => (
          <div
            key={item}
            className="flex items-start gap-2 text-white/70 text-xs leading-relaxed"
          >
            <Check className="w-3 h-3 text-[#00FF94] mt-0.5 flex-shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function InvestimentoSlide() {
  return (
    <SlideShell
      eyebrow="Investimento"
      eyebrowColor="success"
      title="Investimento"
      subtitle="Valores sob consulta — personalizados após diagnóstico"
      align="center"
      background={
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00FF94]/5 via-transparent to-transparent pointer-events-none" />
      }
    >
      <div className="w-full space-y-6">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-6 bg-[#00E5FF] rounded-full" />
              <h3 className="text-lg font-semibold text-white">
                Frentes de Agentes
              </h3>
            </div>
            <p className="text-xs text-white/40 uppercase tracking-[0.2em]">
              Escolha modular
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
            {agentPlans.map((plan, index) => (
              <PlanCard key={plan.name} plan={plan} index={index} />
            ))}
          </div>
        </div>

        <motion.div
          className="relative rounded-2xl border border-[#00FF94]/40 bg-white/5 p-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#00FF94]/60 via-[#00E5FF]/60 to-[#00FF94]/60" />

          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="inline-flex items-center gap-1 rounded-full bg-[#00FF94] px-3 py-1 text-xs font-semibold text-black">
              <Sparkles className="w-3 h-3" />
              {fullPlan.badge}
            </span>
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">
              Pacote completo
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-5 items-start">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white">
                {fullPlan.name}
              </h3>
              <p className="text-white/60 text-body leading-relaxed">
                {fullPlan.subtitle}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                {fullPlan.bullets.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 text-white/70 text-body"
                  >
                    <Check className="w-4 h-4 text-[#00FF94] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div className="rounded-xl border border-white/10 bg-black/30 p-4 text-center">
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-1">
                  Setup
                </p>
                <span className="text-2xl font-semibold text-white">
                  {fullPlan.setup}
                </span>
              </div>

              <div className="rounded-xl border border-[#00FF94]/30 bg-[#00FF94]/10 p-4 text-center">
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-1">
                  Mensalidade
                </p>
                <span className="text-2xl font-semibold text-[#00FF94]">
                  {fullPlan.monthly}
                </span>
              </div>

              <div className="rounded-xl border border-[#00E5FF]/30 bg-[#00E5FF]/10 px-4 py-3 text-center">
                <div className="flex items-center justify-center gap-2">
                  <MessageCircle className="w-4 h-4 text-[#00E5FF]" />
                  <p className="text-[#00E5FF] text-body font-semibold">
                    Solicite proposta personalizada
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="pt-2">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1.5 h-6 bg-[#00E5FF] rounded-full" />
            <h3 className="text-lg font-semibold text-white">
              Entregáveis Inclusos
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-full">
            {deliverables.map((item, index) => (
              <motion.div
                key={item.title}
                className="relative bg-white/5 border border-white/10 rounded-2xl p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.08 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 bg-[#00E5FF]/10 rounded-lg text-[#00E5FF]">
                    {item.icon}
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
      </div>
    </SlideShell>
  );
}
