import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, FileCheck, Leaf, Users, Shield, Building2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const reasons = [
  {
    icon: Award,
    title: "Deep Domain Expertise in Renewable Infrastructure",
    description: "Over a decade of experience in land aggregation and development for utility-scale renewable energy projects across Rajasthan."
  },
  {
    icon: FileCheck,
    title: "End-to-End Legal & Compliance Management",
    description: "Comprehensive legal due diligence, documentation, and regulatory compliance ensuring hassle-free project execution."
  },
  {
    icon: Leaf,
    title: "Sustainability-Driven Project Execution",
    description: "Every project aligned with environmental best practices and national renewable energy policies."
  },
  {
    icon: Users,
    title: "Strong Government & Local Stakeholder Relationships",
    description: "Established relationships with local authorities, communities, and government bodies for smooth project approvals."
  },
  {
    icon: Shield,
    title: "Risk Mitigation & Transparent Processes",
    description: "Thorough title verification, encumbrance checks, and transparent documentation to minimize project risks."
  },
  {
    icon: Building2,
    title: "Proven Track Record with Leading Developers",
    description: "Successfully partnered with India's top renewable energy developers and EPC companies."
  }
];

const WhySiddhamPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
              Why Choose Siddham Renewables for Renewable Energy Projects
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
              A Trusted Land Aggregation Partner for Solar, Wind & Hybrid Projects
            </motion.h2>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24 bg-background" ref={ref}>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
                className="text-lg text-muted-foreground leading-relaxed text-center mb-16 max-w-3xl mx-auto"
              >
                Siddham Renewables combines deep domain expertise with strong local relationships 
                and rigorous compliance standards to deliver seamless land solutions for renewable 
                energy projects.
              </motion.p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reasons.map((reason, index) => (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.1 + index * 0.1 }}
                    className="bg-card border border-border rounded-lg p-6 card-hover group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-accent/10 group-hover:bg-accent/15 flex items-center justify-center mb-5 transition-colors duration-300">
                      <reason.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3 leading-tight">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WhySiddhamPage;