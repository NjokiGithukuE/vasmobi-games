import { Footer } from "../Footer";
import { Games } from "../Games";
import { Hero } from "../Hero";
import { Pricing } from "../Pricing";
import TailwindIndicator from "./tailwind-indicator";

export const Layout: React.FC = () => {
  return (
    <div>
      <header className="sticky"></header>
      <main className="max-w-full">
        <Hero />
        <Games />
        <Pricing />
        <Footer />
        <TailwindIndicator />
      </main>
    </div>
  );
};
