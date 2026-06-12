import { siteData } from '../lib/site-data';

export default function LaunchSection() {
  return (
    <section id="launch" className="py-16 bg-transparent">
      <div className="max-w-4xl mx-auto px-4">
        <div className="glass-card p-10 rounded-2xl shadow-2xl">
          <h2 className="text-3xl font-extrabold mb-4 text-[#0B5FFF]">
            {siteData.launch.headline}
          </h2>
          <p className="text-white/85 mb-4">
            {siteData.launch.description}
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <a
              href="#"
              className="rounded-full bg-[#0B5FFF] hover:bg-[#7CFF6A] text-white font-bold px-9 py-3 transition shadow-xl cursor-not-allowed opacity-60"
              aria-disabled="true"
            >
              Launch Coming Soon
            </a>
            <a
              href="/docs"
              className="rounded-full border border-[#0B5FFF] text-[#0B5FFF] hover:bg-[#0B5FFF] hover:text-white font-bold px-9 py-3 transition shadow"
            >
              Read Docs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
