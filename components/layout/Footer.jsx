// components/layout/Footer.jsx
import Link from 'next/link';
import { CALCULATORS } from '../../lib/seo';
import AdSlot from '../ads/AdSlot';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 text-slate-300 mt-16 no-print">
      <div className="border-b border-slate-800 py-4 flex justify-center">
        <AdSlot type="leaderboard" label={false} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-brand-700 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">L</span>
              </div>
              <span className="font-display font-bold text-xl text-white">
                Life<span className="text-brand-400">Calc</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Free, accurate financial calculators for mortgage, line of credit, car loans, credit cards, renovation, and recreational purchase planning. No signup required.
            </p>
            <p className="text-xs text-slate-500 mt-4">
              <strong className="text-slate-400">Disclaimer:</strong> LifeCalc provides calculators for educational purposes only. Results are estimates and should not be considered financial advice. Consult a licensed financial advisor for personalized guidance.
            </p>
          </div>

          {/* Calculators */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Calculators</h3>
            <ul className="space-y-2">
              {CALCULATORS.map(c => (
                <li key={c.slug}>
                  <Link href={c.href} className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                    <span>{c.icon}</span>{c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <span>📝</span> Financial Blog
                </Link>
              </li>
              <li>
                <Link href="/blog/how-much-house-can-i-afford" className="text-sm text-slate-400 hover:text-white transition-colors">
                  How Much House Can I Afford?
                </Link>
              </li>
              <li>
                <Link href="/blog/new-vs-used-car-true-cost" className="text-sm text-slate-400 hover:text-white transition-colors">
                  New vs. Used Car Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/pay-off-credit-card-debt-fast" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Pay Off Credit Card Debt
                </Link>
              </li>
              <li className="pt-2 border-t border-slate-800">
                <Link href="/privacy-policy" className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <span>🔒</span> Privacy Policy
                </Link>
              </li>
              <li>
                <a href="https://www.consumerfinance.gov" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-white transition-colors">
                  CFPB Resources
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">© {year} LifeCalc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/blog" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Blog</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
