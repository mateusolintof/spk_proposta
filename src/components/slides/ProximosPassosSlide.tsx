"use client";

import { motion } from "framer-motion";
import { Handshake, Code, Rocket, ArrowRight, MessageCircle } from "lucide-react";
import SlideShell from "@/components/ui/SlideShell";
import { nextSteps } from "@/lib/data/proposal-data";

const iconMap: Record<string, React.ReactNode> = {
  Handshake: <Handshake className="w-6 h-6" />,
  Code: <Code className="w-6 h-6" />,
  Rocket: <Rocket className="w-6 h-6" />,
};

export default function ProximosPassosSlide() {
  return (
    <SlideShell
      eyebrow="Próximos Passos"
      eyebrowColor="success"
      title="Vamos Começar?"
      subtitle="O caminho para transformar sua operação comercial"
      align="center"
      background={
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00FF94]/10 via-[#02040A] to-[#02040A] pointer-events-none" />
      }
    >
      <div className="w-full max-w-4xl mx-auto space-y-8">
        {/* Timeline de Próximos Passos */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-1.5 h-6 bg-[#00FF94] rounded-full" />
            <h3 className="text-lg font-semibold text-white">
              Como Funciona
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {nextSteps.map((step, index) => (
              <motion.div
                key={step.step}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.1 }}
              >
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full hover:border-[#00FF94]/30 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#00FF94]/20 flex items-center justify-center text-[#00FF94] font-bold">
                      {step.step}
                    </div>
                    <div className="p-2 bg-[#00E5FF]/10 rounded-lg text-[#00E5FF]">
                      {iconMap[step.iconName]}
                    </div>
                  </div>
                  <h4 className="text-white font-semibold mb-2">{step.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow connector (hidden on last item and mobile) */}
                {index < nextSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-white/20" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Principal */}
        <motion.div
          className="bg-gradient-to-r from-[#00FF94]/10 to-[#00E5FF]/10 border border-[#00FF94]/30 rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-3">
            Pronto para Ter Controle Total da sua Operação?
          </h3>
          <p className="text-white/60 mb-6 max-w-2xl mx-auto">
            Agende uma conversa para tirar suas dúvidas e entender como a solução
            pode ser adaptada para a realidade da SPK Distribuidora.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#00FF94] to-[#00E5FF] rounded-full text-black font-semibold text-lg hover:scale-105 transition-transform cursor-pointer shadow-[0_0_30px_rgba(0,255,148,0.3)]"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0, 255, 148, 0.5)" }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-5 h-5" />
              <span>Falar no WhatsApp</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Mensagem Final */}
        <motion.p
          className="text-white/40 text-sm text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          Proposta válida por 30 dias. Condições especiais para fechamento até o final do mês.
        </motion.p>
      </div>
    </SlideShell>
  );
}
