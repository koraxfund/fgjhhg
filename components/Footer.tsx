import Link from 'next/link';
import { siteData } from '../lib/site-data';

export default function Footer() {
  return (
    <footer className="border-t border-[#15213c] py-8 mt-8 bg-[#10192b]/70 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="fgjhhg logo" width={32} height={32} className="rounded" />
          <span className="font-bold text-white text-lg uppercase">fgjhhg</span>
        </div>
        <div className="flex flex-wrap gap-4 text-white/80 text-sm">
          <Link href="/docs" className="hover:text-[#0B5FFF] transition">Docs</Link>
          <Link href="/terms" className="hover:text-[#0B5FFF] transition">Terms</Link>
          <Link href="/privacy" className="hover:text-[#0B5FFF] transition">Privacy</Link>
        </div>
        <div className="flex gap-3 items-center text-white/40">
          <span className="italic">© {new Date().getFullYear()} fgjhhg. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
