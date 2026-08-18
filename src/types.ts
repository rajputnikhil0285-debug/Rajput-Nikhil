export type PageView =
  | 'home'
  | 'loans'
  | 'loan-detail'
  | 'calculator'
  | 'eligibility'
  | 'documents'
  | 'about'
  | 'faq'
  | 'contact'
  | 'privacy'
  | 'terms'
  | 'disclaimer';

export type LoanCategoryGroup =
  | 'all'
  | 'personal-family'
  | 'home-property'
  | 'business-msme'
  | 'vehicle'
  | 'specialized-agri';

export interface LoanCategory {
  id: string;
  slug: string;
  name: string;
  shortDesc: string;
  group: LoanCategoryGroup;
  iconName: string;
  tag: string;
  typicalUse: string;
  possibleAmount: string;
  possibleTenure: string;
  indicativeRateNote: string;
  eligibilityOverview: string[];
  documentsRequired: string[];
  features: string[];
  benefits: string[];
  applicationProcess: {
    step: number;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  seoTitle: string;
  seoDescription: string;
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface DocumentSection {
  id: string;
  categoryName: string;
  targetAudience: string;
  iconName: string;
  mandatoryDocs: string[];
  financialDocs: string[];
  propertyOrAssetDocs?: string[];
  notes: string[];
}

export interface LoanEnquiryFormState {
  fullName: string;
  mobile: string;
  email: string;
  city: string;
  loanType: string;
  loanAmount: string;
  monthlyIncome: string;
  employmentType: 'Salaried' | 'Self-Employed Professional' | 'Business Owner / MSME' | 'Farmer / Agriculture' | 'Other';
  existingLoanEmi: string;
  preferredContactTime: 'Anytime' | 'Morning (9 AM - 12 PM)' | 'Afternoon (12 PM - 4 PM)' | 'Evening (4 PM - 7:30 PM)';
  message: string;
  consent: boolean;
}

export interface EligibilityInput {
  name: string;
  mobile: string;
  employmentType: 'Salaried' | 'Self-Employed' | 'Business' | 'Agriculture';
  monthlyIncome: number;
  existingEMI: number;
  requiredLoanAmount: number;
  preferredLoanType: string;
  city: string;
  cibilScoreRange?: string;
  propertyIdentified?: boolean;
}

export interface EligibilityResult {
  estimatedBorrowingPowerMin: number;
  estimatedBorrowingPowerMax: number;
  foirPercentage: number;
  maxAffordableEmi: number;
  eligibilityStatus: 'High Likelihood' | 'Moderate Likelihood' | 'Subject to Additional Review';
  statusColor: string;
  assessmentNote: string;
  recommendations: string[];
}
