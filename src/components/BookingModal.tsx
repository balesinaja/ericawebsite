import React, { useState } from 'react';
import { BookingDetails } from '../types';
import { UI_TRANSLATIONS } from '../data/content';
import { useLanguage } from '../context/LanguageContext';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language].bookingModal;

  const [step, setStep] = useState<1 | 2>(1);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState<BookingDetails>({
    serviceType: t.servicesList[0],
    date: '2025-06-15',
    timeSlot: '10:00 WIB',
    name: '',
    email: '',
    company: '',
    notes: '',
  });

  if (!isOpen) return null;

  const timeSlots = [
    '09:00 WIB',
    '10:30 WIB',
    '13:30 WIB',
    '15:00 WIB',
    '16:30 WIB',
  ];

  const generateWhatsAppMessage = () => {
    return `Halo Bu Erica Adriana, S.E., M.M.,

Saya ingin mengajukan jadwal konsultasi dengan rincian berikut:

• Layanan: ${formData.serviceType}
• Tanggal: ${formData.date}
• Waktu: ${formData.timeSlot}
----------------------------------
• Nama: ${formData.name}
• Email: ${formData.email}
• Perusahaan: ${formData.company || '-'}
• Catatan: ${formData.notes || '-'}`;
  };

  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(generateWhatsAppMessage());
    return `https://wa.me/6285813638787?text=${text}`;
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(generateWhatsAppMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Directly open WhatsApp in a new tab
    window.open(generateWhatsAppUrl(), '_blank');
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#fef9ef] rounded-[2rem] max-w-xl w-full p-8 md:p-10 relative shadow-2xl border border-white/60 max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#f2ede4] text-[#181f21] transition-colors cursor-pointer"
          aria-label="Close booking modal"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-6">
            <div className="w-16 h-16 bg-[#25D366]/20 text-[#25D366] rounded-full flex items-center justify-center mx-auto shadow-inner border border-[#25D366]/30">
              <svg className="w-8 h-8 fill-current shrink-0" viewBox="0 0 256 256">
                <path fill="#25D366" d="M128 36c-50.8 0-92 41.2-92 92 0 16.3 4.2 31.6 11.6 45L36 220l48.3-12.7c12.9 7 27.6 11 43.7 11 50.8 0 92-41.2 92-92S178.8 36 128 36zm0 167.3c-14.2 0-27.6-3.8-39.2-10.6l-2.8-1.6-29.1 7.6 7.8-28.3-1.8-2.9c-7.4-11.7-11.4-25.5-11.4-40.1 0-41.6 33.8-75.4 75.4-75.4s75.4 33.8 75.4 75.4-33.8 75.9-75.4 75.9z"/>
              </svg>
            </div>

            <div>
              <h3 className="font-serif text-3xl font-medium text-[#181f21] mb-2">
                {t.successTitle}
              </h3>
              <p className="text-sm text-[#434749] leading-relaxed max-w-md mx-auto">
                {t.successDesc} <strong className="text-[#181f21]">{formData.name}</strong>. {t.invitationSent}.
              </p>
            </div>

            {/* Form Details Summary Card */}
            <div className="bg-[#f8f3ea] p-5 rounded-2xl text-left text-xs space-y-2 text-[#434749] border border-[#c3c7c8]/40">
              <div className="flex items-center gap-2 pb-2 border-b border-[#c3c7c8]/30 font-semibold text-[#181f21]">
                <span className="material-symbols-outlined text-base text-[#4b644e]">event_available</span>
                <span>Ringkasan Konsultasi WhatsApp</span>
              </div>
              <div><strong>Layanan:</strong> {formData.serviceType}</div>
              <div><strong>Jadwal:</strong> {formData.date} ({formData.timeSlot})</div>
              <div><strong>Pemohon:</strong> {formData.name}</div>
              <div><strong>Kontak Email:</strong> {formData.email}</div>
              {formData.company && <div><strong>Organisasi:</strong> {formData.company}</div>}
              {formData.notes && <div><strong>Catatan:</strong> {formData.notes}</div>}
            </div>

            {/* WhatsApp Direct Action Buttons */}
            <div className="space-y-3 pt-2">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 bg-[#25D366] text-white text-xs font-bold tracking-wider uppercase hover:bg-[#1ebd59] transition-colors rounded-xl flex items-center justify-center gap-2.5 shadow-md cursor-pointer border border-[#1ebd59]"
              >
                <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 256 256">
                  <path fill="#FFFFFF" d="M128 36c-50.8 0-92 41.2-92 92 0 16.3 4.2 31.6 11.6 45L36 220l48.3-12.7c12.9 7 27.6 11 43.7 11 50.8 0 92-41.2 92-92S178.8 36 128 36zm0 167.3c-14.2 0-27.6-3.8-39.2-10.6l-2.8-1.6-29.1 7.6 7.8-28.3-1.8-2.9c-7.4-11.7-11.4-25.5-11.4-40.1 0-41.6 33.8-75.4 75.4-75.4s75.4 33.8 75.4 75.4-33.8 75.9-75.4 75.9z"/>
                </svg>
                <span>{t.sendWaBtn}</span>
              </a>

              <button
                type="button"
                onClick={handleCopyMessage}
                className="w-full py-3.5 border border-[#181f21] text-[#181f21] text-xs font-semibold tracking-wider uppercase rounded-xl hover:bg-[#f2ede4] transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">
                  {copied ? 'check' : 'content_copy'}
                </span>
                <span>{copied ? t.copiedText : t.copyMsgBtn}</span>
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="w-full py-3 bg-transparent border border-[#c3c7c8]/60 text-[#434749] text-xs font-semibold tracking-widest uppercase hover:text-[#181f21] hover:bg-[#f8f3ea] transition-colors rounded-xl cursor-pointer"
              >
                {t.doneBtn}
              </button>
            </div>
          </div>
        ) : (
          <div>
            <span className="text-[11px] font-semibold tracking-widest text-[#4b644e] uppercase block mb-1">
              {t.titleTagline}
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-medium text-[#181f21] mb-6">
              {step === 1 ? t.step1Title : t.step2Title}
            </h3>

            <form onSubmit={handleSubmit}>
              {step === 1 ? (
                <div className="space-y-6">
                  {/* Service Selection */}
                  <div>
                    <label className="text-xs font-semibold text-[#181f21] uppercase tracking-wider block mb-2">
                      {t.selectType}
                    </label>
                    <div className="space-y-2">
                      {t.servicesList.map((svc) => (
                        <label
                          key={svc}
                          className={`flex items-center gap-3 p-3.5 rounded-xl border text-sm cursor-pointer transition-all ${
                            formData.serviceType === svc
                              ? 'bg-[#181f21] text-[#fef9ef] border-[#181f21]'
                              : 'bg-[#f8f3ea] border-[#c3c7c8]/40 text-[#1d1c16] hover:bg-[#f2ede4]'
                          }`}
                        >
                          <input
                            type="radio"
                            name="serviceType"
                            checked={formData.serviceType === svc}
                            onChange={() => setFormData({ ...formData, serviceType: svc })}
                            className="sr-only"
                          />
                          <span className="material-symbols-outlined text-base">
                            {formData.serviceType === svc ? 'radio_button_checked' : 'radio_button_unchecked'}
                          </span>
                          <span className="font-medium">{svc}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Date & Time Slot */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-[#181f21] uppercase tracking-wider block mb-2">
                        {t.preferredDate}
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full p-3 rounded-xl bg-[#f8f3ea] border border-[#c3c7c8]/40 text-sm text-[#181f21] focus:outline-none focus:border-[#181f21]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#181f21] uppercase tracking-wider block mb-2">
                        {t.timeSlot}
                      </label>
                      <select
                        value={formData.timeSlot}
                        onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                        className="w-full p-3 rounded-xl bg-[#f8f3ea] border border-[#c3c7c8]/40 text-sm text-[#181f21] focus:outline-none focus:border-[#181f21]"
                      >
                        {timeSlots.map((ts) => (
                          <option key={ts} value={ts}>
                            {ts}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full mt-4 py-4 bg-[#181f21] text-[#fef9ef] text-xs font-semibold tracking-widest uppercase hover:bg-[#4b644e] transition-colors rounded-xl flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {t.continueBtn}
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-[#181f21] uppercase tracking-wider block mb-1.5">
                      {t.fullName}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.fullNamePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 rounded-xl bg-[#f8f3ea] border border-[#c3c7c8]/40 text-sm text-[#181f21] focus:outline-none focus:border-[#181f21]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#181f21] uppercase tracking-wider block mb-1.5">
                      {t.email}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={t.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 rounded-xl bg-[#f8f3ea] border border-[#c3c7c8]/40 text-sm text-[#181f21] focus:outline-none focus:border-[#181f21]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#181f21] uppercase tracking-wider block mb-1.5">
                      {t.company}
                    </label>
                    <input
                      type="text"
                      placeholder={t.companyPlaceholder}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full p-3 rounded-xl bg-[#f8f3ea] border border-[#c3c7c8]/40 text-sm text-[#181f21] focus:outline-none focus:border-[#181f21]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#181f21] uppercase tracking-wider block mb-1.5">
                      {t.notes}
                    </label>
                    <textarea
                      rows={3}
                      placeholder={t.notesPlaceholder}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full p-3 rounded-xl bg-[#f8f3ea] border border-[#c3c7c8]/40 text-sm text-[#181f21] focus:outline-none focus:border-[#181f21]"
                    />
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-1/3 py-3.5 border border-[#181f21] text-[#181f21] text-xs font-semibold tracking-widest uppercase hover:bg-[#f2ede4] transition-colors rounded-xl cursor-pointer"
                    >
                      {t.backBtn}
                    </button>
                    <button
                      type="submit"
                      className="w-2/3 py-3.5 bg-[#25D366] text-white text-xs font-bold tracking-widest uppercase hover:bg-[#1ebd59] transition-colors rounded-xl shadow-md cursor-pointer flex items-center justify-center gap-2 border border-[#1ebd59]"
                    >
                      <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 256 256">
                        <path fill="#FFFFFF" d="M128 36c-50.8 0-92 41.2-92 92 0 16.3 4.2 31.6 11.6 45L36 220l48.3-12.7c12.9 7 27.6 11 43.7 11 50.8 0 92-41.2 92-92S178.8 36 128 36zm0 167.3c-14.2 0-27.6-3.8-39.2-10.6l-2.8-1.6-29.1 7.6 7.8-28.3-1.8-2.9c-7.4-11.7-11.4-25.5-11.4-40.1 0-41.6 33.8-75.4 75.4-75.4s75.4 33.8 75.4 75.4-33.8 75.9-75.4 75.9z"/>
                      </svg>
                      <span>{t.confirmBtn}</span>
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
