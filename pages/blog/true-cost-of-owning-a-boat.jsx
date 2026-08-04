// pages/blog/true-cost-of-owning-a-boat.jsx
import Head from 'next/head';
import Link from 'next/link';
import { SITE_URL, buildFAQSchema } from '../../lib/seo';

const SLUG = 'true-cost-of-owning-a-boat';
const TITLE = 'The True Cost of Owning a Boat in 2025 (It\'s More Than You Think)';
const DESC = 'Insurance, storage, maintenance, fuel, winterization — the real annual cost of boat ownership that dealers never tell you. Calculate whether you can actually afford a boat.';

const FAQS = [
  { question: 'What is the average annual cost to own a boat?', answer: 'Most boat owners spend 10-20% of the boat\'s purchase price annually in ongoing costs. A $50,000 boat typically costs $5,000-$10,000/year in insurance, storage, maintenance, fuel, and registration — before your loan payment. A $100,000 boat often costs $15,000-$25,000/year to operate.' },
  { question: 'Is it cheaper to rent or own a boat?', answer: 'For most people who use a boat fewer than 20-30 days per year, renting or chartering is significantly cheaper than ownership. Charter rates of $500-$2,000/day still cost less than the $1,500-$3,000/month true cost of owning a comparable boat when you factor in all expenses.' },
  { question: 'What is the 10% rule for boats?', answer: 'The "10% rule" is a common guideline: budget 10% of the boat\'s purchase price annually for ongoing costs. So a $40,000 boat should have a $4,000/year maintenance and operating budget — not including the loan payment, insurance, or storage. Some experienced owners say 15-20% is more realistic.' },
];

export default function BlogPost5() {
  return (
    <>
      <Head>
        <title>{TITLE} | LifeCalc Blog</title>
        <meta name="description" content={DESC} />
        <meta name="keywords" content="true cost of owning a boat, boat ownership costs, annual boat expenses, boat insurance cost, boat storage cost, can I afford a boat, boat loan calculator" />
        <link rel="canonical" href={`${SITE_URL}/blog/${SLUG}`} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESC} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": TITLE, "description": DESC, "url": `${SITE_URL}/blog/${SLUG}`, "publisher": { "@type": "Organization", "name": "LifeCalc", "url": SITE_URL }, "datePublished": "2025-05-13" }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFAQSchema(FAQS)) }} />
      </Head>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:text-brand-600">Home</Link><span>/</span>
          <Link href="/blog" className="hover:text-brand-600">Blog</Link><span>/</span>
          <span className="text-slate-800 font-medium">Cost of Owning a Boat</span>
        </div>
        <div className="mb-8">
          <span className="inline-block bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">Recreation</span>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4 leading-tight">{TITLE}</h1>
          <div className="flex items-center gap-4 text-sm text-slate-500"><span>May 13, 2025</span><span>·</span><span>7 min read</span></div>
        </div>
        <div className="bg-teal-50 border border-teal-200 rounded-2xl p-5 mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-teal-800 text-sm">⛵ Calculate your true monthly boat cost</p>
            <p className="text-xs text-teal-600 mt-0.5">Loan + insurance + storage + maintenance all in one number.</p>
          </div>
          <Link href="/recreation-calculator" className="btn-primary text-sm whitespace-nowrap" style={{background:'#0d9488'}}>Try Calculator →</Link>
        </div>
        <article className="space-y-6 text-slate-700 leading-relaxed">
          <p className="text-lg font-medium text-slate-800">The boat dealer will happily tell you the sticker price and monthly loan payment. What they won't mention is that the loan payment is often only 40-50% of your actual monthly cost of ownership.</p>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <p className="font-bold text-amber-800 mb-3">⚠️ Real Example: $65,000 Pontoon Boat</p>
            <div className="space-y-2 text-sm">
              {[
                ['Loan payment (20% down, 8% APR, 15yr)', '$480/mo'],
                ['Insurance', '$175/mo'],
                ['Marina slip / storage', '$350/mo'],
                ['Fuel (avg usage)', '$200/mo'],
                ['Maintenance & repairs', '$200/mo'],
                ['Registration & licensing', '$25/mo'],
              ].map(([k, v], i) => (
                <div key={i} className="flex justify-between border-b border-amber-200 pb-1 last:border-0">
                  <span className="text-amber-700">{k}</span>
                  <span className="font-bold text-amber-800">{v}</span>
                </div>
              ))}
              <div className="flex justify-between pt-2 border-t-2 border-amber-400 mt-2">
                <span className="font-bold text-amber-900">True Monthly Cost</span>
                <span className="font-bold text-amber-900 text-lg">$1,430/mo</span>
              </div>
            </div>
            <p className="text-xs text-amber-700 mt-3">That's $17,160/year — nearly 26% of the boat's purchase price annually.</p>
          </div>

          <h2 className="text-2xl font-display font-bold text-slate-900 mt-8 mb-3">The 8 Real Costs of Boat Ownership</h2>
          <div className="space-y-4">
            {[
              { num: '1', title: 'Loan Payment', detail: 'The obvious one. On a $65,000 boat with 20% down at 8% APR over 15 years, you\'re paying $480/month. Over the loan term, you\'ll pay $86,400 total — $34,600 more than the borrowed amount.' },
              { num: '2', title: 'Insurance ($1,500–$4,000/year)', detail: 'Marine insurance is required by most marinas and lenders. Rates depend on boat type, value, navigation area, and your boating experience. A $65,000 pontoon boat runs $1,500-$2,500/year in most freshwater markets.' },
              { num: '3', title: 'Storage / Marina ($2,400–$9,600/year)', detail: 'Where will the boat live? Dry storage (indoor or outdoor) runs $1,200-$3,600/year. A marina slip in a popular area costs $4,800-$9,600/year. Many boat owners underestimate this — it\'s often the second-largest expense after the loan.' },
              { num: '4', title: 'Fuel ($1,200–$6,000/year)', detail: 'Depends entirely on engine size and how much you use the boat. A 150hp pontoon boat getting 3 MPG at typical usage might burn 200-400 gallons/year at $3.50-$5/gallon = $700-$2,000/year. Larger performance boats can spend $5,000-$10,000 in a season.' },
              { num: '5', title: 'Annual Maintenance ($1,500–$5,000/year)', detail: 'This includes winterization ($300-$500), spring commissioning ($200-$400), oil changes, impeller replacement, battery maintenance, and minor repairs. Budget 3-5% of the boat\'s value annually.' },
              { num: '6', title: 'Unexpected Repairs (Variable)', detail: 'Boats are mechanical systems exposed to water, UV, and vibration — they break. A new water pump is $200-$500. Engine work is $500-$3,000+. A major repair in year 3 can cost $5,000-$15,000. Always keep a boat emergency fund.' },
              { num: '7', title: 'Registration & Taxes ($200–$600/year)', detail: 'Annual registration fees vary by state and vessel length. Property taxes on boats exist in some states. Sales tax at purchase (varies widely by state) can be a significant upfront cost — sometimes 6-9% of purchase price.' },
              { num: '8', title: 'Accessories & Upgrades ($500–$3,000/year)', detail: 'Safety equipment, fishing gear, water toys, electronics upgrades, canvas covers, cleaning supplies, dock lines, and fenders. New boat owners consistently underestimate this category.' },
            ].map(item => (
              <div key={item.num} className="flex gap-4 p-4 bg-slate-50 rounded-xl">
                <div className="w-8 h-8 bg-teal-600 text-white rounded-xl flex items-center justify-center font-bold text-sm shrink-0">{item.num}</div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">{item.title}</p>
                  <p className="text-sm text-slate-600">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-display font-bold text-slate-900 mt-8 mb-3">Rent vs. Own — The Math</h2>
          <p>If you use your boat 20 days per year (above average for most owners), and your true ownership cost is $1,400/month ($16,800/year), you're effectively paying <strong>$840 per day on the water</strong>. Charter boats in the same class rent for $400-$800/day. The math only favors ownership if you use the boat 40+ days per year and keep it for 5+ years.</p>

          <h2 className="text-2xl font-display font-bold text-slate-900 mt-8 mb-3">Tips Before You Buy</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: '🔍', tip: 'Get a marine survey ($400-$600) on any used boat before purchasing.' },
              { icon: '📋', tip: 'Call a marina and ask for actual slip rates before buying — sticker shock is real.' },
              { icon: '🤝', tip: 'Join a boat club for 1-2 years to discover your actual usage before committing to ownership.' },
              { icon: '💰', tip: 'Budget 15-20% of purchase price annually for all ongoing costs, not 10%.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 p-4 bg-teal-50 border border-teal-200 rounded-xl">
                <span className="text-xl shrink-0">{item.icon}</span>
                <p className="text-sm text-slate-700">{item.tip}</p>
              </div>
            ))}
          </div>

          <div className="bg-brand-50 border border-brand-200 rounded-2xl p-6 mt-8">
            <h3 className="font-display font-bold text-brand-800 text-lg mb-2">Calculate Your True Monthly Cost</h3>
            <p className="text-brand-700 text-sm mb-4">Enter your boat price, loan terms, insurance, storage, and maintenance into our recreation calculator to see your real monthly and annual cost of ownership.</p>
            <Link href="/recreation-calculator" className="btn-primary inline-flex items-center gap-2 text-sm">⛵ Open Recreation Calculator →</Link>
          </div>
        </article>
        <div className="mt-12">
          <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">{FAQS.map((faq, i) => (<div key={i} className="calc-card"><h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3><p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p></div>))}</div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-200">
          <h2 className="text-lg font-display font-bold text-slate-900 mb-4">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/blog/home-renovation-roi" className="calc-card hover:shadow-md transition-all group"><p className="font-semibold text-slate-900 group-hover:text-brand-600 text-sm">🔨 Best Home Renovation ROI</p><p className="text-xs text-slate-500 mt-1">6 min read</p></Link>
            <Link href="/blog/new-vs-used-car-true-cost" className="calc-card hover:shadow-md transition-all group"><p className="font-semibold text-slate-900 group-hover:text-brand-600 text-sm">🚗 New vs. Used Car True Cost</p><p className="text-xs text-slate-500 mt-1">7 min read</p></Link>
          </div>
        </div>
      </div>
    </>
  );
}
