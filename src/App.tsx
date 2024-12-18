// import React, { useState } from "react";
// import { VerticalNavbar } from "./components/Navbar";
// import { HeroSection } from "./components/Hero";
// import { GamesSection } from "./components/Games";
// import { PricingSection } from "./components/Pricing";
// import { Footer } from "./components/Footer";

// const App: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div className="flex min-h-screen">
//       <VerticalNavbar
//       isOpen={isOpen}
//       setIsOpen={setIsOpen} />

//       <div className="flex-grow flex flex-col w-full md:ml-64">
//         <main className="flex-grow p-0">
//           <div className="space-y-6 w-full">
//             <HeroSection />
//             <GamesSection />
//             <PricingSection />
//           </div>
//         </main>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from 'react';
// import { VerticalNavbar} from './components/Navbar'
// import { HeroSection } from './components/Hero';
// import { GamesSection } from './components/Games';
// import { PricingSection } from './components/Pricing';
// import { Footer } from './components/Footer';

// const App: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div className="flex min-h-screen">
//       <VerticalNavbar
//         isOpen={isOpen}
//         setIsOpen={setIsOpen}
//       />

//       <div className="flex-grow flex flex-col">
//         <main
//           className={`
//             flex-grow
//             transition-all
//             duration-300
//             ${isOpen ? 'ml-48' : 'ml-16'}
//             p-0
//           `}
//         >
//           <div className="space-y-6 w-full ">
//             <HeroSection />
//             <GamesSection />
//             <PricingSection />
//             <Footer />
//           </div>
//         </main>

//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import { VerticalNavbar } from "./components/Navbar";
import { HeroSection } from "./components/Hero";
import { GamesSection } from "./components/Games";
import { PricingSection } from "./components/Pricing";
import { Footer } from "./components/Footer";

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen overflow-x-hidden">
      <VerticalNavbar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex-grow flex flex-col">
        <main
          className={`
            flex-grow 
            transition-all 
            duration-300 
            ${isOpen ? "ml-48" : "ml-16"}
            px-4 lg:px-8 w-full
          `}
        >
          <div className="space-y-6">
            <HeroSection />
            <GamesSection />
            <PricingSection />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
