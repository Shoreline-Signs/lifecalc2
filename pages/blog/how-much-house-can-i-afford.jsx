// pages/blog/how-much-house-can-i-afford.jsx
import Head from 'next/head';
import Link from 'next/link';
import { SITE_URL } from '../../lib/seo';
import { buildFAQSchema } from '../../lib/seo';

const SLUG = 'how-much-house-can-i-afford';
const TITLE = 'How Much House Can I Afford in 2025?';
const DESC = 'Use the 28/36 rule, debt-to-income ratios, and our step-by-step guide to calculate exactly how much home you can afford before you start shopping.';

const FAQS = [
  {
    question: 'What is the 28/36 rule for buying a house?',
    answer: 'The 28/36 rule states that your monthly mortgage payment (including taxes and insurance) should not exceed 28% of your gross monthly income, and your total monthly debt payments should not exceed 36% of gross monthly income. For example, with a $7,000/month gross income, your target mortgage payment is $1,960 or less, and total debts $2,520 or less.',
  },
  {
    question: 'How much do I need for a down payment?',
    answer: 'The traditional recommendation is 20% to avoid Private Mortgage Insurance (PMI). However, FHA loans allow as little as 3.5% down, and conventional loans allow 3-5% down with PMI. A larger down payment reduces your monthly payment, eliminates PMI, and may qualify you for a lower interest rate.',
  },
  {
    question: 'What credit score do I need to buy a house?',
    answer: 'Most conventional lenders require a minimum credit score of 620-640. FHA loans accept scores as low as 580 with 3.5% down. For the best interest rates, you generally need a score of 740 or higher. Even a small rate difference can save tens of thousands over a 30-year mortgage.',
  },
];

export default function Post1() {
  return (
    <>
      <Head>
        <title>{TITLE} | LifeCalc Blog</title>
        <meta name="description" content={DESC} />
        <meta name="keywords" content="how much house can I afford, home affordability calculator, 28 36 rule mortgage, debt to income ratio home buying, first time home buyer" />
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
          "datePublished": "2025-04-15",
        })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFAQSchema(FAQS)) }} />
      </Head>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:text-brand-600">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-brand-600">Blog</Link>
          <span>/</span>
          <span className="text-slate-800 font-medium">Home Affordability</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">Mortgage</span>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4 leading-tight">{TITLE}</h1>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span>April 15, 2025</span>
            <span>·</span>
            <span>6 min read</span>
          </div>
        </div>

        {/* CTA Box */}
        <div className="bg-brand-50 border border-brand-200 rounded-2xl p-5 mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-brand-800 text-sm">🏠 Calculate your exact affordability</p>
            <p className="text-xs text-brand-600 mt-0.5">Enter your income and see your maximum home price instantly.</p>
          </div>
          <Link href="/mortgage-calculator" className="btn-primary text-sm whitespace-nowrap">Try Calculator →</Link>
        </div>

        {/* Article */}
        <article className="prose-content space-y-6 text-slate-700 leading-relaxed">

          <p className="text-lg font-medium text-slate-800">
            One of the biggest mistakes home buyers make is starting their search before knowing what they can actually afford. They fall in love with a home, then discover the payments are $800/month more than their budget allows. Here's how to do it right.
          </p>

          <h2 className="text-2xl font-display font-bold text-slate-900 mt-8 mb-3">The 28/36 Rule — Your Starting Point</h2>
          <p>
            Lenders use the 28/36 rule as a baseline for mortgage qualification. It works like this:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li><strong>28% rule:</strong> Your total housing payment (principal, interest, property taxes, and homeowner's insurance — called PITI) should not exceed 28% of your gross monthly income.</li>
            <li><strong>36% rule:</strong> Your total monthly debt payments (mortgage + car loans + student loans + credit cards + any other debt) should not exceed 36% of your gross monthly income.</li>
          </ul>
          <p>
            For example, if you earn $8,000/month gross, your maximum mortgage payment should be around $2,240 (28%), and your total debts including the mortgage should stay under $2,880 (36%).
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 my-6">
            <p className="font-semibold text-slate-800 mb-3">Quick Calculation Table — Monthly Income to Max Mortgage</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-2 text-slate-600 font-semibold">Gross Monthly Income</th>
                    <th className="text-right py-2 text-slate-600 font-semibold">Max Payment (28%)</th>
                    <th className="text-right py-2 text-slate-600 font-semibold">Max Total Debt (36%)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ['$4,000', '$1,120', '$1,440'],
                    ['$6,000', '$1,680', '$2,160'],
                    ['$8,000', '$2,240', '$2,880'],
                    ['$10,000', '$2,800', '$3,600'],
                    ['$12,000', '$3,360', '$4,320'],
                    ['$15,000', '$4,200', '$5,400'],
                  ].map(([income, max, total], i) => (
                    <tr key={i} className="hover:bg-slate-50">
                      <td className="py-2 font-medium text-slate-800">{income}</td>
                      <td className="py-2 text-right text-brand-600 font-semibold">{max}</td>
                      <td className="py-2 text-right text-slate-600">{total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <h2 className="text-2xl font-display font-bold text-slate-900 mt-8 mb-3">Step-by-Step: Calculate Your Home Buying Budget</h2>

          <div className="space-y-4">
            {[
              { step: '1', title: 'Calculate your gross monthly income', desc: 'Add up all income before taxes — salary, freelance, rental income, etc. Use your total household income if buying with a partner.' },
              { step: '2', title: 'Multiply by 28% to get your max payment', desc: 'This is your maximum PITI (Principal, Interest, Taxes, Insurance). Subtract your estimated monthly taxes and insurance to find your maximum P&I payment.' },
              { step: '3', title: 'Check your existing debts', desc: 'Add up all current monthly debt payments — car loans, student loans, credit card minimums. Subtract this from your 36% threshold to find what\'s left for a mortgage.' },
              { step: '4', title: 'Use the lower of the two numbers', desc: 'Take whichever limit is lower — the 28% housing limit or the remaining amount after the 36% total debt limit. That\'s your true maximum monthly payment.' },
              { step: '5', title: 'Work backward to find your home price', desc: 'Use our mortgage calculator to find what home price produces your maximum monthly payment at current interest rates.' },
            ].map(s => (
              <div key={s.step} className="flex gap-4 p-4 bg-slate-50 rounded-xl">
                <div className="w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">{s.step}</div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm mb-1">{s.title}</p>
                  <p className="text-sm text-slate-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-display font-bold text-slate-900 mt-8 mb-3">Hidden Costs First-Time Buyers Miss</h2>
          <p>
            Your mortgage payment is just one part of the true cost of homeownership. Before setting your budget, make sure you account for:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
            {[
              { icon: '🏦', title: 'Closing costs', desc: '2-5% of loan amount, typically $6,000-$15,000+' },
              { icon: '🔧', title: 'Maintenance & repairs', desc: 'Budget 1-2% of home value annually ($4,000-$8,000 on a $400k home)' },
              { icon: '🏠', title: 'HOA fees', desc: '$200-$600/month in many communities' },
              { icon: '💡', title: 'Utilities', desc: 'Typically $200-$500/month more than renting an apartment' },
              { icon: '📋', title: 'PMI', desc: '0.5-1.5% annually if down payment is under 20%' },
              { icon: '🌿', title: 'Landscaping/Snow removal', desc: '$1,000-$3,000/year depending on property and climate' },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 p-3 border border-slate-200 rounded-xl">
                <span className="text-lg">{item.icon}</span>
                <div>
                  <p className="text-sm font-semibold text-slate-800">{item.title}</p>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-display font-bold text-slate-900 mt-8 mb-3">The Impact of Interest Rates on Affordability</h2>
          <p>
            Interest rates dramatically affect how much home your budget can support. Consider a buyer with a $2,500/month maximum payment:
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 my-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-2 font-semibold text-slate-600">Interest Rate</th>
                  <th className="text-right py-2 font-semibold text-slate-600">Max Loan (30yr)</th>
                  <th className="text-right py-2 font-semibold text-slate-600">With 20% Down</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ['5.0%', '$466,000', '$582,000'],
                  ['6.0%', '$417,000', '$521,000'],
                  ['6.9%', '$379,000', '$474,000'],
                  ['7.5%', '$357,000', '$446,000'],
                  ['8.0%', '$341,000', '$426,000'],
                ].map(([rate, loan, price], i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="py-2 font-medium text-slate-800">{rate}</td>
                    <td className="py-2 text-right text-slate-600">{loan}</td>
                    <td className="py-2 text-right text-brand-600 font-semibold">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            A 1% difference in rate changes your maximum home price by roughly $45,000-$50,000. This is why improving your credit score before applying — and shopping multiple lenders — can make a significant difference in what you can afford.
          </p>

          <h2 className="text-2xl font-display font-bold text-slate-900 mt-8 mb-3">How Much Should You Actually Spend?</h2>
          <p>
            Just because a lender approves you for a certain amount doesn't mean you should borrow that much. Lenders calculate maximum qualification — not optimal financial health. Many financial advisors suggest staying well below your maximum:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li><strong>Conservative:</strong> Keep housing at 20-25% of gross income for maximum financial flexibility and savings capacity.</li>
            <li><strong>Moderate:</strong> 25-28% is comfortable for most buyers with stable income and limited other debt.</li>
            <li><strong>Stretched:</strong> 28-33% works if you have exceptional job security, no other debts, and a solid emergency fund.</li>
            <li><strong>Risky:</strong> Above 33% leaves little room for income disruption, emergency expenses, or retirement savings.</li>
          </ul>

          <div className="bg-brand-50 border border-brand-200 rounded-2xl p-6 mt-8">
            <h3 className="font-display font-bold text-brand-800 text-lg mb-2">Ready to Calculate Your Exact Numbers?</h3>
            <p className="text-brand-700 text-sm mb-4">
              Enter your home price, down payment, interest rate, and income into our mortgage calculator to see your exact payment, affordability rating, and full amortization schedule.
            </p>
            <Link href="/mortgage-calculator" className="btn-primary inline-flex items-center gap-2 text-sm">
              🏠 Open Mortgage Calculator →
            </Link>
          </div>
        </article>

        {/* FAQ */}
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

        {/* Related */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <h2 className="text-lg font-display font-bold text-slate-900 mb-4">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/blog/new-vs-used-car-true-cost" className="calc-card hover:shadow-md transition-all group">
              <p className="font-semibold text-slate-900 group-hover:text-brand-600 text-sm">🚗 New vs. Used Car: Which Saves More?</p>
              <p className="text-xs text-slate-500 mt-1">7 min read</p>
            </Link>
            <Link href="/blog/pay-off-credit-card-debt-fast" className="calc-card hover:shadow-md transition-all group">
              <p className="font-semibold text-slate-900 group-hover:text-brand-600 text-sm">💳 7 Ways to Pay Off Credit Card Debt Fast</p>
              <p className="text-xs text-slate-500 mt-1">8 min read</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
