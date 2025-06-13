import Sidebar from './components/Sidebar';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';

const App = () => (
  <div className="relative bg-[#0f172a] text-white">
    <Sidebar />

    <main className="pt-20 pb-10 px-4 sm:px-6 lg:px-8 space-y-20">
      {/* Each section wrapped with consistent spacing and responsive padding */}
      <section className="max-w-7xl mx-auto">
        <Home />
      </section>

      <section className="max-w-7xl mx-auto">
        <About />
      </section>

      <section className="max-w-7xl mx-auto">
        <Skills />
      </section>

      <section className="max-w-7xl mx-auto">
        <Projects />
      </section>

      <section className="max-w-7xl mx-auto">
        <Contact />
      </section>
    </main>

    <Footer />
  </div>
);

export default App;
