import { Link } from 'react-router-dom';
import SeoHead from '../seo/SeoHead';
import MobileBottomNav from '../components/MobileBottomNav';

const heroImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAhfYnstle5lDg8Aqy0RsXeKTmaT-QIwRa1kuC6_M4luHCJ0h3yiFVMPmSxDaXPln5MuKxQplsVG6UndzclTtSdF1LaYy471thR1Zg-zF8DeECfwzF7woA7tkYjPsyNeotzntUIuVexOWO5F6YsndMpoWbdfk1jh1eLH79JmiP1YZbCOhAEXkm9lkPoGeF338OqhWH2ncKQbtppK26uaU5r_BHT7ImfbR-pJIccZEG9rloPIYCd6ozUNAdpF9wxFkD32di9X6rdJk';
const textileImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuw3bAgilPhveqbRW8jQmbHkKVclWO_N0K_HShm2i00nYDgzSctRGkoymHQBl-Ol7e7L2e95wRhFDY6E3Ni4zSiWYX2qgv8CZLiaR8qmCSqQJyKIINuK30JwVBHecDerVyb0dWp4NHasNUrpiX8yixBIoeRMTHMzrEwWkSZJu416s_1pux0726d7nNmiYWKm1YES8pgcJzRIcPyF24f9Pa5ubBoB-3VuXI20c6pdvSDuSaPgXZtAGVMjJ8KjDgaD8SnAbiClffIfc';

function TaskyDetail() {
  return (
    <>
      <SeoHead page="tasky" />

      {/* Hero */}
      <section className="px-8 md:px-24 py-16 pt-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 z-10">
          <span className="section-label text-primary">Kategorie / Tiskoviny</span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-none mb-8">
            Papírové<br />a textilní<br />tašky s potiskem
          </h1>
          <p className="text-on-surface-variant text-lg max-w-md leading-relaxed font-light mb-10">
            Od prémiových boutique tašek s laminací a zlatou ražbou po ekologické bavlněné tote bags s sítotiskem. Vaše značka na každém kroku zákazníka.
          </p>
          <div className="flex gap-4">
            <Link
              to="/poptavka"
              className="precision-gradient text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-opacity inline-block"
            >
              Odeslat poptávku
            </Link>
          </div>
        </div>
        <div className="lg:col-span-7 relative h-[500px] md:h-[600px] overflow-hidden">
          <img
            className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-1000 shadow-2xl"
            src={heroImg}
            alt="Tisk tašek eTiskarna – prémiové papírové tašky s potiskem a bavlněnými uchy"
          />
        </div>
      </section>

      {/* Product Categories Bento */}
      <section className="px-8 md:px-24 py-24 bg-surface-container-low">
        <div className="mb-16">
          <h2 className="text-3xl font-black tracking-tighter uppercase mb-3">Technická dokonalost.</h2>
          <div className="w-24 h-1 bg-primary"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface p-12 flex flex-col justify-between h-[480px] hover:bg-surface-container-high transition-colors group">
            <div>
              <span
                className="material-symbols-outlined text-4xl text-primary mb-6 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                shopping_bag
              </span>
              <h3 className="text-2xl font-bold tracking-tight mb-4">Luxusní papírové tašky</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm font-light">
                Těžký papír 250 g/m² s matnou nebo lesklou laminací, horkou ražbou (zlatá/stříbrná fólie) a bavlněnými nebo kroucenými papírovými uchy. Navrženo pro prémiové boutique zážitky.
              </p>
            </div>
            <Link to="/poptavka" className="text-primary font-bold uppercase tracking-widest text-xs border-b border-primary w-fit pb-1 group-hover:translate-x-2 transition-transform inline-block">
              Specifikace a rozměry
            </Link>
          </div>
          <div className="bg-surface p-12 flex flex-col justify-between h-[480px] hover:bg-surface-container-high transition-colors group">
            <div>
              <span
                className="material-symbols-outlined text-4xl text-primary mb-6 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                eco
              </span>
              <h3 className="text-2xl font-bold tracking-tight mb-4">Udržitelné textilní tašky</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm font-light">
                Organická bavlna a odolné canvas materiály. Vysoce přesný sítotisk, který odolá každodennímu používání a praní. Ideální znovupoužitelný reklamní nástroj s dlouhou životností.
              </p>
            </div>
            <Link to="/poptavka" className="text-primary font-bold uppercase tracking-widest text-xs border-b border-primary w-fit pb-1 group-hover:translate-x-2 transition-transform inline-block">
              Ekologické materiály
            </Link>
          </div>
          <div className="bg-surface p-12 flex flex-col justify-between h-[480px] hover:bg-surface-container-high transition-colors group">
            <div>
              <span
                className="material-symbols-outlined text-4xl text-primary mb-6 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                edit_document
              </span>
              <h3 className="text-2xl font-bold tracking-tight mb-4">Zakázkové řešení</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm font-light">
                Od stuhových uzávěrů po vnitřní slepotisk. Nabízíme individuální rozměry a unikátní způsoby uchycení uch, aby taška přesně odpovídala identitě vaší značky.
              </p>
            </div>
            <Link to="/poptavka" className="text-primary font-bold uppercase tracking-widest text-xs border-b border-primary w-fit pb-1 group-hover:translate-x-2 transition-transform inline-block">
              Zahájit design
            </Link>
          </div>
        </div>
      </section>

      {/* Visual Context – Split */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="h-[600px] md:h-[700px] bg-slate-900 relative overflow-hidden">
          <img
            className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
            src={textileImg}
            alt="Makro detail organického plátna s sítotiskem – struktura textilu a sytost barvy"
          />
          <div className="absolute bottom-12 left-12 max-w-sm text-white">
            <h4 className="text-3xl font-bold mb-4 tracking-tighter">Precizní sítotisk</h4>
            <p className="text-white/70 text-sm font-light leading-relaxed">
              Náš sítotiskový proces zajišťuje penetraci inkoustu do vláken materiálu — barva zůstává živá po celou dobu životnosti tašky.
            </p>
          </div>
        </div>
        <div className="h-[600px] md:h-[700px] flex flex-col justify-center px-12 lg:px-24 bg-surface-container-lowest">
          <div className="max-w-md">
            <h2 className="text-4xl font-black tracking-tighter mb-8 leading-none">
              Anatomie<br />prémiové tašky.
            </h2>
            <ul className="space-y-8">
              <li className="flex gap-4">
                <span className="text-primary font-bold shrink-0">01.</span>
                <div>
                  <h5 className="font-bold uppercase text-xs tracking-widest mb-1">Zpevněné dno</h5>
                  <p className="text-on-surface-variant text-sm font-light">Tuhé kartonové vložky pro zachování tvaru tašky i při plném zatížení.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold shrink-0">02.</span>
                <div>
                  <h5 className="font-bold uppercase text-xs tracking-widest mb-1">Uchycení uch</h5>
                  <p className="text-on-surface-variant text-sm font-light">Dvojitě přeložené záložky s zesílenými průchodkami pro maximální pevnost spoje.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold shrink-0">03.</span>
                <div>
                  <h5 className="font-bold uppercase text-xs tracking-widest mb-1">Věrnost tisku</h5>
                  <p className="text-on-surface-variant text-sm font-light">Automatické Pantone párování s přesností pasování ±0,5 mm pro dokonalou reprodukci loga.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Configurator */}
      <section className="px-8 md:px-24 my-32">
        <div className="bg-white/80 backdrop-blur-xl p-12 grid grid-cols-1 md:grid-cols-4 gap-8 shadow-2xl border border-surface-variant">
          <div className="md:col-span-3">
            <h2 className="text-xs font-black tracking-widest uppercase mb-8">
              Konfigurátor rychlé poptávky
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">
                  Typ tašky
                </label>
                <select className="w-full bg-surface-container-low border-0 text-sm font-bold p-4 focus:ring-2 focus:ring-primary">
                  <option>Luxusní papírová taška</option>
                  <option>Bavlněná tote bag</option>
                  <option>Canvas nákupní taška</option>
                  <option>Kraftová recyklovaná taška</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">
                  Povrchová úprava
                </label>
                <select className="w-full bg-surface-container-low border-0 text-sm font-bold p-4 focus:ring-2 focus:ring-primary">
                  <option>Matná laminace</option>
                  <option>Lesklá laminace</option>
                  <option>Horká ražba (zlatá)</option>
                  <option>Sítotisk (textil)</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">
                  Množství (ks)
                </label>
                <input
                  type="number"
                  defaultValue="250"
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
            Papírové a textilní tašky s potiskem na míru
          </h2>
          <div className="space-y-6 text-on-surface-variant leading-relaxed">
            <p>
              Taška s potiskem je prodloužením identity vaší značky — zákazník ji nosí po ulici a dělá z ní mobilní reklamní plochu. V eTiskarna tiskneme papírové i textilní tašky na míru pro e-shopy, butiky, eventy i firemní dárky.
            </p>
            <p>
              Papírové tašky vyrábíme z těžkého papíru 250 g/m² s matnou nebo lesklou laminací, horkou ražbou a bavlněnými nebo kroucenými papírovými uchy. Textilní tašky tiskneme sítotiskem na organickou bavlnu nebo canvas — barva drží po celou dobu životnosti tašky i po opakovaném praní.
            </p>
            <p>
              Nabízíme standardní i zakázkové rozměry, zpevněné dno pro zachování tvaru, Pantone párování barev s přesností ±0,5 mm a individuální typy uch. Minimální odběr od 250 kusů, v závislosti na typu tašky.
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
            Popište nám vaši zakázku — typ tašky, rozměry, potisk a množství. Náš specialista vás do 24 hodin kontaktuje s kalkulací na míru.
          </p>
          <Link
            to="/poptavka"
            className="precision-gradient text-white px-12 py-5 text-sm font-bold tracking-[0.2em] uppercase active:scale-95 transition-transform inline-block"
          >
            Poptávka tašek s potiskem
          </Link>
        </div>
      </section>
      <MobileBottomNav />
    </>
  );
}

export default TaskyDetail;
