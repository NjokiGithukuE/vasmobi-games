import React, { useState } from "react";
import { VerticalNavbar } from "./components/Navbar";
import { HeroSection } from "./components/Hero";
import { GamesSection } from "./components/Games";
import { PricingSection } from "./components/Pricing";
import { Footer } from "./components/Footer";

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen overflow-x-hidden max-w-full w-full">
      <VerticalNavbar isOpen={isOpen} setIsOpen={setIsOpen} />

      <main
        className={`flex-grow transition-all duration-300 ${
          isOpen ? "ml-48 lg:ml-16" : "ml-16"
        }`}
      >
        <div className="max-w-full w-full overflow-x-hidden">
          <HeroSection />
          <GamesSection />
          <PricingSection />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default App;