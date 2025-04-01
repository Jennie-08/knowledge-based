import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-kb-blue text-white border-t border-white/10 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-white mb-4">NCTV Knowledge</h3>
            <p className="text-white/70 text-sm">Your comprehensive guide to navigating and maximizing the NCTV Dashboard.</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Documentation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/category/introduction" className="text-white/70 hover:text-kb-green">Introduction</Link></li>
              <li><Link to="/category/using-dashboard" className="text-white/70 hover:text-kb-green">Using the Dashboard</Link></li>
              <li><Link to="/category/troubleshooting" className="text-white/70 hover:text-kb-green">Troubleshooting</Link></li>
              <li><Link to="/category/community" className="text-white/70 hover:text-kb-green">Community & Help</Link></li>
              <li><Link to="/category/updates" className="text-white/70 hover:text-kb-green">Updates & Best Practices</Link></li>
              <li><Link to="/category/video-guides" className="text-white/70 hover:text-kb-green">Video Guides</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="text-white/70 hover:text-kb-green">Contact Us</Link></li>
              <li><a href="#" className="text-white/70 hover:text-kb-green">Submit a Ticket</a></li>
              <li><a href="#" className="text-white/70 hover:text-kb-green">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/70 hover:text-kb-green">Terms of Service</a></li>
              <li><a href="#" className="text-white/70 hover:text-kb-green">Privacy Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-kb-green">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-6">
          <p className="text-center text-white/70 text-sm">© {new Date().getFullYear()} NCTV Knowledge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;