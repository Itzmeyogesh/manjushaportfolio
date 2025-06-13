import { motion } from 'framer-motion';
import {
  Braces,
  Database,
  Layers,
  Network,
  Code2,
  GitBranch,
} from 'lucide-react';

const skills = [
  {
    icon: <Braces size={28} />,
    title: 'Core Java & OOP',
    tools: ['OOP', 'Exception Handling', 'Multithreading', 'Collections', 'Streams'],
  },
  {
    icon: <Network size={28} />,
    title: 'Advanced Java',
    tools: ['JDBC', 'Servlets', 'JSP', 'Web App Integration'],
  },
  {
    icon: <Database size={28} />,
    title: 'Databases',
    tools: ['SQL', 'PL/SQL', 'MySQL', 'Oracle', 'Queries', 'Triggers', 'Views'],
  },
  {
    icon: <Layers size={28} />,
    title: 'Spring Framework',
    tools: ['Spring Core', 'Spring Boot Fundamentals'],
  },
  {
    icon: <Code2 size={28} />,
    title: 'Web Development',
    tools: ['HTML', 'CSS', 'JavaScript', 'Apache Tomcat'],
  },
  {
    icon: <GitBranch size={28} />,
    title: 'Tools & IDEs',
    tools: ['GitHub', 'Eclipse', 'IntelliJ IDEA', 'VS Code'],
  },
];

const Skills = () => (
  <section
    id="skills"
    className="min-h-screen py-24 px-4 sm:px-8 lg:px-14 bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center"
  >
    <div className="max-w-6xl w-full text-center space-y-14">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-md"
      >
        My Skills
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2 sm:px-4">
        {skills.map((item, i) => (
          <motion.div
            key={i}
            className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 transform hover:-translate-y-1 text-left space-y-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <div className="text-cyan-400">{item.icon}</div>
            <h3 className="text-xl font-bold text-white">{item.title}</h3>
            <div className="flex flex-wrap gap-2">
              {item.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="bg-cyan-500/10 text-cyan-300 text-xs font-medium px-3 py-1 rounded-full border border-cyan-300/20"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
