import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DisclaimerPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="gradient-green py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-4xl font-heading font-semibold text-primary-foreground"
            >
              Disclaimer
            </motion.h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="space-y-6 text-muted-foreground"
              >
                <h2 className="text-xl font-heading font-semibold text-foreground">
                  General Information
                </h2>
                <p className="leading-relaxed">
                  The information contained on this website is for general information purposes only. 
                  Siddham Renewables Private Limited makes no representations or warranties of any kind, 
                  express or implied, about the completeness, accuracy, reliability, suitability, or 
                  availability with respect to the website or the information, products, services, or 
                  related graphics contained on the website for any purpose.
                </p>

                <h2 className="text-xl font-heading font-semibold text-foreground">
                  No Legal or Financial Advice
                </h2>
                <p className="leading-relaxed">
                  The content on this website does not constitute legal, financial, or professional 
                  advice. Users should not act or refrain from acting based on any content included 
                  in this site without seeking the advice of a qualified professional. Siddham 
                  Renewables Private Limited disclaims all liability and responsibility arising from 
                  any reliance placed on such materials by any visitor to this website.
                </p>

                <h2 className="text-xl font-heading font-semibold text-foreground">
                  No Guarantee of Approvals or Outcomes
                </h2>
                <p className="leading-relaxed">
                  While Siddham Renewables Private Limited assists with land aggregation, regulatory 
                  compliance, and project development, we do not guarantee the approval of any permits, 
                  licenses, or clearances from government or regulatory bodies. Outcomes depend on 
                  various factors beyond our control, including regulatory decisions, land availability, 
                  and market conditions.
                </p>

                <h2 className="text-xl font-heading font-semibold text-foreground">
                  Limitation of Liability
                </h2>
                <p className="leading-relaxed">
                  In no event will Siddham Renewables Private Limited be liable for any loss or damage 
                  including without limitation, indirect or consequential loss or damage, or any loss 
                  or damage whatsoever arising from loss of data or profits arising out of, or in 
                  connection with, the use of this website or reliance on any information provided herein.
                </p>

                <h2 className="text-xl font-heading font-semibold text-foreground">
                  External Links
                </h2>
                <p className="leading-relaxed">
                  This website may contain links to external websites that are not provided or maintained 
                  by Siddham Renewables Private Limited. We do not guarantee the accuracy, relevance, 
                  timeliness, or completeness of any information on these external websites.
                </p>

                <h2 className="text-xl font-heading font-semibold text-foreground">
                  Changes to This Disclaimer
                </h2>
                <p className="leading-relaxed">
                  Siddham Renewables Private Limited reserves the right to modify this disclaimer at 
                  any time without prior notice. Your continued use of the website following any changes 
                  constitutes your acceptance of the revised disclaimer.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DisclaimerPage;