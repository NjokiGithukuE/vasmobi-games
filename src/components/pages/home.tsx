import React, { useState } from "react";
import { VerticalNavbar } from "../Navbar";
import { Hero } from "../Hero";
import { Games } from "../Games";
import { Pricing } from "../Pricing";
import { Footer } from "../Footer";
import { Topbar } from "../Topbar";
// import { BrowserRouter } from "react-router-dom";
// import AppRoutes from "@/routes/app-routes";
// import TailwindIndicator from "./components/partials/tailwind-indicator";

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <BrowserRouter>
      <div className="flex flex-col lg:flex-row min-h-screen overflow-x-hidden max-w-full w-full">
        <VerticalNavbar isOpen={isOpen} setIsOpen={setIsOpen} />

        <main
          className={`flex-grow transition-all duration-300 
          ${isOpen ? "ml-48 lg:ml-16" : "lg:ml-16"}`}
        >
          <div className="max-w-full w-full overflow-x-hidden">
            <Topbar />
            {/* <AppRoutes /> */}
            <Hero />
            <Games />
            <Pricing />
            <Footer />
            {/* <TailwindIndicator /> */}
          </div>
        </main>
      </div>
    // </BrowserRouter>
  );
};

export default Home;