import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ClientLogos from '@/components/ClientLogos';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import GithubContributions from '@/components/GithubContributions';
import YouTubeVideos from '@/components/YouTubeVideos';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ClientLogos />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Testimonials />
        <GithubContributions />
        <YouTubeVideos />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
