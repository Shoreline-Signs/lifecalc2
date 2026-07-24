// components/calculators/RentVsBuyCalculator.jsx
import { useState, useEffect, useCallback } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import { formatCurrency } from '../../lib/calculations';
import { useLocalStorage } from '../../lib/useLocalStorage';
import { InputField, SliderField, ResultCard, StatBig, BreakdownRow } from '../ui';
import AdSlot from '../ads/AdSlot';

const DEFAULTS = {
  // Buy inputs
  homePrice: 450000,
  downPayment: 90000,
  mortgageRate: 6.9,
  mortgageTerm: 30,
  propertyTaxRate: 1.2,
  homeInsurance: 1800,
  maintenanceRate: 1.0,
  hoaMonthly: 0,
  homeAppreciationRate: 3.5,
  // Rent inputs
  monthlyRent: 2200,
  rentIncreaseRate: 3.0,
  // Shared
  investmentReturn: 7.0,
  yearsToCompare: 7,
  marginalTaxRate: 24,
};

function calcRentVsBuy(inputs) {
  const {
    homePrice, downPayment, mortgageRate, mortgageTerm,
    propertyTaxRate, homeInsurance, maintenanceRate, hoaMonthly,
    homeAppreciationRate, monthlyRent, rentIncreaseRate,
    investmentReturn, yearsToCompare, marginalTaxRate,
  } = inputs;

  const loanAmount = homePrice - downPayment;
  const monthlyMortgageRate = mortgageRate / 100 / 12;
  const numPayments = mortgageTerm * 12;

  // Monthly mortgage P&I
  let monthlyPI = 0;
  if (loanAmount > 0 && mortgageRate > 0) {
    monthlyPI = loanAmount * (monthlyMortgageRate * Math.pow(1 + monthlyMortgageRate, numPayments)) / (Math.pow(1 + monthlyMortgageRate, numPayments) - 1);
  }

  const monthlyTax = (homePrice * propertyTaxRate / 100) / 12;
  const monthlyInsurance = homeInsurance / 12;
  const monthlyMaintenance = (homePrice * maintenanceRate / 100) / 12;
  const totalMonthlyBuy = monthlyPI + monthlyTax + monthlyInsurance + monthlyMaintenance + hoaMonthly;

  // Build year-by-year comparison
  const yearlyData = [];
  let buyBalance = loanAmount;
  let buyTotalCost = downPayment; // includes opportunity cost of down payment
  let rentTotalCost = 0;
  let investmentValue = downPayment; // if renting, you invest the down payment
  let currentRent = monthlyRent;
  let currentHomeValue = homePrice;

  for (let year = 1; year <= Math.min(yearsToCompare, 30); year++) {
    // Buy: calculate year's costs
    let yearInterest = 0;
    let yearPrincipal = 0;
    for (let m = 0; m < 12; m++) {
      const interest = buyBalance * monthlyMortgageRate;
      const principal = Math.min(monthlyPI - interest, buyBalance);
      yearInterest += interest;
      yearPrincipal += principal;
      buyBalance = Math.max(0, buyBalance - principal);
    }

    const yearTax = monthlyTax * 12;
    const yearInsurance = monthlyInsurance * 12;
    const yearMaintenance = monthlyMaintenance * 12;
    const yearHOA = hoaMonthly * 12;
    const yearBuyCost = monthlyPI * 12 + yearTax + yearInsurance + yearMaintenance + yearHOA;

    // Tax deduction on mortgage interest (simplified)
    const taxSaving = yearInterest * (marginalTaxRate / 100);
    buyTotalCost += yearBuyCost - taxSaving;

    // Home value appreciation
    currentHomeValue *= (1 + homeAppreciationRate / 100);
    const homeEquity = currentHomeValue - buyBalance;

    // Rent: calculate year's costs
    const yearRentCost = currentRent * 12;
    rentTotalCost += yearRentCost;
    currentRent *= (1 + rentIncreaseRate / 100);

    // Rent: investment grows (down payment + monthly savings invested)
    const monthlySavings = Math.max(0, totalMonthlyBuy - monthlyRent);
    investmentValue = investmentValue * (1 + investmentReturn / 100) + monthlySavings * 12;

    // Net position
    // Buy net worth = home equity - selling costs (6%)
    const buySellCosts = currentHomeValue * 0.06;
    const buyNetPosition = homeEquity - buySellCosts;

    // Rent net position = investment portfolio - cumulative rent paid (relative to buy)
    const rentNetPosition = investmentValue;

    yearlyData.push({
      year,
      buyTotalCost: Math.round(buyTotalCost),
      rentTotalCost: Math.round(rentTotalCost),
      buyNetWorth: Math.round(buyNetPosition),
      rentNetWorth: Math.round(rentNetPosition),
      homeValue: Math.round(currentHomeValue),
      homeEquity: Math.round(homeEquity),
      investmentPortfolio: Math.round(investmentValue),
      monthlyBuy: Math.round(totalMonthlyBuy),
      monthlyRent: Math.round(currentRent / (1 + rentIncreaseRate / 100)), // current year rent
    });
  }

  const finalYear = yearlyData[yearlyData.length - 1];
  const breakEvenYear = yearlyData.find(y => y.buyNetWorth > y.rentNetWorth)?.year || null;

  return {
    monthlyBuyCost: Math.round(totalMonthlyBuy),
    monthlyRentCost: Math.round(monthlyRent),
    yearlyData,
    finalYear,
    breakEvenYear,
    loanAmount,
    monthlyPI: Math.round(monthlyPI),
  };
}

export default function RentVsBuyCalculator() {
  const [inputs, setInputs, clearInputs] = useLocalStorage('rentvsbuy-inputs', DEFAULTS);
  const [results, setResults] = useState(null);
  const [activeTab, setActiveTab] = useState('summary');

  const calculate = useCallback(() => {
    const numInputs = Object.fromEntries(
      Object.entries(inputs).map(([k, v]) => [k, Number(v)])
    );
    setResults(calcRentVsBuy(numInputs));
  }, [inputs]);

  useEffect(() => { calculate(); }, [calculate]);

  const handleChange = (field) => (e) => {
    setInputs(prev => ({ ...prev, [field]: e.target.value }));
  };

  const finalYear = results?.finalYear;
  const buyWins = finalYear && finalYear.buyNetWorth > finalYear.rentNetWorth;

  return (
    <div className="animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Inputs */}
        <div className="lg:col-span-1 space-y-4">
          {/* Buy inputs */}
          <div className="calc-card">
            <h2 className="text-lg font-display font-bold text-slate-900 mb-5 flex items-center gap-2">
              <span>🏠</span> If You Buy
            </h2>
            <InputField label="Home Price" name="homePrice" value={inputs.homePrice} onChange={handleChange('homePrice')} prefix="$" min={1} step={5000} />
            <InputField label="Down Payment" name="downPayment" value={inputs.downPayment} onChange={handleChange('downPayment')} prefix="$" min={0} step={1000} helper={`${((inputs.downPayment / inputs.homePrice) * 100).toFixed(1)}% down`} />
            <SliderField label="Mortgage Rate" name="mortgageRate" value={inputs.mortgageRate} onChange={handleChange('mortgageRate')} min={3} max={12} step={0.05} suffix="%" />
            <div className="mb-4">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Loan Term</label>
              <div className="grid grid-cols-3 gap-2">
                {[15, 20, 30].map(t => (
                  <button key={t} onClick={() => setInputs(p => ({ ...p, mortgageTerm: t }))}
                    className={`py-2 rounded-lg text-xs font-medium transition-all ${inputs.mortgageTerm == t ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>
                    {t} yr
                  </button>
                ))}
              </div>
            </div>
            <SliderField label="Property Tax Rate" name="propertyTaxRate" value={inputs.propertyTaxRate} onChange={handleChange('propertyTaxRate')} min={0.5} max={3} step={0.05} suffix="%" />
            <InputField label="Annual Home Insurance" name="homeInsurance" value={inputs.homeInsurance} onChange={handleChange('homeInsurance')} prefix="$" />
            <SliderField label="Annual Maintenance" name="maintenanceRate" value={inputs.maintenanceRate} onChange={handleChange('maintenanceRate')} min={0.5} max={3} step={0.1} suffix="% of home value" />
            <InputField label="Monthly HOA (if any)" name="hoaMonthly" value={inputs.hoaMonthly} onChange={handleChange('hoaMonthly')} prefix="$" />
            <SliderField label="Home Appreciation Rate" name="homeAppreciationRate" value={inputs.homeAppreciationRate} onChange={handleChange('homeAppreciationRate')} min={0} max={8} step={0.1} suffix="% per year" />
          </div>

          {/* Rent inputs */}
          <div className="calc-card">
            <h2 className="text-lg font-display font-bold text-slate-900 mb-5 flex items-center gap-2">
              <span>🏢</span> If You Rent
            </h2>
            <InputField label="Monthly Rent" name="monthlyRent" value={inputs.monthlyRent} onChange={handleChange('monthlyRent')} prefix="$" min={0} step={50} />
            <SliderField label="Annual Rent Increase" name="rentIncreaseRate" value={inputs.rentIncreaseRate} onChange={handleChange('rentIncreaseRate')} min={0} max={8} step={0.1} suffix="%" />
          </div>

          {/* Assumptions */}
          <div className="calc-card">
            <h2 className="text-lg font-display font-bold text-slate-900 mb-5 flex items-center gap-2">
              <span>📊</span> Assumptions
            </h2>
            <SliderField label="Investment Return (if renting)" name="investmentReturn" value={inputs.investmentReturn} onChange={handleChange('investmentReturn')} min={0} max={12} step={0.1} suffix="%" />
            <SliderField label="Marginal Tax Rate" name="marginalTaxRate" value={inputs.marginalTaxRate} onChange={handleChange('marginalTaxRate')} min={10} max={40} step={1} suffix="%" />
            <div className="mb-4">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Compare Over</label>
              <div className="grid grid-cols-4 gap-2">
                {[3, 5, 7, 10, 15, 20, 25, 30].map(y => (
                  <button key={y} onClick={() => setInputs(p => ({ ...p, yearsToCompare: y }))}
                    className={`py-2 rounded-lg text-xs font-medium transition-all ${inputs.yearsToCompare == y ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>
                    {y}yr
                  </button>
                ))}
              </div>
            </div>
            <button onClick={() => clearInputs()} className="btn-secondary w-full text-sm mt-2">Reset</button>
          </div>
        </div>

        {/* Results */}
        <div className="lg:col-span-2 space-y-4">
          {results && finalYear && (
            <>
              {/* Verdict */}
              <div className={`rounded-2xl p-6 text-white ${buyWins ? 'bg-gradient-to-br from-brand-600 to-brand-800' : 'bg-gradient-to-br from-purple-600 to-purple-800'}`}>
                <div className="text-center mb-6">
                  <p className="text-sm font-semibold opacity-80 uppercase tracking-wider mb-2">After {inputs.yearsToCompare} Years</p>
                  <p className="text-4xl font-display font-bold mb-1">
                    {buyWins ? '🏠 Buying Wins' : '🏢 Renting Wins'}
                  </p>
                  <p className="text-sm opacity-80">
                    {buyWins
                      ? `Buying builds ${formatCurrency(finalYear.buyNetWorth - finalYear.rentNetWorth)} more net worth`
                      : `Renting + investing builds ${formatCurrency(finalYear.rentNetWorth - finalYear.buyNetWorth)} more net worth`
                    }
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="text-center">
                    <p className="text-xs opacity-70 mb-1">Monthly Buy Cost</p>
                    <p className="text-xl font-bold">{formatCurrency(results.monthlyBuyCost)}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs opacity-70 mb-1">Monthly Rent</p>
                    <p className="text-xl font-bold">{formatCurrency(results.monthlyRentCost)}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs opacity-70 mb-1">Buy Net Worth</p>
                    <p className="text-xl font-bold">{formatCurrency(finalYear.buyNetWorth)}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs opacity-70 mb-1">Rent Net Worth</p>
                    <p className="text-xl font-bold">{formatCurrency(finalYear.rentNetWorth)}</p>
                  </div>
                </div>
              </div>

              {/* Break-even callout */}
              {results.breakEvenYear && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
                  <span className="text-2xl">⚖️</span>
                  <div>
                    <p className="font-bold text-amber-800">Break-even point: Year {results.breakEvenYear}</p>
                    <p className="text-sm text-amber-700">Buying becomes financially better than renting at the {results.breakEvenYear}-year mark. If you plan to stay shorter, renting may be the smarter financial choice.</p>
                  </div>
                </div>
              )}

              {/* Tabs */}
              <div className="calc-card">
                <div className="flex gap-1 mb-5 bg-slate-100 p-1 rounded-xl overflow-x-auto">
                  {['summary', 'net worth', 'costs', 'year by year'].map(tab => (
                    <button key={tab} onClick={() => setActiveTab(tab)}
                      className={`flex-1 py-2 px-2 text-xs font-medium rounded-lg capitalize whitespace-nowrap transition-all ${activeTab === tab ? 'bg-white shadow-sm text-brand-700' : 'text-slate-500 hover:text-slate-700'}`}>
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Summary Tab */}
                {activeTab === 'summary' && (
                  <div className="animate-fade-in">
                    <div className="grid grid-cols-2 gap-4 mb-5">
                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                        <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-3">🏠 Buying</p>
                        <BreakdownRow label="Mortgage P&I" value={formatCurrency(results.monthlyPI)} />
                        <BreakdownRow label="Property Tax" value={formatCurrency((inputs.homePrice * inputs.propertyTaxRate / 100) / 12)} />
                        <BreakdownRow label="Insurance" value={formatCurrency(inputs.homeInsurance / 12)} />
                        <BreakdownRow label="Maintenance" value={formatCurrency((inputs.homePrice * inputs.maintenanceRate / 100) / 12)} />
                        <BreakdownRow label="HOA" value={formatCurrency(inputs.hoaMonthly)} />
                        <BreakdownRow label="Total Monthly" value={formatCurrency(results.monthlyBuyCost)} bold />
                        <div className="border-t border-blue-200 mt-3 pt-3">
                          <BreakdownRow label={`Home Value (yr ${inputs.yearsToCompare})`} value={formatCurrency(finalYear.homeValue)} />
                          <BreakdownRow label="Home Equity" value={formatCurrency(finalYear.homeEquity)} />
                          <BreakdownRow label="Sell Costs (6%)" value={`-${formatCurrency(finalYear.homeValue * 0.06)}`} />
                          <BreakdownRow label="Net Worth" value={formatCurrency(finalYear.buyNetWorth)} highlight bold />
                        </div>
                      </div>
                      <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                        <p className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-3">🏢 Renting</p>
                        <BreakdownRow label="Monthly Rent (now)" value={formatCurrency(inputs.monthlyRent)} />
                        <BreakdownRow label="Annual Increase" value={`${inputs.rentIncreaseRate}%`} />
                        <BreakdownRow label={`Rent (yr ${inputs.yearsToCompare})`} value={formatCurrency(finalYear.monthlyRent)} />
                        <BreakdownRow label="Down Pmt Invested" value={formatCurrency(inputs.downPayment)} />
                        <BreakdownRow label="Monthly Savings Invested" value={formatCurrency(Math.max(0, results.monthlyBuyCost - inputs.monthlyRent))} />
                        <div className="border-t border-purple-200 mt-3 pt-3">
                          <BreakdownRow label="Investment Return" value={`${inputs.investmentReturn}% avg`} />
                          <BreakdownRow label={`Portfolio (yr ${inputs.yearsToCompare})`} value={formatCurrency(finalYear.investmentPortfolio)} />
                          <BreakdownRow label="Net Worth" value={formatCurrency(finalYear.rentNetWorth)} highlight bold />
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-xl text-xs text-slate-500 leading-relaxed">
                      <strong className="text-slate-700">Important assumptions:</strong> Buy net worth = home equity minus 6% selling costs. Rent net worth = down payment invested at {inputs.investmentReturn}% plus monthly savings (difference between buy and rent costs) invested at the same rate. Mortgage interest deduction applied at {inputs.marginalTaxRate}% tax rate. Home appreciation: {inputs.homeAppreciationRate}%/year. Rent increases: {inputs.rentIncreaseRate}%/year.
                    </div>
                  </div>
                )}

                {/* Net Worth Chart */}
                {activeTab === 'net worth' && (
                  <div className="animate-fade-in">
                    <h3 className="text-sm font-semibold text-slate-700 mb-4">Net Worth Over Time — Buy vs. Rent + Invest</h3>
                    <ResponsiveContainer width="100%" height={250}>
                      <LineChart data={results.yearlyData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                        <XAxis dataKey="year" tick={{ fontSize: 11 }} tickFormatter={v => `Yr ${v}`} />
                        <YAxis tick={{ fontSize: 11 }} tickFormatter={v => `$${(v / 1000).toFixed(0)}k`} />
                        <Tooltip formatter={(val) => formatCurrency(val)} labelFormatter={l => `Year ${l}`} />
                        <Legend />
                        <Line type="monotone" dataKey="buyNetWorth" stroke="#0284c7" strokeWidth={2.5} dot={false} name="Buy Net Worth" />
                        <Line type="monotone" dataKey="rentNetWorth" stroke="#7c3aed" strokeWidth={2.5} dot={false} name="Rent + Invest Net Worth" strokeDasharray="5 5" />
                      </LineChart>
                    </ResponsiveContainer>
                    <p className="text-xs text-slate-400 mt-2">
                      {results.breakEvenYear
                        ? `Lines cross at year ${results.breakEvenYear} — that's when buying becomes the better financial choice.`
                        : 'Renting + investing outperforms buying over this time period with these assumptions.'}
                    </p>
                  </div>
                )}

                {/* Costs Chart */}
                {activeTab === 'costs' && (
                  <div className="animate-fade-in">
                    <h3 className="text-sm font-semibold text-slate-700 mb-4">Cumulative Money Spent Over Time</h3>
                    <ResponsiveContainer width="100%" height={250}>
                      <LineChart data={results.yearlyData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                        <XAxis dataKey="year" tick={{ fontSize: 11 }} tickFormatter={v => `Yr ${v}`} />
                        <YAxis tick={{ fontSize: 11 }} tickFormatter={v => `$${(v / 1000).toFixed(0)}k`} />
                        <Tooltip formatter={(val) => formatCurrency(val)} labelFormatter={l => `Year ${l}`} />
                        <Legend />
                        <Line type="monotone" dataKey="buyTotalCost" stroke="#0284c7" strokeWidth={2.5} dot={false} name="Total Buy Costs" />
                        <Line type="monotone" dataKey="rentTotalCost" stroke="#7c3aed" strokeWidth={2.5} dot={false} name="Total Rent Costs" strokeDasharray="5 5" />
                      </LineChart>
                    </ResponsiveContainer>
                    <p className="text-xs text-slate-400 mt-2">Buy costs include down payment, mortgage payments, taxes, insurance, maintenance, and HOA (minus mortgage interest tax deduction). Rent costs are cumulative rent paid.</p>
                  </div>
                )}

                {/* Year by Year */}
                {activeTab === 'year by year' && (
                  <div className="animate-fade-in overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200">
                          <th className="text-left px-3 py-2 font-semibold text-slate-600">Year</th>
                          <th className="text-right px-3 py-2 font-semibold text-blue-600">Buy Net Worth</th>
                          <th className="text-right px-3 py-2 font-semibold text-purple-600">Rent Net Worth</th>
                          <th className="text-right px-3 py-2 font-semibold text-slate-600">Home Value</th>
                          <th className="text-right px-3 py-2 font-semibold text-slate-600">Portfolio</th>
                          <th className="text-right px-3 py-2 font-semibold text-slate-600">Winner</th>
                        </tr>
                      </thead>
                      <tbody>
                        {results.yearlyData.map((row, i) => (
                          <tr key={i} className={`border-b border-slate-100 hover:bg-slate-50 ${row.year === Number(inputs.yearsToCompare) ? 'bg-brand-50' : ''}`}>
                            <td className="px-3 py-2 font-medium text-slate-700">Year {row.year}</td>
                            <td className="px-3 py-2 text-right text-blue-700 font-semibold">{formatCurrency(row.buyNetWorth)}</td>
                            <td className="px-3 py-2 text-right text-purple-700 font-semibold">{formatCurrency(row.rentNetWorth)}</td>
                            <td className="px-3 py-2 text-right text-slate-600">{formatCurrency(row.homeValue)}</td>
                            <td className="px-3 py-2 text-right text-slate-600">{formatCurrency(row.investmentPortfolio)}</td>
                            <td className="px-3 py-2 text-right font-bold">{row.buyNetWorth > row.rentNetWorth ? '🏠 Buy' : '🏢 Rent'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              {/* Key insight */}
              <div className="calc-card bg-slate-50">
                <h3 className="font-display font-bold text-slate-900 mb-3">💡 What This Really Means</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  This calculator goes beyond the monthly payment. The real question isn't "can I afford to buy?" — it's "what does buying vs. renting mean for my total financial life over {inputs.yearsToCompare} years?"
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {buyWins
                    ? `With these numbers, buying builds ${formatCurrency(Math.abs(finalYear.buyNetWorth - finalYear.rentNetWorth))} more wealth over ${inputs.yearsToCompare} years — primarily through home equity and appreciation. But if you might move in under ${results.breakEvenYear || inputs.yearsToCompare} years, renting may actually be the smarter financial choice.`
                    : `With these numbers, renting and investing the difference builds ${formatCurrency(Math.abs(finalYear.rentNetWorth - finalYear.buyNetWorth))} more wealth over ${inputs.yearsToCompare} years. This typically happens when home appreciation is modest or the rent-vs-buy monthly cost difference is large enough that investing the gap outperforms home equity.`
                  }
                </p>
              </div>

              <div className="flex justify-center">
                <AdSlot type="inline" />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
