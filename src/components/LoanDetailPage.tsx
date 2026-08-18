import React from 'react';
import {
  ArrowLeft,
  Phone,
  MessageCircle,
  CheckCircle2,
  FileText,
  UserCheck,
  HelpCircle,
  Calculator,
  Send,
  Building,
  ShieldCheck,
  Sparkles,
  Calendar,
  IndianRupee,
  Layers
} from 'lucide-react';
import { LoanCategory, PageView } from '../types';
import { LoanIcon } from './LoanIcon';
import { EMICalculator } from './EMICalculator';
import { LoanEnquirySection } from './LoanEnquirySection';

interface LoanDetailPageProps {
  loan: LoanCategory;
  onBackToLoans: () => void;
  setCurrentView: (view: PageView) => void;
  onOpenEnquiryModal: (loanType?: string) => void;
}

export const LoanDetailPage: React.FC<LoanDetailPageProps> = ({
  loan,
  onBackToLoans,
  setCurrentView,
  onOpenEnquiryModal
}) => {
  const whatsappUrl = `https://wa.me/919979232182?text=${encodeURIComponent(
    `Hello Vastral Loan & Finance, I would like to enquire in detail about ${loan.name}. Please guide me.`
  )}`;

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Top Breadcrumb & Hero Banner */}
      <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-8 pb-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <button
              onClick={() => setCurrentView('home')}
              className="hover:text-white transition-colors"
            >
              Home
            </button>
            <span>/</span>
            <button
              onClick={onBackToLoans}
              className="hover:text-white transition-colors"
            >
              Loans
            </button>
            <span>/</span>
            <span className="text-blue-400 font-semibold">{loan.name}</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/30 text-blue-300 flex items-center justify-center border border-blue-500/30">
                  <LoanIcon name={loan.iconName} className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-blue-400">
                    {loan.tag}
                  </span>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {loan.name} in Ahmedabad
                  </h1>
                </div>
              </div>

              <p className="text-base text-slate-300 leading-relaxed">
                {loan.shortDesc}
              </p>

              {/* Quick Specs Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                  <span className="text-[11px] text-slate-400 block font-semibold">Possible Loan Amount</span>
                  <span className="text-xs font-bold text-white mt-0.5 block">{loan.possibleAmount}</span>
                </div>
                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                  <span className="text-[11px] text-slate-400 block font-semibold">Possible Tenure</span>
                  <span className="text-xs font-bold text-white mt-0.5 block">{loan.possibleTenure}</span>
                </div>
                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                  <span className="text-[11px] text-slate-400 block font-semibold">Interest Rate Policy</span>
                  <span className="text-xs font-bold text-emerald-400 mt-0.5 block">Varies by lender & profile</span>
                </div>
              </div>
            </div>

            {/* Quick Action Box */}
            <div className="bg-slate-800/90 p-6 rounded-2xl border border-slate-700/80 space-y-3 shrink-0 lg:w-80 text-center">
              <span className="text-xs text-slate-400 uppercase font-bold tracking-wider block">
                Direct Ahmedabad Assistance
              </span>
              <a
                id="loan-detail-call-btn"
                href="tel:9979232182"
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/30"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now: 9979232182</span>
              </a>
              <button
                id="loan-detail-enquire-btn"
                onClick={() => onOpenEnquiryModal(loan.name)}
                className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-extrabold rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-950/30"
              >
                <Send className="w-4 h-4" />
                <span>Apply for {loan.name}</span>
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-emerald-400 hover:underline flex items-center justify-center gap-1 font-semibold pt-1"
              >
                <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Enquiry
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Details Column */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Overview & Typical Use */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-6">
              <div>
                <h2 className="text-xl font-extrabold text-slate-900 mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-blue-700" />
                  <span>Overview & Primary Purpose</span>
                </h2>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {loan.shortDesc} At Vastral Loan & Finance, we assist clients located in Vastral, Odhav, Nikol, Naroda, and across Ahmedabad in preparing, comparing, and applying for {loan.name.toLowerCase()} options from established banking institutions and NBFCs.
                </p>
              </div>

              <div className="p-4 bg-blue-50/70 rounded-2xl border border-blue-100 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-900 block">
                  Typical Use Cases:
                </span>
                <p className="text-sm text-slate-700">
                  {loan.typicalUse}
                </p>
              </div>
            </div>

            {/* Features & Key Benefits */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-6">
              <h2 className="text-xl font-extrabold text-slate-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-700" />
                <span>Key Features & Borrower Benefits</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block border-b border-slate-100 pb-1">
                    Key Features:
                  </span>
                  {loan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block border-b border-slate-100 pb-1">
                    Borrower Benefits:
                  </span>
                  {loan.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Eligibility & Documents */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Eligibility Criteria */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-4">
                <div className="flex items-center gap-2 text-blue-700 font-extrabold text-lg">
                  <UserCheck className="w-5 h-5" />
                  <span>Eligibility Overview</span>
                </div>
                <div className="space-y-2.5">
                  {loan.eligibilityOverview.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Required Documents */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-4">
                <div className="flex items-center gap-2 text-blue-700 font-extrabold text-lg">
                  <FileText className="w-5 h-5" />
                  <span>Documents Checklist</span>
                </div>
                <div className="space-y-2.5">
                  {loan.documentsRequired.map((doc, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-1.5"></span>
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 4-Step Application Process */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-6">
              <h2 className="text-xl font-extrabold text-slate-900 mb-4">
                Step-by-Step Application Process
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {loan.applicationProcess.map((step) => (
                  <div key={step.step} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1.5">
                    <div className="flex items-center gap-2 font-extrabold text-sm text-blue-800">
                      <span className="w-6 h-6 rounded-full bg-blue-700 text-white flex items-center justify-center text-xs">
                        {step.step}
                      </span>
                      <span>{step.title}</span>
                    </div>
                    <p className="text-xs text-slate-600 pl-8 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Embedded EMI Calculator specifically pre-configured */}
            <div className="mt-8">
              <EMICalculator
                loanName={loan.name}
                initialAmount={loan.group === 'home-property' ? 3000000 : 500000}
                initialRate={loan.group === 'home-property' ? 8.5 : 11.5}
                initialTenureMonths={loan.group === 'home-property' ? 240 : 36}
                onApplyForLoan={() => onOpenEnquiryModal(loan.name)}
              />
            </div>

            {/* Loan Specific FAQs */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-4">
              <h2 className="text-xl font-extrabold text-slate-900 mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-blue-700" />
                <span>Frequently Asked Questions regarding {loan.name}</span>
              </h2>
              <div className="space-y-3 divide-y divide-slate-100">
                {loan.faqs.map((faq, idx) => (
                  <div key={idx} className="pt-3 first:pt-0 space-y-1">
                    <h3 className="text-sm font-bold text-slate-900">
                      Q: {faq.question}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed pl-4 border-l-2 border-blue-500">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Inline Enquiry Form */}
            <div className="mt-8">
              <LoanEnquirySection initialLoanType={loan.name} />
            </div>

          </div>

          {/* Right Sticky Sidebar */}
          <div className="lg:col-span-4 space-y-6 sticky top-28">
            
            {/* Quick Contact Card */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 border border-slate-800 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-700 flex items-center justify-center text-white font-bold">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Need Assistance in Vastral?</span>
                  <span className="text-base font-extrabold text-white">Speak with Advisor</span>
                </div>
              </div>

              <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Direct Mobile:</span>
                  <a href="tel:9979232182" className="text-emerald-400 font-extrabold text-sm hover:underline">
                    9979232182
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Location:</span>
                  <span className="text-slate-200">Vastral, Ahmedabad</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Consultation:</span>
                  <span className="text-emerald-300 font-semibold">100% Free Enquiry</span>
                </div>
              </div>

              <a
                href="tel:9979232182"
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call 9979232182</span>
              </a>

              <button
                onClick={() => onOpenEnquiryModal(loan.name)}
                className="w-full py-3 bg-blue-700 hover:bg-blue-600 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Submit Quick Online Enquiry</span>
              </button>
            </div>

            {/* Disclaimer Box */}
            <div className="p-4 bg-white rounded-2xl border border-slate-200 text-[11px] text-slate-500 leading-relaxed space-y-1">
              <span className="font-bold text-slate-700 block">Rate & Approval Notice:</span>
              <p>
                Rates vary by lender and applicant profile. Vastral Loan & Finance provides loan enquiry facilitation and financial advisory. Final terms, interest rates, and disbursal approvals are subject to lender policy.
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
