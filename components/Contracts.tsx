import { siteData } from '../lib/site-data';

export default function Contracts() {
  return (
    <section id="contracts" className="py-16 bg-transparent">
      <div className="max-w-4xl mx-auto px-4">
        <div className="glass-card p-10 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-extrabold mb-4 text-[#7CFF6A]">
            {siteData.contracts.headline}
          </h2>
          <p className="text-white/80 mb-6">
            {siteData.contracts.description}
          </p>
          <div className="mt-8 grid gap-5">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
              <span className="font-medium text-white/85 min-w-[170px]">Token Contract:</span>
              <span className="text-white/60 italic">To be published after deployment</span>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
              <span className="font-medium text-white/85 min-w-[170px]">Staking Contract:</span>
              <span className="text-white/60 italic">To be published after deployment</span>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
              <span className="font-medium text-white/85 min-w-[170px]">Vault Contract:</span>
              <span className="text-white/60 italic">To be published after deployment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
