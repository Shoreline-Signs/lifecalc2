// pages/index.jsx
import Head from 'next/head';
import Link from 'next/link';
import { CALCULATORS, SITE_NAME, SITE_DESCRIPTION } from '../lib/seo';
import AdSlot from '../components/ads/AdSlot';

const COLOR_MAP = {
  blue:   { bg: 'bg-blue-50',   border: 'border-blue-200',   icon: 'bg-blue-100 text-blue-600',   btn: 'bg-blue-600 hover:bg-blue-700' },
  indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', icon: 'bg-indigo-100 text-indigo-600', btn: 'bg-indigo-600 hover:bg-indigo-700' },
  purple: { bg: 'bg-purple-50', border: 'border-purple-200', icon: 'bg-purple-100 text-purple-600', btn: 'bg-purple-600 hover:bg-purple-700' },
  green:  { bg: 'bg-green-50',  border: 'border-green-200',  icon: 'bg-green-100 text-green-600',  btn: 'bg-green-600 hover:bg-green-700' },
  red:    { bg: 'bg-red-50',    border: 'border-red-200',    icon: 'bg-red-100 text-red-600',      btn: 'bg-red-600 hover:bg-red-700' },
  orange: { bg: 'bg-orange-50', border: 'border-orange-200', icon: 'bg-orange-100 text-orange-600', btn: 'bg-orange-600 hover:bg-orange-700' },
  teal:   { bg: 'bg-teal-50',   border: 'border-teal-200',   icon: 'bg-teal-100 text-teal-600',   btn: 'bg-teal-600 hover:bg-teal-700' },
};

const DECISIONS = [
  { icon: '🏠', question: 'Should I buy or keep renting?', calc: 'Rent vs. Buy', href: '/rent-vs-buy-calculator' },
  { icon: '🚗', question: 'New car, used car, or rideshare?', calc: 'Car Loan', href: '/car-loan-calculator' },
  { icon: '⛵', question: 'Can I really afford that boat?', calc: 'Recreation', href: '/recreation-calculator' },
  { icon: '🔨', question: 'Renovate now or invest instead?', calc: 'Renovation', href: '/renovation-calculator' },
  { icon: '💳', question: 'How long will this debt follow me?', calc: 'Credit Card', href: '/credit-card-calculator' },
  { icon: '🏦', question: "What's my home really costing me?", calc: 'Mortgage', href: '/mortgage-calculator' },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>{SITE_NAME} — Clarity on the Financial Decisions That Shape Your Life</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta name="keywords" content="rent vs buy calculator, mortgage calculator, car loan calculator, line of credit calculator, credit card payoff calculator, renovation cost calculator, boat affordability calculator, financial calculators, lifestyle financial planning" />
        <meta property="og:title" content={`${SITE_NAME} — Clarity on the Financial Decisions That Shape Your Life`} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.yourlifecalc.com" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": SITE_NAME,
          "description": SITE_DESCRIPTION,
          "url": "https://www.yourlifecalc.com",
        })}} />
      </Head>

      {/* Hero — new vision */}
      <section className="relative bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Free — No signup required
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              Clarity on the decisions<br />
              <span className="text-accent-400">that shape your life.</span>
            </h1>
            <p className="text-xl text-blue-100 mb-4 max-w-2xl leading-relaxed font-medium">
              Where you live. How you travel. What you drive. How you enjoy life.
            </p>
            <p className="text-base text-blue-200 mb-10 max-w-2xl leading-relaxed">
              Every major financial decision is really a lifestyle decision. LifeCalc shows you the true long-term impact — not just the monthly payment — so you can choose with eyes wide open.
            </p>
            <div className="flex flex-wrap gap-3">
              {CALCULATORS.map(c => (
                <Link key={c.slug} href={c.href}
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm rounded-xl px-4 py-2.5 text-sm font-medium transition-all hover:scale-105">
                  <span>{c.icon}</span>
                  {c.shortTitle}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* "The question is Should I?" section */}
      <section className="bg-white border-b border-slate-200 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
              Most tools tell you if you <em>can</em>.<br />
              LifeCalc tells you if you <em>should</em>.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              If you're considering a $65,000 boat, a $450,000 home, or an $80,000 renovation — you can probably figure out the monthly payment on your own. What's harder to see is the true trade-off: the total cost over time, the opportunity cost of that capital, and what you're actually choosing <em>against</em>.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {DECISIONS.map((d, i) => (
              <Link key={i} href={d.href}
                className="group flex items-start gap-4 p-5 bg-slate-50 hover:bg-brand-50 border border-slate-200 hover:border-brand-300 rounded-2xl transition-all duration-200">
                <span className="text-2xl shrink-0">{d.icon}</span>
                <div>
                  <p className="font-semibold text-slate-900 group-hover:text-brand-700 transition-colors mb-1">{d.question}</p>
                  <p className="text-xs text-brand-600 font-semibold">→ {d.calc} Calculator</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Header Ad */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-center">
        <AdSlot type="leaderboard" />
      </div>

      {/* Calculator Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-3">Choose Your Calculator</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Each one shows you the full picture — total cost, trade-offs, and what it really means for your financial life.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CALCULATORS.map((calc) => {
            const colors = COLOR_MAP[calc.color] || COLOR_MAP.blue;
            return (
              <Link key={calc.slug} href={calc.href}
                className={`group calc-card ${colors.bg} ${colors.border} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 ${colors.icon} rounded-2xl flex items-center justify-center text-2xl shrink-0 shadow-sm`}>
                    {calc.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-lg text-slate-900 mb-2 group-hover:text-brand-700 transition-colors">
                      {calc.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">{calc.description}</p>
                    <span className={`inline-flex items-center gap-1 ${colors.btn} text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors`}>
                      Open Calculator →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Philosophy section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">Your competition is spreadsheets.</h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Right now, people making major financial decisions are building their own spreadsheets to understand the trade-offs. LifeCalc exists so you don't have to.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🔍', title: 'Total cost, not monthly payment', desc: 'Seeing $1,400/month for a boat is different from seeing $168,000 over 10 years. We show you both — and what that money could do instead.' },
              { icon: '⚖️', title: 'Trade-offs made visible', desc: 'Every financial decision means choosing against something else. If you renovate for $80K, you\'re not investing that $80K. We make the opportunity cost explicit.' },
              { icon: '📅', title: 'Over time, not just today', desc: 'The rent vs. buy break-even. The 7-year boat cost. The 30-year mortgage interest. Decisions look different when you see 1, 3, 5, and 10 year timelines together.' },
              { icon: '🔒', title: 'Privacy first', desc: 'All calculations happen in your browser. Your financial inputs never touch a server. No account required, ever.' },
              { icon: '💾', title: 'Saves your inputs', desc: 'Come back a week later and your numbers are still there. Local storage, not a database.' },
              { icon: '🎯', title: 'Built for the "should I?" question', desc: 'Not "can I afford this?" — you already know that. But "is this the right choice for my life?" That\'s what LifeCalc is for.' },
            ].map((f, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5">
                <span className="text-2xl mb-3 block">{f.icon}</span>
                <h3 className="font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-display font-bold text-slate-900">Financial Guides</h2>
          <Link href="/blog" className="text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors">View all →</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: '🏠', title: 'How Much House Can I Afford in 2025?', href: '/blog/how-much-house-can-i-afford', time: '6 min read' },
            { icon: '🚗', title: 'New vs. Used Car: Which Actually Saves More?', href: '/blog/new-vs-used-car-true-cost', time: '7 min read' },
            { icon: '💳', title: '7 Proven Strategies to Pay Off Credit Card Debt', href: '/blog/pay-off-credit-card-debt-fast', time: '8 min read' },
          ].map((post, i) => (
            <Link key={i} href={post.href}
              className="calc-card hover:shadow-md transition-all group">
              <span className="text-2xl mb-3 block">{post.icon}</span>
              <h3 className="font-display font-bold text-slate-900 group-hover:text-brand-600 transition-colors mb-2 leading-snug">{post.title}</h3>
              <p className="text-xs text-slate-400">{post.time}</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 pb-8 flex justify-center">
        <AdSlot type="rectangle" />
      </div>
    </>
  );
}
