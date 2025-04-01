import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, HelpCircle, MessageSquare, Lightbulb } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-kb-blue py-20 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              How Can We Help?
            </h1>
            
            {/* Search Bar */}
            <div className="max-w-xl relative mb-16">
              <Input 
                placeholder="Search..." 
                className="pl-4 pr-12 py-6 text-lg bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60"
              />
              <Button 
                className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-kb-green hover:bg-kb-darkGreen text-white h-10 w-10 p-0"
              >
                <Search size={20} />
              </Button>
            </div>
            
            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Help Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="bg-white rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <HelpCircle size={32} className="text-kb-green" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Help</h3>
                <p className="text-white/80 text-sm">
                  Find Guides, FAQs, And Troubleshooting Tips To Resolve Issues Quickly.
                </p>
              </div>
              
              {/* Chat Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="bg-white rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MessageSquare size={32} className="text-kb-green" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Chat</h3>
                <p className="text-white/80 text-sm">
                  Engage With The Community, Ask Questions, And Discuss Solutions In Real Time.
                </p>
              </div>
              
              {/* Ideas Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="bg-white rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Lightbulb size={32} className="text-kb-green" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Ideas</h3>
                <p className="text-white/80 text-sm">
                  Suggest New Features, Share Feedback, And Vote On Ideas To Improve The Dashboard.
                </p>
              </div>
            </div>
          </div>
          
          {/* Compass Image */}
          <div className="hidden lg:flex items-center justify-center relative">
            <img 
              src="/lovable-uploads/2bd6abae-f8de-4f20-8f49-2d589167777d.png" 
              alt="Compass" 
              className="max-w-full z-10"
            />
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220" className="w-full">
          <path 
            fill="#8DCB2C" 
            fillOpacity="1" 
            d="M0,128L48,122.7C96,117,192,107,288,101.3C384,96,480,96,576,112C672,128,768,160,864,165.3C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;