import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { MdEmail, MdLocationOn } from "react-icons/md";

function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const openResume = () => {
    window.open(
      "https://drive.google.com/file/d/1ATGD_dbx-61nSC4QFNWFRS2HoBxBr0VZ/view?usp=sharing",
      "_blank"
    );
  };

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const socialLinks = [
    { name: "GitHub", icon: <FaGithub />, href: "https://github.com/vibhutirohan" },
    { name: "LinkedIn", icon: <FaLinkedin />, href: "https://www.linkedin.com/in/rohan-vibhuti/" },
    { name: "Twitter / X", icon: <FaXTwitter />, href: "https://x.com/vibhutirohan" },
    { name: "Instagram", icon: <FaInstagram />, href: "https://www.instagram.com/rohan_vibhuti_/" },
    { name: "Email", icon: <MdEmail />, href: "mailto:rohanvibhuti666@gmail.com" },
  ];

  const quickLinks = [
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Education", id: "education" },
    { name: "Achievements", id: "achievements" },
    { name: "Contact", id: "contact" },
  ];

  // Full address -> Google Maps query URL (opens in new tab)
  const mapsHref =
    "https://www.google.com/maps?q=157+Lamson+Street,+West+Haven,+Connecticut,+United+States+06516";

  return (
    <>
      <footer className="py-12 px-6 border-t border-purple-500/20 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Rohan&apos;s Portfolio
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openResume}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold text-sm shadow-lg hover:shadow-purple-500/25 transition-shadow"
              >
                View Resume
              </motion.button>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {quickLinks.map((link) => (
                  <motion.button
                    key={link.name}
                    whileHover={{ x: 5 }}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-gray-400 hover:text-purple-400 transition-colors text-sm text-left"
                  >
                    {link.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Social / Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-4">Let's Connect</h4>

              {/* Social icons (real SVG) */}
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-slate-700/50 rounded-full flex items-center justify-center hover:bg-purple-500/20 transition-colors border border-slate-600/50 hover:border-purple-400/50 text-xl text-gray-200"
                    title={social.name}
                    aria-label={`Connect with me on ${social.name}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>

              {/* Contact info */}
              <div className="mt-6 space-y-2 text-sm">
                <a
                  href="mailto:rohanvibhuti666@gmail.com"
                  className="text-gray-300 hover:text-purple-400 transition-colors inline-flex items-center gap-2"
                >
                  <MdEmail className="text-lg" />
                  rohanvibhuti666@gmail.com
                </a>

                {/* Address opens Google Maps */}
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-purple-400 transition-colors inline-flex items-center gap-2"
                  title="Open in Google Maps"
                >
                  <MdLocationOn className="text-lg" />
                  Connecticut, United States
                </a>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-gray-700 text-center"
          >
            <p className="text-gray-400 text-sm">
              © {currentYear} Rohan Vibhuti. Built with ❤️ using React, TypeScript & Tailwind CSS.
            </p>
          </motion.div>
        </div>
      </footer>

      {/* Back to Top */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-purple-500/25 transition-shadow z-50"
          aria-label="Back to top"
        >
          ↑
        </motion.button>
      )}
    </>
  );
}

export default Footer;
