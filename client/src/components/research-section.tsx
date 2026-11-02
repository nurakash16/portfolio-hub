import { ExternalLink, BookOpen, FileText } from "lucide-react";

export default function ResearchSection() {
  return (
    <section id="research" className="py-20 bg-white border-t border-slate-200">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-slate-900 tracking-tight">
            Research Publications & Thesis
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-base">
            Peer-reviewed research and undergraduate thesis in optical biosensors and nanolayers.
          </p>
        </div>

        <div className="space-y-8">
          {/* Research Article */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:border-slate-300 transition-colors">
            <div className="flex items-start gap-5">
              <div className="hidden sm:flex p-3.5 bg-blue-50 border border-blue-100 rounded-xl text-blue-600 flex-shrink-0">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="mb-2.5">
                  <span className="px-3 py-1 bg-blue-50 text-blue-800 text-xs font-semibold uppercase tracking-wider rounded-full border border-blue-100">
                    Research Article
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                  A high-performance biosensor design for waterborne bacteria detection based on one-dimensional photonic crystal
                </h3>

                <p className="text-slate-600 mb-5 leading-relaxed text-sm sm:text-base">
                  Theoretical modeling and simulation of a high-performance optical biosensor for detecting waterborne bacteria, designed using one-dimensional photonic crystals to enhance sensitivity and detection limits.
                </p>

                <a
                  href="https://iopscience.iop.org/article/10.1088/1402-4896/ace5f5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors focus:outline-none focus:underline"
                >
                  <span>Read Full Article (Physica Scripta)</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Thesis */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:border-slate-300 transition-colors">
            <div className="flex items-start gap-5">
              <div className="hidden sm:flex p-3.5 bg-indigo-50 border border-indigo-100 rounded-xl text-indigo-600 flex-shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="mb-2.5">
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-800 text-xs font-semibold uppercase tracking-wider rounded-full border border-indigo-100">
                    Undergraduate Thesis
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                  Optical properties of a defective one-dimensional photonic crystal containing graphene nanolayers
                </h3>

                <div className="space-y-3 text-slate-600 text-sm sm:text-base">
                  <p className="font-semibold text-slate-800 text-sm">Key Research Areas:</p>
                  <ul className="space-y-2 pl-1">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Study of variation in conductivity and parallel permittivity (real and imaginary) of graphene with changing frequency and gate voltage.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Study of transmission and reflection in the photonic crystal across different graphene layer counts and incident angles.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
