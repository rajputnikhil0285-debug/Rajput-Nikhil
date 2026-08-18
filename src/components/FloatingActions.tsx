import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp, Send } from 'lucide-react';

interface FloatingActionsProps {
  onOpenEnquiryModal?: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenEnquiryModal }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappNumber = '919979232182';
  const whatsappMessage = encodeURIComponent('Hello Jay Meldi Associates, I would like to enquire about a loan.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <aside aria-label="Quick contact and assistance actions" className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          id="btn-scroll-top"
          onClick={scrollToTop}
          className="pointer-events-auto p-3 bg-slate-800 text-white rounded-full shadow-lg hover:bg-slate-900 transition-all transform hover:scale-105"
          title="Scroll to Top"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Quick Enquiry Modal Trigger */}
      {onOpenEnquiryModal && (
        <button
          id="floating-enquiry-btn"
          onClick={onOpenEnquiryModal}
          className="pointer-events-auto flex items-center gap-2 bg-indigo-700 hover:bg-indigo-800 text-white px-4 py-3 rounded-full shadow-xl font-semibold transition-all transform hover:scale-105 border border-indigo-500/30"
          title="Quick Loan Enquiry"
          aria-label="Quick Loan Enquiry"
        >
          <Send className="w-4 h-4" />
          <span className="text-sm tracking-wide hidden sm:inline">Apply Online</span>
        </button>
      )}

      {/* Floating Call Button */}
      <a
        id="floating-call-btn"
        href="tel:9979232182"
        className="pointer-events-auto flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-3 rounded-full shadow-xl font-semibold transition-all transform hover:scale-105 border border-blue-500/30"
        title="Call 9979232182"
        aria-label="Call 9979232182"
      >
        <Phone className="w-5 h-5 animate-pulse" />
        <span className="text-sm tracking-wide hidden sm:inline">Call: 9979232182</span>
      </a>

      {/* Floating WhatsApp Button */}
      <a
        id="floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-full shadow-xl font-semibold transition-all transform hover:scale-105 border border-emerald-400/30"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp with 9979232182"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="text-sm tracking-wide hidden sm:inline">WhatsApp Enquiry</span>
      </a>
    </aside>
  );
};
