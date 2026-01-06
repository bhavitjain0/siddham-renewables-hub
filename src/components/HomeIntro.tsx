import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, FileCheck, Handshake } from "lucide-react";

const strengths = [
  {
    icon: Handshake,
    title: "Trusted Partner for Renewable Energy Land Aggregation",
    description: "Building long-term relationships with developers, EPCs, and investors through transparent and reliable services."
  },
  {
    icon: FileCheck,
    title: "Policy-Aligned Execution for Solar & Wind Projects",
    description: "Ensuring all projects comply with state and national renewable energy policies and regulations."
  },
  {
    icon: Shield,
    title: "End-to-End Land, Legal & Regulatory Support",
    description: "Comprehensive support from land identification to project handover with complete documentation."
  }
];

const HomeIntro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Company Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-6"
          >
            Siddham Renewables Private Limited – Powering India's Clean Energy Infrastructure
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="divider-green mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Siddham Renewables Private Limited is a pioneering land development and aggregation firm 
            enabling large-scale solar, wind, and hybrid renewable energy projects across Rajasthan. 
            We serve as a strategic partner for developers, EPC companies, and investors seeking 
            compliant and efficient land solutions.
          </motion.p>
        </div>

        {/* Key Strengths */}
        <div className="max-w-5xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl font-heading font-semibold text-foreground text-center mb-12"
          >
            Key Strengths
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4 + index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 card-hover"
              >
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                  <strength.icon className="h-7 w-7 text-accent" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3 leading-tight">
                  {strength.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {strength.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;