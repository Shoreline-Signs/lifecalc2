// lib/seo.js

export const SITE_NAME = 'LifeCalc';
export const SITE_URL = 'https://www.yourlifecalc.com';
export const SITE_DESCRIPTION = 'Make the financial decisions that shape your lifestyle — where you live, how you travel, how you enjoy life — with eyes wide open. Free calculators with no signup required.';

export const CALCULATORS = [
  {
    slug: 'mortgage',
    title: 'Mortgage Calculator',
    shortTitle: 'Mortgage',
    description: 'Calculate your monthly mortgage payment with taxes, insurance, and full amortization breakdown.',
    keywords: 'mortgage calculator with taxes, monthly mortgage payment calculator, home loan calculator',
    icon: '🏠',
    color: 'blue',
    href: '/mortgage-calculator',
  },
  {
    slug: 'rentvsbuy',
    title: 'Rent vs. Buy Calculator',
    shortTitle: 'Rent vs. Buy',
    description: 'Should you rent or buy? Compare true long-term net worth — including home equity, investment returns, and break-even timeline.',
    keywords: 'rent vs buy calculator, should I rent or buy, rent vs buy comparison',
    icon: '⚖️',
    color: 'indigo',
    href: '/rent-vs-buy-calculator',
  },
  {
    slug: 'loc',
    title: 'Line of Credit Calculator',
    shortTitle: 'Line of Credit',
    description: 'Find out how long it takes to pay off your line of credit and how much interest you\'ll pay.',
    keywords: 'line of credit payment calculator, HELOC calculator, LOC payoff calculator',
    icon: '💳',
    color: 'purple',
    href: '/line-of-credit-calculator',
  },
  {
    slug: 'car',
    title: 'Car Loan Calculator',
    shortTitle: 'Car Loan',
    description: 'Calculate monthly payments, total interest, and true cost of ownership for new and used vehicles.',
    keywords: 'car loan calculator, auto loan calculator, new car payment calculator',
    icon: '🚗',
    color: 'green',
    href: '/car-loan-calculator',
  },
  {
    slug: 'creditcard',
    title: 'Credit Card Calculator',
    shortTitle: 'Credit Card',
    description: 'Calculate how long to pay off your credit card, total interest, and how much you save by paying more than the minimum.',
    keywords: 'credit card payoff calculator, credit card interest calculator, minimum payment calculator',
    icon: '💳',
    color: 'red',
    href: '/credit-card-calculator',
  },
  {
    slug: 'renovation',
    title: 'Renovation Cost Calculator',
    shortTitle: 'Renovation',
    description: 'Estimate renovation financing costs, monthly payments, and total project cost whether you pay cash or finance.',
    keywords: 'renovation cost estimator, home renovation loan calculator, remodel financing calculator',
    icon: '🔨',
    color: 'orange',
    href: '/renovation-calculator',
  },
  {
    slug: 'recreation',
    title: 'Recreation & Lifestyle Calculator',
    shortTitle: 'Recreation',
    description: 'Calculate the true monthly and yearly cost of boats, RVs, ATVs, and vacation purchases.',
    keywords: 'boat affordability calculator, RV cost calculator, recreation vehicle loan calculator',
    icon: '⛵',
    color: 'teal',
    href: '/recreation-calculator',
  },
];

export function buildFAQSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

export function buildCalculatorSchema({ name, description, url }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name, description, url,
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };
}
