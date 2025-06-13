import { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send } from 'lucide-react';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'your_service_id',    // 🔁 Replace with actual service ID
        'your_template_id',   // 🔁 Replace with actual template ID
        form.current,
        'your_user_id'        // 🔁 Replace with actual public key
      )
      .then(
        () => alert('Message sent successfully!'),
        () => alert('Something went wrong, please try again.')
      );
  };

  return (
    <section
      id="contact"
      className="min-h-[45vh] py-16 sm:py-20 px-4 sm:px-8 md:px-14 flex items-center justify-center text-white bg-gradient-to-br from-black via-gray-900 to-black"
    >
      <motion.div
        className="w-full max-w-3xl bg-white/10 backdrop-blur-xl p-6 sm:p-10 rounded-2xl shadow-xl space-y-6 border border-white/10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-400 text-center">
          Get in Touch
        </h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/20 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/20 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/20 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
          ></textarea>
          <button
            type="submit"
            className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-full transition duration-300"
          >
            <Send className="mr-2" size={20} /> Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
