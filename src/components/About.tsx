  import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-1">
                <div className="w-full h-full bg-slate-800 rounded-full overflow-hidden">
                  <img 
                    src="/pic.jpeg"
                    alt="Rohan Rajashekhar Vibhuti - Data Science Graduate Student" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
             
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">
              Summary
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Enthusiastic and detail-oriented professional with a strong foundation in data engineering, 
              software development, and AI-driven solutions. Hands-on with full-stack apps, scalable data 
              pipelines, and ML/DL. I combine modern development practices with robust data engineering to 
              deliver high-performance, user-centric, data-driven products across web, mobile, and big-data 
              environments.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">5+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400">3+</div>
                <div className="text-gray-400">Industry Internships</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {['Data Engineering', 'Full-Stack Development', 'Machine Learning', 'Cloud Computing'].map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;