import { motion } from "framer-motion";
import { Phone, Building } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="gradient-green py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-heading font-semibold text-primary-foreground mb-6 max-w-4xl"
            >
              Partner With Us for Renewable Energy Land Solutions
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-16 h-1 bg-accent mb-6"
            />
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl md:text-2xl text-primary-foreground/85 max-w-3xl"
            >
              Connect With Siddham Renewables Private Limited
            </motion.h2>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="bg-card border border-border rounded-lg p-8 md:p-12"
              >
                {/* Company Info */}
                <div className="flex items-start gap-5 mb-10 pb-10 border-b border-border">
                  <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Building className="h-7 w-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                      Siddham Renewables Private Limited
                    </h3>
                    <p className="text-muted-foreground">
                      Renewable Energy Land Development & Aggregation
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      Rajasthan, India
                    </p>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Contact Numbers</h4>
                  
                  <motion.a
                    href="tel:+919829408299"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex items-center gap-4 p-4 rounded-lg bg-mint-light hover:bg-accent/15 transition-colors duration-200 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-accent/15 group-hover:bg-accent/25 flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-foreground font-semibold text-lg">+91 98294 08299</p>
                      <p className="text-muted-foreground text-sm">Primary Contact</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="tel:+919829212633"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex items-center gap-4 p-4 rounded-lg bg-mint-light hover:bg-accent/15 transition-colors duration-200 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-accent/15 group-hover:bg-accent/25 flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-foreground font-semibold text-lg">+91 98292 12633</p>
                      <p className="text-muted-foreground text-sm">Alternate Contact</p>
                    </div>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;