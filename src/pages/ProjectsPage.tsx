import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const clients = [
  "Hero Future Energies",
  "Azure Power",
  "Adani Renewables",
  "Sembcorp Green Infra",
  "Siemens Gamesa",
  "Statkraft",
  "CEP Co Industries"
];

const projects = [
  {
    name: "Clean Solar Hero Group",
    location: "Rajasthan",
    type: "Solar"
  },
  {
    name: "PM-KUSUM Projects",
    location: "Barmer, Rajasthan",
    type: "Solar"
  },
  {
    name: "JUWI India",
    location: "Rajasthan",
    type: "Solar & Wind"
  },
  {
    name: "Sterling & Wilson",
    location: "Rajasthan",
    type: "Solar"
  },
  {
    name: "Sankalp International",
    location: "Rajasthan",
    type: "Renewable"
  }
];

const ProjectsPage = () => {
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
              Renewable Energy Projects & Clients Served
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
              Land Aggregation & Development for Leading Renewable Energy Companies
            </motion.h2>
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-24 bg-background" ref={ref}>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
                className="text-2xl font-heading font-semibold text-foreground text-center mb-4"
              >
                Trusted by Leading Renewable Energy Developers
              </motion.h3>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="divider-green mb-12"
              />

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto"
              >
                We have partnered with some of India's most respected renewable energy developers 
                and EPC companies.
              </motion.p>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20">
                {clients.map((client, index) => (
                  <motion.div
                    key={client}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="bg-card border border-border rounded-lg p-5 text-center card-hover"
                  >
                    <Building2 className="h-8 w-8 text-accent mx-auto mb-3" />
                    <p className="text-foreground font-medium text-sm">{client}</p>
                  </motion.div>
                ))}
              </div>

              {/* Projects Section */}
              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-2xl font-heading font-semibold text-foreground text-center mb-4"
              >
                Projects Executed
              </motion.h3>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="divider-green mb-12"
              />

              <div className="space-y-4">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-card border border-border rounded-lg p-5 flex items-center justify-between card-hover"
                  >
                    <div className="flex items-center gap-4">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground">{project.name}</h4>
                        <p className="text-muted-foreground text-sm">{project.location}</p>
                      </div>
                    </div>
                    <span className="text-accent text-sm font-medium bg-accent/10 px-3 py-1 rounded-full">
                      {project.type}
                    </span>
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

export default ProjectsPage;