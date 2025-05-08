import AdditonalBlog from "../Components/AdditonalBlog";
import BlogSection from "../Components/BlogSection";
import Calltoaction from "../Components/Calltoaction";
import CaseStudysection from "../Components/CaseStudysection";
import FeaturesSection from "../Components/FeaturesSection";
import HeroSection from "../Components/HeroSection";
import OurClients from "../Components/OurClients";
import PartnersSection from "../Components/PartnersSection";
import StatisticSection from "../Components/StatisticSection";

function Home() {
  return (
    <div>
      <section id="hero">
        <HeroSection />
      </section>
      <section id="our-clients">
        <OurClients />
      </section>
      <section id="features">
        <FeaturesSection />
      </section>
      <section id="case-study">
        <CaseStudysection />
      </section>
      <section id="statistics">
        <StatisticSection />
      </section>
      <section id="blog">
        <BlogSection />
      </section>
      <section id="partners">
        <PartnersSection />
      </section>
      <section id="additional-blog">
        <AdditonalBlog />
      </section>
      <section id="call-to-action">
        <Calltoaction />
      </section>
    </div>
  );
}

export default Home;
