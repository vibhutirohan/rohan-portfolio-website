import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const openResume = () => {
    window.open(
      "https://drive.google.com/file/d/1ATGD_dbx-61nSC4QFNWFRS2HoBxBr0VZ/view?usp=sharing",
      "_blank"
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "experience",
        "projects",
        "skills",
        "education",
        "achievements",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 w-full z-50"
    >
      {/* Transparent veil that matches the hero palette */}
      <div className="absolute inset-0 -z-10 pointer-events-none backdrop-blur-sm bg-gradient-to-b from-slate-950/70 via-indigo-950/35 to-transparent border-b border-white/5" />

      <nav className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          {/* Brand — bigger */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer tracking-tight"
            onClick={() => scrollToSection("home")}
          >
            Rohan Vibhuti
          </motion.div>

          {/* Desktop Navigation (bigger items) */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => scrollToSection(item.id)}
                className={`px-1 py-1 text-base xl:text-lg transition-colors ${
                  activeSection === item.id
                    ? "text-purple-300 font-semibold"
                    : "text-gray-200 hover:text-purple-300"
                }`}
              >
                {item.label}
              </motion.button>
            ))}

            {/* Gradient Resume button */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={openResume}
              className="px-5 py-2.5 text-base xl:text-lg font-semibold text-white rounded-xl 
                         shadow-lg shadow-fuchsia-500/10 ring-1 ring-white/10
                         bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500
                         hover:from-purple-400 hover:via-fuchsia-500 hover:to-pink-500
                         transition"
            >
              Resume
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
              aria-label="Toggle mobile menu"
            >
              <div className="w-7 h-7 flex flex-col justify-center items-center">
                <span
                  className={`bg-white block transition-all duration-300 ease-out h-0.5 w-7 rounded-sm ${
                    isMobileMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                  }`}
                />
                <span
                  className={`bg-white block transition-all duration-300 ease-out h-0.5 w-7 rounded-sm my-0.5 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`bg-white block transition-all duration-300 ease-out h-0.5 w-7 rounded-sm ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                  }`}
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu (bigger items + gradient resume) */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="lg:hidden mt-4 pb-5 border-t border-white/10"
          >
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-2 py-2 text-lg transition-colors ${
                    activeSection === item.id
                      ? "text-purple-300 font-semibold"
                      : "text-gray-200 hover:text-purple-300"
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}

              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={openResume}
                className="mt-2 px-5 py-2.5 text-lg font-semibold text-white rounded-xl w-fit
                           shadow-lg shadow-fuchsia-500/10 ring-1 ring-white/10
                           bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500
                           hover:from-purple-400 hover:via-fuchsia-500 hover:to-pink-500
                           transition"
              >
                Resume
              </motion.button>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}

export default Header;
