// pages/blog/rv-ownership-costs.jsx
import Head from 'next/head';
import Link from 'next/link';
import { SITE_URL, buildFAQSchema } from '../../lib/seo';

const SLUG = 'rv-ownership-costs';
const TITLE = 'RV Ownership Costs: What You\'ll Really Pay in 2025';
const DESC = 'Class A, B, and C motorhomes, travel trailers, fifth wheels — a complete breakdown of the real annual costs of RV ownership including loans, insurance, campsite fees, fuel, and maintenance.';

const FAQS = [
  { question: 'How much does it cost to own an RV per year?', answer: 'Annual RV ownership costs vary widely by type: a travel trailer ($25,000-$50,000) costs $5,000-$10,000/year to own and operate. A Class C motorhome ($80,000-$150,000) costs $12,000-$22,000/year. A Class A diesel pusher ($200,000-$500,000) can cost $25,000-$60,000/year. These figures include loan payments, insurance, campsite fees, fuel, and maintenance.' },
  { question: 'Is it cheaper to RV than stay in hotels?', answer: 'For families taking multiple extended trips per year, RVing can be cheaper than hotels once you own the unit outright. However, when financing is included, most RV owners spend more annually than comparable hotel travel unless they use the RV 60+ nights per year. The real value of RVing is flexibility and experience, not necessarily cost savings.' },
  { question: 'What is the best RV for a first-time buyer?', answer: 'A 2-4 year old towable trailer (travel trailer or fifth wheel) in the $20,000-$40,000 range is the best starting point for most first-time buyers. Towables are less expensive to buy and maintain, easier to repair, and you\'re not losing your vehicle if the RV needs service. Avoid Class A motorhomes as your first RV — the learning curve and costs are steep.' },
];

export default function BlogPost7() {
  return (
    <>
      <Head>
        <title>{TITLE} | LifeCalc Blog</title>
        <meta name="description" content={DESC} />
        <meta name="keywords" content="RV ownership costs, how much does an RV cost per year, motorhome expenses, travel trailer costs, RV loan calculator, Class A RV cost, RV vs hotel" />
        <link rel="canonical" href={`${SITE_URL}/blog/${SLUG}`} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": TITLE, "description": DESC, "url": `${SITE_URL}/blog/${SLUG}`, "publisher": { "@type": "Organization", "name": "LifeCalc", "url": SITE_URL }, "datePublished": "2025-05-27" }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFAQSchema(FAQS)) }} />
      </Head>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:text-brand-600">Home</Link><span>/</span>
          <Link href="/blog" className="hover:text-brand-600">Blog</Link><span>/</span>
          <span className="text-slate-800 font-medium">RV Ownership Costs</span>
        </div>
        <div className="mb-8">
          <span className="inline-block bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">Recreation</span>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4 leading-tight">{TITLE}</h1>
          <div className="flex items-center gap-4 text-sm text-slate-500"><span>May 27, 2025</span><span>·</span><span>8 min read</span></div>
        </div>
        <div className="bg-teal-50 border border-teal-200 rounded-2xl p-5 mb-8 flex items-center justify-between gap-4">
          <div><p className="font-semibold text-teal-800 text-sm">🚐 Calculate your true RV monthly cost</p><p className="text-xs text-teal-600 mt-0.5">Loan + insurance + storage + maintenance all in one number.</p></div>
          <Link href="/recreation-calculator" className="btn-primary text-sm whitespace-nowrap" style={{background:'#0d9488'}}>Try Calculator →</Link>
        </div>
        <article className="space-y-6 text-slate-700 leading-relaxed">
          <p className="text-lg font-medium text-slate-800">The RV industry had a massive boom during and after the pandemic. But for every excited first-time buyer, there are thousands of RVs now sitting unused in driveways because the owners underestimated the real cost of ownership. Here's the full picture.</p>

          <h2 className="text-2xl font-display font-bold text-slate-900 mt-8 mb-3">Annual Cost by RV Type</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead><tr className="bg-slate-50 border-b border-slate-200">
                <th className="text-left px-3 py-3 font-semibold text-slate-700">RV Type</th>
                <th className="text-right px-3 py-3 font-semibold text-slate-700">Purchase Price</th>
                <th className="text-right px-3 py-3 font-semibold text-slate-700">Annual Cost</th>
                <th className="text-right px-3 py-3 font-semibold text-slate-700">Monthly Total</th>
              </tr></thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ['Pop-Up Camper', '$8k-$20k', '$2k-$4k', '$170-$330'],
                  ['Travel Trailer', '$20k-$60k', '$5k-$12k', '$420-$1,000'],
                  ['Fifth Wheel', '$40k-$100k', '$9k-$18k', '$750-$1,500'],
                  ['Class B Van', '$80k-$150k', '$12k-$22k', '$1,000-$1,830'],
                  ['Class C Motorhome', '$80k-$200k', '$14k-$28k', '$1,170-$2,330'],
                  ['Class A Gas', '$100k-$300k', '$18k-$40k', '$1,500-$3,330'],
                  ['Class A Diesel', '$200k-$500k', '$28k-$65k', '$2,330-$5,400'],
                ].map(([type, price, annual, monthly], i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-3 py-2.5 font-medium text-slate-800">{type}</td>
                    <td className="px-3 py-2.5 text-right text-slate-600">{price}</td>
                    <td className="px-3 py-2.5 text-right text-brand-600 font-semibold">{annual}</td>
                    <td className="px-3 py-2.5 text-right text-slate-700 font-semibold">{monthly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400">Annual costs include estimated loan payment (15% down, 8% APR, 15yr), insurance, storage, fuel, campsite fees, and maintenance. Actual costs vary significantly.</p>

          <h2 className="text-2xl font-display font-bold text-slate-900 mt-8 mb-3">The 6 Real Costs of RV Ownership</h2>
          <div className="space-y-3">
            {[
              { icon: '💳', title: 'Loan Payment', detail: 'RV loans run 10-20 years. A $100,000 RV with 15% down at 8.5% APR over 15 years = $842/month. You\'ll pay $151,000 total on a $85,000 loan.' },
              { icon: '🛡️', title: 'Insurance ($1,000-$5,000+/year)', detail: 'Full-timers need specialty full-time RV insurance. Part-timers can use standard RV policies. Class A policies often run $2,000-$5,000/year with full coverage.' },
              { icon: '🏕️', title: 'Campsite Fees ($2,400-$10,000+/year)', detail: 'State parks: $20-$50/night. Private campgrounds: $40-$80/night. RV resorts: $60-$150/night. At 30 nights/year average: $1,200-$4,500. Full-timers in premium parks: $12,000-$24,000/year.' },
              { icon: '⛽', title: 'Fuel ($1,500-$8,000+/year)', detail: 'Class A diesel at 8 MPG going 5,000 miles uses 625 gallons at $4.50 = $2,800. Class C at 12 MPG, same distance = $1,875. Travel trailers burn your tow vehicle\'s fuel — budget 30-40% worse MPG while towing.' },
              { icon: '🔧', title: 'Maintenance ($1,500-$6,000+/year)', detail: 'RVs are houses on wheels — everything wears out. Roof seals, slide-out maintenance, HVAC service, generator maintenance, tires ($800-$2,500 per set for Class A), and endless small repairs.' },
              { icon: '🏠', title: 'Storage ($600-$3,600/year)', detail: 'If you can\'t park at home, covered storage runs $100-$300/month. Outdoor storage: $50-$150/month. Some neighborhoods and HOAs prohibit RV parking.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 p-4 bg-slate-50 rounded-xl">
                <span className="text-xl shrink-0">{item.icon}</span>
                <div><p className="font-semibold text-slate-900 text-sm mb-1">{item.title}</p><p className="text-xs text-slate-600">{item.detail}</p></div>
              </div>
            ))}
          </div>

          <div className="bg-brand-50 border border-brand-200 rounded-2xl p-6 mt-8">
            <h3 className="font-display font-bold text-brand-800 text-lg mb-2">Calculate Your True RV Cost</h3>
            <p className="text-brand-700 text-sm mb-4">Enter your RV price, loan terms, insurance, storage, and maintenance to see your real monthly cost of RV ownership.</p>
            <Link href="/recreation-calculator" className="btn-primary inline-flex items-center gap-2 text-sm">🚐 Open Recreation Calculator →</Link>
          </div>
        </article>
        <div className="mt-12">
          <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">{FAQS.map((faq, i) => (<div key={i} className="calc-card"><h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3><p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p></div>))}</div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-200">
          <h2 className="text-lg font-display font-bold text-slate-900 mb-4">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/blog/true-cost-of-owning-a-boat" className="calc-card hover:shadow-md transition-all group"><p className="font-semibold text-slate-900 group-hover:text-brand-600 text-sm">⛵ True Cost of Owning a Boat</p><p className="text-xs text-slate-500 mt-1">7 min read</p></Link>
            <Link href="/blog/new-vs-used-car-true-cost" className="calc-card hover:shadow-md transition-all group"><p className="font-semibold text-slate-900 group-hover:text-brand-600 text-sm">🚗 New vs. Used Car: True Cost</p><p className="text-xs text-slate-500 mt-1">7 min read</p></Link>
          </div>
        </div>
      </div>
    </>
  );
}
