import React, { useState } from "react";
// import { VerticalNavbar } from "./components/Navbar";
// import { Hero } from "./components/Hero";
// import { Games } from "./components/Games";
// import { Pricing } from "./components/Pricing";
// import { Footer } from "./components/Footer";
// import { Topbar } from "./components/Topbar";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/app-routes";
// import TailwindIndicator from "./components/partials/tailwind-indicator";

const App: React.FC = () => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <BrowserRouter>
      {/* <div className="flex flex-col lg:flex-row min-h-screen overflow-x-hidden max-w-full w-full">
        <VerticalNavbar isOpen={isOpen} setIsOpen={setIsOpen} />

        <main
          className={`flex-grow transition-all duration-300 
          ${isOpen ? "ml-48 lg:ml-16" : "lg:ml-16"}`}
        >
          <div className="max-w-full w-full overflow-x-hidden">
            <Topbar /> */}
            <AppRoutes />
            {/* <Hero />
            <Games />
            <Pricing />
            <Footer /> */}
            {/* <TailwindIndicator /> */}
          {/* </div>
        </main> */}
      {/* </div> */}
    </BrowserRouter>
  );
};

export default App;