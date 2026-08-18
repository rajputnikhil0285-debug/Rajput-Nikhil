import React, { useState, useEffect } from 'react';
import { PageView, LoanCategory } from './types';
import { LOANS_DATA } from './data/loansData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { HeroSection } from './components/HeroSection';
import { TrustSection } from './components/TrustSection';
import { LoanProductsGrid } from './components/LoanProductsGrid';
import { LoanDetailPage } from './components/LoanDetailPage';
import { EMICalculator } from './components/EMICalculator';
import { EligibilityChecker } from './components/EligibilityChecker';
import { DocumentsPage } from './components/DocumentsPage';
import { AboutUsPage } from './components/AboutUsPage';
import { ContactUsPage } from './components/ContactUsPage';
import { FAQPage } from './components/FAQPage';
import { LegalPages } from './components/LegalPages';
import { LoanEnquirySection } from './components/LoanEnquirySection';
import { ArrowRight, Calculator, CheckCircle2, ShieldCheck, Sparkles, Phone, MessageCircle } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [selectedLoan, setSelectedLoan] = useState<LoanCategory>(LOANS_DATA[0]);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState<boolean>(false);
  const [enquiryInitialLoanType, setEnquiryInitialLoanType] = useState<string>('Personal Loan');

  // Smooth scroll to top whenever the view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const handleSelectLoan = (loan: LoanCategory) => {
    setSelectedLoan(loan);
    setCurrentView('loan-detail');
  };

  const handleOpenEnquiryModal = (loanType?: string) => {
    if (loanType) {
      setEnquiryInitialLoanType(loanType);
    }
    setIsEnquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
      
      {/* Top Navigation Header */}
      <Header
        currentView={currentView}
        setCurrentView={setCurrentView}
        onSelectLoan={handleSelectLoan}
        onOpenEnquiryModal={() => handleOpenEnquiryModal('Personal Loan')}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentView === 'home' && (
          <div>
            {/* Hero Section */}
            <HeroSection
              setCurrentView={setCurrentView}
              onOpenEnquiryModal={() => handleOpenEnquiryModal('Personal Loan')}
            />

            {/* Trust Section */}
            <TrustSection />

            {/* Loan Products Grid (All 24 loans accessible with search & filters) */}
            <div className="py-6">
              <LoanProductsGrid
                onSelectLoan={handleSelectLoan}
                onEnquireLoan={(name) => handleOpenEnquiryModal(name)}
              />
            </div>

            {/* Quick Interactive Tool Previews on Home */}
            <section className="py-16 bg-white border-t border-b border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                
                {/* EMI Calculator Section on Home */}
                <div className="space-y-4">
                  <div className="text-center max-w-2xl mx-auto">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
                      Free Online Financial Tools
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                      Calculate Your Monthly Loan EMI
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Use our interactive calculator to estimate monthly installments and overall interest payable.
                    </p>
                  </div>
                  <EMICalculator
                    onApplyForLoan={() => handleOpenEnquiryModal('Home Loan')}
                  />
                </div>

                {/* Eligibility Checker Preview */}
                <div className="space-y-4 pt-8 border-t border-slate-200">
                  <div className="text-center max-w-2xl mx-auto">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                      Fast Eligibility Guidance
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                      Check Your Basic Loan Eligibility
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Assess your debt-to-income ratio and estimate possible borrowing power based on standard banking guidelines.
                    </p>
                  </div>
                  <EligibilityChecker
                    onOpenEnquiryModal={() => handleOpenEnquiryModal('Personal Loan')}
                  />
                </div>

              </div>
            </section>

            {/* Bottom Loan Enquiry Section on Homepage */}
            <div className="py-12 bg-slate-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <LoanEnquirySection initialLoanType="Personal Loan" />
              </div>
            </div>
          </div>
        )}

        {currentView === 'loans' && (
          <div className="py-8">
            <LoanProductsGrid
              onSelectLoan={handleSelectLoan}
              onEnquireLoan={(name) => handleOpenEnquiryModal(name)}
            />
          </div>
        )}

        {currentView === 'loan-detail' && (
          <LoanDetailPage
            loan={selectedLoan}
            onBackToLoans={() => setCurrentView('loans')}
            setCurrentView={setCurrentView}
            onOpenEnquiryModal={(name) => handleOpenEnquiryModal(name || selectedLoan.name)}
          />
        )}

        {currentView === 'calculator' && (
          <div className="py-8 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-xs font-extrabold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
                  Financial Calculator
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
                  Comprehensive Loan EMI Calculator
                </h1>
                <p className="text-sm text-slate-600">
                  Plan your loan repayments, test prepayment strategies, and view monthly amortization schedules.
                </p>
              </div>
              <EMICalculator
                onApplyForLoan={() => handleOpenEnquiryModal('Personal Loan')}
              />
            </div>
          </div>
        )}

        {currentView === 'eligibility' && (
          <div className="py-8 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-xs font-extrabold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
                  Loan Assessment Tool
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
                  Check Basic Loan Eligibility
                </h1>
                <p className="text-sm text-slate-600">
                  Evaluate your monthly income, FOIR capacity, and estimated eligibility before submitting documents.
                </p>
              </div>
              <EligibilityChecker
                onOpenEnquiryModal={() => handleOpenEnquiryModal('Personal Loan')}
              />
            </div>
          </div>
        )}

        {currentView === 'documents' && <DocumentsPage />}

        {currentView === 'about' && (
          <AboutUsPage
            setCurrentView={setCurrentView}
            onOpenEnquiryModal={() => handleOpenEnquiryModal('Personal Loan')}
          />
        )}

        {currentView === 'faq' && <FAQPage />}

        {currentView === 'contact' && <ContactUsPage />}

        {currentView === 'privacy' && (
          <LegalPages type="privacy" setCurrentView={setCurrentView} />
        )}

        {currentView === 'terms' && (
          <LegalPages type="terms" setCurrentView={setCurrentView} />
        )}

        {currentView === 'disclaimer' && (
          <LegalPages type="disclaimer" setCurrentView={setCurrentView} />
        )}
      </main>

      {/* Sticky Call & WhatsApp Floating Actions */}
      <FloatingActions
        onOpenEnquiryModal={() => handleOpenEnquiryModal('General Loan')}
      />

      {/* Global Quick Enquiry Modal */}
      {isEnquiryModalOpen && (
        <div
          id="global-enquiry-modal-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsEnquiryModalOpen(false);
          }}
        >
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-2xl overflow-hidden relative animate-in zoom-in-95 duration-200">
            <LoanEnquirySection
              initialLoanType={enquiryInitialLoanType}
              isModal={true}
              onCloseModal={() => setIsEnquiryModalOpen(false)}
            />
          </div>
        </div>
      )}

      {/* Global Footer with Mandatory Regulatory Disclaimer */}
      <Footer
        setCurrentView={setCurrentView}
        onSelectLoan={handleSelectLoan}
      />
    </div>
  );
}
