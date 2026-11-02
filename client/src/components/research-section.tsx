import { motion } from "framer-motion";
import { ExternalLink, BookOpen, FileText, GraduationCap } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

export default function ResearchSection() {
  return (
    <section id="research" className="relative py-24 bg-white dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-300 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-blue-500/5 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
        
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-medium mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Publications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight text-slate-900 dark:text-white">
            Research & Thesis
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            Peer-reviewed research and undergraduate thesis in optical biosensors and nanolayers.
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Research Article */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="bg-slate-50/80 dark:bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 hover:border-blue-500/40 shadow-sm dark:shadow-xl transition-all"
          >
            <div className="flex items-start gap-5">
              <div className="hidden sm:flex p-3.5 bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 rounded-xl text-blue-600 dark:text-blue-400 flex-shrink-0">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2.5 mb-3">
                  <span className="px-3 py-1 bg-blue-50 dark:bg-blue-500/15 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider rounded-full border border-blue-200 dark:border-blue-500/30">
                    Peer-Reviewed Journal Article
                  </span>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Physica Scripta (IOP)</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 leading-snug">
                  A high-performance biosensor design for waterborne bacteria detection based on one-dimensional photonic crystal
                </h3>

                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed text-sm sm:text-base font-light">
                  Theoretical modeling and simulation of a high-performance optical biosensor for detecting waterborne bacteria, designed using one-dimensional photonic crystals to enhance sensitivity and detection limits.
                </p>

                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="https://iopscience.iop.org/article/10.1088/1402-4896/ace5f5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm hover:shadow-md transition-all min-h-[40px]"
                >
                  <span>Read Full Article (IOP Science)</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Thesis */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ y: -4 }}
            className="bg-slate-50/80 dark:bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 hover:border-indigo-500/40 shadow-sm dark:shadow-xl transition-all"
          >
            <div className="flex items-start gap-5">
              <div className="hidden sm:flex p-3.5 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 rounded-xl text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider rounded-full border border-indigo-200 dark:border-indigo-500/30">
                    Undergraduate Thesis
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 leading-snug">
                  Optical properties of a defective one-dimensional photonic crystal containing graphene nanolayers
                </h3>

                <div className="space-y-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base font-light">
                  <p className="font-medium text-slate-800 dark:text-slate-200 text-sm">Key Research Contributions:</p>
                  <ul className="space-y-2.5 pl-1">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 bg-indigo-600 dark:bg-indigo-400 rounded-full mt-2.5 flex-shrink-0"></span>
                      <span>
                        Study of variation in conductivity and parallel permittivity (real and imaginary) of graphene with changing frequency and gate voltage.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 bg-indigo-600 dark:bg-indigo-400 rounded-full mt-2.5 flex-shrink-0"></span>
                      <span>
                        Study of transmission and reflection in the photonic crystal across different graphene layer counts and incident angles.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
