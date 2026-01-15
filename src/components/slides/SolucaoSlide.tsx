"use client";

import { motion } from "framer-motion";
import {
  MessageSquareMore,
  Bot,
  Cpu,
  LayoutDashboard,
  BrainCircuit,
} from "lucide-react";
import SlideShell from "@/components/ui/SlideShell";
import type { ModalKind, PilarType } from "@/types/modal";

const ORBIT_RADIUS = "clamp(130px, 20vw, 210px)";
const PILAR_ANGLES = [0, 90, 180, 270]; // 4 pilares em 360°

const pilares: { id: PilarType; name: string; icon: React.ReactNode; color: string }[] = [
  {
    id: "atendimento",
    name: "Central de Atendimento",
    icon: <MessageSquareMore className="w-5 h-5" />,
    color: "#00E5FF",
  },
  {
    id: "agente",
    name: "Assistente 24/7",
    icon: <Bot className="w-5 h-5" />,
    color: "#00FF94",
  },
  {
    id: "automacoes",
    name: "O Espião Inteligente",
    icon: <Cpu className="w-5 h-5" />,
    color: "#FFD700",
  },
  {
    id: "dashboard",
    name: "Painel do Gestor",
    icon: <LayoutDashboard className="w-5 h-5" />,
    color: "#FF6B6B",
  },
];

const features = [
  {
    title: "Tudo em Um Só Lugar",
    desc: "Todas as conversas centralizadas, histórico completo do cliente e distribuição automática de leads entre vendedores."
  },
  {
    title: "Atendimento que Nunca Para",
    desc: "Agente de IA qualifica seus 300 leads mensais automaticamente, 24 horas por dia, inclusive fins de semana."
  },
  {
    title: "Dados sem Esforço",
    desc: "Sistema captura informações automaticamente das conversas. CRM sempre atualizado sem depender do vendedor."
  },
];

interface SolucaoSlideProps {
  onOpenModal?: (modal: ModalKind) => void;
}

export default function SolucaoSlide({ onOpenModal }: SolucaoSlideProps) {
  return (
    <SlideShell
      eyebrow="A Solução"
      eyebrowColor="success"
      title="4 Pilares que Trabalham Juntos por Você"
      subtitle="Um ecossistema integrado que transforma sua operação comercial"
      align="center"
      size="compact"
      background={
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00FF94]/5 via-transparent to-transparent pointer-events-none" />
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 w-full items-center">
        {/* Orbit Container */}
        <div className="relative w-[min(420px,50vh)] h-[min(420px,50vh)] flex items-center justify-center z-10 mx-auto">
          {/* Center Core */}
          <div className="absolute w-20 h-20 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 flex items-center justify-center shadow-[0_0_60px_rgba(0,255,148,0.15)]">
            <BrainCircuit
              className="w-9 h-9 animate-pulse"
              style={{ color: "#00FF94" }}
            />
          </div>

          {/* Orbit Rings */}
          <div className="absolute inset-0 border border-white/5 rounded-full motion-reduce:animate-none animate-[spin_30s_linear_infinite]" />
          <div className="absolute inset-12 border border-dashed border-white/10 rounded-full motion-reduce:animate-none animate-[spin_20s_linear_infinite_reverse]" />

          {/* Pilares (orbiting) */}
          <div className="absolute inset-0 motion-reduce:animate-none animate-[spin_50s_linear_infinite]">
            {pilares.map((pilar, index) => {
              const angle = PILAR_ANGLES[index] ?? 0;
              return (
                <div
                  key={pilar.id}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(${ORBIT_RADIUS})`,
                  }}
                >
                  <div style={{ transform: `rotate(-${angle}deg)` }}>
                    <div className="motion-reduce:animate-none animate-[spin_50s_linear_infinite_reverse]">
                      <motion.button
                        type="button"
                        onClick={() => onOpenModal?.({ type: "pilar", pilar: pilar.id })}
                        className="relative w-12 h-12 rounded-full bg-black/60 border border-white/20 transition-all flex items-center justify-center backdrop-blur-md group cursor-pointer"
                        style={{
                          borderColor: `${pilar.color}40`,
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + index * 0.08 }}
                        whileHover={{
                          scale: 1.15,
                          boxShadow: `0 0 20px ${pilar.color}60`,
                          borderColor: pilar.color,
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {/* Pulse ring */}
                        <span
                          className="absolute inset-0 rounded-full border animate-ping opacity-30"
                          style={{ borderColor: `${pilar.color}50` }}
                        />
                        <div
                          className="transition-colors"
                          style={{ color: pilar.color }}
                        >
                          {pilar.icon}
                        </div>
                        <span className="absolute -bottom-9 text-[10px] font-medium text-white/60 group-hover:text-white whitespace-nowrap text-center leading-tight transition-colors">
                          {pilar.name}
                        </span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Feature Cards */}
        <div className="space-y-4 text-left w-full">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-[#00FF94]/30 transition-colors"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <p className="text-xs uppercase tracking-widest text-[#00FF94]/80">
                {feature.title}
              </p>
              <p className="text-white/70 mt-2 text-body leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}

          {/* CTA */}
          <motion.p
            className="text-xs text-white/40 text-center pt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Clique nos ícones para ver detalhes de cada pilar
          </motion.p>
        </div>
      </div>
    </SlideShell>
  );
}
