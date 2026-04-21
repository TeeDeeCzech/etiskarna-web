import { Link } from 'react-router-dom';
import SeoHead from '../seo/SeoHead';

const heroImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCx253JJUffmad2VXL_Jf_R23wTrkxHZNGSgOOCnKDa71J_fdLpB-4BHP95xcuYyh6bueKs7bfreqK6gw0bKz1omwbWFQjaBqPf7igqUr1WV8zD_8EtupL-jOAfj8x0reeVL0pnZdsOaXQLtYnFZBghq76YsoBfZ5esKI471iO0ypNq80IjqglHe37lfrpDQ8e6uiA_MCzTePlMOFDsnC2ckMJ1IFGEBhmXt7QH6XKoENN65OMfIhE-UdZWkld998vlKHyQg2DVHH8';
const textureImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvFcm0Vsk5r__k5u6IUVfWUtUB704ix7r0hYjsYbldgtsVMFmdsxzgUpyLOdcJMIcsW2BC6hzYTmSD-7U94sT_-R1CoTj0nS9R6BuXgYR14vRcFT0E4vLt3VyNuGKTPYZu-cgdDhc-Joo2K_d3vsH6u-GFdhmHMjPqnOFuU1WwyNLcIAoM2LRlrS1iHmKAhFtpa0pmJf7M1aVMr8QFztzDTAJrH2MzGDl69s03Rb5yOkd8VNQfjXSnbUxv8r2i-mxsim3ASPjlxo8';

function ObalkyDetail() {
  return (
    <>
      <SeoHead page="obalky" />

      {/* Hero */}
      <section className="px-8 md:px-24 mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-32">
        <div className="lg:col-span-5 pt-4">
          <span className="section-label text-primary">Kategorie / Tiskoviny</span>
          <h1 className="text-7xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-8 text-on-surface">
            Obálky.
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed mb-12 max-w-md font-light">
            Klasické poštovní i dárkové obálky s vlastním potiskem. Definujte svůj styl skrze hmatatelný zážitek a precizní zpracování — ofsetový tisk, horká ražba nebo slepotisk.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 text-on-surface">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                architecture
              </span>
              <span className="font-medium">Všechny standardní rozměry (C6, DL, C5, C4, B4)</span>
            </div>
            <div className="flex items-center gap-4 text-on-surface">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                design_services
              </span>
              <span className="font-medium">Zakázková výroba na míru</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="aspect-[4/5] w-full bg-surface-container-low overflow-hidden">
            <img
              className="w-full h-full object-cover grayscale-[0.4] hover:grayscale-0 transition-all duration-1000 shadow-2xl"
              src={heroImg}
              alt="Tisk obálek eTiskarna – prémiové textured obálky se stříbrnou folií"
            />
          </div>
        </div>
      </section>

      {/* Feature Bento – 3 square tiles */}
      <section className="px-8 md:px-24 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          <div className="bg-surface-container-lowest p-16 flex flex-col justify-between aspect-square border-r border-outline-variant/10">
            <h3 className="text-3xl font-bold tracking-tight">Standardní formáty</h3>
            <div>
              <p className="text-on-surface-variant mb-6 text-sm font-light leading-relaxed">
                Od klasických C6 po rozměrné B4. Máme vše, co pošta vyžaduje — DL pro korespondenci, C5 pro dokumenty, C4 pro složky A4.
              </p>
              <span className="text-primary font-black text-5xl opacity-10">DL / C5 / C4</span>
            </div>
          </div>
          <div className="bg-surface-container-low p-16 flex flex-col justify-between aspect-square border-r border-outline-variant/10">
            <h3 className="text-3xl font-bold tracking-tight">Vlastní branding</h3>
            <div>
              <p className="text-on-surface-variant mb-6 text-sm font-light leading-relaxed">
                Ofsetový tisk, horká ražba (zlatá/stříbrná fólie) nebo slepotisk. Vaše logo jako pečeť kvality na každé zásilce.
              </p>
              <Link
                to="/poptavka"
                className="text-primary font-bold border-b-2 border-primary pb-1 self-start inline-block uppercase text-xs tracking-widest hover:opacity-70 transition-opacity"
              >
                Možnosti tisku
              </Link>
            </div>
          </div>
          <div className="bg-primary text-white p-16 flex flex-col justify-between aspect-square">
            <h3 className="text-3xl font-bold tracking-tight">Výroba na míru</h3>
            <div>
              <p className="text-on-primary-container opacity-90 mb-6 text-sm font-light leading-relaxed">
                Nenašli jste svůj rozměr? Navrhneme a vyrobíme obálku přesně podle vašich specifikací — libovolný tvar i klopa.
              </p>
              <span
                className="material-symbols-outlined text-5xl"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                mail
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Paper & Material Split */}
      <section className="mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
          <div className="order-2 lg:order-1 px-8 lg:px-24 py-24">
            <h2 className="text-5xl font-extrabold tracking-tight mb-8">
              Architektonický přístup k papíru.
            </h2>
            <p className="text-lg text-on-surface-variant leading-loose mb-12 font-light">
              Věříme, že obálka není jen obal — je to první kontakt a příslib obsahu uvnitř. Materiály vybíráme s důrazem na gramáž, texturu a ekologickou stopu. Každý kus prochází kontrolou, aby splňoval standardy eTiskárny.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <span className="block text-2xl font-bold mb-2">90 – 350 g</span>
                <span className="text-sm uppercase tracking-widest text-on-surface-variant">Škála gramáží</span>
              </div>
              <div>
                <span className="block text-2xl font-bold mb-2">100% FSC</span>
                <span className="text-sm uppercase tracking-widest text-on-surface-variant">Udržitelný zdroj</span>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 aspect-video lg:aspect-square">
            <img
              className="w-full h-full object-cover"
              src={textureImg}
              alt="Makro detail prémiového papíru – textura a precizní ořez obálky"
            />
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
                  Typ obálky
                </label>
                <select className="w-full bg-surface-container-low border-0 text-sm font-bold p-4 focus:ring-2 focus:ring-primary">
                  <option>Klasická poštovní (C6, DL, C5)</option>
                  <option>Dárková / Luxusní</option>
                  <option>Zakázkový rozměr</option>
                  <option>Velkoformátová (C4, B4)</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">
                  Povrchová úprava
                </label>
                <select className="w-full bg-surface-container-low border-0 text-sm font-bold p-4 focus:ring-2 focus:ring-primary">
                  <option>Ofsetový tisk</option>
                  <option>Horká ražba (zlatá)</option>
                  <option>Horká ražba (stříbrná)</option>
                  <option>Slepotisk (emboss)</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">
                  Náklad (ks)
                </label>
                <input
                  type="number"
                  defaultValue="500"
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
            Tisk obálek na míru
          </h2>
          <div className="space-y-6 text-on-surface-variant leading-relaxed">
            <p>
              Obálka s vlastním potiskem je jednoduché a účinné řešení pro firemní korespondenci, přímý marketing i prémiové dárkové zásilky. V eTiskarna tiskneme obálky na míru ve všech standardních formátech — C6, DL, C5, C4 i B4.
            </p>
            <p>
              Nabízíme ofsetový tisk pro velké náklady, horkou ražbu zlatou nebo stříbrnou folií pro luxusní provedení a slepotisk (emboss/deboss) pro prémiový hmatový efekt bez barvy. Papíry vybíráme v gramážích 90 až 350 g z FSC certifikovaných udržitelných zdrojů.
            </p>
            <p>
              Pro nestandardní rozměry, speciální tvary klop nebo jiné materiálové požadavky nabízíme zakázkovou výrobu na míru. Kontaktujte nás s vašimi specifikacemi a do 24 hodin obdržíte cenovou nabídku.
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
            Popište nám vaši zakázku — formát, potisk, gramáž a náklad. Náš specialista vás do 24 hodin kontaktuje s kalkulací na míru.
          </p>
          <Link
            to="/poptavka"
            className="precision-gradient text-white px-12 py-5 text-sm font-bold tracking-[0.2em] uppercase active:scale-95 transition-transform inline-block"
          >
            Poptávka tisku obálek
          </Link>
        </div>
      </section>
    </>
  );
}

export default ObalkyDetail;
