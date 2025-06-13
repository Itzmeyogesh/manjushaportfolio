import Sidebar from './components/Sidebar';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';

const App = () => (
  <div className="relative bg-transparent text-white flex flex-col">
    <Sidebar />

    <main className="flex flex-col space-y-24 sm:space-y-32">
      <section className="w-full">
        <Home />
      </section>

      <section className="w-full">
        <About />
      </section>

      <section className="w-full">
        <Skills />
      </section>

      <section className="w-full">
        <Projects />
      </section>

      <section className="w-full">
        <Contact />
      </section>
    </main>

    <Footer />
  </div>
);

export default App;
