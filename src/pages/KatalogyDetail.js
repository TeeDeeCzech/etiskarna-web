import { Link } from 'react-router-dom';
import SeoHead from '../seo/SeoHead';

function KatalogyDetail() {
  return (
    <>
      <SeoHead page="katalogy" />

      {/* Hero */}
      <section className="relative min-h-[860px] flex items-center overflow-hidden bg-surface pt-20">
        <div className="w-full px-8 md:px-24 grid grid-cols-1 md:grid-cols-12 gap-0 items-center">
          <div className="md:col-span-5 z-10 py-20">
            <span className="section-label text-primary">Tiskové katalogy a brožury</span>
            <h1 className="text-6xl md:text-8xl font-extrabold leading-[0.9] tracking-tighter text-on-surface mb-8">
              Tisk katalogů<br />
              <span className="text-outline-variant">/</span> brožur
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-md leading-relaxed font-light mb-12">
              Tisk katalogů a brožur pro firmy, agentury i vydavatele. Vazby V1, V2 a V4, různé formáty a gramáže papírů — od malých sérií po statisícové náklady.
            </p>
          </div>
          <div className="md:col-span-7 relative h-[500px] md:h-[760px]">
            <div className="absolute inset-0 bg-surface-container-low translate-x-3 translate-y-3 md:translate-x-12 md:translate-y-12"></div>
            <img
              className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] contrast-[1.05] shadow-2xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6MUaE-EUJymndJcaK-znx0bvUP_BcfWLJBuW5bJaTYodSGnqGm8pLx7VgroT9snhW8ktXh-vVgO0-s2CiTBgUYBwDQQpRqZCLBiu0AVk8lC76_PRcYrW0mRSabmvYSKReMLlajJn87rCpQsS62cqyuoxEReDA5lNxzKb6g8C2I_flPNQx-UuIlE4CuUJ4k3q0Nv-Qo4eZzxBAGelIE5fpYz9hRMvjcS8Z-83P20xyXPLM_Brv3wrQoszVH-EAoz3Db6w1ZS-C55Q"
              alt="Tisk katalogů a brožur – detail vazby V2 a V4 na studiovém stole"
            />
          </div>
        </div>
      </section>

      {/* Binding Types */}
      <section
        className="py-32 bg-surface-container-low"
        style={{ backgroundImage: 'radial-gradient(circle, #e1e3e4 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      >
        <div className="px-8 md:px-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <h2 className="text-4xl font-bold tracking-tight">Typy vazeb katalogů</h2>
            <p className="text-on-surface-variant max-w-sm text-sm uppercase tracking-widest">
              Precizní zpracování každého detailu hřbetu a vazby.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            <div className="bg-surface-container-lowest p-12 aspect-square flex flex-col justify-between group hover:bg-primary transition-colors duration-500">
              <div className="text-6xl font-thin text-outline-variant group-hover:text-on-primary/30">01</div>
              <div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-on-primary">V2 / Lepená</h3>
                <p className="text-on-surface-variant group-hover:text-on-primary/80 text-sm leading-relaxed">
                  Měkká vazba s lepeným hřbetem. Ideální pro katalogy a časopisy s větším počtem stran.
                </p>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-12 aspect-square flex flex-col justify-between group hover:bg-primary transition-colors duration-500">
              <div className="text-6xl font-thin text-outline-variant group-hover:text-on-primary/30">02</div>
              <div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-on-primary">V4 / Šitá</h3>
                <p className="text-on-surface-variant group-hover:text-on-primary/80 text-sm leading-relaxed">
                  Nejpevnější měkká vazba. Jednotlivé archy jsou šité nití a následně vlepované do obálky.
                </p>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-12 aspect-square flex flex-col justify-between group hover:bg-primary transition-colors duration-500">
              <div className="text-6xl font-thin text-outline-variant group-hover:text-on-primary/30">03</div>
              <div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-on-primary">V1 / Skobička</h3>
                <p className="text-on-surface-variant group-hover:text-on-primary/80 text-sm leading-relaxed">
                  Klasická vazba šitá dvěma drátěnými skobičkami. Perfektní pro tenčí brožury a manuály.
                </p>
              </div>
            </div>
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
                  Formát
                </label>
                <select className="w-full bg-surface-container-low border-0 text-sm font-bold p-4 focus:ring-2 focus:ring-primary">
                  <option>A4 (210×297 mm)</option>
                  <option>A5 (148×210 mm)</option>
                  <option>DL (99×210 mm)</option>
                  <option>Čtverec 210×210 mm</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">
                  Vazba
                </label>
                <select className="w-full bg-surface-container-low border-0 text-sm font-bold p-4 focus:ring-2 focus:ring-primary">
                  <option>V1 – Skobička</option>
                  <option>V2 – Lepená</option>
                  <option>V4 – Šitá</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">
                  Počet kusů
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

      {/* Content split */}
      <section className="py-32 px-8 md:px-24 bg-surface">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center max-w-7xl mx-auto">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-6">Prémiové zpracování katalogů</h2>
              <p className="text-on-surface-variant font-light leading-relaxed text-lg">
                Naše technologie umožňují efektivní tisk od jednotek kusů pro exkluzivní portfolia až po statisícové náklady pro obchodní řetězce. Obálky s laminací, parciálním lakem nebo ražbou dodají vašemu katalogu reprezentativní dojem.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-surface-container-low hover:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined text-primary text-4xl mb-4 block"
                  style={{ fontVariationSettings: "'FILL' 1" }}>
                  menu_book
                </span>
                <h3 className="font-bold text-sm uppercase tracking-widest mb-2">Různé gramáže papírů</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">Od 90g vnitřních stran po 350g obálky — vhodné pro každý typ katalogu.</p>
              </div>
              <div className="p-8 bg-surface-container-low hover:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined text-primary text-4xl mb-4 block"
                  style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified
                </span>
                <h3 className="font-bold text-sm uppercase tracking-widest mb-2">Termín 5–7 dní</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">Standardní dodání od schválení tiskových dat. Expresní termíny na dotaz.</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              className="w-full h-full object-cover shadow-2xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYw8C5DshZ_PfweWYM0JiSCNEBsIS5uRcz65VK1rt-vTvyPfJa0HsICM318WNofA-uwfCDvPeUrQGmnJwGvngdvi8LgJC_tpK4zpsoq7cYeYlHQwKxM_KBGIfVA0QPQ_wUOpEuccJubMpCspR_GXSX1deOumbs2MlECcXPyEWX0W-qB9GyM3pC1IJGNLh1Zk7uQmCd_H8oxJF3hkNao1sNPPsOZDPYrumAdwnoUj-H7zjz2UkUAPF8xcc_3NYuGhY0Ej41jiloE5A"
              alt="Detail tisku brožury – textura papíru a saturace barev na prémiové potisknuté stránce"
            />
            <div className="absolute bottom-0 left-0 bg-primary p-8 text-on-primary max-w-xs">
              <span className="text-xs uppercase tracking-widest opacity-80 mb-2 block">Dostupnost</span>
              <p className="font-bold text-lg leading-snug">Standardní termín dodání: 5–7 pracovních dnů od schválení dat.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO text block */}
      <section className="py-24 px-8 md:px-24 bg-surface-container-low">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-10">
            Tisk katalogů a brožur na míru
          </h2>
          <div className="space-y-6 text-on-surface-variant leading-relaxed">
            <p>
              Katalogy a brožury jsou klíčovým nástrojem firemní prezentace. Využívají se pro produktové katalogy, výroční zprávy, vzdělávací materiály i propagační brožury. V eTiskarna zajišťujeme tisk katalogů na míru — od jednotek kusů pro exkluzivní klientelu až po velké náklady pro obchodní řetězce.
            </p>
            <p>
              Nabízíme vazby V1 (skobička), V2 (lepená) a V4 (šitá), formáty A4, A5, DL i zakázkové rozměry. Tiskneme na křídové, ofsetové i strukturované papíry různých gramáží. Obálky lze opatřit laminací, parciálním lakem nebo slepotiskem.
            </p>
            <p>
              Pomůžeme vám vybrat správnou technologii i zpracování — ať připravujete roční katalog, produktovou brožuru nebo firemní portfolio.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Stripe */}
      <section className="px-8 md:px-24 py-16 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          <div className="aspect-square bg-surface-container-low overflow-hidden">
            <img
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCd_X_soLI1LLhG0BXth20GMujs7fOK1wsyI6iQmKEmDz3WjRoVprVqSF7p2tZjVrRAgDEnHfAT0vouauY7qa5OxkeMRSk-FgNs-0E81eZwOm6efr03mw1QUe_uNd84sQX4fljalOGvwixHftapiEmXI1teTI4Svn1i-hvpvBySo8svEZxNxT730EfMa_CzfEaO13ewwnNFR4_wYURmWD-cZ9_UbBl176566pb_2IecxyuILtCGy1mvSNcboQ4T0N9GYI4Nssh9FzA"
              alt="Detail vazby V1 – skobičkový hřbet tenké brožury"
            />
          </div>
          <div className="aspect-square bg-surface-container-low overflow-hidden">
            <img
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5AWmJTT4Gp7EfHdl_WnXX4rLO6tZjV1hQSqq-rhrp5ti3ocGxcFrld0qUIXn_oe9dpew46n6wgP9phIPiH9qaOBH-f4T15sithFICfMYt_L6FQrm0sMVTBDLb1vkdUrFUh68HB3qvhCSRxzwRUk61ccd4pollbWhvXWaezkFkikyMogNWBcaga9u6ayxGD8zdXNENtmHE8CRC6voXcnge9BEEpN_e39eyPzFy5zaL8IokS2Uk2BKpAqKU1l4fcW2mJDc8vpeGOQk"
              alt="Stoh barevných katalogů různých tlouštěk hřbetu"
            />
          </div>
          <div className="aspect-square bg-surface-container-low overflow-hidden">
            <img
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUgKeipi4SlFibFV7f9meUghIcOiqtL7Rkg8h9qAH0e1dmq4zVPaZEAA-Uznw7NpOXY44zbPnqlq_WXrVhvoEqEqhgQH5Uh1GM5pekQxAoSwiiNXA9p9-7ONjxm6cUIcp3PzLpBgpzMiS8encNaSa9V3jAk5MVsfbsjQAskPQDkxu4ne1evFTjIfRj8yDfnkTzimOLaiYPnDJwo5n4OnAEaCGz4OX0jcZ-GzC98ryPS4NEzDlwb3DJA36FqLM2rYKA8G8U4kGnIGs"
              alt="Vnitřní stránky architektonického katalogu – kvalitní tisk a typografie"
            />
          </div>
          <div className="aspect-square bg-surface-container-low overflow-hidden">
            <img
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA59dkNiFTgSoyK_gqYMHBu10oY8Cy54M5Sk_2lrHGj3kR70jHRGxYLJjpbIBm_wQ-__GAjwjAnW61WTGF_YgU3lBYs72kSEkQ3oxuzgzVcGv6sAob18I8C-14sGyt9kt7dFthtNmkkzdhnsFWZavmJn68ZTCmwjO8_uzqabhd_hsdEbdWl7fhb8SAz0ClU7fxICD72P20dwZ1YXk3QhK48soF3UwWy4c5iScTjH8sNSMZpWQdOlFgXF_OERPiZ4mS1CjodOMYLF-A"
              alt="Abstraktní pohled na vrstvy papíru a textury v tiskárně"
            />
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
            Popište nám vaši zakázku — formát, vazbu, počet stran a náklad. Náš specialista vás do 24 hodin kontaktuje s kalkulací na míru.
          </p>
          <Link
            to="/poptavka"
            className="precision-gradient text-white px-12 py-5 text-sm font-bold tracking-[0.2em] uppercase active:scale-95 transition-transform inline-block"
          >
            Poptávka tisku katalogů
          </Link>
        </div>
      </section>
    </>
  );
}

export default KatalogyDetail;
