import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeIntro from "@/components/HomeIntro";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <HomeIntro />
      </main>
      <Footer />
    </div>
  );
};

export default Index;