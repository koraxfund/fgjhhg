import { siteData } from '../lib/site-data';

export default function Staking() {
  return (
    <section id="staking" className="py-16 bg-transparent">
      <div className="max-w-4xl mx-auto px-4">
        <div className="glass-card p-10 rounded-2xl shadow-lg flex flex-col gap-3">
          <h2 className="text-3xl font-extrabold mb-4 text-[#7CFF6A]">
            {siteData.staking.headline}
          </h2>
          <p className="text-white/85 mb-4">
            {siteData.staking.description}
          </p>
          <div className="mt-6 rounded-lg bg-white/5 p-7 border border-[#222d44] flex flex-col gap-2">
            <span className="font-semibold text-white">Staking Status:</span>
            <span className="text-[#0B5FFF] font-medium">Staking contracts and guides will be published after deployment. Stay tuned for updates and audit results.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
