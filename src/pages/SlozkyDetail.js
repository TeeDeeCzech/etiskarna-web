import { Link } from 'react-router-dom';
import SeoHead from '../seo/SeoHead';

function SlozkyDetail() {
  return (
    <>
      <SeoHead page="slozky" />

      {/* Hero */}
      <section className="min-h-screen flex flex-col md:flex-row items-center px-8 md:px-24 gap-16 pt-28 pb-20">
        <div className="w-full md:w-1/2">
          <span className="section-label text-primary">Kategorie: Firemní tiskoviny</span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight text-on-surface mb-8">
            Firemní složky<br />
            <span className="text-outline-variant">na míru</span>
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed max-w-xl mb-12 font-light">
            Prémiové skládané složky pro ukládání dokumentů ve formátech A4 a A5. Reprezentativní řešení s funkční chlopní, hřbetem a precizním výsekem pro vizitku.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/poptavka"
              className="precision-gradient text-white px-10 py-5 font-bold uppercase tracking-widest text-sm inline-block active:scale-95 transition-transform"
            >
              Nezávazná poptávka
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative">
          <div className="aspect-[4/5] bg-surface-container-low overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjuqGI1zzSFEp4nF9rhHPcCN0Lt_VkUIjVl-TxysHANgkquUyl5oBMIFL2GaEgkdj4yjq-jEV3zSheirzbWqDDhDRaiwUMFhzmwdWOlYNm27FGKYFJjUIvwTszUr4d9FL5wjqX8kMRwEz_2G0SqqKJLMbj5PXdK7eQBXt7dckhc3A05Yk4kc4mw62ciYeavyH7I_5IG2HO4AegRdEP3SNb5_eeijksmUhElH6TDNlq4noeW8Ig69eTHp1j3vgspHG-t0szbDQjzJU"
              alt="Firemní složky A4 a A5 – detail výseku pro vizitku a povrchové úpravy"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-surface-container-lowest p-8 shadow-2xl hidden lg:block max-w-[200px]">
            <span className="text-3xl font-black text-primary block mb-2">0px</span>
            <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Architektonická přesnost ořezu</p>
          </div>
        </div>
      </section>

      {/* Bento: Construction & Formats */}
      <section className="bg-surface-container-low py-32 px-8 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-7xl mx-auto">
          <div className="md:col-span-8 bg-surface-container-lowest p-12">
            <h2 className="text-3xl font-bold tracking-tight mb-8">Konstrukce a formáty</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-4 block"
                  style={{ fontVariationSettings: "'FILL' 1" }}>
                  square_foot
                </span>
                <h3 className="font-bold text-lg mb-2">Variabilita rozměrů</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Standardizované formáty A4 a A5 s možností úpravy hřbetu pro kapacity od 5 do 30 listů.
                </p>
              </div>
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-4 block"
                  style={{ fontVariationSettings: "'FILL' 1" }}>
                  contact_page
                </span>
                <h3 className="font-bold text-lg mb-2">Integrovaný výsek pro vizitku</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Každá složka disponuje precizním výsekem pro vizitku na vnitřní chlopni pro okamžitou identifikaci kontaktu.
                </p>
              </div>
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-4 block"
                  style={{ fontVariationSettings: "'FILL' 1" }}>
                  layers
                </span>
                <h3 className="font-bold text-lg mb-2">Materiálové portfolio</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Od křídových papírů s laminací až po prémiové grafické papíry s vysokou gramáží a unikátní texturou.
                </p>
              </div>
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-4 block"
                  style={{ fontVariationSettings: "'FILL' 1" }}>
                  brush
                </span>
                <h3 className="font-bold text-lg mb-2">Povrchová úprava</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Matná, lesklá nebo soft-touch laminace, parciální UV lak, horká ražba či slepotisk pro exkluzivní vzhled.
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 flex flex-col gap-8">
            <div className="bg-primary p-12 flex-1 flex flex-col justify-end">
              <h3 className="text-white text-2xl font-bold mb-4 tracking-tight">Vzorník papírů</h3>
              <p className="text-on-primary-container text-sm mb-6">
                Vyžádejte si náš fyzický vzorník papírů pro dokonalý hmatový zážitek před objednávkou.
              </p>
              <Link
                to="/poptavka"
                className="text-white font-bold uppercase tracking-widest text-[10px] border-b border-white self-start hover:opacity-70 transition-opacity"
              >
                Požádat o vzorník
              </Link>
            </div>
            <div className="bg-surface-container-highest p-12 flex-1">
              <h3 className="text-on-surface text-2xl font-bold mb-4 tracking-tight">Ekologie</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Všechny naše materiály pocházejí z udržitelných zdrojů s certifikací FSC.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Split */}
      <section className="py-32 px-8 md:px-24 overflow-hidden">
        <div className="flex flex-col md:flex-row gap-24 items-center max-w-7xl mx-auto">
          <div className="w-full md:w-2/5 order-2 md:order-1">
            <img
              className="w-full grayscale brightness-95 shadow-2xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy4912Zvo6O_cKRuc1mSuVQwEy-RTMAPcl9SjUQl8l46ex8lFQnc_b5a9rBg010H2V6ELkvEp3ho3nc7huojJKDfaUsdnwBJMEzD4dV-jguA5sCDG9AGxxta3OfJt8S11yQKugIspDpF9BKWwdVekJsUgtXgXevbhtfV1lFdNk6Koh7ynnWtFPXX4qU-UFfuxAE8t3C3xNdYuUNa03edN3irVJnSKyzkPHaz6AXMHKq2EW-DOpwsxkmDoZ4z-5rsA0tdiA0S6qyIE"
              alt="Makro detail textury prémiového papíru s reliéfním logem na firemní složce"
            />
          </div>
          <div className="w-full md:w-3/5 order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-8">
              Detail, který definuje <span className="text-primary">autoritu</span>.
            </h2>
            <p className="text-on-surface-variant text-lg leading-loose mb-10 font-light">
              Složka není jen obal, ale první fyzický kontakt s vaší značkou. Naše technologie digitálního a ofsetového tisku zaručuje barevnou věrnost i v těch nejnáročnějších korporátních odstínech. Každý ohyb a výsek prochází přísnou kontrolou kvality.
            </p>
            <div className="flex gap-16">
              <div>
                <div className="text-4xl font-black text-on-surface mb-1">350g</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-outline">Standardní gramáž</div>
              </div>
              <div>
                <div className="text-4xl font-black text-on-surface mb-1">0,1 mm</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-outline">Přesnost výseku</div>
              </div>
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
                  <option>A4 (210×297 mm)</option>
                  <option>A5 (148×210 mm)</option>
                  <option>Vlastní formát</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">
                  Povrch
                </label>
                <select className="w-full bg-surface-container-low border-0 text-sm font-bold p-4 focus:ring-2 focus:ring-primary">
                  <option>Matná laminace</option>
                  <option>Lesklá laminace</option>
                  <option>Soft-touch laminace</option>
                  <option>Bez laminace</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">
                  Počet kusů
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
      <section className="py-24 px-8 md:px-24 bg-surface-container-low">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-10">
            Firemní složky a slohy na míru
          </h2>
          <div className="space-y-6 text-on-surface-variant leading-relaxed">
            <p>
              Firemní složky a slohy jsou nedílnou součástí korporátní komunikace. Používají se na obchodních jednáních, prezentacích i konferencích jako elegantní způsob předání dokumentů. V eTiskarna tiskneme slohy na míru — od standardních formátů A4 a A5 po zakázkové rozměry s vlastním hřbetem.
            </p>
            <p>
              Každá složka obsahuje výsek pro vizitku a je dostupná v celé řadě papírů a povrchových úprav. Nabízíme matnou, lesklou nebo soft-touch laminaci, parciální UV lak i teplou ražbu pro maximálně reprezentativní výsledek.
            </p>
            <p>
              Pomůžeme vám navrhnout správné řešení — ať připravujete složky pro firemní prezentaci, výroční zprávu nebo pravidelné obchodní materiály.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-surface px-8 md:px-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
            Máte konkrétní projekt?
          </h2>
          <p className="text-on-surface-variant text-lg mb-10 max-w-xl mx-auto">
            Popište nám vaši zakázku — formát, povrch, množství. Náš specialista vás do 24 hodin kontaktuje s kalkulací na míru.
          </p>
          <Link
            to="/poptavka"
            className="precision-gradient text-white px-12 py-5 text-sm font-bold tracking-[0.2em] uppercase active:scale-95 transition-transform inline-block"
          >
            Poptávka firemních složek
          </Link>
        </div>
      </section>
    </>
  );
}

export default SlozkyDetail;
