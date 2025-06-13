import { motion } from 'framer-motion';
import { FolderKanban } from 'lucide-react';

const projects = [
  {
    title: 'Bank Management System',
    description:
      'A web-based application for managing bank operations including customer registration, transactions, and account tracking.',
    techStack: ['Java', 'Servlets', 'JSP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    image: '/images/bank-system.png', // 📌 Replace with actual image path
  },
  {
    title: 'Spotify Clone (Frontend)',
    description:
      'Built a responsive clone of Spotify’s UI with modern web technologies. Implemented navigation, playlist, and audio controls.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    image: '/images/spotify-clone.png', // 📌 Replace with actual image path
  },
  {
    title: 'Student Result Management',
    description:
      'Java-based desktop application to manage and display student results. Includes login, data entry, and record viewing.',
    techStack: ['Core Java', 'Swing', 'JDBC', 'MySQL'],
    image: '/images/student-result.png', // 📌 Replace with actual image path
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen py-24 px-4 sm:px-8 lg:px-14 bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center"
    >
      <div className="max-w-6xl w-full text-center space-y-14">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-pink-400/20 transition duration-300 transform hover:-translate-y-1 text-left"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover object-top border-b border-white/10"
              />
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-pink-400">
                  <FolderKanban size={20} />
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-pink-500/10 text-pink-300 border border-pink-300/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
