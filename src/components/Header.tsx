import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  Clock,
  Menu,
  X,
  ChevronDown,
  Building,
  Calculator,
  FileCheck,
  HelpCircle,
  Users,
  ShieldCheck,
  Send
} from 'lucide-react';
import { PageView, LoanCategory } from '../types';
import { LOANS_DATA } from '../data/loansData';

interface HeaderProps {
  currentView: PageView;
  setCurrentView: (view: PageView) => void;
  onSelectLoan: (loan: LoanCategory) => void;
  onOpenEnquiryModal: (loanType?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  setCurrentView,
  onSelectLoan,
  onOpenEnquiryModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loansDropdownOpen, setLoansDropdownOpen] = useState(false);

  const navigateTo = (view: PageView) => {
    setCurrentView(view);
    setMobileMenuOpen(false);
    setLoansDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoanPick = (loan: LoanCategory) => {
    onSelectLoan(loan);
    setMobileMenuOpen(false);
    setLoansDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
      {/* Top Bar for Location & Direct Phone */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-slate-200 font-medium">
              <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>Vastral, Ahmedabad, Gujarat, India</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Mon - Sat: 9:30 AM – 7:30 PM</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-slate-400 hidden sm:inline">Direct Loan Desk:</span>
            <a
              id="top-header-phone-link"
              href="tel:9979232182"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-bold tracking-wide transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>9979232182</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand Name */}
          <button
            id="brand-logo-btn"
            onClick={() => navigateTo('home')}
            className="flex items-center gap-3 text-left focus:outline-hidden group"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-700 to-indigo-900 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Building className="w-6 h-6 text-blue-200" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold text-slate-900 tracking-tight">
                  Jay Meldi <span className="text-blue-700 font-black">Associates</span>
                </span>
                <ShieldCheck className="w-4 h-4 text-emerald-600 hidden sm:inline" title="Verified Financial Assistance" />
              </div>
              <p className="text-[11px] text-slate-500 font-medium tracking-wide uppercase">
                Loan & Finance Services • Vastral, Ahmedabad
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            <button
              id="nav-home"
              onClick={() => navigateTo('home')}
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                currentView === 'home'
                  ? 'text-blue-700 bg-blue-50'
                  : 'text-slate-700 hover:text-blue-700 hover:bg-slate-50'
              }`}
            >
              Home
            </button>

            <button
              id="nav-about"
              onClick={() => navigateTo('about')}
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                currentView === 'about'
                  ? 'text-blue-700 bg-blue-50'
                  : 'text-slate-700 hover:text-blue-700 hover:bg-slate-50'
              }`}
            >
              About Us
            </button>

            {/* Loans Mega Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setLoansDropdownOpen(true)}
              onMouseLeave={() => setLoansDropdownOpen(false)}
            >
              <button
                id="nav-loans-dropdown"
                onClick={() => navigateTo('loans')}
                className={`px-3.5 py-2 text-sm font-semibold rounded-lg flex items-center gap-1 transition-colors ${
                  currentView === 'loans' || currentView === 'loan-detail'
                    ? 'text-blue-700 bg-blue-50'
                    : 'text-slate-700 hover:text-blue-700 hover:bg-slate-50'
                }`}
              >
                <span>Loans</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {loansDropdownOpen && (
                <div className="absolute top-full left-0 w-[680px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 text-sm">Explore All 24 Loan Products</span>
                      <span className="px-2 py-0.5 text-xs bg-blue-100 text-blue-700 font-semibold rounded-full">Ahmedabad Services</span>
                    </div>
                    <button
                      onClick={() => navigateTo('loans')}
                      className="text-xs text-blue-700 font-bold hover:underline"
                    >
                      View All Loan Catalog →
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-x-4 gap-y-2 text-xs">
                    {LOANS_DATA.slice(0, 18).map((loan) => (
                      <button
                        key={loan.id}
                        id={`dropdown-loan-${loan.id}`}
                        onClick={() => handleLoanPick(loan)}
                        className="text-left py-1.5 px-2 rounded-md text-slate-700 hover:text-blue-700 hover:bg-blue-50 font-medium transition-colors truncate block w-full"
                      >
                        • {loan.name}
                      </button>
                    ))}
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between bg-slate-50 p-3 rounded-xl">
                    <span className="text-xs text-slate-600">Need personal assistance selecting the right loan in Vastral?</span>
                    <a
                      href="tel:9979232182"
                      className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                    >
                      <Phone className="w-3.5 h-3.5" /> Call 9979232182
                    </a>
                  </div>
                </div>
              )}
            </div>

            <button
              id="nav-calculator"
              onClick={() => navigateTo('calculator')}
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                currentView === 'calculator'
                  ? 'text-blue-700 bg-blue-50'
                  : 'text-slate-700 hover:text-blue-700 hover:bg-slate-50'
              }`}
            >
              EMI Calculator
            </button>

            <button
              id="nav-eligibility"
              onClick={() => navigateTo('eligibility')}
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                currentView === 'eligibility'
                  ? 'text-blue-700 bg-blue-50'
                  : 'text-slate-700 hover:text-blue-700 hover:bg-slate-50'
              }`}
            >
              Eligibility
            </button>

            <button
              id="nav-documents"
              onClick={() => navigateTo('documents')}
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                currentView === 'documents'
                  ? 'text-blue-700 bg-blue-50'
                  : 'text-slate-700 hover:text-blue-700 hover:bg-slate-50'
              }`}
            >
              Documents
            </button>

            <button
              id="nav-faq"
              onClick={() => navigateTo('faq')}
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                currentView === 'faq'
                  ? 'text-blue-700 bg-blue-50'
                  : 'text-slate-700 hover:text-blue-700 hover:bg-slate-50'
              }`}
            >
              FAQ
            </button>

            <button
              id="nav-contact"
              onClick={() => navigateTo('contact')}
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                currentView === 'contact'
                  ? 'text-blue-700 bg-blue-50'
                  : 'text-slate-700 hover:text-blue-700 hover:bg-slate-50'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Action CTAs: Call Now & Apply Now */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="header-call-now-btn"
              href="tel:9979232182"
              className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-blue-50 text-blue-900 border border-slate-300 rounded-xl text-sm font-bold transition-all shadow-2xs hover:border-blue-300"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Call: 9979232182</span>
            </a>

            <button
              id="header-apply-now-btn"
              onClick={() => onOpenEnquiryModal()}
              className="flex items-center gap-1.5 px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-sm font-bold transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>Apply Now</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:9979232182"
              className="p-2.5 bg-emerald-50 text-emerald-700 rounded-lg border border-emerald-200"
              title="Call 9979232182"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150 max-h-[80vh] overflow-y-auto">
          <div className="p-3 bg-blue-50 rounded-xl mb-3 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-slate-800 block">Vastral, Ahmedabad Office</span>
              <a href="tel:9979232182" className="text-sm font-extrabold text-blue-700">
                Call: 9979232182
              </a>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiryModal();
              }}
              className="px-3 py-1.5 bg-blue-700 text-white text-xs font-bold rounded-lg"
            >
              Enquire Now
            </button>
          </div>

          <button
            onClick={() => navigateTo('home')}
            className={`w-full text-left px-3 py-2.5 text-sm font-semibold rounded-lg ${
              currentView === 'home' ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => navigateTo('about')}
            className={`w-full text-left px-3 py-2.5 text-sm font-semibold rounded-lg ${
              currentView === 'about' ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            About Us
          </button>
          <button
            onClick={() => navigateTo('loans')}
            className={`w-full text-left px-3 py-2.5 text-sm font-semibold rounded-lg ${
              currentView === 'loans' ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            All 24 Loan Products
          </button>
          <button
            onClick={() => navigateTo('calculator')}
            className={`w-full text-left px-3 py-2.5 text-sm font-semibold rounded-lg ${
              currentView === 'calculator' ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            EMI Calculator
          </button>
          <button
            onClick={() => navigateTo('eligibility')}
            className={`w-full text-left px-3 py-2.5 text-sm font-semibold rounded-lg ${
              currentView === 'eligibility' ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            Eligibility Checker
          </button>
          <button
            onClick={() => navigateTo('documents')}
            className={`w-full text-left px-3 py-2.5 text-sm font-semibold rounded-lg ${
              currentView === 'documents' ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            Documents Checklist
          </button>
          <button
            onClick={() => navigateTo('faq')}
            className={`w-full text-left px-3 py-2.5 text-sm font-semibold rounded-lg ${
              currentView === 'faq' ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            Frequently Asked Questions
          </button>
          <button
            onClick={() => navigateTo('contact')}
            className={`w-full text-left px-3 py-2.5 text-sm font-semibold rounded-lg ${
              currentView === 'contact' ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            Contact Us (Vastral)
          </button>
        </div>
      )}
    </header>
  );
};
