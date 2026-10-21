import fs from "fs";
import path from "path";
import { neon } from "@neondatabase/serverless";

function loadDotEnv() {
  const envPath = path.join(process.cwd(), ".env");
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, "utf-8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const idx = trimmed.indexOf("=");
    if (idx === -1) continue;
    const key = trimmed.slice(0, idx).trim();
    let value = trimmed.slice(idx + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = value;
  }
}

loadDotEnv();

if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL is not set.");
  process.exit(1);
}

const sql = neon(process.env.DATABASE_URL);

const articleData = {
  slug: "best-time-to-visit-the-alhambra",
  title: "Best Time to Visit the Alhambra: Hours, Seasons & Palaces Guide",
  metaTitle: "Best Time to Visit the Alhambra 2026: Hours, Seasons & Tips",
  metaDescription: "Plan your trip with our guide on the best time to visit the Alhambra in Granada. Compare morning vs afternoon hours, spring vs autumn, Nasrid Palace slots, and crowd tips.",
  category: "Visitor Guide",
  author: "Lucia Morales / Granada Heritage Guide",
  excerpt: "Discover the best time to visit the Alhambra in Granada, covering optimal morning hours, spring and autumn seasons, Nasrid Palaces timed entry, and summer heat advice.",
  quickAnswer: "The best time to visit the Alhambra is during spring (April to May) or autumn (September to October), when Granada enjoys mild temperatures and lush Generalife gardens. For daily timing, choose an early morning entry at 8:30 AM or a late afternoon slot to avoid heavy tour group crowds and Andalusian heat.",
  readTime: "5 min read",
  date: "2026-10-21",
  updatedAt: "2026-10-21T07:25:00.000Z",
  image: "https://aako7wxnbt77jarh.public.blob.vercel-storage.com/alhambra-best-time-to-visit-TpnB6D9SHtK11Uk3riivXIamN59Zhi.jpg",
  imageAlt: "The ancient red fortress of the Alhambra overlooking Granada with Sierra Nevada mountains in background",
  recommendedTourId: "alhambra-fast-track-ticket-with-audioguide",
  recommendedTourAfterBlock: 1,
  focusKeyword: "best time to visit the Alhambra",
  ctaHeading: "Ready to visit the Alhambra?",
  ctaBody: "Compare Alhambra skip-the-line tickets, Nasrid Palace passes, and guided tours on our homepage.",
  ctaButtonText: "Compare Alhambra Tickets & Tours →",
  ctaButtonHref: "/#prices",
  noIndex: false,
  noFollow: false,
  canonicalUrl: "https://www.granadaalhambratour.com/blog/best-time-to-visit-the-alhambra",
  ogTitle: "Best Time to Visit the Alhambra: Hours, Seasons & Palaces Guide",
  ogDescription: "Complete visitor guide on the best time to visit the Alhambra in Granada: crowd trends, seasonal weather, and Nasrid Palaces entry tips.",
  ogImage: "https://aako7wxnbt77jarh.public.blob.vercel-storage.com/alhambra-best-time-to-visit-TpnB6D9SHtK11Uk3riivXIamN59Zhi.jpg",
  sortOrder: 0,
  content: `<p class="lead-paragraph">Crowning the Sabika hill against the backdrop of Andalusia's Sierra Nevada mountains, the Alhambra in Granada stands as the crowning jewel of Moorish civilization in Europe. Welcoming nearly three million travelers every year, this UNESCO World Heritage complex enforces strict visitor caps to protect its fragile Nasrid architecture. Knowing the <strong>best time to visit the Alhambra</strong> ensures you secure entry, navigate Andalusian weather, and experience the courtyards with peaceful reverence rather than elbowing through dense crowds.</p>

<div class="pro-tip-box"><span class="pro-tip-icon">💡</span><div><strong>Pro Tip for 2026 Visitors:</strong> Your ticket features an unyielding, mandatory 30-minute entry window exclusively for the Nasrid Palaces. Missing this exact slot by even five minutes results in automatic refusal of palace entry. Plan your entire day around this palace time slot and enter the main complex gates at least 45 minutes beforehand.</div></div>

<h2>Best Time of Day to Tour the Alhambra</h2>
<p>Crowd density peaks significantly between 10:30 AM and 2:30 PM, when day-trip buses arrive from Seville, Malaga, and the Costa del Sol. For a relaxed visit, book your entrance around two prime daily intervals:</p>
<ul>
  <li><strong>First Morning Slot at 8:30 AM:</strong> Entering at opening time gives you the calmest atmosphere of the day. The soft morning light illuminates the intricate stucco carvings of the Mexuar and Comares Palace before rooms fill with tour groups. Morning visits are especially critical during warm summer months before midday heat sets in.</li>
  <li><strong>Late Afternoon (After 3:30 PM):</strong> Crowd numbers decline noticeably as day-trippers depart. Golden-hour sunlight casts a radiant amber glow over the Alcazaba fortress walls and Generalife water gardens, creating magical photography conditions over the historic Albaicin quarter.</li>
</ul>

<h2>Best Months and Seasons to Visit Granada</h2>
<p>Granada experiences a continental Mediterranean climate characterized by crisp winters and scorching summers. Choosing the right season shapes your experience.</p>

<h3>Spring (April to May) — Blooming Gardens and Ideal Weather</h3>
<p>Spring is widely considered the overall best time to visit the Alhambra. Temperatures hover comfortably between 18°C and 23°C (64°F–73°F). The Generalife gardens burst into vibrant bloom with roses, jasmine, and orange blossoms, while snow still glistens on the Sierra Nevada peaks in the distance.</p>

<h3>Autumn (September to October) — Mild Days and Thinner Crowds</h3>
<p>Autumn brings relief from summer heat alongside thinner crowds once European holiday travelers return home. October offers pleasant walking weather, golden foliage throughout the surrounding forests, and excellent ticket availability compared to mid-summer.</p>

<figure><img src="https://aako7wxnbt77jarh.public.blob.vercel-storage.com/alhambra-court-of-lions-KfD11isatj2IBZofTUisggfdSKDuOS.jpg" alt="Intricate Moorish arches and marble fountain in the Court of the Lions inside the Nasrid Palaces at the Alhambra" /><figcaption>The iconic Court of the Lions within the Nasrid Palaces, best admired during quiet morning time slots.</figcaption></figure>

<h3>Summer (June to August) vs. Winter (November to February)</h3>
<p>Granada summers frequently exceed 38°C (100°F). Walking through the exposed stone ramparts of the Alcazaba under midday heat can prove punishing. Conversely, winter brings crisp, cold mornings but virtually no crowd pressure. While some garden fountains may be turned off during freezing periods, exploring quiet palace halls offers a deeply intimate encounter.</p>

<h2>Essential Practical Tips for Planning Your Visit</h2>
<ul class="custom-checklist">
  <li><span class="check-circle">✓</span><strong>Book Tickets 2 to 3 Months Ahead:</strong> Tickets with Nasrid Palaces access sell out months in advance; spontaneous same-day walk-up tickets do not exist.</li>
  <li><span class="check-circle">✓</span><strong>Bring Your Original Passport:</strong> Tickets are strictly nominative; Spanish monument security checks every physical ID against your ticket barcode.</li>
  <li><span class="check-circle">✓</span><strong>Wear Comfortable Walking Shoes:</strong> Expect to walk 5 to 7 kilometers across uneven cobblestones and palace steps.</li>
  <li><span class="check-circle">✓</span><strong>Allow At Least 3 to 4 Hours:</strong> Allocate 1.5 hours for the Nasrid Palaces, 1 hour for Generalife, and 1 hour for the Alcazaba and Charles V Palace.</li>
</ul>`
};

function countWords(str) {
  const plain = str.replace(/<[^>]+>/g, " ").replace(/&[a-z]+;/g, " ").replace(/[—–]/g, " ");
  const words = plain.trim().split(/\s+/).filter(Boolean);
  return words.length;
}

async function seed() {
  console.log("Seeding article:", articleData.title);
  const wordCount = countWords(articleData.content);
  console.log(`Word count: ${wordCount} words (Target: 500-600 words)`);
  if (wordCount < 500 || wordCount > 600) {
    throw new Error(`Word count ${wordCount} outside allowable 500-600 range!`);
  }

  // 1. Upsert into database
  await sql`
    INSERT INTO posts (
      slug, title, meta_title, meta_description, category, excerpt,
      quick_answer, read_time, date, updated_at, author, image, image_alt,
      recommended_tour_id, recommended_tour_after_block, content, sort_order,
      cta_heading, cta_body, cta_button_text, cta_button_href, focus_keyword,
      no_index, no_follow, canonical_url, og_title, og_description, og_image
    ) VALUES (
      ${articleData.slug}, ${articleData.title}, ${articleData.metaTitle}, ${articleData.metaDescription}, ${articleData.category},
      ${articleData.excerpt}, ${articleData.quickAnswer}, ${articleData.readTime}, ${articleData.date}, ${articleData.updatedAt},
      ${articleData.author}, ${articleData.image}, ${articleData.imageAlt},
      ${articleData.recommendedTourId}, ${articleData.recommendedTourAfterBlock},
      ${JSON.stringify(articleData.content)}::jsonb, ${articleData.sortOrder},
      ${articleData.ctaHeading}, ${articleData.ctaBody}, ${articleData.ctaButtonText}, ${articleData.ctaButtonHref}, ${articleData.focusKeyword},
      ${articleData.noIndex}, ${articleData.noFollow}, ${articleData.canonicalUrl}, ${articleData.ogTitle}, ${articleData.ogDescription}, ${articleData.ogImage}
    )
    ON CONFLICT (slug) DO UPDATE SET
      title = EXCLUDED.title,
      meta_title = EXCLUDED.meta_title,
      meta_description = EXCLUDED.meta_description,
      category = EXCLUDED.category,
      excerpt = EXCLUDED.excerpt,
      quick_answer = EXCLUDED.quick_answer,
      read_time = EXCLUDED.read_time,
      date = EXCLUDED.date,
      updated_at = EXCLUDED.updated_at,
      author = EXCLUDED.author,
      image = EXCLUDED.image,
      image_alt = EXCLUDED.image_alt,
      recommended_tour_id = EXCLUDED.recommended_tour_id,
      recommended_tour_after_block = EXCLUDED.recommended_tour_after_block,
      content = EXCLUDED.content,
      sort_order = EXCLUDED.sort_order,
      cta_heading = EXCLUDED.cta_heading,
      cta_body = EXCLUDED.cta_body,
      cta_button_text = EXCLUDED.cta_button_text,
      cta_button_href = EXCLUDED.cta_button_href,
      focus_keyword = EXCLUDED.focus_keyword,
      no_index = EXCLUDED.no_index,
      no_follow = EXCLUDED.no_follow,
      canonical_url = EXCLUDED.canonical_url,
      og_title = EXCLUDED.og_title,
      og_description = EXCLUDED.og_description,
      og_image = EXCLUDED.og_image
  `;
  console.log("✓ Successfully upserted into Neon posts table!");

  // 2. Fetch all current DB posts and synchronize data/posts.json
  const allDbPosts = await sql`SELECT * FROM posts ORDER BY date DESC, sort_order ASC`;
  console.log(`Synchronizing ${allDbPosts.length} posts to data/posts.json...`);

  const jsonPosts = allDbPosts.map((p) => {
    let contentVal = p.content;
    if (typeof contentVal !== "string") {
      try {
        contentVal = typeof contentVal === "object" ? JSON.stringify(contentVal) : String(contentVal);
      } catch {
        contentVal = "";
      }
    }
    const dStr = p.date instanceof Date ? p.date.toISOString().slice(0, 10) : String(p.date || "").slice(0, 10);
    const uStr = p.updated_at instanceof Date ? p.updated_at.toISOString() : (p.updated_at ? String(p.updated_at) : dStr);

    return {
      slug: p.slug,
      title: p.title,
      metaTitle: p.meta_title || p.title,
      metaDescription: p.meta_description || p.excerpt,
      category: p.category || "Visitor Guide",
      excerpt: p.excerpt,
      quickAnswer: p.quick_answer || "",
      readTime: p.read_time || "5 min read",
      date: dStr,
      updatedAt: uStr,
      author: p.author || "Lucia Morales / Granada Heritage Guide",
      image: p.image || "",
      imageAlt: p.image_alt || "",
      recommendedTourId: p.recommended_tour_id || "alhambra-fast-track-ticket-with-audioguide",
      recommendedTourAfterBlock: p.recommended_tour_after_block,
      content: contentVal,
      ctaHeading: p.cta_heading || "Ready to visit the Alhambra?",
      ctaBody: p.cta_body || "Compare Alhambra skip-the-line tickets, Nasrid Palace passes, and guided tours on our homepage.",
      ctaButtonText: p.cta_button_text || "Compare Alhambra Tickets & Tours →",
      ctaButtonHref: p.cta_button_href || "/#prices",
      focusKeyword: p.focus_keyword || "best time to visit the Alhambra",
      noIndex: !!p.no_index,
      noFollow: !!p.no_follow,
      canonicalUrl: p.canonical_url || `https://www.granadaalhambratour.com/blog/${p.slug}`,
      ogTitle: p.og_title || p.meta_title || p.title,
      ogDescription: p.og_description || p.meta_description || p.excerpt,
      ogImage: p.og_image || p.image || ""
    };
  });

  const postsJsonPath = path.join(process.cwd(), "data", "posts.json");
  fs.writeFileSync(postsJsonPath, JSON.stringify(jsonPosts, null, 2), "utf-8");
  console.log(`✓ Synchronized data/posts.json with ${jsonPosts.length} posts.`);

  console.log("\nArticle Seed Summary:");
  console.log("- Title:", articleData.title);
  console.log("- Slug:", articleData.slug);
  console.log("- Focus Keyword:", articleData.focusKeyword);
  console.log("- Word Count:", wordCount);
  console.log("- Cover Image:", articleData.image);
  console.log("- Public URL:", articleData.canonicalUrl);
}

seed().catch((err) => {
  console.error("Seeding failed:", err);
  process.exit(1);
});
