import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsPage = () => {
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
              Terms of Use
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
                  Website Usage
                </h2>
                <p className="leading-relaxed">
                  By accessing and using this website, you accept and agree to be bound by the terms 
                  and conditions outlined herein. If you do not agree to these terms, please do not 
                  use this website. Siddham Renewables Private Limited reserves the right to modify 
                  these terms at any time without prior notice.
                </p>

                <h2 className="text-xl font-heading font-semibold text-foreground">
                  Intellectual Property
                </h2>
                <p className="leading-relaxed">
                  All content on this website, including but not limited to text, graphics, logos, 
                  images, and software, is the property of Siddham Renewables Private Limited or its 
                  content suppliers and is protected by Indian and international copyright laws. 
                  Unauthorized reproduction, distribution, or use of any content from this website 
                  is strictly prohibited.
                </p>

                <h2 className="text-xl font-heading font-semibold text-foreground">
                  User Conduct
                </h2>
                <p className="leading-relaxed">
                  Users agree to use this website only for lawful purposes and in a manner that does 
                  not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment 
                  of the website. Prohibited behavior includes harassing or causing distress or 
                  inconvenience to any other user, transmitting obscene or offensive content, or 
                  disrupting the normal flow of dialogue within the website.
                </p>

                <h2 className="text-xl font-heading font-semibold text-foreground">
                  Limitation of Liability
                </h2>
                <p className="leading-relaxed">
                  Siddham Renewables Private Limited shall not be liable for any direct, indirect, 
                  incidental, consequential, or punitive damages arising out of your access to, or 
                  use of, this website. This limitation of liability applies to all damages of any 
                  kind, including damages for loss of data, revenue, or profits, loss of or damage 
                  to property, and claims of third parties.
                </p>

                <h2 className="text-xl font-heading font-semibold text-foreground">
                  Indemnification
                </h2>
                <p className="leading-relaxed">
                  You agree to indemnify, defend, and hold harmless Siddham Renewables Private Limited, 
                  its officers, directors, employees, agents, and third parties, for any losses, costs, 
                  liabilities, and expenses relating to or arising out of your use of or inability to 
                  use the website, any user postings made by you, or your violation of any terms of 
                  this agreement.
                </p>

                <h2 className="text-xl font-heading font-semibold text-foreground">
                  Governing Law
                </h2>
                <p className="leading-relaxed">
                  These Terms of Use shall be governed by and construed in accordance with the laws 
                  of India. Any disputes arising under or in connection with these Terms shall be 
                  subject to the exclusive jurisdiction of the courts located in Rajasthan, India.
                </p>

                <h2 className="text-xl font-heading font-semibold text-foreground">
                  Jurisdiction
                </h2>
                <p className="leading-relaxed">
                  You agree that any legal action or proceeding between you and Siddham Renewables 
                  Private Limited for any purpose concerning these Terms of Use or the parties' 
                  obligations hereunder shall be brought exclusively in a court of competent 
                  jurisdiction sitting in Rajasthan, India.
                </p>

                <h2 className="text-xl font-heading font-semibold text-foreground">
                  Severability
                </h2>
                <p className="leading-relaxed">
                  If any provision of these Terms of Use is found to be invalid or unenforceable 
                  under applicable law, such provision shall be modified to the minimum extent 
                  necessary to make it valid and enforceable, and the remaining provisions shall 
                  continue in full force and effect.
                </p>

                <h2 className="text-xl font-heading font-semibold text-foreground">
                  Contact Information
                </h2>
                <p className="leading-relaxed">
                  For any questions regarding these Terms of Use, please contact Siddham Renewables 
                  Private Limited at the phone numbers provided on our Contact page.
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

export default TermsPage;