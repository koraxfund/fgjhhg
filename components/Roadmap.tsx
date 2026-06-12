import { siteData } from '../lib/site-data';

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-16 bg-transparent">
      <div className="max-w-5xl mx-auto px-4">
        <div className="glass-card p-10 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-[#0B5FFF] to-[#7CFF6A] bg-clip-text text-transparent">
            Roadmap
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {siteData.roadmap.map((step, idx) => (
              <div key={idx} className="bg-white/5 rounded-xl p-7 border border-[#222d44]">
                <span className="text-xs text-[#0B5FFF] uppercase font-semibold tracking-wide mb-1 block">Phase {idx + 1}</span>
                <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                <p className="text-white/80">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
