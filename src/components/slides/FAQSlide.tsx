"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Shield,
  Zap,
  Clock,
  HelpCircle,
  Lock,
  MessageSquare,
} from "lucide-react";
import SlideShell from "@/components/ui/SlideShell";

interface FAQItem {
  icon: React.ReactNode;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    icon: <Zap className="w-5 h-5" />,
    question:
      "Como integra com o Fortix e WhatsApp API?",
    answer:
      "A integração é feita via API e webhooks, sem substituir o sistema atual. O orquestrador funciona como uma camada acima do Fortix, recebendo os leads e distribuindo inteligentemente entre os vendedores. A comunicação com o cliente continua pelo WhatsApp Business API, com governança de limites e qualidade.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    question: "Como evitamos perda de número/limite no WhatsApp?",
    answer:
      "A solução inclui governança de WhatsApp com: controle de volume de envio (não ultrapassa limites da Meta), opt-out respeitado automaticamente, múltiplos canais de fallback (SMS, e-mail), e templates aprovados. Também monitoramos a qualidade do número e alertamos sobre riscos antes que virem problemas.",
  },
  {
    icon: <Lock className="w-5 h-5" />,
    question: "Como fica LGPD e auditoria?",
    answer:
      "A solução é desenhada com boas práticas de privacidade: criptografia em trânsito e em repouso, controle de acesso por perfil, trilhas de auditoria completas e políticas de retenção configuráveis. No kick-off, alinhamos governança de dados (exportação, retenção, exclusão) conforme as políticas da Mercante.",
  },
  {
    icon: <HelpCircle className="w-5 h-5" />,
    question: "Quem aprova mensagens de cobrança?",
    answer:
      "A régua de cobrança tem human-in-loop configurável. Mensagens padrão (lembretes, vencimento) são automatizadas. Negociações de valor, parcelamentos especiais ou clientes sensíveis são escalados automaticamente para o financeiro ou gestor aprovar antes de enviar.",
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    question: "Preciso trocar o Fortix ou o sistema atual?",
    answer:
      "Não! O orquestrador funciona como uma camada acima do sistema atual. O Fortix continua sendo usado pela equipe, mas os leads são distribuídos de forma inteligente pelo orquestrador, que também alimenta o CRM próprio com visibilidade de funil, SLA e métricas que talvez o Fortix não ofereça hoje.",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    question: "Qual o prazo de implementação?",
    answer:
      "Em geral, 4 a 8 semanas dependendo da complexidade das integrações. Começamos com um piloto (Fila + SDR) com 1-2 vendedores, expandimos gradualmente e depois adicionamos as outras frentes (eventos, cobrança, recompra). Os primeiros ganhos de SLA aparecem nas primeiras semanas.",
  },
];

export default function FAQSlide() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SlideShell
      eyebrow="FAQ"
      eyebrowColor="default"
      title="Perguntas Frequentes"
      subtitle="Dúvidas sobre integração, governança, LGPD e implementação."
      align="center"
      size="compact"
    >
      <div className="max-w-3xl mx-auto space-y-3">
        {faqItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:border-[#00E5FF]/30 transition-colors"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-5 py-4 flex items-center gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] focus-visible:ring-inset"
              aria-expanded={openIndex === index}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                  openIndex === index
                    ? "bg-[#00E5FF] text-[#02040A]"
                    : "bg-[#00E5FF]/20 text-[#00E5FF]"
                }`}
              >
                {item.icon}
              </div>
              <span
                className={`flex-1 font-medium transition-colors text-body ${
                  openIndex === index ? "text-white" : "text-white/80"
                }`}
              >
                {item.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="shrink-0"
              >
                <ChevronDown
                  className={`w-5 h-5 transition-colors ${
                    openIndex === index ? "text-[#00E5FF]" : "text-white/40"
                  }`}
                />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-5 pb-4 pl-[4.5rem]">
                    <p className="text-white/60 text-body leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Additional help */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-6 text-center"
      >
        <p className="text-white/40 text-body">
          Ainda tem dúvidas?{" "}
          <span className="font-semibold text-[#00E5FF]">
            Estamos à disposição para esclarecer qualquer ponto.
          </span>
        </p>
      </motion.div>
    </SlideShell>
  );
}
