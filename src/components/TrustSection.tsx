import React from 'react';
import {
  FileCheck2,
  Clock,
  Layers,
  Eye,
  Headphones,
  ShieldCheck,
  Building,
  CheckCircle2
} from 'lucide-react';

export const TrustSection: React.FC = () => {
  const trustCards = [
    {
      id: 'trust-simple-process',
      title: 'Simple Process',
      icon: FileCheck2,
      description: 'Streamlined documentation and step-by-step guidance to ensure your paperwork is complete and submission-ready without confusion.'
    },
    {
      id: 'trust-quick-enquiry',
      title: 'Quick Enquiry',
      icon: Clock,
      description: 'Submit your requirement online in minutes or call our Vastral office directly to initiate personalized profile matching.'
    },
    {
      id: 'trust-multiple-options',
      title: 'Multiple Loan Options',
      icon: Layers,
      description: 'Explore 24+ loan products across leading banks and registered NBFCs to find solutions aligned with your financial profile.'
    },
    {
      id: 'trust-transparent-info',
      title: 'Transparent Information',
      icon: Eye,
      description: 'Clear details on eligibility parameters, indicative charges, and documentation with zero misleading claims.'
    },
    {
      id: 'trust-customer-support',
      title: 'Dedicated Customer Support',
      icon: Headphones,
      description: 'Direct local assistance in Vastral and greater Ahmedabad from 9:30 AM to 7:30 PM (Mon-Sat) via phone (9979232182) and WhatsApp.'
    }
  ];

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-3">
            <ShieldCheck className="w-4 h-4 text-blue-700" />
            <span>Why Choose Jay Meldi Associates</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Transparent Financial Assistance You Can Rely On
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            We simplify the loan search process for borrowers in Ahmedabad with unbiased comparison, accurate document checklists, and local doorstep assistance.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {trustCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                id={card.id}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group hover:border-blue-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-blue-700 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Ahmedabad Focused</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Responsible Transparency Disclaimer Bar */}
        <div className="mt-10 p-4 bg-white rounded-2xl border border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              <strong>Fair Advisory Policy:</strong> Final sanction, loan amounts, tenures, and interest rates are determined solely by lending institutions based on credit evaluation.
            </span>
          </span>
          <span className="text-slate-600 font-semibold shrink-0">
            Helpline: <a href="tel:9979232182" className="text-blue-700 font-bold hover:underline">9979232182</a>
          </span>
        </div>

      </div>
    </section>
  );
};
