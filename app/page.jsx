import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import GithubContributions from '@/components/GithubContributions';
import YouTubeVideos from '@/components/YouTubeVideos';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GithubContributions />
        <YouTubeVideos />
        <Contact />
        <Chatbot />
      </main>
      <Footer />
    </>
  );
}
