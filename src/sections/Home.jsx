import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin } from 'lucide-react';
import profileImg from '../assets/manjusha.jpg';

const Home = () => {
  return (
    <motion.section
      id="home"
      className="relative min-h-[45vh] flex items-center justify-center px-4 py-10 sm:px-6 sm:py-12 md:py-16 text-center text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 -z-10 bg-white/10 backdrop-blur-2xl"></div>

      <div className="relative z-10 w-full max-w-4xl bg-white/10 backdrop-blur-xl px-6 py-8 sm:px-10 sm:py-10 rounded-2xl shadow-2xl flex flex-col items-center gap-4 sm:gap-6 border border-white/20">
        {/* Profile Image */}
        <img
          src={profileImg}
          alt="Manjusha Shrirame"
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white/40 object-cover shadow-md"
        />

        {/* Name */}
        <h1 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-sm">
          Hi, I'm Manjusha Shrirame
        </h1>

        {/* Typing Animation */}
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
          className="text-base sm:text-lg text-white/80"
        />

        {/* Description */}
        <p className="text-gray-200 max-w-xl text-sm sm:text-base mt-1">
          Passionate about Java and solving real-world problems. Dedicated to continuous learning and building enterprise software solutions.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mt-4">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center bg-white/20 hover:bg-white/30 text-white text-sm sm:text-base font-medium px-5 py-2.5 rounded-full shadow-md transition"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center border border-white/30 hover:bg-white/20 text-white text-sm sm:text-base font-medium px-5 py-2.5 rounded-full shadow-md transition"
          >
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-5 mt-5">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/manjusha-shrirame-046491306"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
