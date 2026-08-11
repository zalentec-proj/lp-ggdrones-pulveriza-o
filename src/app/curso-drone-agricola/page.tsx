import type { Metadata } from "next";
import { CourseLandingPage } from "@/components/CourseLandingPage";

const siteUrl = "https://www.ggdronespulverizacao.com.br";
const coursePath = "/curso-drone-agricola";
const courseTitle = "Curso de Piloto de Drone Agrícola em Londrina | GG Drones";
const courseDescription = "Formação profissional de pilotos de drones agrícolas com teoria, simuladores e prática em campo. Turma em 18, 19 e 20 de setembro de 2026, em Londrina — PR.";
const socialImage = "/media/social/curso-drone-agricola-v2.png";

export const metadata: Metadata = {
  title: courseTitle,
  description: courseDescription,
  alternates: { canonical: coursePath },
  openGraph: {
    title: courseTitle,
    description: "Pilotar não é operar. Formação profissional com teoria, simulador e campo.",
    url: coursePath,
    siteName: "GG Drones Pulverização",
    locale: "pt_BR",
    type: "website",
    images: [{ url: socialImage, width: 1200, height: 630, alt: "Curso de Piloto de Drone Agrícola da GG Drones em Londrina" }],
  },
  twitter: {
    card: "summary_large_image",
    title: courseTitle,
    description: "Pilotar não é operar. Formação profissional com teoria, simulador e campo.",
    images: [{ url: socialImage, alt: "Curso de Piloto de Drone Agrícola da GG Drones em Londrina" }],
  },
  robots: { index: true, follow: true },
};

export default function CourseDroneAgricolaPage() {
  const courseStructuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Curso de Piloto de Drone Agrícola",
    description: courseDescription,
    url: `${siteUrl}${coursePath}`,
    inLanguage: "pt-BR",
    provider: {
      "@type": "Organization",
      name: "GG Drones Pulverização",
      url: siteUrl,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Presencial",
      startDate: "2026-09-18",
      endDate: "2026-09-20",
      location: {
        "@type": "Place",
        name: "Londrina, Paraná",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Londrina",
          addressRegion: "PR",
          addressCountry: "BR",
        },
      },
    },
  };

  return (
    <>
      <CourseLandingPage />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseStructuredData) }} />
    </>
  );
}
