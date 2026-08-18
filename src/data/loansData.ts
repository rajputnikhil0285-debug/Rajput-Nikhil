import { LoanCategory } from '../types';

export const LOANS_DATA: LoanCategory[] = [
  {
    id: 'personal-loan',
    slug: 'personal-loan',
    name: 'Personal Loan',
    group: 'personal-family',
    iconName: 'UserCheck',
    tag: 'Unsecured • Quick Processing',
    shortDesc: 'Multi-purpose unsecured financial assistance for personal emergencies, family needs, or major purchases without collateral.',
    typicalUse: 'Medical emergencies, home repairs, higher education, wedding expenses, travel, or consolidating multiple small debts.',
    possibleAmount: '₹50,000 to ₹40,00,000 (Subject to income and lender criteria)',
    possibleTenure: '12 Months to 60 Months (1 to 5 Years)',
    indicativeRateNote: 'Rates vary by lender and applicant profile. Competitive options available based on CIBIL score and monthly income.',
    eligibilityOverview: [
      'Age: 21 to 58 years (Salaried) or up to 65 years (Self-employed)',
      'Minimum Net Monthly Income: ₹18,000+ (Salaried) or regular business cashflow',
      'Employment Stability: Minimum 1 year of total work experience (or 2 years for business)',
      'Healthy credit history (Preferably 700+ CIBIL score for optimal offers)',
      'Resident of Ahmedabad, Gujarat or surrounding regions'
    ],
    documentsRequired: [
      'Identity Proof (PAN Card & Aadhaar Card)',
      'Current Address Proof (Utility Bill / Rent Agreement / Voter ID)',
      'Latest 3 to 6 Months Bank Statements showing salary credit or cashflow',
      'Latest 3 Months Salary Slips (for salaried individuals)',
      'Recent Passport-size Photograph'
    ],
    features: [
      'No collateral or security deposit required',
      'Flexible repayment tenures from 1 to 5 years',
      'Minimal documentation with swift digital verification',
      'Transparent processing with multi-lender comparison assistance',
      'Immediate assistance from our Vastral, Ahmedabad office'
    ],
    benefits: [
      'Use funds freely for any lawful personal requirement',
      'Fixed monthly EMIs making budgeting predictable',
      'Helps build and enhance credit history with timely repayments',
      'Option for part-payment or foreclosure as per lender policy'
    ],
    applicationProcess: [
      { step: 1, title: 'Submit Online Enquiry', description: 'Fill the quick enquiry form or contact our Vastral office at 9979232182.' },
      { step: 2, title: 'Profile & Document Verification', description: 'Our loan advisor reviews your income, city, and required documentation.' },
      { step: 3, title: 'Lender Matching & Comparison', description: 'We help you identify lenders matching your eligibility and repayment capacity.' },
      { step: 4, title: 'Sanction & Disbursal', description: 'Upon formal lender verification and agreement signing, funds are directly disbursed to your bank account.' }
    ],
    faqs: [
      {
        question: 'Can I apply for a personal loan if I am self-employed in Ahmedabad?',
        answer: 'Yes. Self-employed professionals, traders, and small business owners in Vastral and greater Ahmedabad can apply with their ITR and business banking records.'
      },
      {
        question: 'Is collateral needed for a personal loan?',
        answer: 'No. Personal loans are generally unsecured loans, so no property, gold, or asset hypothecation is required.'
      },
      {
        question: 'What is the standard processing time?',
        answer: 'Processing typically takes between 24 to 72 working hours once complete documentation is submitted to the chosen lender.'
      }
    ],
    seoTitle: 'Personal Loan in Ahmedabad & Vastral | Low Interest & Easy Documentation',
    seoDescription: 'Apply for personal loans in Vastral, Ahmedabad. Compare loan options up to ₹40 Lakhs with flexible tenures. Contact Vastral Loan & Finance at 9979232182.'
  },
  {
    id: 'home-loan',
    slug: 'home-loan',
    name: 'Home Loan',
    group: 'home-property',
    iconName: 'Home',
    tag: 'Long Tenure • Property Purchase',
    shortDesc: 'Affordable financing solutions for purchasing new ready-to-move flats, under-construction apartments, bungalows, or resale properties.',
    typicalUse: 'Purchasing a new residential apartment, independent house, row house, or resale property across Ahmedabad and Gujarat.',
    possibleAmount: '₹5,00,000 to ₹5,00,00,000+ (Up to 75% - 90% of property market valuation)',
    possibleTenure: 'Up to 30 Years (360 Months)',
    indicativeRateNote: 'Rates vary by lender and applicant profile. Linked to RBI repo-rate benchmarks (EBLR/RLLR).',
    eligibilityOverview: [
      'Age: 21 to 65 years at loan maturity',
      'Salaried individuals with steady job or Self-Employed / Business owners with 2+ years financials',
      'Minimum family/applicant monthly income: ₹25,000+',
      'Clean property title with clear legal & technical approvals',
      'Good credit profile (750+ score generally offers the most competitive spreads)'
    ],
    documentsRequired: [
      'KYC (PAN Card, Aadhaar Card, Passport/Voter ID)',
      'Income Proof: 3 months salary slips + Form 16 (Salaried) OR 3 years ITR with computation (Self-employed)',
      'Last 6 to 12 months comprehensive bank account statements',
      'Property Documents: Allotment Letter / Sale Agreement / Title Deeds / Chain documents / Sanctioned Map',
      'Proof of own contribution / down payment receipts'
    ],
    features: [
      'Attractive long repayment tenures up to 30 years for lower monthly EMIs',
      'Pradhan Mantri Awas Yojana (PMAY) / government subsidy advisory where eligible',
      'Balance transfer & top-up loan options on existing home loans',
      'Step-up and flexible EMI repayment structures from partner lenders',
      'Expert assistance with legal and technical property documentation'
    ],
    benefits: [
      'Tax deductions under Section 80C (Principal) and Section 24(b) (Interest) under prevailing Indian tax laws',
      'Turn your dream of owning a home in Vastral, Nikol, Odhav, or Ahmedabad into reality',
      'Build long-term equity and capital appreciation in prime real estate',
      'Joint applicant facility (spouse, parents, children) to boost overall eligibility'
    ],
    applicationProcess: [
      { step: 1, title: 'Eligibility Consultation', description: 'Consult with our Vastral team to determine budget and borrowing capacity.' },
      { step: 2, title: 'Document Submission', description: 'Collect KYC, income proofs, and initial property paperwork.' },
      { step: 3, title: 'Legal & Technical Appraisal', description: 'Lender evaluates property title, legal clearance, and fair market value.' },
      { step: 4, title: 'Sanction Letter & Disbursal', description: 'Sign agreement, execute mortgage registration, and receive stage-wise or full disbursal.' }
    ],
    faqs: [
      {
        question: 'Can I add a co-applicant to increase my home loan eligibility?',
        answer: 'Yes, adding an earning co-applicant (such as your spouse, father, mother, or son) combines family income and significantly enhances loan eligibility.'
      },
      {
        question: 'What percentage of the property value can I get as a home loan?',
        answer: 'Lenders typically finance between 75% and 90% of the registered property cost, depending on loan ticket size and RBI guidelines.'
      }
    ],
    seoTitle: 'Home Loan in Ahmedabad & Vastral | Competitive Rates & Long Tenures',
    seoDescription: 'Get expert guidance on home loans in Vastral, Ahmedabad. Compare top banks and housing finance companies. Call Vastral Loan & Finance at 9979232182.'
  },
  {
    id: 'home-construction-loan',
    slug: 'home-construction-loan',
    name: 'Home Construction Loan',
    group: 'home-property',
    iconName: 'Hammer',
    tag: 'Stage-Wise Disbursals • Custom Builds',
    shortDesc: 'Specialized loan assistance for constructing your independent home or villa on an owned residential plot or land.',
    typicalUse: 'Building a residential structure on owned freehold plot, NA plot, or sanctioned land parcel.',
    possibleAmount: '₹5,00,000 to ₹2,50,00,000 (Based on civil architect estimates and land value)',
    possibleTenure: 'Up to 25 Years (300 Months)',
    indicativeRateNote: 'Rates vary by lender and applicant profile. Linked to home loan interest rate slabs.',
    eligibilityOverview: [
      'Ownership of residential NA (Non-Agricultural) plot with clear title in Ahmedabad/Gujarat',
      'Approved municipal / AUDA construction map and structural plan',
      'Valid cost estimate certified by a registered Civil Engineer / Architect',
      'Steady income for salaried or self-employed individuals'
    ],
    documentsRequired: [
      'Standard KYC documents (PAN, Aadhaar, Photo)',
      'Income proof: 3-6 months bank statements + Salary slips / ITRs',
      'Plot purchase deed, 7/12 extract, Index-II, and revenue records',
      'AUDA / Municipal approved building plan & construction layout',
      'Detailed itemized cost estimate from certified Architect'
    ],
    features: [
      'Disbursal in tranches aligned with actual civil construction stages (plinth, slab, finishing)',
      'Pre-EMI option during construction period (pay only interest on disbursed amount)',
      'Long repayment tenures up to 25-30 years once construction is complete',
      'Guidance on AUDA and local authority documentation in Ahmedabad'
    ],
    benefits: [
      'Custom design your dream bungalow or floor without liquidating emergency investments',
      'Interest payment flexibility during the building phase',
      'Tax benefits similar to standard home loans upon possession/completion'
    ],
    applicationProcess: [
      { step: 1, title: 'Plan & Estimate Review', description: 'Review your architect drawing, plot title, and cost estimate.' },
      { step: 2, title: 'Lender Processing', description: 'Application processed through specialized housing finance institutions.' },
      { step: 3, title: 'Technical Inspection', description: 'Lender engineer verifies plot location and approved construction plan.' },
      { step: 4, title: 'Stage-Wise Fund Release', description: 'Funds released directly as foundation, structural slabs, and brickwork progress.' }
    ],
    faqs: [
      {
        question: 'Do I get the entire loan amount upfront?',
        answer: 'No. Home construction loans are disbursed in stages based on physical site progress verified by the lender engineer.'
      }
    ],
    seoTitle: 'Home Construction Loan in Ahmedabad | Vastral Loan & Finance',
    seoDescription: 'Construct your dream house in Ahmedabad or Vastral. Stage-wise construction loan assistance. Call 9979232182.'
  },
  {
    id: 'home-renovation-loan',
    slug: 'home-renovation-loan',
    name: 'Home Renovation Loan',
    group: 'home-property',
    iconName: 'Paintbrush',
    tag: 'Interior & Repairs • Lower Rates Than Personal',
    shortDesc: 'Funding for upgrading, remodeling, repainting, waterproofing, flooring, or furnishing your existing home.',
    typicalUse: 'Kitchen remodeling, bathroom upgrades, modular furniture, electrical rewiring, terrace waterproofing, structural extensions.',
    possibleAmount: '₹1,00,000 to ₹35,00,000',
    possibleTenure: 'Up to 15 Years',
    indicativeRateNote: 'Rates vary by lender and applicant profile. Often lower than standard unsecured personal loans.',
    eligibilityOverview: [
      'Applicant must own or co-own the residential property being renovated',
      'Salaried with regular income or Self-Employed with business vintage',
      'Quotation or renovation estimate from contractor/interior designer'
    ],
    documentsRequired: [
      'KYC (PAN, Aadhaar)',
      'Property ownership documents (Electricity bill, Index-II, Property tax receipt)',
      'Estimated renovation quotation / contractor budget',
      'Last 6 months banking statements & income proof'
    ],
    features: [
      'Much lower interest rates compared to personal loans when secured against home equity',
      'Flexible tenures up to 10-15 years for comfortable EMIs',
      'Covers civil repairs, modular kitchens, plumbing, flooring, and aesthetic fixtures'
    ],
    benefits: [
      'Enhance property market valuation and living comfort',
      'Avoid high-interest credit card debt for interior furnishings'
    ],
    applicationProcess: [
      { step: 1, title: 'Enquire with Quotation', description: 'Provide rough budget for interior/renovation work.' },
      { step: 2, title: 'Document & Property Check', description: 'Verify existing property papers and income eligibility.' },
      { step: 3, title: 'Sanction & Transfer', description: 'Receive quick sanction and transfer to fund renovation work.' }
    ],
    faqs: [
      {
        question: 'Can I take a renovation loan if I already have an active home loan?',
        answer: 'Yes. Many lenders offer home renovation top-ups on existing active home loan accounts with minimal additional paperwork.'
      }
    ],
    seoTitle: 'Home Renovation Loan Ahmedabad | Vastral Loan & Finance',
    seoDescription: 'Remodel and upgrade your house in Ahmedabad. Low EMI home renovation loans. Call 9979232182.'
  },
  {
    id: 'loan-against-property',
    slug: 'loan-against-property',
    name: 'Loan Against Property (LAP)',
    group: 'home-property',
    iconName: 'Building2',
    tag: 'High Value • Commercial / Residential Collateral',
    shortDesc: 'Unlock the high equity locked in your residential, commercial, or industrial property for major business or personal capital.',
    typicalUse: 'Business expansion, working capital infusion, child higher studies abroad, high-cost medical treatments, or debt restructuring.',
    possibleAmount: '₹10,00,000 to ₹10,00,00,000+ (Up to 50% - 70% of market value)',
    possibleTenure: 'Up to 15 to 20 Years',
    indicativeRateNote: 'Rates vary by lender and applicant profile. Significantly lower interest rates than unsecured business or personal loans.',
    eligibilityOverview: [
      'Clear, marketable title for residential property, commercial office/shop, or industrial shed in Ahmedabad/Gujarat',
      'All co-owners of property must join as co-applicants',
      'Stable income stream (Business financials, rent receipts, or salary) to service long-term EMIs'
    ],
    documentsRequired: [
      'Complete Property chain documents, approved map, possession letter, latest tax paid receipt',
      'KYC of all property owners',
      'Last 3 years audited financial statements / ITR with Computation (Business) or 6 months salary (Salaried)',
      'Last 12 months comprehensive bank statements'
    ],
    features: [
      'Substantial loan quantum at much lower interest rates than unsecured debt',
      'Extended repayment tenures up to 15-20 years for manageable monthly cash outflow',
      'You retain full usage and possession of your residential or commercial premise'
    ],
    benefits: [
      'Optimal tool for large-scale enterprise growth and capital asset creation',
      'Overdraft (OD) against property option also available through select lenders',
      'Accepted property types: Freehold residential, commercial shops, offices, and select industrial units'
    ],
    applicationProcess: [
      { step: 1, title: 'Property & Income Evaluation', description: 'Review property location in Ahmedabad and financial capability.' },
      { step: 2, title: 'Title Search & Valuation', description: 'Lender legal team conducts 30-year title search and physical valuation.' },
      { step: 3, title: 'Sanction & Mortgage Registration', description: 'Execution of equitable mortgage at the sub-registrar office.' },
      { step: 4, title: 'Disbursal', description: 'High-value funds credited directly into your enterprise/savings account.' }
    ],
    faqs: [
      {
        question: 'Can commercial properties in Ahmedabad be mortgaged for LAP?',
        answer: 'Yes, commercial offices, retail shops, showrooms, and warehouse properties with clear legal titles are eligible.'
      }
    ],
    seoTitle: 'Loan Against Property in Ahmedabad | Mortgage Loan Vastral',
    seoDescription: 'Get high-value Loan Against Property in Ahmedabad. Low rates, long tenure. Contact Vastral Loan & Finance at 9979232182.'
  },
  {
    id: 'business-loan',
    slug: 'business-loan',
    name: 'Business Loan',
    group: 'business-msme',
    iconName: 'Briefcase',
    tag: 'Collateral-Free • Trade & Enterprise Growth',
    shortDesc: 'Unsecured and secured capital solutions tailored for traders, manufacturers, retailers, and service enterprises across Ahmedabad.',
    typicalUse: 'Inventory stocking, business scaling, new branch opening, marketing, staffing, and managing seasonal business spikes.',
    possibleAmount: '₹1,00,000 to ₹75,00,000 (Unsecured) / Higher for secured',
    possibleTenure: '12 Months to 60 Months (1 to 5 Years)',
    indicativeRateNote: 'Rates vary by lender and applicant profile. Dependent on business turnover, profit margins, and vintage.',
    eligibilityOverview: [
      'Business vintage: Minimum 2 to 3 years of operational track record',
      'Minimum Annual Turnover: ₹20 Lakhs+ with active GST returns',
      'Business Entity: Sole Proprietorship, Partnership Firm, LLP, or Pvt Ltd Company',
      'Applicant age: 23 to 65 years with good CIBIL & Commercial credit score'
    ],
    documentsRequired: [
      'KYC of Proprietor / Partners / Directors',
      'Business Registration: GST Certificate, Udyam Aadhaar, Gumastadhara / Trade License',
      'Last 12 months GST returns (GSTR-3B & GSTR-1)',
      'Last 12 months operative Current Account bank statements',
      'Last 2 years ITR with Balance Sheet, Profit & Loss A/c (CA certified if applicable)'
    ],
    features: [
      'Collateral-free options available for quick capital mobilization',
      'Customized funding for Ahmedabad trading hubs (Vastral, Odhav, Naroda, Changodar, etc.)',
      'Flexible drop-line and EMI repayment structures from top private/PSU lenders',
      'Assistance with preparing compliant documentation and banking reconciliations'
    ],
    benefits: [
      'Seize bulk purchase discounts and seasonal business opportunities',
      'No loss of company equity or personal asset hypothecation',
      'Interest paid on business loans is a fully deductible business expense'
    ],
    applicationProcess: [
      { step: 1, title: 'Share Business Profile', description: 'Submit GST number, turnover details, and funding requirement.' },
      { step: 2, title: 'Financial Assessment', description: 'Analyze bank statements and GST filings to maximize eligible limits.' },
      { step: 3, title: 'Multiple Lender Options', description: 'Present comparative offers from leading NBFCs and Banks.' },
      { step: 4, title: 'Swift Disbursal', description: 'Complete digital or physical agreement and receive capital.' }
    ],
    faqs: [
      {
        question: 'Do I need collateral for an unsecured business loan in Ahmedabad?',
        answer: 'No, unsecured business loans up to ₹50-75 Lakhs do not require property or security collateral.'
      }
    ],
    seoTitle: 'Business Loan in Ahmedabad | Unsecured Business Finance Vastral',
    seoDescription: 'Fast unsecured business loans for traders and manufacturers in Vastral, Ahmedabad. Call 9979232182 for business loan enquiry.'
  },
  {
    id: 'msme-loan',
    slug: 'msme-loan',
    name: 'MSME Loan',
    group: 'business-msme',
    iconName: 'Factory',
    tag: 'Govt. Schemes Support • Micro & Small Units',
    shortDesc: 'Dedicated financial assistance for Micro, Small, and Medium Enterprises with CGTMSE and subsidy scheme assistance.',
    typicalUse: 'Procuring raw materials, setting up production lines, technology upgrades, and industrial expansion in Gujarat.',
    possibleAmount: '₹5,00,000 to ₹5,00,00,000',
    possibleTenure: 'Up to 7 to 10 Years',
    indicativeRateNote: 'Rates vary by lender and applicant profile. Concessional rate structures under specialized MSME lending schemes.',
    eligibilityOverview: [
      'Valid Udyam / MSME Registration certificate',
      'Operating in manufacturing, processing, or eligible service sectors',
      'Viable project report or profitable ongoing balance sheet'
    ],
    documentsRequired: [
      'Udyam Registration Certificate & Factory license',
      'PAN of entity & KYC of promoters',
      '3 Years ITR, Audit Report, Balance Sheet & P&L',
      '12 Months Current Account statements & GST returns',
      'Project report / quotation for new machinery or expansion (if applicable)'
    ],
    features: [
      'Assistance under Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE)',
      'Subsidized processing fees and priority sector lending benefits from leading banks',
      'Guidance for Gujarat state industrial subsidy programs'
    ],
    benefits: [
      'Foster local industrial growth in industrial clusters across Ahmedabad',
      'Long repayment tenures for capital machinery investments',
      'Strengthen enterprise creditworthiness with national banking systems'
    ],
    applicationProcess: [
      { step: 1, title: 'Udyam Verification', description: 'Check MSME classification and applicable scheme guidelines.' },
      { step: 2, title: 'Project & Statement Review', description: 'Package enterprise financials for priority sector review.' },
      { step: 3, title: 'Sanction from MSME Desks', description: 'Coordinate with dedicated MSME bank cells for competitive terms.' }
    ],
    faqs: [
      {
        question: 'What is CGTMSE coverage?',
        answer: 'CGTMSE is a government credit guarantee scheme that allows eligible micro and small businesses to obtain collateral-free loans from participating banks.'
      }
    ],
    seoTitle: 'MSME Loan in Ahmedabad | Udyam Business Finance Gujarat',
    seoDescription: 'MSME and small enterprise loans in Ahmedabad. CGTMSE scheme assistance and industrial loans. Contact Vastral Loan & Finance 9979232182.'
  },
  {
    id: 'startup-loan',
    slug: 'startup-loan',
    name: 'Startup Loan',
    group: 'business-msme',
    iconName: 'Rocket',
    tag: 'Early Stage • Innovation & Growth',
    shortDesc: 'Financial pathways for early-stage ventures, tech initiatives, and emerging commercial projects with solid business plans.',
    typicalUse: 'Product development, initial marketing, office setup, MVP testing, and working cash for new enterprises.',
    possibleAmount: '₹2,00,000 to ₹50,00,000 (Subject to promoter credentials & scheme criteria)',
    possibleTenure: '1 to 5 Years',
    indicativeRateNote: 'Rates vary by lender and applicant profile.',
    eligibilityOverview: [
      'DPIIT recognized startups or incorporated entities with innovative models',
      'Promoters with relevant industry experience and strong personal credit',
      'Clear business plan with projected cashflows and unit economics'
    ],
    documentsRequired: [
      'Incorporation Certificate (COI), MOA/AOA or Partnership deed',
      'Promoters KYC and personal net worth statements',
      'Comprehensive Project Report & financial projections',
      'Bank statement of company and promoters'
    ],
    features: [
      'Assistance with Stand-Up India and startup credit guarantee programs',
      'Mentorship-friendly structuring for scalable business models',
      'Guidance from local financial advisors in Ahmedabad'
    ],
    benefits: [
      'Kickstart operations without excessive equity dilution at seed stage',
      'Access banking relationships early in the corporate lifecycle'
    ],
    applicationProcess: [
      { step: 1, title: 'Pitch & Plan Review', description: 'Evaluate business plan feasibility and financing avenues.' },
      { step: 2, title: 'Structure Proposal', description: 'Align with startup banking units or early-stage commercial lenders.' }
    ],
    faqs: [
      {
        question: 'Can new startups get loans without collateral?',
        answer: 'Startups can apply under specific government-backed guarantee schemes or through NBFCs evaluating promoter experience and business models.'
      }
    ],
    seoTitle: 'Startup Business Loan in Ahmedabad | Vastral Loan & Finance',
    seoDescription: 'Funding and loan assistance for startups and new enterprises in Ahmedabad. Call 9979232182.'
  },
  {
    id: 'working-capital-loan',
    slug: 'working-capital-loan',
    name: 'Working Capital Loan',
    group: 'business-msme',
    iconName: 'RefreshCw',
    tag: 'Liquidity • Inventory & Receivables',
    shortDesc: 'Cash credit (CC), inventory funding, and bill discounting to ensure continuous smooth daily business operations.',
    typicalUse: 'Bridging the cash gap between supplier payments and customer receivables, handling seasonal bulk orders.',
    possibleAmount: '₹5,00,000 to ₹10,00,00,000',
    possibleTenure: '12 Months (Renewable annually based on conduct)',
    indicativeRateNote: 'Rates vary by lender and applicant profile. Pay interest only on the utilized amount.',
    eligibilityOverview: [
      'Active business entity with minimum 2 years ongoing operations',
      'Regular stock maintenance and credit sales to creditworthy buyers',
      'Healthy banking throughput and acceptable financial ratios'
    ],
    documentsRequired: [
      'Business KYC & Entity registration',
      'Last 3 years audited financials with stock audit details',
      'Monthly stock & book debt statements',
      'Last 12 months Current account bank statements & GST records'
    ],
    features: [
      'Revolving credit facility: draw funds when needed, deposit sales receipts to save interest',
      'Pay interest strictly on daily utilized balance, not the overall sanctioned limit',
      'Annual review and limit enhancement for growing businesses'
    ],
    benefits: [
      'Never miss supply chain discounts or delay salary payouts',
      'Optimizes working capital cycle and cashflow stability'
    ],
    applicationProcess: [
      { step: 1, title: 'Operating Cycle Study', description: 'Analyze working capital requirement (holding period of stock + debtor days).' },
      { step: 2, title: 'Bank Facility Structuring', description: 'Structure Cash Credit (CC) or Working Capital Demand Loan (WCDL).' }
    ],
    faqs: [
      {
        question: 'What is the difference between Cash Credit (CC) and a Term Loan?',
        answer: 'In Cash Credit, you only pay interest on the money you actually withdraw from the limit, whereas in a Term Loan, interest applies to the entire disbursed amount with fixed monthly EMIs.'
      }
    ],
    seoTitle: 'Working Capital Loan & CC Limit Ahmedabad | Vastral Loan & Finance',
    seoDescription: 'Working capital, Cash Credit limits, and inventory financing for businesses in Ahmedabad. Call 9979232182.'
  },
  {
    id: 'education-loan',
    slug: 'education-loan',
    name: 'Education Loan',
    group: 'personal-family',
    iconName: 'GraduationCap',
    tag: 'Higher Studies • Domestic & International',
    shortDesc: 'Funding for undergraduate, postgraduate, engineering, medical, and management courses in India and abroad.',
    typicalUse: 'University tuition fees, hostel accommodation, travel tickets, books, laptop, and living expenses.',
    possibleAmount: '₹2,00,000 to ₹1,50,00,000 (Based on country, university tier, and co-borrower)',
    possibleTenure: 'Up to 15 Years (Post course moratorium period)',
    indicativeRateNote: 'Rates vary by lender and applicant profile. Concessional rates for premier tier-1 colleges and female students.',
    eligibilityOverview: [
      'Secured admission in recognized university/institute in India or overseas (USA, UK, Canada, Australia, Germany, etc.)',
      'Parent, guardian, or spouse as co-applicant/guarantor',
      'Consistent academic track record in 10th, 12th, and graduation'
    ],
    documentsRequired: [
      'Student KYC (PAN, Aadhaar, Passport)',
      'Admission Confirmation Letter / I-20 / Offer Letter with fee structure',
      'Mark sheets of 10th, 12th, Degree, entrance test scorecards (GRE/GMAT/IELTS/TOEFL/CAT)',
      'Co-applicant KYC, last 6 months bank statement, and 2-3 years ITR / Salary slips'
    ],
    features: [
      'Course period + 6 to 12 months moratorium (grace period) before regular EMI commences',
      'Covers 100% of education expenses including living costs for top overseas universities',
      'Tax deduction on interest paid without upper limit under Section 80E for up to 8 years'
    ],
    benefits: [
      'Empower students to fulfill dreams at top global institutions without selling family assets',
      'Builds student independent credit score from the beginning of their professional career'
    ],
    applicationProcess: [
      { step: 1, title: 'Admit Letter & Fee Review', description: 'Submit target college admit letter and country fee requirements.' },
      { step: 2, title: 'Co-applicant Verification', description: 'Verify parent/guarantor income and property security if applicable.' },
      { step: 3, title: 'Sanction Letter for Visa', description: 'Obtain provisional sanction letter for international student visa processing.' }
    ],
    faqs: [
      {
        question: 'Is collateral compulsory for foreign education loans?',
        answer: 'Unsecured education loans are available up to ₹40-50 Lakhs for premier universities. Higher amounts or non-STEM courses generally require collateral security.'
      }
    ],
    seoTitle: 'Education Loan in Ahmedabad for Abroad & India Studies | Vastral',
    seoDescription: 'Education loan assistance for USA, UK, Canada, and India courses. Low interest, moratorium period. Call 9979232182.'
  },
  {
    id: 'student-loan',
    slug: 'student-loan',
    name: 'Student Loan',
    group: 'personal-family',
    iconName: 'BookOpen',
    tag: 'Skill Courses • Coaching & Certifications',
    shortDesc: 'Micro and medium-ticket financial assistance for vocational diplomas, competitive exam coaching, coding bootcamps, and professional certifications.',
    typicalUse: 'Coaching fees for UPSC/GPSC, CA, NEET, JEE, Data Science certifications, pilot training, and professional executive courses.',
    possibleAmount: '₹25,000 to ₹10,00,000',
    possibleTenure: '6 Months to 48 Months',
    indicativeRateNote: 'Rates vary by lender and applicant profile.',
    eligibilityOverview: [
      'Enrolled in recognized skill institute, coaching center, or technical academy',
      'Working student or earning family co-signer',
      'Basic KYC documents'
    ],
    documentsRequired: [
      'Student KYC & ID Card',
      'Co-borrower income documents (salary slips / ITR / bank statement)',
      'Course brochure and fee invoice'
    ],
    features: [
      'Fast digital processing with quick disbursal to training institutes',
      'Affordable monthly installment plans'
    ],
    benefits: [
      'Invest in career upskilling without financial strain',
      'Enhance employability and career advancement'
    ],
    applicationProcess: [
      { step: 1, title: 'Enquire for Course', description: 'Share course details and institute fee structure.' },
      { step: 2, title: 'Fast Approval', description: 'Quick verification and flexible installment setup.' }
    ],
    faqs: [
      {
        question: 'Can I pay the coaching institute fees directly through the loan?',
        answer: 'Yes, loan disbursals can be routed directly to the educational/training institute.'
      }
    ],
    seoTitle: 'Student Loan in Ahmedabad | Skill & Coaching Course Finance',
    seoDescription: 'Student loans for competitive exams, skill courses, and professional degrees in Ahmedabad. Call Vastral Loan & Finance 9979232182.'
  },
  {
    id: 'car-loan',
    slug: 'car-loan',
    name: 'Car Loan',
    group: 'vehicle',
    iconName: 'Car',
    tag: 'New & Used Cars • Up to 100% On-Road',
    shortDesc: 'Financing for purchasing your brand-new dream hatchback, sedan, SUV, electric vehicle (EV), or quality pre-owned car.',
    typicalUse: 'New passenger car purchase, EV vehicle financing, certified used/pre-owned car purchase across Ahmedabad dealerships.',
    possibleAmount: '₹1,00,000 to ₹1,00,00,000+ (Up to 90%-100% of ex-showroom/on-road cost)',
    possibleTenure: 'Up to 7 to 8 Years (84 to 96 Months)',
    indicativeRateNote: 'Rates vary by lender and applicant profile. Special concessional rates for Electric Vehicles (EV).',
    eligibilityOverview: [
      'Salaried individuals with minimum 1-year service or Self-Employed with 2-year business history',
      'Minimum monthly income: ₹20,000+',
      'Age: 21 to 65 years'
    ],
    documentsRequired: [
      'KYC (PAN Card, Aadhaar Card, Driving License/Passport)',
      'Income proof (3 months salary slips or 2 years ITR)',
      'Last 6 months bank statement',
      'Vehicle Proforma Invoice / Quotation from authorized automobile dealer'
    ],
    features: [
      'Up to 100% on-road financing available on select models for strong profiles',
      'Pre-approved car loan options for fast dealership delivery',
      'Flexible tenures up to 7 years for pocket-friendly monthly EMIs'
    ],
    benefits: [
      'Drive home your favorite car with minimal initial out-of-pocket payment',
      'Vehicle acts as primary collateral (hypothecation), keeping personal assets safe'
    ],
    applicationProcess: [
      { step: 1, title: 'Select Vehicle & Get Quotation', description: 'Choose your car from any Ahmedabad showroom and obtain the proforma.' },
      { step: 2, title: 'Apply & Verify', description: 'Submit income details for instant lender matching and approval.' },
      { step: 3, title: 'Delivery Order (DO)', description: 'Lender issues Delivery Order to showroom, allowing immediate vehicle handover.' }
    ],
    faqs: [
      {
        question: 'Can I get a loan for a used or second-hand car in Ahmedabad?',
        answer: 'Yes, we assist with loans for certified used cars up to 8-10 years of vehicle age with valuations up to 80-85% of market value.'
      }
    ],
    seoTitle: 'Car Loan in Ahmedabad & Vastral | New & Used Car Finance',
    seoDescription: 'Low interest car loans in Vastral, Ahmedabad. Up to 100% financing on new & used cars. Contact Vastral Loan & Finance at 9979232182.'
  },
  {
    id: 'two-wheeler-loan',
    slug: 'two-wheeler-loan',
    name: 'Two-Wheeler Loan',
    group: 'vehicle',
    iconName: 'Bike',
    tag: 'Bikes & Scooters • Quick Approval',
    shortDesc: 'Hassle-free finance for buying new motorbikes, commuter scooters, high-end superbikes, and electric two-wheelers.',
    typicalUse: 'Purchasing daily commute scooters (Activa, Jupiter, etc.), electric scooters (Ola, Ather), or performance motorcycles.',
    possibleAmount: '₹20,000 to ₹3,00,000+ (Up to 95% - 100% on-road price)',
    possibleTenure: '12 Months to 48 Months',
    indicativeRateNote: 'Rates vary by lender and applicant profile.',
    eligibilityOverview: [
      'Age: 18 to 65 years',
      'Salaried, self-employed, or daily wage earners with valid KYC',
      'Resident of Ahmedabad / Gujarat'
    ],
    documentsRequired: [
      'Aadhaar Card, PAN Card',
      'Current Address Proof',
      'Last 3 months bank statement / UPI transaction history',
      'Dealer quotation'
    ],
    features: [
      'Instant in-principle approval with minimal paperwork',
      'Low down-payment schemes from partner financial institutions',
      'Special green loan concessions for electric 2-wheelers'
    ],
    benefits: [
      'Convenient daily commute without straining immediate savings'
    ],
    applicationProcess: [
      { step: 1, title: 'Dealer Proforma', description: 'Select your two-wheeler model in Vastral/Ahmedabad.' },
      { step: 2, title: 'Digital Approval', description: 'Submit Aadhaar and bank details for swift clearance.' }
    ],
    faqs: [
      {
        question: 'Can I apply for an electric scooter loan?',
        answer: 'Yes, all major electric scooter brands are eligible with competitive green vehicle financing options.'
      }
    ],
    seoTitle: 'Two Wheeler Loan in Ahmedabad | Bike & Scooter Finance Vastral',
    seoDescription: 'Easy two-wheeler and bike loans in Vastral, Ahmedabad. Quick approval, low down payment. Call 9979232182.'
  },
  {
    id: 'commercial-vehicle-loan',
    slug: 'commercial-vehicle-loan',
    name: 'Commercial Vehicle Loan',
    group: 'vehicle',
    iconName: 'Truck',
    tag: 'Fleet & Logistics • Trucks, Buses & Pickups',
    shortDesc: 'Funding for transport operators, fleet owners, and logistics businesses to purchase light, medium, and heavy commercial vehicles.',
    typicalUse: 'Buying mini-trucks (Tata Ace, Bolero Maxi), multi-axle heavy trucks, tippers, passenger buses, staff cabs, or refrigerated vans.',
    possibleAmount: '₹2,00,000 to ₹1,50,00,000+',
    possibleTenure: 'Up to 5 to 6 Years',
    indicativeRateNote: 'Rates vary by lender and applicant profile.',
    eligibilityOverview: [
      'Fleet owners, transport contractors, captive users, or first-time buyers with commercial driving license',
      'Existing vehicle fleet track record or proven logistics contracts'
    ],
    documentsRequired: [
      'KYC of applicant/firm',
      'Commercial driving license (for first-time buyers) or Fleet RC copies',
      'Bank statements and transport freight receipts',
      'Vehicle chassis quotation'
    ],
    features: [
      'Funding for chassis + body building fabrication costs',
      'Fleet renewal and used commercial vehicle refinancing options',
      'Tailored EMI models aligned with transport freight payment cycles'
    ],
    benefits: [
      'Expand your transport business and capture high-demand freight corridors across Gujarat'
    ],
    applicationProcess: [
      { step: 1, title: 'Vehicle & Route Plan', description: 'Specify vehicle type and commercial utility profile.' },
      { step: 2, title: 'Commercial Desk Review', description: 'Fast processing via specialized commercial vehicle lenders.' }
    ],
    faqs: [
      {
        question: 'Can first-time commercial drivers apply?',
        answer: 'Yes, special First-Time Buyer (FTB) schemes are available for licensed commercial drivers with guarantor support.'
      }
    ],
    seoTitle: 'Commercial Vehicle Loan in Ahmedabad | Truck & Fleet Finance',
    seoDescription: 'Commercial vehicle and truck loans in Vastral, Ahmedabad. Easy finance for transport operators. Call 9979232182.'
  },
  {
    id: 'gold-loan',
    slug: 'gold-loan',
    name: 'Gold Loan',
    group: 'specialized-agri',
    iconName: 'Coins',
    tag: 'Instant Cash • Gold Jewelry Collateral',
    shortDesc: 'Instant liquidity by pledging your gold jewelry, ornaments, or hallmarked coins with maximum per-gram valuation.',
    typicalUse: 'Immediate cash requirements, emergency medical bills, business liquidity, agricultural inputs, or urgent payments.',
    possibleAmount: '₹10,000 to ₹50,00,000 (Up to 75% of net gold market value as per RBI mandate)',
    possibleTenure: '3 Months to 24 Months',
    indicativeRateNote: 'Rates vary by lender and applicant profile. Highly competitive interest rates due to physical gold collateral.',
    eligibilityOverview: [
      'Any adult individual (18+ years) owning gold jewelry of 18K to 24K purity',
      'No formal income proof or high CIBIL score required',
      'Immediate valuation conducted safely'
    ],
    documentsRequired: [
      'Identity Proof (Aadhaar Card / PAN / Voter ID)',
      'Recent Passport-size Photograph',
      'Gold jewelry for physical appraisal'
    ],
    features: [
      'Fast disbursal—often within 30 to 60 minutes of gold evaluation',
      'No income proof, ITR, or high credit score mandatory',
      'Flexible repayment schemes: monthly interest only (bullet repayment), quarterly, or standard EMI',
      'Gold safely stored in insured high-security bank vaults'
    ],
    benefits: [
      'Lowest documentation threshold among all secured financing options',
      'Full safety and insurance of your family ornaments with trusted institutional partners'
    ],
    applicationProcess: [
      { step: 1, title: 'Bring Gold & KYC', description: 'Visit partner branch or connect with our Vastral desk.' },
      { step: 2, title: 'Purity Testing & Valuation', description: 'Scientific weighing and carat testing without damage.' },
      { step: 3, title: 'Instant Fund Transfer', description: 'Immediate cash or direct NEFT/IMPS transfer to your account.' }
    ],
    faqs: [
      {
        question: 'Is my gold safe with the lender?',
        answer: 'Yes, institutional lenders store pledged gold in high-grade tamper-proof vaults backed by comprehensive insurance coverage.'
      }
    ],
    seoTitle: 'Gold Loan in Ahmedabad & Vastral | Instant Cash Against Gold',
    seoDescription: 'Instant gold loans in Vastral, Ahmedabad. Maximum value per gram, safe vault storage, lowest paperwork. Call 9979232182.'
  },
  {
    id: 'medical-loan',
    slug: 'medical-loan',
    name: 'Medical Loan',
    group: 'personal-family',
    iconName: 'HeartPulse',
    tag: 'Emergency Healthcare • Direct Disbursal',
    shortDesc: 'Urgent financial support for planned or emergency surgeries, hospital treatments, critical illnesses, and medical equipment.',
    typicalUse: 'Hospital admissions, cardiac/orthopedic surgery, cancer treatments, IVF, dental procedures, and post-operative recovery.',
    possibleAmount: '₹30,000 to ₹25,00,000',
    possibleTenure: '6 Months to 48 Months',
    indicativeRateNote: 'Rates vary by lender and applicant profile. Priority emergency processing.',
    eligibilityOverview: [
      'Patient or family member with salaried/business income',
      'Hospital estimate or doctor prescription'
    ],
    documentsRequired: [
      'KYC (PAN, Aadhaar)',
      'Hospital estimate / diagnostic report',
      'Bank statement or salary proof'
    ],
    features: [
      'Priority express processing for urgent healthcare needs',
      'Direct payment facility to hospital billing desk if required'
    ],
    benefits: [
      'Ensure top-notch medical care for loved ones without delays or distress'
    ],
    applicationProcess: [
      { step: 1, title: 'Submit Medical Estimate', description: 'Contact 9979232182 with hospital billing details.' },
      { step: 2, title: 'Urgent Processing', description: 'Expedited verification and rapid loan disbursement.' }
    ],
    faqs: [
      {
        question: 'How quickly can a medical loan be disbursed in Ahmedabad?',
        answer: 'Medical loan applications receive high priority and can be processed within 12 to 24 hours upon receiving basic KYC and hospital estimates.'
      }
    ],
    seoTitle: 'Medical Loan in Ahmedabad | Urgent Healthcare Emergency Finance',
    seoDescription: 'Emergency medical and hospital treatment loans in Ahmedabad. Fast processing, easy EMIs. Contact 9979232182.'
  },
  {
    id: 'wedding-loan',
    slug: 'wedding-loan',
    name: 'Wedding Loan',
    group: 'personal-family',
    iconName: 'Sparkles',
    tag: 'Celebrations & Venues • Flexible EMIs',
    shortDesc: 'Customized financing for dream weddings, catering, bridal jewelry, banquet halls, and destination ceremonies.',
    typicalUse: 'Venue bookings, catering, wedding photography, luxury jewelry, bridal wear, and hospitality arrangements.',
    possibleAmount: '₹1,00,000 to ₹30,00,000',
    possibleTenure: '12 Months to 60 Months',
    indicativeRateNote: 'Rates vary by lender and applicant profile.',
    eligibilityOverview: [
      'Salaried or business individual (bride, groom, or parents)',
      'Regular verifiable monthly income'
    ],
    documentsRequired: [
      'KYC of applicant',
      '3-6 months bank statement and salary slips / ITR',
      'Wedding card or booking estimates (optional)'
    ],
    features: [
      'Zero collateral needed',
      'Disbursed as lumpsum directly to family savings account'
    ],
    benefits: [
      'Celebrate life milestones grandly without liquidating long-term fixed deposits'
    ],
    applicationProcess: [
      { step: 1, title: 'Plan Budget', description: 'Estimate total ceremony requirements.' },
      { step: 2, title: 'Apply with Income Docs', description: 'Fast processing to ensure timely vendor advances.' }
    ],
    faqs: [
      {
        question: 'Can parents apply for a wedding loan on behalf of their children?',
        answer: 'Yes, earning parents or the bride/groom can apply individually or jointly to secure a wedding loan.'
      }
    ],
    seoTitle: 'Wedding Loan in Ahmedabad | Marriage Expense Finance Vastral',
    seoDescription: 'Manage wedding and marriage expenses easily with flexible wedding loans in Ahmedabad. Call Vastral Loan & Finance 9979232182.'
  },
  {
    id: 'travel-loan',
    slug: 'travel-loan',
    name: 'Travel Loan',
    group: 'personal-family',
    iconName: 'Plane',
    tag: 'Holidays & Pilgrimage • Instant Vacation Funds',
    shortDesc: 'Fulfill family vacations, international holidays, honeymoon trips, or religious pilgrimages with easy installments.',
    typicalUse: 'International flight tickets, holiday tour packages, visa expenses, hotel bookings, and foreign exchange.',
    possibleAmount: '₹50,000 to ₹15,00,000',
    possibleTenure: '6 Months to 36 Months',
    indicativeRateNote: 'Rates vary by lender and applicant profile.',
    eligibilityOverview: [
      'Salaried professional or self-employed individual with regular cashflow',
      'Minimum monthly income: ₹20,000+'
    ],
    documentsRequired: [
      'KYC documents',
      'Last 3 months salary slips or ITR',
      'Last 3-6 months bank statement'
    ],
    features: [
      'Fast digital approval before booking your trip',
      'Flexible tenures to spread vacation cost over 1 to 3 years'
    ],
    benefits: [
      'Travel the world with loved ones while preserving liquid savings'
    ],
    applicationProcess: [
      { step: 1, title: 'Estimate Tour Budget', description: 'Calculate flights, stay, and holiday expenses.' },
      { step: 2, title: 'Quick Sanction', description: 'Obtain funds in your account to confirm bookings.' }
    ],
    faqs: [
      {
        question: 'Is travel insurance covered in the loan?',
        answer: 'You can utilize the disbursed funds for all travel-related expenses including bookings, visa fees, and travel insurance.'
      }
    ],
    seoTitle: 'Travel Loan in Ahmedabad | Holiday & Vacation Finance Vastral',
    seoDescription: 'Plan your dream international or domestic holiday with travel loans in Ahmedabad. Call 9979232182.'
  },
  {
    id: 'consumer-durable-loan',
    slug: 'consumer-durable-loan',
    name: 'Consumer Durable Loan',
    group: 'personal-family',
    iconName: 'Tv',
    tag: 'Appliances & Gadgets • Easy No-Cost EMI Options',
    shortDesc: 'Financing for smart TVs, inverter ACs, double-door refrigerators, washing machines, laptops, and mobile phones.',
    typicalUse: 'Upgrading home electronics, air conditioning systems for Ahmedabad summers, work laptops, or modern appliances.',
    possibleAmount: '₹10,000 to ₹5,00,000',
    possibleTenure: '3 Months to 24 Months',
    indicativeRateNote: 'Rates vary by lender and applicant profile. Zero down payment and subvented EMI schemes available at retail tie-ups.',
    eligibilityOverview: [
      'Age 21+ with active bank account and debit card / NACH facility',
      'Basic KYC verification'
    ],
    documentsRequired: [
      'Aadhaar Card, PAN Card',
      'Bank debit card / cancelled cheque for mandate setup'
    ],
    features: [
      'Instant store or digital approvals in minutes',
      'Attractive low interest or subsidized interest tenure plans'
    ],
    benefits: [
      'Equip your home with the latest technology appliances immediately'
    ],
    applicationProcess: [
      { step: 1, title: 'Choose Product', description: 'Identify appliance and model number.' },
      { step: 2, title: 'Instant KYC Mandate', description: 'Complete digital e-mandate and take home product.' }
    ],
    faqs: [
      {
        question: 'Can I get a consumer durable loan without a credit card?',
        answer: 'Yes, consumer durable loans can be approved directly on your savings bank account and debit card.'
      }
    ],
    seoTitle: 'Consumer Durable Loan Ahmedabad | Home Appliance Finance',
    seoDescription: 'Consumer durable and electronics loans in Ahmedabad. Easy EMIs on ACs, TVs, refrigerators. Call 9979232182.'
  },
  {
    id: 'machinery-equipment-loan',
    slug: 'machinery-equipment-loan',
    name: 'Machinery / Equipment Loan',
    group: 'business-msme',
    iconName: 'Cog',
    tag: 'Industrial & Manufacturing • High Productivity',
    shortDesc: 'Asset-backed funding for purchasing CNC machines, packaging systems, textile looms, pharmaceutical equipment, and earthmovers.',
    typicalUse: 'Procuring heavy industrial machinery, plant automation, diagnostic medical equipment, or construction gear.',
    possibleAmount: '₹5,00,000 to ₹10,00,00,000+ (Up to 75% - 85% of machinery invoice)',
    possibleTenure: 'Up to 5 to 7 Years',
    indicativeRateNote: 'Rates vary by lender and applicant profile. Machinery itself serves as primary security.',
    eligibilityOverview: [
      'Manufacturing, engineering, textile, or service enterprise in Gujarat',
      'Minimum 2 years business vintage with commercial bank track record',
      'Proforma invoice from approved machinery manufacturer / vendor'
    ],
    documentsRequired: [
      'Entity Registration (GST, Factory license, Udyam)',
      'Last 3 years audited financials and income tax returns',
      'Proforma invoice / Machinery technical specification quotation',
      'Last 12 months bank statements'
    ],
    features: [
      'Loan hypothecated against the purchased machinery, protecting core land/property assets',
      'Structured repayment schedules matching machine gestation and commissioning periods',
      'Assistance with industrial technology upgrade subsidy schemes'
    ],
    benefits: [
      'Boost manufacturing capacity, output speed, and product quality in Ahmedabad industrial zones'
    ],
    applicationProcess: [
      { step: 1, title: 'Vendor Proforma & Specs', description: 'Submit machine quote and technical capacity details.' },
      { step: 2, title: 'Credit & Technical Appraisal', description: 'Evaluate enterprise cashflow and equipment productivity.' },
      { step: 3, title: 'Direct Vendor Disbursal', description: 'Lender disburses payment directly to machinery manufacturer.' }
    ],
    faqs: [
      {
        question: 'Can imported machinery be financed?',
        answer: 'Yes, imported machinery with valid Letter of Credit (LC) and customs documentation can be financed.'
      }
    ],
    seoTitle: 'Machinery Loan in Ahmedabad | Equipment Finance Gujarat',
    seoDescription: 'Industrial machinery and equipment financing for manufacturers in Ahmedabad and Gujarat. Call 9979232182.'
  },
  {
    id: 'agricultural-farm-loan',
    slug: 'agricultural-farm-loan',
    name: 'Agricultural / Farm Loan',
    group: 'specialized-agri',
    iconName: 'Tractor',
    tag: 'Kisan Credit • Farm Equipment & Crop Finance',
    shortDesc: 'Comprehensive agricultural credit for farmers, dairy operators, drip irrigation, tractor purchases, and rural enterprises.',
    typicalUse: 'Crop cultivation inputs (seeds, fertilizers), tractor and harvester purchases, borewells, solar pumps, dairy shed construction, and land leveling.',
    possibleAmount: '₹50,000 to ₹50,00,000+',
    possibleTenure: '1 Year (Crop loans) to 7 Years (Farm mechanization & tractor loans)',
    indicativeRateNote: 'Rates vary by lender and applicant profile. Subsidized interest rates on Kisan Credit Card (KCC) loans under government schemes.',
    eligibilityOverview: [
      'Owner-cultivator farmer with agricultural land ownership records in Gujarat (7/12 & 8A extracts)',
      'Dairy farmers, poultry operators, or agri-allied entrepreneurs',
      'Clean repayment record on previous agricultural advances'
    ],
    documentsRequired: [
      'Farmer KYC (Aadhaar Card, Voter ID, PAN)',
      'Land revenue records: 7/12, 8A utara, and village map verification',
      'Kisan Credit Card passbook (if existing)',
      'Tractor / Implement dealer proforma quotation'
    ],
    features: [
      'Interest subvention benefits for prompt repayment under central/state farm schemes',
      'Repayment schedules synced with harvest and crop-sale seasons (Kharif / Rabi)',
      'Financing for modern drip irrigation, polyhouses, and solar water pump installations'
    ],
    benefits: [
      'Increase agricultural yield and farm income without depending on unregulated local lenders'
    ],
    applicationProcess: [
      { step: 1, title: 'Land Record Review', description: 'Submit 7/12 & 8A land extracts to our agricultural finance desk.' },
      { step: 2, title: 'Scheme Alignment', description: 'Match with specialized agricultural branches of PSU and private banks.' },
      { step: 3, title: 'Field Verification & Disbursal', description: 'Quick land verification and fund credit.' }
    ],
    faqs: [
      {
        question: 'What is the repayment schedule for crop loans?',
        answer: 'Crop loans are typically structured to be repaid once the harvest is sold at the APMC market yard, matching agricultural cycles.'
      }
    ],
    seoTitle: 'Agricultural Loan in Ahmedabad Gujarat | Kisan Farm & Tractor Loan',
    seoDescription: 'Kisan credit, tractor loans, and agricultural finance in Ahmedabad and Gujarat rural belts. Call Vastral Loan & Finance at 9979232182.'
  },
  {
    id: 'debt-consolidation-loan',
    slug: 'debt-consolidation-loan',
    name: 'Debt Consolidation Loan',
    group: 'personal-family',
    iconName: 'Layers',
    tag: 'Single EMI • Reduce Interest Burden',
    shortDesc: 'Merge multiple high-interest credit cards, personal loans, and short-term debts into a single, structured, lower-interest monthly EMI.',
    typicalUse: 'Consolidating 3-5 costly personal loans, outstanding credit card balances, and micro-loans into one organized repayment.',
    possibleAmount: '₹1,00,000 to ₹50,00,000',
    possibleTenure: '12 Months to 84 Months',
    indicativeRateNote: 'Rates vary by lender and applicant profile. Often saves 5% to 15% annual interest compared to credit card finance charges.',
    eligibilityOverview: [
      'Active income earner with multiple existing loan accounts in regular track',
      'Debt-to-Income (FOIR) within workable parameters'
    ],
    documentsRequired: [
      'KYC (PAN, Aadhaar)',
      'Outstanding loan statements, foreclosure letters, and credit card bills',
      'Latest 6 months salary bank statements'
    ],
    features: [
      'Direct closure of high-interest unsecured loan accounts by new lender',
      'One single manageable EMI payment date instead of juggling multiple due dates',
      'Immediate reduction in overall monthly cash outflow'
    ],
    benefits: [
      'Avoid missed payments, penalties, and collection calls',
      'Gradually improves CIBIL score as credit card utilization drops significantly'
    ],
    applicationProcess: [
      { step: 1, title: 'Debt Audit', description: 'List all active loans, interest rates, and outstanding balances.' },
      { step: 2, title: 'Consolidation Plan', description: 'Structure single replacement loan with lower EMI.' },
      { step: 3, title: 'Direct Payoff', description: 'Close old debts cleanly and streamline your finances.' }
    ],
    faqs: [
      {
        question: 'Will debt consolidation reduce my monthly EMI?',
        answer: 'Yes, by combining higher-interest debts into a single structured loan with an extended or lower-interest tenure, your monthly outflow decreases noticeably.'
      }
    ],
    seoTitle: 'Debt Consolidation Loan in Ahmedabad | Reduce EMI & Close Credit Cards',
    seoDescription: 'Consolidate multiple loans and credit cards into one easy EMI in Ahmedabad. Contact Vastral Loan & Finance at 9979232182.'
  },
  {
    id: 'overdraft-facility',
    slug: 'overdraft-facility',
    name: 'Overdraft Facility (OD)',
    group: 'business-msme',
    iconName: 'CreditCard',
    tag: 'Pay As You Use • Current Account Link',
    shortDesc: 'Pre-sanctioned credit limit on your business or personal account allowing withdrawals beyond zero balance with daily interest calculation.',
    typicalUse: 'Handling sudden vendor cheques, tax advance payouts, seasonal inventory purchases, or unexpected cash gaps.',
    possibleAmount: '₹1,00,000 to ₹5,00,00,000 (Against FD, property, or business turnover)',
    possibleTenure: '1 Year (Annual renewable limit)',
    indicativeRateNote: 'Rates vary by lender and applicant profile. Interest charged only for the exact amount and days used.',
    eligibilityOverview: [
      'Business entity or professional with healthy bank account throughput',
      'Secured options available against Fixed Deposit (FD) or Property; unsecured options based on turnover'
    ],
    documentsRequired: [
      'Business KYC & Current Account statements',
      'Financials & ITR for business OD OR FD receipt for Instant FD OD',
      'Property documents for mortgage-backed OD'
    ],
    features: [
      'No fixed monthly EMI—repay principal anytime cash is received into account',
      'Zero interest on days your account is in positive balance',
      'High liquidity buffer for smart business management'
    ],
    benefits: [
      'Maximum cash flexibility with minimum interest expense'
    ],
    applicationProcess: [
      { step: 1, title: 'Select OD Type', description: 'Choose between Clean OD, FD-backed OD, or Property-backed OD.' },
      { step: 2, title: 'Limit Sanction', description: 'Sanction and link limit to your operating Current/Savings account.' }
    ],
    faqs: [
      {
        question: 'How is interest calculated in an Overdraft facility?',
        answer: 'Interest is calculated on the exact negative daily balance and debited at the end of the month. If you do not utilize the limit, no interest is charged.'
      }
    ],
    seoTitle: 'Overdraft Facility in Ahmedabad | OD Limit for Business & Individuals',
    seoDescription: 'Sanction your business Overdraft (OD) limit in Ahmedabad. Pay interest only on usage. Call Vastral Loan & Finance 9979232182.'
  },
  {
    id: 'credit-line',
    slug: 'credit-line',
    name: 'Credit Line',
    group: 'business-msme',
    iconName: 'Zap',
    tag: 'Digital Revolving Limit • Instant Withdrawals',
    shortDesc: 'On-demand digital credit reserve accessible 24x7 from your smartphone or portal for instant business or personal transfers.',
    typicalUse: 'Instant vendor payments, emergency supplier advances, utility bills, and short-term capital needs.',
    possibleAmount: '₹25,000 to ₹25,00,000',
    possibleTenure: 'Revolving line with flexi-draw periods up to 36 months',
    indicativeRateNote: 'Rates vary by lender and applicant profile.',
    eligibilityOverview: [
      'Salaried employee or GST registered business owner',
      'Active mobile banking and net banking access'
    ],
    documentsRequired: [
      'Digital KYC (PAN, Aadhaar)',
      'Digital bank statement authentication'
    ],
    features: [
      'Draw funds multiple times within the sanctioned ceiling',
      'Convert individual withdrawals into flexible 3, 6, 9, or 12 month EMIs',
      '24x7 instant fund transfer to your bank account'
    ],
    benefits: [
      'The ultimate financial safety net without paying interest when unutilized'
    ],
    applicationProcess: [
      { step: 1, title: 'Online Setup', description: 'Complete paperless digital verification.' },
      { step: 2, title: 'Instant Limit Activation', description: 'Draw funds anytime as per business convenience.' }
    ],
    faqs: [
      {
        question: 'Can I withdraw partial amounts from my Credit Line?',
        answer: 'Yes! If you have a ₹5 Lakh credit line, you can withdraw ₹50,000 today and ₹1,00,000 next month, paying interest only on the ₹1.5 Lakh withdrawn.'
      }
    ],
    seoTitle: 'Credit Line in Ahmedabad | Digital Revolving Cash Limit Vastral',
    seoDescription: 'Get an instant digital credit line in Ahmedabad. Draw funds 24x7. Contact Vastral Loan & Finance at 9979232182.'
  }
];

export const LOAN_GROUPS: { key: LoanCategory['group']; label: string; count?: number }[] = [
  { key: 'all', label: 'All 24 Loan Products' },
  { key: 'personal-family', label: 'Personal & Family Loans' },
  { key: 'home-property', label: 'Home & Property' },
  { key: 'business-msme', label: 'Business & MSME Finance' },
  { key: 'vehicle', label: 'Vehicle Loans' },
  { key: 'specialized-agri', label: 'Gold & Agriculture' }
];
