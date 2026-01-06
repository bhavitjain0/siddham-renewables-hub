import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import gauravImage from "@/assets/gaurav-jain.png";
import ankurImage from "@/assets/ankur-purohit.png";

const founders = [
  {
    name: "Gaurav Jhanjhari",
    title: "Founder & Director",
    image: gauravImage,
    description: "10+ years in regulatory compliance and land aggregation for renewable energy projects."
  },
  {
    name: "CA Ankur Purohit",
    title: "Co-Founder & Director",
    image: ankurImage,
    description: "15+ years in renewable energy financial modeling and project structuring."
  }
];

const mentors = [
  {
    name: "Rajendra Vyas",
    title: "Industry Mentor",
    description: "35+ years of experience, President IWPA, over 5 GW commissioned in the renewable sector."
  },
  {
    name: "Shanti Prasad",
    title: "Senior Advisor",
    description: "Ex-Chairman Electricity Board & RREC, 45+ years of experience in power sector."
  },
  {
    name: "Prafull Roy",
    title: "Technical Expert",
    description: "Technical & site solutions expert with extensive experience in project execution."
  },
  {
    name: "R. Chhangani",
    title: "Commissioning Expert",
    description: "Wind & solar commissioning expert with proven track record in project delivery."
  }
];

const LeadershipPage = () => {
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
              Leadership Driving Renewable Energy Infrastructure Excellence
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
              Experienced Professionals Leading Siddham Renewables
            </motion.h2>
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-24 bg-background" ref={ref}>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
                className="text-2xl font-heading font-semibold text-foreground text-center mb-4"
              >
                Founders & Leadership Team
              </motion.h3>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="divider-green mb-12"
              />

              <div className="grid md:grid-cols-2 gap-8 mb-20">
                {founders.map((leader, index) => (
                  <motion.div
                    key={leader.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.15 * index }}
                    className="bg-card border border-border rounded-lg overflow-hidden card-hover"
                  >
                    <div className="aspect-square bg-mint-light flex items-center justify-center overflow-hidden">
                      <img 
                        src={leader.image} 
                        alt={leader.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-heading font-semibold text-foreground mb-1">
                        {leader.name}
                      </h4>
                      <p className="text-accent font-medium text-sm mb-3">
                        {leader.title}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {leader.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Mentors Section */}
              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-2xl font-heading font-semibold text-foreground text-center mb-4"
              >
                Mentors & Technical Experts
              </motion.h3>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="divider-green mb-12"
              />

              <div className="grid md:grid-cols-2 gap-6">
                {mentors.map((mentor, index) => (
                  <motion.div
                    key={mentor.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-card border border-border rounded-lg p-6 card-hover border-accent-thin"
                  >
                    <h4 className="text-lg font-semibold text-foreground mb-1">
                      {mentor.name}
                    </h4>
                    <p className="text-accent font-medium text-sm mb-3">
                      {mentor.title}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {mentor.description}
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

export default LeadershipPage;