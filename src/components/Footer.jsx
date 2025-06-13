import { ArrowUpCircle } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full text-white text-center mt-16 px-4">
      <div className="max-w-4xl mx-auto py-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg border border-white/10 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-sm text-gray-300">
          © {new Date().getFullYear()} Manjusha Shrirame. All rights reserved.
        </p>

        <div className="flex items-center gap-2">
          <img
            src="/images/technical-one-logo.png" // ✅ Replace with your actual logo path
            alt="Technical One Logo"
            className="h-6 w-6 rounded-full border border-white/20"
          />
          <p className="text-sm text-gray-300">
            Made by <span className="text-cyan-400 font-semibold">Technical One</span>
          </p>
        </div>

        <button
          onClick={scrollToTop}
          className="text-cyan-400 hover:text-cyan-300 transition-all"
          title="Go to Top"
        >
          <ArrowUpCircle size={28} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
