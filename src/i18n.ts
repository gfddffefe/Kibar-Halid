export type Lang = 'ru' | 'tr';

export const dict = {
  ru: {
    header: { services: "Услуги", writeWhatsApp: "Написать в WhatsApp", instagram: "Instagram" },
    hero: {
      title: "Оформление ВНЖ и легализация документов в Турции",
      subtitle: "Надёжный партнёр для русскоязычных иностранцев. Помогаем разобраться в бюрократических процессах без стресса.",
      consultBtn: "Написать в WhatsApp",
      servicesBtn: "Все услуги",
      badgeTitle: "Без стресса",
      badgeSubtitle: "Работаем по закону",
      imgText: "Вид на жительство в Турции"
    },
    services: {
      title: "Наши услуги",
      s1: { title: "Вид на жительство (ВНЖ)", desc: "Краткосрочный (Kısa Dönem İkamet İzni) и долгосрочный (Uzun Dönem İkamet İzni) ВНЖ. Подготовка документов, подача заявлений, сопровождение на всех этапах." },
      s2: { title: "Частная медицинская страховка", desc: "Оформление полиса (Özel Sağlık Sigortası), который принимают турецкие государственные органы при подаче на ВНЖ." },
      s3: { title: "Нотариальные переводы", desc: "Официальный перевод документов с русского, украинского и английского на турецкий и обратно, заверенный нотариусом." },
      s4: { title: "Апостиль", desc: "Легализация иностранных документов (Apostil) для официального использования государственными органами в Турции." },
      s5: { title: "Консульское заверение", desc: "Помощь в легализации и заверении документов через консульства различных стран на территории Турции." },
      s6: { title: "Запись на рандеву", desc: "Запись на приём (E-Randevu) в Управление по делам иностранцев (İl Göç İdaresi Müdürlüğü) и другие инстанции." }
    },
    programs: {
      title: "Программы получения ВНЖ",
      subtitle: "Мы работаем как с репатриантами, так и с иностранными гражданами, помогая собрать полный пакет документов по нужной программе.",
      docsTitle: "Необходимые документы",
      p1: {
        title: "Для Ахыска Турков — отдельная программа",
        desc: "Турция признаёт Ахыска Турков родственным народом. Вы можете претендовать на долгосрочный ВНЖ (Uzun Dönem İkamet İzni) и в дальнейшем на гражданство по статье 12 турецкого Закона о гражданстве.",
        d1: "Собственное свидетельство о рождении (Kendi doğum belgesi)",
        d2: "Свидетельство о рождении отца (Baba doğum belgesi)",
        d3: "Свидетельство о рождении деда или архивная справка (Dede doğum belgesi veya Arşiv belgesi)",
        d4: "Свидетельство о браке — только если заявитель состоит в браке (Nikah belgesi)",
        note: "Все документы должны быть апостилированы в стране выдачи или предоставлены в виде оригиналов. Kibar Halid помогает с апостилем и нотариальным переводом всех перечисленных документов.",
        btn: "Узнать, какие документы нужны именно вам"
      },
      p2: {
        title: "Для граждан России, Украины и других стран",
        desc: "Помогаем гражданам СНГ и других стран оформить краткосрочный ВНЖ (Kısa Dönem İkamet İzni) для комфортного проживания в Турции.",
        d1: "Загранпаспорт: Оригинал + копия всех страниц.",
        d2: "Виза или штамп: Действующая виза или штамп о въезде.",
        d3: "Подтверждение проживания: Договор аренды жилья (нотариально заверенный) или документ о собственности.",
        d4: "Фотографии: 4 биометрические фотографии.",
        d5: "Медицинская страховка: Частная медицинская страховка (Özel Sağlık Sigortası), покрывающая весь срок ВНЖ.",
        d6: "Заявление: Заявление на ВНЖ (заполняется онлайн через e-ikamet.goc.gov.tr).",
        d7: "Пошлина: Квитанция об оплате государственной пошлины (harç).",
        d8: "Справка о несудимости: Требуется для ВНЖ сроком от 1 года (апостиль + нотариальный перевод).",
        btn: "Получить список документов под вашу ситуацию"
      },
      rules: {
        title: "Правила подачи документов",
        desc: "Все иностранные документы должны иметь апостиль и нотариальный перевод на турецкий язык. Запись на подачу осуществляется через систему E-Randevu (электронная запись на приём в Управление по делам иностранцев). Мы полностью берём на себя подготовку документов, переводы, страховку и запись для обоих сегментов."
      }
    },
    advantages: {
      title: "Почему выбирают нас",
      subtitle: "Мы берем на себя общение с государственными органами, чтобы вы могли спокойно жить и работать в Турции.",
      a1: { title: "Полный контроль процесса", desc: "Мы контролируем каждый шаг от первичной консультации до того момента, когда вы получите готовые документы на руки." },
      a2: { title: "Экономия вашего времени", desc: "Вам не придется самостоятельно переводить инструкции, разбираться в бюрократии и стоять в многочасовых очередях." },
      a3: { title: "Прозрачная стоимость", desc: "Вы заранее и точно до копейки знаете стоимость всех услуг без скрытых налогов и неожиданных переплат в процессе." },
      a4: { title: "Актуальное знание закона", desc: "Мы непрерывно следим за всеми изменениями в миграционном законодательстве Турции и применяем их на практике." }
    },
    faq: {
      title: "Часто задаваемые вопросы",
      q1: { q: "Сколько времени занимает оформление ВНЖ?", a: "Сроки рассмотрения зависят от загруженности Управления по делам иностранцев (İl Göç İdaresi Müdürlüğü). В среднем процесс занимает от нескольких недель до нескольких месяцев с момента подачи заявления." },
      q2: { q: "Нужна ли мне медицинская страховка для ВНЖ?", a: "Да, для получения краткосрочного ВНЖ обязательно наличие частной медицинской страховки (Özel Sağlık Sigortası). Она должна покрывать весь запрашиваемый период вашего пребывания." },
      q3: { q: "Что такое апостиль и когда он нужен?", a: "Апостиль (Apostil) — это международный штамп, подтверждающий законность документа. Он потребуется для ваших свидетельств о рождении, браке и дипломов при предоставлении их в государственные органы Турции." },
      q4: { q: "Можете ли вы перевести мои документы?", a: "Да, мы делаем профессиональные переводы с русского, украинского и английского на турецкий язык. Все переводы официально заверяются турецким нотариусом." }
    },
    contact: {
      title: "Готовы начать оформление?",
      subtitle: "Оставьте заявку — мы свяжемся в течение часа, чтобы обсудить вашу ситуацию и предложить решение.",
      btn1: "Написать в WhatsApp",
      btn2: "Мы в Instagram"
    },
    footer: {
      rights: "Все права защищены."
    }
  },
  tr: {
    header: { services: "Hizmetler", writeWhatsApp: "WhatsApp'tan Yazın", instagram: "Instagram" },
    hero: {
      title: "Türkiye'de İkamet İzni ve Belge Yasallaştırma",
      subtitle: "Yabancılar için güvenilir ortak. Bürokratik süreçleri stressiz atlatmanıza yardımcı oluyoruz.",
      consultBtn: "WhatsApp'tan Yazın",
      servicesBtn: "Tüm Hizmetler",
      badgeTitle: "Stressiz",
      badgeSubtitle: "Yasalara uygun çalışıyoruz",
      imgText: "Türkiye'de İkamet İzni"
    },
    services: {
      title: "Hizmetlerimiz",
      s1: { title: "İkamet İzni", desc: "Kısa Dönem ve Uzun Dönem İkamet İzni. Belge hazırlama, başvuru, tüm aşamalarda eşlik etme." },
      s2: { title: "Özel Sağlık Sigortası", desc: "İkamet izni başvurularında Türk devlet kurumları tarafından kabul edilen poliçe (Özel Sağlık Sigortası) düzenlenmesi." },
      s3: { title: "Noter Onaylı Tercüme", desc: "Rusça, Ukraynaca ve İngilizceden Türkçeye ve tam tersi resmi noter onaylı evrak çevirisi." },
      s4: { title: "Apostil", desc: "Yabancı belgelerin Türkiye'de resmi makamlarca resmi kullanımı için yasallaştırılması (Apostil)." },
      s5: { title: "Konsolosluk Onayı", desc: "Türkiye'deki çeşitli ülkelerin konsoloslukları aracılığıyla belgelerin yasallaştırılması ve onaylanması konusunda yardım." },
      s6: { title: "E-Randevu", desc: "İl Göç İdaresi Müdürlüğü ve diğer kurumlardan randevu (E-Randevu) alınması." }
    },
    programs: {
      title: "İkamet İzni Programları",
      subtitle: "Hem anavatana dönenlerle hem de yabancı uyruklularla çalışarak istenilen program için tam belge paketinin toplanmasına yardımcı oluyoruz.",
      docsTitle: "Gerekli Belgeler",
      p1: {
        title: "Ahıska Türkleri için ayrı program",
        desc: "Türkiye, Ahıska Türklerini akraba topluluk olarak tanımaktadır. Uzun Dönem İkamet İzni'ne ve daha sonra Türk Vatandaşlığı Kanununun 12. maddesi uyarınca vatandaşlığa başvurabilirsiniz.",
        d1: "Kendi doğum belgesi",
        d2: "Baba doğum belgesi",
        d3: "Dede doğum belgesi veya Arşiv belgesi",
        d4: "Nikah belgesi — sadece başvuru sahibi evli ise",
        note: "Tüm belgeler verildikleri ülkede apostillenmiş olmalı veya asılları sunulmalıdır. Kibar Halid, listelenen tüm belgelerin apostili ve noter onaylı tercümesi konusunda yardımcı olur.",
        btn: "Hangi belgelere ihtiyacınız olduğunu öğrenin"
      },
      p2: {
        title: "Rusya, Ukrayna ve diğer ülke vatandaşları için",
        desc: "BDT (CIS) ve diğer ülke vatandaşlarına Türkiye'de rahat bir yaşam için Kısa Dönem İkamet İzni almalarında yardımcı oluyoruz.",
        d1: "Pasaport: Aslı + tüm sayfaların fotokopisi.",
        d2: "Vize veya Kaşe: Geçerli vize veya giriş kaşesi.",
        d3: "İkametgah Belgesi: Kira sözleşmesi (noter onaylı) veya tapu.",
        d4: "Fotoğraf: 4 adet biyometrik fotoğraf.",
        d5: "Sağlık Sigortası: İkamet izni süresini kapsayan Özel Sağlık Sigortası.",
        d6: "Başvuru Formu: İkamet izni başvuru formu (e-ikamet.goc.gov.tr üzerinden doldurulur).",
        d7: "Harç Makbuzu: Devlet harcının ödendiğine dair makbuz.",
        d8: "Adli Sicil Kaydı: 1 yıl ve üzeri ikamet izni için gereklidir (apostil + noter onaylı tercüme).",
        btn: "Durumunuza uygun belge listesi alın"
      },
      rules: {
        title: "Belge Teslim Kuralları",
        desc: "Tüm yabancı belgeler apostilli ve Türkçe noter onaylı tercümeli olmalıdır. Başvuru randevusu E-Randevu sistemi üzerinden alınır. Her iki segment için belge hazırlama, tercüme, sigorta ve randevu işlemlerini tamamen biz üstleniyoruz."
      }
    },
    advantages: {
      title: "Neden Bizi Seçmelisiniz",
      subtitle: "Türkiye'de huzur içinde yaşayıp çalışabilmeniz için devlet kurumlarıyla iletişimi biz üstleniyoruz.",
      a1: { title: "Sürecin Tam Kontrolü", desc: "İlk danışmadan hazır belgeleri elinize aldığınız ana kadar her adımı kontrol ediyoruz." },
      a2: { title: "Zamandan Tasarruf", desc: "Talimatları kendiniz çevirmek, bürokrasiyle uğraşmak ve saatlerce kuyrukta beklemek zorunda değilsiniz." },
      a3: { title: "Şeffaf Fiyatlandırma", desc: "Süreçte gizli vergiler veya beklenmedik sürprizler olmadan tüm hizmetlerin maliyetini önceden tam olarak bilirsiniz." },
      a4: { title: "Güncel Mevzuat Bilgisi", desc: "Türkiye'nin göçmenlik mevzuatındaki tüm değişiklikleri sürekli izliyor ve uygulamaya döküyoruz." }
    },
    faq: {
      title: "Sıkça Sorulan Sorular",
      q1: { q: "İkamet İzni almak ne kadar sürer?", a: "Değerlendirme süresi, İl Göç İdaresi Müdürlüğü'nün yoğunluğuna bağlıdır. Ortalama olarak, başvuru yapıldıktan sonra süreç birkaç haftadan birkaç aya kadar sürer." },
      q2: { q: "İkamet izni için sağlık sigortasına ihtiyacım var mı?", a: "Evet, kısa dönem ikamet izni (Kısa Dönem İkamet İzni) alabilmek için Özel Sağlık Sigortası zorunludur. Talep ettiğiniz tüm kalış süresini kapsamalıdır." },
      q3: { q: "Apostil nedir ve ne zaman gereklidir?", a: "Apostil, bir belgenin yasallığını doğrulayan uluslararası bir damgadır. Doğum, evlilik ve diploma belgelerinizi Türkiye'deki devlet kurumlarına sunarken gereklidir." },
      q4: { q: "Belgelerimi tercüme edebilir misiniz?", a: "Evet, Rusça, Ukraynaca ve İngilizceden Türkçeye profesyonel tercümeler yapıyoruz. Tüm çeviriler resmi olarak Türk noteri tarafından onaylanmaktadır." }
    },
    contact: {
      title: "İşlemlere başlamaya hazır mısınız?",
      subtitle: "Başvuru bırakın, durumunuzu görüşmek ve bir çözüm sunmak için bir saat içinde sizinle iletişime geçeceğiz.",
      btn1: "WhatsApp'tan Yazın",
      btn2: "Instagram'dayız"
    },
    footer: {
      rights: "Tüm hakları saklıdır."
    }
  }
};
