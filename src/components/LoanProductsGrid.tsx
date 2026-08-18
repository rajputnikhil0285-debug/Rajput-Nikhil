import React, { useState, useMemo } from 'react';
import {
  Search,
  ArrowRight,
  Send,
  FileText,
  UserCheck,
  Info,
  ShieldCheck,
  CheckCircle2,
  Phone
} from 'lucide-react';
import { LoanCategory, LoanCategoryGroup } from '../types';
import { LOANS_DATA, LOAN_GROUPS } from '../data/loansData';
import { LoanIcon } from './LoanIcon';

interface LoanProductsGridProps {
  onSelectLoan: (loan: LoanCategory) => void;
  onEnquireLoan: (loanName: string) => void;
}

export const LoanProductsGrid: React.FC<LoanProductsGridProps> = ({
  onSelectLoan,
  onEnquireLoan
}) => {
  const [selectedGroup, setSelectedGroup] = useState<LoanCategoryGroup>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLoans = useMemo(() => {
    return LOANS_DATA.filter((loan) => {
      const matchesGroup = selectedGroup === 'all' || loan.group === selectedGroup;
      const matchesSearch =
        loan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loan.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loan.typicalUse.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loan.tag.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesGroup && matchesSearch;
    });
  }, [selectedGroup, searchQuery]);

  return (
    <section id="loan-products-section" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-3">
            <ShieldCheck className="w-4 h-4 text-blue-700" />
            <span>Comprehensive Loan Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Explore All 24 Loan Products
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Tailored loan solutions for salaried individuals, self-employed professionals, traders, and businesses in Vastral and Ahmedabad.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="space-y-4 mb-10">
          {/* Search Input */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              id="search-loans-input"
              type="text"
              placeholder="Search by loan name (e.g. Home, MSME, Car, Gold)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 shadow-2xs focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600 font-bold"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {LOAN_GROUPS.map((grp) => (
              <button
                key={grp.key}
                id={`filter-tab-${grp.key}`}
                onClick={() => setSelectedGroup(grp.key)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedGroup === grp.key
                    ? 'bg-blue-700 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {grp.label}
              </button>
            ))}
          </div>
        </div>

        {/* Loan Cards Grid */}
        {filteredLoans.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 space-y-3">
            <Info className="w-10 h-10 text-slate-400 mx-auto" />
            <h3 className="text-lg font-bold text-slate-900">No loan categories match your search</h3>
            <p className="text-xs text-slate-500">Try adjusting your keyword or reset filters to browse all 24 loans.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedGroup('all');
              }}
              className="px-4 py-2 bg-blue-700 text-white text-xs font-bold rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLoans.map((loan) => (
              <div
                key={loan.id}
                id={`loan-card-${loan.id}`}
                className="bg-white rounded-2xl border border-slate-200 shadow-2xs hover:shadow-xl transition-all duration-200 p-6 flex flex-col justify-between group hover:border-blue-300"
              >
                <div>
                  {/* Card Header: Icon & Tag */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center group-hover:bg-blue-700 group-hover:text-white transition-colors shrink-0">
                      <LoanIcon name={loan.iconName} className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 bg-slate-100 text-slate-700 rounded-full border border-slate-200 text-right">
                      {loan.tag}
                    </span>
                  </div>

                  {/* Loan Name & Description */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {loan.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                    {loan.shortDesc}
                  </p>

                  {/* Typical Use */}
                  <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs">
                    <span className="font-bold text-slate-800 block text-[11px] uppercase tracking-wider mb-0.5">
                      Typical Purpose:
                    </span>
                    <p className="text-slate-600 line-clamp-2">
                      {loan.typicalUse}
                    </p>
                  </div>

                  {/* Quick Eligibility Snippet */}
                  <div className="mt-3.5 space-y-1 text-xs">
                    <span className="font-bold text-slate-700 text-[11px] uppercase tracking-wider flex items-center gap-1">
                      <UserCheck className="w-3.5 h-3.5 text-blue-600" />
                      <span>Eligibility Overview:</span>
                    </span>
                    <p className="text-slate-600 text-[11px] line-clamp-2 pl-4">
                      {loan.eligibilityOverview[0]} • {loan.eligibilityOverview[1] || ''}
                    </p>
                  </div>

                  {/* Quick Documents Required */}
                  <div className="mt-3 space-y-1 text-xs">
                    <span className="font-bold text-slate-700 text-[11px] uppercase tracking-wider flex items-center gap-1">
                      <FileText className="w-3.5 h-3.5 text-blue-600" />
                      <span>Key Documents:</span>
                    </span>
                    <p className="text-slate-600 text-[11px] line-clamp-1 pl-4">
                      {loan.documentsRequired.slice(0, 3).join(', ')}
                    </p>
                  </div>

                  {/* Indicative Amount & Tenure Badges */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="text-slate-500 font-medium">Possible Tenure:</span>
                    <span className="font-bold text-slate-800">{loan.possibleTenure.split('(')[0]}</span>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2">
                  <button
                    id={`btn-view-details-${loan.id}`}
                    onClick={() => onSelectLoan(loan)}
                    className="flex-1 py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    id={`btn-enquire-${loan.id}`}
                    onClick={() => onEnquireLoan(loan.name)}
                    className="flex-1 py-2.5 px-3 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1 shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Enquire Now</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Regulatory Note at Bottom of Grid */}
        <div className="mt-12 p-4 bg-white rounded-2xl border border-slate-200 text-center text-xs text-slate-500 max-w-4xl mx-auto space-y-1">
          <p className="font-semibold text-slate-700">
            *Notice on Rates, Tenures & Approvals:
          </p>
          <p>
            Actual interest rates, processing charges, sanctioned loan amount, tenure, and credit approval depend entirely on the partner lender’s internal policy and the applicant’s credit profile. Rates vary by lender and applicant profile.
          </p>
          <div className="pt-2">
            <span className="text-slate-600">Need immediate counseling in Vastral?</span>{' '}
            <a href="tel:9979232182" className="text-blue-700 font-bold hover:underline">
              Call 9979232182
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
