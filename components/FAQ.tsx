import { siteData } from '../lib/site-data';

export default function FAQ() {
  return (
    <section id="faq" className="py-16 bg-transparent">
      <div className="max-w-4xl mx-auto px-4">
        <div className="glass-card p-10 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-extrabold mb-4 text-[#0B5FFF]">
            {siteData.faq.headline}
          </h2>
          <p className="text-white/85 mb-8">{siteData.faq.description}</p>
          <div className="divide-y divide-[#15213c]/60">
            {siteData.faq.questions.map((item, idx) => (
              <div key={idx} className="py-5">
                <h3 className="text-lg font-semibold text-[#7CFF6A] mb-2">{item.q}</h3>
                <p className="text-white/85">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
