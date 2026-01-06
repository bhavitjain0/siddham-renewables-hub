import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Users, FileCheck, MapPin, Handshake, Clock } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "End-to-End Land Solutions",
    description: "Complete land development services for solar, wind & hybrid projects from identification to handover."
  },
  {
    icon: Shield,
    title: "Regulatory Expertise",
    description: "Deep understanding of land laws, revenue procedures, and environmental compliance requirements."
  },
  {
    icon: Users,
    title: "Government Alignment",
    description: "Strong relationships with government bodies and local authorities for smooth project execution."
  },
  {
    icon: MapPin,
    title: "Local Presence",
    description: "Extensive network and ground presence across Rajasthan's key renewable energy zones."
  },
  {
    icon: FileCheck,
    title: "Legal Due Diligence",
    description: "Comprehensive title verification, encumbrance checks, and documentation support."
  },
  {
    icon: Handshake,
    title: "Community Engagement",
    description: "Sustainable development approach ensuring community benefit and stakeholder satisfaction."
  }
];

const WhySiddham = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-siddham" className="py-24 section-cream" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-6"
          >
            Why Choose Siddham Renewables
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
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Experience, Execution & Regulatory Expertise in Renewable Infrastructure
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-card border border-border rounded-lg p-6 card-hover group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/5 group-hover:bg-accent/10 flex items-center justify-center mb-4 transition-colors duration-300">
                <feature.icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySiddham;
