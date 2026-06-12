import { siteData } from '../lib/site-data';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-20 px-4 md:px-0 bg-[url(/hero-bg.svg)] bg-no-repeat bg-right-top bg-cover flex flex-col items-center justify-center text-center min-h-[70vh] select-none">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" />
      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="flex flex-col items-center mb-6">
          <Image src="/logo.svg" width={88} height={88} alt="fgjhhg logo" className="mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-br from-[#0B5FFF] to-[#7CFF6A] bg-clip-text text-transparent mb-4 drop-shadow-xl">
            {siteData.hero.headline}
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 font-medium">
            {siteData.hero.description}
          </p>
          <a href="#about" className="inline-block rounded-full bg-[#0B5FFF] hover:bg-[#7CFF6A] text-white px-9 py-3 font-bold text-lg shadow-xl transition-all duration-150">
            Start Exploring
          </a>
        </div>
      </div>
    </section>
  );
}
