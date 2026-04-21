import { Link } from 'react-router-dom';
import SeoHead from '../seo/SeoHead';

const heroBgImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwadKmki42Ur81n9GndQ2Hkj2TNDBP6lcrscyOJM4VCwkBru90L4oxwuySF03jIQFPx3D95u9r7RLJ4rQfv2L7rEunJdDxWh0SvDhI7KPKYAk6R0PJCaBPM22vbL0YWo1k5Xj0RYtJhQPaYXPDFNEiRYHIQ1zt9IKJ-hLV46tEOcbtDJ3iCEVOU2rzNNnXQ9rBnkZsXQrdxeEiINIo2fntLK89tU1-MKCtxjoGvkdqO6brRqPoSqg_P_WXxIVpF3FWpNZJQ5sfoss';
const rollupImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkp48A4f_8bcZdsMtJEWVAmetZkbl6fI_22km68bh4QaMIgnmSPIgd5X24uyHWGr9bcO-fAh0-Bsgff9mk3DYIVltc6crHx2TY533VRsAmWup9IgAebPoajhJs4LzMVHH-RfrhRVJsZGozF0OQ70YBR_xgNyRSCGz3Xxi_BDgqUN_lu-KV7qDcc0UaZlsNPjH1ncAfdIklyDmmOQgw33PR_Idg2XUCCBcBzWeAQDa6ULpwx3klja1wYll4VKnFKz6zF5ChVwAM-_Y';
const infostenaImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0ui3P5aek_e1OBivPWY2-IW_KwitiUnJS9HXa4OGn90DTt5dCPRIizENpRpaxO4a8wwVUpYfipc8le3tOBeXVhrnvNtoJs_k2mFyWX3c7IInZ3-gnXOqYlZ4bYXtBZtJtekAgmtqYnNwjyDGtsZGilKGAGLDGoZEOw6fiu757c5MUW3uMD2mkVxPitGzEJkvYJK53zhANT1NOwVI7Te0vVx5vN2OUDyncwfzQi1tuQ1d64-qs39G88oaSTWoGVrH_I-sTL7PRxpM';

function PrezentacniStenyDetail() {
  return (
    <>
      <SeoHead page="prezentacni-steny" />

      {/* Hero – full-height, image background, text bottom-anchored */}
      <section className="relative min-h-[700px] lg:min-h-[870px] flex flex-col justify-end px-8 md:px-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000"
            src={heroBgImg}
            alt="Prezentační stěna na firemním eventu – sublimační tisk, stabilní duralová konstrukce"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
        </div>
        <div className="max-w-screen-xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end pt-32">
            <div className="md:col-span-8">
              <span className="section-label text-primary mb-4 block">Expozice &amp; Eventy</span>
              <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] text-on-surface mb-8">
                Prezentační stěny <br />&amp; Rollupy
              </h1>
            </div>
            <div className="md:col-span-4 md:border-l border-outline-variant/30 md:pl-12 pb-2">
              <p className="text-on-surface-variant text-lg leading-relaxed max-w-sm font-light">
                Od rollupu po skládací prezentační infostěny například velikosti 4×2 m. Špičkový tisk, stabilní konstrukce.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bento grid */}
      <section className="py-24 px-8 md:px-24 bg-surface">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

            {/* Large feature card – rollup */}
            <div className="md:col-span-2 md:row-span-2 bg-surface-container-low group overflow-hidden">
              <div className="h-[600px] overflow-hidden relative">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={rollupImg}
                  alt="Premium rollup – hliníkový mechanismus s textilovým potiskem v minimalistickém showroomu"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold tracking-tight mb-2">Premium Rollup</h3>
                <p className="text-on-surface-variant uppercase text-xs tracking-widest">Kód produktu: PR-100</p>
              </div>
            </div>

            {/* Infostěna */}
            <div className="md:col-span-2 bg-surface-container-low flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 p-8">
                <h3 className="text-xl font-bold tracking-tight mb-3">Infostěny 4×2 m</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6 font-light">
                  Velkoformátové řešení pro konference a showroomy. Rychlá montáž bez nářadí.
                </p>
                <Link
                  to="/poptavka"
                  className="text-primary font-bold text-sm border-b-2 border-primary/20 pb-1"
                >
                  Specifikace materiálu
                </Link>
              </div>
              <div className="w-full md:w-1/2 h-full min-h-[300px]">
                <img
                  className="w-full h-full object-cover grayscale"
                  src={infostenaImg}
                  alt="Velká prezentační infostěna 4x2m v moderním kancelářském atriu"
                />
              </div>
            </div>

            {/* Spec tile – Stabilita */}
            <div className="md:col-span-1 bg-surface-container-highest p-8 flex flex-col justify-between aspect-square">
              <span
                className="material-symbols-outlined text-primary text-4xl"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                architecture
              </span>
              <div>
                <h3 className="font-bold mb-2">Stabilita</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Duralová konstrukce testovaná na stovky sestavení.
                </p>
              </div>
            </div>

            {/* Spec tile – Věrnost barev (primary bg) */}
            <div className="md:col-span-1 bg-primary p-8 flex flex-col justify-between aspect-square">
              <span
                className="material-symbols-outlined text-white text-4xl"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                print
              </span>
              <div>
                <h3 className="font-bold text-white mb-2">Věrnost barev</h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  Špičková subli-tisková technologie pro zářivé odstíny.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Form section */}
      <section className="py-24 px-8 md:px-24 bg-surface-container-low">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">

          {/* Left panel */}
          <div>
            <h2 className="text-5xl font-extrabold tracking-tighter mb-8">Poptávkový formulář</h2>
            <p className="text-on-surface-variant mb-12 max-w-md font-light">
              Máte specifický požadavek na rozměr nebo materiál? Vyplňte formulář a náš specialista se vám ozve s kalkulací do 24 hodin.
            </p>
            <div className="space-y-8">
              {[
                {
                  icon: 'verified',
                  title: 'Garance kvality',
                  text: 'Všechny tisky procházejí výstupní kontrolou.',
                },
                {
                  icon: 'local_shipping',
                  title: 'Expresní doprava',
                  text: 'Možnost doručení do 48 hodin po celé ČR.',
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
                    <h4 className="font-bold text-sm uppercase tracking-wide">{title}</h4>
                    <p className="text-xs text-on-surface-variant">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-surface p-12 shadow-[0_40px_80px_-15px_rgba(0,23,75,0.06)]">
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative pt-4">
                  <label className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest block mb-2">
                    Jméno a příjmení
                  </label>
                  <input
                    type="text"
                    className="w-full border-0 border-b border-outline-variant bg-transparent py-4 focus:ring-0 focus:border-primary transition-all font-medium placeholder:text-outline text-sm"
                    placeholder="Jan Novák"
                  />
                </div>
                <div className="relative pt-4">
                  <label className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest block mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="w-full border-0 border-b border-outline-variant bg-transparent py-4 focus:ring-0 focus:border-primary transition-all font-medium placeholder:text-outline text-sm"
                    placeholder="jan@firma.cz"
                  />
                </div>
              </div>
              <div className="relative pt-4">
                <label className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest block mb-2">
                  Typ produktu
                </label>
                <select className="w-full border-0 border-b border-outline-variant bg-transparent py-4 focus:ring-0 focus:border-primary transition-all font-medium appearance-none text-sm">
                  <option>Rollup Premium</option>
                  <option>Infostěna 4×2 m</option>
                  <option>Skládací stěna (atyp)</option>
                </select>
              </div>
              <div className="relative pt-4">
                <label className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest block mb-2">
                  Zpráva / Specifikace
                </label>
                <textarea
                  rows="4"
                  className="w-full border-0 border-b border-outline-variant bg-transparent py-4 focus:ring-0 focus:border-primary transition-all font-medium placeholder:text-outline resize-none text-sm"
                  placeholder="Např. počet kusů, termín dodání..."
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
            Prezentační stěny a rollupy na míru
          </h2>
          <div className="space-y-6 text-on-surface-variant leading-relaxed">
            <p>
              Prezentační stěny a rollupy jsou nepostradatelným nástrojem každé firmy, která se účastní veletrhů, konferencí nebo pořádá firemní eventy. V eTiskarna nabízíme kompletní portfolio — od jednoduchých Premium Rollupů po velkoformátové skládací infostěny formátu 4×2 m.
            </p>
            <p>
              Tisky provádíme špičkovou sublimační technologií, která zaručuje živé barvy a ostrost detailů i na velkých plochách. Konstrukce jsou vyrobeny z duralových profilů testovaných na stovky sestavení — rychlá montáž bez nářadí je samozřejmostí. Textilní potisk je lehký, snadno přepravitelný a odolný vůči běžnému poškrábání.
            </p>
            <p>
              Realizujeme i atypické rozměry a nestandardní tvary stěn. Kalkulaci připravíme do 24 hodin, expresní doručení po celé ČR je možné do 48 hodin od schválení podkladů.
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
            Popište nám typ stěny, rozměr a termín. Náš specialista vás do 24 hodin kontaktuje s kalkulací na míru.
          </p>
          <Link
            to="/poptavka"
            className="precision-gradient text-white px-12 py-5 text-sm font-bold tracking-[0.2em] uppercase active:scale-95 transition-transform inline-block"
          >
            Poptávka prezentačních stěn
          </Link>
        </div>
      </section>
    </>
  );
}

export default PrezentacniStenyDetail;
