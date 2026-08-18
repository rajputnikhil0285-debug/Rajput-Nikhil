import React, { useState } from 'react';
import {
  UserCheck,
  IndianRupee,
  Briefcase,
  Building,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Phone,
  ArrowRight,
  ShieldCheck,
  Send
} from 'lucide-react';
import { EligibilityInput, EligibilityResult } from '../types';
import { LOANS_DATA } from '../data/loansData';
import { formatINR, formatINRWords } from '../utils/formatters';

interface EligibilityCheckerProps {
  onSuccessEnquiry?: (details: Partial<EligibilityInput>) => void;
}

export const EligibilityChecker: React.FC<EligibilityCheckerProps> = ({ onSuccessEnquiry }) => {
  const [formData, setFormData] = useState<EligibilityInput>({
    name: '',
    mobile: '',
    employmentType: 'Salaried',
    monthlyIncome: 45000,
    existingEMI: 5000,
    requiredLoanAmount: 1000000,
    preferredLoanType: 'Personal Loan',
    city: 'Ahmedabad',
    cibilScoreRange: '750+'
  });

  const [hasEvaluated, setHasEvaluated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [assessmentResult, setAssessmentResult] = useState<EligibilityResult | null>(null);

  const calculateAssessment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const income = Number(formData.monthlyIncome) || 0;
      const emi = Number(formData.existingEMI) || 0;
      const loanNeeded = Number(formData.requiredLoanAmount) || 0;

      // Indian standard FOIR (Fixed Obligation to Income Ratio) benchmarks
      // Typically lenders allow 50% to 65% of net monthly income for all total EMIs
      const maxAllowableObligation = income * 0.55;
      const netAvailableEmiCapacity = Math.max(0, maxAllowableObligation - emi);
      const foir = income > 0 ? Math.round((emi / income) * 100) : 0;

      // Approximate borrowing multipliers based on typical loan types
      let multiplier = 24; // Personal loan ~ 18-24x monthly income
      if (formData.preferredLoanType.includes('Home') || formData.preferredLoanType.includes('Property')) {
        multiplier = 60; // Home loan ~ 60x net available income
      } else if (formData.preferredLoanType.includes('Business') || formData.preferredLoanType.includes('MSME')) {
        multiplier = 36;
      }

      const estimatedMax = Math.round(netAvailableEmiCapacity * multiplier);
      const estimatedMin = Math.round(estimatedMax * 0.75);

      let status: EligibilityResult['eligibilityStatus'] = 'High Likelihood';
      let statusColor = 'text-emerald-700 bg-emerald-50 border-emerald-200';
      const recommendations: string[] = [];

      if (foir > 50) {
        status = 'Subject to Additional Review';
        statusColor = 'text-amber-800 bg-amber-50 border-amber-200';
        recommendations.push('Your existing EMI obligations exceed 50% of your reported monthly income.');
        recommendations.push('Consider closing small active loans or adding a co-applicant to strengthen eligibility.');
      } else if (foir > 35) {
        status = 'Moderate Likelihood';
        statusColor = 'text-blue-800 bg-blue-50 border-blue-200';
        recommendations.push('Your debt-to-income ratio is healthy. Lenders will evaluate employer stability and CIBIL track record.');
      } else {
        recommendations.push('Low debt-to-income ratio indicates strong loan repayment capacity.');
        recommendations.push('Ensure bank statements reflect regular income credits to qualify for prime interest brackets.');
      }

      setAssessmentResult({
        estimatedBorrowingPowerMin: estimatedMin,
        estimatedBorrowingPowerMax: estimatedMax,
        foirPercentage: foir,
        maxAffordableEmi: Math.round(netAvailableEmiCapacity),
        eligibilityStatus: status,
        statusColor,
        assessmentNote: 'Your information has been submitted for eligibility assessment.',
        recommendations
      });

      setHasEvaluated(true);
      setIsSubmitting(false);
      onSuccessEnquiry?.(formData);
    }, 600);
  };

  return (
    <section id="eligibility-checker-section" className="py-12 bg-white rounded-3xl border border-slate-200/80 shadow-xs p-6 sm:p-10">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-3">
          <UserCheck className="w-4 h-4" />
          <span>Quick Loan Eligibility Tool</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Check Your Basic Loan Eligibility
        </h2>
        <p className="text-sm text-slate-600 mt-2">
          Enter your income and current obligations to estimate your borrowing capacity in Ahmedabad. Our team will review your profile and suggest suitable lender matches.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Form Column */}
        <form
          onSubmit={calculateAssessment}
          className="lg:col-span-7 bg-slate-50/70 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label htmlFor="elig-name" className="block text-xs font-bold text-slate-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="elig-name"
                type="text"
                required
                placeholder="e.g. Rajesh Patel"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label htmlFor="elig-mobile" className="block text-xs font-bold text-slate-700 mb-1">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                id="elig-mobile"
                type="tel"
                required
                pattern="[0-9]{10}"
                maxLength={10}
                placeholder="10-digit mobile number"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, '') })}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Employment Type */}
            <div>
              <label htmlFor="elig-employment" className="block text-xs font-bold text-slate-700 mb-1">
                Employment Type
              </label>
              <select
                id="elig-employment"
                value={formData.employmentType}
                onChange={(e) => setFormData({ ...formData, employmentType: e.target.value as any })}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
              >
                <option value="Salaried">Salaried (Private / MNC / Govt)</option>
                <option value="Self-Employed">Self-Employed Professional (Doctor, CA, etc.)</option>
                <option value="Business">Business Owner / Trader / MSME</option>
                <option value="Agriculture">Farmer / Agriculture</option>
              </select>
            </div>

            {/* Preferred Loan Type */}
            <div>
              <label htmlFor="elig-loantype" className="block text-xs font-bold text-slate-700 mb-1">
                Preferred Loan Type
              </label>
              <select
                id="elig-loantype"
                value={formData.preferredLoanType}
                onChange={(e) => setFormData({ ...formData, preferredLoanType: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
              >
                {LOANS_DATA.map((loan) => (
                  <option key={loan.id} value={loan.name}>
                    {loan.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Monthly Income */}
            <div>
              <label htmlFor="elig-income" className="block text-xs font-bold text-slate-700 mb-1">
                Net Monthly Income (₹) <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-xs text-slate-400 font-bold">₹</span>
                <input
                  id="elig-income"
                  type="number"
                  required
                  min="10000"
                  step="5000"
                  value={formData.monthlyIncome}
                  onChange={(e) => setFormData({ ...formData, monthlyIncome: Number(e.target.value) })}
                  className="w-full pl-8 pr-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-blue-600 focus:outline-hidden font-semibold"
                />
              </div>
              <span className="text-[11px] text-blue-700 font-medium">
                {formatINRWords(formData.monthlyIncome)} / month
              </span>
            </div>

            {/* Existing Monthly EMI */}
            <div>
              <label htmlFor="elig-existing-emi" className="block text-xs font-bold text-slate-700 mb-1">
                Current Existing EMI (₹/month)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-xs text-slate-400 font-bold">₹</span>
                <input
                  id="elig-existing-emi"
                  type="number"
                  min="0"
                  step="1000"
                  value={formData.existingEMI}
                  onChange={(e) => setFormData({ ...formData, existingEMI: Number(e.target.value) })}
                  className="w-full pl-8 pr-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-blue-600 focus:outline-hidden font-semibold"
                />
              </div>
              <span className="text-[11px] text-slate-500 font-medium">
                All existing active loan/card EMIs
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Required Loan Amount */}
            <div>
              <label htmlFor="elig-amount-needed" className="block text-xs font-bold text-slate-700 mb-1">
                Required Loan Amount (₹)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-xs text-slate-400 font-bold">₹</span>
                <input
                  id="elig-amount-needed"
                  type="number"
                  required
                  min="20000"
                  step="50000"
                  value={formData.requiredLoanAmount}
                  onChange={(e) => setFormData({ ...formData, requiredLoanAmount: Number(e.target.value) })}
                  className="w-full pl-8 pr-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-blue-600 focus:outline-hidden font-semibold"
                />
              </div>
              <span className="text-[11px] text-blue-700 font-medium">
                {formatINRWords(formData.requiredLoanAmount)}
              </span>
            </div>

            {/* City */}
            <div>
              <label htmlFor="elig-city" className="block text-xs font-bold text-slate-700 mb-1">
                City / Location
              </label>
              <input
                id="elig-city"
                type="text"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              id="elig-submit-btn"
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Evaluating Loan Eligibility...</span>
              ) : (
                <>
                  <span>Check Eligibility Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>

        {/* Results Card */}
        <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-7 border border-slate-800 space-y-5">
          <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
            <h3 className="font-bold text-base text-white">Eligibility Assessment Result</h3>
            <span className="text-[11px] bg-blue-900/60 text-blue-300 px-2.5 py-1 rounded-md font-semibold">
              Informational Only
            </span>
          </div>

          {hasEvaluated && assessmentResult ? (
            <div className="space-y-4 animate-in fade-in duration-300">
              {/* Submission Notice Banner */}
              <div className="p-4 bg-emerald-950/80 border border-emerald-800 rounded-xl text-xs text-emerald-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-white text-sm mb-0.5">
                    {assessmentResult.assessmentNote}
                  </span>
                  <p className="text-emerald-300/90 text-[11px]">
                    Our loan advisor from Vastral, Ahmedabad will connect with you on <strong>{formData.mobile}</strong> to guide you on optimal lender options.
                  </p>
                </div>
              </div>

              {/* Status Badge */}
              <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700">
                <span className="text-xs text-slate-400 block mb-1">Assessment Indicator:</span>
                <span className="inline-block font-extrabold text-sm text-blue-400">
                  {assessmentResult.eligibilityStatus}
                </span>
                <p className="text-[11px] text-slate-400 mt-1">
                  FOIR Ratio: {assessmentResult.foirPercentage}% of monthly income committed to EMIs.
                </p>
              </div>

              {/* Estimated Borrowing Capacity */}
              <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700">
                <span className="text-xs text-slate-400 block mb-1">Estimated Loan Range (Indicative):</span>
                <div className="text-lg font-extrabold text-emerald-400">
                  {formatINR(assessmentResult.estimatedBorrowingPowerMin)} – {formatINR(assessmentResult.estimatedBorrowingPowerMax)}
                </div>
                <span className="text-[10px] text-slate-400 block mt-0.5">
                  Max Affordable Monthly EMI Capacity: ~{formatINR(assessmentResult.maxAffordableEmi)}
                </span>
              </div>

              {/* Bullet Recommendations */}
              <div className="space-y-1.5 text-xs text-slate-300 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
                <span className="font-bold text-slate-200 block text-[11px] uppercase tracking-wider">
                  Advisor Observations:
                </span>
                {assessmentResult.recommendations.map((rec, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-400">
                    <span className="text-blue-400 font-bold">•</span>
                    <span>{rec}</span>
                  </div>
                ))}
              </div>

              {/* Call CTA */}
              <div className="pt-2">
                <a
                  href="tel:9979232182"
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Vastral Advisor: 9979232182</span>
                </a>
              </div>
            </div>
          ) : (
            <div className="py-8 text-center space-y-3 text-slate-400">
              <ShieldCheck className="w-12 h-12 text-slate-600 mx-auto" />
              <p className="text-xs text-slate-400 px-4">
                Fill the details on the left to calculate your debt-to-income ratio and estimate loan viability.
              </p>
              <p className="text-[11px] text-slate-500">
                All submitted information is kept strictly confidential as per our Privacy Policy.
              </p>
            </div>
          )}

          {/* Regulatory Disclaimer Warning */}
          <div className="pt-2 border-t border-slate-800 text-[10px] text-slate-500 leading-relaxed">
            *This assessment is strictly informational and does not represent guaranteed approval, credit sanction, or a binding loan offer. Final sanction is subject to lender credit verification.
          </div>
        </div>
      </div>
    </section>
  );
};
