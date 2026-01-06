"use client";

import {
  ReactFlow,
  Background,
  useNodesState,
  useEdgesState,
  Handle,
  Position,
  MarkerType,
  Node,
  Edge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { motion, useReducedMotion } from "framer-motion";
import {
  MessageSquare,
  Bot,
  HelpCircle,
  CalendarCheck,
  Star,
  Phone,
  Clock,
  CheckCircle,
  XCircle,
  Calendar,
  Users,
  FileText,
  Send,
  AlertTriangle,
  ThumbsUp,
  BarChart3,
  GitBranch,
  Bell,
  Handshake,
  Shield,
  Receipt,
  RefreshCw,
  Search,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import { AgentType } from "@/types/modal";

// Icon map for dynamic icon rendering
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MessageSquare,
  Bot,
  HelpCircle,
  CalendarCheck,
  Star,
  Phone,
  Clock,
  CheckCircle,
  XCircle,
  Calendar,
  Users,
  FileText,
  Send,
  AlertTriangle,
  ThumbsUp,
  BarChart3,
  GitBranch,
  Bell,
  Handshake,
  Shield,
  Receipt,
  RefreshCw,
  Search,
  Lightbulb,
  TrendingUp,
};

// Variant styles for different node types
const variantStyles: Record<
  string,
  { border: string; iconBg: string; icon: string; title: string; desc: string }
> = {
  input: {
    border: "border-emerald-400/40",
    iconBg: "bg-emerald-400/15",
    icon: "text-emerald-300",
    title: "text-white",
    desc: "text-white/55",
  },
  primary: {
    border: "border-sky-400/40",
    iconBg: "bg-sky-400/15",
    icon: "text-sky-300",
    title: "text-white",
    desc: "text-white/55",
  },
  decision: {
    border: "border-amber-400/40",
    iconBg: "bg-amber-400/15",
    icon: "text-amber-300",
    title: "text-white",
    desc: "text-white/55",
  },
  output: {
    border: "border-violet-400/40",
    iconBg: "bg-violet-400/15",
    icon: "text-violet-300",
    title: "text-white",
    desc: "text-white/55",
  },
  success: {
    border: "border-emerald-400/50",
    iconBg: "bg-emerald-400/15",
    icon: "text-emerald-300",
    title: "text-white",
    desc: "text-white/55",
  },
  danger: {
    border: "border-rose-400/45",
    iconBg: "bg-rose-400/15",
    icon: "text-rose-300",
    title: "text-white",
    desc: "text-white/55",
  },
  default: {
    border: "border-white/20",
    iconBg: "bg-white/10",
    icon: "text-white/60",
    title: "text-white",
    desc: "text-white/50",
  },
};

interface CustomNodeData {
  label: string;
  description?: string;
  icon?: string;
  variant?: string;
}

// Custom Node Component with animations
function CustomNode({ data }: { data: CustomNodeData }) {
  const shouldReduceMotion = useReducedMotion();
  const variant = data.variant || "default";
  const styles = variantStyles[variant] || variantStyles.default;
  const Icon = data.icon ? iconMap[data.icon] : null;

  return (
    <motion.div
      initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`relative px-4 py-3 rounded-2xl border ${styles.border} bg-[#0b1220]/90 shadow-[0_18px_35px_-28px_rgba(0,0,0,0.9)] min-w-[180px] max-w-[220px] cursor-grab active:cursor-grabbing hover:border-white/30 transition-colors`}
    >
      <Handle
        type="target"
        position={Position.Left}
        className="!w-3 !h-3 !bg-white/40 !border-2 !border-white/70"
      />

      <div className="flex items-start gap-2">
        {Icon && (
          <div className={`p-1.5 rounded-lg ${styles.iconBg} flex-shrink-0`}>
            <Icon className={`w-4 h-4 ${styles.icon}`} />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <p className={`text-sm font-semibold ${styles.title} leading-tight`}>
            {data.label}
          </p>
          {data.description && (
            <p className={`text-xs mt-0.5 leading-tight ${styles.desc}`}>
              {data.description}
            </p>
          )}
        </div>
      </div>

      <Handle
        type="source"
        position={Position.Right}
        className="!w-3 !h-3 !bg-white/40 !border-2 !border-white/70"
      />
    </motion.div>
  );
}

const nodeTypes = { custom: CustomNode };

// Flow data for each agent type
const flowDataByAgent: Record<AgentType, { nodes: Node[]; edges: Edge[] }> = {
  fila_sdr: {
    nodes: [
      { id: "1", type: "custom", position: { x: 0, y: 100 }, data: { label: "Lead Chega", description: "WhatsApp / Site", icon: "MessageSquare", variant: "input" } },
      { id: "2", type: "custom", position: { x: 200, y: 100 }, data: { label: "Fila Inteligente", description: "Distribui por carga", icon: "GitBranch", variant: "primary" } },
      { id: "3", type: "custom", position: { x: 400, y: 0 }, data: { label: "Vendedor disponível?", description: "Verifica status", icon: "HelpCircle", variant: "decision" } },
      { id: "4", type: "custom", position: { x: 400, y: 200 }, data: { label: "Agente SDR", description: "Qualifica 24/7", icon: "Bot", variant: "primary" } },
      { id: "5", type: "custom", position: { x: 600, y: 0 }, data: { label: "Atribui vendedor", description: "Com contexto", icon: "Users", variant: "success" } },
      { id: "6", type: "custom", position: { x: 600, y: 200 }, data: { label: "Coleta dados", description: "Nome, empresa, interesse", icon: "FileText", variant: "primary" } },
      { id: "7", type: "custom", position: { x: 800, y: 0 }, data: { label: "SLA < 3 min?", description: "Monitora tempo", icon: "Clock", variant: "decision" } },
      { id: "8", type: "custom", position: { x: 800, y: 200 }, data: { label: "Handoff", description: "Transfere com histórico", icon: "Handshake", variant: "success" } },
      { id: "9", type: "custom", position: { x: 1000, y: 100 }, data: { label: "CRM Atualizado", description: "Lead registrado", icon: "CheckCircle", variant: "success" } },
    ],
    edges: [
      { id: "e1-2", source: "1", target: "2", animated: true, style: { stroke: "#00E5FF" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#00E5FF" } },
      { id: "e2-3", source: "2", target: "3", style: { stroke: "#3b82f6" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#3b82f6" } },
      { id: "e2-4", source: "2", target: "4", style: { stroke: "#3b82f6" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#3b82f6" } },
      { id: "e3-5", source: "3", target: "5", animated: true, style: { stroke: "#10b981" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#10b981" } },
      { id: "e4-6", source: "4", target: "6", animated: true, style: { stroke: "#3b82f6" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#3b82f6" } },
      { id: "e5-7", source: "5", target: "7", style: { stroke: "#f59e0b" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#f59e0b" } },
      { id: "e6-8", source: "6", target: "8", animated: true, style: { stroke: "#10b981" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#10b981" } },
      { id: "e7-9", source: "7", target: "9", style: { stroke: "#10b981" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#10b981" } },
      { id: "e8-9", source: "8", target: "9", animated: true, style: { stroke: "#10b981" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#10b981" } },
    ],
  },
  closer: {
    nodes: [
      { id: "1", type: "custom", position: { x: 0, y: 100 }, data: { label: "Vendedor recebe lead", description: "Via fila ou handoff", icon: "Users", variant: "input" } },
      { id: "2", type: "custom", position: { x: 200, y: 100 }, data: { label: "Closer Assist", description: "Carrega contexto", icon: "Bot", variant: "primary" } },
      { id: "3", type: "custom", position: { x: 400, y: 0 }, data: { label: "Histórico", description: "Compras anteriores", icon: "Search", variant: "primary" } },
      { id: "4", type: "custom", position: { x: 400, y: 200 }, data: { label: "Sugestões", description: "Abordagem recomendada", icon: "Lightbulb", variant: "primary" } },
      { id: "5", type: "custom", position: { x: 600, y: 100 }, data: { label: "Oportunidade?", description: "Cross/up-sell", icon: "TrendingUp", variant: "decision" } },
      { id: "6", type: "custom", position: { x: 800, y: 0 }, data: { label: "Alerta vendedor", description: "Produto recomendado", icon: "Bell", variant: "success" } },
      { id: "7", type: "custom", position: { x: 800, y: 200 }, data: { label: "Next best action", description: "Próximo passo", icon: "CheckCircle", variant: "success" } },
      { id: "8", type: "custom", position: { x: 1000, y: 100 }, data: { label: "Negociação", description: "Vendedor conduz", icon: "Handshake", variant: "output" } },
    ],
    edges: [
      { id: "e1-2", source: "1", target: "2", animated: true, style: { stroke: "#00FF94" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#00FF94" } },
      { id: "e2-3", source: "2", target: "3", style: { stroke: "#3b82f6" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#3b82f6" } },
      { id: "e2-4", source: "2", target: "4", style: { stroke: "#3b82f6" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#3b82f6" } },
      { id: "e3-5", source: "3", target: "5", animated: true, style: { stroke: "#f59e0b" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#f59e0b" } },
      { id: "e4-5", source: "4", target: "5", style: { stroke: "#f59e0b" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#f59e0b" } },
      { id: "e5-6", source: "5", target: "6", animated: true, style: { stroke: "#10b981" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#10b981" } },
      { id: "e5-7", source: "5", target: "7", style: { stroke: "#10b981" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#10b981" } },
      { id: "e6-8", source: "6", target: "8", style: { stroke: "#8b5cf6" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#8b5cf6" } },
      { id: "e7-8", source: "7", target: "8", animated: true, style: { stroke: "#8b5cf6" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#8b5cf6" } },
    ],
  },
  eventos: {
    nodes: [
      { id: "1", type: "custom", position: { x: 0, y: 100 }, data: { label: "Lead do Evento", description: "Feira / Ação presencial", icon: "Calendar", variant: "input" } },
      { id: "2", type: "custom", position: { x: 200, y: 100 }, data: { label: "Importa lista", description: "Base do evento", icon: "FileText", variant: "primary" } },
      { id: "3", type: "custom", position: { x: 400, y: 100 }, data: { label: "1º Toque (24h)", description: "Agradecimento", icon: "Send", variant: "primary" } },
      { id: "4", type: "custom", position: { x: 600, y: 0 }, data: { label: "Respondeu?", description: "Engajamento", icon: "HelpCircle", variant: "decision" } },
      { id: "5", type: "custom", position: { x: 600, y: 200 }, data: { label: "2º Toque (72h)", description: "Proposta", icon: "Clock", variant: "primary" } },
      { id: "6", type: "custom", position: { x: 800, y: 0 }, data: { label: "Agenda reunião", description: "Data/hora", icon: "CalendarCheck", variant: "success" } },
      { id: "7", type: "custom", position: { x: 800, y: 200 }, data: { label: "3º Toque", description: "Última tentativa", icon: "Bell", variant: "decision" } },
      { id: "8", type: "custom", position: { x: 1000, y: 0 }, data: { label: "Handoff vendedor", description: "Lead quente", icon: "Users", variant: "success" } },
      { id: "9", type: "custom", position: { x: 1000, y: 200 }, data: { label: "Frio / Nurture", description: "Próximo evento", icon: "RefreshCw", variant: "output" } },
    ],
    edges: [
      { id: "e1-2", source: "1", target: "2", animated: true, style: { stroke: "#FFD700" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#FFD700" } },
      { id: "e2-3", source: "2", target: "3", animated: true, style: { stroke: "#FFD700" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#FFD700" } },
      { id: "e3-4", source: "3", target: "4", style: { stroke: "#f59e0b" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#f59e0b" } },
      { id: "e3-5", source: "3", target: "5", style: { stroke: "#64748b" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#64748b" } },
      { id: "e4-6", source: "4", target: "6", animated: true, style: { stroke: "#10b981" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#10b981" } },
      { id: "e5-7", source: "5", target: "7", style: { stroke: "#f59e0b" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#f59e0b" } },
      { id: "e6-8", source: "6", target: "8", animated: true, style: { stroke: "#10b981" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#10b981" } },
      { id: "e7-8", source: "7", target: "8", style: { stroke: "#10b981" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#10b981" } },
      { id: "e7-9", source: "7", target: "9", style: { stroke: "#8b5cf6" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#8b5cf6" } },
    ],
  },
  cobranca: {
    nodes: [
      { id: "1", type: "custom", position: { x: 0, y: 100 }, data: { label: "Título vence", description: "D-3 dias", icon: "Receipt", variant: "input" } },
      { id: "2", type: "custom", position: { x: 200, y: 100 }, data: { label: "Lembrete amigável", description: "Pré-vencimento", icon: "Bell", variant: "primary" } },
      { id: "3", type: "custom", position: { x: 400, y: 0 }, data: { label: "Pagou?", description: "Verifica baixa", icon: "HelpCircle", variant: "decision" } },
      { id: "4", type: "custom", position: { x: 400, y: 200 }, data: { label: "D+1 Cobrança", description: "Pós-vencimento", icon: "Clock", variant: "primary" } },
      { id: "5", type: "custom", position: { x: 600, y: 0 }, data: { label: "Encerrado", description: "Quitado", icon: "CheckCircle", variant: "success" } },
      { id: "6", type: "custom", position: { x: 600, y: 200 }, data: { label: "Governança", description: "Limite WhatsApp", icon: "Shield", variant: "decision" } },
      { id: "7", type: "custom", position: { x: 800, y: 100 }, data: { label: "Quer negociar?", description: "Human-in-loop", icon: "Handshake", variant: "decision" } },
      { id: "8", type: "custom", position: { x: 1000, y: 0 }, data: { label: "Escala humano", description: "Financeiro assume", icon: "Users", variant: "success" } },
      { id: "9", type: "custom", position: { x: 1000, y: 200 }, data: { label: "Régua continua", description: "D+7, D+15", icon: "RefreshCw", variant: "output" } },
    ],
    edges: [
      { id: "e1-2", source: "1", target: "2", animated: true, style: { stroke: "#FF6B6B" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#FF6B6B" } },
      { id: "e2-3", source: "2", target: "3", style: { stroke: "#f59e0b" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#f59e0b" } },
      { id: "e2-4", source: "2", target: "4", style: { stroke: "#64748b" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#64748b" } },
      { id: "e3-5", source: "3", target: "5", animated: true, style: { stroke: "#10b981" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#10b981" } },
      { id: "e4-6", source: "4", target: "6", style: { stroke: "#f59e0b" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#f59e0b" } },
      { id: "e6-7", source: "6", target: "7", animated: true, style: { stroke: "#FF6B6B" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#FF6B6B" } },
      { id: "e7-8", source: "7", target: "8", style: { stroke: "#10b981" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#10b981" } },
      { id: "e7-9", source: "7", target: "9", style: { stroke: "#8b5cf6" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#8b5cf6" } },
    ],
  },
  recompra_copiloto: {
    nodes: [
      { id: "1", type: "custom", position: { x: 0, y: 0 }, data: { label: "Cliente inativo", description: "Sem pedido há 60+ dias", icon: "Search", variant: "input" } },
      { id: "2", type: "custom", position: { x: 0, y: 200 }, data: { label: "Vendedor consulta", description: "Precisa de contexto", icon: "Users", variant: "input" } },
      { id: "3", type: "custom", position: { x: 200, y: 100 }, data: { label: "Recompra & Copiloto", description: "Analisa e sugere", icon: "Bot", variant: "primary" } },
      { id: "4", type: "custom", position: { x: 400, y: 0 }, data: { label: "Campanha reativação", description: "Oferta personalizada", icon: "RefreshCw", variant: "primary" } },
      { id: "5", type: "custom", position: { x: 400, y: 200 }, data: { label: "Resumo histórico", description: "Últimas compras", icon: "FileText", variant: "primary" } },
      { id: "6", type: "custom", position: { x: 600, y: 0 }, data: { label: "Respondeu?", description: "Engajou", icon: "HelpCircle", variant: "decision" } },
      { id: "7", type: "custom", position: { x: 600, y: 200 }, data: { label: "Recomendação", description: "Produtos sugeridos", icon: "Lightbulb", variant: "success" } },
      { id: "8", type: "custom", position: { x: 800, y: 0 }, data: { label: "Handoff vendedor", description: "Lead reativado", icon: "Handshake", variant: "success" } },
      { id: "9", type: "custom", position: { x: 800, y: 200 }, data: { label: "Venda assistida", description: "Vendedor fecha", icon: "TrendingUp", variant: "success" } },
      { id: "10", type: "custom", position: { x: 1000, y: 100 }, data: { label: "CRM atualizado", description: "Ciclo completo", icon: "CheckCircle", variant: "output" } },
    ],
    edges: [
      { id: "e1-3", source: "1", target: "3", animated: true, style: { stroke: "#A855F7" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#A855F7" } },
      { id: "e2-3", source: "2", target: "3", animated: true, style: { stroke: "#A855F7" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#A855F7" } },
      { id: "e3-4", source: "3", target: "4", style: { stroke: "#3b82f6" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#3b82f6" } },
      { id: "e3-5", source: "3", target: "5", style: { stroke: "#3b82f6" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#3b82f6" } },
      { id: "e4-6", source: "4", target: "6", style: { stroke: "#f59e0b" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#f59e0b" } },
      { id: "e5-7", source: "5", target: "7", animated: true, style: { stroke: "#10b981" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#10b981" } },
      { id: "e6-8", source: "6", target: "8", animated: true, style: { stroke: "#10b981" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#10b981" } },
      { id: "e7-9", source: "7", target: "9", animated: true, style: { stroke: "#10b981" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#10b981" } },
      { id: "e8-10", source: "8", target: "10", style: { stroke: "#8b5cf6" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#8b5cf6" } },
      { id: "e9-10", source: "9", target: "10", style: { stroke: "#8b5cf6" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#8b5cf6" } },
    ],
  },
};

interface AgentFlowDiagramProps {
  agentType: AgentType;
  agentColor: string;
}

export default function AgentFlowDiagram({ agentType, agentColor }: AgentFlowDiagramProps) {
  const flowData = flowDataByAgent[agentType];
  const [nodes, , onNodesChange] = useNodesState(flowData.nodes);
  const [edges, , onEdgesChange] = useEdgesState(flowData.edges);

  return (
    <div className="w-full h-[520px] bg-[#0b1220]/80 rounded-2xl border border-white/10 overflow-hidden relative">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1"
        style={{ backgroundColor: agentColor }}
      />
      {/* Header */}
      <div className="absolute top-4 left-4 z-10 bg-[#0b1220]/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10 shadow-sm">
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: agentColor }}
          />
          <h4 className="text-sm font-semibold text-white">Fluxo de Operação</h4>
        </div>
        <p className="text-xs text-white/50">Arraste nodes para ajustar o layout</p>
      </div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.3, includeHiddenNodes: false }}
        minZoom={0.5}
        maxZoom={1.8}
        attributionPosition="bottom-left"
        nodesDraggable={true}
        nodesConnectable={false}
        elementsSelectable={true}
        zoomOnScroll={true}
        panOnScroll={true}
        panOnDrag={true}
        selectNodesOnDrag={false}
      >
        <Background color="rgba(255,255,255,0.08)" gap={22} size={1} />
      </ReactFlow>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 z-10 bg-[#0b1220]/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10 shadow-sm">
        <div className="flex items-center gap-3 text-[11px]">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-white/60">Entrada</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-white/60">Processo</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-white/60">Decisão</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-purple-500" />
            <span className="text-white/60">Saída</span>
          </div>
        </div>
      </div>
    </div>
  );
}
