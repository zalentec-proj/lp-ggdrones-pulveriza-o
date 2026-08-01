import { faq } from "@/content/site";

export function siteSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "GG Drones Pulverização",
        inLanguage: "pt-BR",
      },
      {
        "@type": "WebPage",
        name: "Pulverização com Drones em Cascavel | GG Drones",
        description: "Pulverização agrícola com drones em Cascavel e região. Aplicação precisa, dispersão de sólidos, mapeamento e relatório operacional.",
        inLanguage: "pt-BR",
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map(([name, acceptedAnswer]) => ({
          "@type": "Question",
          name,
          acceptedAnswer: { "@type": "Answer", text: acceptedAnswer },
        })),
      },
    ],
  };
}
