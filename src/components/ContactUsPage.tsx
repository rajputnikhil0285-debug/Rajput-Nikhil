import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building,
  ShieldCheck,
  Navigation
} from 'lucide-react';

export const ContactUsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    subject: 'General Loan Inquiry',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSubmitted(true);
    }, 500);
  };

  const whatsappUrl = 'https://wa.me/919979232182?text=' + encodeURIComponent('Hello, I would like to enquire about a loan.');

  return (
    <div className="bg-slate-50 min-h-screen pb-20 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold">
            <Phone className="w-4 h-4 text-blue-700" />
            <span>Get in Touch with Our Team</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact Jay Meldi Associates
          </h1>
          <p className="text-sm text-slate-600">
            Visit our office in Vastral, Ahmedabad or contact our loan advisors directly via phone, WhatsApp, or online message.
          </p>
        </div>

        {/* Contact Information & Action Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Mobile Card */}
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-2xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Direct Helpline</h3>
              <p className="text-xs text-slate-600">
                Call us directly to speak with an experienced loan advisor about your requirement.
              </p>
              <a
                id="contact-page-phone-link"
                href="tel:9979232182"
                className="text-xl font-extrabold text-blue-700 hover:text-blue-800 block tracking-wide"
              >
                9979232182
              </a>
            </div>

            <a
              id="contact-page-call-btn"
              href="tel:9979232182"
              className="w-full py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-2xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">WhatsApp Desk</h3>
              <p className="text-xs text-slate-600">
                Send your loan query on WhatsApp for rapid response and document checklists.
              </p>
              <span className="text-lg font-bold text-emerald-700 block">
                +91 9979232182
              </span>
            </div>

            <a
              id="contact-page-whatsapp-btn"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Enquiry</span>
            </a>
          </div>

          {/* Location & Hours Card */}
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-2xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Office Location & Hours</h3>
              <div className="text-xs text-slate-700 space-y-1">
                <p className="font-semibold text-slate-900">Vastral, Ahmedabad, Gujarat, India</p>
                <div className="flex items-center gap-1.5 text-slate-500 pt-1">
                  <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Mon - Sat: 9:30 AM – 7:30 PM</span>
                </div>
                <p className="text-[11px] text-slate-400">Sunday: Closed / Appointments Only</p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Vastral,+Ahmedabad,+Gujarat,+India"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors"
            >
              <Navigation className="w-4 h-4 text-blue-700" />
              <span>Open in Google Maps</span>
            </a>
          </div>
        </div>

        {/* Form and Google Maps Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Message Form */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-blue-700 block">
                Send a Message
              </span>
              <h2 className="text-xl font-extrabold text-slate-900 mt-1">
                Leave Us a Quick Message
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                We typically respond within 2 to 4 business hours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h3 className="text-base font-bold text-emerald-950">
                  Message Sent Successfully!
                </h3>
                <p className="text-xs text-emerald-800">
                  Thank you, <strong>{formData.name}</strong>. Our team in Vastral will get back to you shortly at <strong>{formData.mobile}</strong>.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs font-bold text-emerald-700 underline pt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-mobile" className="block text-xs font-bold text-slate-700 mb-1">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-mobile"
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      maxLength={10}
                      placeholder="10-digit number"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, '') })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-bold text-slate-700 mb-1">
                    Subject / Interested Loan Category
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 mb-1">
                    Message / Question <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={3}
                    placeholder="Tell us what you would like to know about our loan assistance..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-hidden resize-none"
                  ></textarea>
                </div>

                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={isSending}
                  className="w-full py-3 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-50"
                >
                  {isSending ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Google Maps Location Embed & Local Presence */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-blue-700 block">
                    Our Location
                  </span>
                  <h2 className="text-xl font-extrabold text-slate-900">
                    Vastral, Ahmedabad, Gujarat
                  </h2>
                </div>
                <div className="p-2.5 bg-blue-50 text-blue-700 rounded-xl">
                  <MapPin className="w-6 h-6" />
                </div>
              </div>

              {/* Responsive Google Maps Embed for Vastral Ahmedabad */}
              <div className="w-full h-72 rounded-2xl overflow-hidden border border-slate-200 relative bg-slate-100">
                <iframe
                  title="Google Maps Location Vastral Ahmedabad"
                  src="https://maps.google.com/maps?q=Vastral,+Ahmedabad,+Gujarat,+India&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-1">
                <p className="font-bold text-slate-900">Coverage Across Greater Ahmedabad:</p>
                <p>
                  We actively cater to clients across Vastral, Nikol, Odhav, Naroda, Maninagar, Amraiwadi, CTM, New Ranip, Bopal, SG Highway, and surrounding Gujarat industrial belts.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
