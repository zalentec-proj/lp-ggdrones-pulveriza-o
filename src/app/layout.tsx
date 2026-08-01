import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Pulverização com Drones em Cascavel | GG Drones",
  description: "Pulverização agrícola com drones em Cascavel e região. Aplicação precisa, dispersão de sólidos, mapeamento e relatório operacional. Solicite uma avaliação.",
  applicationName: "GG Drones Pulverização",
  openGraph: {
    title: "Pulverização com Drones em Cascavel | GG Drones",
    description: "Tecnologia, precisão e responsabilidade para operações agrícolas com drones.",
    locale: "pt_BR",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: false, follow: false },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#031923" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
