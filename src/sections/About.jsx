import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Lightbulb } from 'lucide-react';

const sections = [
  {
    icon: <GraduationCap size={24} />,
    title: 'Education',
    description: [
      '🎓 B.Sc Computer Science, Sewadal Mahila Mahavidyalaya, Nagpur (2024)',
      '🏫 Higher Secondary: D.D Nagar Junior College, Nagpur (2019)',
      '🏫 Secondary School: Saraswati Madhyamik Vidya Mandir, Nagpur (2017)',
    ],
  },
  {
    icon: <BookOpen size={24} />,
    title: 'Skills Summary',
    description: [
      '🛠️ Languages: Core Java, JDBC, Servlets, JSP, SQL, PL/SQL',
      '📦 Frameworks: Spring Core, Spring Boot',
      '🎨 UI: HTML, CSS, JavaScript',
      '🗄️ Databases: Oracle, MySQL',
      '🧰 Tools: GitHub, Eclipse, VS Code, IntelliJ, Tomcat',
    ],
  },
  {
    icon: <Lightbulb size={24} />,
    title: 'Career Objective',
    description: [
      '🚀 Passionate about Java and solving real-world problems.',
      '📚 Dedicated to continuous learning.',
      '🎯 Aspiring to become an expert in enterprise software development.',
    ],
  },
];

const About = () => (
  <section
    id="about"
    className="min-h-[90vh] py-16 sm:py-20 px-4 sm:px-8 md:px-14 bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center"
  >
    <div className="max-w-6xl w-full text-center space-y-12">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white/5 backdrop-blur-lg px-6 sm:px-10 py-10 sm:py-12 rounded-3xl shadow-xl border border-white/10"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow">
          About Me
        </h2>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mt-4">
          I’m <span className="text-cyan-300 font-semibold">Manjusha Shrirame</span>, a
          <span className="text-cyan-300 font-semibold"> Java Full Stack Developer</span> with strong fundamentals
          in software development. I love crafting scalable, user-centric solutions that merge frontend clarity
          with backend power.
        </p>
      </motion.div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-2 sm:px-4">
        {sections.map((item, i) => (
          <motion.div
            key={i}
            className="bg-white/10 backdrop-blur-md px-5 py-6 sm:px-6 sm:py-8 rounded-xl border border-white/10 shadow-md hover:shadow-cyan-400/20 transition-all duration-300 text-left space-y-4 transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <div className="text-cyan-400">{item.icon}</div>
            <h3 className="text-lg sm:text-xl font-bold text-white">{item.title}</h3>
            <ul className="text-gray-300 text-sm sm:text-base leading-relaxed space-y-2 list-disc list-inside">
              {item.description.map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
