// pages/blog/index.jsx
import Head from 'next/head';
import Link from 'next/link';
import { SITE_NAME, SITE_URL } from '../../lib/seo';

const POSTS = [
  {
    slug: 'how-much-house-can-i-afford',
    title: 'How Much House Can I Afford in 2025?',
    excerpt: 'The 28/36 rule, debt-to-income ratios, and exactly how to calculate what home price fits your budget before you start shopping.',
    date: 'April 15, 2025',
    readTime: '6 min read',
    category: 'Mortgage',
    icon: '🏠',
  },
  {
    slug: 'new-vs-used-car-true-cost',
    title: 'New vs. Used Car: Which Actually Saves You More Money?',
    excerpt: 'Depreciation, interest rates, maintenance costs — a complete breakdown of the true 5-year cost of buying new versus used.',
    date: 'April 22, 2025',
    readTime: '7 min read',
    category: 'Car Loans',
    icon: '🚗',
  },
  {
    slug: 'pay-off-credit-card-debt-fast',
    title: '7 Proven Strategies to Pay Off Credit Card Debt Fast',
    excerpt: 'The avalanche method, balance transfers, debt consolidation — a practical guide to eliminating credit card debt and saving thousands in interest.',
    date: 'April 29, 2025',
    readTime: '8 min read',
    category: 'Credit Cards',
    icon: '💳',
  },
  {
    slug: 'home-renovation-roi',
    title: 'Which Home Renovations Have the Best ROI in 2025?',
    excerpt: 'Not all renovations are created equal. Here are the projects that add the most value to your home and which ones to avoid.',
    date: 'May 6, 2025',
    readTime: '6 min read',
    category: 'Renovation',
    icon: '🔨',
  },
  {
    slug: 'true-cost-of-owning-a-boat',
    title: 'The True Cost of Owning a Boat (It\'s More Than You Think)',
    excerpt: 'Insurance, storage, maintenance, fuel — the real annual cost of boat ownership that dealers never tell you about.',
    date: 'May 13, 2025',
    readTime: '7 min read',
    category: 'Recreation',
    icon: '⛵',
  },
];

const CATEGORY_COLORS = {
  'Mortgage': 'bg-blue-100 text-blue-700',
  'Car Loans': 'bg-green-100 text-green-700',
  'Credit Cards': 'bg-red-100 text-red-700',
  'Renovation': 'bg-orange-100 text-orange-700',
  'Recreation': 'bg-teal-100 text-teal-700',
};

export default function BlogIndex() {
  return (
    <>
      <Head>
        <title>Financial Tips & Guides | LifeCalc Blog</title>
        <meta name="description" content="Free financial guides covering mortgages, car loans, credit cards, home renovation ROI, and recreational purchases. Make smarter money decisions with LifeCalc." />
        <meta name="keywords" content="financial tips, mortgage advice, car buying guide, credit card debt, home renovation ROI, personal finance blog" />
        <link rel="canonical" href={`${SITE_URL}/blog`} />
        <meta property="og:title" content="Financial Tips & Guides | LifeCalc Blog" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center gap-2 text-sm text-slate-500 justify-center mb-4">
            <Link href="/" className="hover:text-brand-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-800 font-medium">Blog</span>
          </div>
          <h1 className="text-4xl font-display font-bold text-slate-900 mb-4">
            Financial Tips & Guides
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Practical advice on mortgages, car loans, credit cards, renovations, and more — so you can make confident financial decisions.
          </p>
        </div>

        {/* Featured Post */}
        <Link href={`/blog/${POSTS[0].slug}`} className="block calc-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 mb-8 group">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl shrink-0">
              {POSTS[0].icon}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${CATEGORY_COLORS[POSTS[0].category]}`}>
                  {POSTS[0].category}
                </span>
                <span className="text-xs text-slate-400">Featured</span>
              </div>
              <h2 className="text-xl font-display font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
                {POSTS[0].title}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">{POSTS[0].excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-slate-400">
                <span>{POSTS[0].date}</span>
                <span>·</span>
                <span>{POSTS[0].readTime}</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {POSTS.slice(1).map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`}
              className="calc-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-xl">
                  {post.icon}
                </div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${CATEGORY_COLORS[post.category]}`}>
                  {post.category}
                </span>
              </div>
              <h2 className="font-display font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed flex-1 mb-3">{post.excerpt}</p>
              <div className="flex items-center gap-3 text-xs text-slate-400 mt-auto pt-3 border-t border-slate-100">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-br from-brand-600 to-brand-800 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-display font-bold mb-2">Ready to Run the Numbers?</h2>
          <p className="text-blue-100 mb-6 text-sm">Use our free calculators to see exactly what your financial decisions will cost.</p>
          <Link href="/" className="inline-flex items-center gap-2 bg-white text-brand-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm">
            View All Calculators →
          </Link>
        </div>
      </div>
    </>
  );
}
