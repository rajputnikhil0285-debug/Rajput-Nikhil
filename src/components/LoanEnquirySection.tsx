import React, { useState } from 'react';
import {
  Send,
  CheckCircle2,
  Phone,
  MessageCircle,
  ShieldCheck,
  User,
  Mail,
  MapPin,
  IndianRupee,
  Clock,
  Briefcase,
  Layers,
  X
} from 'lucide-react';
import { LoanEnquiryFormState } from '../types';
import { LOANS_DATA } from '../data/loansData';
import { formatINRWords } from '../utils/formatters';

interface LoanEnquirySectionProps {
  initialLoanType?: string;
  isModal?: boolean;
  onCloseModal?: () => void;
}

export const LoanEnquirySection: React.FC<LoanEnquirySectionProps> = ({
  initialLoanType = 'Personal Loan',
  isModal = false,
  onCloseModal
}) => {
  const [formState, setFormState] = useState<LoanEnquiryFormState>({
    fullName: '',
    mobile: '',
    email: '',
    city: 'Ahmedabad',
    loanType: initialLoanType,
    loanAmount: '500000',
    monthlyIncome: '40000',
    employmentType: 'Salaried',
    existingLoanEmi: '0',
    preferredContactTime: 'Anytime',
    message: '',
    consent: true
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.consent) {
      alert('Please check the consent box to proceed with your enquiry.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable enquiry dispatch
    setTimeout(() => {
      const generatedRef = `VLF-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceId(generatedRef);
      setIsSubmitted(true);
      setIsSubmitting(false);

      // Store in local inquiry log for persistence
      try {
        const stored = JSON.parse(localStorage.getItem('vlf_enquiries') || '[]');
        stored.push({
          ref: generatedRef,
          ...formState,
          timestamp: new Date().toISOString()
        });
        localStorage.setItem('vlf_enquiries', JSON.stringify(stored));
      } catch (err) {
        // ignore local storage errors
      }
    }, 500);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Jay Meldi Associates, I have submitted an enquiry (Ref: ${referenceId || 'New'}) for ${formState.loanType} of ₹${formState.loanAmount}. Please guide me.`
  );
  const whatsappUrl = `https://wa.me/919979232182?text=${whatsappMessage}`;

  return (
    <div className={`${isModal ? 'p-6 sm:p-8 max-h-[90vh] overflow-y-auto' : 'py-12'}`}>
      <div className={`${isModal ? 'max-w-2xl mx-auto' : 'max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-10'}`}>
        
        {/* Header */}
        <div className="flex items-start justify-between pb-6 mb-6 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Free Loan Assistance • Vastral, Ahmedabad</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Submit Your Loan Enquiry
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Complete this simple form to compare suitable loan options. Our local loan advisor will contact you promptly.
            </p>
          </div>

          {isModal && onCloseModal && (
            <button
              onClick={onCloseModal}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          )}
        </div>

        {isSubmitted ? (
          /* Confirmation State */
          <div className="text-center py-8 px-4 space-y-6 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">
                Enquiry Reference: {referenceId}
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-2">
                Thank You, {formState.fullName}!
              </h3>
              <p className="text-slate-600 text-sm max-w-lg mx-auto">
                Your loan enquiry for <strong className="text-slate-900">{formState.loanType}</strong> has been successfully received by our team at Vastral, Ahmedabad.
              </p>
            </div>

            {/* Business Contact Box */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 max-w-md mx-auto space-y-4 text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-700 text-white flex items-center justify-center font-bold">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-bold block">Need Immediate Assistance? Call Us Now:</span>
                  <a
                    href="tel:9979232182"
                    className="text-lg font-black text-blue-800 hover:text-blue-900 tracking-wide"
                  >
                    9979232182
                  </a>
                </div>
              </div>

              <div className="text-xs text-slate-600 border-t border-slate-200 pt-3">
                <p><strong>Office:</strong> Vastral, Ahmedabad, Gujarat, India</p>
                <p className="text-slate-500 mt-0.5">Hours: Monday to Saturday (9:30 AM – 7:30 PM)</p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:9979232182"
                  className="flex-1 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs rounded-xl text-center flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-4 h-4" /> Call 9979232182
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl text-center flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onCloseModal?.();
                }}
                className="text-xs font-bold text-slate-500 hover:text-blue-700 underline"
              >
                Submit another enquiry
              </button>
            </div>
          </div>
        ) : (
          /* Main Form */
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label htmlFor="enq-fullname" className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    id="enq-fullname"
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formState.fullName}
                    onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                    className="w-full pl-9 pr-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                  />
                </div>
              </div>

              {/* Mobile Number */}
              <div>
                <label htmlFor="enq-mobile" className="block text-xs font-bold text-slate-700 mb-1">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-xs text-slate-500 font-bold">+91</span>
                  <input
                    id="enq-mobile"
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    maxLength={10}
                    placeholder="10-digit mobile number"
                    value={formState.mobile}
                    onChange={(e) => setFormState({ ...formState, mobile: e.target.value.replace(/\D/g, '') })}
                    className="w-full pl-11 pr-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-hidden font-semibold"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email */}
              <div>
                <label htmlFor="enq-email" className="block text-xs font-bold text-slate-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    id="enq-email"
                    type="email"
                    placeholder="name@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full pl-9 pr-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                  />
                </div>
              </div>

              {/* City */}
              <div>
                <label htmlFor="enq-city" className="block text-xs font-bold text-slate-700 mb-1">
                  City / Location <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    id="enq-city"
                    type="text"
                    required
                    placeholder="e.g. Vastral, Ahmedabad"
                    value={formState.city}
                    onChange={(e) => setFormState({ ...formState, city: e.target.value })}
                    className="w-full pl-9 pr-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Loan Type */}
              <div>
                <label htmlFor="enq-loantype" className="block text-xs font-bold text-slate-700 mb-1">
                  Loan Category <span className="text-red-500">*</span>
                </label>
                <select
                  id="enq-loantype"
                  required
                  value={formState.loanType}
                  onChange={(e) => setFormState({ ...formState, loanType: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-hidden font-medium"
                >
                  {LOANS_DATA.map((loan) => (
                    <option key={loan.id} value={loan.name}>
                      {loan.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Required Loan Amount */}
              <div>
                <label htmlFor="enq-loanamount" className="block text-xs font-bold text-slate-700 mb-1">
                  Required Loan Amount (₹) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <IndianRupee className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    id="enq-loanamount"
                    type="number"
                    required
                    min="10000"
                    step="25000"
                    placeholder="e.g. 500000"
                    value={formState.loanAmount}
                    onChange={(e) => setFormState({ ...formState, loanAmount: e.target.value })}
                    className="w-full pl-9 pr-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-hidden font-bold"
                  />
                </div>
                <span className="text-[11px] text-blue-700 font-semibold mt-0.5 block">
                  {formatINRWords(Number(formState.loanAmount) || 0)}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Monthly Income */}
              <div>
                <label htmlFor="enq-monthlyincome" className="block text-xs font-bold text-slate-700 mb-1">
                  Net Monthly Income / Turnover (₹) <span className="text-red-500">*</span>
                </label>
                <input
                  id="enq-monthlyincome"
                  type="number"
                  required
                  min="5000"
                  step="5000"
                  placeholder="e.g. 45000"
                  value={formState.monthlyIncome}
                  onChange={(e) => setFormState({ ...formState, monthlyIncome: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                />
              </div>

              {/* Employment Type */}
              <div>
                <label htmlFor="enq-employmenttype" className="block text-xs font-bold text-slate-700 mb-1">
                  Employment Type <span className="text-red-500">*</span>
                </label>
                <select
                  id="enq-employmenttype"
                  value={formState.employmentType}
                  onChange={(e) => setFormState({ ...formState, employmentType: e.target.value as any })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                >
                  <option value="Salaried">Salaried (Private / MNC / Govt)</option>
                  <option value="Self-Employed Professional">Self-Employed Professional (Doctor, CA, Architect)</option>
                  <option value="Business Owner / MSME">Business Owner / Trader / MSME Manufacturer</option>
                  <option value="Farmer / Agriculture">Farmer / Agriculture</option>
                  <option value="Other">Other / Self-Employed Non-Professional</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Existing Loan / EMI */}
              <div>
                <label htmlFor="enq-existingemi" className="block text-xs font-bold text-slate-700 mb-1">
                  Existing Loan / Total Monthly EMI (₹)
                </label>
                <input
                  id="enq-existingemi"
                  type="number"
                  min="0"
                  step="1000"
                  placeholder="Enter current EMIs (0 if none)"
                  value={formState.existingLoanEmi}
                  onChange={(e) => setFormState({ ...formState, existingLoanEmi: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                />
              </div>

              {/* Preferred Contact Time */}
              <div>
                <label htmlFor="enq-contacttime" className="block text-xs font-bold text-slate-700 mb-1">
                  Preferred Contact Time
                </label>
                <select
                  id="enq-contacttime"
                  value={formState.preferredContactTime}
                  onChange={(e) => setFormState({ ...formState, preferredContactTime: e.target.value as any })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                >
                  <option value="Anytime">Anytime during business hours</option>
                  <option value="Morning (9 AM - 12 PM)">Morning (9:30 AM – 12:00 PM)</option>
                  <option value="Afternoon (12 PM - 4 PM)">Afternoon (12:00 PM – 4:00 PM)</option>
                  <option value="Evening (4 PM - 7:30 PM)">Evening (4:00 PM – 7:30 PM)</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="enq-message" className="block text-xs font-bold text-slate-700 mb-1">
                Specific Requirement / Message (Optional)
              </label>
              <textarea
                id="enq-message"
                rows={2}
                placeholder="Share any details such as preferred bank, urgency, property status, or special requirements..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-hidden resize-none"
              ></textarea>
            </div>

            {/* Consent Checkbox */}
            <div className="p-3.5 bg-blue-50/70 rounded-xl border border-blue-200/60">
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  id="enq-consent-checkbox"
                  type="checkbox"
                  required
                  checked={formState.consent}
                  onChange={(e) => setFormState({ ...formState, consent: e.target.checked })}
                  className="mt-1 w-4 h-4 text-blue-700 border-slate-300 rounded-sm focus:ring-blue-500"
                />
                <span className="text-[11px] text-slate-700 leading-snug">
                  I authorize Jay Meldi Associates to contact me via Call, SMS, or WhatsApp regarding my loan enquiry at <strong>9979232182</strong> and discuss loan options. I understand that submitting this enquiry does not guarantee loan approval.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              id="submit-loan-enquiry-btn"
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-blue-700 hover:bg-blue-800 text-white font-extrabold rounded-2xl text-base transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl active:scale-[0.99] disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Submitting Enquiry...</span>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Submit Loan Enquiry</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
