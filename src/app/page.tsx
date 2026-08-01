import { LandingPage } from "@/components/LandingPage";
import { siteSchema } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema()) }} />
      <LandingPage />
    </>
  );
}
