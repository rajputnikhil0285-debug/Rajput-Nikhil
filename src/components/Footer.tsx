import React from 'react';
import {
  Phone,
  MapPin,
  Mail,
  ShieldCheck,
  Building,
  Clock,
  ArrowRight,
  MessageCircle,
  ExternalLink
} from 'lucide-react';
import { PageView, LoanCategory } from '../types';
import { LOANS_DATA } from '../data/loansData';

interface FooterProps {
  setCurrentView: (view: PageView) => void;
  onSelectLoan: (loan: LoanCategory) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentView, onSelectLoan }) => {
  const navigateTo = (view: PageView) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoanClick = (slug: string) => {
    const loan = LOANS_DATA.find((l) => l.slug === slug);
    if (loan) {
      onSelectLoan(loan);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const whatsappUrl = 'https://wa.me/919979232182?text=' + encodeURIComponent('Hello, I would like to enquire about a loan.');

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand & Address Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-700 flex items-center justify-center text-white shadow-md">
                <Building className="w-5 h-5 text-blue-100" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                Jay Meldi <span className="text-blue-400 font-bold">Associates</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              Your trusted loan enquiry and financial-services assistance partner based in Vastral, Ahmedabad.
              We help salaried employees, business entrepreneurs, traders, and property owners compare loan options, calculate EMIs, and connect with institutional lenders across Gujarat.
            </p>

            <div className="space-y-2.5 pt-2 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                <span className="text-slate-300">
                  Vastral, Ahmedabad, Gujarat, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  id="footer-phone-link"
                  href="tel:9979232182"
                  className="text-white hover:text-emerald-400 font-bold tracking-wide transition-colors"
                >
                  Mobile: 9979232182
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Business Hours: Mon - Sat: 9:30 AM to 7:30 PM</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3">
              <a
                href="tel:9979232182"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-800 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition-colors"
              >
                <Phone className="w-3.5 h-3.5" /> Direct Call
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white rounded-lg text-xs font-bold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Desk
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  id="footer-nav-home"
                  onClick={() => navigateTo('home')}
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  <ArrowRight className="w-3 h-3 text-blue-500" /> Home
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-about"
                  onClick={() => navigateTo('about')}
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  <ArrowRight className="w-3 h-3 text-blue-500" /> About Us
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-loans"
                  onClick={() => navigateTo('loans')}
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  <ArrowRight className="w-3 h-3 text-blue-500" /> All 24 Loans
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-calculator"
                  onClick={() => navigateTo('calculator')}
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  <ArrowRight className="w-3 h-3 text-blue-500" /> EMI Calculator
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-eligibility"
                  onClick={() => navigateTo('eligibility')}
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  <ArrowRight className="w-3 h-3 text-blue-500" /> Eligibility Check
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-documents"
                  onClick={() => navigateTo('documents')}
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  <ArrowRight className="w-3 h-3 text-blue-500" /> Documents Required
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-faq"
                  onClick={() => navigateTo('faq')}
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  <ArrowRight className="w-3 h-3 text-blue-500" /> FAQ
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-contact"
                  onClick={() => navigateTo('contact')}
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  <ArrowRight className="w-3 h-3 text-blue-500" /> Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Popular Loan Categories 1 */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Popular Loans
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleLoanClick('personal-loan')}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Personal Loan
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLoanClick('home-loan')}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Home Loan
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLoanClick('business-loan')}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Business Loan
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLoanClick('loan-against-property')}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Loan Against Property (LAP)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLoanClick('msme-loan')}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  MSME & CGTMSE Loan
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLoanClick('car-loan')}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Car & EV Loan
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLoanClick('education-loan')}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Education Loan (India & Abroad)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLoanClick('gold-loan')}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Gold Loan (Instant Valuation)
                </button>
              </li>
            </ul>
          </div>

          {/* Commercial & Agri Loans */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Commercial & Agri
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleLoanClick('machinery-equipment-loan')}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Machinery Loan
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLoanClick('working-capital-loan')}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Working Capital & CC Limit
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLoanClick('agricultural-farm-loan')}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Agricultural & Kisan Loan
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLoanClick('commercial-vehicle-loan')}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Commercial Vehicle / Truck Loan
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLoanClick('debt-consolidation-loan')}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Debt Consolidation Loan
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLoanClick('overdraft-facility')}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Overdraft (OD) Facility
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLoanClick('home-construction-loan')}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Home Construction Loan
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLoanClick('credit-line')}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Digital Credit Line
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Policy Links Bar */}
        <div className="py-6 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-6">
            <button
              id="footer-privacy-btn"
              onClick={() => navigateTo('privacy')}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <button
              id="footer-terms-btn"
              onClick={() => navigateTo('terms')}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Terms & Conditions
            </button>
            <button
              id="footer-disclaimer-btn"
              onClick={() => navigateTo('disclaimer')}
              className="text-slate-400 hover:text-white transition-colors font-semibold text-blue-400"
            >
              Legal Disclaimer & Policy
            </button>
          </div>

          <div className="text-slate-400">
            Serving Vastral, Nikol, Odhav, Naroda, Maninagar & Ahmedabad Districts
          </div>
        </div>

        {/* Mandatory Regulatory Disclaimer */}
        <div className="mt-6 p-5 bg-slate-900/90 rounded-xl border border-slate-800 text-xs text-slate-400 leading-relaxed space-y-2">
          <div className="flex items-center gap-2 text-slate-300 font-bold">
            <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
            <span>Important Notice & Legal Disclaimer</span>
          </div>
          <p>
            “This website is intended for informational and loan enquiry purposes. We are not a bank or lender unless specifically stated. Loan approval, interest rates, processing fees, tenure, loan amount, and other terms are determined by the respective lender based on its policies and the applicant's profile. Submission of an enquiry does not guarantee loan approval or disbursal.”
          </p>
          <p className="text-[11px] text-slate-500">
            Jay Meldi Associates assists applicants in Ahmedabad, Gujarat by facilitating information gathering, profile evaluation, and document coordination with licensed institutional lenders. All logos, trademarks, and brand names belong to their respective statutory owners.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Jay Meldi Associates. All rights reserved.</p>
          <p>Vastral, Ahmedabad, Gujarat, India • Phone: 9979232182</p>
        </div>
      </div>
    </footer>
  );
};
