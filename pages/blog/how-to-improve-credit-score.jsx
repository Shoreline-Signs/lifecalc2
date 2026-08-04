// pages/blog/how-to-improve-credit-score.jsx
import Head from 'next/head';
import Link from 'next/link';
import { SITE_URL, buildFAQSchema } from '../../lib/seo';

const SLUG = 'how-to-improve-credit-score';
const TITLE = 'How to Improve Your Credit Score Fast: A Step-by-Step Guide';
const DESC = 'Your credit score affects your mortgage rate, car loan rate, and more. Here are the fastest, most effective ways to raise your credit score — backed by how FICO actually calculates it.';

const FAQS = [
  { question: 'How fast can I improve my credit score?', answer: 'Paying down credit card balances can improve your score within 1-2 billing cycles (30-60 days). Disputing and removing errors can show results in 30 days. Building a longer credit history takes years. Most people can see meaningful improvement (30-50+ points) within 3-6 months with consistent effort.' },
  { question: 'Does checking my own credit score hurt it?', answer: 'No. Checking your own credit is a "soft inquiry" and has no impact on your score. Only "hard inquiries" from lenders (when you apply for credit) can temporarily lower your score by a few points. Hard inquiries typically fall off your credit report after 2 years.' },
  { question: 'What credit score do I need for the best mortgage rate?', answer: 'Generally, a score of 760 or higher qualifies you for the best available mortgage rates. The difference between a 680 and 760 score on a $400,000 mortgage can mean 0.5-1.0% higher rate — costing $40,000-$80,000 more in interest over 30 years. It\'s worth spending 6-12 months improving your score before applying for a large loan.' },
];

export default function BlogPost6() {
  return (
    <>
      <Head>
        <title>{TITLE} | LifeCalc Blog</title>
        <meta name="description" content={DESC} />
        <meta name="keywords" content="how to improve credit score fast, raise credit score, credit score tips, FICO score factors, credit utilization, credit score for mortgage" />
        <link rel="canonical" href={`${SITE_URL}/blog/${SLUG}`} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": TITLE, "description": DESC, "url": `${SITE_URL}/blog/${SLUG}`, "publisher": { "@type": "Organization", "name": "LifeCalc", "url": SITE_URL }, "datePublished": "2025-05-20" }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFAQSchema(FAQS)) }} />
      </Head>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:text-brand-600">Home</Link><span>/</span>
          <Link href="/blog" className="hover:text-brand-600">Blog</Link><span>/</span>
          <span className="text-slate-800 font-medium">Improve Credit Score</span>
        </div>
        <div className="mb-8">
          <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">Credit</span>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4 leading-tight">{TITLE}</h1>
          <div className="flex items-center gap-4 text-sm text-slate-500"><span>May 20, 2025</span><span>·</span><span>7 min read</span></div>
        </div>
        <article className="space-y-6 text-slate-700 leading-relaxed">
          <p className="text-lg font-medium text-slate-800">Your credit score is one of the most important numbers in your financial life. It determines whether you qualify for a mortgage, car loan, or credit card — and at what interest rate. A 100-point difference can cost or save you tens of thousands of dollars.</p>

          <h2 className="text-2xl font-display font-bold text-slate-900 mt-8 mb-3">How FICO Calculates Your Score</h2>
          <p>Understanding what goes into your score is the first step to improving it:</p>
          <div className="space-y-3 my-4">
            {[
              { factor: 'Payment History', weight: '35%', color: 'bg-red-500', desc: 'On-time payments vs. late/missed payments. The single biggest factor.' },
              { factor: 'Credit Utilization', weight: '30%', color: 'bg-orange-500', desc: 'How much of your available credit you\'re using. Keep it under 30%, ideally under 10%.' },
              { factor: 'Length of Credit History', weight: '15%', color: 'bg-yellow-500', desc: 'Average age of all accounts. Older is better — don\'t close old cards.' },
              { factor: 'Credit Mix', weight: '10%', color: 'bg-green-500', desc: 'Having different types (credit cards, installment loans) shows you can manage various credit.' },
              { factor: 'New Credit Inquiries', weight: '10%', color: 'bg-blue-500', desc: 'Hard inquiries from applying for new credit. Each one temporarily lowers your score slightly.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start p-4 bg-slate-50 rounded-xl">
                <div className="text-right w-12 shrink-0">
                  <span className="text-lg font-bold text-slate-900">{item.weight}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <div className={`w-3 h-3 rounded-full ${item.color}`} />
                    <span className="font-semibold text-slate-900 text-sm">{item.factor}</span>
                  </div>
                  <p className="text-xs text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-display font-bold text-slate-900 mt-8 mb-3">7 Steps to Raise Your Score (Fastest First)</h2>
          <div className="space-y-4">
            {[
              { step: '1', title: 'Pay down credit card balances immediately', detail: 'Utilization is calculated at your statement closing date. Paying down balances before the statement closes can improve your score within 30 days. Aim for under 30% per card and under 30% overall. Getting to under 10% gives the biggest boost.', speed: 'Result: 30-60 days' },
              { step: '2', title: 'Dispute errors on your credit report', detail: 'Get your free reports at AnnualCreditReport.com (the official site). Dispute any errors — wrong account status, incorrect balances, accounts that aren\'t yours. Bureaus must investigate within 30 days. Removing one negative error can boost your score 20-100+ points.', speed: 'Result: 30-45 days' },
              { step: '3', title: 'Never miss a payment — set up autopay', detail: 'One 30-day late payment can drop your score 60-110 points and stays on your report for 7 years. Set up autopay for at least the minimum on every account. If you have a recent late payment, call the creditor and ask for a "goodwill removal" — it sometimes works.', speed: 'Result: Ongoing protection' },
              { step: '4', title: 'Ask for a credit limit increase', detail: 'If you have good payment history, call your card issuer and request a limit increase. If they increase your limit without changing your balance, your utilization ratio drops immediately. Most issuers allow this every 6-12 months.', speed: 'Result: 30-60 days' },
              { step: '5', title: 'Become an authorized user on a trusted account', detail: 'If a family member has an old credit card with a low balance and perfect payment history, ask them to add you as an authorized user. That account\'s history can appear on your credit report and boost your average account age and utilization.', speed: 'Result: 30-60 days' },
              { step: '6', title: 'Don\'t close old credit cards', detail: 'Closing an old card reduces your available credit (increases utilization) and can shorten your average credit history. Keep old cards open even if you rarely use them — use them occasionally to prevent the issuer from closing them for inactivity.', speed: 'Protect existing score' },
              { step: '7', title: 'Limit new credit applications', detail: 'Every hard inquiry drops your score 5-10 points temporarily. If you\'re planning a major loan application (mortgage, car), avoid applying for any new credit 6-12 months beforehand. Rate shopping for the same loan type within 14-45 days counts as one inquiry.', speed: 'Protect existing score' },
            ].map(item => (
              <div key={item.step} className="calc-card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-600 text-white rounded-xl flex items-center justify-center font-bold text-lg shrink-0">{item.step}</div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-display font-bold text-slate-900 text-sm">{item.title}</h3>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold whitespace-nowrap shrink-0">{item.speed}</span>
                    </div>
                    <p className="text-sm text-slate-600">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-display font-bold text-slate-900 mt-8 mb-3">Credit Score Ranges — What They Mean</h2>
          <div className="space-y-2 my-4">
            {[
              { range: '800-850', label: 'Exceptional', color: 'bg-green-500', desc: 'Best rates available on all products' },
              { range: '740-799', label: 'Very Good', color: 'bg-green-400', desc: 'Near-best rates on most products' },
              { range: '670-739', label: 'Good', color: 'bg-blue-400', desc: 'Approved for most products, slightly higher rates' },
              { range: '580-669', label: 'Fair', color: 'bg-yellow-500', desc: 'Limited options, significantly higher rates' },
              { range: 'Below 580', label: 'Poor', color: 'bg-red-500', desc: 'Difficulty qualifying; secured cards/credit-builder loans recommended' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                <div className={`w-3 h-3 rounded-full ${item.color} shrink-0`} />
                <span className="font-bold text-slate-800 w-20 text-sm">{item.range}</span>
                <span className="font-semibold text-slate-700 w-24 text-sm">{item.label}</span>
                <span className="text-xs text-slate-500">{item.desc}</span>
              </div>
            ))}
          </div>

          <div className="bg-brand-50 border border-brand-200 rounded-2xl p-6 mt-8">
            <h3 className="font-display font-bold text-brand-800 text-lg mb-2">See How Your Score Affects Your Mortgage</h3>
            <p className="text-brand-700 text-sm mb-4">Even a 0.5% rate difference on a $350,000 mortgage costs $35,000+ over 30 years. Use our mortgage calculator to see your potential payment at different rates.</p>
            <Link href="/mortgage-calculator" className="btn-primary inline-flex items-center gap-2 text-sm">🏠 Open Mortgage Calculator →</Link>
          </div>
        </article>
        <div className="mt-12">
          <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">{FAQS.map((faq, i) => (<div key={i} className="calc-card"><h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3><p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p></div>))}</div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-200">
          <h2 className="text-lg font-display font-bold text-slate-900 mb-4">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/blog/pay-off-credit-card-debt-fast" className="calc-card hover:shadow-md transition-all group"><p className="font-semibold text-slate-900 group-hover:text-brand-600 text-sm">💳 Pay Off Credit Card Debt Fast</p><p className="text-xs text-slate-500 mt-1">8 min read</p></Link>
            <Link href="/blog/how-much-house-can-i-afford" className="calc-card hover:shadow-md transition-all group"><p className="font-semibold text-slate-900 group-hover:text-brand-600 text-sm">🏠 How Much House Can I Afford?</p><p className="text-xs text-slate-500 mt-1">6 min read</p></Link>
          </div>
        </div>
      </div>
    </>
  );
}
