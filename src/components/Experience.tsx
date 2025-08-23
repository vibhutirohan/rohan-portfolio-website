import { motion } from "framer-motion";

function Experience() {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Uplaud Inc",
      location: "Remote, Austin, TX",
      duration: "May 2025 – Aug 2025",
      description: "Built secure onboarding, dynamic leaderboards, and custom dashboards for a social review platform; improved load performance and integrated user feedback.",
      technologies: ["React.js", "Node.js", "Express.js", "Airtable API", "Vercel", "Git/GitHub"],
      achievements: [
        "Built secure onboarding system for social review platform",
        "Developed dynamic leaderboards with real-time updates",
        "Created custom dashboards with personalized user experiences",
        "Improved application load performance through optimization",
        "Integrated comprehensive user feedback mechanisms"
      ]
    },
    {
      title: "Full Stack Developer Intern",
      company: "Cognizant",
      location: "Chennai, India",
      duration: "Dec 2023 – Jun 2024",
      description: "Scalable web apps with REST APIs, secure auth, microservices; database design/optimization, data migration, security best practices; mentored juniors.",
      technologies: ["Java", "Spring Boot", "Angular", "MySQL", "Microservices", "REST APIs"],
      achievements: [
        "Developed scalable web applications using microservices architecture",
        "Implemented secure authentication and authorization systems",
        "Built comprehensive REST APIs for seamless integration",
        "Optimized database design and managed data migration projects",
        "Applied security best practices across all development phases",
        "Mentored junior developers on coding standards and practices"
      ]
    },
    {
      title: "Machine Learning Intern",
      company: "Take It Smart",
      location: "Bengaluru, India",
      duration: "May 2022 – Jun 2022",
      description: "Accessibility-focused mobile assistant for visually impaired users with real-time navigation and voice guidance; optimized ML inference and UX.",
      technologies: ["Python", "OpenCV", "NLP", "Machine Learning", "Mobile Development", "Computer Vision"],
      achievements: [
        "Developed accessibility-focused mobile assistant application",
        "Implemented real-time navigation using computer vision",
        "Created voice guidance system with natural language processing",
        "Optimized machine learning model inference for mobile deployment",
        "Conducted extensive user testing with visually impaired users",
        "Applied UX design principles for accessibility-first development"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-slate-700/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="grid md:grid-cols-4 gap-6">
                <div className="md:col-span-1">
                  <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                  <p className="text-purple-400 font-semibold mb-1">{exp.company}</p>
                  <p className="text-gray-400 text-sm mb-2">{exp.location}</p>
                  <p className="text-gray-400 text-sm font-medium">{exp.duration}</p>
                </div>
                
                <div className="md:col-span-3">
                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-3">Stack:</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech) => (
                        <motion.span 
                          key={tech}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30 hover:bg-purple-500/30 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start">
                          <span className="text-purple-400 mr-3 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;