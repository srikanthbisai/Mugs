
import { Inter } from "next/font/google";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between  bg-[#1E1E1E] ${inter.className}`}
    >
      <Header />
      <HeroSection />
      <About />
      <Services />
      <Projects />
      <Testimonials/>
      <Contact/>
      <Footer />
    </main>
  );
}
