import { Link } from 'react-router-dom';
import SeoHead from '../seo/SeoHead';
import MobileBottomNav from '../components/MobileBottomNav';

const heroImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJ3eMQDh80EG3vO55ZbL1Kbe-aLRrkrK-_JqUINqOaCfbpo3rlRfJurYHvQxjvV6fNDiIujpf7I2AGJi6RnqHD5JUBI8JAgyoPZtTIurtpTRu7lmJU_xxAeY2NjIxPbnQj1xrr6EWEoG8TP88KziJgGGj_4qQncCW4VUkA8_cWZeyWTYVOyk-mM3W_Bmc9bw_vZcFqmMZSc-oI2od9ypUPsRU9nW-sMctneHbO2B3P-gJj3sAIZK6fJCV-hhGypogREFTAvbOwE0E';
const detailImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_1QVB8PHcCr2CpaFZ6z_eZzKfTO8bFzPmB-EzQQbc7QJmxeyFcvD-yUty1aaQlMp0KhLOrejqQZHQUxJGrLsBYfcHPq5B_ZYL1Aga77_SdcL10OWWaMfXqpbSFw71sxNOEDYRlYIRV4kliMwbyMrBS8aov3Ln3A-eSrBLIJ3_qx4xhAgkwfAja6oK_7VL_C_PBEgJnRBl0U7Ys39fsPXePIhpq9Ro-g05la-_PP-g8ncVfeceB-IOC_3oaIDO_RoZPsrs1fRmCs0';
const installImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmeKsmdF4tfv89ef4bpLoz0XescBSQglBbvfDo1GTYv27v832isnuQ4MqKF5ye_0saEmVVGm9xZQxXPor_Ml8I-d9NnbYhklFj0Ae5AMgzStwXK9SOR4Xv-srJZADJzY3OVzihITLvWr2biW5L95VjhbpMm2dmZxMt439A1B7rLiNQSiITP0W6yyhygSxc5LP3CpCXbjC_u05Z-aTj7OezE_FVv5hkcC-r4Bf7k-5PYCiomTYYl8kHc2Q1TF4KIyq4IQWKKVG9_nU';

function TapetyDetail() {
  return (
    <>
      <SeoHead page="tapety" />

      {/* Hero – editorial split: image 7/12 + text panel 5/12 */}
      <section className="relative min-h-screen flex flex-col md:flex-row items-stretch overflow-hidden pt-24 md:pt-0">
        {/* Image side */}
        <div className="w-full md:w-7/12 relative overflow-hidden h-[614px] md:h-auto md:min-h-screen">
          <img
            className="w-full h-full object-cover"
            src={heroImg}
            alt="Moderní minimalistický interiér s velkoformátovou tapetou na míru – květ v tlumených tónech"
          />
          <div className="absolute bottom-12 left-12 bg-surface/80 backdrop-blur-md p-8 max-w-sm hidden md:block">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-primary">Detail textury</p>
            <p className="text-on-surface-variant leading-relaxed font-light">
              Naše tapety vynikají hlubokou strukturou, která pohlcuje světlo a dodává stěnám unikátní hloubku.
            </p>
          </div>
        </div>

        {/* Text side */}
        <div className="w-full md:w-5/12 bg-surface flex flex-col justify-center px-8 md:px-24 py-16">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-on-surface-variant mb-6 inline-block">
            Interiérový design
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-none mb-8 text-on-surface">
            Tapety.
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant leading-relaxed mb-12 font-light">
            Vytvořte si tapety s vlastním designem, tisk na kvalitní papír v libovolném rozměru.
          </p>
          <div className="flex flex-col gap-6">
            {[
              'Vlastní rozměry na míru',
              'Prémiové papíry z EU',
              'Ekologické barvy',
            ].map((label) => (
              <div key={label} className="flex items-center gap-4 group">
                <div className="w-12 h-px bg-primary transition-all group-hover:w-20" />
                <span className="font-bold uppercase tracking-widest text-xs">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product details – asymmetric grid */}
      <section className="py-32 px-8 md:px-24 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* Materials card */}
          <div className="md:col-span-4 bg-surface-container-low p-12 flex flex-col justify-end min-h-[400px]">
            <h3 className="text-2xl font-bold tracking-tight mb-4">Materiály</h3>
            <p className="text-on-surface-variant mb-8 font-light">
              Vybírejte z vliesových, vinylových nebo textilních povrchů. Každý materiál má svou unikátní charakteristiku.
            </p>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-surface-container-highest border border-outline-variant/20" />
              <div className="w-12 h-12 bg-surface-container-high border border-outline-variant/20" />
              <div className="w-12 h-12 bg-surface-container border border-outline-variant/20" />
            </div>
          </div>

          {/* Detail texture image */}
          <div className="md:col-span-8 overflow-hidden">
            <img
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              src={detailImg}
              alt="Extrémní detail struktury tapety – vlákna papíru a saturace inkoustu v geometrickém vzoru"
            />
          </div>

          {/* Installation image */}
          <div className="md:col-span-7 h-[500px] relative overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={installImg}
              alt="Profesionální instalace tapetového pásu na čistou světlou stěnu v luxusním bytě"
            />
          </div>

          {/* Claim text */}
          <div className="md:col-span-5 flex flex-col justify-center">
            <h2 className="text-4xl font-extrabold tracking-tighter mb-8">
              Precizní výroba pro náročné tvůrce.
            </h2>
            <p className="text-on-surface-variant leading-loose mb-8 font-light">
              Využíváme nejnovější technologie digitálního tisku, které zaručují barevnou stálost a ostrost detailů. Naše tapety jsou omyvatelné a odolné vůči UV záření, což zajišťuje jejich dlouhověkost v komerčních i rezidenčních prostorech.
            </p>
            <Link
              to="/poptavka"
              className="text-primary font-bold uppercase tracking-widest text-xs inline-flex items-center gap-2 group"
            >
              Technická specifikace
              <span
                className="material-symbols-outlined transition-transform group-hover:translate-x-1"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                arrow_forward
              </span>
            </Link>
          </div>

        </div>
      </section>

      {/* Form section */}
      <section className="bg-surface-container-low py-32 px-8 md:px-24">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">

          {/* Left panel */}
          <div>
            <h2 className="text-5xl font-extrabold tracking-tighter mb-8 leading-none">
              Poptávkový formulář
            </h2>
            <p className="text-on-surface-variant text-lg mb-12 font-light">
              Máte specifický požadavek nebo potřebujete poradit s výběrem materiálu? Vyplňte formulář a my se vám ozveme s nezávaznou nabídkou do 24 hodin.
            </p>
            <div className="space-y-8">
              {[
                {
                  icon: 'verified',
                  title: 'Konzultace zdarma',
                  text: 'Pomůžeme vám s přípravou tiskových dat.',
                },
                {
                  icon: 'local_shipping',
                  title: 'Expresní doručení',
                  text: 'Tapety odesíláme do 5 pracovních dnů.',
                },
              ].map(({ icon, title, text }) => (
                <div key={icon} className="flex items-start gap-4">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    {icon}
                  </span>
                  <div>
                    <h4 className="font-bold">{title}</h4>
                    <p className="text-sm text-on-surface-variant">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-surface-container-lowest p-12 shadow-2xl">
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant block">
                    Jméno a příjmení
                  </label>
                  <input
                    className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 transition-colors py-2 outline-none text-sm"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant block">
                    E-mail
                  </label>
                  <input
                    className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 transition-colors py-2 outline-none text-sm"
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant block">
                  Rozměry (Šířka × Výška v cm)
                </label>
                <input
                  className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 transition-colors py-2 outline-none text-sm"
                  placeholder="např. 300 × 250"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant block">
                  Vaše zpráva
                </label>
                <textarea
                  className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 transition-colors py-2 outline-none resize-none text-sm"
                  rows="4"
                />
              </div>
              <Link
                to="/poptavka"
                className="block w-full precision-gradient text-white py-6 font-bold uppercase tracking-[0.2em] text-xs text-center hover:opacity-90 transition-all active:scale-[0.98]"
              >
                Odeslat poptávku
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO text block */}
      <section className="py-24 px-8 md:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-10">
            Tapety s vlastním designem na míru
          </h2>
          <div className="space-y-6 text-on-surface-variant leading-relaxed">
            <p>
              Tapety s vlastním potiskem jsou stále populárnějším způsobem, jak dodat interiéru originální charakter. Ať jde o firemní showroom, restauraci nebo bytový prostor, zakázková tapeta promění stěnu v grafický prvek, který na sebe strhne pozornost.
            </p>
            <p>
              V eTiskarna tiskneme tapety na prémiové vliesové, vinylové a textilní materiály z evropských zdrojů. Digitální tisk s ekologickými barvami zaručuje barevnou stálost, ostrost detailů a omyvatelný povrch odolný vůči UV záření. Realizujeme libovolný rozměr — od jednoho pruhu po kompletní tapetaci celé místnosti.
            </p>
            <p>
              Pomůžeme vám i s přípravou tiskových podkladů, konzultace je zdarma. Hotové tapety odesíláme do 5 pracovních dnů. Kalkulaci připravíme do 24 hodin po odeslání poptávky.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-surface-container-low px-8 md:px-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
            Máte konkrétní projekt?
          </h2>
          <p className="text-on-surface-variant text-lg mb-10 max-w-xl mx-auto">
            Popište nám rozměr, materiál a grafiku. Náš specialista vás do 24 hodin kontaktuje s kalkulací na míru.
          </p>
          <Link
            to="/poptavka"
            className="precision-gradient text-white px-12 py-5 text-sm font-bold tracking-[0.2em] uppercase active:scale-95 transition-transform inline-block"
          >
            Poptávka tapet
          </Link>
        </div>
      </section>
      <MobileBottomNav />
    </>
  );
}

export default TapetyDetail;
