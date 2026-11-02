import { BookOpen, Layers, GitBranch, Calendar } from "lucide-react";

export default function NowSection() {
  // Items in progress require verified repository URLs. Unlinked items are kept queued until repo commits exist.
  const activeProjects: Array<{
    title: string;
    status: "In progress" | "Prototype" | "Planned";
    started: string;
    description: string;
    doneSoFar: string;
    nextStep: string;
    stack: string[];
    repoUrl?: string;
  }> = [];

  const learningTopics = [
    {
      topic: "Docker & Nginx Deployment",
      practicingIn: "Finance Tracker containerized environment"
    },
    {
      topic: "LLM Tool Calling & Structured Outputs",
      practicingIn: "Finance Tracker chat assistant experiments"
    },
    {
      topic: "Approval Workflow Design for Business Systems",
      practicingIn: "Maintenance and Operations platform architecture"
    }
  ];

  return (
    <section id="now" className="py-20 bg-white border-t border-slate-200">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 mb-3 border border-slate-200">
            <Calendar className="w-3.5 h-3.5 text-slate-500" />
            <span>Last updated: November 2026</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-slate-900 tracking-tight">
            Building & Learning
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-base">
            What I&apos;m working on outside my job. Everything here is in progress, uses simulated data, and links to its repository.
          </p>
        </div>

        {/* Active Projects (rendered only when repository URL exists) */}
        {activeProjects.length > 0 ? (
          <div className="space-y-6 mb-12">
            {activeProjects.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-xl p-6 border border-slate-200"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                    <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-slate-200 text-slate-800">
                      {item.status}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500">Started: {item.started}</span>
                </div>
                <p className="text-slate-700 text-sm mb-4 leading-relaxed">{item.description}</p>
                <div className="grid sm:grid-cols-2 gap-4 text-xs text-slate-600 mb-4 bg-white p-3.5 rounded-lg border border-slate-200">
                  <div>
                    <span className="font-semibold text-slate-800 block mb-1">Done so far:</span>
                    <span>{item.doneSoFar}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-800 block mb-1">Next:</span>
                    <span>{item.nextStep}</span>
                  </div>
                </div>
                {item.repoUrl && (
                  <a
                    href={item.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:underline"
                  >
                    <GitBranch className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        ) : null}

        {/* Currently Learning */}
        <div className="bg-slate-50/80 rounded-2xl p-6 sm:p-8 border border-slate-200">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Current Technical Study</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {learningTopics.map((item, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1.5">{item.topic}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <span className="font-semibold text-slate-700">Practicing in: </span>
                    {item.practicingIn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

