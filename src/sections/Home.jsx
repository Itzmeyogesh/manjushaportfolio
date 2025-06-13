import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin } from 'lucide-react';
import profileImg from '../assets/manjusha.jpg';

const Home = () => {
  return (
    <motion.section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-8 py-16 text-center text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 -z-10 bg-white/10 backdrop-blur-2xl"></div>

      <div className="relative z-10 w-full max-w-4xl bg-white/10 backdrop-blur-xl p-10 sm:p-14 rounded-2xl shadow-2xl flex flex-col items-center space-y-6 border border-white/20">
        <img
          src={profileImg}
          alt="Manjusha Shrirame"
          className="w-32 h-32 rounded-full border-4 border-white/40 object-cover shadow-lg"
        />

        <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow">
          Hi, I'm Manjusha Shrirame
        </h1>

        <TypeAnimation
          sequence={[
            'Aspiring Java Developer',
            1500,
            'Backend Problem Solver',
            1500,
            'Full Stack Learner',
            1500,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-lg sm:text-xl text-white/80"
        />

        <p className="text-gray-200 max-w-2xl text-sm mt-2">
          Passionate about Java and solving real-world problems. Dedicated to continuous learning and building enterprise software solutions.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mt-4">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center bg-white/20 hover:bg-white/30 text-white font-medium px-6 py-3 rounded-full shadow-lg transition duration-300"
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="inline-flex items-center border border-white/30 hover:bg-white/20 text-white font-medium px-6 py-3 rounded-full shadow-lg transition duration-300"
          >
            Contact Me
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 mt-6">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            <Github size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/manjusha-shrirame-046491306 "
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <Linkedin size={28} />
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
