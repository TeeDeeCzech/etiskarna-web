import './Homepage.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SeoHead from '../seo/SeoHead';
import tiskPlakaty from '../images/tisk_plakaty_etiskarna.avif';
import tiskArchMereni from '../images/etiskarna_tiskovy_arch_mereni.avif';
import grafika from '../images/grafika_DTP_etiskarna.avif';
import ofsetovyTisk from '../images/ofsetovy_tisk_mereni.avif';
import komplexniZpracovani from '../images/komplexni_zpracovani_tiskovin.avif';

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'eTiskarna',
  url: 'https://etiskarna.cz',
  telephone: '+420773999659',
  email: 'info@etiskarna.cz',
  description: 'Profesionální tiskárna v Praze. Vizitky, letáky, plakáty a 30+ produktů. Kalkulace do 24 hodin.',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Nám. Jiřího z Lobkovic 16',
    addressLocality: 'Praha 3',
    postalCode: '130 00',
    addressCountry: 'CZ',
  },
  areaServed: {
    '@type': 'Country',
    name: 'CZ',
  },
};

function Homepage() {
  return (
    <>
      <SeoHead page="home" />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            alt="Mísení CMYK tiskových barev na texturovaném papíru – tiskové studio eTiskarna"
            className="hero-bg-img"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkigXjCbbQjPGTMX8wcfWXAs2c7deLpTmhP96nJkA5t8MPnpSK3XNI0_oaT96CFZyy4M-SCp84ofi3mh4eucNGUm4Ky_W9Jk7RCwVwc6XIhsgiACQZVDK2i9uCahQzm1ewDes5yA1MQZ97t-q7Hasn5-GhD34PW_kd_VqQMHFj_7vo8wtPUTEtxBKKPzrpJogQgxtwjGX08Mxs2jkvOhVAeIdP8JeEHiOTBkWygzwr0GS4Gp5ojLtljQh2GlQBgeAlBpX-4osNBlU"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl">
          <span className="section-label text-on-surface font-semibold font-manrope text-[11px] tracking-[0.3em]">
            Every pixel, every drop matters.
          </span>
          <h1 className="text-[6rem] leading-[0.9] font-extrabold tracking-tighter mb-8 text-[#000000]">
            Precizní tisk<br />Praha.
          </h1>
          <p className="text-xl text-on-surface-variant max-w-lg mb-12 font-light leading-relaxed bg-surface/20 backdrop-blur-[2px] p-2 -ml-2">
            Vytváříme tiskoviny, které definují standardy. Od minimalistických vizitek po velkoformátové umělecké tisky, s důrazem na haptický zážitek a vizuální čistotu.
          </p>
          <div className="flex gap-4">
            <Link to="/katalog" className="hero-primary-btn">Prozkoumat produkty</Link>
            <Link to="/poptavka" className="hero-outline-btn">Nezávazná poptávka</Link>
          </div>
        </div>
      </section>

      {/* Bento Gallery Section */}
      <section className="px-32 py-32 bg-surface-container-low">
        <div className="grid grid-cols-12 gap-8 max-w-[1920px] mx-auto">
          <div className="col-span-12 md:col-span-8 flex flex-col justify-end mb-16">
            <h2 className="text-5xl font-black tracking-tighter uppercase mb-6">
              Preciznost<br />v každém detailu
            </h2>
            <p className="text-on-surface-variant max-w-md font-manrope text-sm">
              Pracujeme s top strojním vybavením a nejkvalitnějšími materiály dostupnými na trhu, protože na každém detailu záleží...
            </p>
          </div>
          {/* Main Featured Item */}
          <div className="col-span-12 md:col-span-7 bg-surface-container-lowest p-0 group overflow-hidden relative">
            <img
              alt="Makro detail prémiové vizitky s texturovaným papírem a černou serifovou typografií"
              className="w-full aspect-[4/3] object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuArq2vV_STYU7GUxIUjJKABqtiQI1JFKI4ho1I5yfshjbFgIqsa2qu3Gnn_MSdhpUed_ZhWJN5hBjiOZWwSSwhAv1PSqOR8LzhwdYlsWuYPUFAepswu3_4GX_ShE9OmaRGfU3ezMwj1ab1Cbo8cC1NWESEti_WvGA2D1jSUlLdKnJUXi8GnnkYJTkQn-kEHy3l_t-wEO8mPqMyKqGEuc8_FyltBsHOPUXID5REcvFwmajudakc0vdBExspgRqnpLZEMO6jf2RBtVXA"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
            <div className="absolute bottom-8 left-8">
              <span className="bg-primary text-on-primary px-4 py-1 text-[10px] font-bold uppercase tracking-widest">
                Premium Stock
              </span>
            </div>
          </div>
          {/* Secondary Item */}
          <div className="col-span-12 md:col-span-5 flex flex-col gap-8">
            <div className="bg-surface-container-lowest aspect-square overflow-hidden group">
              <img
                alt="Tisk plakátů eTiskarna"
                className="w-full h-full object-cover scale-110 group-hover:scale-100 grayscale hover:grayscale-0 transition-all duration-700"
                src={tiskPlakaty}
              />
            </div>
            <div className="p-8 bg-primary text-on-primary h-full flex flex-col justify-between">
              <h3 className="text-2xl font-bold uppercase tracking-tight">Katalog produktů</h3>
              <p className="text-surface-variant text-xs tracking-wider font-light mb-8">
                Vše na jednom místě, od vizitek po venkovní bannery najdete zde.
              </p>
              <Link to="/katalog" className="text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 hover:gap-4 transition-all">
                Zobrazit vše <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </Link>
            </div>
          </div>
          {/* Tertiary Item */}
          <div className="col-span-12 md:col-span-4 bg-surface-container-lowest p-12 flex flex-col justify-center border border-outline-variant/30">
            <span className="text-primary font-black text-4xl mb-4">0.01</span>
            <h4 className="font-manrope font-bold uppercase text-xs tracking-widest mb-4">Milimetrová přesnost</h4>
            <p className="text-on-surface-variant text-xs leading-relaxed">
              Naše tiskové stroje jsou kalibrovány denně, aby byla zajištěna absolutní věrnost barev a výjimečně přesný soutisk.
            </p>
          </div>
          <div className="col-span-12 md:col-span-8 bg-surface-container-lowest aspect-[16/6] overflow-hidden group">
            <img
              alt="Měření barevné přesnosti tiskového archu v eTiskarna Praha"
              className="w-full h-full object-cover grayscale hover:grayscale-0 scale-100 hover:scale-105 transition-all duration-700"
              src={tiskArchMereni}
            />
          </div>
        </div>
      </section>

      {/* Signature Section: Liquid Detail */}
      <section className="py-40 px-32 flex flex-col items-center text-center bg-surface">
        <div className="max-w-2xl">
          <span className="material-symbols-outlined text-6xl font-extralight text-primary mb-8">water_drop</span>
          <h2 className="text-4xl font-bold tracking-tight uppercase mb-8">Plynulost v každém tahu</h2>
          <p className="text-lg text-on-surface-variant font-light leading-relaxed mb-12">
            Náš proces není jen o barvě na papíře. Je to alchymie mezi vizí a materiálem. Používáme pigmentové inkousty, které se vpíjejí do struktury papíru a vytvářejí hloubku.
          </p>
          <div className="h-px w-24 bg-outline-variant mx-auto"></div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 w-full">
        <div className="service-card group bg-surface-container">
          <img
            alt="Grafika a DTP"
            className="service-card-img group-hover:grayscale-0 transition-all duration-700"
            src={grafika}
          />
          <div className="service-card-overlay"></div>
          <div className="service-card-content">
            <h3 className="service-card-title">Grafika a předtisková příprava</h3>
            <p className="service-card-subtitle">Kreativa, DTP, produkce</p>
          </div>
        </div>
        <div className="service-card group bg-surface-container-high">
          <img
            alt="Ofsetový tisk"
            className="service-card-img group-hover:grayscale-0 transition-all duration-700"
            src={ofsetovyTisk}
          />
          <div className="service-card-overlay"></div>
          <div className="service-card-content">
            <h3 className="service-card-title">Tisk a dokončující zpracování</h3>
            <p className="service-card-subtitle">Ofsetový a digitální tisk, finishing</p>
          </div>
        </div>
        <div className="service-card group bg-surface-container-highest">
          <img
            alt="Komplexní zpracování tiskovin"
            className="service-card-img group-hover:grayscale-0 transition-all duration-700"
            src={komplexniZpracovani}
          />
          <div className="service-card-overlay"></div>
          <div className="service-card-content">
            <h3 className="service-card-title">Komplexní služby</h3>
            <p className="service-card-subtitle">Kompletace, rozesílání, doprava</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Homepage;
