import { siteData } from '../lib/site-data';

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="py-16 bg-transparent">
      <div className="max-w-5xl mx-auto px-4">
        <div className="glass-card p-10 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-extrabold mb-4 text-[#0B5FFF]">
            {siteData.tokenomicsHeadline}
          </h2>
          <p className="text-white/85 mb-8">
            {siteData.tokenomicsDescription}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {siteData.tokenomics.map((item) => (
              <div key={item.title} className="bg-white/5 rounded-2xl p-7 flex flex-col justify-between border border-[#222d44] shadow-sm">
                <span className="text-base text-[#7CFF6A] font-semibold mb-1 uppercase tracking-wide">{item.title}</span>
                <span className="text-2xl font-bold text-white tracking-tight">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
