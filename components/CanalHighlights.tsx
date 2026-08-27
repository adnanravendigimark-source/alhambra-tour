import { getHomepageContent } from "@/lib/homepage";

export default async function CanalHighlights() {
  const { sections } = await getHomepageContent();
  const s = sections.highlights;

  return (
    <section id="highlights" className="bg-[#0F5C56] py-20 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-mosaic opacity-40 mix-blend-soft-light" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D4AF6A]/40 bg-[#D4AF6A]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#D4AF6A]">
          <span>✨</span> {s.eyebrow}
        </span>
        <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl text-white">{s.heading}</h2>
        <p className="mt-3 max-w-2xl text-[#E5D6BE] text-base">{s.subheading}</p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {s.cards.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-md transition-all duration-300 hover:border-[#B8863B] hover:bg-white/[0.12] hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#D4AF6A]/30 to-[#B8863B]/30 text-2xl border border-[#D4AF6A]/30 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="mt-4 font-serif text-lg font-bold text-white group-hover:text-[#E5D6BE] transition-colors">{item.title}</h3>
              <p className="mt-2 text-sm text-[#E5D6BE]/90 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
