import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { MailIcon } from "@/components/icons";
import { getContactPage } from "@/lib/contact";
import { getIconComponent } from "@/lib/iconMap";
import { resolveRobots, resolveCanonical, resolveOg } from "@/lib/seo";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const contact = await getContactPage();
  const og = resolveOg(
    { ogTitle: contact.ogTitle, ogDescription: contact.ogDescription, ogImage: contact.ogImage },
    { title: contact.metaTitle, description: contact.metaDescription }
  );
  return {
    title: contact.metaTitle,
    description: contact.metaDescription,
    alternates: { canonical: resolveCanonical("/contact", contact.canonicalUrl) },
    robots: resolveRobots(contact.noIndex, contact.noFollow),
    openGraph: { title: og.title, description: og.description, url: "/contact", images: og.image ? [{ url: og.image }] : undefined },
    twitter: { card: "summary_large_image", title: og.title, description: og.description, images: og.image ? [og.image] : undefined },
  };
}

export default async function ContactPage() {
  const contact = await getContactPage();

  return (
    <>
      <Header />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]} />
      <main className="mx-auto max-w-3xl px-4 pt-6 pb-16 sm:px-6 sm:pb-24">
        <div className="text-center">
          <span className="inline-block rounded-md bg-[#D6E8E4] border border-[#0F5C56]/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0F5C56]">
            {contact.heroEyebrow}
          </span>
          <h1 className="mt-3 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
            {contact.heroHeading}
          </h1>
          <div
            className="rich-content mx-auto mt-3 max-w-md text-slate-600"
            dangerouslySetInnerHTML={{ __html: contact.heroSubheading }}
          />
        </div>

        {/* Primary email card */}
        <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-[#D6E8E4] bg-gradient-to-br from-[#D6E8E4]/50 via-white to-[#FAFAF8] p-10 text-center shadow-md">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F5C56] text-white shadow-lg shadow-[#0F5C56]/25">
            <MailIcon className="h-7 w-7" />
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">{contact.emailLabel}</p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-1 block break-all font-display text-2xl font-bold text-[#0F5C56] hover:underline"
            >
              {contact.email}
            </a>
          </div>
          <p className="text-xs text-slate-500 max-w-sm">{contact.emailNote}</p>
        </div>

        {/* What we can help with */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {contact.reasons.map(({ icon, title, body }) => {
            const Icon = getIconComponent(icon);
            return (
              <div key={title} className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm text-center sm:text-left">
                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-[#D6E8E4] text-[#0F5C56] sm:mx-0">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-4 text-sm font-bold text-slate-900">{title}</p>
                <div
                  className="rich-content mt-1.5 text-xs text-slate-600 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: body }}
                />
              </div>
            );
          })}
        </div>

        <div
          className="rich-content mt-12 border-t border-slate-200/80 pt-8 text-center text-sm text-slate-500"
          dangerouslySetInnerHTML={{ __html: contact.footerNote }}
        />

        <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl bg-gradient-to-r from-[#0F5C56] to-[#29302A] p-8 text-center text-white shadow-xl">
          <p className="text-base font-bold">{contact.ctaHeading}</p>
          <a
            href="/#tours"
            className="rounded-xl bg-[#B8863B] hover:bg-[#96702E] px-7 py-3 text-sm font-bold text-white shadow-md transition hover:scale-[1.02]"
          >
            {contact.ctaButtonLabel} →
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
