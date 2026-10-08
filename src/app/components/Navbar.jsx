'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-[#0b0e12] border-b border-[#20242b]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            width={28}
            height={28}
            alt="FitLog Logo"
            className="w-6 h-6 md:w-7 md:h-7 object-contain"
          />

          <span className="font-oswald text-lg md:text-xl font-bold text-white tracking-wide">
            FITLOG
          </span>
        </Link>

        <div className="flex items-center gap-1 md:gap-3">
          <Link
            href="/"
            className={`px-3 py-1.5 rounded-md text-xs md:text-sm font-medium transition-colors ${
              pathname === '/'
                ? 'bg-[#1c290b] text-[#b6ff00]'
                : 'text-[#a5a8ad] hover:bg-[#1c290b] hover:text-[#b6ff00]'
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`px-3 py-1.5 rounded-md text-xs md:text-sm font-medium transition-colors ${
              pathname === '/my-plan'
                ? 'bg-[#1c290b] text-[#b6ff00]'
                : 'text-[#a5a8ad] hover:bg-[#1c290b] hover:text-[#b6ff00]'
            }`}
          >
            My Plan
          </Link>
        </div>

        <div className="flex items-center gap-3 md:gap-5">
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-xs md:text-sm text-[#bfc1c5]"
          >
            <span className="hidden sm:inline">Plan</span>

            <span className="w-5 h-5 rounded-full bg-[#b6ff00] text-black flex items-center justify-center text-[10px] font-bold">
              0
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-xs md:text-sm text-[#8d9198]"
          >
            <span className="hidden sm:inline">Saved</span>

            <span className="w-5 h-5 rounded-full border border-[#555a62] flex items-center justify-center text-[10px]">
              0
            </span>
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;