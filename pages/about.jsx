// pages/about.jsx
import Head from 'next/head';
import Link from 'next/link';
import { CALCULATORS } from '../lib/seo';

export default function About() {
  return (
    <>
      <Head>
        <title>About LifeCalc — Free Financial Calculators Built for Real Life</title>
        <meta name="description" content="LifeCalc was built to give everyday people accurate, free financial calculators with no signup required. Learn about our mission and the tools we offer." />
        <link rel="canonical" href="https://www.yourlifecalc.com/about" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-brand-600 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-medium">About</span>
        </div>

        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-brand-600 to-brand-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <span className="text-white text-4xl font-bold">L</span>
          </div>
          <h1 className="text-4xl font-display font-bold text-slate-900 mb-4">About LifeCalc</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Free, accurate financial calculators built to help everyday people make better money decisions — no signup, no upsells, no nonsense.
          </p>
        </div>

        <div className="calc-card mb-8">
          <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">Our Mission</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            LifeCalc was created with a simple belief: everyone deserves access to accurate financial tools without having to create an account, hand over their email address, or sit through a sales pitch.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Most financial tools answer the wrong question. "Can I afford the monthly payment?" is easy. The hard question is: <strong>Should I?</strong>
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Every major financial decision is really a lifestyle decision. Buying a boat isn't just buying a boat — it's $1,400/month that can't go toward something else. An $80,000 renovation isn't just a nicer kitchen — it's the opportunity cost of what that money could become. LifeCalc makes those trade-offs visible.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Whether you're buying your first home, comparing new vs. used car costs, trying to pay off credit card debt, deciding whether to rent or buy, or wondering if you can really afford that boat — LifeCalc gives you the real numbers so you can make confident decisions.
          </p>
        </div>

        <div className="calc-card mb-8">
          <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Our Calculators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CALCULATORS.map(c => (
              <Link key={c.slug} href={c.href}
                className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl hover:bg-brand-50 border border-transparent hover:border-brand-200 transition-all group">
                <span className="text-2xl">{c.icon}</span>
                <div>
                  <p className="font-semibold text-slate-900 group-hover:text-brand-700 text-sm transition-colors">{c.title}</p>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{c.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="calc-card mb-8">
          <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Our Principles</h2>
          <div className="space-y-5">
            {[
              { icon: '🔒', title: 'Privacy First', desc: 'All calculations happen entirely in your browser. We never transmit your financial inputs to any server. Your numbers stay on your device.' },
              { icon: '🎯', title: 'No Gatekeeping', desc: 'No email required. No account needed. No free trial that converts to a subscription. Every calculator is free, forever.' },
              { icon: '✅', title: 'Accuracy You Can Trust', desc: 'Our calculators use industry-standard financial formulas. Results are estimates based on your inputs and should be verified with a licensed professional for major decisions.' },
              { icon: '📊', title: 'Total Cost Over Monthly Payment', desc: 'We show you the full financial picture — total interest, opportunity cost, break-even points, and true cost of ownership — not just what you pay each month.' },
              { icon: '💾', title: 'Remembers Your Inputs', desc: "Your calculator inputs are saved in your browser's local storage. Come back a week later and your numbers are still there." },
              { icon: '📱', title: 'Works Everywhere', desc: 'Built mobile-first so the calculators work perfectly on your phone, tablet, or desktop. Fast load times, no app download required.' },
            ].map((v, i) => (
              <div key={i} className="flex gap-4 p-4 bg-slate-50 rounded-xl">
                <span className="text-2xl shrink-0">{v.icon}</span>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">{v.title}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
          <h2 className="text-lg font-display font-bold text-amber-900 mb-3">⚠️ Important Disclaimer</h2>
          <p className="text-sm text-amber-800 leading-relaxed mb-3">
            LifeCalc's calculators are provided for <strong>educational and informational purposes only</strong>. The results are estimates based on the inputs you provide and standard financial formulas.
          </p>
          <p className="text-sm text-amber-800 leading-relaxed">
            Calculator results do not constitute financial, legal, tax, or investment advice. Always consult with a qualified financial advisor, mortgage lender, tax professional, or other licensed expert before making significant financial decisions.
          </p>
        </div>

        <div className="calc-card mb-8 text-center">
          <h2 className="text-2xl font-display font-bold text-slate-900 mb-3">Get in Touch</h2>
          <p className="text-slate-600 mb-6">Have a suggestion for a new calculator? Found a bug? We'd love to hear from you.</p>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
            📬 Contact Us
          </Link>
        </div>

        <div className="bg-gradient-to-br from-brand-600 to-brand-800 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-display font-bold mb-2">Start Calculating</h2>
          <p className="text-blue-100 mb-6 text-sm">Free calculators — no signup, no catch.</p>
          <Link href="/" className="inline-flex items-center gap-2 bg-white text-brand-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm">
            View All Calculators →
          </Link>
        </div>
      </div>
    </>
  );
}
