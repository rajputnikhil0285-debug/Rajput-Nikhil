import React from 'react';
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  Building,
  CheckCircle2,
  TrendingUp,
  Award,
  Users,
  MapPin,
  Sparkles,
  Calculator
} from 'lucide-react';
import { PageView } from '../types';

interface HeroSectionProps {
  setCurrentView: (view: PageView) => void;
  onOpenEnquiryModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ setCurrentView, onOpenEnquiryModal }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-12 pb-20 sm:pt-16 sm:pb-28">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Location Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-700/60 text-blue-300 text-xs font-semibold">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Vastral, Ahmedabad • Trusted Gujarat Loan Assistance</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Find the Right Loan for Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-300">Financial Needs</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              Explore loan options, check your eligibility, calculate your EMI, and submit your enquiry with our simple online process.
            </p>

            {/* Quick feature highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>24 Loan Categories</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Local Vastral Office</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>No Hidden Upfront Fees</span>
              </div>
            </div>

            {/* Action Buttons: Apply Now & Call 9979232182 */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                id="hero-apply-now-btn"
                onClick={onOpenEnquiryModal}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-extrabold rounded-2xl text-base transition-all shadow-xl shadow-blue-950/50 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                id="hero-call-now-btn"
                href="tel:9979232182"
                className="px-7 py-4 bg-slate-800/90 hover:bg-slate-700/90 text-white border border-slate-700 font-bold rounded-2xl text-base transition-all flex items-center justify-center gap-2.5 hover:border-emerald-500/50 shadow-md group"
              >
                <div className="w-7 h-7 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span>Call 9979232182</span>
              </a>
            </div>

            {/* Transparent Note */}
            <p className="text-[11px] text-slate-400 pt-1">
              *Serving salaried professionals, traders, MSMEs, and property owners across Ahmedabad.
            </p>
          </div>

          {/* Right Visual / Mini Loan Hub Card */}
          <div className="lg:col-span-5 relative">
            <div className="bg-slate-800/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-700/60 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                    Ahmedabad Loan Assistance
                  </span>
                  <h3 className="text-lg font-bold text-white">Compare & Enquire</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-blue-600/30 text-blue-300 flex items-center justify-center">
                  <Building className="w-5 h-5" />
                </div>
              </div>

              {/* Mini Quick Nav Pills */}
              <div className="grid grid-cols-2 gap-2.5 text-xs">
                <button
                  onClick={() => setCurrentView('loans')}
                  className="p-3 bg-slate-900/80 hover:bg-blue-900/40 rounded-xl border border-slate-700 text-left transition-colors"
                >
                  <span className="font-bold text-white block">Personal Loan</span>
                  <span className="text-[11px] text-slate-400">Unsecured • Quick</span>
                </button>
                <button
                  onClick={() => setCurrentView('loans')}
                  className="p-3 bg-slate-900/80 hover:bg-blue-900/40 rounded-xl border border-slate-700 text-left transition-colors"
                >
                  <span className="font-bold text-white block">Home Loan</span>
                  <span className="text-[11px] text-slate-400">Up to 30 Yrs Tenure</span>
                </button>
                <button
                  onClick={() => setCurrentView('loans')}
                  className="p-3 bg-slate-900/80 hover:bg-blue-900/40 rounded-xl border border-slate-700 text-left transition-colors"
                >
                  <span className="font-bold text-white block">Business / MSME</span>
                  <span className="text-[11px] text-slate-400">Working Capital & CC</span>
                </button>
                <button
                  onClick={() => setCurrentView('loans')}
                  className="p-3 bg-slate-900/80 hover:bg-blue-900/40 rounded-xl border border-slate-700 text-left transition-colors"
                >
                  <span className="font-bold text-white block">Loan Against Property</span>
                  <span className="text-[11px] text-slate-400">High Ticket Collateral</span>
                </button>
              </div>

              {/* Direct Calculator Shortcut Box */}
              <div className="p-4 bg-gradient-to-r from-blue-950 to-slate-900 rounded-2xl border border-blue-800/40 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300 font-semibold">Want to check your monthly EMI?</span>
                  <Calculator className="w-4 h-4 text-blue-400" />
                </div>
                <button
                  onClick={() => setCurrentView('calculator')}
                  className="w-full py-2.5 bg-blue-700 hover:bg-blue-600 text-white text-xs font-bold rounded-xl text-center transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Open Free EMI Calculator</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Direct Call Banner */}
              <div className="flex items-center justify-between bg-slate-900/60 p-3.5 rounded-2xl border border-slate-700/60">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Vastral Helpline</span>
                    <a href="tel:9979232182" className="text-sm font-extrabold text-white hover:text-emerald-400">
                      9979232182
                    </a>
                  </div>
                </div>
                <span className="text-[11px] text-slate-400">Mon-Sat</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
