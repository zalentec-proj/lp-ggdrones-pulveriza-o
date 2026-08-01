import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "GG Drones Pulverização",
    short_name: "GG Drones",
    description: "Tecnologia, precisão e responsabilidade para operações agrícolas com drones.",
    start_url: "/",
    display: "standalone",
    background_color: "#031923",
    theme_color: "#031923",
    lang: "pt-BR",
  };
}
