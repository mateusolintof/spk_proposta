import type { Metadata, Viewport } from "next";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Proposta Comercial | SPK Distribuidora | Convert.AI",
  description:
    "Solução completa de controle comercial para SPK Distribuidora de Autopeças: central de atendimento, assistente IA 24/7, automações inteligentes e painel do gestor.",
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: "#02040A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <body
        className="antialiased bg-background text-foreground font-sans"
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
