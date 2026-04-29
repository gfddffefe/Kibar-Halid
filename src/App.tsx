import { Activity, BookOpen, CheckCircle, ChevronDown, Clock, FileText, Globe, Instagram, Key, MapPin, Phone, ShieldCheck, User } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { dict, Lang } from './i18n';

const WHATSAPP_URL = "https://wa.me/905367928820";
const INSTAGRAM_URL = "https://instagram.com/kh.danismanlik";

export default function App() {
  const [lang, setLang] = useState<Lang>('ru');
  const [activeDoc, setActiveDoc] = useState<'p1' | 'p2' | null>(null);

  useEffect(() => {
    // Basic language detection
    if (navigator.language.startsWith('tr')) {
      setLang('tr');
    } else {
      setLang('ru');
    }
  }, []);

  const t = dict[lang];

  const renderDoc = (text: string) => {
    const parts = text.split(':');
    if (parts.length > 1) {
      const title = parts.shift();
      const desc = parts.join(':');
      return <><strong className="text-slate-900">{title}:</strong>{desc}</>;
    }
    return text;
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-200">
      
      {/* Top Navigation Wrapper */}
      <div className="sticky top-0 z-[60] w-full flex flex-col">
        {/* Language Strip */}
        <div className="h-8 bg-slate-100 border-b border-slate-200 flex items-center justify-end px-3">
          <div className="flex bg-white rounded shadow-sm border border-blue-600 overflow-hidden">
            <button 
              onClick={() => setLang('ru')}
              className={`w-8 h-6 flex items-center justify-center text-xs font-bold transition-colors ${lang === 'ru' ? 'bg-blue-600 text-white' : 'text-blue-600 bg-white hover:bg-blue-50'}`}
            >
              RU
            </button>
            <button 
              onClick={() => setLang('tr')}
              className={`w-8 h-6 flex items-center justify-center text-xs font-bold transition-colors ${lang === 'tr' ? 'bg-blue-600 text-white' : 'text-blue-600 border-l border-blue-600 bg-white hover:bg-blue-50'}`}
            >
              TR
            </button>
          </div>
        </div>

        {/* Header */}
        <header className="bg-white/80 backdrop-blur-md border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
            <div className="text-xl font-bold tracking-tight text-slate-800">
              Kibar <span className="text-blue-600">Halid</span>
            </div>
            <div className="flex items-center gap-4 md:gap-6">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 transition hidden sm:block">
                {t.header.instagram}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 md:px-5 md:py-2.5 rounded-xl font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-500/20 text-sm md:text-base whitespace-nowrap"
              >
                {t.header.writeWhatsApp}
              </a>
            </div>
          </div>
        </header>
      </div>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-6">
              <ShieldCheck size={16} />
              {t.hero.badgeSubtitle}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              {t.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white font-semibold py-4 px-8 rounded-xl hover:bg-blue-700 transition flex items-center justify-center gap-2 shadow-xl shadow-blue-500/20 text-lg">
                <Phone size={20} />
                {t.hero.consultBtn}
              </a>
              <a href="#services" className="bg-white text-slate-700 font-semibold py-4 px-8 rounded-xl border border-slate-200 hover:bg-slate-50 transition flex items-center justify-center gap-2 text-lg">
                <FileText size={20} />
                {t.hero.servicesBtn}
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="relative group overflow-hidden rounded-3xl shadow-2xl h-[450px] max-h-[60vh]">
              <img
                src="https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&q=80&w=800"
                alt="Turkish flag"
                className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 top-0 pt-10 pb-24 bg-gradient-to-b from-black/80 via-black/30 to-transparent flex items-start">
                <div className="px-8 w-full">
                  <div className="text-white font-black text-2xl md:text-3xl tracking-wider uppercase drop-shadow-lg leading-snug">
                    {t.hero.imgText}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white px-6 py-5 rounded-2xl shadow-xl border border-slate-100 mt-4">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600 shrink-0">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium">{t.hero.badgeTitle}</div>
                  <div className="font-bold text-slate-900">{t.hero.badgeSubtitle}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.services.title}</h2>
            <div className="w-16 h-1 bg-blue-600 rounded"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="bg-blue-100 w-14 h-14 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <Globe size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{t.services.s1.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {t.services.s1.desc}
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="bg-blue-100 w-14 h-14 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <Activity size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{t.services.s2.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {t.services.s2.desc}
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="bg-blue-100 w-14 h-14 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <BookOpen size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{t.services.s3.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {t.services.s3.desc}
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="bg-blue-100 w-14 h-14 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <Key size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{t.services.s4.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {t.services.s4.desc}
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="bg-blue-100 w-14 h-14 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{t.services.s5.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {t.services.s5.desc}
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="bg-blue-100 w-14 h-14 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <Clock size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{t.services.s6.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {t.services.s6.desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Audiences / Documents Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">{t.programs.title}</h2>
            <div className="w-16 h-1 bg-blue-600 rounded mx-auto"></div>
            <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-lg">
              {t.programs.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Segment 1 */}
            <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200 flex flex-col">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">{t.programs.p1.title}</h2>
              <p className="text-slate-600 mb-8 text-sm">
                {t.programs.p1.desc}
              </p>
              
              <div className="mb-8 flex-grow">
                <button 
                  onClick={() => setActiveDoc(activeDoc === 'p1' ? null : 'p1')}
                  className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-blue-50 transition-colors text-left border border-slate-200 bg-white"
                >
                  <span className="text-lg font-bold text-slate-800 flex items-center gap-2">
                    <FileText size={20} className="text-blue-600" />
                    {t.programs.docsTitle}
                  </span>
                  <ChevronDown size={20} className={`text-blue-600 transition-transform ${activeDoc === 'p1' ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${activeDoc === 'p1' ? 'max-h-[800px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <ol className="space-y-4 list-decimal list-outside ml-8 pr-4 text-slate-700 text-sm pb-4">
                    <li className="pl-2">{renderDoc(t.programs.p1.d1)}</li>
                    <li className="pl-2">{renderDoc(t.programs.p1.d2)}</li>
                    <li className="pl-2">{renderDoc(t.programs.p1.d3)}</li>
                    <li className="pl-2">{renderDoc(t.programs.p1.d4)}</li>
                  </ol>
                  {t.programs.p1.note && (
                    <div className="mx-4 mb-4 p-4 bg-blue-50 rounded-lg text-xs text-blue-800 italic border border-blue-100">
                      {t.programs.p1.note}
                    </div>
                  )}
                </div>
              </div>
              
              <a 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full inline-flex justify-center items-center gap-2 bg-blue-600 text-white font-bold py-4 px-6 rounded-xl hover:bg-blue-700 transition mt-auto shadow-xl shadow-blue-500/20"
              >
                <Phone size={20} />
                <span className="text-center">{t.programs.p1.btn}</span>
              </a>
            </div>

            {/* Segment 2 */}
            <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200 flex flex-col">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">{t.programs.p2.title}</h2>
              <p className="text-slate-600 mb-8 text-sm">
                 {t.programs.p2.desc}
              </p>
              
              <div className="mb-8 flex-grow">
                <button 
                  onClick={() => setActiveDoc(activeDoc === 'p2' ? null : 'p2')}
                  className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-blue-50 transition-colors text-left border border-slate-200 bg-white"
                >
                  <span className="text-lg font-bold text-slate-800 flex items-center gap-2">
                    <FileText size={20} className="text-blue-600" />
                    {t.programs.docsTitle}
                  </span>
                  <ChevronDown size={20} className={`text-blue-600 transition-transform ${activeDoc === 'p2' ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${activeDoc === 'p2' ? 'max-h-[800px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <ol className="space-y-4 list-decimal list-outside ml-8 pr-4 text-slate-700 text-sm pb-4">
                    <li className="pl-2">{renderDoc(t.programs.p2.d1)}</li>
                    <li className="pl-2">{renderDoc(t.programs.p2.d2)}</li>
                    <li className="pl-2">{renderDoc(t.programs.p2.d3)}</li>
                    <li className="pl-2">{renderDoc(t.programs.p2.d4)}</li>
                    <li className="pl-2">{renderDoc(t.programs.p2.d5)}</li>
                    <li className="pl-2">{renderDoc(t.programs.p2.d6)}</li>
                    <li className="pl-2">{renderDoc(t.programs.p2.d7)}</li>
                    <li className="pl-2">{renderDoc(t.programs.p2.d8)}</li>
                  </ol>
                </div>
              </div>

              <a 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full inline-flex justify-center items-center gap-2 bg-blue-600 text-white font-bold py-4 px-6 rounded-xl hover:bg-blue-700 transition mt-auto shadow-xl shadow-blue-500/20"
              >
                <Phone size={20} />
                <span className="text-center">{t.programs.p2.btn}</span>
              </a>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 border border-blue-200 p-6 md:p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-center">
             <div className="bg-blue-600 p-4 rounded-xl text-white shrink-0 shadow-lg">
               <ShieldCheck size={32} />
             </div>
             <div>
               <h4 className="text-lg font-bold text-slate-900 mb-2">{t.programs.rules.title}</h4>
               <p className="text-slate-700 text-sm leading-relaxed">
                 {t.programs.rules.desc}
               </p>
             </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.advantages.title}</h2>
            <div className="w-16 h-1 bg-blue-500 rounded mx-auto mb-6"></div>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              {t.advantages.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-400">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-lg font-bold mb-3">{t.advantages.a1.title}</h3>
              <p className="text-slate-400 text-sm">{t.advantages.a1.desc}</p>
            </div>
            <div className="text-center">
              <div className="bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-400">
                <Clock size={32} />
              </div>
              <h3 className="text-lg font-bold mb-3">{t.advantages.a2.title}</h3>
              <p className="text-slate-400 text-sm">{t.advantages.a2.desc}</p>
            </div>
            <div className="text-center">
              <div className="bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-400">
                <Activity size={32} />
              </div>
              <h3 className="text-lg font-bold mb-3">{t.advantages.a3.title}</h3>
              <p className="text-slate-400 text-sm">{t.advantages.a3.desc}</p>
            </div>
            <div className="text-center">
              <div className="bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-400">
                <FileText size={32} />
              </div>
              <h3 className="text-lg font-bold mb-3">{t.advantages.a4.title}</h3>
              <p className="text-slate-400 text-sm">{t.advantages.a4.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.faq.title}</h2>
            <div className="w-16 h-1 bg-blue-600 rounded mx-auto"></div>
          </div>

          <div className="space-y-6">
             <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
               <h3 className="text-lg font-bold text-slate-900 mb-3">{t.faq.q1.q}</h3>
               <p className="text-slate-600 text-sm">{t.faq.q1.a}</p>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
               <h3 className="text-lg font-bold text-slate-900 mb-3">{t.faq.q2.q}</h3>
               <p className="text-slate-600 text-sm">{t.faq.q2.a}</p>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
               <h3 className="text-lg font-bold text-slate-900 mb-3">{t.faq.q3.q}</h3>
               <p className="text-slate-600 text-sm">{t.faq.q3.a}</p>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
               <h3 className="text-lg font-bold text-slate-900 mb-3">{t.faq.q4.q}</h3>
               <p className="text-slate-600 text-sm">{t.faq.q4.a}</p>
             </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{t.contact.title}</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
             {t.contact.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-xl mx-auto">
             <a 
               href={WHATSAPP_URL} 
               target="_blank" 
               rel="noopener noreferrer" 
               className="w-full bg-blue-600 text-white font-bold py-6 rounded-2xl hover:bg-blue-700 transition flex justify-center items-center gap-3 text-xl shadow-xl shadow-blue-500/20"
             >
               <Phone size={24} />
               {t.contact.btn1}
             </a>
             <a 
               href={INSTAGRAM_URL} 
               target="_blank" 
               rel="noopener noreferrer" 
               className="w-full bg-white border-2 border-blue-600 text-blue-600 font-bold py-6 rounded-2xl hover:bg-blue-50 transition flex justify-center items-center gap-3 text-xl shadow-xl shadow-blue-500/10"
             >
               <Instagram size={24} />
               {t.contact.btn2}
             </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 pt-16 pb-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            <div className="text-2xl font-bold tracking-tight text-white">
              Kibar <span className="text-blue-500">Halid</span>
            </div>
            <div className="flex gap-8 text-slate-400 text-sm">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">WhatsApp</a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Instagram</a>
              <a href="#services" className="hover:text-white transition">{t.header.services}</a>
            </div>
          </div>
          <div className="text-center text-slate-500 text-sm">
            © {new Date().getFullYear()} Kibar Halid. {t.footer.rights}
          </div>
        </div>
      </footer>
    </div>
  );
}
