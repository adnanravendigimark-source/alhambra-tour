import Link from "next/link";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import HeaderNav from "./HeaderNav";
import StickyHeader from "./StickyHeader";
import { getSiteChrome } from "@/lib/homepage";

export default async function Header() {
  const { header } = await getSiteChrome();
  return (
    <StickyHeader>
      <div className="relative z-10 mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo
          src={header.logoImage}
          alt={header.logoAlt || "Alhambra Tour"}
          line1={header.logoLine1 || "ALHAMBRA"}
          line2={header.logoLine2 || "TOUR"}
          theme="light"
        />

        <HeaderNav links={header.navLinks} />

        <div className="flex items-center gap-3">
          <Link
            href={header.ctaHref || "/#tours"}
            className="hidden items-center gap-2.5 rounded-xl bg-[#0F5C56] hover:bg-[#0B4640] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] md:inline-flex"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-[#D4AF6A]">
              <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
              <path d="M13 5v2" />
              <path d="M13 11v2" />
              <path d="M13 17v2" />
            </svg>
            <span>{header.bookNowText || "BOOK TICKETS"}</span>
          </Link>
          <MobileNav navLinks={header.navLinks} ctaText={header.ctaText} ctaHref={header.ctaHref} />
        </div>
      </div>
    </StickyHeader>
  );
}
