import { Link } from 'react-router-dom';
import SeoHead from '../seo/SeoHead';
import MobileBottomNav from '../components/MobileBottomNav';

const heroImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1LUYJvL8ovcQ2YPOkooBXe3yviQWnpiZJYYUaLeozv-DjmY548z8WSqfoijOO5CueB7exg5POnatlNqLfMXDiBKfrgyO-N-DNDggyiD73Uy1J3CYqzPjWUPqqnAEYdsK_LAAzjmZPoJrEecqPM_9HuGZLuiINrXXXG30wkFC5uodbaR7LQNfPN8Kaa5s1Tw78ygGK-Zku-ex6pA3IZrrc9FOIapSHQukFpY654SpDXNGNvN4FlqSBnR8pQp_4ARZ4-yhQ6-YEbfc';
const galleryImg1 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwfwxXeUfHVDFCe0XW4jUP4j8rYpurRJSEqBuRjpbpQ0q5Q7Tnl4VbYgAmb9pdLHE47-B0ZGIkcipE93dxLwUGGnAFg2SyLH3-weUCwp7J2o-84DXaVt0Vcpt8QYfeKcFznyjLqWewFxAijElsJPnCsBMAxK5ZgUvvWz7IZNCx7QCbipYNA2QuXWRlDWt5GWB5TBr25RWqQ9dK8Lc1n2ThGmNqQDs-eg0VwIKt-SyVtq4-fyPRx6asucZrpfepuNni1XTTKfU0_gE';
const galleryImg2 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnwE5dB4QJAfyj4qjFhFKNXVkkveuQDbxUboHLU3rMaVYkg-8VwdpWjAnNvTYpTL0d1bQJtvH4tlzMRTTl7wshzbSRgtV8myHP0fngZ1T_b6kuThsfrqh2jAUNNkxl0NLH9SzOcd8UXAZvskF-RG1oQeQh-zTIoDGTH6MRzahdPUzsotego1WtGlCM3LwiZoTAJ6D5AeAizlze9d1RCfIqRsFBfJ5ge_alMaVl3HqkPccBs-f0f0Qf8eC_O0XonatKVwYgdG1s8uA';
const galleryImg3 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2LTLNt7PpuuCS5CSItyhY8gKJse4uxhSqMNut1g0fcRjVApPBMDDjaWE4nPQxw1uOfzwqGUZGRvAxEKFs_Lw2_RB1Xb-gv7zRCr7NAWzhF0ofgSomVzHMRg97dmjx2Sj86e5popMo74j8Y3xb7tGPza4GlqjUISh4noH6Ggp3J5Ao9pwg3ydCT2lyXEFRCFVX8mRmBmkOm4W9M_gH51pp_7yTpUVsS1-0JIWYgKWkQ03AtAD-YsbGu1gVvA0R3XQ9mwe1pmWsUjs';

function BlokyDetail() {
  return (
    <>
      <SeoHead page="bloky" />

      {/* Hero */}
      <section className="px-8 md:px-24 grid grid-cols-1 lg:grid-cols-12 gap-0 mb-32 items-center pt-28">
        <div className="lg:col-span-5 z-10 py-12">
          <span className="section-label text-primary">Kategorie / Tiskoviny</span>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] text-on-background mb-8">
            Tisk bloků<br />na míru
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-md font-light mb-12">
            Lepené potištěné bloky pro vaše poznámky, prezentace i firemní dárky. Prémiové papíry, kraftové i strukturované obálky a precizní ořez s přesností na 0,1 mm.
          </p>
          <div className="flex gap-4">
            <Link
              to="/poptavka"
              className="precision-gradient text-white px-10 py-4 font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-opacity inline-block"
            >
              Odeslat poptávku
            </Link>
          </div>
        </div>
        <div className="lg:col-span-7 relative">
          <div className="aspect-[4/5] md:aspect-[16/10] bg-surface-container-low overflow-hidden">
            <img
              className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-1000"
              src={heroImg}
              alt="Tisk bloků eTiskarna – prémiové lepené poznámkové bloky s grafickým rastrem"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 md:-bottom-16 md:-left-16 bg-primary p-12 hidden md:block">
            <div className="text-white">
              <div className="text-4xl font-black mb-1">90 g/m²</div>
              <div className="text-xs uppercase tracking-[0.3em] font-bold opacity-80">Premium Offset</div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs Bento */}
      <section className="px-8 md:px-24 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface-container-low p-12 flex flex-col justify-between aspect-square">
            <span
              className="material-symbols-outlined text-primary text-4xl block"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              inventory_2
            </span>
            <div>
              <h3 className="text-2xl font-bold tracking-tight mb-4 uppercase">Lepená vazba</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm font-light">
                Pevně lepené hlavy s možností snadného odtržení listů bez poškození vazby. Zadní podložka z 1mm šedé strojní lepenky zajišťuje stabilitu při psaní v ruce.
              </p>
            </div>
          </div>
          <div className="bg-surface-container-highest p-12 flex flex-col justify-between aspect-square md:translate-y-12">
            <span
              className="material-symbols-outlined text-primary text-4xl block"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              auto_awesome_motion
            </span>
            <div>
              <h3 className="text-2xl font-bold tracking-tight mb-4 uppercase">Volba obálky</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm font-light">
                Od minimalistických kraftových obálek po luxusní strukturované papíry s UV lakem nebo slepotiskem. Obálka jako první dojem z vašeho produktu.
              </p>
            </div>
          </div>
          <div className="bg-surface-container-low p-12 flex flex-col justify-between aspect-square">
            <span
              className="material-symbols-outlined text-primary text-4xl block"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              architecture
            </span>
            <div>
              <h3 className="text-2xl font-bold tracking-tight mb-4 uppercase">Precizní ořez</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm font-light">
                Každý blok prochází ruční kontrolou a je oříznut s přesností na 0,1 mm. Standardně 50 nebo 100 listů na blok — na přání i jiný počet.
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
                  <option>A4 / Standard</option>
                  <option>A5 / Compact</option>
                  <option>A6 / Pocket</option>
                  <option>Zakázkový rozměr</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">
                  Papír
                </label>
                <select className="w-full bg-surface-container-low border-0 text-sm font-bold p-4 focus:ring-2 focus:ring-primary">
                  <option>80 g Offset</option>
                  <option>90 g Premium White</option>
                  <option>100 g Recyklovaný</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">
                  Množství (ks)
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
            Tisk reklamních bloků na míru
          </h2>
          <div className="space-y-6 text-on-surface-variant leading-relaxed">
            <p>
              Reklamní bloky jsou praktickým a oblíbeným firemním dárkem. V eTiskarna tiskneme bloky na míru v libovolném formátu — od kapesních A6 po standardní A4 — s vlastní grafikou na každém listu i obálce.
            </p>
            <p>
              Nabízíme papíry 80 g, 90 g Premium White i 100 g recyklovaný papír. Obálku lze vyhotovit z kraftové lepenky, strukturovaného papíru nebo s povrchovou úpravou UV lakem. Zadní podložka z 1mm šedé lepenky zajišťuje stabilitu při psaní.
            </p>
            <p>
              Standardně bloky vyrábíme po 50 nebo 100 listech, na přání i v jiném počtu. Každý kus prochází ruční kontrolou a je oříznut s přesností na 0,1 mm — výsledek je produkt, který reprezentuje vaši značku na každém psacím stole.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-8 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[500px] md:h-[600px]">
          <div className="md:col-span-2 relative overflow-hidden group">
            <img
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              src={galleryImg1}
              alt="Makro detail lepené páteře bloku – precizní vazba a čistý ořez"
            />
          </div>
          <div className="relative overflow-hidden group">
            <img
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              src={galleryImg2}
              alt="Otevřený blok s rastrem a plnicím perem na pracovním stole"
            />
          </div>
          <div className="relative overflow-hidden group">
            <img
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              src={galleryImg3}
              alt="Firemní bloky naskládané na sobě v moderní kancelářské estetice"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-surface-container-low px-8 md:px-24 mt-32">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
            Máte konkrétní projekt?
          </h2>
          <p className="text-on-surface-variant text-lg mb-10 max-w-xl mx-auto">
            Popište nám vaši zakázku — formát, počet listů, grafiku a obálku. Náš specialista vás do 24 hodin kontaktuje s kalkulací na míru.
          </p>
          <Link
            to="/poptavka"
            className="precision-gradient text-white px-12 py-5 text-sm font-bold tracking-[0.2em] uppercase active:scale-95 transition-transform inline-block"
          >
            Poptávka tisku bloků
          </Link>
        </div>
      </section>
      <MobileBottomNav />
    </>
  );
}

export default BlokyDetail;
