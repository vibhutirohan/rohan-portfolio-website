import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Retail Sales ETL & Power BI Visualization",
      date: "Apr 2025",
      description: "End-to-end ETL pipeline on AWS (S3, Glue, Athena) with interactive Power BI dashboards featuring KPIs: revenue, trends, store performance, and payment methods analysis.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["AWS S3", "AWS Glue", "AWS Athena", "Power BI", "ETL", "Data Analytics"],
      github: "https://github.com/vibhutirohan/retail-insights-etl-powerbi",
      demo: "https://github.com/vibhutirohan/retail-insights-etl-powerbi"
    },
    {
      title: "Book My Train",
      date: "Jun 2024",
      description: "Angular, REST APIs, MySQL, microservices; modern train reservation system; accessibility-minded UI; Agile delivery.",
      image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Angular", "REST APIs", "MySQL", "Microservices", "Spring Boot", "Java"],
      github: "https://github.com/vibhutirohan/Train-Reservation-System-using-Angular-",
      demo: "https://github.com/vibhutirohan/Train-Reservation-System-using-Angular-"
    },
    {
      title: "Emotion Detection using CNN",
      date: "May 2023",
      description: "TensorFlow/Keras CNN with preprocessing, augmentation, hyperparameter tuning; +50% accuracy uplift, F1 70%.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["TensorFlow", "Keras", "Python", "CNN", "Computer Vision", "Deep Learning"],
      github: "https://github.com/vibhutirohan/Emotion-Detection-Analysis-Using-CNN-Algorithm-",
      demo: "https://github.com/vibhutirohan/Emotion-Detection-Analysis-Using-CNN-Algorithm-"
    },
    {
      title: "Virtual Assistant App",
      date: "Aug 2022",
      description: "Android app: voice-enabled location, weather, date/time, battery; real-user testing; accessibility-first design.",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Android", "Java", "Voice Recognition", "Accessibility", "Mobile Development", "UX Design"],
      github: "https://github.com/vibhutirohan/virtualassistantapp",
      demo: "https://github.com/vibhutirohan/virtualassistantapp"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            A showcase of my technical projects spanning data engineering, machine learning, full-stack development, and accessibility-focused solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl overflow-hidden hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={`${project.title} project screenshot`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-purple-500/80 text-white rounded-full text-xs font-medium">
                    {project.date}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <motion.span 
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-4 py-2 border border-purple-400 text-purple-400 rounded-lg text-center text-sm font-medium hover:bg-purple-400 hover:text-white transition-colors"
                  >
                    View Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-center text-sm font-medium hover:shadow-lg transition-shadow"
                  >
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Profile Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/vibhutirohan"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700/50 text-white rounded-lg font-medium hover:bg-slate-600/50 transition-colors border border-slate-600/50 hover:border-purple-400/50"
          >
            <span>🐙</span>
            View More Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;