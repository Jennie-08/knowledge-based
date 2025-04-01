import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-kb-blue border-b border-white/10 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <div className="bg-kb-green rounded-full w-10 h-10 flex items-center justify-center">
            <img 
              src="/lovable-uploads/edf34dc8-b0ae-4ea9-a121-82bda33b08b2.png" 
              alt="NCTV Compass Logo" 
              className="h-6"
            />
          </div>
          <div>
            <span className="font-bold text-xl text-white">Knowledge Base</span>
            <p className="text-xs text-white/70 hidden sm:block">A Space To Search And Browse For Answers And Documentation</p>
          </div>
        </Link>

        <div className="hidden md:flex md:items-center">
          <nav className="flex space-x-8">
            {['Content', 'Content', 'Content', 'Content', 'Content'].map((item, index) => (
              <a key={index} href="#" className="text-white/80 hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <img 
            src="/lovable-uploads/edf34dc8-b0ae-4ea9-a121-82bda33b08b2.png" 
            alt="NCTV Logo" 
            className="h-8 hidden md:block"
          />
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-white md:hidden"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="w-6 h-6"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-kb-blue">
          <div className="container mx-auto px-4 py-3 space-y-3">
            <nav className="flex flex-col space-y-2">
              {['Content', 'Content', 'Content', 'Content', 'Content'].map((item, index) => (
                <a key={index} href="#" className="text-white/80 hover:text-white transition-colors py-2">
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
