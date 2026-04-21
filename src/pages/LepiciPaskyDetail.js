import { Link } from 'react-router-dom';
import SeoHead from '../seo/SeoHead';

const heroImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJiB54xXTnbSV5IB0h9asB-8U_zaSm5cetTcjQaIJGNutBAXA2SNumLWeOI38RYPQH4YSVHIc5oirsoEWMGMOydnaT4H6tNcXHPkF76MlicQbButB4fG3V0-Ali6HEhtqd-2zFcu72o9NdZwdwBSXq9n_kBr8ykEK4m3gdgsoDDXsPfX3DfVWjoWqA24AmhcheTWLIXEFChIPsTVec9hv-n3aWTF0Xxtzkhi9-Jmr4qMlVkT9G4IVbCOXilz7CzU5759LO8sFZAQ';
const warehouseImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8NWbQubUwDJKknYXHBV2g9u5z8rG4c30DfxNR15HBDJA2J5blhtL_Zz8s6kN6dPEaqaNy3x7-dakuKJsKQ8p3OV87nDAMWv1lk0GP2MGtiHIkj5TwrlNdhn2l4VyOSAYQ_4u4sdU61G-3uuZuZ0uPbfqMZp0bLT790FS2UzJUGFN-bcmJXTGQDzInO5MPyRTf2TPklAPP9jObUfn9ORtDGGIz2uSjdnKOVNg3UluQ6hG7hQEUbTiKnvwlbswpJ68hhGFZc3a387k';

function LepiciPaskyDetail() {
  return (
    <>
      <SeoHead page="lepici-pasky" />

      {/* Hero – Asymmetric */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[819px] items-stretch pt-20">
        <div className="lg:col-span-5 px-8 lg:px-16 flex flex-col justify-center py-12 lg:py-0">
          <span className="section-label text-primary mb-6">Kategorie / Tiskoviny</span>
          <h1 className="text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-on-surface mb-8">
            Lepící<br />pásky
          </h1>
          <p className="text-on-surface-variant text-lg leading-relaxed max-w-md mb-10 font-light">
            Proměňte standardní balení v součást brandingu. Vysoce odolné samolepicí pásky s přesným potiskem na ekologický papír nebo klasické PVC — vaše logo na každém zásilce.
          </p>
          <div className="flex items-center gap-6 flex-wrap">
            <Link
              to="/poptavka"
              className="bg-primary text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-primary-container transition-colors inline-block"
            >
              Odeslat poptávku
            </Link>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-outline font-bold">od pouhých</span>
              <span className="text-2xl font-black tracking-tight">12,50 Kč / m</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 relative overflow-hidden bg-surface-container-low min-h-[500px]">
          <img
            className="absolute inset-0 w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
            src={heroImg}
            alt="Lepící pásky s potiskem eTiskarna – potištěné papírové a PVC pásky s logem"
          />
          <div className="absolute bottom-12 right-12 bg-white/80 backdrop-blur-md p-8 max-w-xs shadow-2xl hidden md:block">
            <p className="text-xs font-bold leading-tight uppercase tracking-widest text-on-surface-variant">
              Přesnost na každý milimetr. Naše pásky reprezentují fyzickou přítomnost vaší značky u každé zásilky.
            </p>
          </div>
        </div>
      </section>

      {/* Features Bento */}
      <section className="px-8 md:px-24 py-24 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Paper & Eco – wide */}
          <div className="md:col-span-2 bg-surface-container-low p-12 flex flex-col justify-between min-h-[400px]">
            <div>
              <span
                className="material-symbols-outlined text-primary text-4xl mb-6 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                eco
              </span>
              <h3 className="text-3xl font-bold tracking-tight mb-4">Papírové a textilní provedení</h3>
              <p className="text-on-surface-variant leading-relaxed max-w-lg text-sm font-light">
                Přejděte k udržitelnějšímu balení díky výztužným papírovým páskám. Vysoká pevnost v tahu v kombinaci s biologicky rozložitelnými materiály — vaše značka zanechá stopu u zákazníka, ne na planetě.
              </p>
            </div>
            <div className="flex gap-4 mt-8">
              <span className="px-3 py-1 bg-white text-[10px] font-bold uppercase tracking-widest border border-outline-variant">Ekologické</span>
              <span className="px-3 py-1 bg-white text-[10px] font-bold uppercase tracking-widest border border-outline-variant">Biologicky rozložitelné</span>
            </div>
          </div>

          {/* HD Print – primary */}
          <div className="bg-primary text-white p-12 flex flex-col justify-between">
            <span
              className="material-symbols-outlined text-4xl block"
              style={{ fontVariationSettings: "'FILL' 0" }}
            >
              print
            </span>
            <div>
              <h3 className="text-2xl font-bold tracking-tight mb-2">HD potisk na míru</h3>
              <p className="text-on-primary-container leading-relaxed text-sm font-light">
                Ostré vektorové přenesení vašeho loga pomocí UV odolných inkoustů s Pantone párováním barev.
              </p>
            </div>
          </div>

          {/* Durability */}
          <div className="bg-surface-container-highest p-12 flex flex-col justify-between">
            <span
              className="material-symbols-outlined text-4xl text-primary block"
              style={{ fontVariationSettings: "'FILL' 0" }}
            >
              shield
            </span>
            <div>
              <h3 className="text-2xl font-bold tracking-tight mb-2">Průmyslová odolnost</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm font-light">
                Navrženo tak, aby odolalo extrémním teplotám i hrubému zacházení při přepravě a skladování.
              </p>
            </div>
          </div>

          {/* Warehouse image – wide */}
          <div className="md:col-span-2 relative h-[400px] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={warehouseImg}
              alt="Sklad s krabicemi zalepenými potištěnými lepicími páskami s logem"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-12">
              <p className="text-white font-bold text-xl">Využívají e-shopy i velké výrobní společnosti po celé ČR.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Specs */}
      <section className="py-24 px-8 md:px-24 border-t border-surface-variant">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="max-w-xl">
            <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Technická specifikace</h4>
            <p className="text-4xl font-black tracking-tight leading-tight">
              Architektonická pevnost pro každou zásilku.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 border-l border-surface-variant pl-12">
            <div>
              <span className="block text-[10px] font-bold text-outline uppercase tracking-widest mb-2">Šířky</span>
              <span className="text-lg font-bold">25 – 75 mm</span>
            </div>
            <div>
              <span className="block text-[10px] font-bold text-outline uppercase tracking-widest mb-2">Délka role</span>
              <span className="text-lg font-bold">66 m / 990 m</span>
            </div>
            <div>
              <span className="block text-[10px] font-bold text-outline uppercase tracking-widest mb-2">Barvy</span>
              <span className="text-lg font-bold">Pantone Match</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process + Configurator */}
      <section className="bg-surface-container-low py-32 px-8 md:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Process steps */}
          <div>
            <h2 className="text-5xl font-black tracking-tighter mb-8 italic">Jak to funguje.</h2>
            <p className="text-on-surface-variant mb-12 text-lg font-light">
              Pošlete nám specifikaci a náš tým připraví technický návrh s kalkulací do 24 hodin.
            </p>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <span className="w-12 h-12 flex items-center justify-center bg-white font-bold border border-outline-variant shrink-0 text-sm">01</span>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-1">Vyberte materiál</h4>
                  <p className="text-sm text-on-surface-variant font-light">BOPP, PVC, papírová nebo textilní výztužná páska.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-12 h-12 flex items-center justify-center bg-white font-bold border border-outline-variant shrink-0 text-sm">02</span>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-1">Pošlete grafiku</h4>
                  <p className="text-sm text-on-surface-variant font-light">Vektorové formáty (AI, PDF, SVG) pro maximální přesnost.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-12 h-12 flex items-center justify-center bg-white font-bold border border-outline-variant shrink-0 text-sm">03</span>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-1">Schvalte náhled</h4>
                  <p className="text-sm text-on-surface-variant font-light">Digitální vizualizace před zahájením výroby — bez překvapení.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Configurator */}
          <div className="bg-white p-12 shadow-sm">
            <h3 className="text-xs font-black tracking-widest uppercase mb-8">Konfigurátor rychlé poptávky</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-outline mb-2">Materiál pásky</label>
                <select className="w-full bg-transparent border-0 border-b-2 border-surface-variant focus:border-primary focus:ring-0 py-2 text-sm font-bold appearance-none">
                  <option>Ekologický papír (přírodní)</option>
                  <option>Klasické PVC</option>
                  <option>BOPP transparentní</option>
                  <option>Výztužná textilní páska</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-outline mb-2">Šířka</label>
                  <select className="w-full bg-transparent border-0 border-b-2 border-surface-variant focus:border-primary focus:ring-0 py-2 text-sm font-bold appearance-none">
                    <option>25 mm</option>
                    <option>38 mm</option>
                    <option>50 mm</option>
                    <option>75 mm</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-outline mb-2">Počet rolí</label>
                  <input
                    type="number"
                    defaultValue="36"
                    className="w-full bg-transparent border-0 border-b-2 border-surface-variant focus:border-primary focus:ring-0 py-2 text-sm font-bold"
                  />
                </div>
              </div>
              <div className="pt-4">
                <Link
                  to="/poptavka"
                  className="w-full bg-primary text-white py-5 font-black uppercase tracking-[0.2em] text-sm hover:bg-primary-container transition-colors block text-center"
                >
                  Odeslat poptávku
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO text block */}
      <section className="py-24 px-8 md:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-10">
            Lepící pásky s potiskem na míru
          </h2>
          <div className="space-y-6 text-on-surface-variant leading-relaxed">
            <p>
              Potištěná lepicí páska je nejúčinnější a nejlevnější způsob, jak dostat vaše logo na každou zásilku. V eTiskarna tiskneme pásky na míru v papírovém, PVC i BOPP provedení — pro e-shopy, výrobní firmy i ekologicky orientované značky.
            </p>
            <p>
              Nabízíme šířky 25 až 75 mm a délky rolí 66 m nebo 990 m pro průmyslové aplikátory. Potisk provádíme UV odolnými inkousty s Pantone párováním barev — váš vizuální styl bude konzistentní na každé pásce.
            </p>
            <p>
              Ekologické papírové pásky jsou biologicky rozložitelné a vhodné pro certifikované ekologické balení. PVC a BOPP pásky nabízejí vyšší odolnost vůči vlhkosti a nízkým teplotám pro náročné přepravní podmínky.
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
            Popište nám vaši zakázku — materiál, šířku, délku role a grafiku. Náš specialista vás do 24 hodin kontaktuje s kalkulací na míru.
          </p>
          <Link
            to="/poptavka"
            className="precision-gradient text-white px-12 py-5 text-sm font-bold tracking-[0.2em] uppercase active:scale-95 transition-transform inline-block"
          >
            Poptávka lepicích pásek
          </Link>
        </div>
      </section>
    </>
  );
}

export default LepiciPaskyDetail;
