// import { BarChart, Home, Settings, User, Wallet } from "lucide-react";
import { Button } from "./ui/button";
// import { useState } from "react";

export const Topbar: React.FC = () => {
//   const [isMobileOpen, setIsMobileOpen] = useState(false);

//   const navItems = [
//     { icon: Home, label: "Home", href: "#" },
//     { icon: BarChart, label: "Dashboard", href: "#" },
//     { icon: User, label: "Profile", href: "#" },
//     { icon: Wallet, label: "Wallet", href: "#" },
//     { icon: Settings, label: "Settings", href: "#" },
//   ];
  return (
    <>
      <div className="flex justify-end m-2">
        <div>
          {/* <button
            className="top-4lg:hidden justify-start p-2 bg-orange-600 rounded-full"
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
                  className="text-white hover:text-white focus:outline-none"
                >
                  Close
                </button>
              </div>
              <nav className="flex flex-col space-y-4 p-4">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center p-3 hover:bg-orange-700 rounded text-white"
                  >
                    <item.icon className="h-5 w-5 text-white" />
                    <span className="ml-4">{item.label}</span>
                  </a>
                ))}
              </nav>
            </div>
          )} */}
          <Button className=" bg-orange-500 text-white">
            Sign up
          </Button>
        </div>
      </div>
    </>
  );
};
