export type PilarType = "atendimento" | "agente" | "automacoes" | "dashboard";

// Alias para compatibilidade com componentes existentes
export type AgentType = PilarType;

export type ModalKind =
  | { type: "pilar"; pilar: PilarType }
  | { type: "agent"; agent: AgentType }
  | { type: "crm" }
  | { type: "dashboard" }
  | null;

export interface PilarData {
  id: PilarType;
  name: string;
  fullName: string;
  description: string;
  benefits: string[];
  metrics?: { label: string; value: string }[];
  flowNodes?: FlowNodeData[];
  flowEdges?: FlowEdgeData[];
}

// Alias para compatibilidade
export type AgentData = PilarData;

export interface FlowNodeData {
  id: string;
  label: string;
  type?: "input" | "output" | "default";
  position: { x: number; y: number };
  style?: React.CSSProperties;
}

export interface FlowEdgeData {
  id: string;
  source: string;
  target: string;
  animated?: boolean;
  label?: string;
}
