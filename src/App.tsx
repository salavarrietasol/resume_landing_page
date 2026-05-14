import { profileData } from './data/profileData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar data={profileData} />
      <main>
        <Hero data={profileData} />
        <About data={profileData} />
        <Services data={profileData} />
        <Experience data={profileData} />
        <Projects data={profileData} />
        <Testimonials data={profileData} />
        <Contact data={profileData} />
      </main>
      <Footer data={profileData} />
      <WhatsAppButton data={profileData} />
    </div>
  );
}

export default App;
