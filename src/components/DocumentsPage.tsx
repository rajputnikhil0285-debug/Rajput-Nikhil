import React, { useState } from 'react';
import {
  FileText,
  User,
  Building,
  CheckSquare,
  Download,
  Printer,
  ShieldCheck,
  Phone,
  AlertCircle,
  Trees,
  CheckCircle2
} from 'lucide-react';
import { DOCUMENT_SECTIONS, GENERAL_DOC_CHECKLIST } from '../data/documentsData';

export const DocumentsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('salaried');

  const currentSection = DOCUMENT_SECTIONS.find((s) => s.id === activeCategory) || DOCUMENT_SECTIONS[0];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold">
            <FileText className="w-4 h-4 text-blue-700" />
            <span>Complete Documentation Guide</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Required Documents for Loan Applications
          </h1>
          <p className="text-sm text-slate-600">
            A comprehensive checklist to help you assemble all required paperwork before submitting your loan application in Vastral, Ahmedabad.
          </p>
        </div>

        {/* Master General Checklist Grid */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                General Documents Checklist Across All Loan Categories
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Standard officially valid identity, address, income, and banking verification documents.
              </p>
            </div>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-colors shrink-0"
            >
              <Printer className="w-4 h-4" /> Print / Save Checklist
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GENERAL_DOC_CHECKLIST.map((group, idx) => (
              <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
                <span className="text-xs font-extrabold text-blue-900 uppercase tracking-wider block">
                  {group.title}
                </span>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Categorized Detailed Documentation Tabs */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              Checklist by Applicant & Loan Profile
            </h2>
            <div className="flex flex-wrap gap-2">
              {DOCUMENT_SECTIONS.map((sec) => (
                <button
                  key={sec.id}
                  id={`doc-tab-${sec.id}`}
                  onClick={() => setActiveCategory(sec.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    activeCategory === sec.id
                      ? 'bg-blue-700 text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {sec.categoryName}
                </button>
              ))}
            </div>
          </div>

          {/* Active Section Content */}
          <div className="space-y-6">
            <div className="flex items-start justify-between gap-4 p-4 bg-blue-50/70 rounded-2xl border border-blue-100">
              <div>
                <h3 className="text-base font-bold text-blue-950">
                  {currentSection.categoryName}
                </h3>
                <p className="text-xs text-blue-800/80 mt-0.5">
                  Target Profile: {currentSection.targetAudience}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mandatory KYC */}
              <div className="space-y-3 p-5 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                  Mandatory KYC & Identity Proofs
                </span>
                <ul className="space-y-2 text-xs text-slate-700">
                  {currentSection.mandatoryDocs.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckSquare className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Financial Documents */}
              <div className="space-y-3 p-5 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                  Income & Banking Records
                </span>
                <ul className="space-y-2 text-xs text-slate-700">
                  {currentSection.financialDocs.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Property / Asset specific documents if available */}
            {currentSection.propertyOrAssetDocs && (
              <div className="space-y-3 p-5 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                  Entity / Asset / Collateral Proofs
                </span>
                <ul className="space-y-2 text-xs text-slate-700">
                  {currentSection.propertyOrAssetDocs.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckSquare className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Important Advisory Notes */}
            <div className="p-4 bg-amber-50/80 rounded-2xl border border-amber-200/80 space-y-2 text-xs text-amber-900">
              <span className="font-bold flex items-center gap-1.5 text-amber-950">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Advisor Documentation Tips:</span>
              </span>
              <ul className="space-y-1 list-disc list-inside text-[11px] text-amber-800">
                {currentSection.notes.map((note, idx) => (
                  <li key={idx}>{note}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Local Assistance Box */}
        <div className="p-6 bg-slate-900 text-white rounded-3xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block">
              Doorstep Verification in Vastral
            </span>
            <h3 className="text-lg font-bold text-white">
              Need assistance collecting or organizing your loan documents?
            </h3>
            <p className="text-xs text-slate-400">
              Our Ahmedabad loan coordinator can review your files before lender submission to prevent rejection delays.
            </p>
          </div>
          <a
            href="tel:9979232182"
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl flex items-center gap-2 shrink-0 transition-colors shadow-lg"
          >
            <Phone className="w-4 h-4" />
            <span>Call 9979232182</span>
          </a>
        </div>

        {/* Statutory Note */}
        <p className="text-xs text-slate-400 text-center max-w-3xl mx-auto">
          *Note: Document requirements vary by loan type, credit tier, loan quantum, and partner lender policies. Lending institutions reserve the right to request additional supporting documents during credit underwriting.
        </p>

      </div>
    </div>
  );
};
