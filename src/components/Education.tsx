import { motion } from "framer-motion";

function Education() {
  const education = [
    {
      degree: "M.S., Data Science",
      institution: "University of New Haven",
      location: "West Haven, CT",
      duration: "Aug 2024 – May 2026 (expected)",
      description: "Advanced coursework in machine learning, data engineering, statistical analysis, and big data technologies. Focus on practical applications of AI and data science in real-world scenarios.",
      highlights: [
        "Advanced Machine Learning & Deep Learning",
        "Big Data Analytics & Cloud Computing", 
        "Statistical Analysis & Data Visualization",
        "Data Engineering & Pipeline Development",
        "AI-driven Solutions & Applications",
        "Research in Scalable Data Systems"
      ],
      current: true,
      gpa: "In Progress"
    },
    {
      degree: "B.E., Information Science",
      institution: "Sapthagiri College of Engineering",
      location: "Bengaluru, India", 
      duration: "Aug 2019 – Aug 2023",
      description: "Comprehensive foundation in computer science, software engineering, and information systems. Strong emphasis on programming, algorithms, database systems, and software development methodologies.",
      highlights: [
        "Software Engineering & System Design",
        "Database Management Systems",
        "Data Structures & Algorithms", 
        "Web Development & Programming",
        "Computer Networks & Security",
        "Object-Oriented Programming"
      ],
      current: false,
      gpa: "Completed"
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Academic foundation in data science, computer science, and information systems with focus on practical applications and industry-relevant skills.
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="relative"
            >
              <div className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 transition-all duration-300 hover:shadow-lg ${
                edu.current 
                  ? 'border-purple-400/50 hover:border-purple-400/70 hover:shadow-purple-500/10' 
                  : 'border-purple-500/20 hover:border-purple-400/50 hover:shadow-purple-500/10'
              }`}>
                {edu.current && (
                  <div className="absolute -top-3 left-6">
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-xs font-medium">
                      Current
                    </span>
                  </div>
                )}
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-purple-400 font-semibold mb-1">{edu.institution}</p>
                    <p className="text-gray-400 text-sm mb-2">{edu.location}</p>
                    <p className="text-gray-400 text-sm font-medium mb-2">{edu.duration}</p>
                    <div className="inline-block px-3 py-1 bg-slate-600/50 text-gray-300 rounded-full text-xs">
                      {edu.gpa}
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <p className="text-gray-300 mb-4 leading-relaxed">{edu.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-3">Key Areas of Study:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {edu.highlights.map((highlight, i) => (
                          <div key={i} className="text-gray-300 text-sm flex items-start">
                            <span className="text-purple-400 mr-3 mt-1 flex-shrink-0">•</span>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic Timeline Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-8 bg-slate-700/30 backdrop-blur-sm border border-purple-500/20 rounded-full px-8 py-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">2019-2023</div>
              <div className="text-gray-400 text-sm">Bachelor's Degree</div>
              <div className="text-gray-500 text-xs">Information Science</div>
            </div>
            <div className="w-8 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-400">2024-2026</div>
              <div className="text-gray-400 text-sm">Master's Degree</div>
              <div className="text-gray-500 text-xs">Data Science</div>
            </div>
          </div>
        </motion.div>

        {/* Academic Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-700/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-300"
            >
              <div className="text-3xl font-bold text-purple-400 mb-2">7+</div>
              <div className="text-gray-300">Years of Education</div>
            </motion.div>
          </div>
          
          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-700/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-300"
            >
              <div className="text-3xl font-bold text-pink-400 mb-2">2</div>
              <div className="text-gray-300">Degrees Pursued</div>
            </motion.div>
          </div>
          
          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-700/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-300"
            >
              <div className="text-3xl font-bold text-cyan-400 mb-2">2026</div>
              <div className="text-gray-300">Expected Graduation</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;