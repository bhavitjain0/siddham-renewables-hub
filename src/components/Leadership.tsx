import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import gauravImage from "@/assets/gaurav-jain.png";
import ankurImage from "@/assets/ankur-purohit.png";

const leaders = [
  {
    name: "Gaurav Jain",
    title: "Founder & Director",
    image: gauravImage,
    description: "Extensive experience in land aggregation and renewable energy project development across Rajasthan."
  },
  {
    name: "CA Ankur Purohit",
    title: "Co-Founder & Director",
    image: ankurImage,
    description: "Chartered Accountant with expertise in financial structuring and regulatory compliance for infrastructure projects."
  }
];

const Leadership = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="leadership" className="py-24 section-cream" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-6"
          >
            Leadership & Domain Expertise
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
            Guided by Industry Veterans in Renewable Energy
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * index }}
              className="bg-card border border-border rounded-lg overflow-hidden card-hover"
            >
              <div className="aspect-[4/3] bg-secondary/50 flex items-center justify-center overflow-hidden">
                <img 
                  src={leader.image} 
                  alt={leader.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-1">
                  {leader.name}
                </h3>
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
      </div>
    </section>
  );
};

export default Leadership;
