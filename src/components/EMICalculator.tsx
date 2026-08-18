import React, { useState, useMemo } from 'react';
import {
  Calculator,
  IndianRupee,
  Calendar,
  Percent,
  TrendingUp,
  PieChart as PieIcon,
  Table as TableIcon,
  ArrowRight,
  Sparkles,
  Layers,
  CheckCircle2,
  RefreshCw,
  Phone
} from 'lucide-react';
import { formatINR, formatINRWords, calculateEMI, getAmortizationSchedule } from '../utils/formatters';

interface EMICalculatorProps {
  initialAmount?: number;
  initialRate?: number;
  initialTenureMonths?: number;
  loanName?: string;
  onApplyForLoan?: (amount: number, tenureMonths: number, rate: number) => void;
}

export const EMICalculator: React.FC<EMICalculatorProps> = ({
  initialAmount = 500000,
  initialRate = 10.5,
  initialTenureMonths = 36,
  loanName = 'Personal Loan',
  onApplyForLoan
}) => {
  // Mode: single or compare
  const [isCompareMode, setIsCompareMode] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);
  const [tenureUnit, setTenureUnit] = useState<'years' | 'months'>('years');

  // Option A (Primary)
  const [amount, setAmount] = useState<number>(initialAmount);
  const [rate, setRate] = useState<number>(initialRate);
  const [tenureValue, setTenureValue] = useState<number>(
    tenureUnit === 'years' ? Math.round(initialTenureMonths / 12) : initialTenureMonths
  );

  // Option B (For Comparison)
  const [amountB, setAmountB] = useState<number>(initialAmount);
  const [rateB, setRateB] = useState<number>(9.5);
  const [tenureValueB, setTenureValueB] = useState<number>(
    tenureUnit === 'years' ? Math.round(initialTenureMonths / 12) : initialTenureMonths
  );

  const tenureMonthsA = tenureUnit === 'years' ? tenureValue * 12 : tenureValue;
  const tenureMonthsB = tenureUnit === 'years' ? tenureValueB * 12 : tenureValueB;

  const resultA = useMemo(() => calculateEMI(amount, rate, tenureMonthsA), [amount, rate, tenureMonthsA]);
  const resultB = useMemo(() => calculateEMI(amountB, rateB, tenureMonthsB), [amountB, rateB, tenureMonthsB]);

  const amortizationScheduleA = useMemo(
    () => getAmortizationSchedule(amount, rate, tenureMonthsA),
    [amount, rate, tenureMonthsA]
  );

  const setPreset = (pAmount: number, pRate: number, pYears: number) => {
    setAmount(pAmount);
    setRate(pRate);
    setTenureUnit('years');
    setTenureValue(pYears);
  };

  return (
    <section id="emi-calculator-section" className="py-12 bg-white rounded-3xl border border-slate-200/80 shadow-xs p-6 sm:p-10">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-3">
          <Calculator className="w-4 h-4" />
          <span>Interactive Loan EMI Calculator</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Calculate Your Monthly Installment (EMI)
        </h2>
        <p className="text-sm text-slate-600 mt-2">
          Adjust loan amount, interest rate, and repayment tenure to get an instant calculation of your monthly EMI, total interest, and total payable amount.
        </p>

        {/* Quick Presets */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
          <span className="text-xs text-slate-400 font-semibold mr-1">Quick Scenarios:</span>
          <button
            onClick={() => setPreset(500000, 10.5, 3)}
            className="px-3 py-1 bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 text-xs font-medium rounded-full transition-colors"
          >
            ₹5 Lakh (Personal • 3 Yrs)
          </button>
          <button
            onClick={() => setPreset(3000000, 8.5, 20)}
            className="px-3 py-1 bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 text-xs font-medium rounded-full transition-colors"
          >
            ₹30 Lakh (Home • 20 Yrs)
          </button>
          <button
            onClick={() => setPreset(1500000, 12.0, 5)}
            className="px-3 py-1 bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 text-xs font-medium rounded-full transition-colors"
          >
            ₹15 Lakh (Business • 5 Yrs)
          </button>
          <button
            onClick={() => setPreset(800000, 9.0, 5)}
            className="px-3 py-1 bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 text-xs font-medium rounded-full transition-colors"
          >
            ₹8 Lakh (Car • 5 Yrs)
          </button>
        </div>
      </div>

      {/* Mode Switcher */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setIsCompareMode(!isCompareMode)}
          className="flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 bg-blue-50 px-3.5 py-1.5 rounded-lg transition-colors"
        >
          <Layers className="w-3.5 h-3.5" />
          <span>{isCompareMode ? 'Switch to Standard Calculator' : 'Compare 2 Loan Options'}</span>
        </button>
      </div>

      {/* Calculator Grid */}
      <div className={`grid gap-8 ${isCompareMode ? 'lg:grid-cols-2' : 'lg:grid-cols-12'}`}>
        {/* Loan Option A (Primary) */}
        <div className={`${isCompareMode ? 'bg-slate-50 p-6 rounded-2xl border border-slate-200' : 'lg:col-span-7 space-y-6'}`}>
          {isCompareMode && (
            <div className="pb-3 mb-4 border-b border-slate-200 flex items-center justify-between">
              <span className="font-bold text-slate-900 text-sm">Loan Option 1</span>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-md font-semibold">Standard</span>
            </div>
          )}

          {/* Amount Slider */}
          <div className="space-y-2 bg-slate-50/70 p-4 rounded-2xl border border-slate-200/60">
            <div className="flex items-center justify-between">
              <label htmlFor="input-loan-amount" className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                <IndianRupee className="w-3.5 h-3.5 text-blue-600" />
                <span>Loan Amount</span>
              </label>
              <div className="flex items-center gap-1">
                <span className="text-xs text-slate-500 font-bold">₹</span>
                <input
                  id="input-loan-amount"
                  type="number"
                  min="20000"
                  max="100000000"
                  step="10000"
                  value={amount}
                  onChange={(e) => setAmount(Math.max(0, Number(e.target.value)))}
                  className="w-32 sm:w-36 text-right font-extrabold text-slate-900 bg-white border border-slate-300 rounded-lg px-2.5 py-1 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                />
              </div>
            </div>

            <input
              id="slider-loan-amount"
              type="range"
              min="20000"
              max="20000000"
              step="10000"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-700"
            />

            <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
              <span>₹20 Thousand</span>
              <span className="text-blue-700 font-bold">{formatINRWords(amount)}</span>
              <span>₹2 Crore+</span>
            </div>
          </div>

          {/* Interest Rate Slider */}
          <div className="space-y-2 bg-slate-50/70 p-4 rounded-2xl border border-slate-200/60">
            <div className="flex items-center justify-between">
              <label htmlFor="input-interest-rate" className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                <Percent className="w-3.5 h-3.5 text-blue-600" />
                <span>Interest Rate (% per annum)</span>
              </label>
              <div className="flex items-center gap-1">
                <input
                  id="input-interest-rate"
                  type="number"
                  min="5"
                  max="36"
                  step="0.1"
                  value={rate}
                  onChange={(e) => setRate(Math.max(0, Number(e.target.value)))}
                  className="w-20 text-right font-extrabold text-slate-900 bg-white border border-slate-300 rounded-lg px-2.5 py-1 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                />
                <span className="text-xs text-slate-600 font-bold">%</span>
              </div>
            </div>

            <input
              id="slider-interest-rate"
              type="range"
              min="6"
              max="24"
              step="0.1"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-700"
            />

            <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
              <span>6% (Secured Home)</span>
              <span className="text-blue-700 font-bold">{rate}% p.a.</span>
              <span>24% (Unsecured)</span>
            </div>
          </div>

          {/* Tenure Slider & Unit Switcher */}
          <div className="space-y-2 bg-slate-50/70 p-4 rounded-2xl border border-slate-200/60">
            <div className="flex items-center justify-between">
              <label htmlFor="input-loan-tenure" className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-blue-600" />
                <span>Loan Tenure</span>
              </label>

              <div className="flex items-center gap-2">
                <div className="flex bg-slate-200 p-0.5 rounded-lg text-[11px] font-bold">
                  <button
                    onClick={() => {
                      if (tenureUnit === 'months') {
                        setTenureUnit('years');
                        setTenureValue(Math.max(1, Math.round(tenureValue / 12)));
                      }
                    }}
                    className={`px-2 py-0.5 rounded-md ${tenureUnit === 'years' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600'}`}
                  >
                    Years
                  </button>
                  <button
                    onClick={() => {
                      if (tenureUnit === 'years') {
                        setTenureUnit('months');
                        setTenureValue(tenureValue * 12);
                      }
                    }}
                    className={`px-2 py-0.5 rounded-md ${tenureUnit === 'months' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600'}`}
                  >
                    Months
                  </button>
                </div>

                <input
                  id="input-loan-tenure"
                  type="number"
                  min="1"
                  max={tenureUnit === 'years' ? 30 : 360}
                  value={tenureValue}
                  onChange={(e) => setTenureValue(Math.max(1, Number(e.target.value)))}
                  className="w-16 text-right font-extrabold text-slate-900 bg-white border border-slate-300 rounded-lg px-2 py-1 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                />
              </div>
            </div>

            <input
              id="slider-loan-tenure"
              type="range"
              min="1"
              max={tenureUnit === 'years' ? 30 : 360}
              step="1"
              value={tenureValue}
              onChange={(e) => setTenureValue(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-700"
            />

            <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
              <span>1 {tenureUnit === 'years' ? 'Year' : 'Month'}</span>
              <span className="text-blue-700 font-bold">
                {tenureValue} {tenureUnit === 'years' ? `Years (${tenureValue * 12} Months)` : `Months (${(tenureValue / 12).toFixed(1)} Years)`}
              </span>
              <span>{tenureUnit === 'years' ? '30 Years' : '360 Months'}</span>
            </div>
          </div>
        </div>

        {/* Option B for comparison */}
        {isCompareMode && (
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-6">
            <div className="pb-3 mb-4 border-b border-slate-200 flex items-center justify-between">
              <span className="font-bold text-slate-900 text-sm">Loan Option 2 (Comparison)</span>
              <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md font-semibold">Comparison</span>
            </div>

            {/* Option B Amount */}
            <div className="space-y-2 bg-white p-3.5 rounded-xl border border-slate-200">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-600">Loan Amount</span>
                <span className="font-extrabold text-slate-900">{formatINR(amountB)}</span>
              </div>
              <input
                type="range"
                min="20000"
                max="20000000"
                step="10000"
                value={amountB}
                onChange={(e) => setAmountB(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
            </div>

            {/* Option B Rate */}
            <div className="space-y-2 bg-white p-3.5 rounded-xl border border-slate-200">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-600">Interest Rate (% p.a.)</span>
                <span className="font-extrabold text-emerald-700">{rateB}%</span>
              </div>
              <input
                type="range"
                min="6"
                max="24"
                step="0.1"
                value={rateB}
                onChange={(e) => setRateB(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
            </div>

            {/* Option B Tenure */}
            <div className="space-y-2 bg-white p-3.5 rounded-xl border border-slate-200">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-600">Tenure ({tenureUnit})</span>
                <span className="font-extrabold text-slate-900">{tenureValueB} {tenureUnit}</span>
              </div>
              <input
                type="range"
                min="1"
                max={tenureUnit === 'years' ? 30 : 360}
                step="1"
                value={tenureValueB}
                onChange={(e) => setTenureValueB(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
            </div>

            {/* Option B Result Card */}
            <div className="bg-emerald-900 text-white p-4 rounded-xl space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-emerald-200">Monthly EMI:</span>
                <span className="font-extrabold text-base text-emerald-300">{formatINR(resultB.monthlyEmi)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-emerald-200">Total Interest:</span>
                <span className="font-bold">{formatINR(resultB.totalInterest)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-emerald-200">Total Repayment:</span>
                <span className="font-bold">{formatINR(resultB.totalPayment)}</span>
              </div>
            </div>
          </div>
        )}

        {/* Results & Visual Breakdown Column */}
        {!isCompareMode && (
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xl border border-slate-800">
            <div>
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
                <div>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block">
                    Calculated Monthly Outflow
                  </span>
                  <h3 className="text-sm font-semibold text-slate-300">Equated Monthly Installment</h3>
                </div>
                <div className="p-2 bg-blue-600/20 text-blue-400 rounded-xl">
                  <Calculator className="w-5 h-5" />
                </div>
              </div>

              {/* Big Monthly EMI Display */}
              <div className="bg-slate-800/80 rounded-2xl p-5 border border-slate-700/60 mb-6 text-center">
                <span className="text-xs text-slate-400 uppercase font-semibold">Monthly Loan EMI</span>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
                  {formatINR(resultA.monthlyEmi)}
                  <span className="text-xs text-slate-400 font-normal ml-1">/ month</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  For {tenureMonthsA} months at {rate}% annual interest rate
                </p>
              </div>

              {/* Breakdown Figures */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-slate-800/50 p-3.5 rounded-xl border border-slate-700/40">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                    <span>Total Interest</span>
                  </div>
                  <div className="text-base font-bold text-white mt-1">
                    {formatINR(resultA.totalInterest)}
                  </div>
                  <span className="text-[10px] text-slate-400">{resultA.interestPercent}% of total</span>
                </div>

                <div className="bg-slate-800/50 p-3.5 rounded-xl border border-slate-700/40">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                    <span>Total Repayment</span>
                  </div>
                  <div className="text-base font-bold text-white mt-1">
                    {formatINR(resultA.totalPayment)}
                  </div>
                  <span className="text-[10px] text-slate-400">Principal + Interest</span>
                </div>
              </div>

              {/* Visual Breakdown Bar */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-xs text-slate-300 font-medium">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span>
                    Principal: {formatINR(amount)} ({resultA.principalPercent}%)
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-amber-400 inline-block"></span>
                    Interest: {resultA.interestPercent}%
                  </span>
                </div>

                <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden flex">
                  <div
                    style={{ width: `${resultA.principalPercent}%` }}
                    className="bg-blue-600 h-full transition-all duration-300"
                    title={`Principal: ${resultA.principalPercent}%`}
                  ></div>
                  <div
                    style={{ width: `${resultA.interestPercent}%` }}
                    className="bg-amber-400 h-full transition-all duration-300"
                    title={`Interest: ${resultA.interestPercent}%`}
                  ></div>
                </div>
              </div>
            </div>

            {/* Action CTA inside Calculator */}
            <div className="space-y-2 pt-2">
              <button
                id="calc-enquire-btn"
                onClick={() => onApplyForLoan?.(amount, tenureMonthsA, rate)}
                className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/30"
              >
                <span>Enquire For This Loan Amount</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                <span>Vastral Helpline:</span>
                <a href="tel:9979232182" className="text-emerald-400 font-bold hover:underline">
                  9979232182
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Comparison Summary when in Compare Mode */}
      {isCompareMode && (
        <div className="mt-8 p-6 bg-slate-900 text-white rounded-2xl border border-slate-800">
          <h4 className="text-base font-bold text-blue-400 mb-4 flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            <span>Comparison Summary</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-3 bg-slate-800/80 rounded-xl">
              <span className="text-slate-400 block mb-1">Monthly EMI Difference</span>
              <span className="text-lg font-bold text-white">
                {formatINR(Math.abs(resultA.monthlyEmi - resultB.monthlyEmi))} / mo
              </span>
              <p className="text-[11px] text-slate-400 mt-1">
                {resultA.monthlyEmi < resultB.monthlyEmi ? 'Option 1 is cheaper monthly' : 'Option 2 is cheaper monthly'}
              </p>
            </div>
            <div className="p-3 bg-slate-800/80 rounded-xl">
              <span className="text-slate-400 block mb-1">Total Interest Savings</span>
              <span className="text-lg font-bold text-emerald-400">
                {formatINR(Math.abs(resultA.totalInterest - resultB.totalInterest))}
              </span>
              <p className="text-[11px] text-slate-400 mt-1">
                Total interest difference over full term
              </p>
            </div>
            <div className="p-3 bg-slate-800/80 rounded-xl flex flex-col justify-center">
              <button
                onClick={() => onApplyForLoan?.(amount, tenureMonthsA, rate)}
                className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg text-xs"
              >
                Enquire for Best Loan Quote
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Yearly Amortization Schedule */}
      <div className="mt-8 pt-6 border-t border-slate-200">
        <button
          onClick={() => setShowSchedule(!showSchedule)}
          className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-blue-700 transition-colors"
        >
          <TableIcon className="w-4 h-4 text-blue-600" />
          <span>{showSchedule ? 'Hide Yearly Amortization Table' : 'View Yearly Amortization Schedule Table'}</span>
        </button>

        {showSchedule && (
          <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Year</th>
                  <th className="py-3 px-4">Principal Paid (₹)</th>
                  <th className="py-3 px-4">Interest Paid (₹)</th>
                  <th className="py-3 px-4">Total Payment (₹)</th>
                  <th className="py-3 px-4">Ending Balance (₹)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-600">
                {amortizationScheduleA.map((row) => (
                  <tr key={row.year} className="hover:bg-slate-50">
                    <td className="py-2.5 px-4 font-semibold text-slate-900">Year {row.year}</td>
                    <td className="py-2.5 px-4 text-blue-700 font-medium">{formatINR(row.principalPaid)}</td>
                    <td className="py-2.5 px-4 text-amber-700 font-medium">{formatINR(row.interestPaid)}</td>
                    <td className="py-2.5 px-4 font-medium">{formatINR(row.totalPayment)}</td>
                    <td className="py-2.5 px-4 font-semibold text-slate-900">{formatINR(row.balance)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Disclaimer */}
      <p className="text-[11px] text-slate-400 text-center mt-6">
        *EMI calculations are indicative and based on standard mathematical compounding formulas. Actual interest rates, processing charges, GST, and final EMI amounts depend on lender assessment and applicant profile.
      </p>
    </section>
  );
};
