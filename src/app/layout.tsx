import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ggdronespulverizacao.com.br"),
  title: "Pulverização com Drones em Cascavel | GG Drones",
  description: "Pulverização agrícola com drones em Cascavel e região. Aplicação precisa, dispersão de sólidos, mapeamento e relatório operacional. Solicite uma avaliação.",
  applicationName: "GG Drones Pulverização",
  alternates: { canonical: "/" },
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
