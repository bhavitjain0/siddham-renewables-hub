import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Leaf } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-6"
          >
            About Siddham Renewables Private Limited
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
            className="text-lg text-muted-foreground leading-relaxed"
          >
            A Strategic Land Aggregation Partner for Renewable Energy Projects. We specialize in 
            end-to-end land development and aggregation services for large-scale solar, wind, and 
            hybrid energy projects across Rajasthan, enabling India's transition to sustainable energy.
          </motion.p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card border border-border rounded-lg p-8 card-hover"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                <Eye className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-foreground">Our Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To be the most trusted and preferred land aggregation partner in India's renewable 
              energy sector, contributing significantly to the nation's clean energy goals while 
              ensuring sustainable development and community benefit.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="bg-card border border-border rounded-lg p-8 card-hover"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                <Target className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-foreground">Our Mission</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To provide comprehensive, transparent, and efficient land solutions that accelerate 
              renewable energy project development, while maintaining the highest standards of 
              regulatory compliance and stakeholder satisfaction.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 max-w-5xl mx-auto"
        >
          <div className="bg-cream rounded-lg p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
              <Leaf className="h-8 w-8 text-accent" />
            </div>
            <div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                Commitment to Sustainable & Compliant Development
              </h3>
              <p className="text-muted-foreground">
                Every project we undertake adheres to environmental regulations, respects local 
                communities, and contributes to India's renewable energy targets of 500 GW by 2030.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
