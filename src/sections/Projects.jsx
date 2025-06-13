import { motion } from 'framer-motion';
import { FolderKanban } from 'lucide-react';

// ✅ Import images from assets
import bankSystemImg from '../assets/bank-management-system.jpg';
import spotifyCloneImg from '../assets/spotify-clone.jpg';
import studentResultImg from '../assets/Student-management-system.jpg';

const projects = [
  {
    title: 'Bank Management System',
    description:
      'A web-based application for managing bank operations including customer registration, transactions, and account tracking.',
    techStack: ['Java', 'Servlets', 'JSP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    image: bankSystemImg,
  },
  {
    title: 'Spotify Clone (Frontend)',
    description:
      'Built a responsive clone of Spotify’s UI with modern web technologies. Implemented navigation, playlist, and audio controls.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    image: spotifyCloneImg,
  },
  {
    title: 'Student Result Management',
    description:
      'Java-based desktop application to manage and display student results. Includes login, data entry, and record viewing.',
    techStack: ['Core Java', 'Swing', 'JDBC', 'MySQL'],
    image: studentResultImg,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-[45vh] py-16 sm:py-20 px-4 sm:px-6 md:px-10 bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center"
    >
      <div className="w-full max-w-screen-xl mx-auto text-center space-y-14">
        {/* Title */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-md hover:shadow-pink-400/20 transition-transform duration-300 transform hover:-translate-y-1 text-left"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-44 sm:h-48 w-full object-cover object-top border-b border-white/10"
              />
              <div className="p-5 sm:p-6 space-y-3">
                <div className="flex items-center gap-2 text-pink-400">
                  <FolderKanban size={20} />
                  <h3 className="text-lg sm:text-xl font-semibold">{project.title}</h3>
                </div>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs sm:text-sm px-3 py-1 rounded-full bg-pink-500/10 text-pink-300 border border-pink-300/20"
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
