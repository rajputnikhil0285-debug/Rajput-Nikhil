import { DocumentSection } from '../types';

export const DOCUMENT_SECTIONS: DocumentSection[] = [
  {
    id: 'salaried',
    categoryName: 'Salaried Individuals',
    targetAudience: 'Employees working in Private, MNC, Govt, or Public Sector',
    iconName: 'User',
    mandatoryDocs: [
      'PAN Card (Mandatory as per RBI/Tax guidelines)',
      'Aadhaar Card (Linked with active mobile number for e-sign / OTP)',
      'Current Address Proof (Electricity bill, Passport, Voter ID, or registered Rent Agreement if rented)',
      '2 Recent Passport-size Photographs'
    ],
    financialDocs: [
      'Latest 3 to 6 Months Salary Slips with complete breakdown of allowances & deductions',
      'Latest 6 Months Salary Bank Account Statements (in PDF with e-stamp/downloaded from netbanking)',
      'Form 16 / Part-B issued by the current employer for the last 2 financial years',
      'Appointment Letter or Official Employee ID Card proving total vintage'
    ],
    propertyOrAssetDocs: [
      'For Home / LAP: Copy of Sale Deed, Allotment Letter, Builder Buyer Agreement, and Tax Receipts',
      'For Vehicle Loan: Dealer Proforma invoice and quotation'
    ],
    notes: [
      'Salary must be directly credited to a bank account (cash salary profiles may require specialized micro-lender documentation).',
      'Ensure salary slips match the credit entries reflected in bank statements.'
    ]
  },
  {
    id: 'self-employed-business',
    categoryName: 'Self-Employed, Traders & Business Owners',
    targetAudience: 'Sole Proprietors, Partnership Firms, LLPs, Private Limited Companies, Shopkeepers & MSMEs',
    iconName: 'Building',
    mandatoryDocs: [
      'PAN Card of the Individual Proprietor / Partners / Directors',
      'PAN Card of the Company / Firm (for non-proprietorship entities)',
      'Aadhaar Card of all key business promoters & guarantors',
      'Business Registered Office Address Proof (Electricity bill / Property tax / Rent deed)',
      'Passport-size photographs of all signing authorities'
    ],
    financialDocs: [
      'Income Tax Returns (ITR-3, ITR-4, or ITR-5/6) for the last 2 to 3 Financial Years',
      'Computation of Total Income, Audited Balance Sheet, and Profit & Loss Statement certified by CA',
      'Last 12 Months Operative Current Account Bank Statements of the business entity',
      'Last 12 Months GST Returns (GSTR-3B & GSTR-1) with payment challans'
    ],
    propertyOrAssetDocs: [
      'Business Registration: GST Certificate, Udyam / MSME Certificate, Shop & Establishment (Gumastadhara)',
      'Partnership Deed, MOA & AOA, Certificate of Incorporation (COI), Board Resolution for loan application',
      'For LAP / Machinery: Property title deeds, AUDA approved plans, or Machinery vendor quotations'
    ],
    notes: [
      'Audited financials mandatory if turnover exceeds statutory audit limits under the Income Tax Act.',
      'Banking transactions should show consistent throughput matching reported GST turnover.'
    ]
  },
  {
    id: 'property-secured',
    categoryName: 'Property & Collateral Documents (For Home Loan & LAP)',
    targetAudience: 'Applicants pledging Residential, Commercial, or Industrial Property',
    iconName: 'FileText',
    mandatoryDocs: [
      'Title Deeds / Registered Sale Deed / Conveyance Deed in favor of the current owner',
      'Prior chain of title deeds tracing ownership history for the last 13 to 30 years',
      'Index-II copy issued by the Sub-Registrar office',
      'AUDA / AMC / Municipal Corporation sanctioned building construction plan and blueprint map',
      'Latest Property Tax Assessment Book extract & paid tax receipt',
      'Possession Letter, Allotment Letter, and Share Certificate (in case of registered housing society)'
    ],
    financialDocs: [
      'No Objection Certificate (NOC) from Society / Builder / Development Authority',
      'Non-Encumbrance Certificate (NEC) for the property tenure',
      'Approved NA (Non-Agricultural) order and 7/12 extract for independent plots/bungalows'
    ],
    propertyOrAssetDocs: [
      'Payment receipts / Bank debit trail verifying the applicant’s own down-payment contribution'
    ],
    notes: [
      'Original title deeds will be deposited with the lending institution against loan disbursement and returned after complete closure.',
      'Lender-appointed legal advocates and chartered valuers will conduct physical inspection.'
    ]
  },
  {
    id: 'agriculture-farmers',
    categoryName: 'Farmers & Agricultural Credit',
    targetAudience: 'Cultivators, Dairy Farmers, Agro-Processors & Rural Borrowers',
    iconName: 'Trees',
    mandatoryDocs: [
      'Aadhaar Card and Voter ID Card',
      'PAN Card (or Form 60 if PAN is not allotted)',
      'Recent Passport-size Photographs'
    ],
    financialDocs: [
      'Latest 7/12 (Satbara) & 8A Land Record Extracts verified by Talati / Village Revenue Officer',
      'Crop verification certificate (Pani Patrak) proving ongoing agricultural cultivation',
      'Kisan Credit Card (KCC) passbook / Saving bank account statement for the last 12 months',
      'Dairy cooperative milk supply passbook / receipts (for dairy loans)'
    ],
    propertyOrAssetDocs: [
      'Tractor / Harvester / Solar pump dealer proforma quotation',
      'Land map with village boundary markings (Namuna No. 7)'
    ],
    notes: [
      'Land must be free of unauthorized mortgages and encumbrances.',
      'Interest subvention applies strictly to prompt repayment schedules.'
    ]
  }
];

export const GENERAL_DOC_CHECKLIST = [
  { title: 'Identity Proof', items: ['PAN Card (Primary)', 'Aadhaar Card', 'Passport', 'Voter ID', 'Driving License'] },
  { title: 'Address Proof', items: ['Aadhaar Card', 'Electricity Bill (Latest 2 months)', 'Registered Rent Agreement', 'Property Tax Bill', 'Bank Passbook'] },
  { title: 'Income Proof (Salaried)', items: ['3 Months Salary Slips', 'Form 16 (2 Years)', '6 Months Bank Statement'] },
  { title: 'Income Proof (Business)', items: ['2-3 Years ITR with Computation', 'CA Audited P&L and Balance Sheet', '12 Months GST Returns', '12 Months Current A/c Statement'] },
  { title: 'Business Entity Proof', items: ['GST Registration Certificate', 'Udyam Aadhaar (MSME)', 'Gumastadhara License', 'Partnership Deed / MOA-AOA'] },
  { title: 'Collateral Papers (Secured)', items: ['Registered Sale Deed', 'Index-II Copy', 'Approved Map / Layout', 'Tax Paid Receipts', 'Society NOC'] }
];
