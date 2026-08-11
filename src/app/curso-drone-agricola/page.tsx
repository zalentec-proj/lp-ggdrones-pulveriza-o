import type { Metadata } from "next";
import { CourseLandingPage } from "@/components/CourseLandingPage";

export const metadata: Metadata = {
  title: "Curso de Piloto de Drone Agrícola em Londrina | GG Drones",
  description: "Formação Profissional de Pilotos de Drones Agrícolas: teoria, simuladores e prática em campo. Primeira turma em 18, 19 e 20 de setembro de 2026, em Londrina — PR.",
  openGraph: {
    title: "Curso de Piloto de Drone Agrícola em Londrina | GG Drones",
    description: "Pilotar não é operar. Formação profissional com teoria, simulador e campo.",
    images: [{ url: "/media/social/curso-drone-agricola.png", width: 1200, height: 630, alt: "Curso de Piloto de Drone Agrícola da GG Drones em Londrina" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/media/social/curso-drone-agricola.png"],
  },
};

export default function CourseDroneAgricolaPage() {
  return <CourseLandingPage />;
}
