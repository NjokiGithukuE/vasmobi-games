import React, { useState } from "react";
import {
  Home,
  Settings,
  User,
  BarChart,
  HelpCircle,
  LogOut,
} from "lucide-react";
import { logo } from "@/constants/constants";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

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

      {isMobileOpen && (
        <div className="fixed inset-0 z-50 bg-orange-600 text-white">
          <div className="flex items-center justify-between p-4">
            <div className="text-lg font-bold">VasMobi Games</div>
            <button
              onClick={() => setIsMobileOpen(false)}
              className="text-orange-500 hover:text-orange-700 focus:outline-none"
            >
              Close
            </button>
          </div>
          <nav className="flex flex-col space-y-4 p-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center p-3 hover:bg-orange-700 rounded hover:text-white text-white"
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
