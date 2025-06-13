// src/components/Sidebar.jsx
import { Home, User, Settings, Folder, Mail } from 'lucide-react';

const Sidebar = () => {
  const items = [
    { icon: <Home size={22} />, link: '#home' },
    { icon: <User size={22} />, link: '#about' },
    { icon: <Settings size={22} />, link: '#skills' },
    { icon: <Folder size={22} />, link: '#projects' },
    { icon: <Mail size={22} />, link: '#contact' },
  ];

  return (
    <div className="fixed top-6 left-6 h-[50vh] w-14 bg-white/10 backdrop-blur-md rounded-2xl flex flex-col justify-between items-center py-6 shadow-lg z-50">
      <div className="flex flex-col gap-6">
        {items.map((item, i) => (
          <a
            key={i}
            href={item.link}
            className="text-white hover:text-cyan-400 transition-colors"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
