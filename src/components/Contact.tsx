import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Building } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-primary" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-heading font-semibold text-primary-foreground mb-6"
          >
            Contact Siddham Renewables
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-16 h-1 bg-accent mx-auto mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-primary-foreground/80 max-w-2xl mx-auto"
          >
            Partner With Us to Build Sustainable Energy Infrastructure
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Building className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-foreground mb-1">
                    Siddham Renewables Pvt. Ltd.
                  </h3>
                  <p className="text-primary-foreground/70 text-sm">
                    Registered Office
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-primary-foreground font-medium mb-1">Address</h3>
                  <p className="text-primary-foreground/70 text-sm leading-relaxed">
                    Rajasthan, India
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-primary-foreground font-medium mb-1">Phone</h3>
                  <p className="text-primary-foreground/70 text-sm">
                    Contact us for inquiries
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-primary-foreground font-medium mb-1">Email</h3>
                  <p className="text-primary-foreground/70 text-sm">
                    info@siddhamrenewables.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
