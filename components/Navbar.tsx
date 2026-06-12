import Link from 'next/link';
import Image from 'next/image';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { siteData } from '../lib/site-data';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#tokenomics', label: 'Tokenomics' },
  { href: '#staking', label: 'Staking' },
  { href: '#launch', label: 'Launch' },
  { href: '#contracts', label: 'Contracts' },
  { href: '#roadmap', label: 'Roadmap' },
  { href: '#faq', label: 'FAQ' },
  { href: '/docs', label: 'Docs' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-lg bg-[#10192b]/70 border-b border-[#15213c] shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.svg" width={40} height={40} alt="fgjhhg Logo" />
          <span className="text-xl font-extrabold tracking-tight text-white uppercase">
            {siteData.projectName}
          </span>
        </Link>
        <div className="hidden md:flex gap-6 items-center">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-white/90 hover:text-[#0B5FFF] transition font-medium text-base">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <ConnectButton chainStatus="icon" showBalance={false} />
        </div>
      </nav>
    </header>
  );
}
