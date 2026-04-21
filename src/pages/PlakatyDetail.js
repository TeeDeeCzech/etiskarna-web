import { Link } from 'react-router-dom';
import SeoHead from '../seo/SeoHead';
import heroImg from '../images/tisk_plakaty_etiskarna.avif';

function PlakatyDetail() {
  return (
    <>
      <SeoHead page="plakaty" />

      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-surface flex flex-col md:flex-row items-stretch pt-20">
        <div className="w-full md:w-5/12 px-8 md:px-20 py-20 flex flex-col justify-center">
          <span className="section-label text-primary">Velkoformátový tisk</span>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-on-background leading-[0.9] mb-8">
            Tisk plakátů<br />na míru
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-md font-light">
            Tisk plakátů pro firmy, galerie, eventy i kulturní akce. Formáty od A3 po XXL — ofsetový i velkoformátový digitální tisk, různé gramáže papíru a povrchové úpravy.
          </p>
        </div>
        <div className="w-full md:w-7/12 relative overflow-hidden h-[480px] md:h-auto">
          <img
            className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-1000 shadow-2xl"
            src={heroImg}
            alt="Tisk plakátů eTiskarna – ukázka velkoformátové tiskové produkce"
          />
          <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md p-6 max-w-xs shadow-xl hidden md:block">
            <p className="text-[10px] tracking-widest text-on-surface-variant uppercase mb-2">Technická specifikace</p>
            <p className="text-xs font-bold leading-tight">Vibrantní barvy, ultra-vysoké rozlišení pro galerijní kvalitu.</p>
          </div>
        </div>
      </section>

      {/* Formats Grid */}
      <section className="bg-surface-container-low py-24 px-8 md:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 items-end">
          <div className="p-8 bg-surface-container-lowest h-48 md:h-64 flex flex-col justify-between group hover:bg-primary transition-colors duration-500">
            <span className="text-4xl font-light group-hover:text-on-primary">A3</span>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant group-hover:text-on-primary/70">Standard</p>
              <p className="font-bold group-hover:text-on-primary">297 × 420 mm</p>
            </div>
          </div>
          <div className="p-8 bg-surface-container-high h-64 md:h-80 flex flex-col justify-between group hover:bg-primary transition-colors duration-500">
            <span className="text-5xl font-light group-hover:text-on-primary">A2</span>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant group-hover:text-on-primary/70">Medium</p>
              <p className="font-bold group-hover:text-on-primary">420 × 594 mm</p>
            </div>
          </div>
          <div className="p-8 bg-surface-container-highest h-80 md:h-96 flex flex-col justify-between group hover:bg-primary transition-colors duration-500">
            <span className="text-6xl font-light group-hover:text-on-primary">A1</span>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant group-hover:text-on-primary/70">Large</p>
              <p className="font-bold group-hover:text-on-primary">594 × 841 mm</p>
            </div>
          </div>
          <div className="p-8 bg-surface-container-low border border-outline-variant/20 h-96 md:h-[30rem] flex flex-col justify-between group hover:bg-primary transition-colors duration-500">
            <span className="text-6xl md:text-8xl font-black tracking-tighter group-hover:text-on-primary">XXL</span>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant group-hover:text-on-primary/70">Velkoformátový</p>
              <p className="font-bold group-hover:text-on-primary">1000 × 1500 mm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Split */}
      <section className="py-32 px-8 md:px-24 grid grid-cols-1 md:grid-cols-2 gap-24 items-center max-w-7xl mx-auto">
        <div className="relative">
          <img
            className="w-full aspect-[4/5] object-cover shadow-2xl"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ9bLjp93KvVn3jJbnCtHzg23jRmqmDV4xCdcYlhMq1cYSbnz4Vv4SqUViCqTo9VDGJteL-YoCGxcEi5SZ3Tfr30JzZ_eI3l_Jlh0V2dFgvEWmNQqaqMTzaKkU9PkEf5-QVOxQhBeNbvA9OoIEfGAyVg_4BFnXj-CasnBc_CHjbWnNI8y_z6l0vwyy50hFB6ZLUibHeRMCqzXoXJXh-B8QEv43dY4V5cjEQ1HBMFXFbSu8flVEzsd6pB7IcPx2OwZPdi1K1LtsX_A"
            alt="Detail CMYK tisku plakátů – sytost barev a ostrost na kvalitním papíru"
          />
          <div className="absolute -bottom-10 -right-10 w-56 bg-primary flex items-center justify-center p-8 hidden md:flex">
            <p className="text-on-primary font-black text-lg leading-tight tracking-tighter text-center">
              VELKOFORMÁTOVÁ DIGITÁLNÍ TECHNOLOGIE
            </p>
          </div>
        </div>
        <div className="space-y-12">
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-6">Prémiové materiály pro tisk plakátů</h2>
            <p className="text-on-surface-variant font-light leading-relaxed text-lg">
              Naše technologie zaručuje barevnou stálost a ostrost, kterou vyžadují nejnáročnější studia a galerijní prezentace. Tiskneme na papíry od 120g matných po 250g saténové archivy s maximálně věrnou reprodukcí barev.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="p-8 bg-surface-container-low hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 block"
                style={{ fontVariationSettings: "'FILL' 1" }}>
                high_quality
              </span>
              <h3 className="font-bold text-sm uppercase tracking-widest mb-2">Vysoké rozlišení</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">Fotorealistický výstup pro velkoformátový i standardní tisk plakátů.</p>
            </div>
            <div className="p-8 bg-surface-container-low hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 block"
                style={{ fontVariationSettings: "'FILL' 1" }}>
                palette
              </span>
              <h3 className="font-bold text-sm uppercase tracking-widest mb-2">Maximální gamut</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">Vícebarevný tisk s rozšířeným barevným prostorem a ISO kalibrací.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Configurator */}
      <section className="px-8 md:px-24 mb-32">
        <div className="bg-white/80 backdrop-blur-xl p-12 grid grid-cols-1 md:grid-cols-4 gap-8 shadow-2xl border border-surface-variant">
          <div className="md:col-span-3">
            <h2 className="text-xs font-black tracking-widest uppercase mb-8">
              Konfigurátor rychlé poptávky
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">
                  Formát
                </label>
                <select className="w-full bg-surface-container-low border-0 text-sm font-bold p-4 focus:ring-2 focus:ring-primary">
                  <option>A3 (297×420 mm)</option>
                  <option>A2 (420×594 mm)</option>
                  <option>A1 (594×841 mm)</option>
                  <option>B1 (700×1000 mm)</option>
                  <option>XXL (1000×1500 mm)</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">
                  Papír
                </label>
                <select className="w-full bg-surface-container-low border-0 text-sm font-bold p-4 focus:ring-2 focus:ring-primary">
                  <option>170g Křída Mat</option>
                  <option>200g Křída Lesk</option>
                  <option>250g Offset</option>
                  <option>135g Křída Mat</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">
                  Množství
                </label>
                <input
                  type="number"
                  defaultValue="100"
                  className="w-full bg-surface-container-low border-0 text-sm font-bold p-4 focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>
          <div className="bg-primary p-8 flex flex-col justify-between items-start text-white">
            <span className="text-[10px] uppercase tracking-widest font-bold">
              Poptejte tento produkt
            </span>
            <p className="text-sm font-light opacity-80 my-4">
              Nastavte parametry a pošlete nám poptávku — ozveme se s kalkulací do 24 hodin.
            </p>
            <Link
              to="/poptavka"
              className="bg-white text-primary px-6 py-3 text-xs font-black uppercase tracking-widest hover:bg-surface-container-low transition-colors"
            >
              Odeslat poptávku
            </Link>
          </div>
        </div>
      </section>

      {/* SEO text block */}
      <section className="py-24 px-8 md:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-10">
            Tisk plakátů na míru
          </h2>
          <div className="space-y-6 text-on-surface-variant leading-relaxed">
            <p>
              Plakáty jsou jedním z nejsilnějších vizuálních komunikačních nástrojů. Využívají se pro kulturní akce, firemní prezentace, výstavy i outdoorové kampaně. V eTiskarna zajišťujeme tisk plakátů na míru — od standardních formátů A3 a A2 až po velkoformátové XXL tisky.
            </p>
            <p>
              Nabízíme ofsetový tisk pro velké náklady s maximální věrností barev i digitální velkoformátovou technologii pro menší série a expresní zakázky. Tiskneme na papíry různých gramáží s povrchem mat nebo lesk, případně na speciální saténové archivy.
            </p>
            <p>
              Pomůžeme vám vybrat správný formát, materiál a technologii — ať už potřebujete plakáty pro výstavu, event, obchod nebo marketingovou kampaň.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white">
        <img
          className="w-full h-[500px] md:h-[600px] object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgXHAPOarBlm8pLLkXI1SmWQiYB3sY-GFL8g5a7VgLwKwxmnqJVEoCGX4u2dtPziLB6RKVAp9pcAmh8ZnyEp5O5NSWEDCVEzdZdBlYCS0IwfZ_RryZwiJRnZpMmKGT3n26ZkbcSy6jJ9-RaJ78jhxSKDH4eNel0V5wc3ta-afTY944rwywyg8k5fpwTjPJCbN7pMRBYLTYD6W9r-YpSOL9v0uEXTrobhChoqDbqpat0mOObgYOdGqqEXRuY2QHJ_O9af8HHfMeWuU"
          alt="Tisk plakátů – velkoformátové plakáty na betonové stěně v galerijním prostředí"
        />
        <img
          className="w-full h-[500px] md:h-[600px] object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa5p3j5sptDkJiM_Np9Ctg1cRHwPoE3oEaDEiinsvI_J1WwpAUxdgqBqfCOXkrA3hClZ9fRacGD--kKokRcspf6zt5FWf6o_YP7kP5WP5PD7wfdyYzC73Arqea7lX1_FnKv5YJeW39tPYKPCD2LCKo4vEVEWAdn4sQKIVqe5HOqRFW1Z6fBqyc_Bh_ASHhrP5nzHsqkoUdJIDLl4Fq3B51G1UW_vSSswYL1Xf1lcz0d_WHoGbKdVf4C21C3LKfB9d5ecsAa30PuOU"
          alt="Hotový velkoformátový plakát v moderním interiéru s dramatickým osvětlením"
        />
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-surface-container-low px-8 md:px-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
            Máte konkrétní projekt?
          </h2>
          <p className="text-on-surface-variant text-lg mb-10 max-w-xl mx-auto">
            Popište nám vaši zakázku — formát, množství, účel. Náš specialista vás do 24 hodin kontaktuje s kalkulací na míru.
          </p>
          <Link
            to="/poptavka"
            className="precision-gradient text-white px-12 py-5 text-sm font-bold tracking-[0.2em] uppercase active:scale-95 transition-transform inline-block"
          >
            Poptávka tisku plakátů
          </Link>
        </div>
      </section>
    </>
  );
}

export default PlakatyDetail;
