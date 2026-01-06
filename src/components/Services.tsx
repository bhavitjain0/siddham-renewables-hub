import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, FileText, Scale, Building2, Users2 } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Land Identification & Feasibility Studies",
    description: "Comprehensive site surveys, feasibility assessments, and technical evaluations for optimal project locations."
  },
  {
    icon: FileText,
    title: "Land Aggregation & Acquisition",
    description: "End-to-end land procurement services including negotiation, documentation, and registration support."
  },
  {
    icon: Scale,
    title: "Legal Due Diligence & Regulatory Approvals",
    description: "Thorough title verification, encumbrance checks, and assistance with all statutory clearances."
  },
  {
    icon: Building2,
    title: "Infrastructure & Site Development",
    description: "Boundary demarcation, access road development, and basic site infrastructure preparation."
  },
  {
    icon: Users2,
    title: "Community Engagement & Liaison",
    description: "Stakeholder management, community relations, and local government coordination services."
  }
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-6"
          >
            Renewable Energy Land Development & Aggregation Services
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
            Our Core Renewable Energy Services
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-card border border-border rounded-lg p-6 flex items-start gap-5 card-hover group"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/5 group-hover:bg-accent/10 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                <service.icon className="h-7 w-7 text-primary group-hover:text-accent transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
