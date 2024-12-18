import { Button } from "./ui/button";
import { Twitter, Facebook, Instagram } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 md:py-8 mt-auto w-full">
  <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 overflow-hidden">
    <div>
      <h4 className="font-bold text-orange-500 mb-4">VasMobile Games</h4>
      <p className="text-gray-400 text-sm leading-relaxed">
        Your ultimate destination for mobile gaming excitement.
      </p>
    </div>
    <div>
      <h4 className="font-bold text-orange-500 mb-4">Quick Links</h4>
      <ul className="space-y-2">
        <li>
          <a
            href="#"
            className="text-gray-300 hover:text-orange-500 hover:underline transition-colors"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-300 hover:text-orange-500 hover:underline transition-colors"
          >
            Games
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-300 hover:text-orange-500 hover:underline transition-colors"
          >
            Pricing
          </a>
        </li>
      </ul>
    </div>
    <div>
      <h4 className="font-bold text-orange-500 mb-4">Support</h4>
      <ul className="space-y-2">
        <li>
          <a
            href="#"
            className="text-gray-300 hover:text-orange-500 hover:underline transition-colors"
          >
            Contact Us
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-300 hover:text-orange-500 hover:underline transition-colors"
          >
            FAQ
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-300 hover:text-orange-500 hover:underline transition-colors"
          >
            Help Center
          </a>
        </li>
      </ul>
    </div>
    <div>
      <h4 className="font-bold text-orange-500 mb-4">Connect</h4>
      <div className="flex flex-col space-y-2">
        <Button
          variant="outline"
          className="
            border-gray-600 
            text-gray-300 
            hover:border-orange-500 
            hover:text-orange-500 
            flex items-center 
            justify-start 
            space-x-2
          "
        >
          <Twitter className="w-5 h-5" />
          <span>X</span>
        </Button>
        <Button
          variant="outline"
          className="
            border-gray-600 
            text-gray-300 
            hover:border-orange-500 
            hover:text-orange-500 
            flex items-center 
            justify-start 
            space-x-2
          "
        >
          <Facebook className="w-5 h-5" />
          <span>Facebook</span>
        </Button>
        <Button
          variant="outline"
          className="
            border-gray-600 
            text-gray-300 
            hover:border-orange-500 
            hover:text-orange-500 
            flex items-center 
            justify-start 
            space-x-2
          "
        >
          <Instagram className="w-5 h-5" />
          <span>Instagram</span>
        </Button>
      </div>
    </div>
  </div>
  <div className="text-center mt-6 border-t border-gray-700 pt-4 text-sm text-gray-500">
    © 2024 VasMobi Games. All rights reserved.
  </div>
</footer>

  );
};
