import React, { useState } from "react";
import {
  Home,
  Settings,
  User,
  BarChart,
  HelpCircle,
  LogOut,
  Wallet,
} from "lucide-react";
import { logo } from "@/constants/constants";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface VerticalNavbarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const VerticalNavbar: React.FC<VerticalNavbarProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    { icon: Home, label: "Home", href: "#" },
    { icon: BarChart, label: "Dashboard", href: "#" },
    { icon: User, label: "Profile", href: "#" },
    { icon: Wallet, label: "Wallet", href: "#" },
    { icon: Settings, label: "Settings", href: "#" },
  ];

  return (
    <>
      <div
        className={`
          fixed top-0 left-0 h-full
          transition-all duration-300 ease-in-out
          bg-orange-600 text-white z-50 hidden lg:block
          ${isOpen ? "w-48" : "w-16"}
        `}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <TooltipProvider>
          <nav className="h-full flex flex-col">
            <div className="h-16 flex items-center justify-center border-b border-orange-500">
              {!isOpen ? (
                <img src={logo} alt="Logo" className="h-8" />
              ) : (
                <div className="text-lg font-bold pl-2">VasMobi Games</div>
              )}
            </div>

            <div className="flex-grow py-4 space-y-2">
              {navItems.map((item, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <a
                      href={item.href}
                      className="flex items-center p-3 hover:bg-orange-700"
                    >
                      <item.icon className="h-5 w-5 text-white" />
                      {isOpen && (
                        <span className="ml-4 text-md text-white">
                          {item.label}
                        </span>
                      )}
                    </a>
                  </TooltipTrigger>
                  <TooltipContent side="right">{item.label}</TooltipContent>
                </Tooltip>
              ))}
            </div>

            <div className="border-t border-orange-500 p-2 space-y-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="#help"
                    className="flex items-center p-3 hover:bg-orange-700"
                  >
                    <HelpCircle className="h-5 w-5 text-white" />
                    {isOpen && (
                      <span className="ml-4 text-md text-white">Help</span>
                    )}
                  </a>
                </TooltipTrigger>
                <TooltipContent side="right">Help</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="#logout"
                    className="flex items-center p-3 hover:bg-orange-700"
                  >
                    <LogOut className="h-5 w-5 text-white" />
                    {isOpen && (
                      <span className="ml-4 text-md text-white">Logout</span>
                    )}
                  </a>
                </TooltipTrigger>
                <TooltipContent side="right">Logout</TooltipContent>
              </Tooltip>
            </div>
          </nav>
        </TooltipProvider>
      </div>

      {/* Mobile */}
      
      <button
        className="fixed top-4 left-4 z-50 lg:hidden p-2 bg-orange-600 rounded-full"
        onClick={() => setIsMobileOpen(true)}
      >
        🎮
      </button>

      {/* Mobile menu overlay */}
      {isMobileOpen && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-orange-600 text-white shadow-lg">
          <div className="flex items-center justify-between p-4">
            <div className="text-lg font-bold">VasMobi Games</div>
            <button
              onClick={() => setIsMobileOpen(false)}
              className="text-white hover:bg-orange-700 p-2 rounded-full focus:outline-none"
            >
              ✕
            </button>
          </div>
          <nav className="flex flex-col p-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center p-3 hover:bg-orange-700 rounded text-white"
                onClick={() => setIsMobileOpen(false)}
              >
                <item.icon className="h-5 w-5 text-white" />
                <span className="ml-4">{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

// import React, { useState } from "react";
// import {
//   Home,
//   Settings,
//   User,
//   BarChart,
//   HelpCircle,
//   LogOut,
//   Wallet,
// } from "lucide-react";

// const VerticalNavbar = () => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [isMobileOpen, setIsMobileOpen] = useState(false);

//   const navItems = [
//     { icon: Home, label: "Home", href: "#" },
//     { icon: BarChart, label: "Dashboard", href: "#" },
//     { icon: User, label: "Profile", href: "#" },
//     { icon: Wallet, label: "Wallet", href: '#' },
//     { icon: Settings, label: "Settings", href: "#" },
//   ];

//   const SidebarItem = ({ Icon, label, href }) => (
//     <a
//       href={href}
//       className="flex items-center p-3 hover:bg-orange-700 rounded-lg transition-colors duration-200"
//     >
//       <Icon className="h-5 w-5 min-w-5 text-white" />
//       {isExpanded && (
//         <span className="ml-4 text-white truncate">{label}</span>
//       )}
//     </a>
//   );

//   return (
//     <>
//       {/* Desktop Sidebar */}
//       <div
//         className={`
//           fixed top-0 left-0 h-full
//           transition-all duration-300 ease-in-out
//           bg-orange-600 text-white
//           hidden lg:flex flex-col z-50
//           ${isExpanded ? "w-64" : "w-16"}
//         `}
//         onMouseEnter={() => setIsExpanded(true)}
//         onMouseLeave={() => setIsExpanded(false)}
//       >
//         {/* Logo Section */}
//         <div className="h-16 flex items-center justify-center border-b border-orange-500">
//           {isExpanded ? (
//             <span className="text-lg font-bold">VasMobi Games</span>
//           ) : (
//             <span className="text-2xl">🎮</span>
//           )}
//         </div>

//         {/* Navigation Items */}
//         <div className="flex-1 flex flex-col gap-2 p-3 overflow-y-auto">
//           {navItems.map((item, index) => (
//             <SidebarItem
//               key={index}
//               Icon={item.icon}
//               label={item.label}
//               href={item.href}
//             />
//           ))}
//         </div>

//         {/* Footer Items */}
//         <div className="border-t border-orange-500 p-3 space-y-2">
//           <SidebarItem Icon={HelpCircle} label="Help" href="#help" />
//           <SidebarItem Icon={LogOut} label="Logout" href="#logout" />
//         </div>
//       </div>

//       {/* Mobile Menu Button */}
//       <button
//         className="fixed top-4 left-4 z-50 lg:hidden p-2 bg-orange-600 rounded-full text-white"
//         onClick={() => setIsMobileOpen(true)}
//       >
//         <Home className="h-6 w-6" />
//       </button>

//       {/* Mobile Menu */}
//       {isMobileOpen && (
//         <div className="fixed inset-0 z-50 bg-orange-600 lg:hidden">
//           <div className="flex flex-col h-full">
//             <div className="flex items-center justify-between p-4 border-b border-orange-500">
//               <span className="text-lg font-bold text-white">VasMobi Games</span>
//               <button
//                 onClick={() => setIsMobileOpen(false)}
//                 className="text-white p-2 hover:bg-orange-700 rounded-lg"
//               >
//                 ✕
//               </button>
//             </div>

//             <div className="flex-1 p-4 space-y-2 overflow-y-auto">
//               {navItems.map((item, index) => (
//                 <a
//                   key={index}
//                   href={item.href}
//                   className="flex items-center p-3 hover:bg-orange-700 rounded-lg text-white"
//                 >
//                   <item.icon className="h-5 w-5" />
//                   <span className="ml-4">{item.label}</span>
//                 </a>
//               ))}
//             </div>

//             <div className="border-t border-orange-500 p-4 space-y-2">
//               <a
//                 href="#help"
//                 className="flex items-center p-3 hover:bg-orange-700 rounded-lg text-white"
//               >
//                 <HelpCircle className="h-5 w-5" />
//                 <span className="ml-4">Help</span>
//               </a>
//               <a
//                 href="#logout"
//                 className="flex items-center p-3 hover:bg-orange-700 rounded-lg text-white"
//               >
//                 <LogOut className="h-5 w-5" />
//                 <span className="ml-4">Logout</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default VerticalNavbar;
