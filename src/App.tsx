import React, { useEffect, useState } from "react";
import { VerticalNavbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Games } from "./components/Games";
import { Pricing } from "./components/Pricing";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";

const App: React.FC = () => {
  useEffect(() => {
    // Remove dark class
    document.documentElement.classList.remove('dark');
    
    // Prevent system dark mode
    document.documentElement.style.colorScheme = 'light';
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="flex flex-col lg:flex-row min-h-screen overflow-x-hidden max-w-full w-full">
      <VerticalNavbar isOpen={isOpen} setIsOpen={setIsOpen} />

      <main
        className={`flex-grow transition-all duration-300 ${
          isOpen ? "ml-48 lg:ml-16" : "ml-16"
        }`}
      >
        <div className="max-w-full w-full overflow-x-hidden">
          <ModeToggle />
          <Hero />
          <Games />
          <Pricing />
          <Footer />
        </div>
      </main>
    </div>
    </ThemeProvider>
    
  );
};

export default App;