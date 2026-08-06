import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ggdronespulverizacao.com.br"),
  title: "Pulverização Agrícola com Drones no Paraná | GG Pulverização",
  description: "Pulverização agrícola, dispersão de sólidos e mapeamento com drones no Paraná. Mais precisão, agilidade e segurança para lavouras e pastagens.",
  applicationName: "GG Pulverização",
  alternates: { canonical: "/" },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Pulverização Agrícola com Drones no Paraná | GG Pulverização",
    description: "Pulverização agrícola, dispersão de sólidos e mapeamento com drones no Paraná. Mais precisão, agilidade e segurança para lavouras e pastagens.",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/media/social/og-gg-pulverizacao-v2.png",
        width: 1200,
        height: 630,
        alt: "Drone agrícola em operação — GG Pulverização",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pulverização Agrícola com Drones no Paraná | GG Pulverização",
    description: "Pulverização agrícola, dispersão de sólidos e mapeamento com drones no Paraná. Mais precisão, agilidade e segurança para lavouras e pastagens.",
    images: ["/media/social/og-gg-pulverizacao-v2.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#031923" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KMKQTWLP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KMKQTWLP');`}
        </Script>
      </body>
    </html>
  );
}
