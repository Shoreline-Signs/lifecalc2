// pages/blog/new-vs-used-car-true-cost.jsx
import Head from 'next/head';
import Link from 'next/link';
import { SITE_URL, buildFAQSchema } from '../../lib/seo';

const SLUG = 'new-vs-used-car-true-cost';
const TITLE = 'New vs. Used Car: Which Actually Saves You More Money?';
const DESC = 'Depreciation, interest rates, insurance, and maintenance — a complete 5-year cost breakdown of buying new versus used to help you make the smartest car buying decision.';

const FAQS = [
  {
    question: 'How much does a new car depreciate in the first year?',
    answer: 'A new car typically loses 15-25% of its value in the first year alone. By the end of year 3, most vehicles have lost 40-50% of their original value. This rapid early depreciation is why buying a 2-3 year old used car can save you $8,000-$15,000 on a $35,000 vehicle while getting nearly the same car.',
  },
  {
    question: 'Are used cars more expensive to maintain?',
    answer: "Generally yes, but it depends on the vehicle's age, mileage, and make. A 3-year-old certified pre-owned vehicle from a reliable brand may cost only slightly more to maintain than new. Budget roughly 2-3% of the vehicle's value per year for maintenance on used cars versus 1-2% for new.",
  },
  {
    question: 'Is it better to finance a new or used car?',
    answer: "New cars typically qualify for lower interest rates — sometimes 0-3% promotional financing — compared to 7-12% for used. However, even with a higher used car rate, the lower purchase price often results in significantly lower total cost. Run both scenarios through our car loan calculator to compare.",
  },
];

export default function Post2() {
  return (
    <>
      <Head>
        <title>{TITLE} | LifeCalc Blog</title>
        <meta name="description" content={DESC} />
        <meta name="keywords" content="new vs used car cost comparison, car depreciation, used car buying guide, auto loan calculator, true cost of car ownership, best time to buy a car" />
        <link rel="canonical" href={`${SITE_URL}/blog/${SLUG}`} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESC} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": TITLE,
          "description": DESC,
          "url": `${SITE_URL}/blog/${SLUG}`,
          "publisher": { "@type": "Organization", "name": "LifeCalc", "url": SITE_URL },
          "datePublished": "2025-04-22",
        })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFAQSchema(FAQS)) }} />
      </Head>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:text-brand-600">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-brand-600">Blog</Link>
          <span>/</span>
          <span className="text-slate-800 font-medium">New vs. Used Car</span>
        </div>

        <div className="mb-8">
          <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">Car Loans</span>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4 leading-tight">{TITLE}</h1>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span>April 22, 2025</span><span>·</span><span>7 min read</span>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-green-800 text-sm">🚗 Compare new vs. used car costs</p>
            <p className="text-xs text-green-600 mt-0.5">See monthly payments, depreciation, and 5-year total cost side by side.</p>
          </div>
          <Link href="/car-loan-calculator" className="btn-primary text-sm whitespace-nowrap" style={{background:'#16a34a'}}>Try Calculator →</Link>
        </div>

        <article className="space-y-6 text-slate-700 leading-relaxed">
          <p className="text-lg font-medium text-slate-800">
            The new car smell is nice. But that scent costs roughly $8,000-$12,000 in first-year depreciation alone. Here's the honest math on new vs. used.
          </p>

          <h2 className="text-2xl font-display font-bold text-slate-900 mt-8 mb-3">The Depreciation Reality</h2>
          <p>
            New cars are one of the fastest-depreciating assets you can own. The moment you drive off the lot, a new car loses roughly 10% of its value. By the end of year one, it's down 20-25%. Here's how a $35,000 vehicle holds value over time:
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 my-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-2 font-semibold text-slate-600">Year</th>
                  <th className="text-right py-2 font-semibold text-slate-600">Est. Value</th>
                  <th className="text-right py-2 font-semibold text-slate-600">Depreciation Loss</th>
                  <th className="text-right py-2 font-semibold text-slate-600">% Lost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ['New', '$35,000', '—', '—'],
                  ['Year 1', '$27,000', '$8,000', '23%'],
                  ['Year 2', '$23,000', '$4,000', '34%'],
                  ['Year 3', '$20,000', '$3,000', '43%'],
                  ['Year 5', '$16,000', '$4,000', '54%'],
                  ['Year 7', '$12,500', '$3,500', '64%'],
                ].map(([yr, val, loss, pct], i) => (
                  <tr key={i} className={`hover:bg-white ${i === 0 ? 'font-semibold' : ''}`}>
                    <td className="py-2 text-slate-800">{yr}</td>
                    <td className="py-2 text-right text-slate-800">{val}</td>
                    <td className="py-2 text-right text-red-500">{loss}</td>
                    <td className="py-2 text-right text-slate-500">{pct}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-slate-400 mt-2">Based on average depreciation rates. Actual values vary by make, model, and condition.</p>
          </div>

          <h2 className="text-2xl font-display font-bold text-slate-900 mt-8 mb-3">5-Year Total Cost Comparison — $35,000 Vehicle</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <div className="bg-slate-800 text-white px-4 py-3 font-bold text-sm">✨ New Car — $35,000</div>
              <div className="p-4 space-y-2 text-sm">
                {[
                  ['Purchase Price', '$35,000'],
                  ['Down Payment (10%)', '$3,500'],
                  ['Loan Amount', '$31,500'],
                  ['Interest Rate (APR)', '6.9%'],
                  ['Monthly Payment (60mo)', '$623'],
                  ['Total Interest', '$5,880'],
                  ['5-yr Insurance', '$9,000'],
                  ['5-yr Maintenance', '$4,000'],
                  ['5-yr Depreciation', '$19,000'],
                  ['Resale Value at 5yr', '$16,000'],
                ].map(([k, v], i) => (
                  <div key={i} className="flex justify-between border-b border-slate-100 pb-1 last:border-0">
                    <span className="text-slate-600">{k}</span>
                    <span className="font-semibold text-slate-800">{v}</span>
                  </div>
                ))}
                <div className="flex justify-between pt-2 border-t-2 border-slate-800">
                  <span className="font-bold text-slate-900">True 5-yr Net Cost</span>
                  <span className="font-bold text-red-600">~$37,880</span>
                </div>
              </div>
            </div>
            <div className="border border-green-300 rounded-xl overflow-hidden">
              <div className="bg-green-700 text-white px-4 py-3 font-bold text-sm">🔍 Used Car (3yr old) — $23,000</div>
              <div className="p-4 space-y-2 text-sm">
                {[
                  ['Purchase Price', '$23,000'],
                  ['Down Payment (10%)', '$2,300'],
                  ['Loan Amount', '$20,700'],
                  ['Interest Rate (APR)', '8.5%'],
                  ['Monthly Payment (60mo)', '$423'],
                  ['Total Interest', '$4,680'],
                  ['5-yr Insurance', '$7,500'],
                  ['5-yr Maintenance', '$6,000'],
                  ['5-yr Depreciation', '$10,500'],
                  ['Resale Value at 5yr', '$12,500'],
                ].map(([k, v], i) => (
                  <div key={i} className="flex justify-between border-b border-slate-100 pb-1 last:border-0">
                    <span className="text-slate-600">{k}</span>
                    <span className="font-semibold text-slate-800">{v}</span>
                  </div>
                ))}
                <div className="flex justify-between pt-2 border-t-2 border-green-700">
                  <span className="font-bold text-slate-900">True 5-yr Net Cost</span>
                  <span className="font-bold text-green-600">~$28,180</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
            <p className="font-bold text-green-800 text-lg">The used car saves approximately $9,700 over 5 years</p>
            <p className="text-sm text-green-700 mt-1">And $200/month less in monthly payments</p>
          </div>

          <h2 className="text-2xl font-display font-bold text-slate-900 mt-8 mb-3">When New Makes Sense</h2>
          <p>Despite the higher cost, buying new makes sense in certain situations:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
            {[
              { icon: '0️⃣', title: '0% financing available', desc: 'When manufacturers offer 0% APR promotions, the interest savings can offset much of the depreciation cost.' },
              { icon: '🛡️', title: 'Full warranty coverage', desc: "New cars come with bumper-to-bumper warranties (typically 3yr/36k miles) that protect against unexpected repair costs." },
              { icon: '🔒', title: 'Known history', desc: "You're the first owner — no risk of hidden accidents, deferred maintenance, or odometer fraud." },
              { icon: '⚡', title: 'EV tax credits', desc: "New EVs may qualify for federal tax credits up to $7,500, significantly reducing the effective purchase price." },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 p-4 bg-slate-50 rounded-xl">
                <span className="text-xl">{item.icon}</span>
                <div>
                  <p className="font-semibold text-sm text-slate-900">{item.title}</p>
                  <p className="text-xs text-slate-600 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-display font-bold text-slate-900 mt-8 mb-3">The Sweet Spot: 2-4 Year Old Certified Pre-Owned</h2>
          <p>
            The best value in the car market is typically a 2-4 year old certified pre-owned (CPO) vehicle from a reliable brand. Here's why:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>The previous owner absorbed the steepest depreciation (years 1-2)</li>
            <li>CPO programs include manufacturer-backed inspections and extended warranties</li>
            <li>Low enough mileage that major repairs are still years away</li>
            <li>Modern features like Apple CarPlay, backup cameras, and safety systems</li>
            <li>Purchase price 25-35% below new while being nearly identical in reliability</li>
          </ul>

          <div className="bg-brand-50 border border-brand-200 rounded-2xl p-6 mt-8">
            <h3 className="font-display font-bold text-brand-800 text-lg mb-2">Run Your Own Comparison</h3>
            <p className="text-brand-700 text-sm mb-4">
              Enter any vehicle price into our car loan calculator to see monthly payments, total interest, depreciation estimates, and true cost of ownership for any scenario.
            </p>
            <Link href="/car-loan-calculator" className="btn-primary inline-flex items-center gap-2 text-sm">
              🚗 Open Car Loan Calculator →
            </Link>
          </div>
        </article>

        <div className="mt-12">
          <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="calc-card">
                <h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <h2 className="text-lg font-display font-bold text-slate-900 mb-4">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/blog/how-much-house-can-i-afford" className="calc-card hover:shadow-md transition-all group">
              <p className="font-semibold text-slate-900 group-hover:text-brand-600 text-sm">🏠 How Much House Can I Afford?</p>
              <p className="text-xs text-slate-500 mt-1">6 min read</p>
            </Link>
            <Link href="/blog/pay-off-credit-card-debt-fast" className="calc-card hover:shadow-md transition-all group">
              <p className="font-semibold text-slate-900 group-hover:text-brand-600 text-sm">💳 Pay Off Credit Card Debt Fast</p>
              <p className="text-xs text-slate-500 mt-1">8 min read</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
