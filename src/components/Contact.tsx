import { motion } from "framer-motion";
import { MdOpenInNew } from "react-icons/md";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSf8ZfFriIThYnc_VnRISNGoGplk7TUjORYcI8TdYzEctGDyEA/viewform?usp=sharing&ouid=114072679703674455575";

function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto" />
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mt-6">
            Prefer a quick, reliable way? Use my Google Form to reach me directly. I typically
            respond within <span className="text-purple-300 font-semibold">24 hours - 48 hours</span>.
          </p>
        </motion.div>

        {/* Single CTA panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-slate-700/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 relative overflow-hidden"
        >
          <h3 className="text-xl font-bold text-white mb-4">Send a Message</h3>

          <motion.a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex w-full items-center justify-between gap-3 rounded-2xl px-5 py-4
                       bg-slate-800/60 border border-purple-500/30
                       hover:border-purple-400/60 transition-all"
            aria-label="Open Google Form in a new tab"
            title="Open Google Form"
          >
            {/* hover glow */}
            <span
              className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 blur-lg
                         transition-opacity duration-300
                         group-hover:opacity-100
                         bg-[radial-gradient(120px_80px_at_20%_40%,rgba(168,85,247,.35),transparent_60%),radial-gradient(120px_80px_at_80%_60%,rgba(236,72,153,.35),transparent_60%)]"
            />
            <div className="relative flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl
                           bg-gradient-to-br from-purple-500/30 to-pink-500/30
                           border border-purple-400/40 text-purple-200
                           group-hover:from-purple-500/50 group-hover:to-pink-500/50 transition-colors"
              >
                <MdOpenInNew className="text-xl" />
              </div>
              <div className="text-left">
                <div className="text-white font-semibold">Open Contact Form</div>
                <div className="text-xs text-gray-400">Opens in new tab</div>
              </div>
            </div>
            <div className="relative">
              <span className="text-purple-200 transition-transform group-hover:translate-x-1">
                ➜
              </span>
            </div>
          </motion.a>

          <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-purple-500/40 to-transparent animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
