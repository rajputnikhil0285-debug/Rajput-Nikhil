import React from 'react';
import {
  Building,
  MapPin,
  Phone,
  ShieldCheck,
  Users,
  Target,
  Award,
  CheckCircle2,
  HelpCircle,
  Clock,
  Send,
  MessageCircle
} from 'lucide-react';
import { PageView } from '../types';

interface AboutUsPageProps {
  setCurrentView: (view: PageView) => void;
  onOpenEnquiryModal: () => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ setCurrentView, onOpenEnquiryModal }) => {
  const whatsappUrl = 'https://wa.me/919979232182?text=' + encodeURIComponent('Hello, I would like to know more about your financial assistance services in Vastral.');

  return (
    <div className="bg-slate-50 min-h-screen pb-20 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold">
            <Building className="w-4 h-4 text-blue-700" />
            <span>About Jay Meldi Associates</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Your Local Loan Advisory & Enquiry Partner in Ahmedabad
          </h1>
          <p className="text-sm text-slate-600">
            Dedicated loan enquiry facilitation and financial-services assistance based in Vastral, Ahmedabad, Gujarat.
          </p>
        </div>

        {/* Core Profile Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-2xs space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-wider text-blue-700">
                Who We Are
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 leading-snug">
                Simplifying the Borrowing Journey for Individuals & Businesses in Gujarat
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                <strong>Jay Meldi Associates</strong> is an independent loan enquiry and financial-services assistance platform operating from Vastral, Ahmedabad. Our mission is to bridge the gap between borrowers seeking personal, residential, commercial, or agricultural credit and the wide array of financial institutions operating in Gujarat.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Whether you are a salaried individual planning to purchase your first home, a local manufacturer in Odhav requiring machinery finance, a shopkeeper needing working capital, or a student aspiring for overseas studies, we assist you in exploring viable options, understanding true EMI costs, and structuring required documentation.
              </p>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-700">
                <span className="font-bold text-slate-900 block">Our Clear Role & Commitment:</span>
                <p>
                  We operate strictly as an advisory and loan enquiry facilitator. We do not engage in private money lending or accept public deposits. All loans are disbursed by licensed banks, NBFCs, and financial institutions subject to their formal credit approval.
                </p>
              </div>
            </div>

            {/* Quick Contact & Details Box */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-5">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block">
                Official Business Details
              </span>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <Building className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block">Brand Name:</span>
                    <span className="font-bold text-white text-sm">Jay Meldi Associates</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block">Operating Address:</span>
                    <span className="font-semibold text-white">Vastral, Ahmedabad, Gujarat, India</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block">Helpline Mobile Number:</span>
                    <a href="tel:9979232182" className="font-extrabold text-emerald-400 text-base hover:underline">
                      9979232182
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block">Service Hours:</span>
                    <span className="text-slate-200">Monday to Saturday: 9:30 AM to 7:30 PM</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="tel:9979232182"
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call 9979232182</span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors border border-slate-700"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Message</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Our Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Unbiased Guidance</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We evaluate multiple lender criteria without steering applicants toward unfavorable terms. We prioritize the borrower’s long-term affordability and financial wellbeing.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Zero Misleading Promises</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We never promise guaranteed loans, fabricated interest rates, or zero-document miracles. We respect banking underwriting norms and communicate realistic timelines.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Local Ahmedabad Touch</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Being locally situated in Vastral allows us to provide in-person assistance, physical document collection, and direct coordination with local bank branches across Ahmedabad.
            </p>
          </div>
        </div>

        {/* Regulatory Governance Statement */}
        <div className="p-6 bg-slate-900 text-slate-300 rounded-3xl border border-slate-800 space-y-3 text-xs leading-relaxed">
          <div className="flex items-center gap-2 text-white font-bold">
            <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0" />
            <span>Statutory Disclaimer & Disclosure</span>
          </div>
          <p>
            Jay Meldi Associates is an independent loan facilitation platform. We do not hold an NBFC or banking license issued by the Reserve Bank of India (RBI) and do not represent ourselves as a government body or direct credit issuer. All credit evaluation, interest rate determination, processing fees, loan tenure, and disbursals are solely conducted by partner banks and RBI-regulated financial institutions.
          </p>
        </div>

      </div>
    </div>
  );
};
