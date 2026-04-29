import { Activity, BookOpen, CheckCircle, ChevronDown, Clock, FileText, Globe, Instagram, Key, MapPin, Phone, ShieldCheck, User } from 'lucide-react';
import React, { useState } from 'react';

export default function App() {
  const WHATSAPP_URL = "https://wa.me/905367928820";
  const INSTAGRAM_URL = "https://www.instagram.com/kh.danismanlik/";

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tight text-slate-800">
            Kibar <span className="text-blue-600">Halid</span>
          </div>
            <div className="flex items-center gap-6">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 transition hidden sm:block">
              Instagram
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition"
            >
              Написать в WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 text-slate-900">
              Оформление ВНЖ и легализация документов в Турции
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Надёжный партнёр для русскоязычных иностранцев. Помогаем разобраться в бюрократических процессах без стресса.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center px-6 py-3.5 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition"
              >
                Написать в WhatsApp
              </a>
              <a
                href="#services"
                className="inline-flex justify-center items-center px-6 py-3.5 bg-slate-100 text-slate-700 font-medium rounded-xl hover:bg-slate-200 transition"
              >
                Все услуги
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Istanbul city view"
              className="rounded-3xl shadow-2xl object-cover h-[400px] w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Без стресса</div>
                  <div className="text-sm text-slate-500">Работаем по закону</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Наши услуги</h2>
            <div className="w-16 h-1 bg-blue-600 rounded"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <User size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Вид на жительство (ВНЖ)</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Краткосрочный (Kısa Dönem İkamet İzni) и долгосрочный (Uzun Dönem İkamet İzni) ВНЖ. Подготовка документов, подача заявлений, сопровождение на всех этапах.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Activity size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Частная медицинская страховка</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Оформление полиса (Özel Sağlık Sigortası), который принимают турецкие государственные органы при подаче на ВНЖ.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Нотариальные переводы</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Официальный перевод документов с русского, украинского и английского на турецкий и обратно, заверенный нотариусом.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <FileText size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Апостиль</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Легализация иностранных документов (Apostil) для официального использования государственными органами в Турции.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Консульское заверение</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Помощь в легализации и заверении документов через консульства различных стран на территории Турции.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Запись на рандеву</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Запись на приём (E-Randevu) в Управление по делам иностранцев (İl Göç İdaresi Müdürlüğü) и другие инстанции.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold mb-4">Почему выбирают нас</h2>
              <div className="w-16 h-1 bg-blue-500 rounded mb-6"></div>
              <p className="text-slate-400 leading-relaxed">
                Мы берем на себя общение с государственными органами, чтобы вы могли спокойно жить и работать в Турции.
              </p>
            </div>
            
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="mt-1 text-blue-400">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Полный контроль процесса</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Мы контролируем каждый шаг от первичной консультации до того момента, когда вы получите готовые документы на руки.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 text-blue-400">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Экономия вашего времени</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Вам не придется самостоятельно переводить инструкции, разбираться в бюрократии и стоять в многочасовых очередях.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 text-blue-400">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Прозрачная стоимость</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Вы заранее и точно до копейки знаете стоимость всех услуг без скрытых налогов и неожиданных переплат в процессе.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 text-blue-400">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Актуальное знание закона</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Мы непрерывно следим за всеми изменениями в миграционном законодательстве Турции и применяем их на практике.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Часто задаваемые вопросы</h2>
            <div className="w-16 h-1 bg-blue-600 rounded mx-auto"></div>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Сколько времени занимает оформление ВНЖ?",
                a: "Сроки рассмотрения зависят от загруженности Управления по делам иностранцев (İl Göç İdaresi Müdürlüğü). В среднем процесс занимает от нескольких недель до нескольких месяцев с момента подачи заявления."
              },
              {
                q: "Нужна ли мне медицинская страховка для ВНЖ?",
                a: "Да, для получения краткосрочного ВНЖ обязательно наличие частной медицинской страховки (Özel Sağlık Sigortası). Она должна покрывать весь запрашиваемый период вашего пребывания."
              },
              {
                q: "Что такое апостиль и когда он нужен?",
                a: "Апостиль (Apostil) — это международный штамп, подтверждающий законность документа. Он потребуется для ваших свидетельств о рождении, браке и дипломов при предоставлении их в государственные органы Турции."
              },
              {
                q: "Можете ли вы перевести мои документы?",
                a: "Да, мы делаем профессиональные переводы с русского, украинского и английского на турецкий язык. Все переводы официально заверяются турецким нотариусом."
              }
            ].map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus:bg-slate-50"
                >
                  <span className="font-semibold text-slate-800 pr-8">{faq.q}</span>
                  <ChevronDown 
                    className={`text-slate-400 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} 
                    size={20} 
                  />
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === idx ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Готовы начать оформление?
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Оставьте заявку — мы свяжемся в течение часа, чтобы обсудить вашу ситуацию и предложить решение.
          </p>
          
          <div className="max-w-md mx-auto flex flex-col gap-6">
             <a 
               href={WHATSAPP_URL} 
               target="_blank" 
               rel="noopener noreferrer" 
               className="w-full bg-white border-2 border-blue-600 text-blue-600 font-bold py-6 rounded-2xl hover:bg-blue-50 transition flex justify-center items-center gap-3 text-xl shadow-xl shadow-blue-500/10"
             >
               <Phone size={24} />
               Написать в WhatsApp
             </a>
             <a 
               href={INSTAGRAM_URL} 
               target="_blank" 
               rel="noopener noreferrer" 
               className="w-full bg-white border-2 border-blue-600 text-blue-600 font-bold py-6 rounded-2xl hover:bg-blue-50 transition flex justify-center items-center gap-3 text-xl shadow-xl shadow-blue-500/10"
             >
               <Instagram size={24} />
               Мы в Instagram
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
              <a href="#services" className="hover:text-white transition">Услуги</a>
            </div>
          </div>
          <div className="text-center text-slate-500 text-sm">
            © {new Date().getFullYear()} Kibar Halid. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
