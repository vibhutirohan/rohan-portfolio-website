import { motion } from "framer-motion";

function Achievements() {
  const achievements = [
    {
      title: "HackNewHaven Hackathon",
      organization: "University of New Haven",
      description: "Participated in prestigious hackathon sponsored by Microsoft, IBM, FactSet, Micro Board, and Major League Hacking. Developed collaborative solutions addressing real-world challenges with cutting-edge technology.",
      sponsors: ["Microsoft", "IBM", "FactSet", "Micro Board", "MLH"],
      icon: "🏆",
      color: "from-yellow-400 to-orange-500",
      badge: "Participant"
    },
    {
      title: "Active Hacktoberfest Contributor",
      organization: "Open Source Community",
      description: "Annual contributor to Hacktoberfest, supporting open-source projects and contributing to the global developer community through meaningful code contributions and collaborative development.",
      sponsors: ["GitHub", "DigitalOcean", "Open Source"],
      icon: "🌟",
      color: "from-green-400 to-blue-500",
      badge: "Annual Contributor"
    },
    {
      title: "2nd Runner-Up — Builders Camp Hackathon",
      organization: "AWS + Intel",
      description: "Achieved 2nd Runner-Up position in competitive hackathon focusing on cloud computing and innovative technology solutions using AWS and Intel technologies. Demonstrated excellence in technical implementation and innovation.",
      sponsors: ["AWS", "Intel"],
      icon: "🥉",
      color: "from-purple-400 to-pink-500",
      badge: "2nd Runner-Up"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-6 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Recognition for technical excellence, innovation, and contributions to the developer community through hackathons and open-source projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-slate-700/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Icon and Badge */}
                <div className="flex-shrink-0 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-full flex items-center justify-center text-2xl shadow-lg mb-3`}>
                    {achievement.icon}
                  </div>
                  <span className="inline-block px-3 py-1 bg-slate-600/50 text-gray-300 rounded-full text-xs font-medium">
                    {achievement.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                  <p className="text-purple-400 font-semibold mb-3">{achievement.organization}</p>
                  <p className="text-gray-300 leading-relaxed mb-4">{achievement.description}</p>
                  
                  {/* Sponsors/Partners */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-gray-400 text-sm mr-2">Sponsored by:</span>
                    {achievement.sponsors.map((sponsor, i) => (
                      <motion.span
                        key={sponsor}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-slate-600/50 text-gray-300 rounded-full text-xs font-medium border border-slate-500/30 hover:border-purple-400/50 transition-colors"
                      >
                        {sponsor}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-700/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-300"
            >
              <div className="text-3xl font-bold text-purple-400 mb-2">3+</div>
              <div className="text-gray-300 text-sm">Hackathons</div>
            </motion.div>
          </div>
          
          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-700/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-300"
            >
              <div className="text-3xl font-bold text-pink-400 mb-2">1</div>
              <div className="text-gray-300 text-sm">Runner-Up</div>
            </motion.div>
          </div>
          
          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-700/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-300"
            >
              <div className="text-3xl font-bold text-green-400 mb-2">Annual</div>
              <div className="text-gray-300 text-sm">Open Source</div>
            </motion.div>
          </div>
          
          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-700/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-300"
            >
              <div className="text-3xl font-bold text-yellow-400 mb-2">5+</div>
              <div className="text-gray-300 text-sm">Tech Partners</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/vibhutirohan"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:shadow-lg transition-shadow"
          >
            <span>🐙</span>
            View My Open Source Contributions
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Achievements;