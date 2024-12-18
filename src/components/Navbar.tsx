import React from "react";
import {
  Home,
  Settings,
  User,
  BarChart,
  HelpCircle,
  LogOut,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { logo } from "@/constants/constants";

interface VerticalNavbarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const VerticalNavbar: React.FC<VerticalNavbarProps> = ({ 
  isOpen, 
  setIsOpen 
}) => {
  const navItems = [
    { icon: Home, label: "Home", href: "#" },
    { icon: BarChart, label: "Dashboard", href: "#" },
    { icon: User, label: "Profile", href: "#" },
    { icon: Settings, label: "Settings", href: "#" },
  ];

  return (
    <div 
      className={`
        fixed top-0 left-0 h-full 
        transition-all duration-300 ease-in-out 
        bg-orange-600 text-white z-50
        ${isOpen ? 'w-48' : 'w-16'}
      `}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <TooltipProvider>
        <nav className="h-full flex flex-col">
          <div className="h-16 flex items-center justify-center border-b border-orange-500">
            {!isOpen ? (
              <div><img src={logo} alt="Logo" /></div>
            ) : (
              <div className="text-lg font-bold pl-2">
                VasMobi Games
              </div>
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
                    <span className="ml-4 text-md text-white">
                      Help
                    </span>
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
                    <span className="ml-4 text-md text-white">
                      Logout
                    </span>
                  )}
                </a>
              </TooltipTrigger>
                  <TooltipContent side="right">Logout</TooltipContent>
                </Tooltip>
              </div>
            </nav>
          </TooltipProvider>
        </div>
      );
    };

// import * as React from "react"
// import { Home, Settings, User, BarChart, LogOut, ChevronRight, X } from 'lucide-react'

// import { Button } from "@/components/ui/button"
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarHeader,
//   SidebarFooter,
//   SidebarTrigger,
//   SidebarMenu,
//   SidebarMenuItem,
//   SidebarMenuButton,
// } from "@/components/ui/sidebar"
// import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

// interface NavItem {
//   icon: React.ComponentType<{ className?: string }>
//   label: string
//   href: string
// }

// const navItems: NavItem[] = [
//   { icon: Home, label: "Home", href: "#" },
//   { icon: BarChart, label: "Dashboard", href: "#" },
//   { icon: User, label: "Profile", href: "#" },
// ]

// export function VerticalNavbar() {
//   const [hoveredItem, setHoveredItem] = React.useState<string | null>(null)

//   return (
//     <Sidebar className="transition-all duration-300 ease-in-out" style={{ width: hoveredItem ? '240px' : '64px' }}>
//       <SidebarHeader>
//         <div className="flex items-center p-4">
//           🎮 <span className={`ml-2 font-bold transition-opacity duration-300 ${hoveredItem ? 'opacity-100' : 'opacity-0'}`}>VasMobile</span>
//         </div>
//       </SidebarHeader>
//       <SidebarContent>
//         <SidebarMenu>
//           {navItems.map((item, index) => (
//             <SidebarMenuItem 
//               key={index}
//               onMouseEnter={() => setHoveredItem(item.label)}
//               onMouseLeave={() => setHoveredItem(null)}
//             >
//               <SidebarMenuButton asChild>
//                 <a href={item.href} className="flex items-center">
//                   <item.icon className="mr-2 h-4 w-4" />
//                   <span className={`transition-opacity duration-300 ${hoveredItem === item.label ? 'opacity-100' : 'opacity-0'}`}>{item.label}</span>
//                   <ChevronRight className={`ml-auto h-4 w-4 transition-opacity duration-300 ${hoveredItem === item.label ? 'opacity-100' : 'opacity-0'}`} />
//                 </a>
//               </SidebarMenuButton>
//             </SidebarMenuItem>
//           ))}
//         </SidebarMenu>
//       </SidebarContent>
//       <SidebarFooter>
//         <SidebarMenu>
//           <SidebarMenuItem
//             onMouseEnter={() => setHoveredItem('Settings')}
//             onMouseLeave={() => setHoveredItem(null)}
//           >
//             <SidebarMenuButton asChild>
//               <a href="#settings" className="flex items-center">
//                 <Settings className="mr-2 h-4 w-4" />
//                 <span className={`transition-opacity duration-300 ${hoveredItem === 'Settings' ? 'opacity-100' : 'opacity-0'}`}>Settings</span>
//                 <ChevronRight className={`ml-auto h-4 w-4 transition-opacity duration-300 ${hoveredItem === 'Settings' ? 'opacity-100' : 'opacity-0'}`} />
//               </a>
//             </SidebarMenuButton>
//           </SidebarMenuItem>
//           <SidebarMenuItem
//             onMouseEnter={() => setHoveredItem('Logout')}
//             onMouseLeave={() => setHoveredItem(null)}
//           >
//             <SidebarMenuButton asChild>
//               <button onClick={() => console.log('Logout clicked')} className="flex w-full items-center">
//                 <LogOut className="mr-2 h-4 w-4" />
//                 <span className={`transition-opacity duration-300 ${hoveredItem === 'Logout' ? 'opacity-100' : 'opacity-0'}`}>Logout</span>
//                 <ChevronRight className={`ml-auto h-4 w-4 transition-opacity duration-300 ${hoveredItem === 'Logout' ? 'opacity-100' : 'opacity-0'}`} />
//               </button>
//             </SidebarMenuButton>
//           </SidebarMenuItem>
//         </SidebarMenu>
//       </SidebarFooter>
//     </Sidebar>
//   )
// }

// export function MobileNavbar() {
//   return (
//     <Sheet>
//       <SheetTrigger asChild>
//         <button className="fixed top-4 left-4 z-50 md:hidden flex items-center">
//           🎮 <span className="ml-2 font-bold">VasMobile</span>
//         </button>
//       </SheetTrigger>
//       <SheetContent side="left" className="p-0 w-[240px]">
//         <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
//           <X className="h-4 w-4" />
//           <span className="sr-only">Close</span>
//         </SheetClose>
//         <Sidebar>
//           <SidebarHeader>
//             <div className="flex items-center p-4">
//               🎮 <span className="ml-2 font-bold">VasMobile</span>
//             </div>
//           </SidebarHeader>
//           <SidebarContent>
//             <SidebarMenu>
//               {navItems.map((item, index) => (
//                 <SidebarMenuItem key={index}>
//                   <SidebarMenuButton asChild>
//                     <a href={item.href} className="flex items-center">
//                       <item.icon className="mr-2 h-4 w-4" />
//                       <span>{item.label}</span>
//                       <ChevronRight className="ml-auto h-4 w-4" />
//                     </a>
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//               ))}
//             </SidebarMenu>
//           </SidebarContent>
//           <SidebarFooter>
//             <SidebarMenu>
//               <SidebarMenuItem>
//                 <SidebarMenuButton asChild>
//                   <a href="#settings" className="flex items-center">
//                     <Settings className="mr-2 h-4 w-4" />
//                     <span>Settings</span>
//                     <ChevronRight className="ml-auto h-4 w-4" />
//                   </a>
//                 </SidebarMenuButton>
//               </SidebarMenuItem>
//               <SidebarMenuItem>
//                 <SidebarMenuButton asChild>
//                   <button onClick={() => console.log('Logout clicked')} className="flex w-full items-center">
//                     <LogOut className="mr-2 h-4 w-4" />
//                     <span>Logout</span>
//                     <ChevronRight className="ml-auto h-4 w-4" />
//                   </button>
//                 </SidebarMenuButton>
//               </SidebarMenuItem>
//             </SidebarMenu>
//           </SidebarFooter>
//         </Sidebar>
//       </SheetContent>
//     </Sheet>
//   )
// }
