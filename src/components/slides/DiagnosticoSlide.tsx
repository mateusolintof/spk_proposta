"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, TrendingDown, Users, Calendar, Receipt } from "lucide-react";
import SlideShell from "@/components/ui/SlideShell";

export default function DiagnosticoSlide() {
  return (
    <SlideShell
      eyebrow="Diagnóstico & Cenário"
      eyebrowColor="warning"
      title="Onde a Receita Está Escapando"
      subtitle="Diagnóstico da operação de televendas com 18 vendedores e 12-15 mil mensagens/mês."
      size="compact"
      background={
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent pointer-events-none" />
      }
    >
      <div className="w-full space-y-10">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.3em] text-amber-300/70">
              01
            </span>
            <h3 className="text-lg font-semibold text-white">
              Gargalos Identificados
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-6">
            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-amber-300/80">
                  Problema Principal
                </p>
                <p className="mt-2 text-body text-white/60">
                  Sem fila inteligente, o lead fica preso se o vendedor escolhido não atende.
                  Não há rotação automática nem SLA controlado.
                </p>
                <div className="mt-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-white/5 p-2 text-amber-300">
                      <Users className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-body font-semibold text-white">
                        18 vendedores, distribuição desigual
                      </p>
                      <p className="text-xs text-white/50">
                        Alguns sobrecarregados, outros ociosos
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-white/5 p-2 text-amber-300">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-body font-semibold text-white">
                        Lead preso em vendedor ocupado
                      </p>
                      <p className="text-xs text-white/50">
                        Sem rotação, o cliente espera ou desiste
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-white/5 p-2 text-amber-300">
                      <AlertTriangle className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-body font-semibold text-white">
                        SLA sem controle
                      </p>
                      <p className="text-xs text-white/50">
                        Tempo de primeira resposta indefinido
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Sistema Atual (Fortix)
                </p>
                <p className="mt-2 text-body text-white/60">
                  O cliente escolhe o vendedor em uma lista. Se esse vendedor não responder,
                  o lead fica parado — sem fallback automático.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Onde a receita se perde
                </p>
                <div className="mt-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-amber-500/10 p-2 text-amber-400">
                      <TrendingDown className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-body font-semibold text-white">
                        Lead sem resposta em 5+ min
                      </p>
                      <p className="text-xs text-white/50">
                        Esfria e busca concorrente
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-amber-500/10 p-2 text-amber-400">
                      <Calendar className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-body font-semibold text-white">
                        Eventos: follow-up leva ~30 dias
                      </p>
                      <p className="text-xs text-white/50">
                        ~1000 leads por evento desperdiçados
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-amber-500/10 p-2 text-amber-400">
                      <Receipt className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-body font-semibold text-white">
                        Cobrança: risco de perda de número
                      </p>
                      <p className="text-xs text-white/50">
                        ~1000 mensagens/dia sem governança
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Volume mensal
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-body text-white/70">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                    12-15k mensagens/mês
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                    18 vendedores
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.3em] text-amber-300/70">
              02
            </span>
            <h3 className="text-lg font-semibold text-white">
              O que está quebrando o processo (e fazendo receita escapar)
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6">
            {/* Left: 3 Problem Cards */}
            <div className="space-y-4">
              <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5">
                <p className="text-amber-300 text-body font-semibold mb-2">
                  Lead trava por falta de fallback
                </p>
                <p className="text-white/60 text-body">
                  Quando o cliente escolhe um vendedor e ele não responde,
                  a conversa fica "congelada" — e a oportunidade esfria.
                </p>
              </div>

              <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5">
                <p className="text-amber-300 text-body font-semibold mb-2">
                  Distribuição desigual = gargalo + ociosidade
                </p>
                <p className="text-white/60 text-body">
                  Alguns vendedores ficam sobrecarregados enquanto outros ficam
                  subutilizados. Resultado: perde-se venda onde era para ganhar velocidade.
                </p>
              </div>

              <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5">
                <p className="text-amber-300 text-body font-semibold mb-2">
                  Sem regras, não existe previsibilidade
                </p>
                <p className="text-white/60 text-body">
                  Sem prioridade, sem fila e sem cadência, a performance vira
                  "sorte do atendimento" — não um processo controlável.
                </p>
              </div>
            </div>

            {/* Right: O que muda + Custo */}
            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-3">
                  O que muda com o novo modelo
                </p>
                <ul className="space-y-2 text-body text-white/60">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span><strong className="text-white/80">Nenhum lead fica parado:</strong> se não houver resposta, o sistema encaminha para o próximo disponível</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span><strong className="text-white/80">Distribuição equilibrada:</strong> o volume deixa de concentrar em poucos vendedores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span><strong className="text-white/80">Follow-up automático:</strong> eventos e recompra deixam de depender de esforço manual</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span><strong className="text-white/80">Gestão do funil:</strong> dá para enxergar onde travou, quem está sobrecarregado e o que está virando pedido</span>
                  </li>
                </ul>
              </div>

              <motion.div
                className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-red-400 text-xs uppercase tracking-wider font-semibold mb-2">
                  CUSTO DE NÃO AGIR
                </p>
                <ul className="space-y-1.5 text-body text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Leads ficam presos e esfriam sem resposta</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Follow-ups demoram semanas (eventos e recompra viram lista fria)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Cobrança em alto volume desgasta o canal e reduz capacidade de contato</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-white/80 text-body leading-relaxed">
            <strong className="text-[#00FF94]">Diagnóstico:</strong> o gargalo
            é falta de orquestração e governança.{" "}
            <strong className="text-[#00FF94]">
              A fila inteligente + agentes especializados
            </strong>{" "}
            eliminam o problema de lead preso, garantem controle operacional e protegem a operação de cobrança.
          </p>
        </motion.div>
      </div>
    </SlideShell>
  );
}
