"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Shield,
  Clock,
  Users,
  DollarSign,
  Bot,
} from "lucide-react";
import SlideShell from "@/components/ui/SlideShell";
import { faqItems } from "@/lib/data/proposal-data";

const iconMap: Record<string, React.ReactNode> = {
  DollarSign: <DollarSign className="w-5 h-5" />,
  Clock: <Clock className="w-5 h-5" />,
  Shield: <Shield className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  Bot: <Bot className="w-5 h-5" />,
};

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
      subtitle="Tire suas dúvidas sobre custos, prazo, segurança e funcionamento."
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
                {iconMap[item.iconName]}
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
