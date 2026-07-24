// pages/rent-vs-buy-calculator.jsx
import Head from 'next/head';
import RentVsBuyCalculator from '../components/calculators/RentVsBuyCalculator';
import { FAQAccordion, RelatedCalcs, ShareBar } from '../components/ui';
import AdSlot from '../components/ads/AdSlot';
import { buildFAQSchema, buildCalculatorSchema, SITE_URL } from '../lib/seo';

const PAGE_TITLE = 'Rent vs. Buy Calculator — True Financial Comparison';
const PAGE_DESC = 'Should you rent or buy a home? Compare the true long-term net worth impact of renting vs. buying — including home equity, investment returns, and break-even timeline.';
const PAGE_URL = `${SITE_URL}/rent-vs-buy-calculator`;

const FAQS = [
  { question: 'Is it always better to buy than rent?', answer: "No — it depends on how long you stay, local home prices vs. rents, investment returns, and your personal circumstances. Buying typically wins financially after 5-7 years in most markets. But if you move frequently, rent is low relative to buying costs, or you can invest the down payment at high returns, renting can build equal or greater wealth. This calculator shows you the break-even point for your specific situation." },
  { question: 'What is the break-even point for buying vs. renting?', answer: "The break-even point is the year when buying's accumulated net worth (home equity minus selling costs) exceeds renting's accumulated net worth (invested down payment plus invested monthly savings). In most U.S. markets this falls between 4-8 years. If you'll move before the break-even point, renting is often the better financial choice." },
  { question: 'What happens to my down payment if I rent instead?', answer: "This calculator assumes you invest your down payment in a diversified portfolio earning your specified investment return rate. This is the critical comparison — the down payment isn't free money when you buy. It has an opportunity cost. If you put $90,000 down on a house vs. investing it at 7% average annual return, that $90,000 grows to approximately $177,000 in 10 years." },
  { question: 'How does home appreciation affect the calculation?', answer: "Home appreciation is one of the biggest levers in the buy vs. rent decision. At 4%+ annual appreciation, buying typically wins within 5-7 years. At 2% or below, the invested portfolio often outperforms home equity over most timeframes. U.S. homes have averaged approximately 3-4% annual appreciation historically, though this varies enormously by market." },
  { question: 'Should I include the tax benefit of mortgage interest?', answer: "The mortgage interest deduction only benefits you if you itemize deductions (rather than taking the standard deduction). Since the 2017 Tax Cuts and Jobs Act doubled the standard deduction, most homeowners — especially those with smaller mortgages — no longer benefit from itemizing. This calculator includes a simplified tax benefit based on your marginal rate, but consult a tax professional for your specific situation." },
  { question: 'What costs does the calculator include for buying?', answer: "Monthly buy costs include: mortgage principal and interest, property taxes (based on your tax rate), homeowner's insurance, maintenance (as a percentage of home value), and HOA fees if applicable. It also accounts for closing costs as part of the total financial picture, and deducts estimated selling costs (6%) from home equity when calculating net worth." },
];

export default function RentVsBuyPage() {
  return (
    <>
      <Head>
        <title>{PAGE_TITLE} | LifeCalc</title>
        <meta name="description" content={PAGE_DESC} />
        <meta name="keywords" content="rent vs buy calculator, should I rent or buy a house, rent vs buy comparison, home buying calculator, rent or buy financial comparison, break even rent vs buy" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESC} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={PAGE_URL} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFAQSchema(FAQS)) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildCalculatorSchema({ name: PAGE_TITLE, description: PAGE_DESC, url: PAGE_URL })) }} />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
          <a href="/" className="hover:text-brand-600 transition-colors">Home</a>
          <span>/</span>
          <span className="text-slate-800 font-medium">Rent vs. Buy Calculator</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-2">
              🏠 vs 🏢 Rent vs. Buy Calculator
            </h1>
            <p className="text-slate-600 max-w-2xl">{PAGE_DESC}</p>
          </div>
          <div className="shrink-0">
            <ShareBar title={PAGE_TITLE} url={PAGE_URL} />
          </div>
        </div>

        <div className="flex justify-center mb-8">
          <AdSlot type="leaderboard" />
        </div>

        <RentVsBuyCalculator />

        <div className="flex justify-center my-10">
          <AdSlot type="rectangle" />
        </div>

        {/* SEO Content */}
        <article className="max-w-4xl mx-auto mt-12">
          <div className="calc-card mb-6">
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">Beyond the Monthly Payment: The Real Question</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The rent vs. buy decision is one of the most consequential financial choices most people make — and it's almost always framed wrong. Most calculators ask "can you afford to buy?" But that's not the real question. The real question is: <strong>given your specific situation, timeline, and goals, which path builds more wealth and supports the life you want to live?</strong>
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              This calculator models the true long-term financial comparison. When you buy, your down payment builds equity through home appreciation and mortgage paydown. When you rent, that same down payment — plus the monthly cost difference — can be invested and compounded. Neither path is automatically better. The winner depends on your specific numbers and how long you stay.
            </p>
            <p className="text-slate-600 leading-relaxed">
              The <strong>break-even year</strong> is the most important number this calculator produces. It tells you the exact point when buying becomes the better financial decision. If you're likely to move before that year, renting is often smarter — regardless of what conventional wisdom says.
            </p>
          </div>

          <div className="calc-card mb-6">
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">The Factors That Shift the Decision</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: '📅', title: 'Time horizon is everything', desc: 'Buying typically wins after 5-7 years. Before that, transaction costs (closing costs + selling costs of ~9% total) make renting often better. If there\'s any chance you\'ll move in 3 years, run the numbers carefully.' },
                { icon: '📈', title: 'Home appreciation vs. investment returns', desc: 'If your local market appreciates faster than your investment portfolio earns, buying wins faster. In stagnant markets or with strong stock market returns, the math often favors renting.' },
                { icon: '💰', title: 'Rent-to-price ratio', desc: 'Divide annual rent by home price. Under 4% (rent is cheap relative to buying) usually favors buying. Over 6% usually favors renting. San Francisco: ~3%. Indianapolis: ~8%. Location changes everything.' },
                { icon: '🏦', title: 'The down payment opportunity cost', desc: 'A $100,000 down payment invested at 7% for 10 years = $197,000. That\'s real money that buying takes out of your investment portfolio. This calculator makes that trade-off visible.' },
                { icon: '🔄', title: 'Flexibility and mobility', desc: 'Renting offers optionality — the ability to move for a job, relationship, or lifestyle change without a $30,000-$60,000 transaction cost. This has real value that pure financial math doesn\'t capture.' },
                { icon: '🏗️', title: 'The hidden costs of buying', desc: 'Property taxes, insurance, maintenance (1-2% of value/year), HOA fees, and eventual capital gains taxes add up significantly. Our calculator includes all of these — most others don\'t.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 p-4 bg-slate-50 rounded-xl">
                  <span className="text-xl shrink-0">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm mb-1">{item.title}</p>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="calc-card mb-6">
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">Real Scenarios — What the Numbers Show</h2>
            <div className="space-y-5">
              <div className="border-l-4 border-blue-400 pl-4">
                <h3 className="font-semibold text-slate-900 mb-1">Scenario 1: Stable market, planning to stay 10 years</h3>
                <p className="text-sm text-slate-600 leading-relaxed">$450K home, $90K down, 6.9% rate, $2,200/month rent alternative, 3.5% home appreciation, 7% investment return. Result: <strong>Buying wins by ~$85,000</strong> after 10 years. Break-even at year 6. If they only stay 5 years, renting wins by ~$30,000.</p>
              </div>
              <div className="border-l-4 border-purple-400 pl-4">
                <h3 className="font-semibold text-slate-900 mb-1">Scenario 2: High-cost city, likely to relocate in 5 years</h3>
                <p className="text-sm text-slate-600 leading-relaxed">$900K home, $180K down, 7.1% rate, $3,800/month rent, 2.5% appreciation (high-cost market), 7% investment return. Result: <strong>Renting wins by ~$120,000</strong> over 5 years. The high transaction costs and modest appreciation can't overcome the opportunity cost of the $180K down payment.</p>
              </div>
              <div className="border-l-4 border-green-400 pl-4">
                <h3 className="font-semibold text-slate-900 mb-1">Scenario 3: Affordable market, long-term commitment</h3>
                <p className="text-sm text-slate-600 leading-relaxed">$280K home, $56K down, 6.5% rate, $1,400/month rent, 4% appreciation, 7% investment return. Result: <strong>Buying wins by ~$200,000</strong> after 15 years. The affordable price, strong appreciation, and long tenure make buying the clear winner.</p>
              </div>
            </div>
          </div>
        </article>

        <div className="max-w-4xl mx-auto mt-10">
          <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
          <FAQAccordion faqs={FAQS} />
        </div>

        <div className="max-w-4xl mx-auto mt-12">
          <h2 className="text-xl font-display font-bold text-slate-900 mb-4">Related Calculators</h2>
          <RelatedCalcs current="rentvsbuy" />
        </div>

        <div className="flex justify-center mt-10">
          <AdSlot type="leaderboard" />
        </div>
      </div>
    </>
  );
}
