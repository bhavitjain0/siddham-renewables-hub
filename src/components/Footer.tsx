import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-green py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Company */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="Siddham Renewables" 
                className="h-14 w-auto bg-white rounded p-1"
              />
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Enabling India's Renewable Energy Transition through strategic land aggregation 
              and development solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/about" className="text-primary-foreground/70 hover:text-accent text-sm transition-colors duration-200">
                About Us
              </Link>
              <Link to="/services" className="text-primary-foreground/70 hover:text-accent text-sm transition-colors duration-200">
                Services
              </Link>
              <Link to="/why-siddham" className="text-primary-foreground/70 hover:text-accent text-sm transition-colors duration-200">
                Why Siddham
              </Link>
              <Link to="/development" className="text-primary-foreground/70 hover:text-accent text-sm transition-colors duration-200">
                Capabilities
              </Link>
              <Link to="/leadership" className="text-primary-foreground/70 hover:text-accent text-sm transition-colors duration-200">
                Leadership
              </Link>
              <Link to="/projects" className="text-primary-foreground/70 hover:text-accent text-sm transition-colors duration-200">
                Projects
              </Link>
              <Link to="/contact" className="text-primary-foreground/70 hover:text-accent text-sm transition-colors duration-200">
                Contact
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">Legal</h4>
            <div className="flex flex-col gap-2">
              <Link to="/disclaimer" className="text-primary-foreground/70 hover:text-accent text-sm transition-colors duration-200">
                Disclaimer
              </Link>
              <Link to="/terms" className="text-primary-foreground/70 hover:text-accent text-sm transition-colors duration-200">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Siddham Renewables Private Limited. All rights reserved.
            </p>
            <p className="text-primary-foreground/40 text-xs">
              Powering India's Clean Energy Infrastructure
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;