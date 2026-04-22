import { Link } from 'react-router-dom';
import SeoHead from '../seo/SeoHead';
import MobileBottomNav from '../components/MobileBottomNav';

const heroBgImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkp48A4f_8bcZdsMtJEWVAmetZkbl6fI_22km68bh4QaMIgnmSPIgd5X24uyHWGr9bcO-fAh0-Bsgff9mk3DYIVltc6crHx2TY533VRsAmWup9IgAebPoajhJs4LzMVHH-RfrhRVJsZGozF0OQ70YBR_xgNyRSCGz3Xxi_BDgqUN_lu-KV7qDcc0UaZlsNPjH1ncAfdIklyDmmOQgw33PR_Idg2XUCCBcBzWeAQDa6ULpwx3klja1wYll4VKnFKz6zF5ChVwAM-_Y';
const heroSideImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0ui3P5aek_e1OBivPWY2-IW_KwitiUnJS9HXa4OGn90DTt5dCPRIizENpRpaxO4a8wwVUpYfipc8le3tOBeXVhrnvNtoJs_k2mFyWX3c7IInZ3-gnXOqYlZ4bYXtBZtJtekAgmtqYnNwjyDGtsZGilKGAGLDGoZEOw6fiu757c5MUW3uMD2mkVxPitGzEJkvYJK53zhANT1NOwVI7Te0vVx5vN2OUDyncwfzQi1tuQ1d64-qs39G88oaSTWoGVrH_I-sTL7PRxpM';
const kapaImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTuh3-K5vYVt6lXQqkhavT9Hn8Ww86kRiKqYe9qduDKF2TsgJLybTesicQFs6FZ_MFjTgzW6IpySzXSgd6PkCTmIVcqfwhMw_eK9oEkoFlrhYLKeVTE0f03VdnyThoxxs9zjEV4IJ5DfX2ntckQWdulpp_3uey0K8AruqDnWIZWSqkCPvSoADRcoFL8eEe4dbiORp5dElR84Cn4Dw1Tt7e_chrhlSLoOW26EoOQbEWs2DFcUPasciPBMbR_ENPkqU6qrbDbF0YvRM';
const pvcImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyiWEZUB7LC_M31BfaekkOcnIMLqW5eI_RAp4B_3ldYvFNU-lgg2a6H5vB-kGPHldWhjGF2q5Tf1ad65pm7Q4GzkfSvsSh3TXJ061oIv0HjR95ebXUY7fxzRZYzTiHWl-3Lb1N9ycUPtW1QPZnPvs7FTVEXKZ_PNSlp6cSbukt5w5H240avn-KLlqKFHTnX4BMNjGj0zjrbLa4fiDGOoi2y6JOMl0IclQJr8B9ky-qssSVS6juWY-9fB1JAPiij8WtGi6CiEI6ZMw';
const uvImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4MDu_K0eYeUp2m6FdLSRCyfn7qfJLB1OhnQcj7o79RjDoY5Wwwojav9EDvsUDf7X1-PeynVlY20WocpJGocZ8dFYnwmNxmaGCeHkTAGtQcZo9hSs54sYev3g-GeRI1dD2vVmZTEgqVzu9F1H3RgUrAwUF1RdtlmueZIHYxJx7XBje3QGTwgA0TaYkJL55ft3VUBA8Bb06BapvP27aVy3sGGoYxU8EWmlsNYRAWJY9gxi30tt17nO7BofIzM8jY374qGGvJ3GtXOI';
const showcaseImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdIG8U2jl4pkXpOF-P23CKdfBfjclwvm4hIYdLWESu8ILTld2b2OMm5tYtPXIldR7rF9Gd55mJmJliCHxQY7NcXPMSNPNJIiCMpkBmZK8VjOHPg-UfHzuWgD1OIeCWGBgujtRRqnZGWR3UyV44FmVLU6yN5Sg9oZbM9KD6iARpsAQuW-3o8Rp9M1XKS4Nt-cQtr2b2XQ6vrxNMf9iMebs2Q-k208tmK_bUywwR3oZHSbx9uUb8r8LnoEDf3v4EKMNS_XC7dMsE26I';

const materials = [
  {
    title: 'Kapa desky',
    description:
      'Lehčená pěnová deska s papírovým povrchem. Ideální pro interiérové výstavy, prezentace a dočasné dekorace. Excelentní rovinnost a nízká váha.',
    img: kapaImg,
    alt: 'Detail struktury kapa desky – lehčené pěnové jádro s hladkým bílým povrchem',
    offset: false,
  },
  {
    title: 'PVC Sendvič',
    description:
      'Vysoce odolné desky s jádrem z polyethylenu a hliníkovými vrstvami. Pro nejnáročnější exteriérové aplikace a prémiové značení.',
    img: pvcImg,
    alt: 'Makro záběr vrstev hliníkové kompozitní desky – kovový lesk na hranách',
    offset: true,
  },
  {
    title: 'UV Potisk',
    description:
      'Technologie přímého tisku vytvrzovaného UV světlem. Barvy jsou okamžitě suché, odolné proti poškrábání a UV záření bez nutnosti laminace.',
    img: uvImg,
    alt: 'Mikroskopický pohled na kapičky inkoustu CMYK na texturovaném povrchu – živé barvy, ostrost tisku',
    offset: false,
  },
];

function ReklamniDeskyDetail() {
  return (
    <>
      <SeoHead page="reklamni-desky" />

      {/* Hero – full-height with background image + side photo */}
      <section className="relative h-[700px] lg:h-[819px] w-full flex items-center overflow-hidden pt-24">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover grayscale opacity-20"
            src={heroBgImg}
            alt=""
            aria-hidden="true"
          />
        </div>
        <div className="relative z-10 px-8 md:px-24 w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="section-label text-primary block">Velkoformátový tisk</span>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-tight text-on-surface">
              Reklamní desky
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl max-w-md leading-relaxed font-light">
              Plastové i papírové reklamní desky do interiéru i exteriéru, velký výběr materiálů od kapa desky po plastové sendvičové desky s velmi kvalitním UV potiskem.
            </p>
          </div>
          <div className="hidden md:block">
            <img
              className="w-full aspect-[4/5] object-cover shadow-2xl"
              src={heroSideImg}
              alt="Různé tištěné reklamní desky složené asymetricky na neutrální šedé stěně s dramatickými stíny"
            />
          </div>
        </div>
      </section>

      {/* Materials grid – 3-col staggered */}
      <section className="py-24 px-8 md:px-24 bg-surface-container-low">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {materials.map(({ title, description, img, alt, offset }) => (
            <div key={title} className={`space-y-8 ${offset ? 'pt-12 md:pt-24' : ''}`}>
              <div className="w-12 h-[2px] bg-primary" />
              <h2 className="text-3xl font-bold tracking-tighter uppercase">{title}</h2>
              <p className="text-on-surface-variant leading-relaxed font-light">{description}</p>
              <img
                className="w-full grayscale hover:grayscale-0 transition-all duration-700"
                src={img}
                alt={alt}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Form section */}
      <section className="py-24 px-8 md:px-24 bg-surface flex flex-col md:flex-row items-start gap-24">

        {/* Sticky left panel */}
        <div className="md:w-1/3 sticky top-32">
          <h3 className="text-5xl font-extrabold tracking-tighter mb-8 leading-none">
            Poptávkový formulář
          </h3>
          <p className="text-on-surface-variant font-medium">
            Naše kalkulační oddělení připraví nabídku na míru vašemu projektu do 24 hodin.
          </p>
          <div className="mt-12 space-y-4">
            {[
              { icon: 'verified', label: 'Garance kvality tisků' },
              { icon: 'speed', label: 'Rychlé doručení po celé ČR' },
            ].map(({ icon, label }) => (
              <div key={icon} className="flex items-center gap-4 text-primary">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  {icon}
                </span>
                <span className="font-bold text-xs uppercase tracking-widest">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="md:w-2/3 w-full">
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-2">
                <label className="font-bold text-xs uppercase tracking-widest text-on-surface-variant block">
                  Typ materiálu
                </label>
                <select className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 px-0 py-4 transition-colors font-medium text-sm">
                  <option>Kapa deska (interiér)</option>
                  <option>Plastová sendvičová deska (exteriér)</option>
                  <option>Pěněné PVC</option>
                  <option>Jiný / Nevím</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-bold text-xs uppercase tracking-widest text-on-surface-variant block">
                  Rozměr (mm)
                </label>
                <input
                  className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 px-0 py-4 transition-colors font-medium text-sm placeholder:text-outline"
                  placeholder="např. 1000 × 2000"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="font-bold text-xs uppercase tracking-widest text-on-surface-variant block">
                  Jméno a příjmení
                </label>
                <input
                  className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 px-0 py-4 transition-colors font-medium text-sm placeholder:text-outline"
                  placeholder="Jan Novák"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="font-bold text-xs uppercase tracking-widest text-on-surface-variant block">
                  E-mail
                </label>
                <input
                  className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 px-0 py-4 transition-colors font-medium text-sm placeholder:text-outline"
                  placeholder="vas@email.cz"
                  type="email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-bold text-xs uppercase tracking-widest text-on-surface-variant block">
                Poznámka k projektu
              </label>
              <textarea
                className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 px-0 py-4 transition-colors font-medium text-sm placeholder:text-outline resize-none"
                placeholder="Popište nám vaše požadavky na tisk a opracování..."
                rows="4"
              />
            </div>
            <Link
              to="/poptavka"
              className="precision-gradient text-white font-bold uppercase tracking-widest text-sm px-12 py-6 inline-block w-full md:w-auto text-center active:scale-[0.98] transition-transform"
            >
              Odeslat nezávaznou poptávku
            </Link>
          </div>
        </div>
      </section>

      {/* Showcase banner – half image / half dark panel */}
      <section className="h-[500px] lg:h-[614px] flex">
        <div className="w-1/2 h-full">
          <img
            className="w-full h-full object-cover"
            src={showcaseImg}
            alt="Minimalistický interiér galerie s velkoformátovými reklamními deskami na bílých stěnách"
          />
        </div>
        <div className="w-1/2 h-full bg-slate-900 flex items-center justify-center p-12">
          <div className="max-w-xs text-center space-y-6">
            <h4 className="text-white text-3xl font-bold tracking-tight">
              Potřebujete vzorník materiálů?
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Zašleme vám sadu tištěných vzorků, abyste si mohli vybrat ten správný povrch pro váš projekt.
            </p>
            <Link
              to="/poptavka"
              className="inline-block text-primary font-bold uppercase tracking-widest text-xs border-b-2 border-primary pb-2 hover:opacity-80 transition-all"
            >
              Vyžádat vzorník
            </Link>
          </div>
        </div>
      </section>

      {/* SEO text block */}
      <section className="py-24 px-8 md:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-10">
            Reklamní desky s potiskem na míru
          </h2>
          <div className="space-y-6 text-on-surface-variant leading-relaxed">
            <p>
              Reklamní desky jsou univerzálním nástrojem pro označení provozoven, výstavní expozice, prezentační panely i velkoformátové plakátování. V eTiskarna nabízíme tisk na tři základní typy materiálů — kapa desky, plastové sendvičové desky a pěněné PVC — v libovolném rozměru.
            </p>
            <p>
              Kapa deska je lehčená pěnová deska s papírovým povrchem, ideální pro interiérové výstavy a dočasné dekorace. Plastová sendvičová deska s hliníkovými vrstvami vydrží i v náročném exteriérovém prostředí. Na všechny materiály tiskneme technologií přímého UV tisku — barvy jsou okamžitě suché, odolné vůči škrábání a UV záření bez nutnosti laminace.
            </p>
            <p>
              Realizujeme zakázky libovolných rozměrů, od malých orientačních tabulek po velkoformátové výstavní panely. Kalkulaci připravíme do 24 hodin, dodáváme po celé ČR. Na vyžádání zašleme vzorník materiálů.
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
            Popište nám materiál, rozměr a počet kusů. Náš specialista vás do 24 hodin kontaktuje s kalkulací na míru.
          </p>
          <Link
            to="/poptavka"
            className="precision-gradient text-white px-12 py-5 text-sm font-bold tracking-[0.2em] uppercase active:scale-95 transition-transform inline-block"
          >
            Poptávka reklamních desek
          </Link>
        </div>
      </section>
      <MobileBottomNav />
    </>
  );
}

export default ReklamniDeskyDetail;
