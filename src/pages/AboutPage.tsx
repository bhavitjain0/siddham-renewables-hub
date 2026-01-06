import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Leaf, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const aboutPoints = [
  "Renewable energy land development & aggregation specialists",
  "Strategic partner for developers and EPC companies",
  "Strong alignment with state & national green energy policies"
];

const AboutPage = () => {
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
              About Siddham Renewables Private Limited
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
              Driving Sustainable Energy Development Through Strategic Land Solutions
            </motion.h2>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24 bg-background" ref={ref}>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* About Points */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
                className="mb-16"
              >
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Siddham Renewables Private Limited is a specialized land development and aggregation 
                  company dedicated to enabling India's renewable energy transition. Based in Rajasthan, 
                  we provide comprehensive land solutions for utility-scale solar, wind, and hybrid 
                  energy projects.
                </p>
                
                <div className="space-y-4">
                  {aboutPoints.map((point, index) => (
                    <motion.div
                      key={point}
                      initial={{ opacity: 0, x: -15 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <p className="text-foreground">{point}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Vision & Mission Cards */}
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="bg-card border border-border rounded-lg p-8 card-hover"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                      <Eye className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="text-2xl font-heading font-semibold text-foreground">Our Vision</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To become India's most trusted land aggregation partner for renewable energy 
                    infrastructure.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.45 }}
                  className="bg-card border border-border rounded-lg p-8 card-hover"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                      <Target className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="text-2xl font-heading font-semibold text-foreground">Our Mission</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To accelerate clean energy development by enabling seamless, compliant, and 
                    sustainable land solutions for renewable power developers.
                  </p>
                </motion.div>
              </div>

              {/* Commitment Section */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <div className="bg-mint-light rounded-lg p-8 flex flex-col md:flex-row items-start gap-6 border-accent-thin">
                  <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                    <Leaf className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                      Commitment to Sustainable & Compliant Development
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Every project we undertake adheres to environmental regulations, respects local 
                      communities, and contributes to India's renewable energy targets. We believe in 
                      development that benefits all stakeholders while preserving our natural resources 
                      for future generations.
                    </p>
                  </div>
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

export default AboutPage;