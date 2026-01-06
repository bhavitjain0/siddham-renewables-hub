import logo from "@/assets/logo.jpeg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Siddham Renewables" 
              className="h-12 w-auto bg-white rounded p-1"
            />
          </div>

          <div className="text-center md:text-right">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Siddham Renewables Private Limited. All rights reserved.
            </p>
            <p className="text-primary-foreground/40 text-xs mt-1">
              Enabling India's Renewable Energy Transition
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
