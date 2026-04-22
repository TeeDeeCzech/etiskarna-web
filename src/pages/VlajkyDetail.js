import { Link } from 'react-router-dom';
import SeoHead from '../seo/SeoHead';
import MobileBottomNav from '../components/MobileBottomNav';

const heroImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuATmwiWEOy1yOp2lRz7wnRdOPEfNcsws_12iii5idQOBN22fQrfAoyVybWxCpJ1qdaIdJmslH0KNQhcB-__q5Fxma5rqXWdqEqjNchDlIShbpGQ2-EqI0GPXf-RxofwUVaDQl4NTKAZp6KPlkw1AugZzoFPQ7Dcvovo-pLb3d8xOYR3j7YFphVT5H3zCWpanzywc_bvOQ7wFOknUa9zyVEIfDthgVJ5XtCyMl-yAm1XuA8op115oXFFTg5L2aGf26vdy9K77D5Tono';
const materialImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXL9K_RHjmPLEAkeQaXCoBtH1_4Y6AoBZv2AYQjiA01xK4SM8nDfZOgv7Ky5cTxogesPwwQX5Fo2foVqcH8RPxzjLtWAjlnFpjzv1d3_BfJKX6-gJfiu0Q3PIKHc8O6CypEGEhCMtoGPfPgWy46_0HHizVtFE5dBA05DN0XiM8EywqpaB_iEJlfvGbHC4hRNmc4-83BCB24WT9joVWsWRnwIXDsJYLa-DZ8Rhq-nvSEd5MrnNYGP4mS92FC9PfcUwfGb2kAY29Lt8';
const konstrukceImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBS2fcrufVMqosUncICYr2nQuHP6Q_YqGItA1vqTnWbxFqA7WbNudatIszQQKBsvvmE5F5o6us9oIMlOesGBU3YVVLPIfMNA79HFfOHiBH5Xt2Bg_53FXHINJY8mdRaRZaSpX786uMb06J03GBhQxjhUgIK_MpRkDH3RMv_JrIHTa8KJY96A8bt-BlJOc4jWM7x46S0Ti5jjeEmP4nPQ9x6KOkvVVHfghEZ2hWq746OoOG0Tli1R_c2FrUHLEqQzGCHlqdQmF7dj2E';
const stabilityImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQ39ezjmXyu-ts2A0CDgGqNV3e7V_Rs_MFEyIASvBCnFNhxo-zc3HutrHy-6mlVBOrsXfoDF--h_r9C8sqnjNvc5NACgI4XSYjTBsFYvUoD9vA3rP7hvzM_ylFYno8fcdjU26z8SS3-u0iOHoLlmP7iEnbP7vSS3FUFQGjp8CLJB30653EMrBbosqj_qyRLbigmwh8U1GVTEWpwoDMhB7wb_m3R_aNN4_Ih6YqM0Sext02t49BJg5TpYAhf-T_sysZRtrvaIsHQvc';

const features = [
  {
    img: materialImg,
    alt: 'Makro detail sublimačního tisku na vlajkovém materiálu – živé barvy v struktuře vlákna',
    title: 'Materiály & Tisk',
    text: 'Používáme certifikované materiály (Supralon, Flag), které se vyznačují vysokou odolností proti natržení. Digitální sublimační tisk proniká hluboko do struktury vláken.',
    offset: false,
  },
  {
    img: konstrukceImg,
    alt: 'Moderní interiér s kovovými vlajkovými stojany různých typů na betonové podlaze',
    title: 'Konstrukce',
    text: 'Teleskopické pruty z vysoce odolného laminátu nebo hliníku. Odlehčená konstrukce pro snadnou manipulaci a bleskovou instalaci bez nářadí.',
    offset: true,
  },
  {
    img: stabilityImg,
    alt: 'Nízkouhlový pohled na řadu bílých vlajek před skleněnou fasádou mrakodrapu',
    title: 'Stabilitní Prvky',
    text: 'Široký výběr podstavců pro jakýkoliv povrch: od křížových stojanů a ocelových desek až po zavrtávací trny do země nebo plnitelné vaky s vodou.',
    offset: false,
  },
];

function VlajkyDetail() {
  return (
    <>
      <SeoHead page="vlajky" />

      {/* Hero – 7/5 grid, text left / image right */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-0 min-h-[700px] lg:min-h-[819px] items-center">
        <div className="md:col-span-7 px-8 md:px-24 py-12 md:py-24 pt-32 md:pt-24">
          <span className="section-label text-primary mb-4 block">Exteriérová Reklama</span>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-on-surface leading-tight mb-8">
            Vlajky
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant font-light leading-relaxed max-w-xl">
            Vysoce kvalitní materiály a UV tisk zajišťující brilantní barvy i v náročných podmínkách. Kompletní řešení včetně teleskopického stožáru a širokého výběru stabilních podstavců.
          </p>
          <div className="mt-12 flex flex-wrap gap-6">
            {['UV Stabilní', 'Větruodolné', 'Pratelné'].map((label) => (
              <div key={label} className="flex items-center gap-3">
                <span
                  className="material-symbols-outlined text-primary"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  check_circle
                </span>
                <span className="font-medium text-sm uppercase tracking-wider">{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-5 h-full relative overflow-hidden bg-surface-container min-h-[400px]">
          <img
            className="w-full h-full object-cover"
            src={heroImg}
            alt="Minimalistická bílá obdélníková vlajka vlající ve větru před brutalistní betonovou budovou"
          />
          <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
        </div>
      </section>

      {/* Feature gallery – 3-col staggered */}
      <section className="bg-surface-container-low py-24 px-8 md:px-24">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map(({ img, alt, title, text, offset }) => (
              <div key={title} className={`space-y-6 ${offset ? 'mt-12 md:mt-24' : ''}`}>
                <div className="aspect-square bg-surface overflow-hidden">
                  <img
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    src={img}
                    alt={alt}
                  />
                </div>
                <h3 className="text-xl font-bold tracking-tight uppercase">{title}</h3>
                <p className="text-on-surface-variant leading-relaxed font-light">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form section */}
      <section className="py-32 px-8 md:px-24 bg-surface">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

          {/* Left info */}
          <div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-8">
              Poptávkový formulář
            </h2>
            <p className="text-lg text-on-surface-variant mb-12 max-w-md font-light">
              Máte specifické požadavky nebo potřebujete kalkulaci pro větší objem? Vyplňte formulář a náš specialista se vám ozve do 24 hodin.
            </p>
            <div className="space-y-4">
              {[
                {
                  icon: 'speed',
                  title: 'Rychlá odezva',
                  text: 'Kalkulaci zpracujeme obvykle do 2 pracovních hodin.',
                },
                {
                  icon: 'design_services',
                  title: 'Grafická kontrola',
                  text: 'Vaše data zdarma zkontrolujeme před tiskem.',
                },
              ].map(({ icon, title, text }) => (
                <div key={icon} className="flex items-start gap-4">
                  <span
                    className="material-symbols-outlined text-primary p-2 bg-surface-container"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    {icon}
                  </span>
                  <div>
                    <h4 className="font-bold uppercase text-xs tracking-widest">{title}</h4>
                    <p className="text-sm text-on-surface-variant">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-surface-container-low p-8 md:p-12">
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                    Jméno a Příjmení
                  </label>
                  <input
                    className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 transition-colors py-2 outline-none text-on-surface text-sm"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                    E-mail
                  </label>
                  <input
                    className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 transition-colors py-2 outline-none text-on-surface text-sm"
                    type="email"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                    Typ Vlajky
                  </label>
                  <select className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 transition-colors py-2 outline-none text-on-surface appearance-none text-sm">
                    <option>Muší křídlo (Drop)</option>
                    <option>Kapka (Teardrop)</option>
                    <option>Klasická obdélníková</option>
                    <option>Individuální rozměr</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                    Počet kusů
                  </label>
                  <input
                    className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 transition-colors py-2 outline-none text-on-surface text-sm"
                    type="number"
                    defaultValue="1"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                  Zpráva / Specifikace
                </label>
                <textarea
                  className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 transition-colors py-2 outline-none text-on-surface resize-none text-sm"
                  rows="4"
                />
              </div>
              <Link
                to="/poptavka"
                className="block w-full precision-gradient text-white py-6 font-bold uppercase tracking-[0.2em] text-sm text-center active:scale-[0.98] transition-all"
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
            Vlajky s potiskem na míru
          </h2>
          <div className="space-y-6 text-on-surface-variant leading-relaxed">
            <p>
              Reklamní vlajky jsou jedním z nejviditelnějších nástrojů outdoorové propagace. V eTiskarna nabízíme kompletní řešení — od tisku vlajky po dodání stabilní konstrukce. Tiskovou technologií je digitální sublimace, která barvy vypaluje přímo do vláken materiálu, takže nevyblednou ani po stovkách hodin na slunci.
            </p>
            <p>
              Pro tisk používáme certifikované textilní materiály Supralon a Flag s vysokou odolností proti natržení a povětrnostním podmínkám. Na výběr jsou tvary Muší křídlo (Drop), Kapka (Teardrop) a klasická obdélníková vlajka. Konstrukce tvoří teleskopické pruty z hliníku nebo laminátu, k dispozici je celá řada podstavců pro různé povrchy.
            </p>
            <p>
              Vlajky jsou pratelné, UV stabilní a větruodolné. Kalkulaci zpracujeme obvykle do 2 pracovních hodin, grafickou kontrolu podkladů provádíme zdarma.
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
            Popište nám typ vlajky, počet kusů a místo použití. Náš specialista vás do 24 hodin kontaktuje s kalkulací na míru.
          </p>
          <Link
            to="/poptavka"
            className="precision-gradient text-white px-12 py-5 text-sm font-bold tracking-[0.2em] uppercase active:scale-95 transition-transform inline-block"
          >
            Poptávka vlajek
          </Link>
        </div>
      </section>
      <MobileBottomNav />
    </>
  );
}

export default VlajkyDetail;
