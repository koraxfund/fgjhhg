import { siteData } from '../lib/site-data';

export default function About() {
  return (
    <section id="about" className="py-16 bg-transparent">
      <div className="max-w-4xl mx-auto px-4">
        <div className="glass-card p-10 rounded-2xl shadow-2xl">
          <h2 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-[#0B5FFF] to-[#7CFF6A] bg-clip-text text-transparent">
            {siteData.about.headline}
          </h2>
          <p className="text-lg text-white/90 mb-4">
            {siteData.about.description}
          </p>
        </div>
      </div>
    </section>
  );
}
