import { Link } from 'react-router-dom';
import SeoHead from '../seo/SeoHead';
import MobileBottomNav from '../components/MobileBottomNav';
import heroImg from '../images/tisk_letaku_etiskarna.avif';
import rezackaImg from '../images/tisk_letaku_rezacka.avif';

function LetakyDetail() {
  return (
    <>
      <SeoHead page="letaky" />

      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-surface-container-low flex items-center px-8 md:px-24 pt-28 pb-16 md:pb-0 md:h-[900px]">
        <div className="grid grid-cols-1 md:grid-cols-12 w-full items-center gap-12">
          <div className="md:col-span-5 z-10">
            <span className="section-label text-primary">Kategorie / Tiskoviny</span>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-on-background leading-[0.9] mb-8">
              Tisk letáků<br />na míru
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-md font-light">
              Tisk letáků pro firmy, akce i marketingové kampaně. Nabízíme formáty A4, A5, DL i zakázkové rozměry — ofsetový i digitální tisk, různé gramáže papíru a typy skladů.
            </p>
          </div>
          <div className="md:col-span-7 h-full w-full relative">
            <img
              className="w-full h-[400px] md:h-[716px] object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-1000 shadow-2xl"
              src={heroImg}
              alt="Tisk letáků eTiskarna – ukázka tiskové produkce"
            />
            <div className="absolute -bottom-12 -left-12 bg-white p-12 hidden md:block">
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-bold text-primary">01.</span>
                <span className="text-xs tracking-widest uppercase font-black">Prémiové materiály</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-32 px-8 md:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 items-start">
          <div className="md:col-span-1">
            <h2 className="text-xs font-black tracking-[0.5em] uppercase text-on-surface-variant mb-6">
              Možnosti tisku letáků
            </h2>
            <div className="space-y-4">
              <div className="h-px bg-outline-variant opacity-20"></div>
              <p className="text-sm text-on-surface-variant leading-loose italic">
                "Rychlost dodání a zajímavou cenu garantujeme díky nejmodernějšímu strojovému parku v regionu."
              </p>
            </div>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 bg-surface-container-low hover:bg-surface-container-high transition-colors group">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 block"
                style={{ fontVariationSettings: "'FILL' 1" }}>
                print
              </span>
              <h3 className="text-xl font-bold mb-3">Ofsetový a digitální tisk letáků</h3>
              <p className="text-on-surface-variant text-sm font-light leading-relaxed">
                Pro velké náklady volíme ofset s maximální věrností barev. Pro expresní zakázky digitální tisk s rychlým obratem.
              </p>
            </div>
            <div className="p-8 bg-surface-container-low hover:bg-surface-container-high transition-colors group">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 block"
                style={{ fontVariationSettings: "'FILL' 1" }}>
                layers
              </span>
              <h3 className="text-xl font-bold mb-3">Papíry a gramáže pro tisk letáků</h3>
              <p className="text-on-surface-variant text-sm font-light leading-relaxed">
                Lehčí 90g papír pro distribuci ve velkém, prémiový 300–350g karton pro reprezentativní materiály. Povrch mat nebo lesk.
              </p>
            </div>
            <div className="p-8 bg-surface-container-low hover:bg-surface-container-high transition-colors group">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 block"
                style={{ fontVariationSettings: "'FILL' 1" }}>
                architecture
              </span>
              <h3 className="text-xl font-bold mb-3">Formáty letáků a typy skladů</h3>
              <p className="text-on-surface-variant text-sm font-light leading-relaxed">
                Standardní A4, A5, DL i zakázkové formáty. Lomové sklady, harmoniky, "U" nebo "V" — přesnost na desetinu milimetru.
              </p>
            </div>
            <div className="p-8 bg-surface-container-low hover:bg-surface-container-high transition-colors group">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 block"
                style={{ fontVariationSettings: "'FILL' 1" }}>
                verified
              </span>
              <h3 className="text-xl font-bold mb-3">Kvalita barev podle ISO</h3>
              <p className="text-on-surface-variant text-sm font-light leading-relaxed">
                Dodržujeme standard ISO pro věrnost barev. Každá zakázka prochází výstupní kontrolou — výsledek odpovídá schválenému nátisku.
              </p>
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
                  <option>DL (99×210 mm)</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">
                  Papír
                </label>
                <select className="w-full bg-surface-container-low border-0 text-sm font-bold p-4 focus:ring-2 focus:ring-primary">
                  <option>135g Křída Mat</option>
                  <option>170g Křída Lesk</option>
                  <option>250g Offset</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">
                  Množství
                </label>
                <input
                  type="number"
                  defaultValue="1000"
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
            Tisk letáků na míru
          </h2>
          <div className="space-y-6 text-on-surface-variant leading-relaxed">
            <p>
              Letáky patří mezi nejefektivnější formy propagace. Využívají se pro marketingové kampaně, informování zákazníků i podporu prodeje. V eTiskarna zajišťujeme tisk letáků na míru podle konkrétních požadavků — od malých sérií až po velké náklady.
            </p>
            <p>
              Nabízíme široký výběr formátů, například A4, A5 nebo DL, různé typy papírů i povrchových úprav. Díky kombinaci ofsetového a digitálního tisku dokážeme optimalizovat cenu, rychlost dodání i výslednou kvalitu.
            </p>
            <p>
              Pomůžeme vám s výběrem ideálního řešení — ať už potřebujete letáky pro lokální distribuci, event, přímý prodej nebo dlouhodobou marketingovou strategii.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white">
        <img
          className="w-full h-[500px] md:h-[600px] object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuChnNHagiQO89yZ0xY9sKiV11DEDI9bhjCG9xwgyfHXPSnnPMA3EyU_HSk-zcxHVs7Vo6tJtWy9tLVnQH8YsfDmtZBREnFAff2eWhPdUwR7dqJo2yb9UeBs9gaxB67IawEpGW5sZnW0KaJPyfQlizGKn1iLh_dk51WuzUUT57M3K2ADCDlBCMkbNbODwLKkcKnrJIhMLHnjLD_Til4Hv1MnBUSQgl-Py-4I6-JcS7gwmCG6aL5jopmBLE4ly-pqqW8rEYJrFi0jSK0"
          alt="Tisk letáků – detail papíru a kvality tisku"
        />
        <img
          className="w-full h-[500px] md:h-[600px] object-cover"
          src={rezackaImg}
          alt="Hotové letáky po tisku na profesionálním stroji"
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
            Poptávka tisku letáků
          </Link>
        </div>
      </section>
      <MobileBottomNav />
    </>
  );
}

export default LetakyDetail;
