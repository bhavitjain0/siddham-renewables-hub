import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Search, FileText, Scale, Building2, Users2, Briefcase, Settings, Wrench
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    title: "Legal Audit & Due Diligence",
    description: "Thorough title verification, encumbrance checks, and complete legal documentation for land parcels."
  },
  {
    icon: Building2,
    title: "Regulatory Compliance & Approvals",
    description: "Assistance with all statutory clearances, permits, and regulatory approvals required for project execution."
  },
  {
    icon: Wrench,
    title: "Infrastructure & Site Development",
    description: "Boundary demarcation, access road development, and basic site infrastructure preparation."
  },
  {
    icon: Users2,
    title: "Community Engagement & Liaison",
    description: "Stakeholder management, community relations, and local government coordination services."
  },
  {
    icon: Briefcase,
    title: "Project Management Support",
    description: "End-to-end project coordination from land identification to project handover."
  },
  {
    icon: Settings,
    title: "Custom Solutions for Solar, Wind & Hybrid Projects",
    description: "Tailored land solutions designed for specific project requirements and configurations."
  }
];

const landSolutions = [
  "Private & government land acquisition",
  "Revenue mapping & legal documentation",
  "Drone surveys & topography studies",
  "Encroachment removal & access rights",
  "Peaceful possession & legal closure"
];

const ServicesPage = () => {
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
              Renewable Energy Land Aggregation & Development Services
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
              Our Core Services for Utility-Scale Renewable Projects
            </motion.h2>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-background" ref={ref}>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-5">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-card border border-border rounded-lg p-6 flex items-start gap-5 card-hover group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-accent/10 group-hover:bg-accent/15 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                      <service.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Land Development Solutions */}
        <section className="py-24 section-soft">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-3xl font-heading font-semibold text-foreground mb-4 text-center"
              >
                Land Development Solutions for Renewable Energy Projects
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="divider-green mb-12"
              />

              <div className="bg-card border border-border rounded-lg p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {landSolutions.map((solution, index) => (
                    <motion.div
                      key={solution}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-mint-light transition-colors duration-200"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                      <p className="text-foreground">{solution}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;