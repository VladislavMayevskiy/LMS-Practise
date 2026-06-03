import "./App.css";
import LandingLayout from "./components/layout/layout";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { FeatureStrip } from "./components/FeatureStrip";
import { AboutSection } from "./components/AboutSection";
import { BenefitsSection } from "./components/BenefitsSection"

function App() {
  return (
    <LandingLayout>
      <Header />
      <Hero />
      <FeatureStrip/>
      <AboutSection />
      <BenefitsSection/>

    </LandingLayout>
  );
}

export default App;