import React from 'react';
import { ShieldCheck, Lock, FileText, AlertTriangle, ArrowLeft, Phone } from 'lucide-react';
import { PageView } from '../types';

interface LegalPagesProps {
  type: 'privacy' | 'terms' | 'disclaimer';
  setCurrentView: (view: PageView) => void;
}

export const LegalPages: React.FC<LegalPagesProps> = ({ type, setCurrentView }) => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20 pt-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Back Button */}
        <button
          onClick={() => setCurrentView('home')}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-blue-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        {/* Content Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-2xs space-y-8">
          
          {type === 'privacy' && (
            <div className="space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold mb-2">
                  <Lock className="w-4 h-4 text-blue-700" />
                  <span>Data Protection & Privacy</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Privacy Policy
                </h1>
                <p className="text-xs text-slate-500 mt-1">
                  Last updated: August 2026 • Jay Meldi Associates, Vastral, Ahmedabad, Gujarat
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <h2 className="text-base font-bold text-slate-900">1. Commitment to User Privacy</h2>
                <p>
                  Jay Meldi Associates (“we”, “our”, or “us”) respects your privacy. This Privacy Policy explains how we collect, handle, use, and protect the contact details and basic non-sensitive information you share when submitting a loan enquiry on our website.
                </p>

                <h2 className="text-base font-bold text-slate-900">2. Information We Collect</h2>
                <p>
                  We collect only information reasonably necessary to assist you with loan inquiries, such as:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>Full Name, Mobile Number, and Email Address</li>
                  <li>City or district in Gujarat (e.g. Vastral, Ahmedabad)</li>
                  <li>Self-reported broad income brackets, employment type, and desired loan type</li>
                </ul>
                <p className="p-3 bg-blue-50 rounded-xl text-blue-900 text-xs font-medium">
                  <strong>Zero Unnecessary Data Collection:</strong> We do NOT collect or store netbanking passwords, credit/debit card CVV numbers, UPI PINs, or biometric details.
                </p>

                <h2 className="text-base font-bold text-slate-900">3. Purpose and Use of Collected Data</h2>
                <p>
                  Your information is used strictly to:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>Respond to your requested loan enquiry via call (9979232182), WhatsApp, or SMS.</li>
                  <li>Assess eligibility parameters and discuss partner lending options.</li>
                  <li>Facilitate document coordination upon your explicit agreement.</li>
                </ul>

                <h2 className="text-base font-bold text-slate-900">4. Information Security</h2>
                <p>
                  We employ HTTPS encrypted web protocols and restricted administrative access to ensure your information remains confidential and protected against unauthorized access.
                </p>

                <h2 className="text-base font-bold text-slate-900">5. Contact Regarding Privacy</h2>
                <p>
                  For any privacy questions or data removal requests, contact our Vastral office at:
                  <br />
                  <strong>Jay Meldi Associates</strong>
                  <br />
                  Vastral, Ahmedabad, Gujarat, India • Phone: 9979232182
                </p>
              </div>
            </div>
          )}

          {type === 'terms' && (
            <div className="space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold mb-2">
                  <FileText className="w-4 h-4 text-blue-700" />
                  <span>User Agreement</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Terms & Conditions
                </h1>
                <p className="text-xs text-slate-500 mt-1">
                  Jay Meldi Associates • Vastral, Ahmedabad, Gujarat
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <h2 className="text-base font-bold text-slate-900">1. Acceptance of Terms</h2>
                <p>
                  By accessing or submitting an enquiry on this website, you agree to these Terms & Conditions. If you do not agree, please refrain from using our online enquiry tools.
                </p>

                <h2 className="text-base font-bold text-slate-900">2. Nature of Service</h2>
                <p>
                  This website operates strictly as an informational and loan enquiry assistance platform. We are not a direct lender, bank, or NBFC unless explicitly stated in writing. Submission of an enquiry does not constitute an offer, contract, or guarantee of loan disbursal.
                </p>

                <h2 className="text-base font-bold text-slate-900">3. Accuracy of User Information</h2>
                <p>
                  You agree to provide true, accurate, and current information regarding your employment, income, and identity. Providing false or fabricated information to financial institutions may result in rejection and adverse credit reporting by lenders.
                </p>

                <h2 className="text-base font-bold text-slate-900">4. Calculators and Estimations</h2>
                <p>
                  All EMI calculators, comparison widgets, and eligibility check tools on this website provide approximations for illustrative planning purposes only. Final loan schedules and interest rates are defined exclusively in the sanction letter issued by the lending institution.
                </p>

                <h2 className="text-base font-bold text-slate-900">5. Jurisdiction</h2>
                <p>
                  These terms are governed by the laws of India, and any disputes shall be subject to the competent courts of Ahmedabad, Gujarat.
                </p>
              </div>
            </div>
          )}

          {type === 'disclaimer' && (
            <div className="space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold mb-2">
                  <AlertTriangle className="w-4 h-4 text-amber-700" />
                  <span>Legal Notice</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Legal Disclaimer & Regulatory Disclosure
                </h1>
                <p className="text-xs text-slate-500 mt-1">
                  Jay Meldi Associates • Vastral, Ahmedabad, Gujarat, India • Mobile: 9979232182
                </p>
              </div>

              <div className="p-6 bg-slate-900 text-white rounded-2xl border border-slate-800 text-xs sm:text-sm leading-relaxed space-y-3">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-base">
                  <ShieldCheck className="w-5 h-5" />
                  <span>Mandatory Disclaimer Statement:</span>
                </div>
                <blockquote className="border-l-4 border-blue-500 pl-4 py-1 italic text-slate-200 text-sm">
                  “This website is intended for informational and loan enquiry purposes. We are not a bank or lender unless specifically stated. Loan approval, interest rates, processing fees, tenure, loan amount, and other terms are determined by the respective lender based on its policies and the applicant's profile. Submission of an enquiry does not guarantee loan approval or disbursal.”
                </blockquote>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <h2 className="text-base font-bold text-slate-900">1. No Guarantee of Loan Approval</h2>
                <p>
                  Jay Meldi Associates does not guarantee loan sanctions, interest rates, or disbursals. Final credit assessment and sanction decisions are made solely by partner banks, NBFCs, and financial institutions based on RBI guidelines and applicant creditworthiness.
                </p>

                <h2 className="text-base font-bold text-slate-900">2. Intellectual Property & Trademarks</h2>
                <p>
                  All trademarks, service marks, brand names, and logos referenced on this website belong to their respective institutional owners. Reference to any bank or financial institution does not imply endorsement or exclusive affiliation.
                </p>

                <h2 className="text-base font-bold text-slate-900">3. Financial Advice Notice</h2>
                <p>
                  Content on this website is for informational guidance only and should not be treated as professional legal or tax advice. Borrowers are encouraged to read all loan agreements and sanction letters carefully before accepting any credit facility.
                </p>

                <h2 className="text-base font-bold text-slate-900">4. Contact Information</h2>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-700">
                  <p><strong>Business Name:</strong> Jay Meldi Associates</p>
                  <p><strong>Address:</strong> Vastral, Ahmedabad, Gujarat, India</p>
                  <p><strong>Mobile:</strong> <a href="tel:9979232182" className="text-blue-700 font-bold hover:underline">9979232182</a></p>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
