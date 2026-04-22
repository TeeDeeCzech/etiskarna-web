import { Link } from 'react-router-dom';
import SeoHead from '../seo/SeoHead';
import MobileBottomNav from '../components/MobileBottomNav';

const heroImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJMXGUsyGig-BKVfE3nF_Hha6ITRC82dv6I9tT8ee9cXVeX1H-HjzU1u7zaI6B4YtjO1cofStGxWip0Eboa0W_BnfdaCtMxE3vj50eJaBIJX2cdV6ovqfy0jenzQfE5wNetl_VgpheOBlC1o4x3w5PttxV1HS6_kxfa2Y9V8wLfeu-YomSD21XRPY9fKDRHkUJU5T5IIS_u993tO6frbQjxH5wC3FNN7wE0mJHzPls3n59abNs7TIpibjWxp1iOS2qhmJWkHLQqwk';
const bentoImg1 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCep_Ua3Fx5noKOKx2ZxNfz_Fiz4nDAYHFDIsobqfmnRbgdlpdCV1B297_UWx_m4ypWMgcdO4askW-len-anL2g-rQVx1gL0M9r8Sd6bt1052D6tdZ9kzcDAGatJws8u5c9C4bZDVP4mmlQP3SasgXi51dSM-5g6YZX-wmwmc19QCXyMqm9Qocygjomm9-UyEWkykvwA_VRwEQmD5nqNy6F4f_FREv9CoaCaAEKRp8a6aM6TS33r2bQaSrXiuTAq4-kuB85BYnlUYw';
const bentoImg2 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJ3zDOpQFHVr2BZpdqm9xHEaJLN7gpWbqdLazhrbaNup1ChNLbo7v8Q1Fixm7raXNm4CS_GQiKa4zc3vV-fSgUj_VYCdNbkrDxgqiJ5srD4C9oN7uz5s1jCATJEJ7-lKjL1F7DPD9KcN9fE07QJcWpCzDWneulTNdYvFO7jgW7c0ADFPM6pho5qVf-pIIQ5VOTZzsGswvfL_oELKYSuiPD6TRVZWdFaFmDfacfNq9bHKUnzSlcSm7uCHYbekf_4LQR1hQ01bvzxQE';

function ObalyDetail() {
  return (
    <>
      <SeoHead page="obaly" />

      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-surface-container-low flex items-center px-8 md:px-24 pt-28 pb-16 md:pb-0 md:h-[900px]">
        <div className="grid grid-cols-1 md:grid-cols-12 w-full items-center gap-12">
          <div className="md:col-span-5 z-10">
            <span className="section-label text-primary">Kategorie / Tiskoviny</span>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-on-background leading-[0.9] mb-8">
              Tisk obalů<br />na míru
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-md font-light">
              Tisk obalů od malých krabiček z hladké lepenky až po velké krabice z potištěných vlnitých lepenek. Nabízíme precizní výsek, prémiové povrchové úpravy a individuální konstrukční design.
            </p>
          </div>
          <div className="md:col-span-7 h-full w-full relative">
            <img
              className="w-full h-[400px] md:h-[716px] object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-1000 shadow-2xl"
              src={heroImg}
              alt="Tisk obalů eTiskarna – ukázka prémiových krabic a obalových materiálů"
            />
            <div className="absolute -bottom-12 -left-12 bg-white p-12 hidden md:block">
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-bold text-primary">01.</span>
                <span className="text-xs tracking-widest uppercase font-black">Prémiové obaly</span>
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
              Možnosti výroby obalů
            </h2>
            <div className="space-y-4">
              <div className="h-px bg-outline-variant opacity-20"></div>
              <p className="text-sm text-on-surface-variant leading-loose italic">
                "Každý obal je architektonickým dílem — navrhujeme pro zážitek z rozbalení i maximální ochranu obsahu."
              </p>
            </div>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 bg-surface-container-low hover:bg-surface-container-high transition-colors group">
              <span
                className="material-symbols-outlined text-primary text-4xl mb-4 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                package_2
              </span>
              <h3 className="text-xl font-bold mb-3">Hladká a vlnitá lepenka</h3>
              <p className="text-on-surface-variant text-sm font-light leading-relaxed">
                Hladká lepenka pro luxusní šperkovnice a kosmetické obaly, vlnitá lepenka (E, B, C) pro přepravní a e-commerce krabice s maximální odolností.
              </p>
            </div>
            <div className="p-8 bg-surface-container-low hover:bg-surface-container-high transition-colors group">
              <span
                className="material-symbols-outlined text-primary text-4xl mb-4 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                auto_awesome
              </span>
              <h3 className="text-xl font-bold mb-3">Povrchové úpravy</h3>
              <p className="text-on-surface-variant text-sm font-light leading-relaxed">
                Matné i lesklé lamino, parciální UV lak, horká ražba (zlatá/stříbrná fólie), slepotisk (emboss/deboss) pro prémiový vzhled i hmat.
              </p>
            </div>
            <div className="p-8 bg-surface-container-low hover:bg-surface-container-high transition-colors group">
              <span
                className="material-symbols-outlined text-primary text-4xl mb-4 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                precision_manufacturing
              </span>
              <h3 className="text-xl font-bold mb-3">Digitální výsek bez raznice</h3>
              <p className="text-on-surface-variant text-sm font-light leading-relaxed">
                Pro malosériovou výrobu nabízíme digitální výsek bez nutnosti výroby raznice — ideální pro prototypy, limitované edice i testovací série.
              </p>
            </div>
            <div className="p-8 bg-surface-container-low hover:bg-surface-container-high transition-colors group">
              <span
                className="material-symbols-outlined text-primary text-4xl mb-4 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                architecture
              </span>
              <h3 className="text-xl font-bold mb-3">Konstrukční design na míru</h3>
              <p className="text-on-surface-variant text-sm font-light leading-relaxed">
                Navrhujeme tvarové i funkční řešení obalů od základu — teleskopické krabice, krabice se zámkem, výsuvné šuplíkové obaly i nestandardní formáty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery – Bento */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 h-[500px] bg-surface-container-lowest relative group overflow-hidden">
              <img
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                src={bentoImg1}
                alt="Detail vlnité lepenky s precizním grafickým tiskem"
              />
              <div className="absolute bottom-0 left-0 p-8 bg-white/80 backdrop-blur-md">
                <h3 className="text-xl font-bold tracking-tight">Vlnitá Lepenka</h3>
                <p className="text-xs uppercase tracking-widest text-on-surface-variant">Large format durability</p>
              </div>
            </div>
            <div className="md:col-span-4 h-[500px] bg-surface-container-lowest flex flex-col justify-between p-12 border-l border-white/20">
              <span className="text-5xl font-thin text-primary">02.</span>
              <div>
                <h4 className="text-2xl font-bold mb-4 tracking-tighter">Hladká Lepenka</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed font-light">
                  Ideální pro luxusní šperkovnice a kosmetické obaly s precizním výsekem a UV lakováním pro dokonalý první dojem.
                </p>
              </div>
            </div>
            <div className="md:col-span-4 h-[500px] bg-primary flex flex-col justify-end p-12">
              <h4 className="text-2xl font-bold text-white mb-4 tracking-tighter">Strukturální design na míru</h4>
              <p className="text-on-primary-container text-sm leading-relaxed font-light mb-8">
                Každá krabice je architektonickým dílem. Navrhujeme pro zážitek z rozbalení i maximální funkčnost.
              </p>
              <Link
                to="/poptavka"
                className="w-fit text-white border-b border-white text-[10px] font-bold uppercase tracking-widest pb-1 hover:opacity-70 transition-opacity"
              >
                Technická konzultace
              </Link>
            </div>
            <div className="md:col-span-8 h-[500px] bg-surface-container-lowest relative overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={bentoImg2}
                alt="Luxusní dárkové krabičky v minimalistickém designu"
              />
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
                  Typ obalu
                </label>
                <select className="w-full bg-surface-container-low border-0 text-sm font-bold p-4 focus:ring-2 focus:ring-primary">
                  <option>Malá krabička (hladká lepenka)</option>
                  <option>Velká krabice (vlnitá lepenka)</option>
                  <option>Luxusní dárkový obal</option>
                  <option>E-commerce přepravní obal</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">
                  Materiál
                </label>
                <select className="w-full bg-surface-container-low border-0 text-sm font-bold p-4 focus:ring-2 focus:ring-primary">
                  <option>GZ1 Hladká lepenka</option>
                  <option>GD2 Kraftová lepenka</option>
                  <option>Mikrovlna E</option>
                  <option>Vlna B / C</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">
                  Množství (ks)
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
            Tisk obalů na míru
          </h2>
          <div className="space-y-6 text-on-surface-variant leading-relaxed">
            <p>
              Obal je prvním dojmem, který zákazník z vašeho produktu získá. V eTiskarna navrhujeme a tiskneme obaly na míru — od malých krabiček pro kosmetiku a šperky až po robustní přepravní krabice pro e-commerce.
            </p>
            <p>
              Pracujeme s hladkými lepenkami GZ1 a GD2, kraftovými materiály i vlnitými lepenkami v mikrovlně E a vlnách B a C. Povrchové úpravy zahrnují matné i lesklé laminování, parciální UV lak, horkou ražbu a slepotisk pro prémiový vizuální i hmatový dojem.
            </p>
            <p>
              Pro malosériovou výrobu a prototypy využíváme digitální výsek bez nutnosti výroby raznice. Pomůžeme vám s návrhem konstrukčního řešení — ať jde o standardní teleskopické krabice nebo zcela unikátní formáty na míru.
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
            Popište nám vaši zakázku — typ obalu, rozměry, množství a povrchovou úpravu. Náš specialista vás do 24 hodin kontaktuje s kalkulací na míru.
          </p>
          <Link
            to="/poptavka"
            className="precision-gradient text-white px-12 py-5 text-sm font-bold tracking-[0.2em] uppercase active:scale-95 transition-transform inline-block"
          >
            Poptávka tisku obalů
          </Link>
        </div>
      </section>
      <MobileBottomNav />
    </>
  );
}

export default ObalyDetail;
