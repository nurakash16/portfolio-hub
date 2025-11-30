import { ExternalLink, BookOpen, FileText } from "lucide-react";

export default function ResearchSection() {
    return (
        <section id="research" className="section-padding relative overflow-hidden bg-white">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                        Research
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                </div>

                <div className="max-w-4xl mx-auto space-y-12">

                    {/* Article Section */}
                    <div className="modern-card p-8 md:p-10 group hover:scale-[1.02] transition-all duration-300">
                        <div className="flex items-start gap-6">
                            <div className="hidden md:flex p-4 bg-blue-100 rounded-2xl text-blue-600 group-hover:rotate-6 transition-transform duration-300">
                                <BookOpen className="w-8 h-8" />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider rounded-full">
                                        Article
                                    </span>
                                    <span className="text-gray-500 text-sm font-medium">Published in IOP Science</span>
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                                    A high-performance biosensor design for waterborne bacteria detection based on one-dimensional photonic crystal
                                </h3>

                                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                                    This research presents a novel biosensor design utilizing one-dimensional photonic crystals for the efficient detection of waterborne bacteria. The study explores the sensitivity and performance characteristics of the proposed sensor structure.
                                </p>

                                <a
                                    href="https://iopscience.iop.org/article/10.1088/1402-4896/ace5f5"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors group/link"
                                >
                                    Read Full Article
                                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Thesis Section */}
                    <div className="modern-card p-8 md:p-10 group hover:scale-[1.02] transition-all duration-300">
                        <div className="flex items-start gap-6">
                            <div className="hidden md:flex p-4 bg-purple-100 rounded-2xl text-purple-600 group-hover:-rotate-6 transition-transform duration-300">
                                <FileText className="w-8 h-8" />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider rounded-full">
                                        Thesis
                                    </span>
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 leading-tight group-hover:text-purple-600 transition-colors">
                                    Optical properties of a defective one-dimensional photonic crystal containing graphene nanolayers
                                </h3>

                                <div className="space-y-4 text-gray-600">
                                    <p className="font-semibold text-gray-800">Key Research Areas:</p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <span className="mt-2 w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0"></span>
                                            <span className="leading-relaxed">
                                                Study of variation in conductivity and parallel permittivity (real and imaginary) of graphene with the change in frequency and gate voltage.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="mt-2 w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0"></span>
                                            <span className="leading-relaxed">
                                                Study of transmission and reflection in the photonic crystal for different numbers of graphene layers and for different angles by changing the frequency.
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
