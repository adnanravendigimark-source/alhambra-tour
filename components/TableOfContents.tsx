import type { TocItem } from "@/lib/tableOfContents";

export default function TableOfContents({
  items,
  label = "In This Guide",
}: {
  items: TocItem[];
  label?: string;
}) {
  const sections = items.filter((item) => item.level === 2);
  if (sections.length < 2) return null;

  return (
    <div className="mt-8 rounded-2xl border border-[#B8863B]/25 bg-gradient-to-br from-[#B8863B]/5 via-[#D4AF6A]/10 to-white p-6 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-widest text-[#B8863B]">{label}</p>
      <ul className="mt-3.5 space-y-2.5 text-sm">
        {sections.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="flex items-center gap-2 font-medium text-stone-700 transition hover:text-[#B8863B] hover:translate-x-0.5"
            >
              <span aria-hidden="true" className="text-[#B8863B] font-bold">
                ›
              </span>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
