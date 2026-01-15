import {
  MessageSquareMore,
  Bot,
  Cpu,
  LayoutDashboard,
  Handshake,
  Code,
  CheckCircle,
  Rocket,
  Zap,
  Clock,
  TrendingUp,
  Users,
  Shield,
  HelpCircle,
  Lock,
  MessageSquare,
  Link2,
  DollarSign,
  Eye,
  Target,
  BarChart3,
  Bell,
} from "lucide-react";
import type { PilarType } from "@/types/modal";

// =============================================================================
// PILAR DATA (4 Pilares da Solução SPK)
// =============================================================================

export interface PilarDataType {
  name: string;
  fullName: string;
  description: string;
  iconName: string;
  color: string;
  benefits: string[];
}

export const pilarData: Record<PilarType, PilarDataType> = {
  atendimento: {
    name: "Central de Atendimento",
    fullName: "Painel Inteligente para Vendedores",
    description:
      "Uma central profissional onde toda sua equipe trabalha. Todas as conversas em um só lugar, com histórico completo do cliente, contexto instantâneo e distribuição automática de leads.",
    iconName: "MessageSquareMore",
    color: "#00E5FF",
    benefits: [
      "Todas as conversas em um só lugar - nenhum lead se perde",
      "Histórico completo do cliente - contexto instantâneo",
      "Distribuição automática - leads divididos de forma justa",
      "Perfil do cliente na lateral - informações sempre à mão",
      "Vendedor com contexto total - atende melhor, vende mais",
    ],
  },
  agente: {
    name: "Assistente 24/7",
    fullName: "Agente de IA - Seu Vendedor Digital",
    description:
      "Um assistente inteligente que atende seus leads automaticamente, 24 horas por dia. Qualifica, coleta informações e só passa para o vendedor quando o cliente está pronto para comprar.",
    iconName: "Bot",
    color: "#00FF94",
    benefits: [
      "Atende em segundos - não perde mais leads por demora",
      "Funciona 24 horas - leads noturnos e de fim de semana atendidos",
      "Qualifica automaticamente - vendedor recebe lead pronto",
      "Pesquisa CNPJ sozinho - valida dados da empresa",
      "Conversa natural - não parece robô, cliente não percebe",
    ],
  },
  automacoes: {
    name: "O Espião Inteligente",
    fullName: "IA Capturando Dados Estratégicos",
    description:
      "Inteligência artificial analisando todas as conversas em tempo real. Captura dados, classifica leads, identifica padrões e gera alertas - transforma conversas em dados estratégicos automaticamente.",
    iconName: "Cpu",
    color: "#FFD700",
    benefits: [
      "IA captura dados automaticamente - base sempre atualizada",
      "Classifica leads por temperatura - quente, morno, frio",
      "Gera resumos inteligentes - entenda em segundos",
      "Detecta oportunidades - alerta antes que esfrie",
      "Dados estratégicos sem esforço - IA trabalha em silêncio",
    ],
  },
  dashboard: {
    name: "Painel do Gestor",
    fullName: "Dashboard com Inteligência Artificial",
    description:
      "Tudo que você precisa saber sobre sua operação, com insights gerados por IA. Veja quem está vendendo, onde estão os gargalos e receba alertas estratégicos - decisões baseadas em dados, não em achismos.",
    iconName: "LayoutDashboard",
    color: "#FF6B6B",
    benefits: [
      "Visão completa da operação - dados em tempo real",
      "Insights gerados por IA - tendências e oportunidades",
      "Ranking de vendedores - performance individual clara",
      "Alertas inteligentes - IA avisa quando precisa de ação",
      "Relatório diário no WhatsApp - resumo estratégico automático",
    ],
  },
};

// Icon mapping for client-side rendering
export const pilarIcons = {
  MessageSquareMore,
  Bot,
  Cpu,
  LayoutDashboard,
};

// =============================================================================
// PRICING DATA (Investimento SPK)
// =============================================================================

export interface Plan {
  name: string;
  subtitle: string;
  setup: string;
  monthly: string;
  duration?: string;
  bullets: string[];
  badge?: string;
  featured?: boolean;
  iconName: string;
  color: string;
}

export const mainPackage: Plan = {
  name: "Painel de Atendimento + Dashboard Gerencial",
  subtitle: "Controle total da operação com Agentes de IA e Automações",
  setup: "R$ 20.000,00",
  monthly: "R$ 2.500,00",
  bullets: [
    "Painel de Atendimento para Vendedores",
    "Agente de IA para Atendimento 24/7",
    "Automações Inteligentes (captura de dados)",
    "Dashboard + CRM Gerencial",
    "Relatório diário no WhatsApp",
    "Suporte e manutenção inclusos",
  ],
  badge: "Solução Completa",
  featured: true,
  iconName: "LayoutDashboard",
  color: "#00FF94",
};

export const additionalPackages: Plan[] = [];

export interface Deliverable {
  iconName: string;
  title: string;
  items: string[];
}

export const deliverables: Deliverable[] = [
  {
    iconName: "MessageSquareMore",
    title: "Central de Atendimento",
    items: [
      "Inbox unificado para todos vendedores",
      "Histórico completo por cliente",
      "Distribuição automática de leads",
    ],
  },
  {
    iconName: "Bot",
    title: "Agente de IA 24/7",
    items: [
      "Qualificação automática de leads",
      "Atendimento instantâneo",
      "Pesquisa de CNPJ integrada",
    ],
  },
  {
    iconName: "LayoutDashboard",
    title: "Dashboard + CRM",
    items: [
      "Visão executiva da operação",
      "Ranking de vendedores",
      "Chat com IA para análises",
    ],
  },
];

export const deliverableIcons = {
  MessageSquareMore,
  Bot,
  LayoutDashboard,
};

// =============================================================================
// FAQ DATA (Perguntas Frequentes SPK)
// =============================================================================

export interface FAQItem {
  iconName: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    iconName: "DollarSign",
    question: "O que está incluso no valor mensal de R$ 2.500?",
    answer:
      "Tudo que você precisa para operar: servidores, banco de dados, manutenção, atualizações de segurança, suporte técnico e melhorias contínuas. Você não precisa se preocupar com nada técnico - cuidamos de tudo.",
  },
  {
    iconName: "Clock",
    question: "Em quanto tempo a solução fica pronta?",
    answer:
      "O prazo típico é de 6 a 8 semanas para entrega completa. Trabalhamos em fases: primeiro configuramos a central de atendimento, depois ativamos o agente de IA, em seguida as automações, e por último o dashboard de gestão. Você já começa a usar desde a primeira fase.",
  },
  {
    iconName: "Shield",
    question: "Meus dados e conversas estão seguros?",
    answer:
      "Totalmente. A solução roda em servidor próprio, seus dados não são compartilhados com terceiros. Cada vendedor só vê suas próprias conversas, o gestor vê tudo. Temos backups automáticos e logs de auditoria para total segurança.",
  },
  {
    iconName: "Users",
    question: "Funciona para quantos vendedores?",
    answer:
      "O preço é fixo independente do número de vendedores. Pode ter 8, 15 ou 30 vendedores - o valor mensal não muda. A solução escala com você sem custos adicionais por usuário.",
  },
  {
    iconName: "Bot",
    question: "O agente de IA substitui meus vendedores?",
    answer:
      "Não, ele ajuda seus vendedores. O agente faz o trabalho inicial de qualificação - atende, coleta informações, identifica se o lead é bom - e só então passa para o vendedor humano. Seus vendedores focam em vender, não em responder perguntas básicas.",
  },
  {
    iconName: "DollarSign",
    question: "Os custos da API oficial do WhatsApp estão inclusos?",
    answer:
      "Não, os custos da API oficial do WhatsApp (Meta) são cobrados separadamente e pagos diretamente à Meta. O valor varia conforme o volume de conversas e tipo de mensagem. Podemos ajudar a estimar esse custo com base no seu volume atual.",
  },
];

export const faqIcons = {
  DollarSign,
  Clock,
  Shield,
  Users,
  Bot,
};

// =============================================================================
// PHASES DATA (Cronograma de Implementação)
// =============================================================================

export interface Phase {
  phase: number;
  title: string;
  desc: string;
  iconName: string;
}

export const phases: Phase[] = [
  {
    phase: 1,
    title: "Fundação",
    desc: "Configuração da central de atendimento, integração com WhatsApp e cadastro da equipe de vendas",
    iconName: "Handshake",
  },
  {
    phase: 2,
    title: "Inteligência",
    desc: "Ativação do agente de IA para qualificação e configuração das automações em background",
    iconName: "Bot",
  },
  {
    phase: 3,
    title: "Gestão",
    desc: "Implementação do dashboard executivo, CRM e sistema de relatórios automáticos",
    iconName: "LayoutDashboard",
  },
  {
    phase: 4,
    title: "Refinamento",
    desc: "Ajustes finos, treinamento da equipe e acompanhamento das primeiras semanas de operação",
    iconName: "Rocket",
  },
];

export const phaseIcons = {
  Handshake,
  Bot,
  LayoutDashboard,
  Rocket,
};

// =============================================================================
// BENEFITS DATA (Resultados Esperados)
// =============================================================================

export interface Benefit {
  iconName: string;
  title: string;
  desc: string;
  color: string;
}

export const benefits: Benefit[] = [
  {
    iconName: "BarChart3",
    title: "Dados Estratégicos em Tempo Real",
    desc: "Dashboard com insights gerados por IA. Veja tendências, identifique gargalos e tome decisões baseadas em dados.",
    color: "#00E5FF",
  },
  {
    iconName: "Eye",
    title: "Visibilidade Total da Operação",
    desc: "Saiba exatamente o que acontece. Quem está atendendo, quem está convertendo, onde estão as oportunidades.",
    color: "#00FF94",
  },
  {
    iconName: "Target",
    title: "100% dos Leads Atendidos",
    desc: "Nenhum lead de tráfego pago fica sem resposta. Agente de IA atende instantaneamente, 24 horas.",
    color: "#00E5FF",
  },
  {
    iconName: "Users",
    title: "Vendedores com Contexto Total",
    desc: "Painel inteligente com histórico completo. Vendedor atende melhor, cliente não repete informações.",
    color: "#00FF94",
  },
  {
    iconName: "Bell",
    title: "IA Gerando Alertas Estratégicos",
    desc: "Inteligência artificial monitora e avisa: lead esfriando, oportunidade detectada, ação necessária.",
    color: "#FFD700",
  },
];

export const benefitIcons = {
  Target,
  Eye,
  Users,
  BarChart3,
  Bell,
};

// =============================================================================
// DIAGNÓSTICO DATA (Dores da SPK)
// =============================================================================

export interface PainPoint {
  iconName: string;
  title: string;
  subtitle: string;
  problems: string[];
  color: string;
}

export const painPoints: PainPoint[] = [
  {
    iconName: "Target",
    title: "Leads Perdidos",
    subtitle: "Tráfego pago desperdiçado",
    problems: [
      "300 leads/mês sem saber quantos são atendidos",
      "Leads noturnos e de fim de semana sem resposta",
      "Não sabe quem virou venda e quem foi perdido",
    ],
    color: "#FF6B6B",
  },
  {
    iconName: "Eye",
    title: "Operação às Cegas",
    subtitle: "Sem visibilidade do time",
    problems: [
      "Não sabe quando vendedores entram em contato",
      "Impossível medir tempo de resposta",
      "Sem dados de performance individual",
    ],
    color: "#FFD700",
  },
  {
    iconName: "Users",
    title: "Atendimento Repetitivo",
    subtitle: "Cliente frustrado",
    problems: [
      "Cliente repete informações toda vez",
      "Vendedor não tem histórico de conversas",
      "Sem contexto quando outro vendedor assume",
    ],
    color: "#00E5FF",
  },
  {
    iconName: "BarChart3",
    title: "Gestão sem Dados",
    subtitle: "Decisões no achismo",
    problems: [
      "Sem métricas reais da operação",
      "Não consegue identificar onde perde vendas",
      "Relatórios manuais, demorados e imprecisos",
    ],
    color: "#00FF94",
  },
];

export const painPointIcons = {
  Target,
  Eye,
  Users,
  BarChart3,
};

// =============================================================================
// CURRENT OPERATION DATA
// =============================================================================

export const currentOperationData = {
  vendedores: 8,
  conversasMes: "~5.000",
  leadsTrafego: 300,
  problema: "Falta de visibilidade e controle",
};

// =============================================================================
// INVESTMENT DETAILS DATA (Detalhamento do Investimento)
// =============================================================================

export interface InvestmentItem {
  item: string;
  value: number;
}

export interface InvestmentDetails {
  implementation: InvestmentItem[];
  totalIndividual: number;
  totalPackage: number;
  savings: number;
}

export const investmentDetails: InvestmentDetails = {
  implementation: [
    { item: "Painel de Atendimento (configuração completa)", value: 8000 },
    { item: "Agente de IA SDR (desenvolvimento + treinamento)", value: 10000 },
    { item: "Dashboard de Gestão + CRM (desenvolvimento)", value: 12000 },
    { item: "Automações inteligentes (desenvolvimento)", value: 5000 },
  ],
  totalIndividual: 35000,
  totalPackage: 20000,
  savings: 15000,
};

// =============================================================================
// NEXT STEPS DATA (Próximos Passos)
// =============================================================================

export interface NextStep {
  step: number;
  title: string;
  description: string;
  iconName: string;
}

export const nextSteps: NextStep[] = [
  {
    step: 1,
    title: "Reunião de Alinhamento",
    description: "Validamos juntos o escopo e tiramos todas as dúvidas sobre a solução",
    iconName: "Handshake",
  },
  {
    step: 2,
    title: "Levantamento Técnico",
    description: "Mapeamos as integrações necessárias e requisitos específicos",
    iconName: "Code",
  },
  {
    step: 3,
    title: "Contrato e Kickoff",
    description: "Formalizamos a parceria e iniciamos o projeto",
    iconName: "Rocket",
  },
];

export const nextStepIcons = {
  Handshake,
  Code,
  Rocket,
};
