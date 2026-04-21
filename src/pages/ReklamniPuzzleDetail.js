import { Link } from 'react-router-dom';
import SeoHead from '../seo/SeoHead';

const heroImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3RrHl8kAkWVEhXj5p0Yo5qC5F63fRWN39N1idFyyZfmHBPEUwv0yXB1m7juBCBF2r9a_y3YezQSzY9Jgnv7WiYKwgpZYhqfbCMkvYMXlk7_RB9uVKZ8ojf1oQ0fUUE8F_v94EqNzqGPlk5abwlTzar7cPrMhJjMwbmB8tpKLwzGN86vBDglTwE2b4FPVtEFlUQoP_eOT41Ot06waqOw2Xn6CKsMPtjltBCsYOMqT76L6hC8_eO0wvHYhLQkpLiZU1A40laoole0g';
const galleryImg1 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCirpVqZapymcWSljtx7w9UlZDY3l4i0lCdonrIGh-gb86l5gPIjEdgGXZk_0EREWHb-T2ijtzVo3rBliFIX1NUNOG-0gmuqQaC0AZ8iVS3_GghODutOf8uLeWYF7UJ395KZZ1zlLUqHkcSaZBmn09jKiN3lWifxotXSfJeelgr2koLc9e2b4zmPyR2UfCLN2PV_kUF7FTYiNP9ngDPomoZnfJwcz0cylmSsKM0Adv7nFjANe3SpB3zdjR5nyjPYal8xXP2yrblDg8';
const galleryImg2 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFW1nI4ZBZYVRyTo2IoLvMVxAUeIZ4ysk0ATEwr6rBIl6VmK25HRIRgloFtDhiXwM6kmAjCbAT9_STehfT0cTHxdEozeDdg1GohUk8fjHEmrBnAbBLqJZuweXmQYwRoIEOp1-8saz26LK1V8c9jiodEjYdkCKIRbvcldz2FOd6q7FcvqytLto4ZwRO1cgymyTD9bZTLmsoylqPK19U36lva5IHZSQC2FyjfOTbN-Qqmy_kjaCWCz-EF6CZRmrcTaVXM_c31A1q_WY';

function ReklamniPuzzleDetail() {
  return (
    <>
      <SeoHead page="reklamni-puzzle" />

      {/* Hero – editorial title left, image right */}
      <section className="px-8 md:px-24 pt-32 mb-24 lg:mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <span className="section-label text-primary mb-4 block">Kategorie / Tiskoviny</span>
            <h1 className="text-6xl lg:text-[7rem] font-extrabold tracking-tighter leading-[0.9] text-on-surface mb-12">
              REKLAMNÍ<br />
              <span className="text-primary">PUZZLE</span>
            </h1>
            <p className="text-on-surface-variant text-xl leading-relaxed max-w-xl font-light">
              Precizní zpracování každého dílku. Spojení umění, marketingu a haptického zážitku, který vaše klienty nepustí. Recyklovaná lepenka 2 mm, ofsetový tisk a matný lněný lak — vše v jednom produktu.
            </p>
          </div>
          <div className="lg:col-span-5 aspect-[4/5] overflow-hidden bg-surface-container-low">
            <img
              className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-1000"
              src={heroImg}
              alt="Reklamní puzzle eTiskarna – prémiové propagační skládačky s firemním potiskem"
            />
          </div>
        </div>
      </section>

      {/* Specs Bento */}
      <section className="bg-surface-container-low py-32 px-8 md:px-24">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <span className="text-primary font-bold tracking-widest uppercase text-sm">Parametry</span>
              <h2 className="text-4xl font-bold tracking-tight">Různorodost &amp; Formát</h2>
              <div className="h-px bg-outline-variant/30 w-full"></div>
              <p className="text-on-surface-variant leading-relaxed font-light text-sm">
                Nabízíme širokou škálu rozměrů od kapesních formátů až po velkoformátové skládačky pro sběratele a firemní akce.
              </p>
            </div>
            <div className="md:col-span-2 grid grid-cols-2 gap-4">
              {[
                {
                  icon: 'grid_view',
                  title: 'Variabilita dílků',
                  text: '24, 48, 100, 500 až 1000 dílků dle vaší kampaně.',
                },
                {
                  icon: 'straighten',
                  title: 'Vlastní rozměry',
                  text: 'A5, A4, A3 nebo individuální formát na míru.',
                },
                {
                  icon: 'palette',
                  title: 'Věrnost barev',
                  text: 'Ofsetový tisk s vysokým gamutem pro dokonalý design.',
                },
                {
                  icon: 'inventory_2',
                  title: 'Prémiové balení',
                  text: 'Krabice s vlastním potiskem a laminací v ceně zakázky.',
                },
              ].map(({ icon, title, text }) => (
                <div key={title} className="bg-surface-container-lowest p-8 flex flex-col justify-between">
                  <span
                    className="material-symbols-outlined text-primary text-4xl"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    {icon}
                  </span>
                  <div className="mt-12">
                    <h3 className="text-xl font-bold uppercase tracking-tight">{title}</h3>
                    <p className="text-on-surface-variant mt-2 text-sm font-light">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery – asymmetric rows */}
      <section className="py-32 px-8 md:px-24">
        <div className="max-w-screen-xl mx-auto space-y-32">
          {/* Row 1 */}
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="w-full lg:w-3/5 aspect-video bg-surface-container-low overflow-hidden">
              <img
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                src={galleryImg1}
                alt="Firemní reklamní puzzle složené na čistém stole s jemným ranním světlem"
              />
            </div>
            <div className="w-full lg:w-2/5">
              <h3 className="text-3xl font-bold mb-6 italic text-slate-800">
                "Každý dílek vypráví příběh vaší značky."
              </h3>
              <p className="text-on-surface-variant font-light text-lg leading-relaxed">
                Náš proces využívá speciálně vyvinuté raznice zaručující, že každý dílek je unikátní a do celku zapadne s dokonalým „klikem". Používáme výhradně recyklovanou lepenku s modrým jádrem o tloušťce 2 mm.
              </p>
            </div>
          </div>
          {/* Row 2 */}
          <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
            <div className="w-full lg:w-3/5 aspect-[16/10] bg-surface-container-low overflow-hidden">
              <img
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                src={galleryImg2}
                alt="Detail povrchu puzzle s matným lněným lakem a ostrým uměleckým tiskem"
              />
            </div>
            <div className="w-full lg:w-2/5 lg:text-right">
              <h3 className="text-3xl font-bold mb-6 text-primary">Povrchová úprava.</h3>
              <p className="text-on-surface-variant font-light text-lg leading-relaxed">
                Matný lak zabraňuje odleskům a lněná struktura papíru dodává výslednému produktu nádech luxusu, který je v reklamním segmentu nevídaný.
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
                  Formát puzzle
                </label>
                <select className="w-full bg-surface-container-low border-0 text-sm font-bold p-4 focus:ring-2 focus:ring-primary">
                  <option>A4 (210 × 297 mm)</option>
                  <option>A3 (297 × 420 mm)</option>
                  <option>A2 (420 × 594 mm)</option>
                  <option>Kruhový formát</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">
                  Počet dílků
                </label>
                <select className="w-full bg-surface-container-low border-0 text-sm font-bold p-4 focus:ring-2 focus:ring-primary">
                  <option>48 XL dílků</option>
                  <option>100 dílků</option>
                  <option>200 dílků</option>
                  <option>500 dílků</option>
                  <option>1000 dílků</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">
                  Počet kusů
                </label>
                <input
                  type="number"
                  defaultValue="50"
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
            Reklamní puzzle na míru
          </h2>
          <div className="space-y-6 text-on-surface-variant leading-relaxed">
            <p>
              Reklamní puzzle je originální a zapamatovatelný firemní dárek, který příjemce zapojí aktivně — místo toho, aby tiskovina skončila v koši. V eTiskarna vyrábíme puzzle na míru ve formátech A4, A3, A2 i zakázkových rozměrech.
            </p>
            <p>
              Každé puzzle tiskeme ofsetovým tiskem na recyklovanou lepenku s modrým jádrem o tloušťce 2 mm. Povrch upravujeme matným lakem s lněnou texturou, která eliminuje odrazy světla a dodává produktu prémiový hmatový zážitek.
            </p>
            <p>
              Na výběr jsou počty dílků od 48 XL kusů pro děti až po 1000 dílků pro náročné sběratele. Součástí dodávky je krabice s vlastním potiskem a laminací. Minimální odběr od 50 kusů, odpovíme s kalkulací do 24 hodin.
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
            Popište nám vaši zakázku — formát, počet dílků, náklad a grafiku. Náš specialista vás do 24 hodin kontaktuje s kalkulací na míru.
          </p>
          <Link
            to="/poptavka"
            className="precision-gradient text-white px-12 py-5 text-sm font-bold tracking-[0.2em] uppercase active:scale-95 transition-transform inline-block"
          >
            Poptávka reklamního puzzle
          </Link>
        </div>
      </section>
    </>
  );
}

export default ReklamniPuzzleDetail;
