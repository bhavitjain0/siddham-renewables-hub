import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  FileSearch, Scale, Map, Plane, Leaf, CheckCircle, ArrowRight
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const capabilities = [
  {
    icon: FileSearch,
    title: "Government & Private Land Acquisition",
    description: "Expertise in acquiring both government and private land parcels for renewable energy projects with full compliance."
  },
  {
    icon: Scale,
    title: "Legal Due Diligence from Reputed Law Firms",
    description: "Comprehensive legal verification through established law firms ensuring clear titles and dispute-free acquisitions."
  },
  {
    icon: Map,
    title: "Revenue Approvals & Certified Maps",
    description: "Obtaining all necessary revenue department approvals and certified survey maps for project sites."
  },
  {
    icon: FileSearch,
    title: "Khasra-wise Documentation (KMZ Files)",
    description: "Detailed plot-wise documentation with KMZ files for precise land identification and boundary demarcation."
  },
  {
    icon: Plane,
    title: "Drone-based Topography & Hydrology Surveys",
    description: "Advanced aerial surveys for accurate topographical and hydrological assessments of project sites."
  },
  {
    icon: Leaf,
    title: "Environmental & Regulatory Compliance",
    description: "Ensuring all environmental clearances and regulatory approvals are in place for project execution."
  },
  {
    icon: CheckCircle,
    title: "Peaceful Handover and Legal Closure",
    description: "Complete project handover with all legal documentation and peaceful possession transfer."
  }
];

const DevelopmentPage = () => {
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
              End-to-End Development Capabilities for Renewable Energy Projects
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
              From Land Acquisition to Peaceful Project Handover
            </motion.h2>
          </div>
        </section>

        {/* Process Flow Section */}
        <section className="py-24 bg-background" ref={ref}>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
                className="text-lg text-muted-foreground leading-relaxed text-center mb-16 max-w-3xl mx-auto"
              >
                Our comprehensive development framework covers every aspect of renewable energy 
                project land requirements, from initial acquisition to final handover.
              </motion.p>

              {/* Capabilities List */}
              <div className="space-y-4">
                {capabilities.map((capability, index) => (
                  <motion.div
                    key={capability.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-card border border-border rounded-lg p-6 flex items-start gap-5 card-hover group"
                  >
                    <div className="flex items-center gap-4 flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center text-accent font-semibold text-sm">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <ArrowRight className="h-4 w-4 text-accent hidden md:block" />
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-accent/10 group-hover:bg-accent/15 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                      <capability.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {capability.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {capability.description}
                      </p>
                    </div>
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

export default DevelopmentPage;