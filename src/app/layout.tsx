import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://lp-gg-drones-pulverizacao.vercel.app"),
  title: "Pulverização com Drones em Cascavel | GG Drones",
  description: "Pulverização agrícola com drones em Cascavel e região. Aplicação precisa, dispersão de sólidos, mapeamento e relatório operacional. Solicite uma avaliação.",
  applicationName: "GG Drones Pulverização",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Pulverização com Drones em Cascavel | GG Drones",
    description: "Tecnologia, precisão e responsabilidade para operações agrícolas com drones.",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/media/social/og-gg-drones.png",
        width: 1200,
        height: 630,
        alt: "Pulverização agrícola com drones — GG Drones Pulverização",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pulverização com Drones em Cascavel | GG Drones",
    description: "Tecnologia, precisão e responsabilidade para operações agrícolas com drones.",
    images: ["/media/social/og-gg-drones.png"],
  },
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
