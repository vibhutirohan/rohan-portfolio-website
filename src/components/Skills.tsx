import { motion } from "framer-motion";

type SkillItem = { label: string; icon?: string; alt?: string };
type SkillCategory = { title: string; items: SkillItem[] };

const CATEGORIES: SkillCategory[] = [
  {
    title: "Data Science / Analytics",
    items: [
      { label: "Statistics", icon: "https://img.icons8.com/fluency/28/statistics.png" },
      { label: "Probability" }, // text only
      { label: "Data Mining", icon: "https://img.icons8.com/color/28/data-configuration.png" },
      { label: "Maths", icon: "https://img.icons8.com/color/28/math.png" },
      { label: "Cloud", icon: "https://img.icons8.com/color/28/cloud.png" },
      { label: "Big Data" }, // text only
    ],
  },
  {
    title: "Machine Learning",
    items: [
      { label: "Python", icon: "https://img.icons8.com/color/28/python--v1.png" },
      { label: "TensorFlow", icon: "https://img.icons8.com/color/28/tensorflow.png" },
      { label: "Keras", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-plain.svg" },
      { label: "Algorithms", icon: "https://img.icons8.com/fluency/28/flow-chart.png" },
      { label: "Neural Networks", icon: "https://img.icons8.com/color/28/artificial-intelligence.png" },
      { label: "AI", icon: "https://img.icons8.com/fluency/28/bot.png" },
    ],
  },
  {
    title: "Tools",
    items: [
      { label: "AWS", icon: "https://img.icons8.com/color/28/amazon-web-services.png" },
      { label: "Docker", icon: "https://img.icons8.com/color/28/docker.png" },
      {
        label: "Postman",
        icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png",
      },
      { label: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { label: "Git & GitHub", icon: "https://img.icons8.com/color/28/github.png" },
      { label: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
    ],
  },
  {
    title: "Databases",
    items: [
      { label: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { label: "MS SQL", icon: "https://img.icons8.com/color/28/microsoft-sql-server.png" },
      { label: "NoSQL", icon: "https://img.icons8.com/fluency/28/database.png" },
      { label: "Airtable", icon: "https://cdn.simpleicons.org/airtable/18BFFF" },
      { label: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ],
  },
  {
    title: "Coding Languages",
    items: [
      { label: "Python", icon: "https://img.icons8.com/color/28/python--v1.png" },
      { label: "HTML", icon: "https://img.icons8.com/color/28/html-5--v1.png" },
      { label: "CSS", icon: "https://img.icons8.com/color/28/css3.png" },
      { label: "JavaScript", icon: "https://img.icons8.com/color/28/javascript--v1.png" },
      { label: "Java", icon: "https://img.icons8.com/color/28/java-coffee-cup-logo--v1.png" },
      { label: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    ],
  },
  {
    title: "Visualization",
    items: [
      { label: "Power BI", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/powerbi.svg" },
      { label: "Matplotlib", icon: "https://img.icons8.com/color/28/combo-chart--v1.png" },
      { label: "Excel", icon: "https://img.icons8.com/color/28/microsoft-excel-2019--v1.png" },
      { label: "Google Charts", icon: "https://img.icons8.com/color/28/google-analytics.png" },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Technical Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6" />
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Discover the stack that powers my data, development, and deployment projects.
          </p>
        </motion.div>

        {/* Glass Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={cardVariants}
              className="bg-slate-800/40 backdrop-blur border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-purple-500/10 hover:border-purple-400/30 transition-all"
            >
              <h4 className="text-white text-xl font-semibold mb-4">{cat.title}</h4>
              <div className="flex flex-wrap gap-3">
                {cat.items.map((item) => (
                  <motion.span
                    key={`${cat.title}-${item.label}`}
                    whileHover={{ scale: 1.04, y: -2 }}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-slate-700/40 border border-white/10 text-gray-200 text-sm hover:border-purple-400/40 hover:bg-slate-700/60 transition-colors"
                  >
                    {item.icon ? (
                      <img
                        src={item.icon}
                        width={24}
                        height={24}
                        loading="lazy"
                        alt={item.alt || item.label}
                        className="select-none"
                      />
                    ) : null}
                    {item.label}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
