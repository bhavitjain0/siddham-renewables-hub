import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhySiddham from "@/components/WhySiddham";
import Services from "@/components/Services";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <WhySiddham />
        <Services />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
