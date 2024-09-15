import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import Header from "@/app/components/Header";
import MainSection from "@/app/components/MainSection";
import Header2 from "@/app/components/Header2";
import BenefitsSection from "@/app/components/BenefitsSection";
import Header3 from "@/app/components/Header3";
import Header4 from "@/app/components/Header4";
import ProjectHighlight from "@/app/components/ProjectHighlight";
import ProjectList from "@/app/components/ProjectList";
import MainArticle from "@/app/components/MainArticle";
import GetInvolvedSection from "@/app/components/GetInvolvedSection";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="root">
      <Navbar />
      <HeroSection />
      <Header />
      <MainSection />
      <Header2 />
      <BenefitsSection />
      <Header3 />
      <ProjectHighlight />
      <ProjectList />
      <Header4 />
      <MainArticle />
      <GetInvolvedSection />
      <Footer/>
    </div>
  );
}
