// pages/blog/home-renovation-roi.jsx
import Head from 'next/head';
import Link from 'next/link';
import { SITE_URL, buildFAQSchema } from '../../lib/seo';

const SLUG = 'home-renovation-roi';
const TITLE = 'Which Home Renovations Have the Best ROI in 2025?';
const DESC = 'Not all renovations add value to your home. Here are the projects with the highest return on investment in 2025 — and which expensive upgrades to avoid.';

const FAQS = [
  { question: 'Which home renovation has the highest ROI?', answer: 'Garage door replacement consistently ranks #1 in ROI, often returning 90-100% of its cost. Minor kitchen remodels (updating surfaces without changing layout) return 75-85%. Manufactured stone veneer on the exterior returns 90%+. These high-ROI projects improve curb appeal at relatively low cost.' },
  { question: 'Does a swimming pool add value to a home?', answer: 'In most markets, no. A pool typically costs $40,000-$80,000 to install but adds only $10,000-$20,000 in home value — a negative ROI of 50-75%. Pools also increase insurance costs, maintenance expenses ($3,000-$5,000/year), and can deter buyers with young children or older buyers. They make financial sense only if you plan to enjoy them for many years.' },
  { question: 'Should I renovate before selling my home?', answer: 'Focus only on high-ROI projects: fresh neutral paint, minor kitchen and bathroom updates, curb appeal improvements, and fixing any obvious defects. Avoid major remodels right before selling — you rarely recoup the full cost. A pre-listing home inspection ($300-$500) identifies what actually needs fixing vs. what buyers will overlook.' },
];

export default function BlogPost4() {
  const roiData = [
    { project: 'Garage Door Replacement', cost: '$4,500', value: '$4,400', roi: '97%', color: 'green' },
    { project: 'Manufactured Stone Veneer', cost: '$11,000', value: '$10,000', roi: '91%', color: 'green' },
    { project: 'Minor Kitchen Remodel', cost: '$28,000', value: '$22,000', roi: '79%', color: 'green' },
    { project: 'Entry Door Replacement', cost: '$2,400', value: '$1,900', roi: '79%', color: 'green' },
    { project: 'Deck Addition (Wood)', cost: '$17,000', value: '$12,000', roi: '71%', color: 'blue' },
    { project: 'Window Replacement', cost: '$20,000', value: '$14,000', roi: '69%', color: 'blue' },
    { project: 'Bathroom Remodel', cost: '$25,000', value: '$16,000', roi: '64%', color: 'blue' },
    { project: 'Major Kitchen Remodel', cost: '$80,000', value: '$45,000', roi: '56%', color: 'yellow' },
    { project: 'Basement Finishing', cost: '$52,000', value: '$28,000', roi: '54%', color: 'yellow' },
    { project: 'Master Suite Addition', cost: '$160,000', value: '$80,000', roi: '50%', color: 'yellow' },
    { project: 'Swimming Pool', cost: '$60,000', value: '$15,000', roi: '25%', color: 'red' },
    { project: 'Sunroom Addition', cost: '$75,000', value: '$18,000', roi: '24%', color: 'red' },
  ];

  return (
    <>
      <Head>
        <title>{TITLE} | LifeCalc Blog</title>
        <meta name="description" content={DESC} />
        <meta name="keywords" content="home renovation ROI, best home improvements for resale value, kitchen remodel return on investment, bathroom renovation value, which renovations add home value" />
        <link rel="canonical" href={`${SITE_URL}/blog/${SLUG}`} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESC} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": TITLE, "description": DESC, "url": `${SITE_URL}/blog/${SLUG}`, "publisher": { "@type": "Organization", "name": "LifeCalc", "url": SITE_URL }, "datePublished": "2025-05-06" }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFAQSchema(FAQS)) }} />
      </Head>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:text-brand-600">Home</Link><span>/</span>
          <Link href="/blog" className="hover:text-brand-600">Blog</Link><span>/</span>
          <span className="text-slate-800 font-medium">Renovation ROI</span>
        </div>
        <div className="mb-8">
          <span className="inline-block bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">Renovation</span>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4 leading-tight">{TITLE}</h1>
          <div className="flex items-center gap-4 text-sm text-slate-500"><span>May 6, 2025</span><span>·</span><span>6 min read</span></div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5 mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-orange-800 text-sm">🔨 Calculate your renovation financing</p>
            <p className="text-xs text-orange-600 mt-0.5">Compare cash vs. loan costs with estimated ROI by project type.</p>
          </div>
          <Link href="/renovation-calculator" className="btn-primary text-sm whitespace-nowrap" style={{background:'#ea580c'}}>Try Calculator →</Link>
        </div>
        <article className="space-y-6 text-slate-700 leading-relaxed">
          <p className="text-lg font-medium text-slate-800">Before spending $50,000 on a kitchen remodel, it's worth knowing that you'll likely only recoup 56-79% of that cost when you sell. Here's the data on what actually adds value.</p>
          <h2 className="text-2xl font-display font-bold text-slate-900 mt-8 mb-3">2025 ROI by Project — Complete Ranking</h2>
          <p>Based on Remodeling Magazine's annual Cost vs. Value report, here's how common projects rank:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead><tr className="bg-slate-50 border-b border-slate-200">
                <th className="text-left px-4 py-3 font-semibold text-slate-700">Project</th>
                <th className="text-right px-4 py-3 font-semibold text-slate-700">Avg Cost</th>
                <th className="text-right px-4 py-3 font-semibold text-slate-700">Value Added</th>
                <th className="text-right px-4 py-3 font-semibold text-slate-700">ROI</th>
              </tr></thead>
              <tbody className="divide-y divide-slate-100">
                {roiData.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-4 py-2.5 font-medium text-slate-800">{row.project}</td>
                    <td className="px-4 py-2.5 text-right text-slate-600">{row.cost}</td>
                    <td className="px-4 py-2.5 text-right text-slate-600">{row.value}</td>
                    <td className={`px-4 py-2.5 text-right font-bold ${row.color === 'green' ? 'text-green-600' : row.color === 'blue' ? 'text-blue-600' : row.color === 'yellow' ? 'text-yellow-600' : 'text-red-600'}`}>{row.roi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400">Source: Remodeling Magazine Cost vs. Value 2024. National averages — values vary by region.</p>

          <h2 className="text-2xl font-display font-bold text-slate-900 mt-8 mb-3">Why Curb Appeal Projects Win</h2>
          <p>The top-ROI projects — garage doors, stone veneer, entry doors, and fresh paint — all share one thing: they dramatically change a buyer's first impression. Studies show buyers form their opinion of a home within 7 seconds of arrival. Curb appeal improvements have outsized impact relative to their cost because they affect every potential buyer who drives by or views listing photos.</p>

          <h2 className="text-2xl font-display font-bold text-slate-900 mt-8 mb-3">The Kitchen Remodel Trap</h2>
          <p>Kitchen remodels are the most popular renovation but rarely the best investment. A major kitchen overhaul costing $80,000 typically adds only $45,000 in value — a 56% ROI. A <em>minor</em> kitchen remodel (new cabinet fronts, countertops, appliances, and paint — without moving walls or plumbing) at $28,000 returns 79%. The lesson: update the surfaces, not the structure.</p>

          <h2 className="text-2xl font-display font-bold text-slate-900 mt-8 mb-3">When ROI Doesn't Matter</h2>
          <p>If you're planning to stay in your home for 10+ years, ROI matters less. A pool that returns only 25% of its cost still provides years of enjoyment — the question becomes whether that enjoyment is worth the net cost after resale value. Renovate for your lifestyle first, resale value second, if you're not planning to sell soon.</p>

          <div className="bg-brand-50 border border-brand-200 rounded-2xl p-6 mt-8">
            <h3 className="font-display font-bold text-brand-800 text-lg mb-2">Planning a Renovation?</h3>
            <p className="text-brand-700 text-sm mb-4">Our renovation calculator compares paying cash vs. financing, shows your monthly payment, total interest cost, and estimated ROI for each project type.</p>
            <Link href="/renovation-calculator" className="btn-primary inline-flex items-center gap-2 text-sm">🔨 Open Renovation Calculator →</Link>
          </div>
        </article>
        <div className="mt-12">
          <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">{FAQS.map((faq, i) => (<div key={i} className="calc-card"><h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3><p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p></div>))}</div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-200">
          <h2 className="text-lg font-display font-bold text-slate-900 mb-4">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/blog/how-much-house-can-i-afford" className="calc-card hover:shadow-md transition-all group"><p className="font-semibold text-slate-900 group-hover:text-brand-600 text-sm">🏠 How Much House Can I Afford?</p><p className="text-xs text-slate-500 mt-1">6 min read</p></Link>
            <Link href="/blog/true-cost-of-owning-a-boat" className="calc-card hover:shadow-md transition-all group"><p className="font-semibold text-slate-900 group-hover:text-brand-600 text-sm">⛵ True Cost of Owning a Boat</p><p className="text-xs text-slate-500 mt-1">7 min read</p></Link>
          </div>
        </div>
      </div>
    </>
  );
}
