import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Tokenomics from '../components/Tokenomics';
import Staking from '../components/Staking';
import LaunchSection from '../components/LaunchSection';
import Contracts from '../components/Contracts';
import Roadmap from '../components/Roadmap';
import FAQ from '../components/FAQ';
import Disclaimer from '../components/Disclaimer';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Tokenomics />
        <Staking />
        <LaunchSection />
        <Contracts />
        <Roadmap />
        <FAQ />
        <Disclaimer />
      </main>
      <Footer />
    </>
  );
}
