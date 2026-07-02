// pages/blog/pay-off-credit-card-debt-fast.jsx
import Head from 'next/head';
import Link from 'next/link';
import { SITE_URL, buildFAQSchema } from '../../lib/seo';

const SLUG = 'pay-off-credit-card-debt-fast';
const TITLE = '7 Proven Strategies to Pay Off Credit Card Debt Fast';
const DESC = 'The avalanche method, balance transfers, debt consolidation, and 4 more strategies that actually work. A practical guide to eliminating credit card debt and saving thousands in interest.';

const FAQS = [
  {
    question: 'What is the fastest way to pay off credit card debt?',
    answer: "The fastest method mathematically is the avalanche method — paying minimums on all cards and putting every extra dollar toward the highest-APR card. This minimizes total interest paid. However, the snowball method (targeting smallest balances first) is faster for many people in practice because the psychological wins keep them motivated.",
  },
  {
    question: 'How much does a balance transfer actually save?',
    answer: "A balance transfer to a 0% APR promotional card can save hundreds to thousands depending on your balance and rate. On a $6,000 balance at 22% APR, a 0% promo for 18 months saves approximately $1,980 in interest, minus the transfer fee (typically 3% = $180). Net savings: $1,800. The key is paying off the balance before the promotional period ends.",
  },
  {
    question: 'Should I use my savings to pay off credit card debt?',
    answer: "If your credit card APR (often 20-30%) is higher than what you earn on savings (typically 4-5%), paying off the card with savings is mathematically advantageous. However, always keep a minimum $1,000-$2,000 emergency fund before aggressively paying down debt — otherwise an unexpected expense goes right back on the card.",
  },
];

export default function Post3() {
  return (
    <>
      <Head>
        <title>{TITLE} | LifeCalc Blog</title>
        <meta name="description" content={DESC} />
        <meta name="keywords" content="pay off credit card debt fast, avalanche method debt payoff, balance transfer credit card, debt snowball method, credit card payoff strategies, get out of credit card debt" />
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
          "datePublished": "2025-04-29",
        })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFAQSchema(FAQS)) }} />
      </Head>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:text-brand-600">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-brand-600">Blog</Link>
          <span>/</span>
          <span className="text-slate-800 font-medium">Pay Off Credit Card Debt</span>
        </div>

        <div className="mb-8">
          <span className="inline-block bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">Credit Cards</span>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4 leading-tight">{TITLE}</h1>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span>April 29, 2025</span><span>·</span><span>8 min read</span>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-2xl p-5 mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-red-800 text-sm">💳 See how fast you can pay off your balance</p>
            <p className="text-xs text-red-600 mt-0.5">Compare minimum payments vs. aggressive payoff strategies.</p>
          </div>
          <Link href="/credit-card-calculator" className="btn-primary text-sm whitespace-nowrap" style={{background:'#e11d48'}}>Try Calculator →</Link>
        </div>

        <article className="space-y-6 text-slate-700 leading-relaxed">
          <p className="text-lg font-medium text-slate-800">
            The average American household carries $6,000+ in credit card debt at interest rates of 20-30%. At minimum payments, that debt can last 20+ years and cost more in interest than the original purchases. Here's how to eliminate it fast.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 my-4">
            <p className="font-bold text-amber-800 mb-2">⚠️ The Minimum Payment Trap</p>
            <p className="text-sm text-amber-700">On a <strong>$5,000 balance at 22% APR</strong>, paying only the 2% minimum:</p>
            <div className="grid grid-cols-3 gap-4 mt-3">
              {[
                ['Payoff Time', '21+ years'],
                ['Total Interest', '$6,800+'],
                ['Total Paid', '$11,800+'],
              ].map(([k, v], i) => (
                <div key={i} className="text-center bg-white rounded-lg p-3">
                  <p className="text-xs text-amber-600 mb-1">{k}</p>
                  <p className="font-bold text-amber-800">{v}</p>
                </div>
              ))}
            </div>
          </div>

          {[
            {
              num: '1',
              title: 'The Avalanche Method (Saves the Most Money)',
              color: 'brand',
              content: (
                <div>
                  <p className="text-sm text-slate-600 mb-3">List all your credit cards by interest rate, highest to lowest. Pay the minimum on every card, then put every extra dollar toward the highest-rate card. When that card is paid off, roll the entire payment to the next highest rate.</p>
                  <div className="bg-slate-50 rounded-lg p-4 text-sm">
                    <p className="font-semibold text-slate-800 mb-2">Example — 3 cards, $400/month total:</p>
                    <div className="space-y-2">
                      {[
                        ['Card A', '$2,000', '28% APR', 'Extra payment here first'],
                        ['Card B', '$4,000', '22% APR', 'Minimum only'],
                        ['Card C', '$1,500', '18% APR', 'Minimum only'],
                      ].map(([card, bal, rate, action], i) => (
                        <div key={i} className="flex items-center gap-3 p-2 bg-white rounded border border-slate-200">
                          <span className="font-semibold text-slate-800 w-14">{card}</span>
                          <span className="text-slate-600 w-16">{bal}</span>
                          <span className="text-red-600 font-semibold w-16">{rate}</span>
                          <span className="text-xs text-brand-600 font-semibold">{action}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ),
            },
            {
              num: '2',
              title: 'The Snowball Method (Best for Motivation)',
              color: 'purple',
              content: <p className="text-sm text-slate-600">Same as avalanche, but ordered by balance size (smallest first) instead of interest rate. You pay off small balances quickly, creating momentum and freeing up cash flow. Research shows this method results in higher debt payoff rates because psychology matters more than math for many people.</p>,
            },
            {
              num: '3',
              title: 'Balance Transfer to 0% APR Card',
              color: 'green',
              content: (
                <div>
                  <p className="text-sm text-slate-600 mb-3">Transfer high-rate balances to a card offering 0% promotional APR (typically 12-21 months). Every payment goes entirely toward principal — no interest charges during the promo period.</p>
                  <div className="bg-green-50 rounded-lg p-3 text-sm">
                    <p className="font-semibold text-green-800 mb-1">Best 0% Transfer Cards (2025):</p>
                    <ul className="text-green-700 space-y-1">
                      <li>• Wells Fargo Reflect: 0% for up to 21 months</li>
                      <li>• Citi Diamond Preferred: 0% for 21 months</li>
                      <li>• Chase Freedom Unlimited: 0% for 15 months</li>
                    </ul>
                    <p className="text-xs text-green-600 mt-2">Transfer fees: typically 3-5% of balance. Still usually worth it.</p>
                  </div>
                </div>
              ),
            },
            {
              num: '4',
              title: 'Debt Consolidation Loan',
              color: 'blue',
              content: <p className="text-sm text-slate-600">Take out a personal loan at a lower rate (typically 8-15%) to pay off all your credit cards at once. You now have one fixed monthly payment at a lower rate with a defined payoff date. Best for people with good credit who qualify for rates significantly below their card APRs.</p>,
            },
            {
              num: '5',
              title: 'Call and Negotiate a Lower Rate',
              color: 'orange',
              content: <p className="text-sm text-slate-600">Many cardholders don't realize you can simply call your credit card company and ask for a lower APR. Cardholders with on-time payment history have a 70%+ success rate getting at least a temporary rate reduction. A 5% rate reduction on a $5,000 balance saves $250/year. Takes 10 minutes.</p>,
            },
            {
              num: '6',
              title: 'Apply Windfalls Directly to Debt',
              color: 'teal',
              content: (
                <div>
                  <p className="text-sm text-slate-600 mb-3">Any unexpected money should go straight to your highest-rate card before you're tempted to spend it:</p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {['Tax refund (avg $3,100)', 'Work bonus', 'Side gig income', 'Cash gifts', 'Sold items', 'Insurance refund'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 bg-teal-50 rounded-lg p-2 text-teal-700">
                        <span>→</span><span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ),
            },
            {
              num: '7',
              title: 'Stop Using the Card While Paying It Off',
              color: 'red',
              content: <p className="text-sm text-slate-600">This sounds obvious, but it's where most people fail. Delete saved card numbers from online stores, cut up the physical card, or put it in a container of water in the freezer (seriously — it works). Switch to a debit card for daily spending. You cannot pay down a balance that keeps growing.</p>,
            },
          ].map((strategy) => (
            <div key={strategy.num} className="calc-card">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-600 text-white rounded-xl flex items-center justify-center font-bold text-lg shrink-0">{strategy.num}</div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-slate-900 mb-3">{strategy.title}</h3>
                  {strategy.content}
                </div>
              </div>
            </div>
          ))}

          <div className="bg-brand-50 border border-brand-200 rounded-2xl p-6 mt-8">
            <h3 className="font-display font-bold text-brand-800 text-lg mb-2">See Your Payoff Plan in Seconds</h3>
            <p className="text-brand-700 text-sm mb-4">
              Enter your balance and APR into our credit card calculator to instantly compare minimum payments vs. any custom amount — and see exactly how much interest you save.
            </p>
            <Link href="/credit-card-calculator" className="btn-primary inline-flex items-center gap-2 text-sm">
              💳 Open Credit Card Calculator →
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
            <Link href="/blog/new-vs-used-car-true-cost" className="calc-card hover:shadow-md transition-all group">
              <p className="font-semibold text-slate-900 group-hover:text-brand-600 text-sm">🚗 New vs. Used Car: True Cost</p>
              <p className="text-xs text-slate-500 mt-1">7 min read</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
